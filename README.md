# claude-ai-resume

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