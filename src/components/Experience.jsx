import useScrollReveal from '../hooks/useScrollReveal'

const timeline = [
  {
    type: 'work',
    year: 'Ene 2024 - Actualidad',
    title: 'Desarrollador Full Stack',
    institution: 'Proyectos Independientes · Remoto',
    description:
      'Desarrollo de aplicaciones web completas: diseño de arquitectura, lógica de negocio, integración frontend-backend y despliegue en producción. Implementación de APIs REST con validaciones, manejo de errores y documentación con Swagger/OpenAPI. Autenticación mediante JWT e integración con pasarelas de pago. Trabajo iterativo con clientes reales entregando sistemas funcionales y accesibles públicamente.',
  },
  {
    type: 'education',
    year: '2020 - Actualidad',
    title: 'Ingeniería en Sistemas de Información',
    institution: 'UTN — Facultad Regional Villa María (FRVM)',
    description:
      'Cursando el 5.° año. Próximo a graduarse. Sólida formación en ingeniería de software, arquitectura de sistemas, bases de datos y gestión de proyectos.',
  },
]

export default function Experience() {
  const ref = useScrollReveal()

  return (
    <section id="experiencia">
      <div className="container" ref={ref}>
        <h2 className="section-title">
          Experiencia & <span className="highlight">Educación</span>
        </h2>
        <p className="section-subtitle">
          Mi trayectoria profesional y formación académica
        </p>

        <div className="timeline">
          {timeline.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot" />
              <div className="card timeline-content">
                <div className="timeline-meta">
                  <span className="timeline-year">{item.year}</span>
                  <span className={`timeline-type ${item.type}`}>
                    {item.type === 'work' ? '💼 Trabajo' : '🎓 Educación'}
                  </span>
                </div>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-institution">{item.institution}</p>
                <p className="timeline-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
