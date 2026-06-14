export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-bg" />
      <div className="container hero-content">
        <span className="hero-greeting">👋 ¡Hola! Soy</span>
        <h1 className="hero-name">
          Mateo <span className="highlight">Gerbaudo</span>
        </h1>
        <p className="hero-description">
          Estudiante de Ingeniería en Sistemas de Información |
          Desarrollador de Software apasionado por la tecnología
        </p>
        <div className="hero-actions">
          <a href="#proyectos" className="btn btn-primary">
            Ver proyectos
          </a>
          <a href="#contacto" className="btn btn-secondary">
            Contactarme
          </a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">2+</span>
            <span className="stat-label">Años estudiando</span>
          </div>
          <div className="stat">
            <span className="stat-number">7</span>
            <span className="stat-label">Proyectos</span>
          </div>
          <div className="stat">
            <span className="stat-number">3+</span>
            <span className="stat-label">Tecnologías</span>
          </div>
        </div>
      </div>
    </section>
  )
}
