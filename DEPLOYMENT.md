# Deployment

This project is deployed to multiple platforms:

## Production URLs

- **Cloudflare Pages**: https://claude-ai-resume.pages.dev
- **Netlify**: *(Configure your Netlify URL after deployment)*

## Setup

### Cloudflare Pages
- Automatically deployed via Cloudflare's native Git integration (see [.github/CLOUDFLARE_GIT_INTEGRATION.md](.github/CLOUDFLARE_GIT_INTEGRATION.md))
- Deploys on every push to `main` branch
- No GitHub secrets required

### Netlify
- Automatically deployed via Netlify Git integration
- Configuration in `netlify.toml`
- Connect your repository through Netlify dashboard

## GitHub Environment

Both deployment URLs are documented in a single `production` environment:
- Go to: Repository Settings → Environments → `production`
- This environment tracks both the Cloudflare and Netlify deployments for this project
