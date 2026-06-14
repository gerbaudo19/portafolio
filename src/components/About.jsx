export default function About() {
  const imgUrl = import.meta.env.BASE_URL + 'perfil.png'

  return (
    <section id="sobre-mi">
      <div className="container">
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
                e.target.nextSibling.style.display = 'flex'
              }}
            />
            <div className="about-image-placeholder" style={{ display: 'none' }}>
              MG
            </div>
          </div>

          <div className="about-text">
            <h3>Mateo Gerbaudo</h3>
            <p className="about-role">Estudiante de Ingeniería en Sistemas</p>
            <p>
              Estudiante de <strong>Ingeniería en Sistemas de Información</strong> en la
              Facultad Regional de Villa María (UTN). Apasionado por la tecnología
              y el desarrollo de software, siempre en busca de nuevos desafíos
              y oportunidades de aprendizaje.
            </p>
            <p>
              Me especializo en el desarrollo de aplicaciones web modernas,
              combinando tecnologías del ecosistema Java/Spring Boot en el backend
              con React en el frontend. Disfruto crear soluciones eficientes y
              bien estructuradas.
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
                  <p>UTN FRVM - Ing. en Sistemas</p>
                </div>
              </div>
              <div className="detail">
                <div className="detail-icon">💼</div>
                <div className="detail-info">
                  <strong>Disponibilidad</strong>
                  <p>Freelance / Proyectos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
