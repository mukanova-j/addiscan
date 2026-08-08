import { readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.argv[2] ?? "dist/client";
const assetsDir = join(outputDir, "assets");

const assets = readdirSync(assetsDir);
const css = assets.find((name) => name.endsWith(".css"));
const js = assets.find((name) => name.startsWith("index-") && name.endsWith(".js"));

if (!css || !js) {
  throw new Error(`Could not find required assets in ${assetsDir}`);
}

const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>AddiScan Capstone Project Presentation</title>
    <meta
      name="description"
      content="AddiScan is a capstone project that reads a food label photograph and reports which additives carry documented health risks."
    />
    <meta
      property="og:title"
      content="AddiScan Capstone Project Presentation"
    />
    <meta
      property="og:description"
      content="Technical overview of AddiScan, a food additive safety scanner built with ASP.NET Core, Blazor Server, and Tesseract.NET."
    />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=IBM+Plex+Sans:wght@400;500;600&display=swap"
    />
    <link rel="stylesheet" href="assets/${css}" />
    <link rel="icon" href="favicon.ico" type="image/x-icon" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="assets/${js}"></script>
  </body>
</html>
`;

writeFileSync(join(outputDir, "index.html"), html);
console.log(`Generated ${join(outputDir, "index.html")}`);
