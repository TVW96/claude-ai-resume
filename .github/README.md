# Deployment Configuration

This directory contains deployment documentation and workflow configurations for the claude-ai-resume project.

## 📁 Contents

### Workflow Files
- **`workflows/deploy-cloudflare.yml`** - GitHub Actions workflow for automated Cloudflare Pages deployment

### Documentation

#### Primary Guides
1. **[GITHUB_ENVIRONMENT_SETUP.md](GITHUB_ENVIRONMENT_SETUP.md)** - GitHub Environment configuration
   - How to create the `cloudflare-production` environment
   - Setting up environment secrets
   - Configuring protection rules
   - Monitoring deployments

2. **[CLOUDFLARE_GIT_INTEGRATION.md](CLOUDFLARE_GIT_INTEGRATION.md)** - Cloudflare Git integration
   - Native Cloudflare Pages Git integration setup
   - Automatic PR preview deployments
   - Comparison with GitHub Actions approach
   - Step-by-step integration guide

## 🚀 Quick Start

### For GitHub Actions Deployment

1. **Create GitHub Environment:**
   ```
   Settings → Environments → New environment → "cloudflare-production"
   ```

2. **Add Environment Secrets:**
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`

3. **Configure Protection (Optional):**
   - Restrict to `main` branch
   - Add required reviewers
   - Set wait timer

4. **Push to main:**
   Workflow automatically deploys!

📖 **Full guide:** [GITHUB_ENVIRONMENT_SETUP.md](GITHUB_ENVIRONMENT_SETUP.md)

---

### For Cloudflare Git Integration (Alternative)

1. **Connect to Cloudflare:**
   - Go to Cloudflare Dashboard → Workers & Pages
   - Click "Connect to Git"
   - Authorize GitHub access

2. **Select Repository:**
   - Choose `TVW96/claude-ai-resume`
   - Configure build settings
   - Deploy!

📖 **Full guide:** [CLOUDFLARE_GIT_INTEGRATION.md](CLOUDFLARE_GIT_INTEGRATION.md)

---

## 🎯 Deployment Methods Comparison

| Feature | GitHub Actions + Environment | Cloudflare Git Integration |
|---------|------------------------------|---------------------------|
| **Setup Complexity** | Moderate (YAML + Environment) | Simple (UI-based) |
| **PR Preview Deployments** | ⚠️ Requires config | ✅ Automatic |
| **Build Logs** | GitHub Actions tab | Cloudflare Dashboard |
| **Deployment Control** | GitHub Environments | Cloudflare Dashboard |
| **Custom Build Steps** | ✅ Full flexibility | Limited |
| **Protection Rules** | ✅ GitHub-native | Manual in Cloudflare |
| **Cost** | Free (GitHub Actions) | Free (Cloudflare Pages) |
| **Current Status** | ✅ Configured | 📋 Available option |

## 📋 Environment Configuration

### Current Environment Setup

**Environment Name:** `cloudflare-production`

**Environment URL:** `https://claude-ai-resume.pages.dev`

**Required Secrets:**
- `CLOUDFLARE_API_TOKEN` - Cloudflare API token with Pages edit permission
- `CLOUDFLARE_ACCOUNT_ID` - Your Cloudflare account ID

**Protection Rules:**
- Deployment branches: `main` (recommended)
- Required reviewers: Optional
- Wait timer: Optional

### Workflow Triggers

The deployment workflow runs on:
- **Automatic:** Push to `main` branch
- **Manual:** Workflow dispatch from Actions tab

## 🔍 Monitoring Deployments

### GitHub UI
1. Repository → **Environments** → `cloudflare-production`
2. View deployment history, status, and logs
3. Click environment URL for instant access

### GitHub Actions
1. Repository → **Actions** tab
2. Select "Deploy to Cloudflare Pages" workflow
3. View detailed logs and status

### Cloudflare Dashboard
1. [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Workers & Pages**
3. Select `claude-ai-resume` project
4. View deployments, analytics, and settings

## 🛠️ Troubleshooting

### Environment Issues
- **Environment not found:** Ensure name is exactly `cloudflare-production`
- **Secrets not working:** Verify secrets are in environment (not repository)
- **Protection blocking:** Check for pending reviewers or wait timers

### Deployment Failures
- **API token invalid:** Regenerate token with correct permissions
- **Account ID wrong:** Verify from Cloudflare Dashboard URL
- **Workflow errors:** Check Actions tab for detailed logs

## 📚 Additional Resources

### GitHub Documentation
- [Using Environments for Deployment](https://docs.github.com/en/actions/deployment/targeting-different-environments/using-environments-for-deployment)
- [Environment Protection Rules](https://docs.github.com/en/actions/deployment/targeting-different-environments/using-environments-for-deployment#deployment-protection-rules)
- [Encrypted Secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets)

### Cloudflare Documentation
- [Cloudflare Pages Overview](https://developers.cloudflare.com/pages/)
- [Git Integration](https://developers.cloudflare.com/pages/platform/git-integration/)
- [Build Configuration](https://developers.cloudflare.com/pages/platform/build-configuration/)
- [Deploy Hooks](https://developers.cloudflare.com/pages/platform/deploy-hooks/)

### GitHub Actions
- [Cloudflare Pages Action](https://github.com/cloudflare/pages-action)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

## ✨ Recommended Setup

For this personal resume project, we recommend:

1. **Primary: GitHub Actions with Environment**
   - ✅ Better integration with GitHub workflow
   - ✅ Environment-based deployment tracking
   - ✅ Protection rules for safety
   - ✅ Already configured and ready to use

2. **Optional: Add Cloudflare Git Integration**
   - ✅ Get automatic PR previews
   - ✅ Dual deployment paths for redundancy
   - ✅ Leverage Cloudflare's built-in features

Both methods can coexist - use GitHub Actions for main deployments and Cloudflare Git integration for PR previews!

## 🎉 Next Steps

1. ✅ Create GitHub Environment `cloudflare-production`
2. ✅ Add environment secrets
3. ✅ Merge PR to trigger first deployment
4. ✅ Verify deployment in Environments page
5. ⭐ (Optional) Set up Cloudflare Git integration for PR previews

---

**Status:** ✅ Configured and ready to deploy!
