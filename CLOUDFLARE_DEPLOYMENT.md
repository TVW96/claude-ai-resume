# Cloudflare Pages Deployment Guide

This project deploys automatically to Cloudflare Pages using Cloudflare's native Git integration — no GitHub Actions workflow is involved.

📄 See [Cloudflare Git Integration Guide](.github/CLOUDFLARE_GIT_INTEGRATION.md) for full setup instructions.

## Production Environment

Both Cloudflare Pages and Netlify deploy from `main` and are tracked under a single GitHub `production` environment (Settings → Environments → `production`), which lists both live URLs. No GitHub secrets are required for either platform.

---

## Automatic Deployment via Cloudflare Git Integration

Once the repository is connected in the Cloudflare Dashboard (Workers & Pages → Connect to Git), every push to `main` automatically triggers a build and deployment, and every pull request gets its own preview deployment.

### Setup Steps

1. **Get Your Cloudflare Credentials**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to "Workers & Pages" > "Overview"
   - Note your Account ID from the URL or account settings

2. **Connect the Repository**
   - Workers & Pages → "Create application" → "Pages" → "Connect to Git"
   - Select `TVW96/claude-ai-resume`, production branch `main`
   - Build settings: Framework preset `None`, deploy command `npx wrangler pages deploy .`, output directory `/`

3. **Deploy**
   - Save and deploy — the site is available at `https://claude-ai-resume.pages.dev`
   - View deployment status and logs in the Cloudflare Dashboard under "Workers & Pages"

---

## Alternative: Cloudflare Git Integration

For a simpler setup with automatic PR previews, consider using Cloudflare's native Git integration instead of GitHub Actions.

**Benefits:**
- ✅ No workflow configuration needed
- ✅ Automatic preview deployments for every PR
- ✅ Built-in rollback functionality
- ✅ Deployment management in Cloudflare Dashboard

📄 **Full setup guide:** [Cloudflare Git Integration](.github/CLOUDFLARE_GIT_INTEGRATION.md)

---

## Manual Deployment using Wrangler CLI

You can also deploy manually using the Cloudflare Wrangler CLI:

### Install Wrangler

```bash
npm install -g wrangler
```

### Login to Cloudflare

```bash
wrangler login
```

### Deploy

```bash
wrangler pages deploy . --project-name=claude-ai-resume
```

## Project Configuration

The deployment configuration is defined in:
- `wrangler.toml` - Cloudflare Pages configuration
- `.github/CLOUDFLARE_GIT_INTEGRATION.md` - Cloudflare Git integration guide

## Viewing Your Site

After deployment, your site will be available at:
- Production: `https://claude-ai-resume.pages.dev`
- Or your custom domain if configured

You can view deployments in the [Cloudflare Dashboard](https://dash.cloudflare.com/) under "Workers & Pages".
