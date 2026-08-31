# Setting up Cast Clash (the cast fighting game)

Cast Clash is a tiny 1-on-1 fighting game between the site's character
cast — pick two fighters, click/tap (or press Space) to attack, first
to 0 HP loses. It reuses the same Supabase project the rest of the
site already uses for login/progress, so most of this is already done
if you've been through `SETUP-LOGIN.md`.

Everything works fine with zero setup below — matches just won't be
recorded anywhere (no running scores, no Discord posts) until you do
these two steps.

---

## 1. Create the scores table in Supabase

**Supabase dashboard → SQL Editor → New query**, paste this in, run it:

```sql
create table if not exists cast_scores (
  character_id text primary key,
  score integer not null default 500,
  wins integer not null default 0,
  losses integer not null default 0,
  updated_at timestamptz not null default now()
);

create table if not exists cast_matches (
  id uuid primary key default gen_random_uuid(),
  winner_id text not null,
  loser_id text not null,
  winner_score integer not null,
  loser_score integer not null,
  created_at timestamptz not null default now()
);

alter table cast_scores enable row level security;
alter table cast_matches enable row level security;

-- Open read/write, no sign-in required — this is a casual leaderboard,
-- not anything sensitive. Anyone can technically write a fake score by
-- calling the API directly; if that ever becomes a real problem, swap
-- these policies for ones that require auth.uid() and log matches
-- server-side instead.
create policy "cast_scores readable by anyone" on cast_scores for select using (true);
create policy "cast_scores writable by anyone" on cast_scores for all using (true) with check (true);
create policy "cast_matches readable by anyone" on cast_matches for select using (true);
create policy "cast_matches insertable by anyone" on cast_matches for insert with check (true);
```

That's it — no code changes needed here, `cast-game.js` already talks
to `cast_scores`/`cast_matches` using the same `window.XENOS_SUPABASE`
config as the rest of the site.

---

## 2. Post match results to Discord (optional)

1. In Discord, open the server → the channel you want results posted
   to (e.g. `#general`) → channel settings (gear icon) → **Integrations
   → Webhooks → New Webhook**.
2. Copy the **Webhook URL**.
3. Open `data/discord-webhook-config.js` and paste it in:
   ```js
   window.XENOS_DISCORD_WEBHOOK = {
     url: 'https://discord.com/api/webhooks/XXXXXXXXXX/YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY',
   };
   ```

**Heads up:** this file ships in the public site bundle, so that URL is
visible to anyone who views source — they could post messages to that
channel as the webhook. If that's ever abused, delete the webhook in
Discord and paste a fresh one in.

---

## Roster / follow-up

Right now every fighter is one of the six deployed characters (each
shown with their companion in the same artwork, since that's the art
that already exists) — Doc.Azuz, Raerae, Queen Lulu, Ra'ad, Pika, CJ.
True "pet vs pet" fights (Juju alone vs Essssssss alone, etc.) would
need standalone cutouts of each companion separated from their
character, which don't exist yet — that's a natural next step if
wanted.
