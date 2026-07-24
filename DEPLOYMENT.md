# Deployment

This project is deployed to multiple platforms:

## Production URLs

- **Cloudflare Pages**: https://claude-ai-resume.pages.dev
- **Netlify**: *(Configure your Netlify URL after deployment)*

## Setup

### Cloudflare Pages
- Automatically deployed via GitHub Actions workflow (`.github/workflows/deploy-cloudflare.yml`)
- Deploys on every push to `main` branch
- Requires `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` secrets

### Netlify
- Automatically deployed via Netlify Git integration
- Configuration in `netlify.toml`
- Connect your repository through Netlify dashboard

## GitHub Environment

Both deployment URLs are documented in the `production` environment:
- Go to: Repository Settings → Environments → production
- The primary URL (Cloudflare) is set in the workflow
- Additional URLs can be added in the environment description
