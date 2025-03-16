import { useRef } from "react";

export default function ContactForm() {
  const isRef = useRef(null);
  function handleLabel(e) {
    e.stopPropagation();
    const active = isRef.current.querySelector(".relative.active");
    if (active) {
      active.classList.remove("active");
    }
    if (
      e.target.tagName === "LABEL" ||
      e.target.tagName === "INPUT" ||
      e.target.tagName === "DIV"
    ) {
      e.target.closest(".relative").classList.add("active");
      isRef.current.querySelector(".relative.active input").focus();
      return;
    }
  }
  return (
    <div className="w45 contact-section-form p40 flex-box-col g80">
      <h2 className="mt0 mb0 page-title wfit">Contact Form</h2>
      <form className="flex-box-col g70" ref={isRef} onClick={handleLabel}>
        <div className="relative">
          <label htmlFor="name" className="client-text">
            Name
          </label>
          <input type="text" id="name" />
        </div>
        <div className="relative">
          <label htmlFor="email" className="client-text">
            Email
          </label>
          <input type="text" id="email" />
        </div>
        <div className="relative">
          <label htmlFor="subject" className="client-text">
            Subject
          </label>
          <input type="text" id="subject" />
        </div>
        <div className="relative">
          <label htmlFor="message" className="client-text">
            Message
          </label>
          <input type="text" id="message"></input>
        </div>
        <div className="w35">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
