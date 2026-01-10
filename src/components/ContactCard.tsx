type ContactLinks = {
  linkedin?: string;
  github?: string;
  instagram?: string;
};

type ContactCardProps = {
  onContactClick: () => void;
  name?: string;
  titles?: [string, string];
  photoSrc?: string;
  links?: ContactLinks;
};

export default function ContactCard({
  onContactClick,
  titles = ["Software Developer", "Web Developer"],
  photoSrc = "images/me.jpg",
  links = {
    linkedin: "https://www.linkedin.com/in/noah-w-307642329/",
    github: "https://github.com/AceOfSpades98?tab=repositories",
    instagram: "#",
  },
}: ContactCardProps) {
  return (
    
    <div className="contactCard">
      <img className="myPhoto" src={photoSrc} alt={`Photo of ${name}`} />

      <p><strong>Noah Whiffen</strong></p>
      <p>
        {titles[0]}
        <br />
        {titles[1]}
      </p>

      <button type="button" className="contact-button" onClick={onContactClick}>
        Contact me
      </button>

      <div className="socialContainer" aria-label="Social links">
        {links.linkedin && (
          <a href={links.linkedin} target="_blank" rel="noreferrer">
            <img
              src="images/Icons/linkedin-square-icon.png"
              alt="LinkedIn"
              className="socialIcons"
            />
          </a>
        )}
        {links.github && (
          <a href={links.github} target="_blank" rel="noreferrer">
            <img
              src="images/Icons/github-icon.png"
              alt="GitHub"
              className="socialIcons"
            />
          </a>
        )}
        {links.instagram && (
          <a href={links.instagram} target="_blank" rel="noreferrer">
            <img
              src="images/Icons/black-instagram-icon.png"
              alt="Instagram"
              className="socialIcons"
            />
          </a>
        )}
      </div>
    </div>
  );
}
