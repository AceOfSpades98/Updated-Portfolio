import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="main-header">
      <h1 className="site-title">Noah Whiffen</h1>

      <nav>
        <Link to="/" className="nav-links">
          Home
        </Link>
        <Link to="projects" className="nav-links">
          Projects
        </Link>
        <Link to="/services" className="nav-links">
          Services
        </Link>
      </nav>
    </header>
  );
}