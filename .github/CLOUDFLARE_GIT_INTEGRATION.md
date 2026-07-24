# Cloudflare Git Integration Setup

Cloudflare Pages offers native Git integration that automatically deploys this site directly from GitHub — no GitHub Actions workflow needed. It also provides automatic preview deployments for pull requests.

## Benefits of Cloudflare Git Integration

- **Automatic Deployments**: Automatically deploys on every push to `main`
- **Preview Deployments**: Automatic preview deployments for every pull request
- **Build Logs**: View build and deployment logs directly in the Cloudflare Dashboard
- **Deployment History**: Track all deployments with rollback capability
- **Zero Configuration**: No workflow files needed

## Setup Instructions

1. **Navigate to Cloudflare Pages**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Select "Workers & Pages" from the left sidebar
   - Click "Create application" → "Pages" → "Connect to Git"

2. **Connect GitHub Account**
   - Click "Connect GitHub"
   - Authorize Cloudflare Pages to access your GitHub account
   - Select the repositories you want to give Cloudflare access to
     - You can choose "All repositories" or "Only select repositories"
     - For security, it's recommended to only select specific repositories

3. **Configure the Project**
   - Select repository: `TVW96/claude-ai-resume`
   - Project name: `claude-ai-resume`
   - Production branch: `main`
   - Build settings:
     - Framework preset: `None` (static site)
     - Build command / Deploy command: `npx wrangler pages deploy .`
     - Build output directory: `/` (root directory)
     - Root directory: `/`

4. **Environment Variables** (Optional)
   - No environment variables needed for this static site

5. **Deploy**
   - Click "Save and Deploy"
   - Cloudflare will immediately start building and deploying your site
   - First deployment takes 1-2 minutes

6. **Verify Deployment**
   - Once complete, you'll see your site URL: `https://claude-ai-resume.pages.dev`
   - Click the URL to view your deployed resume

## Production Environment

Both Cloudflare Pages and Netlify deploy from the same `main` branch and are tracked under a single GitHub `production` environment (Settings → Environments → `production`) so both live URLs are visible from the repository. No GitHub secrets are required for either platform since deployments are driven entirely by each platform's own Git integration.

## Preview Deployments

When using Cloudflare Git integration:
- Every pull request automatically gets a preview deployment
- Preview URL format: `https://<commit-hash>.claude-ai-resume.pages.dev`
- Preview deployments are automatically deleted when PRs are closed
- No additional configuration needed

## Custom Domains

After setup, you can add custom domains:
1. Go to your project in Cloudflare Pages
2. Click "Custom domains" tab
3. Click "Set up a custom domain"
4. Enter your domain (e.g., `resume.troywashington.com`)
5. Follow DNS configuration instructions
6. Cloudflare automatically provisions SSL certificate

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

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Git Integration Guide](https://developers.cloudflare.com/pages/platform/git-integration/)
- [Deployment Configuration](https://developers.cloudflare.com/pages/platform/build-configuration/)
