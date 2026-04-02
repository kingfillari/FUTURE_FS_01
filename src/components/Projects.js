import React from 'react';

const Projects = () => {
  const projects = [
    {
      name: 'SaiLket E-Commerce Platform',
      desc: 'Full‑stack e‑commerce with cart, product management, and secure checkout.',
      tech: 'React, Tailwind, Node.js, Express, MongoDB',
      link: 'https://sailket-ecommerce-kf.netlify.app',
      live: true,
    },
    {
      name: 'CipherValuat App',
      desc: 'Cryptography & numeric computation tool.',
      tech: 'React, JavaScript',
      link: 'https://ciphervaluat-app-filimon.netlify.app',
      live: true,
    },
    {
      name: 'ProQR – QR Code Generator',
      desc: 'Instant QR code generation with clean UI.',
      tech: 'React, HTML/CSS',
      link: 'https://proqr-filimon.netlify.app',
      live: true,
    },
    {
      name: 'Task3 To-Do App',
      desc: 'Smart task tracking with priorities.',
      tech: 'React, LocalStorage',
      link: 'https://task3-todo-app.netlify.app',
      live: true,
    },
    {
      name: 'Personal Portfolio',
      desc: 'This very portfolio – showcases skills, projects, and work.',
      tech: 'React, EmailJS',
      link: 'https://kingfillari-portfolio.netlify.app',
      live: true,
    },
  ];

  return (
    <section id="projects" style={styles.projects}>
      <div className="container">
        <h2>Live Projects</h2>
        <div style={styles.grid}>
          {projects.map((proj, idx) => (
            <div key={idx} style={styles.card}>
              <h3>{proj.name}</h3>
              <p>{proj.desc}</p>
              <p style={styles.tech}><strong>Tech:</strong> {proj.tech}</p>
              <a href={proj.link} target="_blank" rel="noreferrer" style={styles.link}>Live Demo →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  projects: {
    background: '#0a0f1c',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
  },
  card: {
    background: '#111827',
    padding: '1.5rem',
    borderRadius: '8px',
    transition: 'transform 0.2s',
  },
  tech: {
    fontSize: '0.9rem',
    margin: '0.5rem 0',
    color: '#aaa',
  },
  link: {
    display: 'inline-block',
    marginTop: '1rem',
    color: '#f39c12',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default Projects;