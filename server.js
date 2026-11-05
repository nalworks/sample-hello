import http from "node:http";
import { greeting } from "./greeting.js";

const port = Number(process.env.PORT ?? 8080);

const page = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Sample Hello</title>
    <style>
      :root { color-scheme: light dark; }
      body { margin: 0; min-height: 100vh; display: grid; place-items: center;
             font-family: system-ui, -apple-system, "Segoe UI", sans-serif; }
      main { text-align: center; }
      h1 { font-size: clamp(2rem, 6vw, 3.5rem); margin: 0 0 .5rem; }
      p  { opacity: .7; margin: 0; }
    </style>
  </head>
  <body>
    <main>
      <h1>${greeting()}</h1>
      <p>sample-hello · deployed on Agent Runway</p>
    </main>
  </body>
</html>`;

const server = http.createServer((req, res) => {
  const pathname = new URL(req.url, "http://localhost").pathname;

  if (pathname === "/health") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ ok: true }));
    return;
  }

  if (pathname === "/") {
    res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
    res.end(page);
    return;
  }

  res.writeHead(404, { "content-type": "application/json" });
  res.end(JSON.stringify({ error: "not found" }));
});

server.listen(port, () => {
  console.log(`sample-hello listening on http://0.0.0.0:${port}`);
});
