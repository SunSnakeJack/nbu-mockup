# Round 2 visual research: North Bangkok University homepage

## Status and evidence boundary

**Target:** <https://northbkk.ac.th/>
**Attempted:** 2026-10-08 21:38:33 +07:00 (Asia/Bangkok)
**Required capture viewports:** 1440 x 900, 768 x 1024, and 390 x 844 CSS pixels.

No visual-browser observation or screenshot was obtained in this AO worker. The required session-browser executable (`ao browser`) was first unavailable because `ao` was not found on this worker's PowerShell `PATH` (`CommandNotFoundException`). Following the Lead's correction, the specified absolute command was attempted at 2026-10-08 21:40 +07:00: `& 'C:\Users\BearYang\AppData\Local\Programs\agent-orchestrator\resources\daemon\ao.exe' browser status --json`. PowerShell returned `CommandNotFoundException`: the exact `.exe` path was not recognized as a command/program. Therefore `browser open`, snapshots, interactions, and screenshots could not run. The AO browser instructions prohibit substituting Codex/host browser connectors for the session-owned Browser panel, so no substitute browser, screenshot service, or HTML-only result is presented as a visual capture.

Consequently, the following are **not observed and must not be inferred from this report**:

- actual viewport size, device scale factor, or browser chrome;
- header/nav heights, container widths, breakpoints, spacing, radii, shadows, colours, typography, and image crop/position;
- visible homepage order below the fold, banner/carousel existence or motion, dropdown appearance/hover behaviour, footer layout, and mobile menu behaviour;
- rendered logo, image, CSS, font, or asset URLs.

## Capture ledger

| Requested viewport | URL | UI state | Result | Capture method | Screenshot artifact |
| --- | --- | --- | --- | --- | --- |
| 1440 x 900 | <https://northbkk.ac.th/> | Initial homepage requested | Not captured: AO browser CLI unavailable | None; no compliant fallback used | None |
| 768 x 1024 | <https://northbkk.ac.th/> | Initial homepage requested | Not captured: AO browser CLI unavailable | None; no compliant fallback used | None |
| 390 x 844 | <https://northbkk.ac.th/> | Initial homepage requested | Not captured: AO browser CLI unavailable | None; no compliant fallback used | None |

No artifact directory or screenshot filename was created because there was no image to store. This is intentional: no third-party image or binary has been added to the repository.

## Text-only fallback (not visual evidence)

The following navigation/content facts were recovered from public page text only. They can help a later researcher select pages to inspect visually, but they do not establish visual order, styling, or interaction.

| Public page | Text-confirmed content | Source |
| --- | --- | --- |
| Main homepage | Utility labels for register-interest/application, scholarships, E-Staff, Student, and International College; menu groups for About, Faculties/Colleges, Research, and Online Services; study-pathway links; NBU Highlights and public-relations news; footer phone contacts. | <https://northbkk.ac.th/> |
| Bachelor listing | Faculty-linked bachelor study page. | <https://northbkk.ac.th/bachelor.php> |
| Graduate listing | Faculty-linked graduate study page. | <https://northbkk.ac.th/graduate.php> |
| Short-course listing | Public links for elderly-care training and tour-guide courses. | <https://northbkk.ac.th/shortcourse.php> |
| IT and Digital Innovation faculty | Text navigation lists four fields and faculty information sections. | <https://itdi.northbkk.ac.th/> |
| Business Administration faculty | Text navigation lists degree/program links and faculty information sections. | <https://ba.northbkk.ac.th/> |
| Registrar | Public educational-services landing page with dated academic notices. | <https://reg.northbkk.ac.th/registrar/home.asp> |
| E-learning | Public course-category landing page. | <https://elearning.northbkk.ac.th/> |

## Interaction/page availability ledger

| Area | Result | Evidence | Handoff consequence |
| --- | --- | --- | --- |
| Main homepage navigation | Text links were available through public-page extraction; visual states were not inspected. | <https://northbkk.ac.th/> | Re-inspect with a painted browser before replicating any menu behaviour. |
| Dropdowns, hover/focus, keyboard controls, carousel controls | Not observed. | No compliant visual browser access | Treat as unknown; do not claim a source interaction model. |
| Student page | Public text crawler previously received HTTP 403 Forbidden. | <https://northbkk.ac.th/student.php> | Do not infer a student dashboard or its design. |
| Registrar/e-learning authenticated flows | Landing pages available; signed-in flows not inspected. | <https://reg.northbkk.ac.th/registrar/home.asp>, <https://elearning.northbkk.ac.th/> | Present only as external-service handoffs. |

## Required follow-up when visual browser is restored

1. Open the homepage in the AO Browser panel and record the browser-reported viewport before capture.
2. Capture each requested viewport in initial state, after navigation expansion/hover where supported, at least one carousel transition if present, and a footer/below-fold state.
3. Capture key public internal pages: Bachelor, Graduate, Short Course, one faculty page, Registrar landing, and E-learning landing.
4. Measure from screenshots using a stated method (pixel ruler/DevTools box model); label every value `observed` or `estimate`.
5. Record every rendered image/font/logo request URL and only reuse an asset when written permission or a compatible license is independently evidenced.

## Copyright and reuse rule

All source-site visual assets, fonts, logo treatments, photographs, and article imagery remain **not cleared for reuse**. No licence or permission evidence was obtained in this pass. Use original mockup assets and copy unless later evidence explicitly permits a particular asset.
