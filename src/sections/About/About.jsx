import { useState } from 'react';
import styles from './AboutStyles.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faInfoCircle, faUsers } from '@fortawesome/free-solid-svg-icons';

import heroImg from '../../assets/PIC2.jpg';
import "aos/dist/aos.css";

function AboutMe() {
  const [activeTab, setActiveTab] = useState('relevant');

  const contentMap = {
    relevant: "I’m Neil Yvan, a Computer Science student from Manila, Philippines, with a strong passion for web development and building digital solutions. I’ve developed 10+ projects using a variety of programming languages including Java, Python, JavaScript, and PHP, gaining hands-on experience across both front-end and back-end development. My main focus is on front-end web development, where I build responsive, user-friendly websites and web apps using tools like React.js, HTML5, CSS3, and Tailwind CSS. I enjoy turning designs into real, functional products that offer great user experiences.",
    realYou: "Mamba Mentality in Everything I Do. I believe that time is gold, and every moment counts. Embracing the Mamba Mentality, I approach every task with relentless focus, passion, and a drive to excel. Whether it's tackling challenges, learning new skills, or pushing myself to exceed expectations, I put my best into everything I do. I am creative, curious, and persistent in my pursuit of growth and mastery. I thrive on challenges, always looking for opportunities to innovate and find solutions that are both effective and meaningful. Outside of work, I constantly seek new experiences, ideas, and knowledge. Whether it's exploring new concepts or refining my skills, I believe in continuous self-improvement and the importance of never settling for less than my best. In every project, every task, and every opportunity, I give my all—because time is too valuable to waste.",
    family: "I come from a supportive and loving family that has always nurtured my creative spirit. As the eldest of three sons, I’ve naturally taken on the role of a guide—someone who leads by example. My family has been my biggest inspiration, encouraging me to chase a path that blends both art and technology, where I can express myself while building meaningful things. Being the firstborn, I carry a quiet responsibility. I want my younger brothers to see what hard work, persistence, and passion can accomplish. Whether it's through my work ethic, how I handle challenges, or the way I stay committed to what I love, I hope to inspire them to carve their own paths with the same fire. My journey is fueled not just by personal ambition but by a deeper motivation: to lead, to create, and to uplift those around me—starting with my own family."
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.sectionTitle}>About Me</h1>

      <div className={styles.contentWrapper}>
        <div className={styles.imageWrapper}>
          <img src={heroImg} className={styles.image} alt="Profile picture" />
        </div>

        <div className={styles.textWrapper}>
          <div className={styles.buttonGroup}>
  <button
    className={`${styles.tabButton} ${activeTab === 'relevant' ? styles.active : ''}`}
    onClick={() => setActiveTab('relevant')}
  >
    <FontAwesomeIcon icon={faInfoCircle} style={{ marginRight: '8px' }} />
    Relevant Info
  </button>

  <button
    className={`${styles.tabButton} ${activeTab === 'realYou' ? styles.active : ''}`}
    onClick={() => setActiveTab('realYou')}
  >
    <FontAwesomeIcon icon={faUser} style={{ marginRight: '8px' }} />Real Me
  </button>

  <button
    className={`${styles.tabButton} ${activeTab === 'family' ? styles.active : ''}`}
    onClick={() => setActiveTab('family')}
  >
    <FontAwesomeIcon icon={faUsers} style={{ marginRight: '8px' }} />
    Family
  </button>
</div>


          <p className={styles.description}>{contentMap[activeTab]}</p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
