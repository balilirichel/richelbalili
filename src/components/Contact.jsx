function Contact({ handleSubmit }) {
  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Contact</h2>
      <div className="contact__container bd-grid">
        <div className="contact__form">
          <input type="text" placeholder="Name" className="contact__input" />
          <input type="email" placeholder="Email" className="contact__input" />
          <textarea rows={10} placeholder="Your message" className="contact__input" />
          <button className="contact__button button" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
