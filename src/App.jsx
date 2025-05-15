import './App.css';

import Home from './sections/Home/Home';
import About from './sections/About/About';
import Skills from './sections/Skills/Skills';
import Projects from './sections/Projects/Projects';
import Education from './sections/Education/Education';
import Challenges from './sections/Challenges/Challenges';
import ResumePage from './sections/ResumePage/ResumePage';
import Contact from './sections/Contact/Contact';






function App() {
  

  return (
    <>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="challenge">
        <Challenges />
      </section>
      <section id="resume">
        <ResumePage />
      </section>
      <section id="contact">
        <Contact />
      </section>
      
    </>
  )
}

export default App
