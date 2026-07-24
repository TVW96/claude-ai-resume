# GitHub Environment Setup for Cloudflare Deployment

This guide explains how to set up the GitHub Environment for Cloudflare Pages deployment with protection rules and proper configuration.

## What is a GitHub Environment?

GitHub Environments provide:
- Deployment protection rules
- Environment-specific secrets
- Deployment history and status tracking
- Environment URLs for easy access
- Required reviewers and wait timers

## Setup Steps

### 1. Create the Environment

1. **Navigate to Repository Settings**
   - Go to your repository: `https://github.com/TVW96/claude-ai-resume`
   - Click on "Settings" tab
   - In the left sidebar, click "Environments"

2. **Create New Environment**
   - Click "New environment" button
   - Name: `cloudflare-production`
   - Click "Configure environment"

### 2. Configure Environment Protection Rules (Optional)

Protect your production deployments with these optional rules:

#### Required Reviewers
- Add reviewers who must approve before deployment
- Useful for production environments
- Example: Require 1 reviewer for production deployments

#### Wait Timer
- Add a delay before deployment (0-43,200 minutes)
- Gives time to cancel if needed
- Example: 5-minute wait timer before production deployment

#### Deployment Branches
- Restrict which branches can deploy to this environment
- Options:
  - **Selected branches**: Only specific branches (e.g., `main`)
  - **All branches**: Any branch can deploy
  - **Protected branches**: Only branches with protection rules
- **Recommended**: Set to "Selected branches" → Add `main`

### 3. Add Environment Secrets

1. **In the cloudflare-production environment page**
   - Scroll to "Environment secrets" section
   - Click "Add secret"

2. **Add Cloudflare API Token**
   - Name: `CLOUDFLARE_API_TOKEN`
   - Value: Your Cloudflare API token
   - Click "Add secret"

3. **Add Cloudflare Account ID**
   - Name: `CLOUDFLARE_ACCOUNT_ID`
   - Value: Your Cloudflare account ID
   - Click "Add secret"

### 4. Configure Environment URL

The workflow automatically sets the environment URL to:
```
https://claude-ai-resume.pages.dev
```

This will be displayed in:
- Pull request deployments
- Repository environments page
- Deployment history

## Workflow Integration

The GitHub Actions workflow (`.github/workflows/deploy-cloudflare.yml`) is already configured to use this environment:

```yaml
jobs:
  deploy:
    environment:
      name: cloudflare-production
      url: https://claude-ai-resume.pages.dev
```

This means:
- Deployments will be tracked under the `cloudflare-production` environment
- Protection rules will be enforced
- Environment secrets will be used
- Deployment URL will be clickable in GitHub UI

## Viewing Deployment Status

After setup, you can view deployments:

1. **Repository Homepage**
   - Look for "Environments" section in the right sidebar
   - Shows active environments and recent deployments

2. **Environments Page**
   - Go to repository → Environments
   - Click on `cloudflare-production`
   - View all deployments with timestamps and status

3. **Pull Requests**
   - Each PR shows deployment status
   - Click "View deployment" to see the live site

4. **Actions Tab**
   - Shows workflow runs
   - Links to environment deployments

## Example Protection Configuration

### For Personal Projects (Light Protection)
- ✅ Deployment branches: `main` only
- ❌ Required reviewers: None
- ❌ Wait timer: None

### For Team Projects (Medium Protection)
- ✅ Deployment branches: `main` only
- ✅ Required reviewers: 1 reviewer
- ✅ Wait timer: 2 minutes

### For Production Sites (Strong Protection)
- ✅ Deployment branches: `main` only
- ✅ Required reviewers: 2 reviewers
- ✅ Wait timer: 5 minutes
- ✅ Only allow administrators to bypass protection rules

## Recommended Configuration for This Project

Since this is a personal resume site:

```yaml
Environment: cloudflare-production
Deployment branches: main only
Required reviewers: None (or add yourself for extra safety)
Wait timer: None (or 2 minutes for safety)
```

## Environment Variables vs Secrets

**Use Environment Secrets for:**
- API tokens
- Account IDs
- Passwords
- Any sensitive data

**Use Environment Variables for:**
- Build configuration
- Feature flags
- Non-sensitive configuration

For this project, we only need secrets (API token and Account ID).

## Monitoring Deployments

### GitHub UI
- Repository → Environments → cloudflare-production
- Shows deployment history with:
  - Timestamp
  - Commit SHA
  - Deployer
  - Status (Success/Failed)
  - Duration

### Deployment Log
- Click on any deployment
- View the workflow run
- See detailed logs

### Quick Access
- Click environment URL to instantly visit deployed site

## Troubleshooting

### Environment Not Found
- Ensure environment name matches exactly: `cloudflare-production`
- Check capitalization and spelling

### Secrets Not Working
- Verify secrets are added to environment (not repository secrets)
- Check secret names match exactly in workflow file

### Protection Rules Blocking
- If deployment is pending, check for:
  - Pending reviewer approvals
  - Active wait timer
  - Branch restriction violations

### Deployment URL Not Showing
- Ensure `url` is set in workflow environment configuration
- Redeploy to update environment URL

## Benefits of Using Environments

1. **Better Organization**
   - Clear separation between different deployment targets
   - Easy to see deployment history

2. **Enhanced Security**
   - Environment-specific secrets
   - Protection rules prevent accidental deployments
   - Reviewer requirements for critical changes

3. **Improved Visibility**
   - Deployment status on PRs
   - Quick access to deployed sites
   - Clear deployment history

4. **Professional Workflow**
   - Matches industry best practices
   - Scales well for team collaboration
   - Integrates with GitHub's deployment ecosystem

## Next Steps

1. ✅ Create `cloudflare-production` environment
2. ✅ Add environment secrets
3. ✅ Configure deployment branches (restrict to `main`)
4. ✅ Merge the PR to trigger first deployment
5. ✅ Verify deployment shows in environment page
6. ✅ Click environment URL to view deployed site

## Additional Resources

- [GitHub Environments Documentation](https://docs.github.com/en/actions/deployment/targeting-different-environments/using-environments-for-deployment)
- [Deployment Protection Rules](https://docs.github.com/en/actions/deployment/targeting-different-environments/using-environments-for-deployment#deployment-protection-rules)
- [Environment Secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-an-environment)
