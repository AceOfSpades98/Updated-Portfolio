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
            Here are a handful of my projects, ranging from school assignments to personal projects. These are my favourites and
            demonstrate both my front-end and back-end capabilities, as well as my ability to integrate both. 
          </p>
        </div>

        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}