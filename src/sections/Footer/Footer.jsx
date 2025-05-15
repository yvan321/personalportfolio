import { useTheme } from '../../common/ThemeContext'; // adjust path if needed
import styles from "./FooterStyles.module.css";
import {
  FaFacebook, FaInstagram, FaGithub,
  FaTwitter, FaLinkedin, FaTelegramPlane, FaWhatsapp
} from "react-icons/fa";
import lightlogo from '../../assets/lightlogo.png';
import darklogo from '../../assets/darklogo.png';

function Footer() {
  const { theme } = useTheme(); // <-- use the current theme
  const logo = theme === 'dark' ? darklogo : lightlogo;

  return (
    <footer>
    <div className={styles.footerContainer}>
      <div className={styles.topContainer}>
        <div className={styles.leftSection}>
          <img src={logo} alt="Logo" className={styles.logo} />
          <p className={styles.motto}>
            Trust yourself, and you have already paved the way.
          </p>
          <div className={styles.socialIcons}>
            <a href="https:/facebook.com/nycaliwan.03/" aria-label="Facebook"><FaFacebook /></a>
            <a href="https://www.instagram.com/yvancali_1/" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://github.com/yvan321" aria-label="GitHub"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/neil-yvan-caliwan-237325175/" aria-label="LinkedIn"><FaLinkedin /></a>

          </div>
        </div>

        <div className={styles.rightSectionWrapper}>
          <div className={styles.rightSection}>
            <div className={styles.linksColumn}>
              <a href="#home">HOME</a>
              <a href="#about">ABOUT ME</a>
              <a href="#skills">SKILLS</a>
              <a href="#projects">PROJECTS</a>
              <a href="#education">EDUCATION</a>
              <a href="#resume">RESUME</a>
              <a href="#contact">CONTACT</a>
            </div>
            <div className={styles.verticalDivider}></div>
            <img src={logo} alt="Right Logo" className={styles.rightLogoBox} />
          </div>
        </div>
      </div>
      </div>
      <div className={styles.bottomBar}>© {new Date().getFullYear()} Neil Yvan Caliwan. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
