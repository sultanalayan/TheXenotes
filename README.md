# Xenos Notes

Study notes on Islamic books and topics, hosted as a static site on GitHub Pages.

**Live site:** https://thexenotes.com/

## Structure

```
index.html          shell page (header, sidebar, main content area)
style.css            shared design system (colors, layout, animations)
app.js               shared engine — renders the library home and book viewer,
                      hash-routed (#/book/<slug>/<section>) so links are shareable
books/
  sharh-al-sunnah.js  one file per book — metadata + sections + Q&A
```

## Adding a new book

1. Copy `books/sharh-al-sunnah.js` as a template.
2. Save it as `books/<your-slug>.js`, and fill in:
   - `slug`, `title`, `subtitle`, `icon`, `tags`, `footer`, `arabicBg` (optional)
   - `sections`: an array of `{ id, icon, label, subtitle, color, intro, bullets, qanda }`
     - `color` should be one of the theme variables: `var(--burgundy)`, `var(--burgundy-light)`,
       `var(--burgundy-deep)`, `var(--emerald)`, `var(--emerald-light)`, `var(--grey-accent)`
     - a section can optionally include `sectsTable: [{ name, error, correct }, ...]` for a
       quick-reference comparison table (see the "Deviant Sects" section for an example)
3. Add one line to `index.html`, right after the existing book `<script>` tag:
   ```html
   <script src="books/your-slug.js"></script>
   ```
4. Commit and push — GitHub Pages redeploys automatically.

Nothing in `app.js` or `style.css` needs to change for a new book.

## Local preview

```
python -m http.server 8934
```
then open `http://localhost:8934/`.
