const Hero = ({ profile }) => (
  <section className="section grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
    <div className="reveal">
      <p className="text-sm uppercase tracking-[0.4em] text-slate-400">{profile.role}</p>
      <h1 className="mt-6 text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
        Building <span className="gradient-text">modern web experiences</span> with
        clean, user-first design.
      </h1>
      <p className="mt-6 max-w-xl text-lg text-slate-300">{profile.summary}</p>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <a
          href="#projects"
          className="pulse-ring rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
        >
          Contact Me
        </a>
      </div>
      <div className="mt-10 flex flex-wrap gap-4 text-sm text-slate-300">
        <span className="chip">1 year experience</span>
        <span className="chip">React JS</span>
        <span className="chip">Tailwind CSS</span>
        <span className="chip">UI/UX focus</span>
      </div>
    </div>

    <div className="reveal glass shine">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-400">Current Focus</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">React UI Development</h3>
          <p className="mt-2 text-sm text-slate-300">
            {profile.location} • Open to collaborations
          </p>
        </div>
        <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-amber-300 p-[2px] shadow-glow">
          <div className="flex h-full w-full items-center justify-center rounded-2xl bg-slate-950">
            <span className="text-xl font-semibold text-white">01</span>
          </div>
        </div>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-xs uppercase tracking-widest text-slate-400">Speciality</p>
          <p className="mt-2 text-lg font-semibold text-white">Frontend + UI</p>
          <p className="mt-2 text-sm text-slate-300">
            Clean layouts and smooth user flows.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-xs uppercase tracking-widest text-slate-400">Tooling</p>
          <p className="mt-2 text-lg font-semibold text-white">React &amp; JS</p>
          <p className="mt-2 text-sm text-slate-300">
            Component-driven and scalable.
          </p>
        </div>
      </div>
      <div className="mt-8 flex items-center justify-between rounded-2xl border border-white/10 bg-gradient-to-r from-cyan-400/15 via-white/5 to-amber-300/10 px-6 py-5">
        <div>
          <p className="text-xs uppercase tracking-widest text-slate-400">Highlight</p>
          <p className="mt-2 text-lg font-semibold text-white">Built 4+ projects</p>
        </div>
        <div className="h-14 w-14 animate-float float-slow rounded-full border border-white/20 bg-white/10" />
      </div>
    </div>
  </section>
)

export default Hero
