// =============================================
// src/Portfolio.jsx
// React component: import CSS from separate file (Portfolio.css).
// =============================================
import React from 'react';
import './Portfolio.css';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Portfolio() {
  const projects = [
     { title: 'Software Licenses Selling', description: 'It is neat website regrading the software licenses selling using Next.js , tailwind, bootstrap', link: 'https://creedex-ebyb.vercel.app/', repo: 'https://github.com/sowmya5-a/creedex' },
    { title: 'Location-Based Attendance System', description: 'Facial auth with 98% accuracy, React + Django + OpenCV', link: 'https://locationbasedattendance.pythonanywhere.com', repo: 'https://github.com/sowmya-cpu/locationbasedatt' },
    { title: 'Django Blog Platform', description: 'CRUD, auth, responsive design for 200+ posts', link: 'https://sowmya1.pythonanywhere.com', repo: 'https://github.com/sowmya-cpu/djangoblogposts' },
    { title: 'TouristsGuide Portal', description: 'Team project with Google Maps API', link: '#', repo: 'https://github.com/sowmya-cpu/touristguide.git' },
    { title: 'Learn AI With Us', description: 'Educational AI modules with quizzes and demos', link: 'https://reactproject-b7td-git-main-sowmyas-projects-3111cc30.vercel.app', repo: 'https://github.com/sowmya-cpu/Reactproject' },
  
  ];

  return (
    <div className="container">
      <header className="navbar">
        <h1 className="logo">Sowmya G.V.R.S.</h1>
        <nav className="nav-links">
          {['About','Skills','Projects','Contact'].map(sec => (
            <a key={sec} href={`#${sec.toLowerCase()}`}>{sec}</a>
          ))}
        </nav>
      </header>

      <section id="about" className="hero">
        <h2>Hello, I'm Sowmya</h2>
        <p>A Full-Stack Developer and AI enthusiast building scalable, impactful applications.</p>
        <div className="social">
          <a href="https://github.com/sowmya-cpu"><Github /></a>
          <a href="https://linkedin.com/in/sowmya-g-a8b740213"><Linkedin /></a>
          <a href="mailto:gvvsowmya16@gmail.com"><Mail /></a>
        </div>
      </section>

      <section id="skills" className="skills">
        <h3>Skills</h3>
        <ul className="skills-grid">
          {['React.js','Next.js','Django','Python','Node.js','Tailwind CSS','OpenCV','RESTful APIs'].map(skill => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

      <section id="projects" className="projects">
        <h3>Projects</h3>
        <div className="projects-grid">
          {projects.map(({title,description,link,repo}) => (
            <div key={title} className="project-card">
              <h4>{title}</h4>
              <p>{description}</p>
              <div className="buttons">
                <button onClick={()=>window.open(link,'_blank')} className="btn primary">Live Demo</button>
                <button onClick={()=>window.open(repo,'_blank')} className="btn outline">Source Code</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact">
        <h3>Get in Touch</h3>
        <p>I'm open to internships and collaborative projects. Let's connect!</p>
        <button onClick={()=>window.location='mailto:gvvsowmya16@gmail.com'} className="btn primary">Say Hello</button>
      </section>
    </div>
  );
}
