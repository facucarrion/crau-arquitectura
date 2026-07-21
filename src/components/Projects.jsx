import { useState, useEffect } from 'react'
import projects from '../data/projects.js'
import './Projects.css'

export default function Projects() {
  const [active, setActive] = useState(null)
  const [imgIndex, setImgIndex] = useState(0)

  useEffect(() => {
    setImgIndex(0)
    const onKey = (e) => {
      if (e.key === 'Escape') setActive(null)
      if (e.key === 'ArrowLeft' && active) setImgIndex((i) => Math.max(0, i - 1))
      if (e.key === 'ArrowRight' && active) setImgIndex((i) => Math.min(active.images.length - 1, i + 1))
    }
    window.addEventListener('keydown', onKey)
    if (active) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active])

  return (
    <section id="proyectos" className="projects">
      <div className="projects__inner">
        <h2 className="projects__title reveal">Proyectos</h2>

        <div className="projects__grid">
          {projects.map((p, i) => (
            <div
              key={i}
               className={`project-card reveal reveal-delay-${(i % 4) + 1}`}
              onClick={() => setActive(p)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setActive(p)}
            >
              <div className="project-card__img-wrap">
                <img src={p.images[p.cardImg ?? 0]} alt={p.title} className="project-card__img" />
                <div className="project-card__overlay">
                  <div className="project-card__info">
                    <h3 className="project-card__title">{p.title}</h3>
                    <span className="project-card__cta">Ver proyecto →</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {active && (
        <div className="modal-backdrop" onClick={() => setActive(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal__close" onClick={() => setActive(null)} aria-label="Cerrar">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M2 2l14 14M16 2L2 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
            <div className="modal__carousel">
              <div className="modal__carousel-track">
                {active.images.map((src, i) => (
                  <div key={i} className={`modal__carousel-slide ${i === imgIndex ? 'is-active' : ''}`}>
                    <img src={src} alt={`${active.title} - ${i + 1}`} className="modal__carousel-img" />
                  </div>
                ))}
              </div>
              {active.images.length > 1 && (
                <>
                  <button
                    className="modal__carousel-btn modal__carousel-btn--prev"
                    onClick={() => setImgIndex((i) => Math.max(0, i - 1))}
                    disabled={imgIndex === 0}
                    aria-label="Anterior"
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M13 4l-6 6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                  <button
                    className="modal__carousel-btn modal__carousel-btn--next"
                    onClick={() => setImgIndex((i) => Math.min(active.images.length - 1, i + 1))}
                    disabled={imgIndex === active.images.length - 1}
                    aria-label="Siguiente"
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                  <div className="modal__carousel-dots">
                    {active.images.map((_, i) => (
                      <button
                        key={i}
                        className={`modal__carousel-dot ${i === imgIndex ? 'is-active' : ''}`}
                        onClick={() => setImgIndex(i)}
                        aria-label={`Imagen ${i + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
            <div className="modal__body">
              <span className="modal__type">{active.location}</span>
              <h3 className="modal__title">{active.title}</h3>
              <p className="modal__desc">{active.desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
