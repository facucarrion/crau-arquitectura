import { useState, useEffect } from 'react'
import './Header.css'

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' }
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
    <>
      <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
        <div className='header__inner'>
          <a
            href='#inicio'
            className='header__logo'
            onClick={e => handleNav(e, '#inicio')}
          >
            <img
              src='/logo.png'
              alt='CRAU Arquitectura'
              className='header__logo-img'
            />
          </a>

          <nav className='header__nav--desktop'>
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className='nav-link'
                onClick={e => handleNav(e, link.href)}
              >
                {link.label}
              </a>
            ))}
            <a
              href='https://wa.me/5492616378177'
              className='btn-consulta'
              target='_blank'
            >
              Consulta WhatsApp
            </a>
          </nav>
        </div>
      </header>

      <button
        className={`hamburger${menuOpen ? ' is-open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {menuOpen && (
        <div className='header__nav-overlay' onClick={() => setMenuOpen(false)}>
          <nav className='header__nav'>
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className='nav-link'
                onClick={e => handleNav(e, link.href)}
              >
                {link.label}
              </a>
            ))}
            <a
              href='https://wa.me/5492616378177'
              className='btn-consulta'
              target='_blank'
            >
              Consulta WhatsApp
            </a>
          </nav>
        </div>
      )}
    </>
  )
}
