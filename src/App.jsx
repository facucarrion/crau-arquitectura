import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Services from './components/Services'
import About from './components/About'
import Process from './components/Process'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    document.title = 'CRAU Arquitectura — Arquitectura, Diseño y Construcción en Mendoza'
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0, rootMargin: '0px 0px -60px 0px' }
    )
    const elements = document.querySelectorAll('.reveal')
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Services />
        <About />
        <Process />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
