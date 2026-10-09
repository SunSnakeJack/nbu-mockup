# Refactor report — NBU unofficial mockup

**Reviewed lineage:** Lead-approved commits `ee21d6b`, `ed7f63e`, `aca8a33`, `6aa3d35`, and `4a0faf7657eb7040cae1914a7001c1e1905cc65e`, cherry-picked locally before this refactor.
**Review date:** 2026-10-08 (Asia/Bangkok)

## Round 2 visual refinement, Cycle 1

| QA item | Disposition | Change |
| --- | --- | --- |
| VQA-01: the 26 px disclosure shifted the source-equivalent header and hero stack | Fixed. | Moved the disclosure out of normal flow: it is an absolute compact overlay at desktop/tablet widths and a compact fixed lower overlay at the 390 px mobile state. The utility header, primary navigation, and hero now begin at their prior source-equivalent document positions. |
| VQA-02 through VQA-06 | Preserved. | No geometry, content, asset, font, logo, QR, photo, affiliate-mark, or carousel changes were made. |
| AO Browser click limitation | Not an application defect. | No interaction change was made or claimed. |

### Cycle 1 validation evidence

- Final external-only screenshots: `C:\Users\BearYang\.ao\data\artifacts\nbu-mockup-4\round2-visual-qa\cycle1-final\homepage-1440x900-final.png`, `homepage-768x1024-final.png`, `homepage-390x844-final.png`, and `homepage-1440x6000-final.png`.
- Visual comparison against the Worker 1 references and Worker 3 overlay evidence confirms that the former 26 px normal-flow offset is absent. At 1440 and 768 the compact top overlay ends before the visible utility controls; at 390 it is fixed beneath the visible hero rather than covering the utility controls, hamburger, or hero content.
- Local HTTP checks returned `200` for `/`, `/programs`, `/bachelor`, `/faculties`, `/news`, `/admissions`, `/student-services`, `/about`, `/research`, and `/contact`.
- The current environment could not invoke the AO browser executable at the supplied path, so no new AO click conclusion is made. The existing QA-LIM-01 disposition remains unchanged.
- Remaining visual mismatches are only the documented safe substitutions: text wordmark/system font metrics and original CSS/Lucide geometry in place of source logos, photos, QR code, carousel imagery, and affiliate marks.

## QA disposition and changes

| QA item or review finding | Disposition | Change |
| --- | --- | --- |
| No confirmed implementation defects | Preserved. No visual or content corrections were made. | UI copy, routes, data values, and component markup remain behaviorally equivalent. |
| QA-LIM-01: AO Browser click dispatch did not yield an observed route or menu state change | Reproduced as an environment limitation, not treated as an application defect. | No speculative interaction change. Direct route checks still load the expected route content; source retains the mobile menu state toggle and route-selection close handler. |
| Service icon lookup used a type assertion | Fixed as a maintainability/type-safety refactor. | Added `ServiceIcon` and `ServiceItem` types in `src/data.ts`; `iconMap` is now exhaustive over `ServiceIcon`, so `ServiceCard` no longer casts its key. |
| Safe external-link attributes repeated across reusable card components | Reduced without changing destination behavior. | Added `OutboundLink`, which consistently supplies `target="_blank"` and `rel="noreferrer"`; applied it to faculty, news, service, and external step cards. |
| `StepCard` accepted optional internal and external destinations simultaneously and used a non-null assertion | Fixed with a discriminated union. | `StepCardProps` now requires exactly one destination form: `href` for external links or `link` for internal React Router links. |

## Validation

| Check | Result |
| --- | --- |
| `npm run lint` | Passed (exit 0). |
| `npm run typecheck` | Passed (exit 0). |
| `npm run build` | Passed (Vite transformed 1,908 modules). |
| AO Browser direct routes | Passed for `/`, `/faculties`, `/programs`, `/news`, `/admissions`, and `/student-services`; expected route headings loaded. |
| AO Browser errors | No browser errors captured. |
| AO Browser click postcondition | Still unmet for visible `Faculties` navigation at `http://127.0.0.1:4174/`; input was dispatched but no URL change was observed before timeout. This matches QA-LIM-01 and does not establish an application defect. |

## Remaining risks

- Manual verification is still required for mobile menu open/close, click-driven SPA navigation, and exact responsive viewport layouts because the AO Browser did not observe state/URL changes after dispatched clicks and has no viewport-resize control.
- The refactor deliberately did not alter the existing content-research claims or external URLs; their freshness remains governed by the source research and official NBU destinations.
