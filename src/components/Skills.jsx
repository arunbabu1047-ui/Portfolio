import SectionTitle from './SectionTitle'

const Skills = ({ skills }) => (
  <section id="skills" className="section">
    <div className="reveal">
      <SectionTitle
        eyebrow="Skills"
        title="Frontend stack built for modern products"
        description="Core technologies I use to craft pixel-accurate, scalable interfaces."
      />
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span key={skill} className="chip text-base">
            {skill}
          </span>
        ))}
      </div>
    </div>
  </section>
)

export default Skills
