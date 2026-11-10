# Publishing the site on GitHub Pages

Nothing has been pushed or deployed. These steps are for you to run when you are ready.

## 1. Create a new repository

Do not reuse `andresvdata/portfolio`. On GitHub create a new, empty repository (no README, no license). Two sensible names:

| Repository name | Site address | Notes |
| --- | --- | --- |
| `andresvdata.github.io` | `https://andresvdata.github.io/` | Your main site. The old portfolio keeps working at `/portfolio/` because it lives in its own repository. |
| `portfolio-2026` (any name) | `https://andresvdata.github.io/portfolio-2026/` | A separate address, handy for trying it before you switch. |

You do not need to change any setting for either name: `astro.config.mjs` reads the repository name during the build and picks the right base path.

## 2. Push the code

From this folder:

```bash
git remote add origin https://github.com/andresvdata/<repository-name>.git
git push -u origin main
```

The repository already has an initial commit on `main`.

## 3. Turn on Pages

On GitHub: **Settings, Pages, Build and deployment, Source: GitHub Actions**. Then open the **Actions** tab. The "Deploy to GitHub Pages" workflow runs on every push to `main` (you can also run it by hand). When it turns green, the site is live at the address above.

## 4. Fill in the two links

Edit `src/config/site.ts`:

- `resumeUrl`: your Google Drive link (Share, "Anyone with the link", Viewer).
- `repoUrl`: the new repository's address.

Commit and push. The site updates in about a minute.

## Run it locally first

```bash
npm install
npm run dev        # http://localhost:4321, with drafts visible
npm run build && npm run preview    # exactly what will be published
```

Needs Node 20 or newer (22 recommended).

## If something looks wrong

- **Blank page or missing styles:** Pages source is not set to "GitHub Actions".
- **Links go to the wrong path:** the repository name is not what the workflow sees. Set `SITE_URL` and `BASE_PATH` in the workflow's `env:` block.
- **Build fails:** read the message; it names the file and field. A new content file with a missing required field is the usual cause.
- **Custom domain:** add a `public/CNAME` file with the domain, set the domain in Pages settings, and set `SITE_URL` and `BASE_PATH: /` in the workflow.
