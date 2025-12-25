import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__logo">Vibe Coder</div>
      <nav className="navbar__links">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <button className="navbar__cta">Book a collab</button>
    </header>
  );
};

export default Navbar;
