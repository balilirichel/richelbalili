function Skills({ skills }) {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills__container">
        {skills.map(cat => (
          <div className="skills__category" key={cat.category}>
            <h3 className="skills__subtitle">{cat.category}</h3>
            <div className="skills__grid">
              {cat.items.map(item => (
                <div className="skills__data" key={item.name}>
                  <div className="skills__names">
                    <span className="skills__icon"><item.icon size={48} /></span>
                    <span className="skills__name">{item.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
