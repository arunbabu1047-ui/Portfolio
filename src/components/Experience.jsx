import SectionTitle from './SectionTitle'

const Experience = ({ experience }) => (
  <section id="experience" className="section">
    <div className="reveal glass">
      <SectionTitle
        eyebrow="Experience"
        title="Hands-on frontend delivery"
        description="I focus on delivering production-ready UI with strong consistency and speed."
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {experience.map((item) => (
          <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-slate-400">{item.period}</p>
            <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-1 text-sm text-cyan-300">{item.company}</p>
            <div className="mt-4 space-y-2 text-sm text-slate-300">
              {item.points.map((point) => (
                <p key={point}>• {point}</p>
              ))}
            </div>
          </div>
        ))}
        <div className="rounded-2xl border border-dashed border-white/20 p-6">
          <p className="text-sm text-slate-400">Availability</p>
          <h3 className="mt-3 text-xl font-semibold text-white">Open to new roles</h3>
          <p className="mt-2 text-sm text-slate-300">
            I&apos;m ready to contribute to teams building modern web products.
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default Experience
