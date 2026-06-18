import useScrollReveal from '../hooks/useScrollReveal'

const icons = {
  Java: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 22c-3 0-5-1-5-3 0-1.5 2-2.5 4-3" /><path d="M16 22c3 0 5-1 5-3 0-1.5-2-2.5-4-3" /><path d="M12 18v-7" /><path d="M9 9c0-2 1-4 3-4s3 2 3 4" /><path d="M6 12c0-3 2-6 6-6s6 3 6 6" /></svg>,
  JavaScript: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="2" /><path d="M9 12v4c0 1-.5 2-2 2" /><path d="M15 12v4c0 1 .5 2 2 2" /><path d="M12 10v8" /></svg>,
  TypeScript: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="2" /><path d="M7 8h4" /><path d="M9 8v8" /><path d="M16 12h4" /><path d="M16 8v8" /><path d="M16 8h-2" /><path d="M16 16h-2" /></svg>,
  React: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2" /><path d="M12 2a10 10 0 0 1 7.5 3.5" /><path d="M12 22a10 10 0 0 0 7.5-3.5" /><path d="M2 12a10 10 0 0 0 3.5 7.5" /><path d="M22 12a10 10 0 0 1-3.5 7.5" /><path d="M12 2a10 10 0 0 0-7.5 3.5" /><path d="M12 22a10 10 0 0 1-7.5-3.5" /><path d="M2 12a10 10 0 0 1 3.5-7.5" /><path d="M22 12a10 10 0 0 0-3.5-7.5" /></svg>,
  HTML5: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 2l2 18 6 2 6-2 2-18H4z" /><path d="M8 8h8" /><path d="M8 12h6" /><path d="M16 6H8" /></svg>,
  CSS3: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 2l2 18 5 2 5-2 2-18H5z" /><path d="M8 6h8" /><path d="M9 10h7" /><path d="M10 14h4" /><path d="M12 16v2" /></svg>,
  'Tailwind CSS': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3c-4 0-6 2-6 5 0 3 2 5 4 5s3-2 3-4c-2 0-3-1-3-3 0-2 2-3 4-3z" /><path d="M18 9c0 3-2 5-4 5s-3-2-3-4c2 0 3 1 3 3 0 2-2 3-4 3" /></svg>,
  Bootstrap: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" /><path d="M10 12h4" /><path d="M11 8h2" /><path d="M11 16h2" /><path d="M12 8v8" /></svg>,
  Vite: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L3 20h18L12 2z" /><path d="M12 2v18" /></svg>,
  'Spring Boot': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" /><path d="M12 6v6l4 2" /></svg>,
  'Spring Security': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l7 4v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-4z" /></svg>,
  NestJS: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>,
  'REST APIs': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>,
  JWT: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M12 2v4" /><path d="M12 18v4" /><path d="M4.93 4.93l2.83 2.83" /><path d="M16.24 16.24l2.83 2.83" /><path d="M2 12h4" /><path d="M18 12h4" /><path d="M4.93 19.07l2.83-2.83" /><path d="M16.24 7.76l2.83-2.83" /></svg>,
  'Swagger / OpenAPI': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><path d="M12 12v4" /><path d="M12 18h.01" /></svg>,
  'JPA / Hibernate': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg>,
  MySQL: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /><path d="M12 2v16" /></svg>,
  PostgreSQL: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /><path d="M9 8v8" /><path d="M15 8v8" /></svg>,
  MongoDB: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20" /><path d="M12 2C8 6 6 12 6 16c0 3.3 2.7 6 6 6s6-2.7 6-6c0-4-2-10-6-14z" /></svg>,
  Supabase: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15l10-13v8h6l-10 13v-8H4z" /></svg>,
  Docker: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="10" width="3" height="3" rx="1" /><rect x="8" y="8" width="3" height="3" rx="1" /><rect x="12" y="6" width="3" height="3" rx="1" /><rect x="16" y="8" width="3" height="3" rx="1" /><rect x="8" y="12" width="3" height="3" rx="1" /><rect x="12" y="10" width="3" height="3" rx="1" /><rect x="16" y="10" width="3" height="3" rx="1" /><path d="M3 13c0 4.4 3.6 8 8 8 5 0 9-4 10-8H3z" /></svg>,
  Vercel: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L22 22H2z" /></svg>,
  Render: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" /></svg>,
  'GitHub Pages': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>,
  'Git / GitHub': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="18" r="3" /><circle cx="6" cy="6" r="3" /><path d="M13 6h3a2 2 0 0 1 2 2v7" /><line x1="6" y1="9" x2="6" y2="21" /></svg>,
  Maven: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" /><line x1="12" y1="22" x2="12" y2="15.5" /><polyline points="22 8.5 12 15.5 2 8.5" /></svg>,
  Postman: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 20l5-5-5-5" /><path d="M4 4h16v16H4z" /></svg>,
  'JUnit 5': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>,
  Mockito: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v14a2.5 2.5 0 0 1-5 0v-14A2.5 2.5 0 0 1 9.5 2z" /><path d="M19 8l-3 4h2l-3 4" /></svg>,
  Jest: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h.01" /><path d="M6 20h.01" /><path d="M18 20h.01" /><path d="M3 15h1.5l1.5-3h12l1.5 3H21" /><path d="M9 9L7 6" /><path d="M15 9l2-3" /><path d="M8 12h8" /></svg>,
  'Pruebas de integración': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" /><line x1="12" y1="22" x2="12" y2="15.5" /><polyline points="22 8.5 12 15.5 2 8.5" /></svg>,
  OpenCode: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
  'Prompt Engineering': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a4 4 0 0 1 4 4c0 2-2 4-4 6-2-2-4-4-4-6a4 4 0 0 1 4-4z" /><path d="M12 14v8" /><path d="M8 18h8" /></svg>,
  'Desarrollo asistido por IA': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M9 12h6" /><path d="M12 9v6" /></svg>,
  Scrum: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
  'Documentación técnica': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /><line x1="8" y1="7" x2="16" y2="7" /><line x1="8" y1="11" x2="14" y2="11" /></svg>,
  'Comunicación con stakeholders': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>,
}

const skillCategories = [
  {
    title: 'Lenguajes',
    skills: ['Java', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Vite'],
  },
  {
    title: 'Backend',
    skills: ['Spring Boot', 'Spring Security', 'NestJS', 'REST APIs', 'JWT', 'Swagger / OpenAPI', 'JPA / Hibernate'],
  },
  {
    title: 'Datos',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Supabase'],
  },
  {
    title: 'Infraestructura & DevOps',
    skills: ['Docker', 'Vercel', 'Render', 'GitHub Pages', 'Git / GitHub', 'Maven', 'Postman'],
  },
  {
    title: 'Testing',
    skills: ['JUnit 5', 'Mockito', 'Jest', 'Pruebas de integración'],
  },
  {
    title: 'IA & Desarrollo asistido',
    skills: ['OpenCode', 'Prompt Engineering', 'Desarrollo asistido por IA'],
  },
  {
    title: 'Metodologías',
    skills: ['Scrum', 'Documentación técnica', 'Comunicación con stakeholders'],
  },
]

export default function Skills() {
  const ref = useScrollReveal()

  return (
    <section id="skills">
      <div className="container" ref={ref}>
        <h2 className="section-title">
          Mis <span className="highlight">Skills</span>
        </h2>
        <p className="section-subtitle">
          Tecnologías, herramientas y metodologías con las que trabajo
        </p>

        <div className="skills-vertical">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="card skill-category-vertical">
              <h3 className="skill-category-title">{cat.title}</h3>
              <div className="skill-badges">
                {cat.skills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    <span className="skill-badge-icon">
                      {icons[skill]}
                    </span>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
