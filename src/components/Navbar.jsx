import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className="navbar">
      <NavLink to="/" end className="brand">
        Emi Elias
      </NavLink>
      <nav className="nav-links">
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/cv">CV</NavLink>
        <NavLink to="/contact" className="contact-btn">
          Contact
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar
