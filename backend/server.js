const express = require("express");
const path = require("node:path");
const app = express();
app.disable("x-powered-by");
app.use((req, res, next) => {
  res.set("X-Content-Type-Options", "nosniff");
  res.set("X-Frame-Options", "DENY");
  next();
});
app.get("/healthz", (req, res) =>
  res.json({ status: "ok", app: "tip-original" }),
);
app.use(express.static(path.join(__dirname, "../build")));
app.use((req, res) => res.status(404).type("text").send("Page not found."));
if (require.main === module) {
  const port = Number(process.env.PORT || 4104);
  app.listen(
    port,
    process.env.HOST ||
      (process.env.NODE_ENV === "production" ? "0.0.0.0" : "127.0.0.1"),
    () => console.log(`Tip original: http://localhost:${port}`),
  );
}
module.exports = app;
