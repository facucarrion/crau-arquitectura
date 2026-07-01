import { useState, useEffect } from 'react'
import './Header.css'

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="header__inner">
        <a href="#inicio" className="header__logo" onClick={(e) => handleNav(e, '#inicio')}>
          <span className="logo-mark">F</span>
          <div className="logo-text">
            <span className="logo-name">Forma</span>
            <span className="logo-sub">Estudio</span>
          </div>
        </a>

        <nav className={`header__nav${menuOpen ? ' open' : ''}`}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link" onClick={(e) => handleNav(e, link.href)}>
              {link.label}
            </a>
          ))}
          <a href="#contacto" className="btn-consulta" onClick={(e) => handleNav(e, '#contacto')}>
            Solicitar consulta
          </a>
        </nav>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menú">
          <span className={menuOpen ? 'open' : ''}></span>
          <span className={menuOpen ? 'open' : ''}></span>
          <span className={menuOpen ? 'open' : ''}></span>
        </button>
      </div>
    </header>
  )
}
