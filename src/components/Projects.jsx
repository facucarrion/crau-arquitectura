import { useState, useEffect } from 'react'
import './Projects.css'

const PLACEHOLDER = 'https://placehold.co/800x600/e8e2d9/8b7355?text=Foto+del+proyecto'

const projects = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: `Proyecto ${i + 1}`,
  type: 'Tipo de proyecto',
  year: '2025',
  desc: 'Descripción del proyecto.',
  img: PLACEHOLDER,
}))

export default function Projects() {
  const [active, setActive] = useState(null)

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setActive(null) }
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
              key={p.id}
               className={`project-card reveal reveal-delay-${(i % 4) + 1}`}
              onClick={() => setActive(p)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setActive(p)}
            >
              <div className="project-card__img-wrap">
                <img src={p.img} alt={p.title} className="project-card__img" />
                <div className="project-card__overlay">
                  <div className="project-card__info">
                    <span className="project-card__type">{p.type}</span>
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
            <div className="modal__img-wrap">
              <img src={active.img} alt={active.title} className="modal__img" />
            </div>
            <div className="modal__body">
              <span className="modal__type">{active.type} · {active.year}</span>
              <h3 className="modal__title">{active.title}</h3>
              <p className="modal__desc">{active.desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
