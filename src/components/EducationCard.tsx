import type { Education } from "../data/education";

export default function EducationCard({
  title,
  subtitle,
  date,
  description,
  image,
  href,
  skills,
}: Education) {
  return (
    <div className="education-container">
      <h3>{title}</h3>

      <p className="education-text">
        <strong>{subtitle}</strong>
        <br />
        {date}
      </p>

      {image &&
        (href ? (
          <a href={href} target="_blank" rel="noopener noreferrer">
            <img
              src={image}
              className="credentialImages"
              alt={`${subtitle} badge`}
            />
          </a>
        ) : (
          <img
            src={image}
            className="credentialImages"
            alt={`${subtitle} logo`}
          />
        ))}

      <p>{description}</p>

      <div className="project-tools">
        <ul>
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}