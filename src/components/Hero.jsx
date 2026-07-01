import './Hero.css'

export default function Hero() {
  const handleContact = (e) => {
    e.preventDefault()
    document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })
  }
  const handleProjects = (e) => {
    e.preventDefault()
    document.querySelector('#proyectos')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="inicio" className="hero">
      <div className="hero__bg">
        <img
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1800&q=80&auto=format&fit=crop"
          alt="Arquitectura moderna"
          className="hero__img"
        />
        <div className="hero__overlay" />
      </div>

      <div className="hero__content">
        <span className="hero__eyebrow">Arquitectura · Diseño · Espacio</span>
        <h1 className="hero__title">
          Espacios que <br />
          <em>definen</em> quiénes<br />
          somos.
        </h1>
        <p className="hero__subtitle">
          Diseñamos arquitectura con propósito. Cada proyecto es una conversación<br className="break-desktop" />
          entre forma, función y la vida que lo habitará.
        </p>
        <div className="hero__actions">
          <a href="#contacto" className="btn-primary" onClick={handleContact}>
            Iniciar un proyecto
          </a>
          <a href="#proyectos" className="btn-ghost" onClick={handleProjects}>
            Ver proyectos
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

      <div className="hero__scroll-indicator">
        <span className="scroll-line" />
        <span className="scroll-text">Scroll</span>
      </div>
    </section>
  )
}
