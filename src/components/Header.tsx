import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleProjectsClick = () => {
    // If you're not on Home, go Home first, then scroll
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: "projects" } });
      return;
    }
    scrollToProjects();
  };

  return (
    <header className="main-header">
      <h1 className="site-title">Noah Whiffen</h1>

      <nav>
        <Link to="/" className="nav-links">Home</Link>

        <button type="button" className="nav-links" onClick={handleProjectsClick}>
          Projects
        </button>

        {/* Link to education */}
        {/* Link to certifications */}
        
        <a 
          href={`${import.meta.env.BASE_URL}Tech_Resume.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-links">
          Resume
        </a>
        
        {/* <Link to="/services" className="nav-links">Services</Link> */}
      </nav>
    </header>
  );
}
