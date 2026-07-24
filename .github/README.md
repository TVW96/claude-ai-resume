# Deployment Configuration

This directory contains deployment documentation for the claude-ai-resume project.

## 📁 Contents

- **[CLOUDFLARE_GIT_INTEGRATION.md](CLOUDFLARE_GIT_INTEGRATION.md)** - Cloudflare Workers Builds (Git integration) setup
  - Native Cloudflare Workers Builds Git integration setup
  - Automatic PR preview deployments
  - Custom domains and rollback

## 🚀 Deployment Overview

This project deploys to two platforms via native Git integration:

- **Cloudflare Workers** — auto-deploys from `main` via Cloudflare Workers Builds (Git integration), running `npx wrangler deploy` to serve the static site as Worker assets. See [CLOUDFLARE_GIT_INTEGRATION.md](CLOUDFLARE_GIT_INTEGRATION.md).
- **Netlify** — auto-deploys from `main` via Netlify's Git integration, configured in [`netlify.toml`](../netlify.toml).

Both deployments are tracked under a single GitHub `production` environment (Settings → Environments → `production`), which lists both live URLs. The `Playwright Tests` workflow records the Cloudflare and Netlify production URLs after `main` branch tests pass, but the actual deployments still happen in Cloudflare and Netlify through their own Git integrations.

📖 **Full guide:** [CLOUDFLARE_GIT_INTEGRATION.md](CLOUDFLARE_GIT_INTEGRATION.md)

---

## 📋 Production Environment

**Environment Name:** `production`

**Production URLs:**
- Cloudflare Workers: `https://claude-ai-resume.troyvw96.workers.dev`
- Netlify: `https://famous-cascaron-ee40a2.netlify.app`

**Required Secrets:** None — both platforms deploy via their own native Git integration, and the GitHub Actions workflow only tracks their production URLs.

## 🔍 Monitoring Deployments

### GitHub UI
1. Repository → **Environments** → `production`
2. View both deployment URLs

### Cloudflare Dashboard
1. [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Workers & Pages**
3. Select `claude-ai-resume` project
4. View deployments, analytics, and settings

### Netlify Dashboard
1. [Netlify Dashboard](https://app.netlify.com/)
2. Select the site
3. View deploy logs and history

## 🛠️ Troubleshooting

### Cloudflare Deployment Failures
- **Pages API / “Project not found” error:** This repository deploys as a Cloudflare Worker, not a Cloudflare Pages project. Do not use `cloudflare/pages-action` or `npx wrangler pages deploy`; use Workers Builds or `npx wrangler deploy` instead.
- **Authentication error / `10000`:** Deploy command must be `npx wrangler deploy`, not `npx wrangler pages deploy` — the Workers Builds CI token is scoped only for Workers, not the Pages API
- **Missing entry-point / assets error:** Confirm `wrangler.toml` has an `[assets]` block with `directory = "."` (not a legacy `[site]` block or `pages_build_output_dir`)

### Netlify Deployment Failures
- Check build settings against [`netlify.toml`](../netlify.toml)

## 📚 Additional Resources

### Cloudflare Documentation
- [Cloudflare Workers Overview](https://developers.cloudflare.com/workers/)
- [Workers Static Assets](https://developers.cloudflare.com/workers/static-assets/)
- [Workers Builds (Git Integration)](https://developers.cloudflare.com/workers/ci-cd/builds/)

### Netlify Documentation
- [Netlify Docs](https://docs.netlify.com/)

---

**Status:** ✅ Configured and deploying via native Git integrations!
