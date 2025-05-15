import { useState } from "react";
import styles from "./ChallengesStyles.module.css";

function Challenges() {
  const [selected, setSelected] = useState("challenges");

  const contentMap = {
    challenges: {
      title: "Challenges I've Faced",
      content:
        "One of the challenges I’ve faced is struggling to manage my studies and myself. I used to spend time on things that didn’t really matter, and sometimes I would neglect my schoolwork and avoid doing it. Now, I’ve become more mature in how I think, and I prioritize things that truly help me grow—like focusing on my education.",
    },
    learnings: {
      title: "Acquired Life Learnings",
      content:
        "One important learning is to cherish what you have, because others might not have the same opportunities. True growth and learning often happen through our interactions and experiences with others.",
    },
    plans: {
      title: "Future Plans in Life",
      content:
        "In the future, I dream of sharing all my knowledge not only with aspiring computer scientists but also with others who have faced the same challenges I went through. I want to inspire them to keep going and show that growth is possible with perseverance.",
    },
  };

  return (
    <section className={styles.container}>
        <div className={styles.left}>
          <button
            className={`${styles.tabButton} ${
              selected === "challenges" ? styles.active : ""
            }`}
            onClick={() => setSelected("challenges")}
          >
            Challenges You’ve Faced
          </button>
          <button
            className={`${styles.tabButton} ${
              selected === "learnings" ? styles.active : ""
            }`}
            onClick={() => setSelected("learnings")}
          >
            Acquired Life Learnings
          </button>
          <button
            className={`${styles.tabButton} ${
              selected === "plans" ? styles.active : ""
            }`}
            onClick={() => setSelected("plans")}
          >
            Future Plans in Life
          </button>
        </div>
        <div className={styles.right}>
          <h3 className={styles.title}>{contentMap[selected].title}</h3>
          <p className={styles.content}>{contentMap[selected].content}</p>
        </div>
    </section>
  );
}

export default Challenges;
