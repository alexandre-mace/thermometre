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
      data-col-span="12"
    >
      <p data-footer-text className="text-xs leading-relaxed max-w-[800px] text-muted-foreground">
        {text}
      </p>
      <p data-footer-source className="text-xs uppercase text-muted-foreground shrink-0">
        {source}
      </p>
    </div>
  )
}
