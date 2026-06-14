const projects = [
  {
    title: 'Mercado Fiado',
    description:
      'Aplicación web para la gestión de ventas fiadas y control de deudas en comercios. Resuelve la necesidad de llevar un registro digital de transacciones a crédito, calculando saldos en tiempo real y permitiendo el seguimiento de clientes y pagos. Incluye autenticación JWT con control de sesiones y protección de rutas por rol, más integración con pasarela de pagos.',
    tech: ['React', 'TypeScript', 'NestJS', 'JWT', 'Supabase'],
    links: {
      github: 'https://github.com/gerbaudo19/fiado-backend',
      demo: 'https://mercadofiado.vercel.app/',
    },
  },
  {
    title: 'Sistema Gestor de Cosecha',
    description:
      'Sistema de trazabilidad y control de cargas de camiones asociadas a lotes agrícolas. Automatiza la validación de datos del sector agropecuario, permitiendo registrar y consultar operaciones de cosecha con precisión. API REST documentada con Swagger y reglas de negocio específicas del dominio agropecuario.',
    tech: ['TypeScript', 'NestJS', 'React', 'MongoDB', 'Swagger'],
    links: {
      github: 'https://github.com/gerbaudo19/sistema-gestor-cosecha-frontend',
    },
  },
  {
    title: 'Magallanes Management System',
    description:
      'Sistema integral de gestión para tiendas de ropa. Desarrollado en equipo bajo metodología Scrum, abarcando análisis de requerimientos, diseño de funcionalidades y control de versiones. Optimiza la administración de clientes, empleados, productos y pedidos en un solo lugar.',
    tech: ['Java', 'Spring Boot', 'MySQL', 'Bootstrap'],
    links: {
      github: 'https://github.com/gerbaudo19/magallanes.github.io',
    },
  },
  {
    title: 'JWT Auth System',
    description:
      'Sistema de autenticación robusto con JSON Web Tokens construido con Spring Boot. Proporciona registro de usuarios, inicio de sesión seguro y protección de endpoints. Ideal como base para cualquier aplicación que requiera control de acceso y manejo de sesiones.',
    tech: ['Java', 'Spring Boot', 'JWT', 'Spring Security'],
    links: {
      github: 'https://github.com/gerbaudo19/jwt-auth-system',
    },
  },
  {
    title: 'Auto S.A. Testbed',
    description:
      'Aplicación para la gestión de información automotriz, desarrollada como proyecto de la cátedra Programación Avanzada. Aborda conceptos de arquitectura MVC, persistencia de datos y desarrollo de APIs con Spring Boot.',
    tech: ['Java', 'Spring Boot', 'JavaScript'],
    links: {
      github: 'https://github.com/gerbaudo19/Auto-S-A-Testbed',
    },
  },
  {
    title: 'Portafolio Personal',
    description:
      'Este portafolio. Diseñado y desarrollado desde cero con React + Vite, mostrando proyectos, habilidades y experiencia profesional. Diseño responsive, modo oscuro y despliegue automatizado en GitHub Pages.',
    tech: ['React', 'Vite', 'CSS', 'GitHub Pages'],
    links: {
      github: 'https://github.com/gerbaudo19/portafolio',
    },
  },
]

export default function Projects() {
  return (
    <section id="proyectos">
      <div className="container">
        <h2 className="section-title">
          Mis <span className="highlight">Proyectos</span>
        </h2>
        <p className="section-subtitle">
          Proyectos reales, desde sistemas en producción hasta trabajos
          académicos, cubriendo distintas industrias y necesidades
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.title} className="card project-card">
              <div className="project-tech">
                {project.tech.map((t) => (
                  <span key={t} className="tech-badge">{t}</span>
                ))}
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                >
                  GitHub
                </a>
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
