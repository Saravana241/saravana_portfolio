# Saravana Kumar M — Portfolio

A responsive, single-page portfolio built with React, TypeScript, and Vite. The project keeps portfolio content and technology-icon mappings in `src/data/portfolio.ts`, uses bundled Simple Icons from `react-icons`, and uses text marks where no suitable brand icon is available. Project previews are local CSS illustrations; no external images, analytics, or profile links are required.

## Local development

```powershell
npm install
npm start
```

Vite prints the local development URL in the terminal.

## Production build

```powershell
npm run build
npm run preview
```

The production site is generated in `dist/`.

## Projects

Add, edit, reorder, feature, or remove projects in the `projects` array in `src/data/portfolio.ts`. Each project has a unique `id`, title, category, description, and technology list. Optional fields support status, professional/personal classification, features, contributions, implementation notes, screenshots, supported CSS illustrations, external links, and case-study details. Add any verified projects here; there is no requirement that every portfolio project appear on a resume.

Set `featured: true` to show a project in the featured layout; leave it unset or set it to `false` for a regular card. Array order controls the order within the featured and regular project groups. Set `status` or `workType` only when the project details are confirmed. Provide screenshot `src` and meaningful `alt` text, or add only verified GitHub, live-demo, and case-study URLs. Projects without screenshots or a supported illustration render without a fabricated preview.

## Resume

To enable the resume buttons, add the real PDF at:

`public/resume/Saravana_Kumar_Resume.pdf`

The buttons currently explain that the file is not available rather than linking to a missing or fabricated document.

## Portfolio details to supply

- Add verified GitHub and LinkedIn URLs before publishing them.
- Add verified project repository or live-demo URLs when available.
- Add genuine, privacy-checked project screenshots if desired. Current project previews are illustrative CSS mockups, not product screenshots.
- Confirm current employment status and update the experience date in `src/App.tsx` if appropriate.

## Deploy to Vercel

1. Push the project to a Git repository and import that repository in Vercel, or install the Vercel CLI and run `vercel` from the project directory.
2. Use the default Vite settings: build command `npm run build`, output directory `dist`, and install command `npm install`.
3. Deploy with the Vercel dashboard or run `vercel --prod` after linking the project.

This repository is prepared for deployment; the site has not been deployed by this project setup.
