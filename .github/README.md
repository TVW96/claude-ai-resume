# Deployment Configuration

This directory contains deployment documentation for the claude-ai-resume project.

## 📁 Contents

- **[CLOUDFLARE_GIT_INTEGRATION.md](CLOUDFLARE_GIT_INTEGRATION.md)** - Cloudflare Pages Git integration setup
  - Native Cloudflare Pages Git integration setup
  - Automatic PR preview deployments
  - Custom domains and rollback

## 🚀 Deployment Overview

This project deploys to two platforms, both via native Git integration — no GitHub Actions workflow is involved in deployment:

- **Cloudflare Pages** — auto-deploys from `main` via Cloudflare's Git integration. See [CLOUDFLARE_GIT_INTEGRATION.md](CLOUDFLARE_GIT_INTEGRATION.md).
- **Netlify** — auto-deploys from `main` via Netlify's Git integration, configured in [`netlify.toml`](../netlify.toml).

Both deployments are tracked under a single GitHub `production` environment (Settings → Environments → `production`), which lists both live URLs. No repository or environment secrets are required for deployment since neither platform depends on GitHub Actions.

📖 **Full guide:** [CLOUDFLARE_GIT_INTEGRATION.md](CLOUDFLARE_GIT_INTEGRATION.md)

---

## 📋 Production Environment

**Environment Name:** `production`

**Production URLs:**
- Cloudflare Pages: `https://claude-ai-resume.pages.dev`
- Netlify: see [DEPLOYMENT.md](../DEPLOYMENT.md)

**Required Secrets:** None — both platforms deploy via their own native Git integration, not GitHub Actions.

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
- **Build/deploy command wrong:** Ensure the Cloudflare project's deploy command is `npx wrangler pages deploy .` (not `npx wrangler deploy`)
- **Project not found:** Confirm the project exists in the correct Cloudflare account and the name matches exactly

### Netlify Deployment Failures
- Check build settings against [`netlify.toml`](../netlify.toml)

## 📚 Additional Resources

### Cloudflare Documentation
- [Cloudflare Pages Overview](https://developers.cloudflare.com/pages/)
- [Git Integration](https://developers.cloudflare.com/pages/platform/git-integration/)
- [Build Configuration](https://developers.cloudflare.com/pages/platform/build-configuration/)
- [Deploy Hooks](https://developers.cloudflare.com/pages/platform/deploy-hooks/)

### Netlify Documentation
- [Netlify Docs](https://docs.netlify.com/)

---

**Status:** ✅ Configured and deploying via native Git integrations!
