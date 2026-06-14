import useScrollReveal from '../hooks/useScrollReveal'

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 80 },
      { name: 'TypeScript', level: 80 },
      { name: 'JavaScript', level: 85 },
      { name: 'HTML5 / CSS3', level: 90 },
      { name: 'Vite', level: 75 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Java', level: 85 },
      { name: 'Spring Boot', level: 80 },
      { name: 'NestJS', level: 70 },
      { name: 'Spring Security / JWT', level: 80 },
      { name: 'REST APIs / Swagger', level: 85 },
    ],
  },
  {
    title: 'Bases de Datos',
    skills: [
      { name: 'PostgreSQL', level: 75 },
      { name: 'MySQL', level: 80 },
      { name: 'MongoDB', level: 70 },
      { name: 'Hibernate / JPA', level: 75 },
      { name: 'Supabase', level: 65 },
    ],
  },
  {
    title: 'DevOps & Herramientas',
    skills: [
      { name: 'Git / GitHub', level: 85 },
      { name: 'Postman', level: 80 },
      { name: 'Maven', level: 75 },
      { name: 'Vercel / Render', level: 75 },
      { name: 'Swagger / OpenAPI', level: 80 },
    ],
  },
  {
    title: 'Testing',
    skills: [
      { name: 'JUnit 5', level: 75 },
      { name: 'Mockito', level: 70 },
      { name: 'Jest', level: 65 },
      { name: 'Pruebas de Integración', level: 70 },
    ],
  },
  {
    title: 'Metodologías',
    skills: [
      { name: 'Scrum', level: 75 },
      { name: 'Trabajo en equipo', level: 85 },
      { name: 'Documentación técnica', level: 80 },
      { name: 'Comunicación con stakeholders', level: 75 },
    ],
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

        <div className="skills-grid">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="card skill-category">
              <h3 className="skill-category-title">{cat.title}</h3>
              <div className="skill-items">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-bar-fill"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
