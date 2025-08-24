type Skill = { name: string; icon: string; alt?: string };
type Props = {
  introTitle?: string;
  introText?: string;
  aboutTitle?: string;
  aboutText?: string;
  skills?: Skill[];
};

const DEFAULT_SKILLS: Skill[] = [
  { name: "Python",     icon: "/images/Icons/python-icon.png" },
  { name: "HTML",       icon: "/images/Icons/html-icon.png" },
  { name: "CSS",        icon: "/images/Icons/css-icon.png" },
  { name: "JavaScript", icon: "/images/Icons/js-icon.png" },
  { name: "React",      icon: "/images/Icons/react-js-icon.png" },
  { name: "Express JS", icon: "/images/Icons/express-js-icon.png" },
  { name: "Node JS",    icon: "/images/Icons/node-js-icon.png" },
  { name: "Java",       icon: "/images/Icons/java-programming-language-icon.png" },
  { name: "PostgreSQL", icon: "/images/Icons/postgresql-icon.png" },
  { name: "MySQL",      icon: "/images/Icons/mysql-icon.png" },
  { name: "MongoDB",    icon: "/images/Icons/mongodb-icon.png" },
  { name: "Postman",    icon: "/images/Icons/postman-icon.png" },
  { name: "AWS",        icon: "/images/Icons/aws-icon.png" },
  { name: "Ubuntu",     icon: "/images/Icons/ubuntu-color-icon.png" },
  { name: "Figma",      icon: "/images/Icons/figma-icon.png" },
];

export default function HomeSections({
  introTitle = "Hi, I'm Noah",
  introText = "I am a full-stack developer with a strength in back-end/database integration. I take pride in making my apps intuitive and user-friendly!",
  aboutTitle = "A Little About Me",
  aboutText = "Outside of coding, you'll often find me cooking, weightlifting, hiking, reading, or gaming — anything that keeps me learning and active. I'm always open to new opportunities, collaborations, or just connecting with fellow developers. Feel free to reach out!",
  skills = DEFAULT_SKILLS,
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
          {skills.map((s) => (
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
