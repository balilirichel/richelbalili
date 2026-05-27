function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section-title">About</h2>
      <div className="about__container bd-grid">
        <div className="about__img">
          <img src="assets/img/about.jpg" alt="About" />
        </div>
        <div>
          <h2 className="about__subtitle">I'm Richel</h2>
          <p className="about__text">
            Full-stack developer with real experience building web applications, eCommerce stores, and software solutions for clients and businesses. Skilled in REST API integration, payment gateway setup, and connecting AI features into live websites. Comfortable working across the full stack — from database design to frontend UI — and experienced in agile workflows and AI-assisted development.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
