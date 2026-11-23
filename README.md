# zhengyutong99.github.io

Personal website of Cheng-Yu (Jason) Tung — static HTML/CSS/JS, no build step.

- Edit text in `js/content.js` (each field has `en` and `zh`).
- Layout and styling: `index.html`, `css/style.css`, `js/main.js`.
- Résumé: edit `resume.html`, then print it to `assets/Cheng-Yu_Tung_Resume.pdf`
  (Chrome → Print → Save as PDF, margins "Default", headers/footers off).

Settings in `js/content.js`:

- `news` — dated "Latest" items under the hero; keep 3–5, newest first.
- `glance` — the "At a glance" card for recruiters.
- `profile.calendar` — booking link for the coffee-chat button (empty = pre-filled email).
- `profile.workAuth` — work authorization line; hidden while `null`.
- `analytics.cloudflareToken` — Cloudflare Web Analytics token (empty = no tracking).
- "Recently on GitHub" is fetched live from the GitHub API (cached 30 min per visit).

After changing CSS or JS, bump the `?v=` number on those files in `index.html` so visitors don't get a cached copy.

Preview locally:

```bash
python3 -m http.server 8642
```
