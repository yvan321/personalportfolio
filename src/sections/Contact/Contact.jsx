import React, { useEffect, useRef, useState } from "react";
import styles from './ContactStyles.module.css';
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 100,
    });
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_6v5bvhm',
      'template_v3uzpm5',
      form.current,
      'EEHkrdGxdH9Z3WUBe'
    )
    .then((result) => {
      console.log(result.text);
      setIsSent(true);
    }, (error) => {
      console.log(error.text);
      alert("Failed to send the message. Please try again.");
    });

    e.target.reset();
  };

  const closeModal = () => {
    setIsSent(false);
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className={styles.sectionTitle}>Contact Me</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className={styles.formGroup}>
          <label htmlFor="name" hidden>Name</label>
          <input type="text" name="name" id="name" placeholder="Name" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" hidden>Email</label>
          <input type="email" name="email" id="email" placeholder="Email" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message" hidden>Message</label>
          <textarea name="message" id="message" placeholder="Message" required></textarea>
        </div>
            <button type="submit" className={styles.button}>Submit</button>
      </form>

      {isSent && (
        <div className={styles.modalOverlay}>
          <div data-aos="zoom-in" className={styles.modalContent}>
            <h2>Message Sent!</h2>
            <p>Thank you for reaching out. I will get back to you soon.</p>
            <button className={styles.button} onClick={closeModal}>OK</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Contact;
