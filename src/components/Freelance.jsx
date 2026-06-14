import useScrollReveal from '../hooks/useScrollReveal'

const services = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: 'Desarrollo Web',
    description:
      'Creación de aplicaciones web modernas con React, TypeScript y NestJS o Spring Boot. Diseño responsive, performance optimizada y código limpio.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: 'APIs REST',
    description:
      'Diseño e implementación de APIs con NestJS y Spring Boot. Documentación con Swagger, autenticación JWT, validaciones y buenas prácticas.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 3 21 3 21 8" />
        <line x1="4" y1="20" x2="21" y2="3" />
        <polyline points="21 16 21 21 16 21" />
        <line x1="15" y1="15" x2="21" y2="21" />
        <line x1="4" y1="4" x2="9" y2="9" />
      </svg>
    ),
    title: 'Sistemas a Medida',
    description:
      'Desde la idea hasta el despliegue. Análisis de requerimientos, arquitectura, desarrollo full stack y puesta en producción.',
  },
]

export default function Freelance() {
  const ref = useScrollReveal()

  return (
    <section id="freelance">
      <div className="container" ref={ref}>
        <h2 className="section-title">
          Trabajos <span className="highlight">Freelance</span>
        </h2>
        <p className="section-subtitle">
          ¿Necesitas una aplicación web o una API? Estoy disponible para
          trabajar en tu proyecto
        </p>

        <div className="freelance-grid">
          {services.map((service) => (
            <div key={service.title} className="card freelance-card">
              <div className="freelance-icon">{service.icon}</div>
              <h3 className="freelance-title">{service.title}</h3>
              <p className="freelance-description">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="freelance-cta">
          <p>¿Tenés un proyecto en mente? Hablemos y hagámoslo realidad.</p>
          <a href="#contacto" className="btn btn-primary">
            Contactame
          </a>
        </div>
      </div>
    </section>
  )
}
