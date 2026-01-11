import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleProjectsClick = () => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: "projects" } });
      return;
    }
    scrollToSection("projects");
  };

  const handleEducationClick = () => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: "education" } });
      return;
    }
    scrollToSection("education");
  };

  return (
    <header className="main-header">
      <h1 className="site-title">Noah Whiffen</h1>

      <nav>
        <Link to="/" className="nav-links">Home</Link>

        <button
          type="button"
          className="nav-links"
          onClick={handleProjectsClick}
        >
          Projects
        </button>

        <button
          type="button"
          className="nav-links"
          onClick={handleEducationClick}
        >
          Education
        </button>

        <a
          href={`${import.meta.env.BASE_URL}Tech_Resume.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-links"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}
