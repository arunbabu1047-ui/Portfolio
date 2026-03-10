const SectionTitle = ({ eyebrow, title, description }) => (
  <div className="mb-10 max-w-2xl">
    <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{eyebrow}</p>
    <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
    {description ? <p className="mt-3 text-base text-slate-300">{description}</p> : null}
  </div>
)

export default SectionTitle
