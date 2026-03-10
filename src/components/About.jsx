import SectionTitle from './SectionTitle'

const About = () => (
  <section id="about" className="section">
    <div className="reveal glass">
      <SectionTitle
        eyebrow="About"
        title="Focused on crisp UI and reliable frontend delivery"
        description="I combine design awareness with solid frontend engineering to deliver fast, accessible, and responsive interfaces."
      />
      <div className="grid gap-6 text-sm text-slate-300 sm:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-white">User-Centered Design</p>
          <p className="mt-2">
            Designing layouts that guide users and make complex flows simple.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-white">Responsive Engineering</p>
          <p className="mt-2">
            Building with mobile-first thinking across breakpoints.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-white">Smooth Interactions</p>
          <p className="mt-2">
            Subtle animations and micro-interactions that feel premium.
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default About
