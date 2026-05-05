import SectionTitle from "./SectionTitle";

const Contact = ({ contacts }) => (
  <section id="contact" className="section">
    <div className="reveal glass shine">
      <SectionTitle
        eyebrow="Contact"
        title="Let's build something together"
        description="Reach out for collaborations, freelance work, or full-time roles."
      />
      <div className="grid gap-6 sm:grid-cols-3">
        {contacts.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-white/10 bg-white/5 p-5"
          >
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
        {/* <a
          href="/resume-arun-babu.html"
          className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
          download
        >
          Download Resume (HTML)
        </a> */}
        {/* <a
          href="/resume-arun-babu.doc"
          className="rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
          download
        >
          Download Resume (Word)
        </a> */}
        <a
          href="/Arun-Resume.pdf"
          className="rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
          download
        >
          Download Resume (PDF)
        </a>
        <a
          href="mailto:arunbabu1047@gmail.com?subject=Schedule%20a%20Call"
          className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
        >
          Schedule a Call
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
