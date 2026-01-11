import type { Education } from "../data/education";

export default function EducationCard({ title, subtitle, date, description, image, href,
}: Education) {
  return (
    <div className="appContainer">
      <h3>{title}</h3>
      <img src={image}></img>
      <p>{description}</p>
    </div>
  );
}

