import { useEffect, useState } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import navLinks from './data/navLinks';
import socials from './data/socials';
import skills from './data/skills';
import works from './data/works';
import ScrollReveal from 'scrollreveal';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 58;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + section.offsetHeight) {
          setActiveLink(section.getAttribute('id'));
        }
      });
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sr = ScrollReveal({ origin: 'top', distance: '80px', duration: 2000, reset: true });
    sr.reveal('.home__data, .about__img, .about__text, .skills__subtitle, .skills__data, .work__img, .contact__input', {
      interval: 200,
    });
  }, []);

  const handleSubmit = () => {
    alert('Message submitted');
  };

  return (
    <>
      <Navbar navLinks={navLinks} isOpen={isOpen} setIsOpen={setIsOpen} activeLink={activeLink} />
      <Home socials={socials} />
      <About />
      <Skills skills={skills} />
      <Work works={works} />
      <Contact handleSubmit={handleSubmit} />
      <Footer socials={socials} />
    </>
  );
}

export default App;
