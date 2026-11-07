const test = require("node:test");
const assert = require("node:assert/strict");
const app = require("../server");
test("static-only service has a health endpoint and no browser session", async (t) => {
  const server = await new Promise((resolve) => {
    const s = app.listen(0, "127.0.0.1", () => resolve(s));
  });
  t.after(
    () =>
      new Promise((resolve) => {
        server.close(resolve);
        server.closeAllConnections();
      }),
  );
  const response = await fetch(
    "http://127.0.0.1:" + server.address().port + "/healthz",
  );
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), {
    status: "ok",
    app: "tip-original",
  });
  assert.equal(response.headers.get("set-cookie"), null);
  assert.equal(response.headers.get("x-content-type-options"), "nosniff");
});
