import { useEffect, useState, useRef } from "react";

type ContactModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function ContactModal({ open, onClose }: ContactModalProps) {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
    }, 3500);
  };

  const stopProp = (e: React.MouseEvent) => e.stopPropagation();

  return (
    <div
      className="modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-title"
      onClick={onClose}
      ref={dialogRef}
    >
      <div className="modal-content" onClick={stopProp}>
        <button
          type="button"
          className="close"
          aria-label="Close"
          onClick={onClose}
        >
          ×
        </button>

        {submitted ? (
          <div className="success-message">
            <p>Thank you for reaching out. I will be with you shortly!</p>
          </div>
        ) : (
          <form
            id="contactForm"
            action="https://formsubmit.co/noah.whiffen@keyin.com"
            method="POST"
            onSubmit={handleSubmit}
          >
            <h2 id="contact-title">Contact Me</h2>

            <label htmlFor="name">Name:</label>
            <input id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input id="email" name="email" type="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows={4} required />

            <input type="text" name="_honey" style={{ display: "none" }} />

            <button type="submit">Send Message</button>
          </form>
        )}
      </div>
    </div>
  );
}
// Wire backend for future proofing
