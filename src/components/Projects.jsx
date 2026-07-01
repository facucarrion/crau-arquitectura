import { useState, useEffect } from 'react'
import './Projects.css'

const projects = [
  {
    id: 1,
    title: 'Casa Altos del Río',
    type: 'Vivienda Residencial',
    year: '2023',
    desc: 'Vivienda unifamiliar de 320 m² emplazada en un lote en pendiente. El proyecto responde al paisaje natural con volúmenes horizontales, terrazas escalonadas y una integración total entre interior y exterior.',
    img: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&q=80&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Edificio Nordeste',
    type: 'Edificio Comercial',
    year: '2022',
    desc: 'Edificio de uso mixto de 8 plantas en zona urbana consolidada. La fachada modular en aluminio perforado genera un ritmo visual dinámico y optimiza el control solar sin sacrificar la luminosidad interior.',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Loft San Telmo',
    type: 'Remodelación e Interiorismo',
    year: '2023',
    desc: 'Reconversión de un antiguo depósito industrial en loft residencial. Se preservaron los elementos originales —vigas, ladrillo visto, hormigón— y se integraron con materiales contemporáneos de gran calidad.',
    img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&q=80&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Spa & Wellness Palermo',
    type: 'Interiorismo Comercial',
    year: '2024',
    desc: 'Diseño de interiores para centro de bienestar de 650 m². La propuesta centra la experiencia del usuario en una secuencia sensorial de espacios que transitan del dinamismo a la calma a través de la luz natural, el agua y la vegetación.',
    img: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=80&auto=format&fit=crop',
  },
]

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
        <div className="section-header reveal">
          <span className="section-label">Proyectos Destacados</span>
          <h2 className="section-title">Obras que <em>hablan</em><br />por sí solas</h2>
        </div>

        <div className="projects__grid">
          {projects.map((p, i) => (
            <div
              key={p.id}
              className={`project-card reveal reveal-delay-${(i % 2) + 1}`}
              onClick={() => setActive(p)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setActive(p)}
            >
              <div className="project-card__img-wrap">
                <img src={p.img} alt={p.title} className="project-card__img" loading="lazy" />
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
