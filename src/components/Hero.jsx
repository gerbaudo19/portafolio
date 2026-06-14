import { useState, useEffect } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

const roles = [
  'Desarrollador Full Stack',
  'React · TypeScript · NestJS',
  'Java · Spring Boot',
]

export default function Hero() {
  const imgUrl = import.meta.env.BASE_URL + 'perfil.jpg'
  const ref = useScrollReveal()
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timer

    if (!deleting && displayText.length < current.length) {
      timer = setTimeout(() => {
        setDisplayText(current.slice(0, displayText.length + 1))
      }, 60)
    } else if (!deleting && displayText.length === current.length) {
      timer = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayText.length > 0) {
      timer = setTimeout(() => {
        setDisplayText(current.slice(0, displayText.length - 1))
      }, 30)
    } else if (deleting && displayText.length === 0) {
      setDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }

    return () => clearTimeout(timer)
  }, [displayText, deleting, roleIndex])

  return (
    <section id="inicio" className="hero">
      <div className="hero-bg" />
      <div className="container hero-grid" ref={ref}>
        <div className="hero-text">
          <div className="hero-greeting">
            <span className="hero-greeting-dot" />
            Disponible para proyectos
          </div>
          <h1 className="hero-name">
            Mateo <span className="highlight">Gerbaudo</span>
          </h1>
          <p className="hero-role">
            {displayText}
            <span className="typing-cursor">|</span>
          </p>
          <p className="hero-description">
            Creo soluciones web completas — desde la idea hasta el despliegue —
            combinando frontend moderno con APIs robustas y escalables.
          </p>
          <div className="hero-actions">
            <a href="#proyectos" className="btn btn-primary">
              Ver proyectos
            </a>
            <a href="#contacto" className="btn btn-secondary">
              Contacto
            </a>
            <a
              href={import.meta.env.BASE_URL + 'perfil.jpg'}
              download="Mateo_Gerbaudo_CV.png"
              className="btn btn-ghost"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Foto
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">2+</span>
              <span className="stat-label">Años</span>
            </div>
            <div className="stat">
              <span className="stat-number">7</span>
              <span className="stat-label">Proyectos</span>
            </div>
            <div className="stat">
              <span className="stat-number">10+</span>
              <span className="stat-label">Tecnologías</span>
            </div>
            <div className="stat">
              <span className="stat-number">5°</span>
              <span className="stat-label">Ing. Sistemas</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-wrapper">
            <div className="hero-image-ring" />
            <div className="hero-image-ring" />
            <img
              src={imgUrl}
              alt="Mateo Gerbaudo"
              className="hero-image"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextElementSibling.style.display = 'flex'
              }}
            />
            <div className="hero-image-placeholder" style={{ display: 'none' }}>
              MG
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
