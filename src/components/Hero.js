import React from 'react';

const Hero = () => {
  return (
    <section id="home" style={styles.hero}>
      <div className="container" style={styles.container}>
        <div style={styles.content}>
          <p style={styles.greeting}>Hi, I'm</p>
          <h1 style={styles.name}>Fillimon Gebre <span style={styles.nick}>(KingFillari)</span></h1>
          <h2 style={styles.title}>Full-Stack & Mobile Developer | Flutter & Android Enthusiast</h2>
          <p style={styles.bio}>
            4th-year Software Engineering student at Mekelle University. I build scalable web & mobile apps with TypeScript, Next.js, React, Node.js, and MongoDB.
          </p>
          <div style={styles.buttons}>
            <a href="#contact" className="btn btn-primary">Hire Me</a>
            <a href="#projects" className="btn btn-secondary">View Work</a>
          </div>
          <div style={styles.social}>
            <a href="https://github.com/kingfillari" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/fillimon-gebre/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:gebrefillimon@gmail.com">Email</a>
          </div>
        </div>
        <div style={styles.image}>
          <img src="https://via.placeholder.com/400x400?text=Profile" alt="Fillimon Gebre" style={styles.profileImg} />
        </div>
      </div>
    </section>
  );
};

const styles = {
  hero: {
    minHeight: '90vh',
    display: 'flex',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #0a0f1c 0%, #1a1f2e 100%)',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '2rem',
  },
  content: {
    flex: 1,
  },
  greeting: {
    fontSize: '1.2rem',
    color: '#f39c12',
    marginBottom: '0.5rem',
  },
  name: {
    fontSize: '3rem',
    marginBottom: '0.5rem',
  },
  nick: {
    fontSize: '1.5rem',
    color: '#aaa',
  },
  title: {
    fontSize: '1.5rem',
    color: '#ccc',
    marginBottom: '1rem',
  },
  bio: {
    fontSize: '1rem',
    marginBottom: '2rem',
    maxWidth: '500px',
  },
  buttons: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '2rem',
  },
  social: {
    display: 'flex',
    gap: '1.5rem',
  },
  image: {
    flex: 1,
    textAlign: 'center',
  },
  profileImg: {
    maxWidth: '300px',
    borderRadius: '50%',
    border: '4px solid #f39c12',
  },
};

export default Hero;