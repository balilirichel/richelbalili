function Work({ works }) {
  return (
    <section className="work section" id="work">
      <h2 className="section-title">Sample Works</h2>
      <div className="work__container bd-grid">
        {works.map(w => (
          <a href={w.href} className="work__img block overflow-hidden rounded-lg shadow-md" key={w.imgSrc}>
            <img 
              src={w.imgSrc} 
              alt={w.alt} 
              className="w-full aspect-[4/3] object-cover transition-transform duration-300 hover:scale-105"
            />
          </a>
        ))}
      </div>
    </section>
  );
}

export default Work;