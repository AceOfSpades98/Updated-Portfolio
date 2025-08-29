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
            Here are a handful of my projects, ranging from school assignments to personal projects. You'll see a combination of front-end and back-end
            applications, some of which are paired together. 
          </p>
        </div>

        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}