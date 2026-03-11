import SectionTitle from './SectionTitle'

const Tools = ({ tools }) => (
  <section id="tools" className="section">
    <div className="reveal">
      <SectionTitle
        eyebrow="Environment"
        title="Tools I use daily"
        description="A lightweight setup focused on speed, testing, and clean delivery."
      />
      <div className="flex flex-wrap gap-3">
        {tools.map((tool) => (
          <span key={tool} className="chip text-base">
            {tool}
          </span>
        ))}
      </div>
    </div>
  </section>
)

export default Tools
