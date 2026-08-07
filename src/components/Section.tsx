import type { ReactNode } from "react";

export function Section({
  id,
  index,
  eyebrow,
  title,
  children,
  tone = "light",
}: {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  tone?: "light" | "tinted";
}) {
  return (
    <section
      id={id}
      className={
        tone === "tinted"
          ? "border-t border-border bg-surface py-20 md:py-28"
          : "border-t border-border bg-background py-20 md:py-28"
      }
    >
      <div className="mx-auto w-full max-w-5xl px-6">
        <header className="mb-10 border-b border-border pb-6">
          <p className="eyebrow">
            {index} <span className="text-muted-foreground">{eyebrow}</span>
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-foreground md:text-4xl">{title}</h2>
        </header>
        <div className="space-y-8">{children}</div>
      </div>
    </section>
  );
}
