import { useState, useEffect } from 'react'

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#skills', label: 'Skills' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#freelance', label: 'Freelance' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = () => setMenuOpen(false)

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#inicio" className="navbar-logo" onClick={handleClick}>
          {'<MG />'}
        </a>

        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <span className={`toggle-bar ${menuOpen ? 'open' : ''}`} />
          <span className={`toggle-bar ${menuOpen ? 'open' : ''}`} />
          <span className={`toggle-bar ${menuOpen ? 'open' : ''}`} />
        </button>

        <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={handleClick}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
