# Visual design specification handoff — evidence-limited

## Scope

This is a handoff guardrail, not a reproduction specification. The Round 2 session could not access the required AO visual browser, so it contains no measured source-site styles. A later visual pass must replace `unknown` entries with screenshot-backed measurements and cite the screenshot filename from `docs/reference-manifest.md`.

## Measurement status

| Token or layout property | Value | Status | Method/source |
| --- | --- | --- | --- |
| Desktop viewport | Unknown | Not observed | Requested 1440 x 900 capture was unavailable. |
| Tablet viewport | Unknown | Not observed | Requested 768 x 1024 capture was unavailable. |
| Mobile viewport | Unknown | Not observed | Requested 390 x 844 capture was unavailable. |
| Header height | Unknown | Not observed | No rendered page. |
| Utility-bar height | Unknown | Not observed | No rendered page. |
| Desktop navigation height | Unknown | Not observed | No rendered page. |
| Main container max-width | Unknown | Not observed | No rendered page. |
| Grid gaps / section spacing | Unknown | Not observed | No rendered page. |
| Card radius / border / shadow | Unknown | Not observed | No rendered page. |
| Brand, surface, text, and accent colours | Unknown | Not observed | No painted pixels; do not invent approximate hex codes. |
| Font family, sizes, weights, line heights | Unknown | Not observed | Font requests/CSS were not visually inspected. |
| Hero/banner aspect ratio and crop | Unknown | Not observed | No visual capture. |
| Footer layout | Unknown | Not observed | Below-fold content was not visually inspected. |
| Responsive breakpoints and menu transformation | Unknown | Not observed | No multi-viewport capture. |

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
