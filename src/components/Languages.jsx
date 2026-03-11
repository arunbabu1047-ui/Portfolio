import SectionTitle from './SectionTitle'

const Languages = ({ languages }) => (
  <section id="languages" className="section">
    <div className="reveal">
      <SectionTitle
        eyebrow="Languages"
        title="Communication"
        description="Comfortable working in professional and collaborative settings."
      />
      <div className="flex flex-wrap gap-3">
        {languages.map((lang) => (
          <span key={lang} className="chip text-base">
            {lang}
          </span>
        ))}
      </div>
    </div>
  </section>
)

export default Languages
