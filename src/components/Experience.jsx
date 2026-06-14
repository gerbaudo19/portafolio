const timeline = [
  {
    year: '2024 - Presente',
    title: 'Estudiante de Ingeniería en Sistemas',
    institution: 'UTN - Facultad Regional de Villa María',
    description:
      'Formación en desarrollo de software, bases de datos, redes y sistemas de información.',
  },
]

export default function Experience() {
  return (
    <section id="experiencia">
      <div className="container">
        <h2 className="section-title">
          Experiencia & <span className="highlight">Educación</span>
        </h2>
        <p className="section-subtitle">
          Mi formación académica y trayectoria
        </p>

        <div className="timeline">
          {timeline.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot" />
              <div className="card timeline-content">
                <span className="timeline-year">{item.year}</span>
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
