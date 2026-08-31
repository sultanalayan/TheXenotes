/* XENOS NOTES — Discord webhook for Cast Clash match results.
 * Fill in `url` below and match results ("🏆 1000 Lulu defeated 800
 * Doc.Azuz") post automatically to that channel. Leave it blank and the
 * game still works fine — it just skips the Discord post.
 *
 * How to get a webhook URL:
 *   1. In Discord, open the server -> the channel you want results
 *      posted to (e.g. #general) -> channel settings (gear icon)
 *   2. Integrations -> Webhooks -> New Webhook
 *   3. Copy the Webhook URL and paste it below
 *
 * SECURITY NOTE: this file ships in the public site bundle, so this URL
 * is visible to anyone who views source. Anyone with it can post
 * messages to that channel as this webhook. If that's ever abused,
 * delete the webhook in Discord (Integrations -> Webhooks -> Delete)
 * and create a fresh one.
 */
window.XENOS_DISCORD_WEBHOOK = {
  url: '', // e.g. 'https://discord.com/api/webhooks/XXXXXXXXXX/YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY'
};
