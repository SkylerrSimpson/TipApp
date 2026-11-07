# Maintenance record — 2026-11-06

Upstream: `https://github.com/SkylerrSimpson/TipApp.git`
Source commit: `d4b37b8577ec26c3c57c96b039485fb9091e7e44`
Local branch: `maintained-original`
History: fetched directly from upstream; existing history was not rewritten. No push or production data access was performed.

## Changes

- Preserved original cyan/white/dark-cyan calculator, Space Mono, five preset percentages (5/10/15/25/50), custom Enter-to-apply workflow, per-person dollar results, Reset, and desktop/stacked composition.
- Remains a local client-side calculator with no database, user account, cookies, or payment integration. A tiny Express static server only serves its CRA production build on an isolated port.
- Retained Create React App; copied existing SVGs under `src/images` and adjusted CSS imports to satisfy CRA's source boundary.
- Fixed unstable decimal drafting, invalid/nonfinite/zero-person calculations, fractional people, and Reset retaining the custom editor. Added input labels, selected-tip semantics, proper custom input (no nested input in button), keyboard focus, live result output, and finite-result guards.
- Replaced fixed viewport-height sizing with bounded responsive sizing while retaining the established composition. Browser visual verification is still required before asserting pixel parity.

## Persistence and deployment

No persistence backend was introduced. Arithmetic runs only in the browser.



## Compatibility limits

CRA/react-scripts and the recognizable React component/style structure are retained. It is an intentionally maintained legacy UI, not a Next.js rewrite. A successful build does not establish that every transitive development dependency is vulnerability-free. Frontend external services/fonts retain their availability and privacy limitations. No automatic dependency audit fix or broad visual redesign was applied. The included server/API tests isolate external lookups and do not write to live services.

The unused CRA template test was replaced with a targeted regression check for the actual app workflow. Build dependencies remain a legacy toolchain; they are not part of the maintained Express runtime.

## Vercel preparation

Added a separate deployment configuration and compiled-asset staging step; local launchers and original UI code are unchanged. Tip deploys as a static calculator without its local Express wrapper. See [DEPLOYMENT.md](DEPLOYMENT.md) for required settings, free-tier limits, and the still-pending Vercel/Neon runtime checks. Nothing was deployed by this change.
