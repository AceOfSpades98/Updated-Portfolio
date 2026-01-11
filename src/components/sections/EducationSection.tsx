import EducationCard from "../EducationCard";
import { education } from "../../data/education";

import "../../styles/projects.css";
import "../../styles/styles.css";

export default function EducationSection() {
  return (
    <section className="appWrapper" id="education">
      <div className="projects-blurb">
        <h2 className="project-header">Education & Credentials</h2>
        <p>
          My academic background and credentials, including formal education and AWS Academy
          achievements.
        </p>
      </div>

      {education.map((e) => (
        <EducationCard key={`${e.title}-${e.date}`} {...e} />
      ))}
    </section>
  );
}
