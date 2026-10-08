# Unofficial NBU Website Concept

A responsive, multi-page interface concept for North Bangkok University built with React, TypeScript, Vite, Tailwind CSS, and React Router.

> **Disclaimer:** This is an independent, unofficial mockup. It is not operated or endorsed by North Bangkok University. Factual labels are based on public research checked on 8 October 2026; original interface summaries are mock content. Always verify current information at [northbkk.ac.th](https://northbkk.ac.th/).

## Included routes

- `/` — homepage
- `/faculties` — nine verified faculty and college destinations
- `/programs` — study-level pathways and selected program examples
- `/news` — source-linked, time-sensitive notice summaries
- `/admissions` — admissions orientation without invented deadlines or requirements
- `/student-services` — verified external service links and availability caveats

The responsive header includes an accessible mobile navigation menu. Internal pages use local client-side routing; verified external destinations open the official university or faculty pages.

## Setup and run

Requires a current Node.js LTS release and npm.

```bash
npm install
npm run dev
```

Vite prints the local development URL in the terminal.

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
```

To inspect the production build locally:

```bash
npm run preview
```

## Content provenance

Research notes and source URLs are documented in [`docs/research.md`](docs/research.md). Source URLs are also retained alongside factual entries in `src/data.ts`.

The official `student.php` endpoint returned HTTP 403 to the public crawler during research, so this mockup does not infer or recreate its contents. Authenticated university services are presented only as outbound links.

## Visual reconstruction notes

Round 2 reconstructs the approved screenshot-backed page geometry without copying source imagery, logos, fonts, QR codes, or other unlicensed assets. See [`docs/visual-implementation-notes.md`](docs/visual-implementation-notes.md) for the complete substitution ledger and fidelity limitations.
