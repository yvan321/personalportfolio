import { useEffect, useRef, useState,  } from 'react';
import styles from './HomeStyles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import heroImg from '../../assets/PROFNEIL1.svg';
import lightlogo from '../../assets/lightlogo.png';
import darklogo from '../../assets/darklogo.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import arrowUpLight from '../../assets/arrowup-light.png';
import arrowUpDark from '../../assets/arrowup-dark.png';
import facebookLight from '../../assets/facebook-light.png';
import facebookDark from '../../assets/facebook-dark.png';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import { useTheme } from '../../common/ThemeContext';
import { FaBars, FaTimes } from 'react-icons/fa';
import "aos/dist/aos.css";


function Home() {


  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === 'light' ? sun : moon;
  const facebookIcon = theme === 'light' ? facebookLight : facebookDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const arrowUpIcon = theme === 'light' ? arrowUpLight : arrowUpDark;
  const logo = theme === 'light' ? lightlogo : darklogo;

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false); 
  const words = ['Web Developer', 'Designer', 'Graphic Artist', 'Programmer']; 
  const headerRef = useRef(null);
  const navRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);




  // eslint-disable-next-line react-hooks/exhaustive-deps
  const sections = ['#home', '#about', '#skills', '#projects', '#education', '#contact'];




  const showNavbar = () => {
  setIsMenuOpen((prev) => !prev);
};


  

  useEffect(() => {
  const navLinks = navRef.current.querySelectorAll('a');

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  navLinks.forEach((link) => link.addEventListener('click', handleNavClick));

  return () => {
    navLinks.forEach((link) => link.removeEventListener('click', handleNavClick));
  };
}, []);


  useEffect(() => {
    let lastScrollTop = 0;
    const header = headerRef.current;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        if (header) header.style.top = '-100px';
      } else {
        if (header) header.style.top = '0';
      }


      if (scrollTop > 200) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  useEffect(() => {
  const navLinks = navRef.current.querySelectorAll('a');

  const observerOptions = {
    threshold: 0.7,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const sectionId = entry.target.id;
      const navLink = navRef.current.querySelector(`a[href="#${sectionId}"]`);

      if (entry.isIntersecting) {
        navLinks.forEach((link) => link.classList.remove(styles.activeLink));
        if (navLink) navLink.classList.add(styles.activeLink);
      }
    });
  }, observerOptions);

  sections.forEach((sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) observer.observe(section);
  });

  return () => {
    sections.forEach((sectionId) => {
      const section = document.querySelector(sectionId);
      if (section) observer.unobserve(section);
    });
  };
}, [sections]);

  
  

  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); 

    return () => clearInterval(intervalId);
  }, [words.length]);

  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <section>
      <header ref={headerRef} className={styles.header}>
        <a href="#home" className={styles.logo}>
          <img src={logo} alt="logo icon" />
        </a>

<nav ref={navRef} className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
  <a href="#home">Home</a>
  <a href="#about">About Me</a>
  <a href="#skills">Skills</a>
  <a href="#projects">Projects</a>
  <a href="#education">Education</a>
  <a href="#contact">Contact</a>
</nav>


        <button className={styles.navbtn}
  onClick={showNavbar}
  aria-label="Toggle navigation"
>
  {isMenuOpen ? <FaTimes /> : <FaBars />}
</button>
      </header>

      <div  data-aos="fade-up" className={styles.container}>
        <div className={styles.colorModeContainer}>
          <img src={heroImg} className={styles.hero} alt="Profile picture" />
          
        </div>
        
        <div className={styles.info}>
          <h1>
            NEIL &nbsp;YVAN
            <br />
            CALIWAN
          </h1>
          <h2 className={styles.typingtext}>
            <span>{words[currentWordIndex]}</span>
          </h2>
          <span>
            <a href="https:/facebook.com/nycaliwan.03/" target="_blank" rel="noopener noreferrer">
              <img src={facebookIcon} alt="Facebook icon" />
            </a>
            <a href="https://github.com/yvan321" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="Github icon" />
            </a>
            <a href="https://www.linkedin.com/in/neil-yvan-237325175/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn icon" />
            </a>
          </span>
          <p className={styles.description}>
            Trust yourself, and you have already paved the way.
          </p>
          <a >
            <button className={styles.messageButton}>
  Message
    <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '8px' }} />

</button>

          </a>
          
        </div>
      </div>
      
{/* Color mode button */}
<div className={styles.colorModeee} onClick={toggleTheme}>
  <img
    className={styles.colorModeProp}
    src={themeIcon}
    alt="Color mode icon"
  />
</div>
      {/* Back to top button */}
{showBackToTop && (
  <button className={styles.backToTop} onClick={scrollToTop}>
    <img src={arrowUpIcon} alt="Back to top icon" />
  </button>
)}



      
    </section>
  );
}

export default Home;

