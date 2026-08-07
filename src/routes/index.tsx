import { createFileRoute } from "@tanstack/react-router";



export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AddiScan Capstone Project Presentation" },
      {
        name: "description",
        content:
          "AddiScan is a capstone project that reads a food label photograph and reports which additives carry documented health risks.",
      },
      { property: "og:title", content: "AddiScan Capstone Project Presentation" },
      {
        property: "og:description",
        content:
          "Technical overview of AddiScan, a food additive safety scanner built with ASP.NET Core, Blazor Server, and Tesseract.NET.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navItems = [
  ["problem", "Problem"],
  ["solution", "Solution"],
  ["grading", "Grading"],
  ["architecture", "Architecture"],
  ["security", "Security"],
  ["results", "Results"],
];


function Index() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-20 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
          <span className="font-display text-sm font-bold tracking-[0.2em] text-foreground uppercase">
            AddiScan
          </span>
          <ul className="hidden gap-6 text-sm text-muted-foreground md:flex">
            {navItems.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} className="transition-colors hover:text-primary">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <header className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto w-full max-w-5xl px-6 py-24 md:py-32">
          <p className="font-display text-xs font-semibold tracking-[0.22em] text-primary-foreground/70 uppercase">
            Capstone Project
          </p>
          <h1 className="mt-6 text-5xl font-semibold text-primary-foreground md:text-7xl">
            AddiScan
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/85 md:text-xl">
            AddiScan lets a user photograph a food product label and receive a report naming which
            additives carry documented health risks.
          </p>
          <p className="mt-10 text-sm text-primary-foreground/70">
            Food additive safety scanner. ASP.NET Core Web API, Blazor Server, SQLite, Tesseract.NET.
          </p>
        </div>
      </header>

    </div>
  );
}
