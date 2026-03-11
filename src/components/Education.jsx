import SectionTitle from './SectionTitle'

const Education = ({ education }) => (
  <section id="education" className="section">
    <div className="reveal glass">
      <SectionTitle
        eyebrow="Education"
        title="Academic foundation"
        description="Formal education that supports my engineering craft."
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {education.map((item) => (
          <div key={item.degree} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-slate-400">
              {item.degree}
              {item.period ? <span className="text-slate-500"> · {item.period}</span> : null}
            </p>
            <h3 className="mt-3 text-lg font-semibold text-white">{item.school}</h3>
          </div>
        ))}
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-400/15 via-white/5 to-amber-300/10 p-6">
          <p className="text-sm text-slate-400">Focus Areas</p>
          <p className="mt-3 text-lg font-semibold text-white">
            Frontend Engineering, UI/UX, Web Technologies
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default Education
