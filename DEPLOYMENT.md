# Vercel deployment preparation

This repository remains an independent maintained original. Its local `npm start` launcher and original interface are unchanged. The deployment adapter has not been verified on Vercel or against Neon; a successful local build is not a live deployment check.

## Project settings

Create a separate Vercel project for this repository. **Before the first deployment, select `maintained-original` as the production branch and verify that the deployment source is that branch.** Do not accept a Git import that would immediately deploy the default `main` branch; configure the branch first or use a branch-specific import flow. `main` contains the historical, unmaintained application and must not be deployed using these instructions.

Use the repository root as Root Directory and Node.js 24.x. Package engines are pinned to `24.x` (including lockfile metadata), so Vercel cannot select a later major from a broad `>=22` range. The checked-in `vercel.json` selects the Other preset, installs the required locked dependencies, runs `npm run build:vercel`, and publishes `vercel-static`. Do not override these commands with the development server or point the CDN at the source `public` directory.

The build compiles CRA with source maps disabled, then stages only compiled static assets and the existing public files. Environment files, Git history, backend source, and source maps are excluded from the public output. Do not put secrets in `REACT_APP_*`: CRA embeds those variables in browser bundles. `.vercelignore` also excludes private local configuration and historical backend entry files from uploads.

Only `/` serves the application shell. Missing assets and unknown UI routes must remain 404. No blanket SPA fallback is configured. Static responses receive the maintained server's basic security headers.

## Static-only deployment

Tip needs no function, database, cookies, or environment variables. Its local Express server remains available for local use; Vercel serves only the compiled calculator. The local `/healthz` endpoint is not deployed; use `/` and its assets for a deployment smoke check.

## Checks and free-tier limits

Run `npm run test:deployment` and `npm run build:vercel` locally. Artifact tests cover accidental private-file inclusion, source maps, missing compiled assets, raw CRA templates, and the bounded routing configuration. They do not emulate Vercel's routing engine or function bundler.

Before enabling the public hub link, verify a Vercel preview: direct known UI routes, compiled JS/CSS, unknown-route and missing-asset 404s, response headers, and external lookups. For saved-data apps, additionally verify function tracing, cookie issuance, refresh persistence, two-browser isolation, mutation Origin rejection, encoded IDs, database sleep/resume, and failures without raw database errors. Rate controls and the legacy dependency review remain public-deployment gates. No paid resources are required by this preparation.

Vercel Hobby is intended for personal, non-commercial use and has usage limits. Neon Free has storage/compute/transfer limits and scales to zero after five idle minutes; free hosting does not provide an always-on database promise. Check current account eligibility and allowances before deployment.

References: [Vercel static configuration](https://vercel.com/docs/project-configuration/vercel-json), [Node functions](https://vercel.com/docs/functions/runtimes/node-js), [Express static-serving limitation](https://vercel.com/docs/frameworks/backend/express), [Hobby plan](https://vercel.com/docs/plans/hobby), [Neon plans](https://neon.com/docs/introduction/plans).

Local verification on 2026-11-06: `npm run build:vercel` passed and 3 deployment tests passed. Existing HTTP tests were attempted but blocked by `listen EPERM` in this sandbox. Vercel and Neon runtime verification has not been performed.

The inherited manifest referenced three icon files absent from this repository. Those stale icon entries were removed; no replacement artwork or UI change was introduced.
