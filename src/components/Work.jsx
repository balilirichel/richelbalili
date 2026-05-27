function Work({ works }) {
  return (
    <section className="work section" id="work">
      <h2 className="section-title">Work</h2>
      <div className="work__container bd-grid">
        {works.map(w => (
          <a href={w.href} className="work__img" key={w.imgSrc}>
            <img src={w.imgSrc} alt={w.alt} />
          </a>
        ))}
      </div>
    </section>
  );
}

export default Work;
