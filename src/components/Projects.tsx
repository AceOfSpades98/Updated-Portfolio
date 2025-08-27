import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

import "../styles/projects.css";
import "../styles/styles.css";

export default function Projects() {
  return (
    <section className="projects-section">
      <div className="appWrapper">
        <div className="projects-blurb">
          <h2 className="project-header">My Projects</h2>
          <p>
            Here’s a collection of the projects I’ve built — from early experiments 
            to more complete applications. Each one helped me grow as a developer.
          </p>
        </div>

        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}