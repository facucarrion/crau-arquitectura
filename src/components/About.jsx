import './About.css'

const stats = [
  { value: '+10', label: 'Años de experiencia' },
  { value: '+80', label: 'Proyectos realizados' },
  { value: '100%', label: 'Diseño personalizado' },
  { value: '360°', label: 'Acompañamiento integral' },
]

export default function About() {
  return (
    <section id="nosotros" className="about">
      <div className="about__inner">
        <div className="about__image-col reveal">
          <div className="about__img-wrap">
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80&auto=format&fit=crop"
              alt="Estudio de arquitectura"
            />
            <div className="about__img-badge">
              <span className="badge-year">Est.</span>
              <span className="badge-num">2013</span>
            </div>
          </div>
        </div>

        <div className="about__text-col">
          <div className="reveal">
            <span className="section-label">Sobre el Estudio</span>
            <h2 className="section-title">
              Diseñamos con<br />propósito, <em>construimos</em><br />con precisión.
            </h2>
          </div>
          <p className="about__text reveal reveal-delay-1">
            Forma Estudio es un equipo de arquitectos apasionados por la relación entre el espacio y la vida que lo habita. Nuestro enfoque integra rigor técnico con sensibilidad estética: cada proyecto es único, pensado desde cero para responder a quién lo usará, dónde estará y qué emociones debe despertar.
          </p>
          <p className="about__text reveal reveal-delay-2">
            Trabajamos con atención meticulosa al detalle, materiales de calidad y un proceso transparente que acompaña al cliente desde la primera reunión hasta la entrega final. Porque la arquitectura es, ante todo, una conversación.
          </p>
          <div className="about__stats reveal reveal-delay-3">
            {stats.map((s) => (
              <div key={s.label} className="stat">
                <span className="stat__value">{s.value}</span>
                <span className="stat__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
