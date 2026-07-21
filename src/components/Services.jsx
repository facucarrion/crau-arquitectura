import services from '../data/services.js'
import './Services.css'

const icons = [
  <svg key="1" width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M5 5h18v18H5z"/>
    <path d="M14 5v18M5 14h18"/>
    <circle cx="14" cy="14" r="3"/>
  </svg>,
  <svg key="2" width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M4 20h20v4H4z"/>
    <path d="M8 20V8l6-4 6 4v12"/>
    <path d="M12 12h4M12 16h4"/>
  </svg>,
  <svg key="3" width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M3 16l11-11 11 11"/>
    <path d="M7 12v11h14V12"/>
    <rect x="12" y="17" width="4" height="6"/>
  </svg>,
]

export default function Services() {
  return (
    <section id="servicios" className="services">
      <div className="services__inner">
        <h2 className="services__title reveal">Servicios</h2>

        <div className="services__grid">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`service-card reveal reveal-delay-${(i % 3) + 1}`}
            >
              <div className="service-card__icon">{icons[i]}</div>
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
