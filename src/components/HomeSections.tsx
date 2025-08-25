import { SKILLS } from "../data/skills";

type Props = {
  introTitle?: string;
  introText?: string;
  aboutTitle?: string;
  aboutText?: string;
};

export default function HomeSections({
  introTitle = "Hi, I'm Noah",
  introText = "I am a full-stack developer with a strength in back-end/database integration. I take pride in making my apps intuitive and user-friendly!",
  aboutTitle = "A Little About Me",
  aboutText = "Outside of coding, you'll often find me cooking, weightlifting, hiking, reading, or gaming — anything that keeps me learning and active. I'm always open to new opportunities, collaborations, or just connecting with fellow developers. Feel free to reach out!",
}: Props) {
  return (
    <>
      {/* Intro */}
      <section className="contentContainer">
        <h2>{introTitle}</h2>
        <p>{introText}</p>
      </section>

      {/* Skills */}
      <section className="contentContainer">
        <h3>Languages, Tools and Frameworks:</h3>
          {SKILLS.map((s) => (
            <div key={s.name} className="icon-container" title={s.name}>
              <a href="#" className="icon-links" aria-label={s.name}>
                <img
                  src={s.icon}
                  alt={s.alt ?? `${s.name} Icon`}
                  className="icon-images"
                />
                <span className="tooltip-text">{s.name}</span>
              </a>
            </div>
          ))}
      </section>

      {/* About */}
      <section className="contentContainer">
        <h3>{aboutTitle}</h3>
        <p>{aboutText}</p>
      </section>
    </>
  );
}
