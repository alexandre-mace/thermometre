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
      className="py-4 md:py-5"
      data-col-span="12"
    >
      <h2 data-header-title>
        {title}
      </h2>
      {subtitle && (
        <p data-header-subtitle className="mt-0.5">{subtitle}</p>
      )}
    </div>
  )
}
