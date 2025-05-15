import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./EducationStyles.module.css";
import educcvsu from '../../assets/educcvsu.svg';
import eduama from '../../assets/eduama.svg';
import educganhs from '../../assets/educganhs.svg';

function Education() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 100,
    });
  }, []);

  const educationData = [
    {
      year: "2022 - Present",
      title: "Cavite State University - Bacoor Campus",
      description:
        "Bachelor of Science in Computer Science",
      icon: educcvsu,
    },
    {
      year: "2020 - 2022",
      title: "AMA Computer College - Las Piñas",
      description:
        "Senior High School - STEM Strand", 
      icon: eduama,
    },
    {
      year: "2015 - 2019",
      title: "Golden Acres National High School",
      description:
        "Junior High School", 
      icon: educganhs,
    },
  ];

  return (
    <section className={styles.container} id="education">
      <h2 className={styles.sectionTitle}>
        Education
      </h2>
      <div className={styles.timelineContainer}>
        {educationData.map((item, index) => (
          <div
            key={index}
            className={styles.timelineItem}
  
          >
            <div className={`${styles.timelineLeft} ${styles.redBorder}`}>
              <span className={styles.year}>{item.year}</span>
              <div className={styles.iconCircle}>
                <img src={item.icon} alt={item.title + " icon"} className={styles.schoolIcon} />
              </div>
            </div>
            <div className={styles.timelineLeft}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
