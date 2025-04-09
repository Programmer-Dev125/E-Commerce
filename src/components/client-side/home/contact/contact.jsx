export default function Contact() {
  return (
    <section className="w60 ma w90-600 contact-section">
      <h2 className="tx-24">Contact</h2>
      <form onSubmit={(e) => e.preventDefault()} className="col gp-35 mt40">
        <div>
          <label htmlFor="email" className="blc tx-14 mb10">
            Email
          </label>
          <input type="email" id="email" placeholder="Email" />
        </div>
        <div>
          <label htmlFor="subject" className="blc tx-14 mb10">
            Subject
          </label>
          <input type="text" id="subject" placeholder="Subject" />
        </div>
        <div>
          <label htmlFor="message" className="blc tx-14 mb10">
            Email
          </label>
          <textarea
            id="message"
            rows={10}
            placeholder="Write your message"
          ></textarea>
        </div>
        <div>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
}
