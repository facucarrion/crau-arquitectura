import './Process.css'

const steps = [
  {
    num: '01',
    title: 'Reunión Inicial',
    desc: 'Una charla sincera para entender tu presente, imaginar posibilidades y alinear expectativas. De acá salen las primeras ideas que van a guiar todo el proyecto.',
  },
  {
    num: '02',
    title: 'Propuesta y Desarrollo de Proyecto',
    desc: 'Del boceto a la maqueta digital. Exploramos formas, materiales y estrategias hasta dar con esa solución que equilibra justo lo que soñaste con lo que realmente funciona.',
  },
  {
    num: '03',
    title: 'Aprobación Planos Municipales',
    desc: 'Convertimos el proyecto en documento legal. Planimetría, memoria técnica y gestión ante organismos públicos. Nos encargamos de que todo esté en regla para arrancar.',
  },
  {
    num: '04',
    title: 'Ejecución y Seguimiento de Obra',
    desc: 'La obra en vivo y en directo. Coordinamos equipos, controlamos plazos, resolvemos sobre la marcha y velamos para que cada detalle se ejecute tal como fue pensado.',
  },
]

export default function Process() {
  return (
    <section className="process">
      <div className="process__inner">
        <h2 className="process__title reveal">Cómo trabajamos</h2>

        <div className="process__steps">
          {steps.map((s, i) => (
            <div key={s.num} className={`process-step reveal reveal-delay-${i + 1}`}>
              <div className="process-step__num">{s.num}</div>
              <div className="process-step__connector" />
              <div className="process-step__body">
                <h3 className="process-step__title">{s.title}</h3>
                <p className="process-step__desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
