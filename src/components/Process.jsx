import './Process.css'

const steps = [
  {
    num: '01',
    title: 'Reunión Inicial',
    desc: 'Nos reunimos para conocer tus necesidades, expectativas y el contexto del proyecto. Escuchamos antes de proponer.',
  },
  {
    num: '02',
    title: 'Propuesta de Diseño',
    desc: 'Desarrollamos un anteproyecto con plantas, volumetrías y renders conceptuales para validar la dirección creativa.',
  },
  {
    num: '03',
    title: 'Desarrollo del Proyecto',
    desc: 'Elaboramos la documentación técnica completa: planos ejecutivos, detalles constructivos, pliegos y presupuesto.',
  },
  {
    num: '04',
    title: 'Ejecución y Seguimiento',
    desc: 'Dirigimos la obra o coordinamos con el equipo constructor para asegurar que el proyecto se materialice tal como fue concebido.',
  },
]

export default function Process() {
  return (
    <section className="process">
      <div className="process__inner">
        <div className="section-header reveal" style={{textAlign:'center', marginBottom: '72px'}}>
          <span className="section-label">Nuestro Proceso</span>
          <h2 className="section-title">Cómo <em>trabajamos</em></h2>
        </div>

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
