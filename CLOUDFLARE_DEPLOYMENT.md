# Cloudflare Workers Deployment Guide

This project deploys automatically to Cloudflare via **Workers Builds** (Cloudflare's native Git integration). GitHub Actions tracks the production URLs in the repository environment, but it does not deploy the Worker itself. It runs as a Cloudflare Worker serving static assets (`[assets]` in `wrangler.toml`), not a Cloudflare Pages project.

📄 See [Cloudflare Git Integration Guide](.github/CLOUDFLARE_GIT_INTEGRATION.md) for full setup instructions.

## Production Environment

Both this Cloudflare Worker and Netlify deploy from `main` and are tracked under a single GitHub `production` environment (Settings → Environments → `production`), which lists both live URLs. The `Playwright Tests` workflow records one production deployment entry per platform after tests pass on `main`, and no GitHub secrets are required for either platform.

---

## Automatic Deployment via Workers Builds

Once the repository is connected in the Cloudflare Dashboard (Workers & Pages → Connect to Git), every push to `main` automatically triggers a build and deployment, and every pull request gets its own preview build.

### Setup Steps

1. **Get Your Cloudflare Credentials**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to "Workers & Pages" > "Overview"
   - Note your Account ID from the URL or account settings

2. **Connect the Repository**
   - Workers & Pages → "Create application" → "Workers" → "Connect to Git"
   - Select `TVW96/claude-ai-resume`, production branch `main`
   - Build settings: no build command needed; **deploy command must be `npx wrangler deploy`** (not `npx wrangler pages deploy` — the Workers Builds CI token isn't scoped for the Pages API and that command fails with an authentication error)

3. **Deploy**
   - Save and deploy — the site is available at your Workers subdomain, e.g. `https://claude-ai-resume.troyvw96.workers.dev`
   - View deployment status and logs in the Cloudflare Dashboard under "Workers & Pages"

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
wrangler deploy
```

## Project Configuration

The deployment configuration is defined in:
- `wrangler.toml` - Cloudflare Worker configuration (`[assets]` directory = static site root)
- `.github/CLOUDFLARE_GIT_INTEGRATION.md` - Cloudflare Git integration guide

## Viewing Your Site

After deployment, your site will be available at:
- Production: `https://claude-ai-resume.troyvw96.workers.dev`
- Or your custom domain if configured

You can view deployments in the [Cloudflare Dashboard](https://dash.cloudflare.com/) under "Workers & Pages".
