export default function Contact() {
  return (
    <>
      <div className="left-contact w35">
        <div className="w85 mauto mt40 mb40">
          <p className="left-contact-text">
            Our Agent Will Contact you in 24 hours
          </p>
          <ol>
            <li>Create your message short</li>
            <li>Write in Paragraph</li>
            <li>Add Keypoints</li>
          </ol>
        </div>
      </div>
      <div className="right-contact w55">
        <p className="section-title mb50" style={{ textAlign: "left" }}>
          Contact form
        </p>
        <form autoComplete="off" className="w90">
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Enter your name" id="name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="Enter your name" id="email" />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              type="text"
              placeholder="Enter your message"
              id="message"
              rows={8}
            />
          </div>
          <div>
            <button>Send Mail</button>
          </div>
        </form>
      </div>
    </>
  );
}
