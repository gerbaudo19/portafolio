export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Mateo Gerbaudo. Todos los derechos reservados.</p>
          <div className="footer-links">
            <a href="https://github.com/gerbaudo19" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/mateo-gerbaudo-645279211/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:mgerbaudo02@gmail.com">Email</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
