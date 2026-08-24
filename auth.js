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

  const streakBadgeEl = document.getElementById('auth-streak-badge');

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
      if (streakBadgeEl && window.XenosAuth) {
        window.XenosAuth.getCurrentStreak().then(streak => {
          if (streak > 0) {
            streakBadgeEl.textContent = `🔥 ${streak}-day streak`;
            streakBadgeEl.style.display = '';
          } else {
            streakBadgeEl.style.display = 'none';
          }
        });
      }
    } else {
      labelEl.textContent = 'Sign in';
      avatarEl.textContent = '👤';
      widget.classList.remove('is-signed-in');
      signedOutEl.style.display = '';
      signedInEl.style.display = 'none';
      if (streakBadgeEl) streakBadgeEl.style.display = 'none';
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

  // ─── Per-user quiz progress, reading progress, bookmarks, streaks, and
  // the leaderboard — all called from app.js. ───
  window.XenosAuth = {
    async getCurrentUser() {
      const { data: { session } } = await sb.auth.getSession();
      return session ? session.user : null;
    },
    async saveQuizResult(bookSlug, sectionId, correct, total) {
      const { data: { session } } = await sb.auth.getSession();
      if (!session) return;
      const meta = session.user.user_metadata || {};
      const displayName = meta.full_name || meta.name || meta.user_name || (session.user.email || '').split('@')[0] || 'Anonymous';
      const avatarUrl = meta.avatar_url || meta.picture || null;
      const base = {
        user_id: session.user.id, book_slug: bookSlug, section_id: sectionId,
        correct, total, updated_at: new Date().toISOString(),
      };
      // display_name/avatar_url are an optional second migration (needed
      // only for the leaderboard to show real names) — if those columns
      // don't exist yet, retry without them so quiz-saving itself never
      // breaks on account of a leaderboard feature the site owner hasn't
      // finished setting up.
      const { error } = await sb.from('quiz_progress')
        .upsert({ ...base, display_name: displayName, avatar_url: avatarUrl }, { onConflict: 'user_id,book_slug,section_id' });
      if (error) {
        await sb.from('quiz_progress').upsert(base, { onConflict: 'user_id,book_slug,section_id' });
      }
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

    // ─── Reading progress ───
    async markSectionRead(bookSlug, sectionId) {
      const { data: { session } } = await sb.auth.getSession();
      if (!session) return;
      await sb.from('reading_progress').upsert({
        user_id: session.user.id, book_slug: bookSlug, section_id: sectionId,
        read_at: new Date().toISOString(),
      }, { onConflict: 'user_id,book_slug,section_id' });
    },
    async getReadSections(bookSlug) {
      const { data: { session } } = await sb.auth.getSession();
      if (!session) return [];
      const { data } = await sb.from('reading_progress').select('section_id').eq('user_id', session.user.id).eq('book_slug', bookSlug);
      return (data || []).map(r => r.section_id);
    },
    async getAllReadingProgress() {
      const { data: { session } } = await sb.auth.getSession();
      if (!session) return [];
      const { data } = await sb.from('reading_progress').select('book_slug,section_id,read_at').eq('user_id', session.user.id);
      return data || [];
    },

    // ─── Bookmarks (section-level for now — bullet_index is reserved for
    // a future finer-grained "bookmark this exact point" feature) ───
    async addBookmark(bookSlug, sectionId, note) {
      const { data: { session } } = await sb.auth.getSession();
      if (!session) return null;
      const { data, error } = await sb.from('bookmarks')
        .insert({ user_id: session.user.id, book_slug: bookSlug, section_id: sectionId, note: note || null })
        .select().single();
      return error ? null : data;
    },
    async removeBookmark(id) {
      const { data: { session } } = await sb.auth.getSession();
      if (!session) return;
      await sb.from('bookmarks').delete().eq('id', id).eq('user_id', session.user.id);
    },
    async getBookmarks() {
      const { data: { session } } = await sb.auth.getSession();
      if (!session) return [];
      const { data } = await sb.from('bookmarks').select('*').eq('user_id', session.user.id).order('created_at', { ascending: false });
      return data || [];
    },
    async findBookmark(bookSlug, sectionId) {
      const { data: { session } } = await sb.auth.getSession();
      if (!session) return null;
      const { data } = await sb.from('bookmarks').select('id')
        .eq('user_id', session.user.id).eq('book_slug', bookSlug).eq('section_id', sectionId)
        .is('bullet_index', null).maybeSingle();
      return data ? data.id : null;
    },
    async updateBookmarkNote(id, note) {
      const { data: { session } } = await sb.auth.getSession();
      if (!session) return false;
      const { error } = await sb.from('bookmarks').update({ note: note || null }).eq('id', id).eq('user_id', session.user.id);
      return !error;
    },

    // ─── Streak — consecutive calendar days with any quiz or reading
    // activity, ending today (or yesterday, if nothing logged yet today).
    // Dates are compared as UTC calendar days (the timestamp's own date),
    // not the visitor's local timezone — close enough for a streak counter,
    // and avoids needing a timezone round-trip per check. ───
    async getCurrentStreak() {
      const { data: { session } } = await sb.auth.getSession();
      if (!session) return 0;
      const [quizRes, readRes] = await Promise.all([
        sb.from('quiz_progress').select('updated_at').eq('user_id', session.user.id),
        sb.from('reading_progress').select('read_at').eq('user_id', session.user.id),
      ]);
      const days = new Set();
      (quizRes.data || []).forEach(r => days.add(r.updated_at.slice(0, 10)));
      (readRes.data || []).forEach(r => days.add(r.read_at.slice(0, 10)));
      if (!days.size) return 0;
      const fmt = (d) => d.toISOString().slice(0, 10);
      let cursor = new Date();
      if (!days.has(fmt(cursor))) cursor = new Date(cursor.getTime() - 86400000);
      let streak = 0;
      while (days.has(fmt(cursor))) {
        streak++;
        cursor = new Date(cursor.getTime() - 86400000);
      }
      return streak;
    },

    // ─── Leaderboard — aggregated client-side from every visible
    // quiz_progress row (SELECT is open to any signed-in user for exactly
    // this reason; see the migration). Requires the display_name/avatar_url
    // columns from the second migration — returns {error} instead of throwing
    // if they're missing, so callers can show a friendly "not set up yet"
    // state instead of a broken page. ───
    async getLeaderboard(limit) {
      const { data, error } = await sb.from('quiz_progress')
        .select('user_id,display_name,avatar_url,correct,total');
      if (error) return { error: error.message, rows: [] };
      const byUser = {};
      (data || []).forEach(r => {
        if (!byUser[r.user_id]) {
          byUser[r.user_id] = {
            user_id: r.user_id, display_name: r.display_name || 'Anonymous', avatar_url: r.avatar_url,
            totalCorrect: 0, totalQuestions: 0, sectionsCompleted: 0,
          };
        }
        const u = byUser[r.user_id];
        u.totalCorrect += r.correct;
        u.totalQuestions += r.total;
        u.sectionsCompleted += 1;
      });
      const rows = Object.values(byUser).sort((a, b) => b.totalCorrect - a.totalCorrect);
      return { error: null, rows: limit ? rows.slice(0, limit) : rows };
    },
  };
})();
