import type { Project } from "../data/projects";

export default function ProjectCard({ title, img, alt, desc, tools, href }: Project) {
  return (
    <div className="appContainer">
      <h3>{title}</h3>
      <img src={img} className="projectImages" alt={alt} />
      <p>{desc}</p>

      <div className="project-tools">
        <ul>
          {tools.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>

      {href ? (
        <a className="projectLinks" href={href} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      ) : (
        <span className="projectLinks disabled">View Project</span>
      )}
    </div>
  );
}
