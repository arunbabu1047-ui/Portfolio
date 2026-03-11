import SectionTitle from './SectionTitle'

const Projects = ({ projects }) => (
  <section id="projects" className="section">
    <div className="reveal">
      <SectionTitle
        eyebrow="Projects"
        title="Selected work"
        description="A snapshot of the products and interfaces I&apos;ve helped build."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <div key={project.name} className="glass shine transition hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-white">{project.name}</h3>
            <p className="mt-3 text-sm text-slate-300">{project.description}</p>
            <p className="mt-4 text-xs uppercase tracking-widest text-slate-400">
              {project.stack}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Projects
