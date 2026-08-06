/* XENOS NOTES — Supabase config
 * Fill in your own project's values below, then the "Sign in" button in
 * the top bar activates automatically (it stays hidden until this is set).
 * See SETUP-LOGIN.md in the repo root for the full step-by-step:
 *   1. Create a free project at https://supabase.com
 *   2. Project Settings → API → copy "Project URL" and the "anon public" key
 *   3. Paste them below
 *   4. Auth → Providers → enable Discord and Google (SETUP-LOGIN.md has
 *      the exact redirect URI + where to get each provider's client ID/secret)
 *   5. SQL Editor → run the schema in SETUP-LOGIN.md to create the
 *      quiz_progress table
 */
window.XENOS_SUPABASE = {
  url: 'YOUR_SUPABASE_PROJECT_URL',   // e.g. 'https://abcdefghijk.supabase.co'
  anonKey: 'YOUR_SUPABASE_ANON_KEY',  // the public "anon" key — safe to expose client-side
};
