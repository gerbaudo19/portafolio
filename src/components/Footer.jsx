export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Mateo Gerbaudo. Todos los derechos reservados.</p>
          <p>Hecho con React + Vite</p>
        </div>
      </div>
    </footer>
  )
}
