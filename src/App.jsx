import { useEffect } from 'react'
import { contacts, education, experience, profile, projects, skills } from './data'
import About from './components/About'
import Contact from './components/Contact'
import Education from './components/Education'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 },
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] -translate-x-1/3 -translate-y-1/3 rounded-full bg-cyan-400/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[520px] w-[520px] translate-x-1/4 translate-y-1/3 rounded-full bg-amber-300/20 blur-[140px]" />

      <Header name={profile.name} />
      <Hero profile={profile} />
      <About />
      <Skills skills={skills} />
      <Experience experience={experience} />
      <Projects projects={projects} />
      <Education education={education} />
      <Contact contacts={contacts} />
      <Footer name={profile.name} />
    </div>
  )
}

export default App
