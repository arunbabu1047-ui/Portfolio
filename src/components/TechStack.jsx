import SectionTitle from './SectionTitle'

const TechStack = ({ techStack }) => (
  <section id="tech-stack" className="section">
    <div className="reveal glass">
      <SectionTitle
        eyebrow="Tech Stack"
        title="Libraries I use in production"
        description="Grouped by focus area for clarity."
      />
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-widest text-slate-400">UI / Styling</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {techStack.uiStyling.map((item) => (
              <span key={item} className="chip text-base">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm uppercase tracking-widest text-slate-400">State &amp; Data</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {techStack.stateData.map((item) => (
              <span key={item} className="chip text-base">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default TechStack
