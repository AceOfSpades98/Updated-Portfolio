import type { Education } from "../data/education";

export default function EducationCard({
  title,
  subtitle,
  date,
  description,
  image,
  href,
}: Education) {
  return (
    <div className="appContainer">
      <h3>{title}</h3>

      <p>
        <strong>{subtitle}</strong>
        <br />
        {date}
      </p>

      {image && (
        <img
          src={image}
          className="projectImages"
          alt={`${subtitle} logo`}
        />
      )}

      <p>{description}</p>

      {href ? (
        <a className="projectLinks" href={href} target="_blank" rel="noopener noreferrer">
          View Credential
        </a>
      ) : (
        <span className="projectLinks disabled">View Credential</span>
      )}
    </div>
  );
}

