# Cloudflare Pages Deployment Guide

This project is configured to deploy automatically to Cloudflare Pages.

## Automatic Deployment via GitHub Actions

The repository includes a GitHub Actions workflow that automatically deploys to Cloudflare Pages on every push to the `main` branch.

### Setup Steps

1. **Get your Cloudflare credentials:**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to "Workers & Pages" > "Overview"
   - Click "Create application" > "Pages" > "Connect to Git"
   - Note your Account ID from the URL or account settings

2. **Create a Cloudflare API Token:**
   - Go to [API Tokens](https://dash.cloudflare.com/profile/api-tokens)
   - Click "Create Token"
   - Use the "Edit Cloudflare Workers" template or create a custom token with these permissions:
     - Account > Cloudflare Pages > Edit

3. **Add secrets to your GitHub repository:**
   - Go to your repository settings
   - Navigate to "Secrets and variables" > "Actions"
   - Add the following secrets:
     - `CLOUDFLARE_API_TOKEN`: Your API token from step 2
     - `CLOUDFLARE_ACCOUNT_ID`: Your Account ID from step 1

4. **Push to main branch:**
   The workflow will automatically trigger and deploy your site.

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
- `.github/workflows/deploy-cloudflare.yml` - GitHub Actions workflow
- `wrangler.toml` - Cloudflare Pages configuration

## Viewing Your Site

After deployment, your site will be available at:
- Production: `https://claude-ai-resume.pages.dev`
- Or your custom domain if configured

You can view deployments in the [Cloudflare Dashboard](https://dash.cloudflare.com/) under "Workers & Pages".
