export function SectionHeader({
  id,
  title,
  subtitle,
}: {
  id?: string
  title: string
  subtitle?: string
}) {
  return (
    <div
      id={id}
      data-bento-header
      className="border-b border-[--cell-border-color] px-5 py-4 md:px-6 md:py-5"
      style={{ gridColumn: "1 / -1" }}
    >
      <p data-header-title>
        {title}
      </p>
      {subtitle && (
        <p data-header-subtitle className="mt-0.5">{subtitle}</p>
      )}
    </div>
  )
}
