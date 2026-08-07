import { Image } from "lucide-react";

export function ScreenshotPlaceholder({
  label,
  aspect = "aspect-[16/9]",
}: {
  label: string;
  aspect?: string;
}) {
  return (
    <figure className="w-full">
      <div
        className={`${aspect} flex w-full flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-border bg-surface p-6 text-center`}
      >
        <Image className="size-7 text-primary" aria-hidden="true" />
        <figcaption className="max-w-sm text-sm text-muted-foreground">{label}</figcaption>
      </div>
    </figure>
  );
}
