# Cloudflare Pages Deployment Guide

This project is configured to deploy automatically to Cloudflare Pages using two methods:
1. **GitHub Actions** (current workflow-based deployment)
2. **Cloudflare Git Integration** (native direct-from-GitHub deployment)

## Quick Start: Choose Your Deployment Method

### Method 1: GitHub Actions (Current Setup)
Best for: Custom workflows, additional validation, GitHub-centric deployment management

✅ Already configured in this repository
📄 See [GitHub Environment Setup](.github/GITHUB_ENVIRONMENT_SETUP.md) for environment configuration

### Method 2: Cloudflare Git Integration (Recommended)
Best for: Simplest setup, automatic PR previews, built-in Cloudflare features

📄 See [Cloudflare Git Integration Guide](.github/CLOUDFLARE_GIT_INTEGRATION.md) for setup instructions

---

## Automatic Deployment via GitHub Actions

The repository includes a GitHub Actions workflow that automatically deploys to Cloudflare Pages on every push to the `main` branch.

### Setup Steps

#### 1. Set Up GitHub Environment (Recommended)

For better deployment management and protection:

1. **Create GitHub Environment:**
   - Go to repository Settings → Environments
   - Create new environment: `cloudflare-production`
   - See detailed guide: [GitHub Environment Setup](.github/GITHUB_ENVIRONMENT_SETUP.md)

2. **Add Environment Secrets:**
   - In the `cloudflare-production` environment
   - Add secrets:
     - `CLOUDFLARE_API_TOKEN`: Your API token
     - `CLOUDFLARE_ACCOUNT_ID`: Your Account ID

3. **Configure Protection Rules (Optional):**
   - Deployment branches: Restrict to `main` only
   - Required reviewers (if working in a team)
   - Wait timer before deployment

#### 2. Get Your Cloudflare Credentials
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to "Workers & Pages" > "Overview"
   - Note your Account ID from the URL or account settings

#### 3. Create a Cloudflare API Token
   - Go to [API Tokens](https://dash.cloudflare.com/profile/api-tokens)
   - Click "Create Token"
   - Use the "Edit Cloudflare Workers" template or create a custom token with these permissions:
     - Account > Cloudflare Pages > Edit

#### 4. Add Secrets (If Not Using Environment)

If you haven't set up the GitHub environment:

1. **Add secrets to your GitHub repository:**
   - Go to your repository settings
   - Navigate to "Secrets and variables" > "Actions"
   - Add the following secrets:
     - `CLOUDFLARE_API_TOKEN`: Your API token from step 3
     - `CLOUDFLARE_ACCOUNT_ID`: Your Account ID from step 2

   **Note:** Using GitHub Environment (step 1) is recommended over repository secrets.

#### 5. Deploy
   The workflow will automatically trigger and deploy your site.
   - View deployment status in the Actions tab
   - Access deployment in Environments page (if using GitHub environment)

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
- `.github/workflows/deploy-cloudflare.yml` - GitHub Actions workflow
- `wrangler.toml` - Cloudflare Pages configuration

## Viewing Your Site

After deployment, your site will be available at:
- Production: `https://claude-ai-resume.pages.dev`
- Or your custom domain if configured

You can view deployments in the [Cloudflare Dashboard](https://dash.cloudflare.com/) under "Workers & Pages".
