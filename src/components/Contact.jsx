import './Contact.css'

export default function Contact() {
  const handleSubmit = e => {
    e.preventDefault()
    const data = new FormData(e.target)
    const nombre = data.get('nombre')
    const mensaje = data.get('mensaje')
    const texto = `Hola CRAU Arquitectura! Soy ${nombre}.%0A%0A${mensaje}`
    window.open(`https://wa.me/5492616378177?text=${texto}`, '_blank')
  }

  return (
    <section id='contacto' className='contact'>
      <div className='contact__inner'>
        <div className='contact__left reveal'>
          <span className='section-label'>Contacto</span>
          <h2 className='section-title'>
            Hablemos de
            <br />
            <em>tu proyecto</em>
          </h2>
          <div className='contact__data'>
            <div className='contact__data-item'>
              <svg
                width='18'
                height='18'
                viewBox='0 0 18 18'
                fill='none'
                stroke='currentColor'
                strokeWidth='1.2'
              >
                <path d='M9 1C5.69 1 3 3.69 3 7c0 4.97 6 10 6 10s6-5.03 6-10c0-3.31-2.69-6-6-6z' />
                <circle cx='9' cy='7' r='2' />
              </svg>
              <span>Julio Argentino Roca 422, Mendoza, Argentina 5500</span>
            </div>
            <div className='contact__data-item'>
              <svg
                width='18'
                height='18'
                viewBox='0 0 18 18'
                fill='none'
                stroke='currentColor'
                strokeWidth='1.2'
              >
                <path d='M2 4h14v10a1 1 0 01-1 1H3a1 1 0 01-1-1V4z' />
                <path d='M2 4l7 7 7-7' />
              </svg>
              <span>arq.cristianmiron@gmail.com</span>
            </div>
            <div className='contact__data-item'>
              <svg
                width='18'
                height='18'
                viewBox='0 0 18 18'
                fill='none'
                stroke='currentColor'
                strokeWidth='1.2'
              >
                <path d='M15.5 12.5l-3-1-1.5 1.5C8.5 12 6 9.5 5 7l1.5-1.5-1-3L3 1.5A1 1 0 002 2.5C2 10.5 7.5 16 15.5 16a1 1 0 001-1l-1-2.5z' />
              </svg>
              <span>+54 9 261 637-8177</span>
            </div>
          </div>

          <div className='contact__map'>
            <iframe
              title='Ubicación CRAU Arquitectura'
              src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13401.420164006613!2d-68.85785!3d-32.88878!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e09007dbec055%3A0x3853d0f0fc079246!2sCrau%20Arquitectura!5e0!3m2!1ses!2sus!4v1782922667273!5m2!1ses!2sus'
              width='100%'
              height='220'
              style={{
                border: 0,
                display: 'block',
                filter: 'grayscale(0.3) sepia(0.15) brightness(0.92) contrast(1.05)'
              }}
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            />
          </div>
        </div>

        <div className='contact__right reveal reveal-delay-2'>
          <form className='contact__form' onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='nombre'>Nombre completo</label>
              <input
                id='nombre'
                name='nombre'
                type='text'
                required
                placeholder='Tu nombre'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='mensaje'>¿Sobre qué querés consultar?</label>
              <textarea
                id='mensaje'
                name='mensaje'
                rows={13}
                required
                placeholder='Contanos brevemente tu proyecto o idea...'
              />
            </div>
            <button type='submit' className='btn-submit'>
              Consultar por WhatsApp
              <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
                <path
                  d='M2 8h12M10 4l4 4-4 4'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
