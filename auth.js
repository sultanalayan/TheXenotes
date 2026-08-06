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

  if (!ready) {
    if (widget) widget.style.display = 'none';
    return;
  }

  const sb = window.supabase.createClient(cfg.url, cfg.anonKey);

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
      await sb.auth.signInWithOAuth({
        provider: btn.dataset.provider,
        options: { redirectTo: window.location.origin + window.location.pathname + window.location.hash },
      });
    });
  });

  signoutBtn.addEventListener('click', async () => {
    await sb.auth.signOut();
    panel.classList.remove('open');
  });

  sb.auth.onAuthStateChange((_event, session) => renderSession(session));
  sb.auth.getSession().then(({ data }) => renderSession(data.session));

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
