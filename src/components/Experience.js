import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'Full-Stack Developer Intern',
      company: 'CodeAlpha',
      period: '2024',
      tasks: [
        'Developed a full‑stack Social Media Platform (HTML/CSS/JS, Node.js, Express, MongoDB)',
        'Implemented authentication, posts, likes/comments, follow/unfollow, search',
        'Built RESTful APIs with JWT authentication and full CRUD',
      ],
    },
    {
      title: 'Full-Stack Intern',
      company: 'Saiket Systems',
      period: '2024',
      tasks: [
        'Built User Management System with Next.js, React, Node.js, Express, SQL',
        'Developed RESTful APIs for CRUD user profiles',
        'Contributed to e‑commerce frontend & backend modules, dashboards, authentication flows',
        'Strengthened cloud deployment and API integration',
      ],
    },
    {
      title: 'Freelance Developer',
      company: 'Self-employed',
      period: '2023 - present',
      tasks: [
        'Built responsive websites and applications for clients',
        'Designed UI/UX, handled deployments, delivered production‑ready code',
      ],
    },
  ];

  return (
    <section id="experience" style={styles.exp}>
      <div className="container">
        <h2>Experience</h2>
        {experiences.map((exp, idx) => (
          <div key={idx} style={styles.card}>
            <h3>{exp.title}</h3>
            <p style={styles.company}>{exp.company} | {exp.period}</p>
            <ul style={styles.list}>
              {exp.tasks.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  exp: {
    background: '#111827',
  },
  card: {
    background: '#0a0f1c',
    marginBottom: '1.5rem',
    padding: '1.5rem',
    borderRadius: '8px',
  },
  company: {
    color: '#f39c12',
    marginBottom: '1rem',
  },
  list: {
    paddingLeft: '1.5rem',
  },
};

export default Experience;