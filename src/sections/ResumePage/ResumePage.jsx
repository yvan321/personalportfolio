import React, { useState } from "react";
import styles from "./ResumePageStyles.module.css";
import myPhoto from "../../assets/toons.png";
import CV from "../../assets/new-cv.pdf";
import CVpic from "../../assets/new-cv-png.jpg";

function ResumePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "new-cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowConfirm(false); // Close confirm dialog after download
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.sectionTitle}>My Resume</h2>

      <div className={styles.contentWrapper}>
        <div className={styles.left}>
          <img src={myPhoto} alt="My Profile" className={styles.photo} />
        </div>

        <div className={styles.divider}></div>

        <div className={styles.right}>
          <div className={styles.buttonGroup}>
            <button className={styles.button} onClick={() => setIsModalOpen(true)}>
              View CV
            </button>
            <button className={styles.button} onClick={() => setShowConfirm(true)}>
              Download CV
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <button className={styles.closeButton} onClick={() => setIsModalOpen(false)}>
              &times;
            </button>
            <h3 className={styles.modalTitle}>CV Preview</h3>
            <img src={CVpic} alt="CV Preview" className={styles.cvImage} />
            <button className={styles.button} onClick={() => setShowConfirm(true)}>
              Download CV
            </button>
          </div>
        </div>
      )}

      {showConfirm && (
        <div className={styles.modalOverlay}>
          <div className={styles.confirmBox}>
            <h3 className={styles.modalTitle}>Are you sure you want to download the CV?</h3>
            <div className={styles.buttonGroup}>
              <button className={styles.button} onClick={handleDownloadCV}>Yes</button>
              <button className={styles.button} onClick={() => setShowConfirm(false)}>No</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ResumePage;
