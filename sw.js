/* XENOS NOTES — service worker
 * Strategy: network-first for everything same-origin (this site gets
 * updated with new books/fixes often, so a visitor with a connection
 * should always see the latest version) with a cache fallback for when
 * there's no connection at all. The "app shell" (HTML/CSS/JS, not the book
 * content itself) is precached on install so the site loads offline even
 * on a first-ever offline visit; individual books/data files are cached
 * opportunistically the first time each one is actually fetched — no need
 * to force-download the whole ~1.4MB library up front.
 *
 * Bump CACHE_VERSION whenever you want to force every visitor's old cache
 * to be dropped (not usually necessary — network-first already means
 * everyone gets fresh content whenever they're online).
 */
const CACHE_VERSION = 'xenos-v1';

const APP_SHELL = [
  '/',
  '/index.html',
  '/style.css',
  '/app.js',
  '/auth.js',
  '/game.js',
  '/arabic-app.js',
  '/favicon.svg',
  '/manifest.json',
  '/data/names-of-allah.js',
  '/data/huroof.js',
  '/data/arabic-app-data.js',
  '/data/mascot-sprites.js',
  '/data/daily-quotes.js',
  '/data/supabase-config.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) =>
      // addAll fails entirely if any single request 404s — go one at a time
      // and ignore individual failures so one missing/renamed file can't
      // block the whole app shell from being cached.
      Promise.all(
        APP_SHELL.map((url) =>
          cache.add(url).catch(() => {})
        )
      )
    ).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(
        names.filter((n) => n !== CACHE_VERSION).map((n) => caches.delete(n))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  const isSameOrigin = url.origin === self.location.origin;

  if (isSameOrigin) {
    // Network-first, cache fallback, and cache whatever we successfully
    // fetch so it's available next time there's no connection.
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE_VERSION).then((cache) => cache.put(req, copy));
          return res;
        })
        .catch(() => caches.match(req).then((cached) => cached || caches.match('/index.html')))
    );
  } else if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    // Fonts rarely change — cache-first is fine and saves a round-trip.
    event.respondWith(
      caches.match(req).then((cached) => {
        if (cached) return cached;
        return fetch(req).then((res) => {
          const copy = res.clone();
          caches.open(CACHE_VERSION).then((cache) => cache.put(req, copy));
          return res;
        }).catch(() => cached);
      })
    );
  }
  // Other cross-origin requests (Supabase, Discord CDN avatars, etc.) are
  // left to the network as normal — they need to be live anyway.
});
