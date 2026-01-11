import EducationCard from "../EducationCard";
import { education } from "../../data/education";

type Props = {
  title?: string;
  text?: string;
};

export default function EducationSection({
  title = "Education & Credentials",
}: Props) {
  return (
    <section className="contentContainer" id="education">
      <h3>{title}</h3>

      {education.map((e) => (
        <EducationCard key={`${e.title}-${e.date}`} {...e} />
      ))}
    </section>
  );
}
