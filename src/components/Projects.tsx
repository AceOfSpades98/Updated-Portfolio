import { projectSections } from "../data/projects";
import ProjectSection from "./ProjectSection.tsx";

import "../styles/projects.css";
import "../styles/styles.css";

export default function Projects() {
  return (
    <main>
      <section className="contentContainer">
      </section>

      {projectSections.map((section) => (
        <ProjectSection key={section.id} section={section} />
      ))}
    </main>
  );
}
