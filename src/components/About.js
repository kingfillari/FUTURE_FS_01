import React from 'react';

const About = () => {
  return (
    <section id="about" style={styles.about}>
      <div className="container">
        <h2>About Me</h2>
        <div style={styles.content}>
          <p>
            I'm <strong>Fillimon (KingFillari)</strong>, a <strong>Mobile & Full-Stack Developer</strong> and 
            <strong> 4th-year Software Engineering student</strong> at Mekelle University. I have hands-on experience 
            building scalable, high‑quality web and mobile applications using <strong>TypeScript, Next.js, React, Node.js, and MongoDB</strong>.
          </p>
          <p>
            I've worked across the full software development lifecycle, from UI/UX design to backend systems, 
            deployment, and maintenance. I'm passionate about AI‑driven development, cloud computing, and 
            mobile‑first solutions.
          </p>
          <p>
            Through internships at <strong>CodeAlpha</strong> and <strong>SaiKet Systems</strong>, I've delivered 
            production‑ready, maintainable code on real‑world projects.
          </p>
          <p>
            <strong>Career Goal:</strong> Actively seeking remote junior opportunities in mobile development, 
            full‑stack, frontend, backend, or Next.js development. I want to create impactful software and 
            democratize technology.
          </p>
        </div>
      </div>
    </section>
  );
};

const styles = {
  about: {
    background: '#111827',
  },
  content: {
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
  },
  content: {
    textAlign: 'center',
    lineHeight: 1.8,
  },
};

export default About;