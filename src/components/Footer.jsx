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
              <img src="/logo.png" alt="CRAU Arquitectura" className="footer__logo-img" />
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
            <p>Julio Argentino Roca 422</p>
            <p>Mendoza, Argentina 5500</p>
            <a href="mailto:arq.cristianmiron@gmail.com">arq.cristianmiron@gmail.com</a>
            <a href="tel:+5492616378177">+54 9 261 637-8177</a>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {year} CRAU Arquitectura. Todos los derechos reservados.</span>
          <span>Arquitectura & Diseño · Mendoza</span>
        </div>
      </div>
    </footer>
  )
}
