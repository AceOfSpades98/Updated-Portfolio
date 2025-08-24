import React from "react";

const ContactModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>

        <h2>Contact Me</h2>
        <form id="contactForm">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required />

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
