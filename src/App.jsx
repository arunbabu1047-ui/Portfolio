import { useEffect, useState } from 'react'
import {
  certifications,
  contacts,
  education,
  experience,
  languages,
  profile,
  projects,
  skills,
  tools,
} from './data'
import About from './components/About'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Education from './components/Education'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Languages from './components/Languages'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Tools from './components/Tools'

function App() {
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    const timer = setTimeout(() => setShowIntro(false), 1600)
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

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className={`intro-screen ${showIntro ? 'is-active' : 'is-done'}`}>
        <div className="intro-card">
          <div className="intro-pulse" />
          <p className="intro-title">Arun Babu</p>
          <p className="intro-sub">React Developer</p>
        </div>
      </div>
      <div className="background-grid" />
      <div className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] -translate-x-1/3 -translate-y-1/3 rounded-full bg-cyan-400/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[520px] w-[520px] translate-x-1/4 translate-y-1/3 rounded-full bg-amber-300/20 blur-[140px]" />
      <div className="orbit pointer-events-none left-1/2 top-32 -translate-x-1/2 opacity-30" />
      <div className="orbit pointer-events-none right-[-260px] top-1/2 opacity-20" />

      <Header name={profile.name} />
      <Hero profile={profile} />
      <About />
      <Skills skills={skills} />
      <Experience experience={experience} />
      <Projects projects={projects} />
      <Education education={education} />
      <Tools tools={tools} />
      <Certifications certifications={certifications} />
      <Languages languages={languages} />
      <Contact contacts={contacts} />
      <Footer name={profile.name} />
    </div>
  )
}

export default App
