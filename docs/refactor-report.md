# Refactor report — NBU unofficial mockup

**Reviewed lineage:** Lead-approved commits `ee21d6b`, `ed7f63e`, `aca8a33`, `6aa3d35`, and `4a0faf7657eb7040cae1914a7001c1e1905cc65e`, cherry-picked locally before this refactor.
**Review date:** 2026-10-08 (Asia/Bangkok)

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
