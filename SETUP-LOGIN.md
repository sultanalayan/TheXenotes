# Setting up Discord/Google sign-in

The site is fully static (GitHub Pages), so real login needs a backend
somewhere to hold OAuth secrets and store data. This uses **Supabase**
(free tier) — it has built-in Discord *and* Google sign-in, plus a
database, and needs zero servers of your own.

Everything on the site already checks for this being configured and
hides the "Sign in" button until you finish these steps — so there's no
rush and nothing breaks in the meantime.

---

## 1. Create a Supabase project (free)

1. Go to **[supabase.com](https://supabase.com)** → sign up (you can use your GitHub account) → **New project**.
2. Pick any name/region, set a database password (save it somewhere), wait ~2 min for it to spin up.
3. Once it's ready: **Project Settings → API**. Copy two values:
   - **Project URL** (looks like `https://abcdefghijk.supabase.co`)
   - **anon public** key (a long string — this one is *safe* to put in public client-side code, it's designed for that)
4. Open `data/supabase-config.js` in the repo and paste them in:
   ```js
   window.XENOS_SUPABASE = {
     url: 'https://abcdefghijk.supabase.co',
     anonKey: 'eyJhbGciOi...',
   };
   ```

At this point the "Sign in" button will appear on the site, but the two
provider buttons won't work yet — that's steps 2 and 3.

---

## 2. Enable Discord sign-in

1. Go to **[discord.com/developers/applications](https://discord.com/developers/applications)** → **New Application** → name it (e.g. "Xenos Notes Login").
2. Left sidebar → **OAuth2** → copy the **Client ID** and **Client Secret** (click "Reset Secret" if one isn't shown yet).
3. Still on the OAuth2 page → **Redirects** → **Add Redirect** → paste this exact URL (from your Supabase project):
   ```
   https://abcdefghijk.supabase.co/auth/v1/callback
   ```
   (use *your* actual Project URL from step 1, same domain, just add `/auth/v1/callback`)
4. In **Supabase dashboard → Authentication → Providers → Discord**: toggle it on, paste the Client ID and Client Secret from step 2, save.

---

## 3. Enable Google sign-in

1. Go to **[console.cloud.google.com](https://console.cloud.google.com)** → create a project (or use an existing one).
2. **APIs & Services → OAuth consent screen** → choose "External" → fill in the app name (e.g. "Xenos Notes") and your email → save through the steps (you don't need to submit for verification for a small personal-use app).
3. **APIs & Services → Credentials → Create Credentials → OAuth client ID** → Application type: **Web application**.
4. Under **Authorized redirect URIs**, add:
   ```
   https://abcdefghijk.supabase.co/auth/v1/callback
   ```
   (same Supabase callback URL as step 2)
5. Copy the **Client ID** and **Client Secret** it gives you.
6. In **Supabase dashboard → Authentication → Providers → Google**: toggle it on, paste the Client ID and Client Secret, save.

---

## 4. Create the quiz-progress table

In **Supabase dashboard → SQL Editor → New query**, paste and run this once:

```sql
create table quiz_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) not null,
  book_slug text not null,
  section_id text not null,
  correct int not null,
  total int not null,
  updated_at timestamptz default now(),
  unique (user_id, book_slug, section_id)
);

alter table quiz_progress enable row level security;

create policy "Users manage their own progress"
  on quiz_progress for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- Needed because "Automatically expose new tables" is off (the safer
-- setting) — this explicitly exposes just this one table to signed-in
-- users via the Data API, instead of exposing every new table by default.
grant usage on schema public to authenticated;
grant select, insert, update, delete on public.quiz_progress to authenticated;
```

This lets each signed-in visitor read and write *only their own* quiz
rows — nobody can see or touch anyone else's scores. It works whether
"Automatically expose new tables" is on or off, since the `grant`
statements make the access explicit either way.

---

## 5. Add your production redirect URL

One more thing in **Supabase dashboard → Authentication → URL Configuration**:
add `https://thexenotes.com` (and `https://thexenotes.com/**`) to the
**Redirect URLs** allow-list, so sign-in works on the live site and not
just localhost.

---

## What you get once this is done

- A little "Sign in" pill in the top bar → opens "Continue with Discord" / "Continue with Google".
- Once signed in, it shows the person's avatar + first name instead.
- Every quiz they complete is saved (`quiz_progress` table) and a
  "⭐ Your best: X / Y" badge shows above that quiz next time they visit.
- You can see everyone who's signed up any time in **Supabase dashboard
  → Authentication → Users** — no extra building needed for that.
- **The book content itself is gated** behind Discord sign-in + being a
  member of the server (see below) — everyone can still browse the
  Names of Allah and Arabic Letters sections without signing in.

Not built yet, but easy to add later if you want it: a public
leaderboard page, or wiring the existing "Winners" corner to pull from
real quiz data instead of the manually-curated list it uses today.

---

## 6. The Discord-membership gate (already configured)

`data/supabase-config.js` has two extra fields controlling this:

```js
requireDiscordMembership: true,   // set false to turn the gate off entirely
discordGuildId: '...',            // your server's ID
discordInviteUrl: 'https://discord.gg/...',
```

How it works: Discord sign-in requests the `guilds` scope, and right
after sign-in the site checks the person's guild list against
`discordGuildId`. Since Supabase doesn't keep that Discord token around
across page reloads, the verified result is cached per-user in
`localStorage` — so it's only re-checked against Discord's API on a
fresh sign-in, not on every visit. Google sign-in can't satisfy this
gate (there's no way to verify Discord membership from a Google
account), so it stays available for quiz-score saving but won't unlock
the content.

**Heads up on what "gate" actually means here**: this is a static site
with no server, so this is enforced in the browser (a "soft" gate) —
it stops casual browsing without joining the server, but the book
content is technically still reachable by someone who deliberately
inspects the site's own JS files. Fine for "join the Discord to read
this," not appropriate if the content ever needs to be truly private.
