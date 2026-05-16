# Zoljargal Enkhbayar — QA Engineer Portfolio

Static Vite + React + TypeScript + Tailwind build of the portfolio. No SSR, no
backend — deploys cleanly to GitHub Pages or Vercel.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build      # outputs static site to ./dist
npm run preview    # preview the built site
```

## Deploy to GitHub Pages

### Option A — user/organization site (`sunnyzoloo.github.io`)
1. Create a repo named **`sunnyzoloo.github.io`** on GitHub.
2. Keep `base: "/"` in `vite.config.ts` (already set).
3. Push this folder to the `main` branch.
4. In **Settings → Pages**, set **Source: GitHub Actions**.
5. The included workflow (`.github/workflows/deploy.yml`) builds and publishes
   `dist/` automatically on every push to `main`.

### Option B — project page (`sunnyzoloo.github.io/<repo>/`)
1. In `vite.config.ts`, change `base: "/"` to `base: "/<repo-name>/"`.
2. Same workflow handles the rest.

Alternative manual deploy:
```bash
npm run deploy     # uses gh-pages to push dist/ to a gh-pages branch
```

## Deploy to Vercel

Just import the repo on Vercel — framework preset **Vite**, output dir `dist`.
Leave `base: "/"`.
