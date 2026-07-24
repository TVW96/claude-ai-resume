# Deployment

This project is deployed to multiple platforms:

## Production URLs

- **Cloudflare Workers**: https://claude-ai-resume.troyvw96.workers.dev
- **Netlify**: https://famous-cascaron-ee40a2.netlify.app

## Setup

### Cloudflare Workers
- Automatically deployed via Cloudflare Workers Builds (Git integration) — see [.github/CLOUDFLARE_GIT_INTEGRATION.md](.github/CLOUDFLARE_GIT_INTEGRATION.md)
- Deploys on every push to `main` branch using `npx wrangler deploy`, serving the static site as Worker assets (`[assets]` in `wrangler.toml`)
- No GitHub secrets required

### Netlify
- Automatically deployed via Netlify Git integration
- Configuration in `netlify.toml`
- Connect your repository through Netlify dashboard

## GitHub Environment

Both deployment URLs are documented in a single `production` environment:
- Go to: Repository Settings → Environments → `production`
- This environment tracks both the Cloudflare and Netlify deployments for this project
