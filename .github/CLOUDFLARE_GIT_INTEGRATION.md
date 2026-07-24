# Cloudflare Git Integration Setup

Cloudflare Pages offers native Git integration that can automatically deploy your site directly from GitHub without needing GitHub Actions. This provides an alternative deployment method with built-in preview deployments for pull requests.

## Benefits of Cloudflare Git Integration

- **Automatic Deployments**: Automatically deploys on every push to your production branch
- **Preview Deployments**: Automatic preview deployments for every pull request
- **Build Logs**: View build and deployment logs directly in Cloudflare Dashboard
- **Deployment History**: Track all deployments with rollback capability
- **Zero Configuration**: No workflow files needed once set up

## Setup Instructions

### Option 1: Direct Git Integration (Recommended for Simplicity)

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
     - Build command: (leave empty)
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

### Option 2: GitHub Actions with Environment (Current Setup)

If you prefer to keep using GitHub Actions (already configured), you can enhance it with GitHub Environments:

1. **Create GitHub Environment**
   - Go to repository Settings → Environments
   - Click "New environment"
   - Name: `cloudflare-production`
   - Configure protection rules (optional):
     - Required reviewers
     - Wait timer
     - Deployment branches

2. **Add Environment Secrets**
   - In the `cloudflare-production` environment settings
   - Add secrets:
     - `CLOUDFLARE_API_TOKEN`
     - `CLOUDFLARE_ACCOUNT_ID`
   
3. **Environment URL**
   - The workflow is already configured to use the environment
   - Deployments will show in the "Environments" section with the URL

## Comparison: Git Integration vs GitHub Actions

| Feature | Cloudflare Git Integration | GitHub Actions |
|---------|---------------------------|----------------|
| Setup Complexity | Simple (UI-based) | Moderate (YAML config) |
| Preview Deployments | ✅ Automatic | ⚠️ Requires additional config |
| Build Logs | Cloudflare Dashboard | GitHub Actions tab |
| Deployment Control | Cloudflare Dashboard | GitHub Actions + Environments |
| Custom Build Steps | Limited | ✅ Full flexibility |
| Secrets Management | Cloudflare | GitHub |
| Cost | Free (Cloudflare Pages) | Free (GitHub Actions) |

## Using Both Methods (Hybrid Approach)

You can use both if needed:
- **Cloudflare Git Integration**: For automatic production deployments and PR previews
- **GitHub Actions**: For additional validation, testing, or custom deployment logic

To avoid conflicts:
1. If using Cloudflare Git integration for production, configure GitHub Actions to only run on specific branches or manual triggers
2. Or use GitHub Actions for staging/testing and Cloudflare Git integration for production

## Preview Deployments (Git Integration Only)

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

With either method, you can rollback to previous deployments:
1. Go to Cloudflare Dashboard → Workers & Pages
2. Select your project
3. View deployment history
4. Click on a previous deployment
5. Click "Rollback to this deployment"

## Recommended Approach

For this resume website, we recommend:

**Primary: Cloudflare Git Integration** (Set this up first)
- Simplest setup
- Automatic PR previews
- Easy rollbacks
- Built-in deployment management

**Secondary: GitHub Actions** (Keep as backup/enhancement)
- Run automated tests before deployment
- Perform additional validation
- Custom deployment workflows if needed

## Monitoring and Analytics

Once deployed via either method, you can:
- View analytics in Cloudflare Dashboard
- Monitor site performance
- Track visitor statistics
- View deployment logs and history

## Support and Troubleshooting

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Git Integration Guide](https://developers.cloudflare.com/pages/platform/git-integration/)
- [Deployment Configuration](https://developers.cloudflare.com/pages/platform/build-configuration/)
