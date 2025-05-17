import { useEffect, useState } from "react";
import styles from './ProjectsStyles.module.css';
import zenstore from '../../assets/zen-store.png';
import alumnitracking from '../../assets/alumni-tracking.png';
import hiltonhotel from '../../assets/hilton-hotel.png';
import ivanjbakery from '../../assets/ivanj-bakery.png';
import quintech from '../../assets/quintech.png';
import michiel from '../../assets/michiel.png';
import agoswater from '../../assets/agos-water.png';
import cvsuwebsite from '../../assets/cvsuwebsite.png';
import dcsenrollment from '../../assets/dcs-enrollment.png';
import calcuny from '../../assets/calcuny.png';

import michiels1 from '../../assets/michiels1.png';
import calcuny1 from '../../assets/calcuny1.png';
import calcuny2 from '../../assets/calcuny2.png';
import zen1 from '../../assets/zen1.png';
import zen2 from '../../assets/zen2.png';
import zen3 from '../../assets/zen3.png';
import zen4 from '../../assets/zen4.png';
import hilton1 from '../../assets/hilton1.png';
import hilton2 from '../../assets/hilton2.png';
import hilton3 from '../../assets/hilton3.png';
import quin1 from '../../assets/quin1.png';
import quin2 from '../../assets/quin2.png';
import quin3 from '../../assets/quin3.png';
import quin4 from '../../assets/quin4.png';
import quin5 from '../../assets/quin5.png';
import quin6 from '../../assets/quin6.png';
import alum1 from '../../assets/alum1.png';
import alum2 from '../../assets/alum2.png';
import cw1 from '../../assets/cw1.png';
import cw2 from '../../assets/cw2.png';
import cw3 from '../../assets/cw3.png';
import es1 from '../../assets/es1.png';
import es2 from '../../assets/es2.png';
import es3 from '../../assets/es3.png';
import es4 from '../../assets/es4.png';
import es5 from '../../assets/es5.png';
import es6 from '../../assets/es6.png';
import es7 from '../../assets/es7.png';
import es8 from '../../assets/es8.png';
import es9 from '../../assets/es9.png';
import es10 from '../../assets/es10.png';
import agos1 from '../../assets/agos1.png';
import agos2 from '../../assets/agos2.png';
import baker1 from '../../assets/baker1.png';
import baker2 from '../../assets/baker2.png';
import baker3 from '../../assets/baker3.png';
import baker4 from '../../assets/baker4.png';















import ProjectCard from '../../common/ProjectCard';
import ProjectModal from './ProjectModal'; // NEW
import AOS from "aos";
import "aos/dist/aos.css";

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 100,
    });
  }, []);

  const allProjects = [
    {
      src: zenstore,
      h3: "Zen Store",
      h4: "Zen Store Inventory Management System",
      p: "An Inventory Management System with POS capabilities for tracking stock, sales, and transactions.",
      category: "App",
      languages: "Java",
      gallery: [zen1, zen2, zen3, zen4] 
    },
    {
      src: alumnitracking,
      h3: "AlumTracking",
      h4: "AlumTracking Alumni Management System",
      p: "A web system for monitoring alumni engagement and managing data.",
      category: "Web",
      languages: "HTML, CSS, Javascript, PHP",
      gallery: [alum1, alum2] 

    },
    {
      src: hiltonhotel,
      h3: "Hilton Hotel",
      h4: "Hilton Hotel Reservation Management System",
      p: "A website for managing hotel reservations.",
      category: "Web",
      languages: "VB.NET, HTML, CSS, Javascript",
      gallery: [hilton1, hilton2, hilton3] 

    },
    {
      src: ivanjbakery,
      h3: "IvanJ Bakery",
      h4: "IvanJ Bakery Inventory Management System",
      p: "A GUI-based inventory system for managing bakery goods and sales.",
      category: "App",
      languages: "Python (Tkinter)",
      gallery: [baker1, baker2, baker3, baker4] 
    },
    {
      src: quintech,
      h3: "Quintech",
      h4: "Quintech IT Company Website",
      p: "A professional website for an IT company, showcasing services and projects. Built with HTML, CSS, and JavaScript.",
      link: "https://lelelss.github.io/QuinTechDV/",
      category: "Web",
      languages: "HTML, CSS, Javascript",
      gallery: [quin1, quin2, quin3, quin4, quin5, quin6] 
    },
    {
      src: michiel,
      h3: "Michiel Beauty",
      h4: "Michiel Beauty Products Inventory System",
      p: "An inventory system for managing beauty products.",
      category: "App",
      languages: "Java",
      gallery: [michiels1] 
    },
    {
      src: cvsuwebsite,
      h3: "CvSU Website",
      h4: "Cavite State University Informational Website",
      p: "An informational website for Cavite State University, providing details about the institution. ",
      link: "https://lelelss.github.io/CVSU-WEBSITE/index.html",
      category: "Web",
      languages: "HTML, CSS, Javascript",
      gallery: [cw1, cw2, cw3] 
    },
    {
      src: agoswater,
      h3: "Agos",
      h4: "Agos Water Monitoring and Interruption Alert System",
      p: "An app for monitoring water reserves and sending alerts for water interruptions, promoting conservation and efficient distribution.",
      category: "App",
      languages: "Python (Flet), Arduino",
      gallery: [agos1, agos2] 
    },
    {
      src: dcsenrollment,
      h3: "DCS Enrollment",
      h4: "Department of Computer Studies Enrollment System",
      p: "A web application for managing and streamlining the enrollment process of the Department of Computer Studies.",
      link: "https://group4-enrollment-system-client.vercel.app/MainPage",
      category: "Web",
      languages: "JavaScript (React)",
      gallery: [es1, es2, es3, es4, es5, es6, es7, es8, es9, es10] 
    },
    {
      src: calcuny,
      h3: "Calcuny",
      h4: "Calcuny Online Calculator",
      p: "A responsive online calculator built using React for performing basic arithmetic operations.",
      link: "https://calcunyyy.vercel.app/",
      category: "Web",
      languages: "JavaScript (React)",
      gallery: [calcuny1, calcuny2]
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? allProjects
      : allProjects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className={styles.container}>
      <h1 className={styles.sectionTitle}>Projects</h1>

      <div className={styles.filterButtons}>
        {["All", "Web", "App"].map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`${styles.filterButton} ${
              activeFilter === category ? styles.active : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className={styles.projectsContainer}>
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            src={project.src}
            h3={project.h3}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}

export default Projects;
