const Contact = () => {
  return (
    <section className="page contact">
      <div className="page__header">
        <h1>Contact</h1>
        <p>Ready to build your next digital experience? Drop a line.</p>
      </div>
      <div className="contact__grid">
        <form className="contact__form">
          <label>
            Name
            <input type="text" placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" placeholder="you@studio.com" />
          </label>
          <label>
            Project type
            <select>
              <option>Brand website</option>
              <option>Portfolio refresh</option>
              <option>Creative dev sprint</option>
              <option>Something custom</option>
            </select>
          </label>
          <label>
            Project details
            <textarea rows="5" placeholder="Tell me about the vibe you're aiming for." />
          </label>
          <button className="primary" type="submit">
            Send message
          </button>
        </form>
        <div className="contact__details">
          <div>
            <h3>Studio</h3>
            <p>Los Angeles · Remote worldwide</p>
          </div>
          <div>
            <h3>Availability</h3>
            <p>Currently booking for next month’s launches.</p>
          </div>
          <div>
            <h3>Connect</h3>
            <p>hello@vibecoder.studio</p>
            <p>LinkedIn · Instagram · Dribbble</p>
          </div>
          <div className="contact__highlight">
            <h4>Let’s create something unforgettable.</h4>
            <p>Share a moodboard or inspo links and I’ll map the next steps.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
