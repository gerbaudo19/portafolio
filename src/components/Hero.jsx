export default function Hero() {
  const imgUrl = import.meta.env.BASE_URL + 'perfil.png'

  return (
    <section id="inicio" className="hero">
      <div className="hero-bg" />
      <div className="container hero-grid">
        <div className="hero-text">
          <div className="hero-greeting">
            <span className="hero-greeting-dot" />
            Disponible para proyectos
          </div>
          <h1 className="hero-name">
            Mateo <span className="highlight">Gerbaudo</span>
          </h1>
          <p className="hero-role">Desarrollador Full Stack</p>
          <p className="hero-description">
            Especializado en React + TypeScript y NestJS / Spring Boot.
            Creo soluciones web completas, desde la idea hasta el despliegue.
          </p>
          <div className="hero-actions">
            <a href="#proyectos" className="btn btn-primary">
              Ver proyectos
            </a>
            <a href="#contacto" className="btn btn-secondary">
              Contacto
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
              <span className="stat-number">5+</span>
              <span className="stat-label">Tecnologías</span>
            </div>
            <div className="stat">
              <span className="stat-number">5°</span>
              <span className="stat-label">Año Ing. Sistemas</span>
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
                e.target.nextSibling.style.display = 'flex'
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
