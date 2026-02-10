export function SourceFooter({
  text,
  source,
}: {
  text: string
  source: string
}) {
  return (
    <div
      data-bento-footer
      className="px-5 py-5 md:px-6 md:py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3"
      style={{ gridColumn: "1 / -1" }}
    >
      <p data-footer-text className="text-[10px] md:text-xs leading-relaxed max-w-[800px] text-muted-foreground">
        {text}
      </p>
      <p data-footer-source className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground/60 shrink-0">
        {source}
      </p>
    </div>
  )
}
