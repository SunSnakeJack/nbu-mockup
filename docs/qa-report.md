# QA report — NBU unofficial mockup

**Tested lineage:** Worker 2 commits `e300521`, `142bdf8`, and `a10bbe7`, cherry-picked locally as `ee21d6b`, `ed7f63e`, and `aca8a33` respectively.
**Test date:** 2026-10-08 (Asia/Bangkok)
**Overall decision:** **PASS with one browser-automation limitation.** No implementation defect was confirmed.

## Environment and setup

- Windows / Node.js / npm; local Vite dev server at `http://127.0.0.1:4173/`.
- `npm install` initially failed under the filesystem sandbox because it could not access the shared npm cache (`EPERM`). The approved retry completed successfully: 177 packages installed, 178 audited, 0 vulnerabilities.
- The supplied commits were verified by the successful cherry-pick sequence and expected files: `docs/research.md`, React/Vite source, package manifest, and lockfile.

## Commands and results

| Command | Actual result | Status |
| --- | --- | --- |
| `npm install` | Completed after cache-access retry: 177 packages added; 0 vulnerabilities reported. | Pass |
| `npm run lint` | ESLint exited `0`. | Pass |
| `npm run typecheck` | `tsc -b --pretty false` exited `0`. | Pass |
| `npm run build` | `tsc -b && vite build` exited `0`; Vite built 1,908 modules. | Pass |
| `npm run dev -- --host 127.0.0.1 --port 4173` | Vite served successfully at the stated local address. | Pass |
| AO Browser direct-route checks | `/`, `/faculties`, `/programs`, `/news`, `/admissions`, and `/student-services` loaded and exposed their expected route-specific headings/content. | Pass |
| AO Browser error check | No page errors reported. Console contained only Vite connection messages and the React DevTools informational message. | Pass |

## Requirements validation

| Area | Evidence | Result |
| --- | --- | --- |
| Routes | Browser confirmed the expected URL and route content for all six declared routes. The faculties route showed all nine destinations; programs showed Bachelor’s, Graduate, and Short courses; news showed the three sourced notices; admissions showed the three pathway steps; services showed six service cards. | Pass |
| Responsive implementation | Source review confirms mobile-first base styles, a `320px` body minimum, and `sm`, `md`, and `lg` responsive Tailwind breakpoints across navigation and grid layouts. The AO Browser’s active viewport rendered the compact header with an `Open menu` control rather than desktop navigation. | Pass (implementation), see limitation below |
| Mobile menu | The control is present with `aria-expanded`, and source toggles menu state and closes it on route selection. AO Browser click dispatch did not produce an observed DOM change; therefore runtime open/close behavior is not confirmed. | Not verified |
| Visible-interaction SPA navigation | Attempts to click the visible `Faculties` link and `Open menu` button were dispatched by AO Browser, but both timed out waiting for URL/DOM changes. Direct route loading rendered every route correctly. | Not verified by click automation |
| Content accuracy | Compared `src/data.ts` and rendered content to `docs/research.md`: all nine faculties/colleges, listed program examples, official faculty/service/program URLs, three news references, caveats about admissions data and `student.php` 403, and all three campus telephone contacts are consistent with the approved research. No unsupported tuition, duration, eligibility, or deadline claims found. | Pass |
| Unofficial status | The top banner, README, and footer identify the project as an unofficial concept and link to the official NBU site. | Pass |

## Defects and limitations

### QA-LIM-01 — AO Browser did not observe any interaction state change

- **Severity:** Test limitation (not an implementation defect)
- **Status:** Unresolved in this environment
- **Reproduction:** Open `http://127.0.0.1:4173/` in the AO Browser, invoke `ao browser act "Open menu" --expect-dom-change`, then snapshot. The action is reported as dispatched, but the snapshot remains `aria-expanded=false` and menu links are absent. Repeating with visible `Faculties` and an expected `/faculties` URL also dispatches the click but times out without navigation.
- **Observed controls:** The same browser successfully loads direct URLs and reports no page errors; the console has only development connection/information messages. This prevents attribution to the application. Manual browser verification at mobile and desktop widths is still needed before final sign-off.
- **Impact:** Mobile menu behavior, click-driven client-side navigation, and visual layout at multiple exact viewport widths cannot be certified from this AO Browser run. The browser command set available in this session has no viewport-resize operation.

No confirmed application defects were found.

## Initial status

Build-quality checks and direct-route/content checks passed. The following final-regression section supersedes this initial status after the Lead’s refactor handoff.

## Final Regression — 2026-10-08 (Asia/Bangkok)

**Refactor under test:** Worker 4 commit `75f5c93`, cherry-picked onto this QA lineage as `6a4a7a7` (`refactor: strengthen link and service types`). The refactor adds stronger link/service types and shared external-link behavior; it does not change the researched content, route inventory, or intended UI behavior.

### Commands and results

| Command / check | Actual result | Status |
| --- | --- | --- |
| First `npm ci` attempt | Failed with `EPERM` unlinking `node_modules\\lightningcss-win32-x64-msvc\\lightningcss.win32-x64-msvc.node`; the QA session’s previously started Vite process (PID 15696, port 4173) held the file. | Environment recovery required |
| Dependency recovery | Confirmed PID 15696 ran Vite from this worktree, stopped only that process, then reran `npm ci`. The clean install added 177 packages, audited 178 packages, and reported 0 vulnerabilities. | Pass |
| `npm run lint` | ESLint exited `0`. | Pass |
| `npm run typecheck` | `tsc -b --pretty false` exited `0`. | Pass |
| `npm run build` | `tsc -b && vite build` exited `0`; Vite transformed 1,908 modules. | Pass |
| Browser route checks | Fresh Vite server on `http://127.0.0.1:4175/`. Home loaded with its expected content; `/faculties`, `/programs`, `/news`, `/admissions`, and `/student-services` each loaded and satisfied a wait for its page-specific heading. | Pass |
| Browser content/error check | Route content remained consistent with `docs/research.md`; AO Browser reported no page errors. | Pass |
| Mobile-menu interaction | `Open menu` was visible with `aria-expanded=false`. AO Browser reported input dispatched, but timed out waiting for a DOM change; the follow-up snapshot remained closed. | Not verified — QA-LIM-01 |
| Visible SPA navigation | Clicking the visible `Faculties` link was dispatched, but the expected `/faculties` URL did not change before timeout. Direct loading of that route passed. | Not verified — QA-LIM-01 |

### Final recommendation

**PASS with limitations.** The scoped refactor preserves build, type, lint, direct-route, content, and browser-error regression results. No application defect is established by the repeated click postcondition failures because the AO Browser dispatches input without observing any state or URL change, including across a fresh server run; retain QA-LIM-01. Before release, complete manual verification of mobile-menu open/close, click-driven SPA navigation, and exact responsive layouts at representative mobile, tablet, and desktop viewport widths.
