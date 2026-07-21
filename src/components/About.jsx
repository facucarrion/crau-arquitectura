import './About.css'

const stats = [
  { value: '+15', label: 'Años de Experiencia' },
  { value: '+5.000', label: 'm2 Proyectos Realizados' },
  { value: '100%', label: 'Diseños Personalizados' },
  { value: '360°', label: 'Acompañamiento Integral' },
]

export default function About() {
  return (
    <section id="nosotros" className="about">
      <div className="about__inner">
        <div className="about__image-col reveal">
          <div className="about__img-wrap">
            <img
              src="/about.webp"
              alt="Estudio de arquitectura"
            />
          </div>
        </div>

        <div className="about__text-col">
          <div className="reveal">
            <h2 className="section-label about__label">Sobre Nosotros</h2>
          </div>
          <p className="about__text reveal reveal-delay-1">
            <strong>CRAU Arquitectura</strong> es un estudio de arquitectura independiente liderado por el <strong>Arq. Cristian Mirón</strong>, especializado en el diseño personalizado de viviendas unifamiliares y espacios concebidos desde la identidad de cada cliente.
          </p>
          <p className="about__text reveal reveal-delay-2">
            Entendemos la arquitectura como el equilibrio entre <strong>diseño, funcionalidad y confort</strong>, donde cada proyecto nace de una búsqueda única, adaptada a las necesidades, hábitos y estilo de vida de quienes lo habitan.
          </p>
          <p className="about__text reveal reveal-delay-3">
            Nuestro enfoque combina sensibilidad estética, precisión técnica y visión constructiva, acompañando cada etapa del proceso —desde la idea inicial hasta la materialización de la obra— con compromiso, cercanía y atención personalizada.
          </p>
          <p className="about__text reveal reveal-delay-4">
            En CRAU creemos que la buena arquitectura surge de la armonía entre proporción, materia y espacio, dando lugar a proyectos auténticos, funcionales y duraderos.
          </p>
          <div className="about__stats reveal reveal-delay-4">
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
