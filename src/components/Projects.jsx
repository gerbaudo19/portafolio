import { useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import useTilt from '../hooks/useTilt'

const categories = ['Todos', 'Full Stack', 'Backend', 'Frontend', 'Académico']

const projects = [
  {
    title: 'Mercado Fiado',
    image: 'mercadofiado.png',
    description:
      'Aplicación web para la gestión de ventas fiadas y control de deudas en comercios. Resuelve la necesidad de llevar un registro digital de transacciones a crédito, calculando saldos en tiempo real y permitiendo el seguimiento de clientes y pagos. Incluye autenticación JWT con control de sesiones y protección de rutas por rol, más integración con pasarela de pagos.',
    tech: ['React', 'TypeScript', 'NestJS', 'JWT', 'Supabase'],
    category: 'Full Stack',
    links: {
      github: [
        { label: 'Frontend', url: 'https://github.com/gerbaudo19/mercado-fiado-frontend' },
        { label: 'Backend', url: 'https://github.com/gerbaudo19/fiado-backend' },
      ],
      demo: 'https://mercadofiado.vercel.app/#/login',
    },
  },
  {
    title: 'Sistema Gestor de Cosecha',
    image: 'sistemagerstorcosecha.png',
    description:
      'Sistema de trazabilidad y control de cargas de camiones asociadas a lotes agrícolas. Automatiza la validación de datos del sector agropecuario, permitiendo registrar y consultar operaciones de cosecha con precisión. API REST documentada con Swagger y reglas de negocio específicas del dominio agropecuario.',
    tech: ['TypeScript', 'NestJS', 'React', 'MongoDB', 'Swagger'],
    category: 'Full Stack',
    links: {
      github: [
        { label: 'Frontend', url: 'https://github.com/gerbaudo19/sistema-gestor-cosecha-frotend' },
        { label: 'Backend', url: 'https://github.com/gerbaudo19/sistema-gestor-cosecha-backend' },
      ],
    },
  },
  {
    title: 'Magallanes Management System',
    image: 'magallanes.png',
    description:
      'Sistema integral de gestión para tiendas de ropa. Desarrollado en equipo bajo metodología Scrum, abarcando análisis de requerimientos, diseño de funcionalidades y control de versiones. Optimiza la administración de clientes, empleados, productos y pedidos en un solo lugar.',
    tech: ['Java', 'Spring Boot', 'MySQL', 'Bootstrap'],
    category: 'Académico',
    links: {
      github: 'https://github.com/gerbaudo19/magallanes.github.io',
    },
  },
  {
    title: 'JWT Auth System',
    image: 'JWT Auth System.jpg',
    description:
      'Sistema de autenticación robusto con JSON Web Tokens construido con Spring Boot. Proporciona registro de usuarios, inicio de sesión seguro y protección de endpoints. Ideal como base para cualquier aplicación que requiera control de acceso y manejo de sesiones.',
    tech: ['Java', 'Spring Boot', 'JWT', 'Spring Security'],
    category: 'Backend',
    links: {
      github: 'https://github.com/gerbaudo19/jwt-auth-system',
    },
  },
  {
    title: 'Auto S.A. Testbed',
    image: 'auto-testbed.svg',
    description:
      'Aplicación para la gestión de información automotriz, desarrollada como proyecto de la cátedra Programación Avanzada. Aborda conceptos de arquitectura MVC, persistencia de datos y desarrollo de APIs con Spring Boot.',
    tech: ['Java', 'Spring Boot', 'JavaScript'],
    category: 'Académico',
    links: {
      github: 'https://github.com/gerbaudo19/Auto-S.A-Testbed',
    },
  },
  {
    title: 'Portafolio Personal',
    image: 'portafolio.svg',
    description:
      'Este portafolio. Diseñado y desarrollado desde cero con React + Vite, mostrando proyectos, habilidades y experiencia profesional. Diseño responsive, modo oscuro y despliegue automatizado en GitHub Pages.',
    tech: ['React', 'Vite', 'CSS', 'GitHub Pages'],
    category: 'Frontend',
    links: {
      github: 'https://github.com/gerbaudo19/portafolio',
    },
  },
]

function ProjectCard({ project }) {
  const tilt = useTilt(6)

  return (
    <div
      ref={tilt.ref}
      onMouseMove={tilt.handleMouseMove}
      onMouseLeave={tilt.handleMouseLeave}
      className="card project-card"
    >
      <div className="project-image-wrapper">
        <img
          className="project-image"
          src={import.meta.env.BASE_URL + project.image}
          alt={project.title}
          loading="lazy"
        />
      </div>
      <div className="project-tech">
        {project.tech.map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <div className="project-links">
        {(Array.isArray(project.links.github)
          ? project.links.github
          : [{ label: 'Código', url: project.links.github }]
        ).map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            {link.label}
          </a>
        ))}
        {project.links.demo && (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            Demo
          </a>
        )}
      </div>
    </div>
  )
}

export default function Projects() {
  const ref = useScrollReveal()
  const [activeCategory, setActiveCategory] = useState('Todos')

  const filtered = activeCategory === 'Todos'
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="proyectos">
      <div className="container" ref={ref}>
        <h2 className="section-title">
          Mis <span className="highlight">Proyectos</span>
        </h2>
        <p className="section-subtitle">
          Proyectos reales, desde sistemas en producción hasta trabajos
          académicos, cubriendo distintas industrias y necesidades
        </p>

        <div className="filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
