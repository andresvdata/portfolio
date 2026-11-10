// @ts-check
import { defineConfig } from 'astro/config';

/**
 * GitHub Pages URL handling
 * -------------------------
 * In GitHub Actions, GITHUB_REPOSITORY is "owner/repo".
 *  - repo named "<owner>.github.io"  -> served at https://<owner>.github.io/        (base "/")
 *  - any other repo name             -> served at https://<owner>.github.io/<repo>/ (base "/<repo>")
 * Locally (npm run dev) there is no GITHUB_REPOSITORY, so base is "/".
 * Override with SITE_URL / BASE_PATH if you use a custom domain.
 */
const [envOwner, envRepo] = (process.env.GITHUB_REPOSITORY ?? '').split('/');
const owner = (envOwner || 'andresvdata').toLowerCase();
const isUserSite = envRepo?.toLowerCase() === `${owner}.github.io`;

const site = process.env.SITE_URL ?? `https://${owner}.github.io`;
const base = process.env.BASE_PATH ?? (envRepo && !isUserSite ? `/${envRepo}` : '/');

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  build: { format: 'directory' },
  compressHTML: true,
});
