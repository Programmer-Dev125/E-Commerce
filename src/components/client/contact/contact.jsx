import ContactForm from "./contactform/contactform";
import ContactImage from "./contactimage/contactimage";

export default function Contact() {
  return (
    <div className="flex-box-row w90 mauto contact-section">
      <ContactForm />
      <ContactImage />
    </div>
  );
}
