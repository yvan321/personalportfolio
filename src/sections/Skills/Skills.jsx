import { useState, useEffect } from 'react';
import styles from './SkillsStyles.module.css';
import htmllogo from '../../assets/htmllogo.svg';
import csslogo from '../../assets/csslogo.svg';
import jslogo from '../../assets/jslogo.svg';
import reactlogo from '../../assets/reactlogo.svg';
import javalogo from '../../assets/javalogo.svg';
import pythonlogo from '../../assets/pythonlogo.svg';
import logologo from '../../assets/logologo.svg';
import weblogo from '../../assets/weblogo.svg';
import ciscologo from '../../assets/ciscologo.svg';
import ACSlogo from '../../assets/ACSlogo.svg';



import javacert from '../../assets/javacert.png';
import pythoncert from '../../assets/pythoncert.png';
import ciscocert from '../../assets/ciscocert.jpg';
import dean1 from '../../assets/1stDeans.jpg';
import dean2 from '../../assets/2ndDeans.jpg';



import AOS from "aos";
import "aos/dist/aos.css";


import SkillList from '../../common/SkillList';


const certifications = [
  {
    skill: "Introduction to Java",
    icon: javalogo,
    image: javacert,
    description: "Completed course on SoloLearn.",
  },
  {
    skill: "Introduction to Python",
    icon: pythonlogo,
    image: pythoncert,
    description: "Completed course on SoloLearn.",
  },
  {
    skill: "Empowerment Technologies",
    icon: ciscologo,
    image: ciscocert,
    description: "Completed course on Cisco Networking Academy.",
  },
  {
    skill: "2022-2023 Dean's",
    icon: ACSlogo,
    image: dean1,
    description: "Dean's Lister, Alliance of Computer Scientists, Academic Year 2022–2023."

,
  },
  {
    skill: "2023-2024 Dean's",
    icon: ACSlogo,
    image: dean2,
    description: "Dean's Lister, Alliance of Computer Scientists, Academic Year 2023–2024."

,
  },
  
];



function Skills() {


  const [selectedCert, setSelectedCert] = useState(null);

   useEffect(() => {
        AOS.init({
          duration: 1200,
          once: true,
          offset: 100,
        });
      }, []);
  
  
  
  return (
    <section id="skills" className={styles.container}>
      <h1 className={styles.sectionTitle}>Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={htmllogo} skill="HTML" />
        <SkillList src={csslogo} skill="CSS" />
        <SkillList src={jslogo} skill="JavaScript" />
        <SkillList src={reactlogo} skill="React" />
        <SkillList src={javalogo} skill="Java" />
        <SkillList src={pythonlogo} skill="Python" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={logologo} skill="Logo Making" />
        <SkillList src={weblogo} skill="Web Designing" />
          
      </div>
  
      <h1 className={styles.sectionTitle2}>Certifications</h1>
      <div className={styles.certList}>
        {certifications.map((cert, index) => (
          <button
            key={index}
            className={styles.certButton}
            onClick={() => setSelectedCert(cert)}
          >
            <img src={cert.icon} alt={`${cert.skill} logo`} className={styles.certIcon} />
            <span>{cert.skill}</span>
          </button>
        ))}
      </div>

      {selectedCert && (
  <div className={styles.modalOverlay}>
    <div data-aos="zoom-in" className={styles.modalContent}>
      <button className={styles.closeButton} onClick={() => setSelectedCert(null)}>×</button>
      
      <div className={styles.certHeader}>
        <img src={selectedCert.icon} alt={`${selectedCert.skill} Icon`} className={styles.certIconTitle} />
        <h2>{selectedCert.skill}</h2>
      </div>

      <img src={selectedCert.image} alt={`${selectedCert.skill} Certificate`} className={styles.certImage} />
      <p>{selectedCert.description}</p>
    </div>
  </div>
)}

    </section>
  );
}

export default Skills;