import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin, Mail } from "lucide-react";
import { Section } from "@/components/Section";
import demoVideoAsset from "@/assets/demo-video.mp4.asset.json";




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

const features = [
  {
    title: "Upload via Web Server",
    body: "A user submits a food label image through the Web server.",
  },
  {
    title: "Send Request to API",
    body: "The Web server forwards the upload to the API server over HTTP.",
  },
  {
    title: "Extract and Match",
    body: "The API server uses OCR to extract ingredient text and matches additives against a curated database.",
  },
  {
    title: "Score and Return Report",
    body: "Grading logic scores each match, then the API server returns a plain language report to the Web server for display.",
  },
];

const criteria = [
  "Carcinogenicity",
  "Ban status",
  "Allergic and sensitivity reactions",
  "Cumulative exposure risk",
  "Synthetic or natural origin",
  "Effect on children and vulnerable groups",
  "Functional necessity",
];

const stack = [
  { layer: "Backend", detail: "ASP.NET Core Web API" },
  { layer: "Data", detail: "SQLite through Entity Framework Core" },
  { layer: "Frontend", detail: "Blazor Server" },
  { layer: "Transport", detail: "HTTP calls only" },
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

      <Section
        id="problem"
        index="02"
        eyebrow="Section"
        title="The problem"
        tone="tinted"
      >
        <p className="max-w-3xl text-lg leading-relaxed text-foreground">
          Consumers cannot identify which additives in packaged food carry documented health risks at
          the point of purchase, because ingredient labels use technical names that most people
          cannot interpret.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <article className="surface-panel p-6">
            <p className="eyebrow">Evidence</p>
            <p className="mt-3 leading-relaxed text-foreground">
              Cowburn and Stockley’s (2005) systematic review in Public Health Nutrition found
              consumers face significant barriers to understanding nutrition labelling, with
              challenges in lower literacy populations.
            </p>
          </article>
          <article className="surface-panel p-6">
            <p className="eyebrow">Evidence</p>
            <p className="mt-3 leading-relaxed text-foreground">
              The 2007 Lancet study by McCann et al. linked artificial food colors and sodium
              benzoate to increased hyperactivity in children in a double-blind, placebo-controlled
              study.
            </p>
          </article>
        </div>
      </Section>

      <Section id="solution" index="03" eyebrow="Section" title="The solution">
        <p className="max-w-3xl text-lg leading-relaxed text-foreground">
          AddiScan delivers four core features that move a user from a label photograph to a readable
          risk report.
        </p>
        <div className="grid gap-5 md:grid-cols-2">
          {features.map((feature, i) => (
            <article key={feature.title} className="surface-panel p-6">
              <p className="font-display text-sm font-semibold text-primary">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{feature.body}</p>
            </article>
          ))}
        </div>
        <figure className="surface-panel overflow-hidden p-6">
          <div className="relative w-full pb-[56.25%] rounded-lg overflow-hidden">
            <iframe
              src="https://youtube.com/embed/_VfK7L18zCE?rel=0"
              className="absolute top-0 left-0 h-full w-full"
              title="AddiScan demo video showing upload and results screens"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <figcaption className="mt-4 text-center text-sm text-muted-foreground">
            Demo video showing the upload and results flow
          </figcaption>
      </figure>
      </Section>

      <Section
        id="grading"
        index="04"
        eyebrow="Section"
        title="The grading system"
        tone="tinted"
      >
        <p className="max-w-3xl text-lg leading-relaxed text-foreground">
          AddiScan scores each additive against seven fixed criteria.
        </p>
        <div className="surface-panel divide-y divide-border">
          {criteria.map((item, i) => (
            <div key={item} className="flex items-center gap-4 px-6 py-4">
              <span className="font-display text-sm font-semibold text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-foreground">{item}</span>
            </div>
          ))}
        </div>
        <p className="max-w-3xl leading-relaxed text-foreground">
          The system draws evidence from IARC carcinogenicity classifications and EFSA safety
          opinions. Each additive receives a final score from zero to five, and the system maps that
          score to a named risk band.
        </p>
        <figure className="surface-panel overflow-hidden p-6">
          <img
            src={`${import.meta.env.BASE_URL}graded-additive-result.png`}
            alt="AddiScan graded additive result page for Brilliant Blue FCF showing safety criteria and final score"
            className="w-full rounded-lg"
          />
          <figcaption className="mt-4 text-center text-sm text-muted-foreground">
            Graded additive result for Brilliant Blue FCF (E133)
          </figcaption>
      </figure>
      </Section>

      <Section id="architecture" index="05" eyebrow="Section" title="Architecture">
        <p className="max-w-3xl text-lg leading-relaxed text-foreground">
          The system separates the backend and frontend into distinct layers.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stack.map((item) => (
            <article key={item.layer} className="surface-panel p-5">
              <p className="eyebrow">{item.layer}</p>
              <p className="mt-2 font-medium text-foreground">{item.detail}</p>
            </article>
          ))}
        </div>
        <p className="max-w-3xl leading-relaxed text-foreground">
          The backend runs on ASP.NET Core Web API with a SQLite database accessed through Entity
          Framework Core. The frontend runs on Blazor Server and communicates with the backend only
          through HTTP calls, which keeps the design ready for a future mobile client.
        </p>
        <figure className="surface-panel overflow-hidden p-6">
          <img
            src="/architecture_design.svg"
            alt="System architecture diagram showing Web server, API server, OCR pipeline, database, and client flow"
            className="w-full"
          />
          <figcaption className="mt-4 text-center text-sm text-muted-foreground">
            System architecture diagram
          </figcaption>
      </figure>
      </Section>

      <Section
        id="security"
        index="06"
        eyebrow="Section"
        title="Security and ethics"
        tone="tinted"
      >
        <ul className="max-w-3xl space-y-4">
          {[
            "AddiScan hashes and salts stored passwords with bcrypt.",
            "The system validates uploaded file type and size before OCR processing runs.",
            "The database enforces role based access control.",
            "The application records the source and review date of every additive classification, so a user can trace a result back to its origin.",
          ].map((line) => (
            <li key={line} className="flex gap-3 leading-relaxed text-foreground">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              {line}
            </li>
          ))}
        </ul>
        <p className="max-w-3xl leading-relaxed text-foreground">
          The design follows GDPR consent and minimization principles, and it follows the
          professional obligations set out in the ACM Code of Ethics.
        </p>
      </Section>

      <Section id="results" index="07" eyebrow="Section" title="Results and status">
        <p className="max-w-3xl text-lg leading-relaxed text-foreground">
          The build reaches a working end to end state.
        </p>
        <ul className="grid max-w-3xl gap-4 md:grid-cols-2">
          {[
            "The OCR pipeline extracts label text from uploaded images.",
            "The additive database holds curated entries with sources and review dates.",
            "The detection logic carries full unit test coverage.",
            "The scan history feature stores past scans for a registered user.",
          ].map((line) => (
            <li key={line} className="surface-panel p-5 leading-relaxed text-foreground">
              {line}
            </li>
          ))}
        </ul>
      </Section>

      <footer className="border-t border-border" style={{ background: "var(--gradient-hero)" }}>

        <div className="mx-auto w-full max-w-5xl px-6 py-24">
          <p className="font-display text-xs font-semibold tracking-[0.22em] text-primary-foreground/70 uppercase">
            08 Closing
          </p>
          <h2 className="mt-5 text-4xl font-semibold text-primary-foreground md:text-5xl">
            AddiScan
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-primary-foreground/85">
            AddiScan reads a food product label from a photograph and reports which additives carry
            documented health risks.
          </p>
          <p className="mt-8 max-w-2xl leading-relaxed text-primary-foreground/75">
            View the source on GitHub and connect on LinkedIn to discuss the implementation.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              {
                icon: Github,
                label: "GitHub repository",
                href: "https://github.com/mukanova-j/addiscan/tree/main",
              },
              {
                icon: Linkedin,
                label: "LinkedIn profile",
                href: "https://www.linkedin.com/in/zhanel-mukanova/",
              },
              {
                icon: Mail,
                label: "Email",
                href: "mailto:j.mukanova@icloud.com",
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("mailto") ? undefined : "_blank"}
                rel={item.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="rounded-lg border border-primary-foreground/25 p-5 transition-colors hover:bg-primary-foreground/10"
              >
                <item.icon className="size-5 text-primary-foreground/80" aria-hidden="true" />
                <p className="mt-3 text-sm font-medium text-primary-foreground">{item.label}</p>
                <p className="mt-1 text-sm text-primary-foreground/60">{item.href}</p>
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
