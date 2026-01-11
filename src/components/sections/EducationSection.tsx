import EducationCard from "../EducationCard";
import { education } from "../../data/education";

import "../../styles/education.css";
import "../../styles/styles.css";

export default function EducationSection() {
  return (
    <section className="education-wrapper" id="education">
      <h2 className="education-header">Education & Credentials</h2>
      {education.map((e) => (
        <EducationCard key={`${e.title}-${e.date}`} {...e} />
      ))}
    </section>
  );
}
