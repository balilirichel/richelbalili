function Home({ socials }) {
  return (
    <section className="home bd-grid" id="home">
      <div className="home__data">
        <h1 className="home__title">
          Hi,
          <br />I'm <span className="home__title-color">Richel</span>
          <br />Full Stack Developer
        </h1>
        <a href="assets/portfolio.pdf" className="button">Download CV</a>
      </div>

      <div className="home__social">
        {socials
          .filter(s => ['linkedin', 'github'].includes(s.label))
          .map(s => (
            <a href={s.href} className="home__social-icon" key={s.label}>
              <s.icon size={24} />
            </a>
          ))}
      </div>
    </section>
  );
}

export default Home;
