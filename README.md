# claude-ai-resume

https://github.com/user-attachments/assets/6b26080d-e2ca-4f8e-8c05-fbeaa43a9cad



# Project Dependencies

## Core Testing Framework

| Package | Purpose |
|---------|----------|
| `@playwright/test` | End-to-end testing, responsive testing, visual regression, cross-browser testing |
| `http-server` | Lightweight local development server used during testing |

---

## HTML Validation

| Package | Purpose |
|---------|----------|
| `vnu-jar` | Official W3C Nu HTML Checker for HTML5 validation |
| `html-validate` | Configurable HTML linter for project-specific rules |

---

## CSS Validation

| Package | Purpose |
|---------|----------|
| `stylelint` | CSS linter and syntax validator |
| `stylelint-config-standard` | Standard Stylelint ruleset |

---

## Website Auditing

| Package | Purpose |
|---------|----------|
| `@lhci/cli` | Lighthouse CI for SEO, accessibility, performance, and best practices audits |

---

## Link Validation

| Package | Purpose |
|---------|----------|
| `linkinator` | Detects broken links, missing assets, and invalid URLs |

---

# Installation

```bash
npm install --save-dev \
  @playwright/test \
  stylelint \
  stylelint-config-standard \
  html-validate \
  vnu-jar \
  linkinator \
  @lhci/cli \
  http-server
```

Install Playwright browsers:

```bash
npx playwright install
```

---

# Testing Tools & Use Cases

## Playwright

### Purpose
Browser automation and UI testing.

### Use Cases

- End-to-end testing
- Cross-browser testing
- Mobile viewport testing
- Tablet viewport testing
- Desktop viewport testing
- Visual regression testing
- Responsive breakpoint testing
- CSS Grid verification
- Flexbox verification
- Navigation testing
- Form testing
- JavaScript interaction testing
- Accessibility assertions
- Screenshot comparisons
- User interaction simulation

---

## W3C Nu HTML Checker (`vnu-jar`)

### Purpose
Official HTML5 validator.

### Detects

- Invalid HTML elements
- Invalid nesting
- Missing required attributes
- Duplicate IDs
- Invalid ARIA usage
- Deprecated HTML
- Incorrect document structure

---

## HTML Validate

### Purpose
Project-specific HTML linting.

### Detects

- Multiple `<h1>` tags
- Heading hierarchy issues
- Missing accessibility attributes
- Duplicate IDs
- Invalid semantic structure
- Project coding standards

---

## Stylelint

### Purpose
CSS quality assurance.

### Detects

- Invalid CSS syntax
- Unknown properties
- Duplicate declarations
- Invalid media queries
- Specificity issues
- Vendor prefix problems
- Formatting inconsistencies

---

## Linkinator

### Purpose
Website crawling and asset validation.

### Detects

- Broken internal links
- Broken external links
- Missing images
- Missing JavaScript files
- Missing CSS files
- Invalid asset URLs
- 404 responses
- Redirect loops

---

## Lighthouse CI

### Purpose
Website quality auditing.

### Measures

#### Performance

- First Contentful Paint
- Largest Contentful Paint
- Speed Index
- Cumulative Layout Shift
- Total Blocking Time

#### Accessibility

- Color contrast
- ARIA compliance
- Keyboard navigation
- Alt text
- Semantic HTML

#### Best Practices

- HTTPS usage
- Console errors
- Modern image formats
- Security issues

#### SEO

- Meta description
- Title tag
- Viewport configuration
- Canonical links
- Robots configuration
- Structured metadata
- Mobile friendliness

---

# Typical Development Workflow

```text
Write HTML/CSS
        │
        ▼
HTML Validate
        │
        ▼
W3C HTML Validation
        │
        ▼
Stylelint
        │
        ▼
Run Playwright Tests
        │
        ▼
Visual Regression
        │
        ▼
Linkinator
        │
        ▼
Lighthouse CI
        │
        ▼
Commit Changes
```

---

# Recommended VS Code Extensions

| Extension | Purpose |
|-----------|----------|
| Playwright Test for VS Code | Run and debug Playwright tests |
| Stylelint | Live CSS linting |
| W3C Offline HTML Validator | Live W3C HTML validation |
| HTML Validate | Project HTML linting |

---

# Summary

| Tool | Primary Responsibility |
|------|-------------------------|
| Playwright | Browser automation, responsive layouts, visual regression |
| W3C Nu HTML Checker | Standards-compliant HTML validation |
| HTML Validate | Project-specific HTML linting |
| Stylelint | CSS validation and quality |
| Linkinator | Broken links and missing assets |
| Lighthouse CI | SEO, performance, accessibility, and best practices |

---

# Deployment to Netlify

This project is configured for deployment to Netlify using Git integration.

## Automatic Deployment Setup

1. **Sign in to Netlify**
   - Go to [netlify.com](https://netlify.com) and sign in with your GitHub account

2. **Import Repository**
   - Click "Add new site" → "Import an existing project"
   - Choose "Deploy with GitHub"
   - Authorize Netlify to access your GitHub account
   - Select the `TVW96/claude-ai-resume` repository

3. **Configure Build Settings**
   - Netlify will automatically detect the `netlify.toml` configuration file
   - The following settings are pre-configured:
     - **Publish directory**: `.` (root directory)
     - **Build command**: None (static HTML site)
   - Click "Deploy site"

4. **Deployment Complete**
   - Netlify will deploy your site and provide a URL (e.g., `https://random-name-123456.netlify.app`)
   - You can customize the subdomain in Site settings → Domain management

## Continuous Deployment

Once connected, Netlify will automatically:
- Deploy every push to the `main` branch
- Create deploy previews for pull requests
- Show deployment status in GitHub

## Configuration Details

The `netlify.toml` file includes:
- **Security headers**: X-Frame-Options, X-Content-Type-Options, X-XSS-Protection
- **Cache control**: Optimized caching for static assets and HTML
- **Node version**: 20 (for any future build processes)

## Custom Domain (Optional)

To use a custom domain:
1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow the instructions to configure your DNS settings

---

# GitHub Integration & Environment Configuration

## Recommended Integration Method

**Use Netlify's Native GitHub Integration (Recommended)**

This is the simplest and most robust approach for static sites:
- No GitHub secrets or environment variables required
- Automatic deployment status checks on pull requests
- Built-in deploy previews for all PRs
- Rollback capability through Netlify's dashboard

### Setup Steps:
1. Connect repository through Netlify's dashboard (already covered above)
2. Netlify automatically creates webhooks in your GitHub repository
3. All deployments are managed through Netlify's platform

### What NOT to do:
- ❌ Don't manually configure GitHub Actions for deployment (unnecessary overhead)
- ❌ Don't store Netlify tokens in GitHub Secrets (not needed for native integration)
- ❌ Don't create custom deployment scripts

---

## GitHub Environment Configuration

### Setting Up a Production Environment

1. **Navigate to Repository Settings**
   - Go to your repository → Settings → Environments
   - Click "New environment" or select existing environment

2. **Create "production" Environment**
   - Name: `production`
   - Click "Configure environment"

3. **Add Environment URL**
   - **Environment URL**: Your Netlify deployment URL
   - Example: `https://your-site-name.netlify.app`
   - This URL appears in deployment logs and provides quick access

4. **Purpose of GitHub Environments**
   - **Documentation**: Quick reference to deployment URLs
   - **Protection Rules**: Control who can deploy and when
   - **Visibility**: Track deployment history in GitHub's UI
   - **Integration**: Link deployments to specific commits/PRs

### Important Notes:
- The environment URL in GitHub is for **documentation only**
- It does NOT trigger or configure actual deployments
- Actual deployment happens through Netlify's Git integration
- This is different from GitHub Secrets (which store sensitive credentials)

---

## GitHub Repository Protection Rules

### Branch Protection Rules (Recommended)

Protect your `main` branch to ensure code quality:

1. **Navigate to Branch Settings**
   - Repository → Settings → Branches → Add branch protection rule
   - Branch name pattern: `main`

2. **Recommended Protection Rules**

   ✅ **Require pull request reviews before merging**
   - Require 1 approval (or more for team projects)
   - Dismiss stale pull request approvals when new commits are pushed
   - Require review from Code Owners (if applicable)

   ✅ **Require status checks to pass before merging**
   - Require branches to be up to date before merging
   - Status checks to require:
     - ✅ `Playwright Tests` (your existing GitHub Actions workflow)
     - ✅ `netlify/...` (Netlify's deployment preview check - appears after first deployment)

   ✅ **Require conversation resolution before merging**
   - Ensures all review comments are addressed

   ✅ **Do not allow bypassing the above settings**
   - Applies to administrators too (recommended for personal projects to maintain discipline)

   ⚠️ **Optional but Recommended:**
   - Require linear history (prevents merge commits, enforces rebasing)
   - Require signed commits (for security-conscious projects)

3. **Apply Changes**
   - Click "Create" or "Save changes"

### Environment Protection Rules (Optional)

For production environments requiring manual approval:

1. **Navigate to Environment Settings**
   - Repository → Settings → Environments → Select `production`

2. **Protection Rules**

   **Required Reviewers**
   - Add yourself or team members who must approve deployments
   - Useful for: Manual verification before production releases
   - Note: With Netlify's auto-deployment, this mainly serves as a gate for manual actions

   **Wait Timer**
   - Add a delay before deployment (e.g., 5 minutes)
   - Gives you time to cancel if needed
   - Less useful for static sites with instant rollback capability

   **Deployment Branches**
   - Limit which branches can deploy to this environment
   - For production: Only allow `main` branch
   - Prevents accidental production deployments from feature branches

3. **When to Use Environment Protection**
   - ✅ Multi-person teams requiring approval workflows
   - ✅ Production environments handling sensitive data
   - ❌ Personal projects with instant rollback capability (usually unnecessary)
   - ❌ Static sites without backend/database (low risk)

---

## Deployment Workflow Best Practices

### For This Static Site

1. **Development Workflow**
   ```
   feature branch → create PR → Playwright tests run → Netlify creates preview
   → review changes → merge to main → auto-deploy to production
   ```

2. **Quality Gates** (Already Configured)
   - ✅ Playwright tests via GitHub Actions
   - ✅ ESLint for CSS validation
   - ✅ Netlify's deploy preview for visual verification

3. **Recommended Additions**
   - Add branch protection requiring Playwright tests to pass
   - Require 1 PR review before merging to main
   - Enable Netlify's deploy preview comments on PRs

### Deployment Status Checks

After first Netlify deployment, you'll see these checks on PRs:
- `netlify/[site-name]/deploy-preview` - Preview deployment status
- `Playwright Tests` - Your existing test suite

Both should be required to pass before merging.

---

## Security Best Practices

### Environment Variables

**For this static HTML site**: No environment variables needed

**If you add dynamic features later:**
- Store secrets in Netlify's dashboard (Site settings → Environment variables)
- Never commit secrets to GitHub
- Use different values for deploy previews vs. production
- Netlify's environment variables are automatically injected at build time

### GitHub Secrets vs. Netlify Environment Variables

| Feature | GitHub Secrets | Netlify Environment Variables |
|---------|---------------|-------------------------------|
| **Purpose** | GitHub Actions workflows | Build-time injection in Netlify |
| **When needed** | Custom deployment scripts | Dynamic site features (APIs, etc.) |
| **This project** | ❌ Not needed | ❌ Not needed (static site) |
| **Access** | Only in GitHub Actions | Only during Netlify builds |

### Security Checklist

- ✅ `netlify.toml` configured with security headers
- ✅ No secrets in repository code
- ✅ HTTPS enforced by Netlify (automatic)
- ✅ Branch protection rules applied
- ✅ Status checks required before merge
- ✅ Deploy previews isolated per PR

---

## Troubleshooting

### Common Integration Issues

**Issue**: Netlify isn't deploying on push to main
- **Solution**: Check Netlify's Site settings → Build & deploy → Deploy contexts
- Ensure "Production branch" is set to `main`

**Issue**: Deploy previews not appearing on PRs
- **Solution**: Check Netlify's Site settings → Build & deploy → Deploy contexts
- Enable "Deploy previews" for "Any pull request against your production branch"

**Issue**: GitHub environment URL doesn't trigger deployment
- **Solution**: This is expected behavior - GitHub environment URLs are documentation only
- Actual deployment is handled by Netlify's webhook integration

**Issue**: Want to prevent main branch deployments until tests pass
- **Solution**: Set up branch protection rules (documented above)
- Add Playwright tests as required status check

---

## Summary

### Integration Recommendations

✅ **Do This:**
1. Use Netlify's native GitHub integration (simplest)
2. Set up GitHub environment with Netlify URL (documentation)
3. Configure branch protection rules (quality assurance)
4. Require Playwright tests to pass before merge
5. Enable Netlify deploy previews for all PRs

❌ **Don't Do This:**
1. Create GitHub Actions for Netlify deployment (unnecessary)
2. Store Netlify tokens in GitHub Secrets (not needed)
3. Manually trigger deployments (Netlify auto-deploys)
4. Skip branch protection rules (risk of broken production)

### Protection Rules Summary

| Protection Type | Recommended Setting | Purpose |
|----------------|---------------------|---------|
| Branch: Pull request reviews | ✅ Required (1 approval) | Code quality gate |
| Branch: Status checks | ✅ Required (Playwright + Netlify) | Prevent broken deployments |
| Branch: Conversation resolution | ✅ Required | Ensure feedback is addressed |
| Environment: Reviewers | ⚠️ Optional | Manual deployment approval |
| Environment: Deployment branches | ✅ Main only | Prevent accidental deploys |
