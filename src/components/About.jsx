import useScrollReveal from '../hooks/useScrollReveal'

export default function About() {
  const imgUrl = import.meta.env.BASE_URL + 'perfil.jpg'
  const ref = useScrollReveal()

  return (
    <section id="sobre-mi">
      <div className="container" ref={ref}>
        <h2 className="section-title">
          Sobre <span className="highlight">mí</span>
        </h2>
        <p className="section-subtitle">
          Conoce un poco más sobre mi trayectoria y motivaciones
        </p>

        <div className="about-grid">
          <div className="about-image-wrapper">
            <img
              src={imgUrl}
              alt="Mateo Gerbaudo"
              className="about-image"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextElementSibling.style.display = 'flex'
              }}
            />
            <div className="about-image-placeholder" style={{ display: 'none' }}>
              MG
            </div>
          </div>

          <div className="about-text">
            <h3>Mateo Gerbaudo</h3>
            <p className="about-role">Desarrollador Full Stack</p>
            <p>
              Estudiante de <strong>Ingeniería en Sistemas de Información</strong> en la
              Facultad Regional de Villa María (UTN). Apasionado por la tecnología
              y el desarrollo de software, siempre en busca de nuevos desafíos
              y oportunidades de aprendizaje.
            </p>
            <p>
              Me especializo en el desarrollo de aplicaciones web completas,
              combinando <strong>React + TypeScript</strong> en el frontend con
              <strong> NestJS o Spring Boot</strong> en el backend. Participo en
              todo el ciclo de vida del software: relevamiento, planificación,
              desarrollo, documentación técnica y despliegue en producción.
            </p>

            <div className="about-details">
              <div className="detail">
                <div className="detail-icon">📍</div>
                <div className="detail-info">
                  <strong>Ubicación</strong>
                  <p>Villa María, Córdoba, Argentina</p>
                </div>
              </div>
              <div className="detail">
                <div className="detail-icon">📧</div>
                <div className="detail-info">
                  <strong>Email</strong>
                  <p>mgerbaudo02@gmail.com</p>
                </div>
              </div>
              <div className="detail">
                <div className="detail-icon">📱</div>
                <div className="detail-info">
                  <strong>Teléfono</strong>
                  <p>+54 3537 661736</p>
                </div>
              </div>
              <div className="detail">
                <div className="detail-icon">🎓</div>
                <div className="detail-info">
                  <strong>Estudio</strong>
                  <p>UTN FRVM - 5° año Ing. Sistemas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
