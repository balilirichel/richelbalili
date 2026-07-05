import resumePdf from '../assets/Richel_Balili_CV.pdf';


function Home({ socials }) {
  return (
    <section className="home bd-grid" id="home">
      <div className="home__data">
        <h1 className="home__title">
          Hi,
          <br />I'm <span className="home__title-color">Richel</span>
          <br />Full Stack Developer
        </h1>
        <a href={resumePdf} target="_blank" rel="noreferrer" className="button">
          View CV
        </a>
      </div>

      <div className="home__social">
        {socials
          .filter(s => ['linkedin', 'github'].includes(s.label))
          .map(s => (
            <a href={s.href} className="home__social-icon" key={s.label} target="_blank" rel="noreferrer">
              {/* Fixed: Swapped out <s.icon /> for a regular <img> element */}
              <img 
                src={s.icon} 
                alt={`${s.label} icon`} 
                className="object-contain inline-block"
                style={{ width: '24px', height: '24px' }} 
              />
            </a>
          ))}
      </div>
    </section>
  );
}

export default Home;