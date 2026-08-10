/* XENOS NOTES — sign-in (Discord / Google) + per-user quiz progress
 * Backed by Supabase (free tier) — the only viable way to do real login on
 * a static GitHub Pages site, since there's no server here to hold OAuth
 * secrets or a database. See data/supabase-config.js + SETUP-LOGIN.md.
 *
 * If data/supabase-config.js hasn't been filled in yet, the whole widget
 * just hides itself — nothing else on the site depends on this file. */
(function () {
  const widget = document.getElementById('auth-widget');
  const cfg = window.XENOS_SUPABASE;
  const ready = cfg && cfg.url && cfg.anonKey &&
    !cfg.url.includes('YOUR_') && !cfg.anonKey.includes('YOUR_') &&
    window.supabase && typeof window.supabase.createClient === 'function';

  // Whether the "must be a Discord-server member" gate is actually active.
  // Fails open (site behaves exactly as before) if Supabase itself isn't
  // configured yet, or a real guild ID hasn't been filled in.
  const gateEnabled = ready && !!cfg.requireDiscordMembership &&
    cfg.discordGuildId && !cfg.discordGuildId.includes('YOUR_');

  window.XenosAccess = {
    gateEnabled,
    status: gateEnabled ? 'checking' : 'granted', // 'checking' | 'granted' | 'denied'
    reason: null, // 'not-signed-in' | 'wrong-provider' | 'not-member' | 'unverified'
    inviteUrl: (cfg && cfg.discordInviteUrl) || 'https://discord.gg/Z4Rn9WwR4R',
    async retry() { await evaluateAccess(true); },
  };

  if (!ready) {
    if (widget) widget.style.display = 'none';
    return;
  }

  // flowType: 'pkce' is required here — this site uses #/... hash-based
  // routing for navigation, and Supabase's older "implicit" OAuth flow
  // returns the session as #access_token=... in the URL hash, which
  // collides with our own router reading location.hash on every load.
  // PKCE returns a ?code=... query param instead, so the two don't fight.
  const sb = window.supabase.createClient(cfg.url, cfg.anonKey, {
    auth: { flowType: 'pkce', detectSessionInUrl: true },
  });
  const MEMBER_CACHE_KEY = (uid) => `xenos-discord-member-${uid}`;

  // Surface any failed-login redirect (e.g. "access_denied") instead of
  // silently doing nothing, which is what it looked like before this fix.
  (function reportAuthRedirectError() {
    const params = new URLSearchParams(window.location.search);
    const err = params.get('error_description') || params.get('error');
    if (err) console.error('[Xenos sign-in] OAuth redirect returned an error:', err);
  })();

  function setAccess(status, reason) {
    window.XenosAccess.status = status;
    window.XenosAccess.reason = reason || null;
    window.dispatchEvent(new CustomEvent('xenos-access-changed'));
  }

  async function checkGuildMembership(providerToken) {
    try {
      const res = await fetch('https://discord.com/api/users/@me/guilds', {
        headers: { Authorization: `Bearer ${providerToken}` },
      });
      if (!res.ok) return null; // couldn't verify (expired token, rate limit, etc.)
      const guilds = await res.json();
      return Array.isArray(guilds) && guilds.some(g => g.id === cfg.discordGuildId);
    } catch (e) {
      return null;
    }
  }

  // session.provider_token (the Discord access token) is only present right
  // after a fresh OAuth redirect — Supabase doesn't persist or refresh it.
  // So: verify once, cache the result per-user, and trust the cache on
  // later visits rather than needing a fresh token every time.
  async function evaluateAccess(forceReverify) {
    if (!gateEnabled) { setAccess('granted'); return; }

    const { data: { session } } = await sb.auth.getSession();
    if (!session) { setAccess('denied', 'not-signed-in'); return; }

    const provider = session.user.app_metadata && session.user.app_metadata.provider;
    if (provider !== 'discord') { setAccess('denied', 'wrong-provider'); return; }

    const cacheKey = MEMBER_CACHE_KEY(session.user.id);
    let cached = null;
    try { cached = localStorage.getItem(cacheKey); } catch (e) {}

    if (cached === 'true' && !forceReverify) { setAccess('granted'); return; }

    if (session.provider_token) {
      const isMember = await checkGuildMembership(session.provider_token);
      if (isMember === true) {
        try { localStorage.setItem(cacheKey, 'true'); } catch (e) {}
        setAccess('granted');
        return;
      }
      if (isMember === false) {
        try { localStorage.setItem(cacheKey, 'false'); } catch (e) {}
        setAccess('denied', 'not-member');
        return;
      }
      // isMember === null: Discord API call failed — fall through to cache/unverified below
    }

    if (cached === 'false') { setAccess('denied', 'not-member'); return; }
    // No usable token on this visit (normal on a page reload) and nothing
    // cached yet — ask them to re-confirm via a fresh Discord sign-in.
    setAccess('denied', 'unverified');
  }

  const trigger = document.getElementById('auth-trigger');
  const panel = document.getElementById('auth-panel');
  const avatarEl = document.getElementById('auth-trigger-avatar');
  const labelEl = document.getElementById('auth-trigger-label');
  const signedOutEl = document.getElementById('auth-panel-signed-out');
  const signedInEl = document.getElementById('auth-panel-signed-in');
  const nameEl = document.getElementById('auth-signed-in-name');
  const signoutBtn = document.getElementById('auth-signout-btn');

  function firstName(name) { return (name || '').trim().split(/\s+/)[0] || 'Friend'; }

  function renderSession(session) {
    const user = session && session.user;
    if (user) {
      const meta = user.user_metadata || {};
      const name = meta.full_name || meta.name || meta.user_name || (user.email || '').split('@')[0] || 'Friend';
      const avatar = meta.avatar_url || meta.picture || '';
      labelEl.textContent = firstName(name);
      avatarEl.innerHTML = avatar ? `<img src="${avatar}" alt="" referrerpolicy="no-referrer" />` : '👤';
      widget.classList.add('is-signed-in');
      signedOutEl.style.display = 'none';
      signedInEl.style.display = '';
      nameEl.textContent = `Signed in as ${name}`;
    } else {
      labelEl.textContent = 'Sign in';
      avatarEl.textContent = '👤';
      widget.classList.remove('is-signed-in');
      signedOutEl.style.display = '';
      signedInEl.style.display = 'none';
    }
  }

  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = panel.classList.toggle('open');
    trigger.setAttribute('aria-expanded', String(open));
  });
  document.addEventListener('click', (e) => {
    if (panel.classList.contains('open') && !panel.contains(e.target) && e.target !== trigger) {
      panel.classList.remove('open');
      trigger.setAttribute('aria-expanded', 'false');
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') panel.classList.remove('open');
  });

  signedOutEl.querySelectorAll('[data-provider]').forEach(btn => {
    btn.addEventListener('click', async () => {
      btn.disabled = true;
      const provider = btn.dataset.provider;
      // Deliberately NOT including window.location.hash here — this site's
      // own #/... router would otherwise collide with the auth redirect.
      // Landing back on the plain home URL, already signed in, is fine.
      const options = { redirectTo: window.location.origin + window.location.pathname };
      // Extra scope so we can check server membership after Discord sign-in.
      if (provider === 'discord') options.scopes = 'identify guilds';
      await sb.auth.signInWithOAuth({ provider, options });
    });
  });

  signoutBtn.addEventListener('click', async () => {
    const { data: { session } } = await sb.auth.getSession();
    if (session) {
      try { localStorage.removeItem(MEMBER_CACHE_KEY(session.user.id)); } catch (e) {}
    }
    await sb.auth.signOut();
    panel.classList.remove('open');
  });

  sb.auth.onAuthStateChange((_event, session) => {
    renderSession(session);
    evaluateAccess();
  });
  sb.auth.getSession().then(({ data }) => {
    renderSession(data.session);
    evaluateAccess();
  });

  // ─── Per-user quiz progress, called from app.js's quiz handler ───
  window.XenosAuth = {
    async saveQuizResult(bookSlug, sectionId, correct, total) {
      const { data: { session } } = await sb.auth.getSession();
      if (!session) return;
      await sb.from('quiz_progress').upsert({
        user_id: session.user.id,
        book_slug: bookSlug,
        section_id: sectionId,
        correct, total,
        updated_at: new Date().toISOString(),
      }, { onConflict: 'user_id,book_slug,section_id' });
    },
    async getQuizResult(bookSlug, sectionId) {
      const { data: { session } } = await sb.auth.getSession();
      if (!session) return null;
      const { data } = await sb.from('quiz_progress')
        .select('correct,total,updated_at')
        .eq('user_id', session.user.id)
        .eq('book_slug', bookSlug)
        .eq('section_id', sectionId)
        .maybeSingle();
      return data || null;
    },
  };
})();
