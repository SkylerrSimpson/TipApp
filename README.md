# TipApp: maintained original

The original React UI is retained. This is an independent Git repository based on [SkylerrSimpson/TipApp](https://github.com/SkylerrSimpson/TipApp) at `d4b37b8577ec26c3c57c96b039485fb9091e7e44`, with fetched upstream history and local maintenance changes on `maintained-original`. No changes were pushed. See [MAINTENANCE.md](MAINTENANCE.md) for explicit behavior/backend changes and [README.upstream.md](README.upstream.md) for the historical instructions.

## Run independently

Use Node 24 (Node 22+ required by the server). From this repository:

1. Install the original frontend: `npm ci --ignore-scripts`.
2. Install the maintained server: `npm --prefix backend ci --ignore-scripts`.

Build with `npm run build`, then run `npm start`. Open **http://localhost:4104**. One server serves the original production React build and its API; no Render account, cross-origin API host, global nodemon, port 3000, or port 8000 is needed. Known React deep links use the app shell; unknown paths and missing assets return HTTP 404. Development binds to loopback. With `NODE_ENV=production`, the server binds to `0.0.0.0` (override with `HOST` if needed); the hosting platform must terminate HTTPS.

For a calculator-only frontend dev server use `HOST=127.0.0.1 PORT=4204 npm run dev`.

For all four originals together, the sibling [local setup guide](../README.md) provides a separate Docker PostgreSQL service and random local env generation. Each repository also works independently with its own provisioned PostgreSQL service.

## Checks

`npm --prefix backend test` exercises the server contract and browser ownership with an in-memory test adapter; it does not prove PostgreSQL connectivity. The static-server check verifies the health endpoint and serving behavior. `npm run build` verifies the original CRA build. See [VALIDATION.md](VALIDATION.md) for checks actually completed in this workspace.

## Private configuration

`.env` files and build outputs are ignored. Never commit connection strings or database passwords. This app stores no saved data.
