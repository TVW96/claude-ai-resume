# Audit: Claude-Generated Resume Website

## Scope and Method

This audit reviews the AI-generated `index.html` and `css/styles.css` against the assignment's Part 1 prompting requirements (semantic HTML, accessible data, clean modern CSS) and the Part 2 audit checklist (header/footer, heading hierarchy, experience blocks, dates). No source changes were made as part of this audit — findings are documented only.

Checks run:

- `eslint css/styles.css` (project's configured CSS lint, run with `--no-cache` to bypass a stale cache — see [Tooling Note](#tooling-note))
- `playwright test tests/layout.spec.js --project=chromium`
- Manual line-by-line review of `index.html` and `css/styles.css`

## Summary

Claude's output has a strong semantic HTML foundation and a well-organized, token-driven CSS architecture. It uses correct landmark elements, a single `h1` followed by strictly sequential `h2`/`h3` headings, `article` elements for each experience and skills group, `time` elements for real dates, and a `dl` for education records. Layout is built entirely with Flexbox and Grid — no floats and no inline styles were found anywhere in the source.

The CSS currently fails the project's configured lint with 3 errors: a legacy visually-hidden technique, a not-yet-baseline scrollbar property, and an `!important` flag. The `!important` flag is not just a style-quality nit — removing it without restructuring the surrounding rule would silently break the `prefers-reduced-motion` accessibility feature (see finding below). `index.html` also reuses the same non-final-URL and non-breaking-character issues seen in the earlier ChatGPT-generated resume audit, which suggests these are recurring blind spots for AI-generated resume markup rather than one-off mistakes.

## Part 2 Checklist Review

### Header & Footer

- **Met.** Name, role, and contact info are inside `<header class="site-header">` at [index.html](index.html#L15) (`<h1>Troy Washington</h1>` at line 22, contact `<ul>` at lines 25–31).
- **Partially met.** `<footer class="site-footer">` at [index.html](index.html#L173) repeats the name and contact list, but the `footer-note` paragraph at line 179 (`exit code 0 — build succeeded`) is a stylistic flourish, not an actual copyright or data-privacy notice. The assignment explicitly calls out a copyright/privacy line in the footer — none is present.

### Heading Hierarchy

- **Met.** Exactly one `<h1>` ("Troy Washington", line 22). All three major sections use `<h2>` ("Experience" line 51, "Education" line 122, "Technical Skills" line 137). Individual experience entries and skill groups use `<h3>` (e.g. line 58, 143, 155). No level is skipped anywhere — confirmed both by manual read and by the passing `heading hierarchy does not jump from h1 to h4` Playwright assertion.
- The Education section deliberately does not introduce an `<h3>` per entry; it uses `<dt>` terms inside a `<dl>` instead (lines 123–135). This is a valid alternative under the assignment's own allowance for definition lists, not a hierarchy skip.

### Experience Blocks

- **Met.** All four roles are individually wrapped in `<article aria-labelledby="…">` inside the `<ol class="timeline">` inside the `#experience` `<section>` (lines 55–120). Each `article` is labelled by its own heading, and bullet achievements are grouped in a `<ul class="bullets">` — a clean, self-contained composition per role.

### Dates

- **Met.** All employment and education dates use `<time datetime="YYYY-MM">` with human-readable text content (e.g. line 66, 129–133). The in-progress role correctly leaves "Current" as plain text in a `<span class="status-badge">` (line 66) rather than forcing it into a `<time>` element, which is the right call since "Current" is not a calendar date.

## Confirmed Source Findings

### Medium — `!important` masks a real specificity bug in the reduced-motion rule

[css/styles.css](css/styles.css#L397-L401):

```css
@media (prefers-reduced-motion: reduce) {
  * { scroll-behavior: auto !important; }
}
html {
  scroll-behavior: smooth;
}
```

The reduced-motion rule targets the universal selector (`*`, specificity 0-0-0), while the base rule that follows it targets `html` directly (specificity 0-0-1). Without `!important`, the later, more specific `html` rule would win the cascade even under `prefers-reduced-motion: reduce`, silently re-enabling smooth scrolling for users who asked to disable motion. The `!important` currently compensates for this, but it is flagged by the project's lint (`css/no-important`) and is fragile — any future rule with equal or higher specificity than `html` added after this block could re-break the feature again. The more robust fix is to target `html` explicitly inside the media query (matching the base rule's specificity and letting normal cascade order — not `!important` — decide it), rather than relying on the universal selector.

### Low — Deprecated `clip` property in the visually-hidden utility

[css/styles.css](css/styles.css#L76-L82):

```css
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}
```

`clip` is legacy CSS; ESLint's `css/use-baseline` rule flags it as not a widely-available baseline feature. The commonly recommended modern replacement is `clip-path: inset(50%)`, which produces the same visually-hidden-but-AT-accessible result without relying on a deprecated property.

### Low — `scrollbar-width` flagged as not yet baseline

[css/styles.css](css/styles.css#L381-L387):

```css
@media (max-width: 640px) {
  ...
  .section-nav ul {
    overflow-x: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .section-nav ul::-webkit-scrollbar { display: none; }
}
```

This is a progressive-enhancement pattern (hide the scrollbar cross-engine) and is functionally harmless, but `scrollbar-width` doesn't yet meet the linter's "widely available baseline" bar. Low severity — acceptable to keep as an intentional exception, but it is why the CSS lint currently fails outright rather than passing with warnings only.

### Medium — Professional-profile links are not real destinations

[index.html](index.html#L33-L34):

```html
<li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn…</a></li>
<li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub…</a></li>
```

Both links point at the generic root domain rather than an actual profile URL, so a visitor gains nothing by clicking them. This is the same placeholder-link pattern found in the ChatGPT-generated resume audit — worth noting as a recurring generation gap across models, since raw resume prompts rarely supply real profile URLs and neither AI flagged the omission as something the user must supply before publishing.

### Low — Telephone number is not wrapped for non-breaking display

[index.html](index.html#L31) and [index.html](index.html#L187):

```html
<li><a href="tel:+12062404700">(206) 240-4700</a></li>
```

The displayed number uses an ordinary space and hyphen, so it can wrap mid-number in narrow layouts (e.g. between "(206)" and "240-4700", or between "240" and "4700"). The accessible-typography fix is a non-breaking space (`&nbsp;`) and non-breaking hyphen (`&#8209;`), the same fix already identified for the sibling ChatGPT-generated resume. This appears twice (header contact list and footer contact list), so both instances need the same correction.

### Informational — Decorative heading index numbers are read aloud by screen readers

[index.html](index.html#L52), and similarly at lines 123 and 138:

```html
<h2 id="experience-heading"><span class="heading-index">01</span> Experience</h2>
```

The `01`/`02`/`03` prefixes are a nice visual "build log" touch, but because they're plain inline text inside the heading (not `aria-hidden`), assistive technology will announce them as part of the heading name — e.g. "zero one, Experience." This doesn't break the heading hierarchy and isn't a WCAG failure, but hiding the numeral from the accessibility tree with `aria-hidden="true"` on the `.heading-index` span would make the announced heading text match what a reader actually needs ("Experience" rather than "01 Experience").

## Requirements Met (No Action Needed)

- Semantic landmarks throughout: `header`, `nav` (×2), `main`, `section` (×3), `article` (×6), `footer`. No `div`/`span` is used where a semantic element would fit better — the remaining `div`s (`.terminal-bar`, `.header-content`, `.education-item`, `.skills-grid`) are pure presentational/layout wrappers with no better semantic alternative.
- `aria-labelledby` correctly links every `section` and `article` to its own heading — this exceeds the assignment's baseline ask.
- Skip link (`.skip-link` → `#main`) and a visible `:focus-visible` style are both present, matching the WCAG 2.1 AA framing of the original prompt.
- Layout is 100% Flexbox/Grid; no `float` or inline `style` attributes exist anywhere in `index.html` or `css/styles.css` (confirmed by full-file search).
- A fluid type scale (`clamp()`-based custom properties) and two responsive breakpoints (640px, 420px) are present and functional.
- `prefers-reduced-motion` is explicitly handled (see the specificity finding above for the one caveat).
- `lang="en"`, `<title>`, `<meta name="description">`, and a responsive `<meta name="viewport">` are all present.

## Test Results

| Check | Result | Notes |
| --- | --- | --- |
| CSS lint (`eslint css/styles.css`, no cache) | Failed | 3 errors: `clip` (line 79), `scrollbar-width` (line 384), `!important` (line 398). |
| Focused Chromium browser tests (`tests/layout.spec.js`) | Passed | All 9 tests passed in 1.6 seconds, including heading-order and time-tag assertions. |

## Tooling Note

Running `npm run lint` normally reported 0 errors, while running the same lint rules with `--no-cache` reported the 3 errors above. The project's `.eslintcache` file was generated against a temporarily corrected version of `css/styles.css` earlier in this session; once the file reverted to its current state, the cache no longer matched the source but ESLint still treated it as up to date. This is not a defect in the resume itself, but it means `npm run lint` should be run with `--no-cache` (or the `.eslintcache` file should be deleted) to get a trustworthy result until the cache naturally invalidates.

## Recommended Remediation Order (Not Applied)

1. Restructure the `prefers-reduced-motion` rule to target `html` directly instead of `*`, removing the need for `!important`.
2. Replace `clip: rect(0 0 0 0)` with `clip-path: inset(50%)` in `.visually-hidden`.
3. Replace the LinkedIn/GitHub placeholder URLs with real profile links, or remove those list items until real URLs are available.
4. Wrap both phone number instances with a non-breaking space and non-breaking hyphen.
5. Add `aria-hidden="true"` to the three `.heading-index` spans so screen readers announce only the section name.
6. Decide whether to keep `scrollbar-width: none` as an accepted exception or drop it; if kept, consider a scoped ESLint disable comment so the lint result reflects an intentional decision rather than an unresolved failure.
7. Add a genuine copyright or data-privacy line to `<footer class="site-footer">`.
