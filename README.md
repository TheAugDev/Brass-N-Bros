# Brass N Bros — Website

Brass N Bros is a small static website for the Brass N Bros community: educational firearm content, an academy of videos, and an official shop.

This repository contains the static site source (HTML, CSS, and JS) and a lightweight assets folder for images, styles, and scripts.

## Quick start

1. Clone the repository.
2. Open the project folder in your editor (VS Code recommended).
3. Open `index.html` in a browser or run a simple local server for a better experience.

Local server (PowerShell + Python):

```powershell
python -m http.server 8000
# then open http://localhost:8000
```

Local development (npm)

If you use Node.js, the repo includes a minimal `package.json` with convenient npx-based scripts that avoid global installs. From the repository root run:

```powershell
# start with http-server (recommended for static files)
npm run start

# or use serve (alternative)
npm run serve

# or run a live-reload server if you have it available
npm run live
```

Notes:
- These scripts use `npx` to run small static servers. The first time you run them, npx may download a small package.
- If you prefer a global install, you can use `npm i -g http-server` and then run `http-server -p 8000` directly.

## Repo structure

Root contains the main pages:

- `index.html` — Home (landing page)
- `academy.html` — Video library / course hub
- `shop.html` — Merchandise and affiliate store
- `about.html` — Mission & story
- `contact.html` — Contact, newsletter signup, social links

Assets live in `assets/`:

- `assets/css/style.css` — Base stylesheet (plus Tailwind via CDN in-page)
- `assets/js/main.js` — Placeholder for interactive scripts
- `assets/img/` — Place images, logos, and favicons here (see README inside the folder)

## Development notes

- Pages are static HTML and link to `assets/css/style.css` and `assets/js/main.js`.
- Tailwind is loaded from CDN in each page for quick styling.
- If you add images, optimize them before committing (try to keep under ~200 KB when possible).

## Contributing

1. Fork the repo and open a PR with a short description of changes.
2. Keep assets optimized and avoid committing large media files unless necessary.

## License

See `LICENSE` in the repository root.

---

If you'd like, I can also:
- Move inline <style> blocks into `assets/css/style.css` and clean the HTML files.
- Add a basic npm dev script and Live Server configuration.
- Add favicons and a real `logo.svg` in `assets/img/`.

## Continuous deployment (GitHub Pages)

This repo includes a GitHub Actions workflow that will deploy the site to the `gh-pages` branch whenever you push to `main`.

Notes:
- The workflow uses the `JamesIves/github-pages-deploy-action` action. No additional secrets are required — it uses the built-in `GITHUB_TOKEN`.
- After the first successful run, enable GitHub Pages in the repository settings and point it to the `gh-pages` branch (root).

## Favicons

To generate PNG favicons (16x16, 32x32, and 180x180) from the included `assets/img/favicon.svg`, run:

```powershell
npm install
npm run gen:icons
```

This will create `assets/img/favicon-16.png`, `assets/img/favicon-32.png`, and `assets/img/favicon-180.png`.

