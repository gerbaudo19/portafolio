const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML/CSS', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'TypeScript', level: 75 },
      { name: 'React', level: 70 },
      { name: 'Bootstrap', level: 80 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Java', level: 85 },
      { name: 'Spring Boot', level: 80 },
      { name: 'JPA/Hibernate', level: 75 },
      { name: 'REST APIs', level: 80 },
      { name: 'Node.js', level: 60 },
    ],
  },
  {
    title: 'Bases de Datos & Herramientas',
    skills: [
      { name: 'MySQL', level: 80 },
      { name: 'Git/GitHub', level: 85 },
      { name: 'Docker', level: 50 },
      { name: 'Postman', level: 75 },
      { name: 'Linux', level: 65 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">
          Mis <span className="highlight">Skills</span>
        </h2>
        <p className="section-subtitle">
          Tecnologías y herramientas con las que trabajo diariamente
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
