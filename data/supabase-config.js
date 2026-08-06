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
  url: 'https://tbuchyimzduxcefgerew.supabase.co',
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRidWNoeWltemR1eGNlZmdlcmV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU5NjkyNDIsImV4cCI6MjEwMTU0NTI0Mn0.a6BPacay2EzPbDv1_e6cu2WWr2F-wMg4tL1-jEUc3QY',
};
