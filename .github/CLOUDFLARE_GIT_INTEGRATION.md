# Cloudflare Workers Builds (Git Integration) Setup

This project is a Cloudflare **Workers** application (deployed via `wrangler deploy` with static assets), built and deployed automatically by **Workers Builds** — Cloudflare's native Git integration. GitHub Actions tracks the production URLs in the repository environment, but it does not deploy the Worker itself.

> **Note:** Despite the project living in the Workers & Pages dashboard, this is *not* a Cloudflare Pages project. The Workers Builds CI pipeline only provisions an API token scoped for Workers deployments, so the deploy command must be `npx wrangler deploy`, never `npx wrangler pages deploy` (that fails with an authentication error).

## Benefits of Workers Builds

- **Automatic Deployments**: Automatically deploys on every push to `main`
- **Preview Deployments**: Automatic preview builds for every pull request (via `wrangler versions upload`)
- **Build Logs**: View build and deployment logs directly in the Cloudflare Dashboard
- **Deployment History**: Track all deployments with rollback capability
- **Zero Configuration**: No workflow files needed

## Project Configuration

- Repository: `TVW96/claude-ai-resume`
- Production branch: `main`
- Build command: (none needed)
- **Deploy command (production branch): `npx wrangler deploy`**
- Static assets are served directly from the repo root via the `[assets]` block in `wrangler.toml` — no entry-point script required

## Verify Deployment

Once complete, the site is available at your Workers subdomain, e.g. `https://claude-ai-resume.troyvw96.workers.dev`.

## Production Environment

Both this Cloudflare Worker and Netlify deploy from the same `main` branch and are tracked under a single GitHub `production` environment (Settings → Environments → `production`) so both live URLs are visible from the repository. The `Playwright Tests` workflow records one production deployment entry per platform after tests pass on `main`, while the actual deployments are still driven entirely by each platform's own Git integration.

## Preview Deployments

When using Workers Builds:
- Every pull request automatically gets a preview build (`wrangler versions upload`)
- Preview deployments are managed from the Cloudflare Dashboard
- No additional configuration needed

## Custom Domains

After setup, you can add custom domains:
1. Go to your project in Cloudflare Dashboard → Workers & Pages
2. Click "Domains & Routes"
3. Add a custom domain (e.g., `resume.troywashington.com`)
4. Follow DNS configuration instructions
5. Cloudflare automatically provisions SSL certificate

## Rollback Deployments

1. Go to Cloudflare Dashboard → Workers & Pages
2. Select your project
3. View deployment history
4. Click on a previous deployment
5. Click "Rollback to this deployment"

## Monitoring and Analytics

Once deployed, you can:
- View analytics in Cloudflare Dashboard
- Monitor site performance
- Track visitor statistics
- View deployment logs and history

## Support and Troubleshooting

- **Pages API / “Project not found” errors:** This repository is a Cloudflare Worker, not a Cloudflare Pages project. Do not use `cloudflare/pages-action` or `npx wrangler pages deploy`; deploy with Workers Builds or `npx wrangler deploy` instead.
- **Authentication error on deploy:** Deploy command must be `npx wrangler deploy`, not `npx wrangler pages deploy` (Workers Builds tokens aren't scoped for the Pages API)
- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
- [Workers Static Assets](https://developers.cloudflare.com/workers/static-assets/)
- [Workers Builds (Git Integration)](https://developers.cloudflare.com/workers/ci-cd/builds/)
