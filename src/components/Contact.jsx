import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '', mensaje: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contacto" className="contact">
      <div className="contact__inner">
        <div className="contact__left reveal">
          <span className="section-label">Contacto</span>
          <h2 className="section-title">Hablemos de<br /><em>tu proyecto</em></h2>
          <p className="contact__intro">
            Cada gran obra comienza con una conversación. Contanos tu idea y coordinamos una reunión sin compromiso.
          </p>

          <div className="contact__data">
            <div className="contact__data-item">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M9 1C5.69 1 3 3.69 3 7c0 4.97 6 10 6 10s6-5.03 6-10c0-3.31-2.69-6-6-6z"/>
                <circle cx="9" cy="7" r="2"/>
              </svg>
              <span>Av. Santa Fe 2845, piso 4<br />Buenos Aires, Argentina</span>
            </div>
            <div className="contact__data-item">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M2 4h14v10a1 1 0 01-1 1H3a1 1 0 01-1-1V4z"/>
                <path d="M2 4l7 7 7-7"/>
              </svg>
              <span>hola@formaestudio.com.ar</span>
            </div>
            <div className="contact__data-item">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M15.5 12.5l-3-1-1.5 1.5C8.5 12 6 9.5 5 7l1.5-1.5-1-3L3 1.5A1 1 0 002 2.5C2 10.5 7.5 16 15.5 16a1 1 0 001-1l-1-2.5z"/>
              </svg>
              <span>+54 11 4782-0300</span>
            </div>
          </div>

          <div className="contact__map">
            <iframe
              title="Ubicación Forma Estudio"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.071!2d-58.4066!3d-34.5971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5829d14f4f9%3A0x11e85da36c0a48a!2sAv.%20Santa%20Fe%202845%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1680000000000"
              width="100%"
              height="220"
              style={{ border: 0, display: 'block', filter: 'grayscale(0.6) contrast(1.05)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="contact__right reveal reveal-delay-2">
          {!sent ? (
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nombre">Nombre completo</label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  value={form.nombre}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="telefono">Teléfono</label>
                  <input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    value={form.telefono}
                    onChange={handleChange}
                    placeholder="+54 11..."
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="mensaje">¿Sobre qué querés consultar?</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={5}
                  required
                  value={form.mensaje}
                  onChange={handleChange}
                  placeholder="Contanos brevemente tu proyecto o idea..."
                />
              </div>
              <button type="submit" className="btn-submit">
                Enviar consulta
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 8h12M10 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          ) : (
            <div className="contact__success">
              <div className="success-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M6 16l7 7 13-13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>¡Mensaje enviado!</h3>
              <p>Gracias por contactarnos. Te responderemos a la brevedad para coordinar una reunión.</p>
              <button onClick={() => setSent(false)} className="btn-reset">Enviar otra consulta</button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
