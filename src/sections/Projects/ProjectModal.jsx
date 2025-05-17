import { useEffect, useState } from "react";
import styles from './ProjectModal.module.css';
import AOS from "aos";
import "aos/dist/aos.css";

// ✅ Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function ProjectModal({ project, onClose }) {
  const [showGallery, setShowGallery] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className={styles.modalOverlay}>
      <div data-aos="zoom-in" className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>×</button>

        <h2 className={styles.title}>Project Details</h2>

        <div className={styles.content}>
          {!showGallery ? (
            <>
              <img src={project.src} alt={project.h3} className={styles.image} />
              <div className={styles.details}>
                <h2 className={styles.title}>{project.h4}</h2>
                <p className={styles.languages}>
                  <strong className={styles.highlightText}>Languages:</strong> {project.languages}
                </p>
                <p className={styles.description}>
                  <strong className={styles.highlightText}>Description:</strong> {project.p}
                </p>
              </div>
            </>
          ) : (
            <div data-aos="zoom-in" className={styles.swiperWrapper}>
              {Array.isArray(project.gallery) && project.gallery.length > 1 ? (
                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation
                  pagination={{ clickable: true }}
                  spaceBetween={30}
                  slidesPerView={1}
                >
                  {project.gallery.map((img, index) => (
                    <SwiperSlide key={index}>
                      <img src={img} alt={`Gallery ${index}`} className={styles.galleryImage} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <img src={project.gallery?.[0] || project.src} alt="Gallery" className={styles.image} />
              )}
            </div>
          )}
        </div>

        <div className={styles.actions}>
          <button className={styles.galleryBtn} onClick={() => setShowGallery(!showGallery)}>
            {showGallery ? "BACK" : "GALLERY"}
          </button>
          {project.link ? (
            <button className={styles.viewSiteBtn}>
  <a
  href={project.link}
  target="_blank"
  rel="noopener noreferrer"
  style={{ color: 'white', fontWeight: 'bold' }}
>
  VIEW SITE
</a>
</button>
          ) : (
            <p style={{
              fontSize: '12px',
              color: 'gray',
              fontStyle: 'italic',
              alignSelf: 'center',
              fontWeight: 'bold'
            }}>
              No Live Site Available
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
