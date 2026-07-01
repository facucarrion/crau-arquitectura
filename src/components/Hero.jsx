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
      <div className="hero__inner">
        <div className="hero__content">
          <span className="hero__eyebrow">Arquitectura, diseño y construcción</span>
          <span className="hero__eyebrow" style={{marginTop: '-10px'}}>Arquitecto Cristian Mirón</span>
          <h1 className="hero__title">
            ESPACIOS EN<br />
            EQUILIBRIO
          </h1>
          <p className="hero__subtitle">
            Creamos arquitectura donde el equilibrio entre diseño,<br className="break-desktop" />
            funcionalidad y confort define cada espacio.
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
        <div className="hero__images">
          <div className="hero__images-item hero__images-item--1">
            <img src="https://placehold.co/800x600/e8e2d9/8b7355?text=Foto+1" alt="" className="hero__images-img" />
          </div>
          <div className="hero__images-item hero__images-item--2">
            <img src="https://placehold.co/800x600/e8e2d9/8b7355?text=Foto+2" alt="" className="hero__images-img" />
          </div>
          <div className="hero__images-item hero__images-item--3">
            <img src="https://placehold.co/800x600/e8e2d9/8b7355?text=Foto+3" alt="" className="hero__images-img" />
          </div>
        </div>
      </div>

      <div className="hero__scroll-indicator">
        <span className="scroll-line" />
        <span className="scroll-text">Scroll</span>
      </div>
    </section>
  )
}
