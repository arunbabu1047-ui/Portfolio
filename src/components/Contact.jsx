import SectionTitle from './SectionTitle'

const Contact = ({ contacts }) => (
  <section id="contact" className="section">
    <div className="reveal glass">
      <SectionTitle
        eyebrow="Contact"
        title="Let&apos;s build something together"
        description="Reach out for collaborations, freelance work, or full-time roles."
      />
      <div className="grid gap-6 sm:grid-cols-3">
        {contacts.map((item) => (
          <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs uppercase tracking-widest text-slate-400">
              {item.label}
            </p>
            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="mt-3 block text-sm text-cyan-300 underline-offset-4 transition hover:text-cyan-200 hover:underline"
              >
                {item.value}
              </a>
            ) : (
              <p className="mt-3 text-sm text-white">{item.value}</p>
            )}
          </div>
        ))}
      </div>
      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a
          href="/resume-arun-babu.html"
          className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
          download
        >
          Download Resume
        </a>
        <button className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40">
          Schedule a Call
        </button>
      </div>
    </div>
  </section>
)

export default Contact
