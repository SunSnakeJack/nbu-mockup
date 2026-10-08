# Round 2 visual research: North Bangkok University homepage

## Status and evidence boundary

**Target:** <https://northbkk.ac.th/>
**Attempted:** 2026-10-08 21:38:33 +07:00 (Asia/Bangkok)
**Required capture viewports:** 1440 x 900, 768 x 1024, and 390 x 844 CSS pixels.

Recovery observation at 2026-10-08 21:39–21:45 +07:00: the escalated absolute AO CLI connected to session `nbu-mockup-2`, opened <https://northbkk.ac.th/>, completed a load wait, and produced live accessibility snapshots. AO painted-panel screenshot calls timed out while the panel was not paintable. The Lead-authorized fallback used the already installed Google Chrome headless mode with isolated temporary profiles, `--virtual-time-budget=7000`, `--hide-scrollbars`, and explicit `--window-size` values. The resulting PNGs were saved outside Git and inspected visually.

The following remain **not observed and must not be inferred from this report**:

- device scale factor, computed CSS/font values, exact source CSS/image/font URLs, licensing, and hover-only dropdown appearance;
- full below-fold visual sequence and footer visual layout (AO scroll worked, but painted AO screenshots timed out and headless initial captures do not scroll);
- exact responsive breakpoints: only three captured widths establish observed states.

## Capture ledger

| Requested viewport | URL | UI state | Result | Capture method | Screenshot artifact |
| --- | --- | --- | --- | --- | --- |
| 1440 x 900 | <https://northbkk.ac.th/> | Initial homepage | Captured, actual PNG 1440 x 900 | Chrome headless fallback, 7 s virtual-time budget | `homepage-1440x900-initial.png` |
| 768 x 1024 | <https://northbkk.ac.th/> | Initial homepage | Captured, actual PNG 768 x 1024 | Chrome headless fallback, 7 s virtual-time budget | `homepage-768x1024-initial.png` |
| 390 x 844 | <https://northbkk.ac.th/> | Initial homepage | Captured, actual PNG 390 x 844 | Chrome headless fallback, 7 s virtual-time budget | `homepage-390x844-initial.png` |
| 1440 x 900 | <https://northbkk.ac.th/bachelor.php> | Initial public internal page | Captured, actual PNG 1440 x 900 | Chrome headless fallback, 7 s virtual-time budget | `bachelor-1440x900-initial.png` |

Screenshot artifacts are external-only at `C:\Users\BearYang\.ao\data\artifacts\nbu-mockup-2\visual-research\2026-10-08\`. No third-party image or binary was added to the repository.

## Observed rendering and responsive behaviour

All dimensions below are **estimates measured from captured PNG pixels**, not computed CSS values.

- **Desktop 1440:** a grey utility header is about 78 px high; it contains the white NBU wordmark at roughly x=87–173, five blue rounded utility buttons, and a language control aligned right. A saturated-blue primary nav is about 56 px high below it. Its seven observed labels run left-to-right: Home, About (chevron), Faculties/Colleges (chevron), Research/Research Work (chevron), Library, Online Services (chevron), Contact. Source: `homepage-1440x900-initial.png`, <https://northbkk.ac.th/>.
- **Desktop hero:** a pale architectural-photo background sits behind a centered carousel panel around x=71–1369 (about 1298 px wide) and y=184–656 (about 472 px high). The observed slide uses a dark-blue sports graphic, white left/right chevrons, photographed athletes, Thai copy, and a QR code. This is visual evidence only; none of it is cleared for reuse. Source: `homepage-1440x900-initial.png`.
- **Tablet 768:** utility links wrap to a second line and the primary nav collapses to a 55 px blue bar with a left hamburger. The carousel is approximately x=36–732 and y=234–488. Five large light-blue pathway cards are visible below; four fit in the first row and scholarship starts a centered second row. Source: `homepage-768x1024-initial.png`.
- **Mobile 390:** utility controls visibly overflow/crop horizontally rather than fitting the viewport; a single blue navigation bar shows a hamburger at left. The carousel is a much taller cropped presentation beginning around y=275. The captured fold ends before pathway cards. Source: `homepage-390x844-initial.png`.
- **Bachelor page desktop:** the same two-tier header/nav is retained. A full-width blue banner follows, then a centered faculty grid of light-gray tiles. Some student/person photography appears in the banner; it is not reusable. Source: `bachelor-1440x900-initial.png`, <https://northbkk.ac.th/bachelor.php>.

## Colour and shape estimates

Manual visual sampling from PNG pixels (not a colour-picker export): utility header approximately `#727e87`; primary navigation approximately `#0d6efd`; utility buttons approximately `#129bd5`; pathway cards approximately `#a8d0f0`; white page surface `#ffffff`; dark icon/text approximately `#1f405f`. Buttons and pathway cards appear to use small rounded corners (estimate 4–6 px); no reliable shadow is visible in the captured fold. Treat all codes as **estimates**.

## Live AO interaction evidence

- AO snapshot exposed `Toggle navigation` with `expanded=false`; a normal AO click was accepted. The subsequent snapshot still reported `expanded=false`, so expanded-menu visual/semantic state is **not verified**.
- The homepage exposes `Previous` and `Next` carousel buttons; AO accepted a click on `Next` followed by a 1-second wait. The snapshot does not identify the rendered slide, so slide transition visuals remain unverified.
- AO scrolling commands were issued for 800 px and then 1600 px. The accessibility tree continued to expose NBU Highlights, public-relations news, affiliated organisations, faculty links, staff, and contact headings. Because AO painted screenshots timed out, this is below-fold **structural/interaction evidence**, not a visual footer capture.

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
