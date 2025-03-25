import { useState } from "react";
import { handleForm } from "./handleForm";

export default function ContactForm() {
  const [contacts, setContacts] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [received, setReceived] = useState(false);
  const [response, setResponse] = useState({
    danger: false,
    message: "",
  });
  function handleChange(e) {
    setContacts({
      ...contacts,
      [e.target.id]: e.target.value,
    });
  }

  return (
    <>
      <div className="w45 contact-section-form p40 flex-box-col g80">
        <h2 className="mt0 mb0 page-title wfit">Contact Form</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleForm(contacts, setReceived, setResponse);
          }}
          className="flex-box-col g70"
        >
          <div>
            <label htmlFor="name" className="client-text">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={contacts.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="client-text">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={contacts.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="client-text">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={contacts.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="client-text">
              Message
            </label>
            <input
              type="text"
              id="message"
              value={contacts.message}
              onChange={handleChange}
              required
            ></input>
          </div>
          <div className="w35">
            <button>Submit</button>
          </div>
        </form>
      </div>
      {received && (
        <div className={`cart-message ${response.danger ? "danger" : ""}`}>
          <h2 className="client-white-title mt0 mb0">{response.message}</h2>
        </div>
      )}
    </>
  );
}
