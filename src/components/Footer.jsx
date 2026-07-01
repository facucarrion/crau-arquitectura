import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  const handleNav = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="logo-mark-sm">F</span>
              <div>
                <span className="logo-name-sm">Forma</span>
                <span className="logo-sub-sm">Estudio</span>
              </div>
            </div>
            <p className="footer__tagline">
              Arquitectura con propósito.<br />Diseño con identidad.
            </p>
          </div>

          <nav className="footer__nav">
            <span className="footer__nav-label">Navegación</span>
            {[
              ['Inicio', '#inicio'],
              ['Proyectos', '#proyectos'],
              ['Servicios', '#servicios'],
              ['Nosotros', '#nosotros'],
              ['Contacto', '#contacto'],
            ].map(([label, href]) => (
              <a key={href} href={href} onClick={(e) => handleNav(e, href)} className="footer__link">
                {label}
              </a>
            ))}
          </nav>

          <div className="footer__contact">
            <span className="footer__nav-label">Contacto</span>
            <p>Av. Santa Fe 2845, piso 4</p>
            <p>Buenos Aires, Argentina</p>
            <a href="mailto:hola@formaestudio.com.ar">hola@formaestudio.com.ar</a>
            <a href="tel:+541147820300">+54 11 4782-0300</a>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {year} Forma Estudio. Todos los derechos reservados.</span>
          <span>Arquitectura & Diseño · Buenos Aires</span>
        </div>
      </div>
    </footer>
  )
}
