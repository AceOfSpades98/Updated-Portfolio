import { SKILLS_BY_CATEGORY } from "../../data/skills";

export default function SkillsSection() {
  return (
    <section className="contentContainer">
      {/* <h3>Languages, Tools and Frameworks:</h3> */}

      {Object.entries(SKILLS_BY_CATEGORY).map(([category, skills]) => (
        <div key={category} className="skill-group">
          <h4>{category}</h4>

          <div className="skillsGrid">
            {skills.map((s) => (
              <div key={s.name} className="icon-container" title={s.name}>
                <img
                  src={s.icon}
                  alt={s.alt ?? `${s.name} Icon`}
                  className="icon-images"
                />
                <span className="tooltip-text">{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
