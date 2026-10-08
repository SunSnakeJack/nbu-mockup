# Visual design specification handoff — evidence-limited

## Scope

This is a screenshot-backed handoff guardrail, not a reproduction specification. Three homepage viewport PNGs and one bachelor-page PNG were captured and visually inspected. Values marked `estimate` are screenshot ruler/manual-sampling readings; only PNG dimensions are observed metadata. Computed CSS, font files, and exact breakpoints remain unknown.

## Measurement status

| Token or layout property | Value | Status | Method/source |
| --- | --- | --- | --- |
| Desktop viewport | 1440 x 900 PNG | Observed | Chrome headless PNG metadata. |
| Tablet viewport | 768 x 1024 PNG | Observed | Chrome headless PNG metadata. |
| Mobile viewport | 390 x 844 PNG | Observed | Chrome headless PNG metadata. |
| Header height | ~78 px | Estimate | Desktop PNG ruler estimate. |
| Utility-bar height | ~78 px desktop; ~129 px tablet; ~170 px mobile | Estimate | PNG ruler estimate; mobile utility content visibly overflows. |
| Desktop navigation height | ~56 px | Estimate | Desktop/tablet PNG ruler estimate. |
| Main container max-width | ~1298 px carousel panel at 1440 | Estimate | Desktop PNG ruler estimate. |
| Grid gaps / section spacing | Desktop cards begin below a large white gap; tablet cards use ~24 px gaps | Estimate | Visually inspected PNG ruler estimate. |
| Card radius / border / shadow | Small radius ~4-6 px; no reliable shadow visible | Estimate | Visually inspected PNG. |
| Brand, surface, text, and accent colours | Grey ~#727e87; blue ~#0d6efd; button ~#129bd5; card ~#a8d0f0 | Estimate | Manual visual sampling of PNG pixels. |
| Font family, sizes, weights, line heights | Thai sans-serif appears bold in navigation and display-weight in banners; computed values unknown | Observation / unknown CSS | Visually inspected PNG; no CSS inspection. |
| Hero/banner aspect ratio and crop | ~1298 x 472 desktop; tall/cropped mobile presentation | Estimate / observed state | PNG ruler estimate. |
| Footer layout | Saturated-blue two-column footer; yellow headings, white links, divider, copyright left/social icons right | Estimate / observed state | Visually inspected 1440 x 6000 tall Chrome PNG. |
| Highlights/news grids | Highlights: 4 cards across on dark-blue photo overlay; News: 4 columns x 2 rows on near-white surface | Estimate / observed state | Visually inspected 1440 x 6000 tall Chrome PNG. |
| Affiliate logos | Two loose desktop rows on white; exact logos/assets not reusable | Observed state | Visually inspected 1440 x 6000 tall Chrome PNG. |
| Responsive breakpoints and menu transformation | At 768 and 390 primary nav collapses to hamburger; utility bar wraps at 768 and overflows at 390 | Observed states; breakpoint thresholds unknown | Three visual PNGs. |

## Verified information architecture (non-visual)

The public homepage text exposes utility links, About, Faculties/Colleges, Research, Online Services, study pathways, highlights/news, and contact phones. Source: <https://northbkk.ac.th/>.

The faculty destination set is IT and Digital Innovation, Business Administration, Liberal Arts, Political Science, Communication Arts, Education, Nursing, Graduate School, and International College. Source: <https://northbkk.ac.th/>.

These facts support content grouping only. They do **not** establish menu nesting, visual order, menu trigger labels, or responsive presentation.

## Implementation/QA guidance for Worker 2

- Preserve the project's unofficial educational-mockup disclaimer.
- Do not alter implementation solely to mimic source-site visual styling until a later researcher supplies screenshot-backed values.
- For screenshot QA, compare only the project’s approved mockup specification to its own references; do not claim pixel parity with `northbkk.ac.th` from this document.
- Keep source-linked content facts in data with a source URL. Treat application, scholarship, and authenticated-service links as outbound handoffs unless their exact public targets are verified.
- Use original illustrations/photos/icons or licensed assets. Do not download/recommit third-party source images, logos, webfonts, or screenshots by default.

## Future measurement protocol

For each viewport, record: browser viewport, device scale factor, URL, timestamp, scroll position, UI state, screenshot filename, and tool. Measure header/nav blocks, content container edges, card dimensions, gaps, radius, shadow, dominant sampled colours, font computed styles, hero image box/crop, and footer boundaries. Mark direct ruler/computed-style readings `observed`; values derived from scaled screenshots `estimate`.
