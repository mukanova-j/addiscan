import { writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.argv[2] ?? "dist/client";
const basePath = process.argv[3] ?? "/addiscan/";

const ssrPath = new URL(
  "node_modules/.nitro/vite/services/ssr/index.js",
  "file://" + process.cwd() + "/"
).href;

const ssrModule = await import(ssrPath);
const handler = ssrModule.default ?? ssrModule;

const request = new Request(`http://localhost${basePath}`);
const response = await handler.fetch(request);

if (!response.ok) {
  throw new Error(
    `SSR render failed: ${response.status} ${response.statusText}`
  );
}

const html = await response.text();
const outputPath = join(outputDir, "index.html");
writeFileSync(outputPath, html);
console.log(`Generated ${outputPath} (${html.length} bytes)`);
