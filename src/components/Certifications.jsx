import SectionTitle from './SectionTitle'

const Certifications = ({ certifications }) => (
  <section id="certifications" className="section">
    <div className="reveal glass">
      <SectionTitle
        eyebrow="Certifications"
        title="Professional learning"
        description="Focused training to strengthen full-stack and core programming fundamentals."
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {certifications.map((cert) => (
          <div
            key={cert.name}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <p className="text-sm text-slate-400">{cert.issuer}</p>
            <h3 className="mt-3 text-lg font-semibold text-white">{cert.name}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Certifications
