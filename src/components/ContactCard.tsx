import React from "react";

const ContactCard = ({ onContactClick }) => {
  return (
    <aside className="contactCard">
      <img className="myPhoto" src="/images/me.jpg" alt="Photo of Noah Whiffen" />
      <p><strong>Noah Whiffen</strong></p>
      <p>Software Developer<br />Web Developer</p>

      {/* Button now calls the handler passed in from parent */}
      <button className="contact-button" onClick={onContactClick}>
        Contact me
      </button>

      <div className="socialContainer">
        <a href="https://www.linkedin.com/in/noah-w-307642329/" target="_blank" rel="noopener noreferrer">
          <img src="/images/Icons/linkedin-square-icon.png" alt="LinkedIn Icon" className="socialIcons" />
        </a>
        <a href="https://github.com/NoahWhiffen?tab=repositories" target="_blank" rel="noopener noreferrer">
          <img src="/images/Icons/github-icon.png" alt="GitHub Icon" className="socialIcons" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src="/images/Icons/black-instagram-icon.png" alt="Instagram Icon" className="socialIcons" />
        </a>
      </div>
    </aside>
  );
};

export default ContactCard;
