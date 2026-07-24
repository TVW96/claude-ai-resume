# claude-ai-resume

https://github.com/user-attachments/assets/6b26080d-e2ca-4f8e-8c05-fbeaa43a9cad

A personal resume website with automated testing and quality assurance.

## Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for production URLs and setup.

---

## Development Dependencies

| Package | Purpose |
|---------|----------|
| `@playwright/test` | Browser automation and UI testing |
| `vnu-jar` | W3C HTML5 validation |
| `html-validate` | HTML linting |
| `stylelint` | CSS validation |
| `@lhci/cli` | Lighthouse audits (performance, accessibility, SEO) |
| `linkinator` | Link validation |
| `http-server` | Local development server |

---

## Installation

```bash
npm install
npx playwright install
```

---

## Testing Tools

### Playwright
- Cross-browser and responsive testing
- Visual regression testing
- User interaction simulation

### HTML/CSS Validation
- **W3C Nu Checker**: Standards-compliant HTML validation
- **HTML Validate**: Project-specific linting rules
- **Stylelint**: CSS syntax and quality checks

### Quality Assurance
- **Lighthouse CI**: Performance, accessibility, SEO, and best practices
- **Linkinator**: Detects broken links and missing assets

---

## Development Workflow

```text
Write code → Validate HTML → Validate CSS → Run tests → Commit
```

---

## VS Code Extensions

- Playwright Test for VS Code
- Stylelint
- W3C Offline HTML Validator
- HTML Validate
