import './Services.css'

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="3" y="3" width="22" height="22" rx="0.5"/>
        <path d="M3 10h22M10 10v15"/>
        <path d="M14 6l4-3 4 3"/>
      </svg>
    ),
    title: 'Diseño Arquitectónico',
    desc: 'Proyectos residenciales y comerciales desarrollados con precisión técnica y sensibilidad estética. De la idea al plano.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="14" cy="14" r="10"/>
        <path d="M14 8v6l4 2"/>
        <path d="M4 14h2M22 14h2M14 4v2M14 22v2"/>
      </svg>
    ),
    title: 'Dirección de Obra',
    desc: 'Supervisión integral del proceso constructivo para garantizar calidad, tiempos y presupuestos. Tu tranquilidad en cada etapa.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M5 23V10l9-7 9 7v13H5z"/>
        <rect x="10" y="15" width="8" height="8"/>
        <path d="M10 19h8"/>
      </svg>
    ),
    title: 'Remodelaciones',
    desc: 'Transformamos espacios existentes con intervenciones inteligentes que mejoran la funcionalidad y renovan la imagen.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="3" y="8" width="22" height="17" rx="0.5"/>
        <path d="M8 8V5a6 6 0 0112 0v3"/>
        <path d="M9 14h10M9 18h6"/>
      </svg>
    ),
    title: 'Interiorismo',
    desc: 'Diseño de interiores pensado para el habitar cotidiano. Paletas, materiales, mobiliario y luz en perfecta armonía.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="3" y="3" width="22" height="18" rx="0.5"/>
        <path d="M3 21h22M7 7h14M7 11h10M7 15h6"/>
        <circle cx="21" cy="22" r="3"/>
        <path d="M19 24l4-4"/>
      </svg>
    ),
    title: 'Planificación & Renders',
    desc: 'Visualización fotorrealista y planimetría detallada para comunicar el proyecto antes de construirlo.',
  },
]

export default function Services() {
  return (
    <section id="servicios" className="services">
      <div className="services__inner">
        <div className="section-header reveal">
          <span className="section-label">Nuestros Servicios</span>
          <h2 className="section-title">Arquitectura integral,<br /><em>de principio a fin</em></h2>
        </div>

        <div className="services__grid">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`service-card reveal reveal-delay-${(i % 3) + 1}`}
            >
              <div className="service-card__icon">{s.icon}</div>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__desc">{s.desc}</p>
              <span className="service-card__line" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
