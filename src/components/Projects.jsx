const projects = [
  {
    title: 'Mercado Fiado',
    description:
      'App para gestionar fiados en comercios. Sistema completo con autenticación JWT, gestión de clientes, productos y control de deudas.',
    tech: ['React', 'TypeScript', 'Node.js', 'JWT'],
    links: {
      github: 'https://github.com/gerbaudo19/fiado-backend',
      demo: 'https://mercadofiado.vercel.app/',
    },
  },
  {
    title: 'Magallanes Management System',
    description:
      'Sistema de gestión integral para optimizar el manejo de información de clientes, empleados, productos y órdenes en un entorno empresarial.',
    tech: ['Java', 'Spring Boot', 'MySQL', 'Bootstrap'],
    links: {
      github: 'https://github.com/gerbaudo19/magallanes.github.io',
    },
  },
  {
    title: 'Sistema Gestor de Cosecha',
    description:
      'Plataforma para la gestión y seguimiento de cosechas, con frontend y backend separados, desarrollado con TypeScript.',
    tech: ['TypeScript', 'Node.js', 'React'],
    links: {
      github: 'https://github.com/gerbaudo19/sistema-gestor-cosecha-frontend',
    },
  },
  {
    title: 'JWT Auth System',
    description:
      'Sistema de autenticación con JWT usando Spring Boot. Incluye registro de usuarios, login y protección de endpoints.',
    tech: ['Java', 'Spring Boot', 'JWT', 'Security'],
    links: {
      github: 'https://github.com/gerbaudo19/jwt-auth-system',
    },
  },
  {
    title: 'Auto S.A. Testbed',
    description:
      'Aplicación Spring Boot para la gestión de información automotriz, desarrollada en la cátedra de Programación Avanzada.',
    tech: ['Java', 'Spring Boot', 'JavaScript'],
    links: {
      github: 'https://github.com/gerbaudo19/Auto-S-A-Testbed',
    },
  },
  {
    title: 'Portafolio Personal',
    description:
      'Este mismo portafolio. Desarrollado con React + Vite, diseño moderno responsive y deployado en GitHub Pages.',
    tech: ['React', 'Vite', 'CSS'],
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
          Algunos de los proyectos en los que he trabajado
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
