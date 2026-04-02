import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['HTML/CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Flutter'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'PHP', 'NestJS', 'REST APIs', 'Stripe API'],
    },
    {
      title: 'Databases',
      skills: ['MongoDB', 'MySQL', 'PostgreSQL'],
    },
    {
      title: 'Languages',
      skills: ['Java', 'Python', 'C++', 'TypeScript'],
    },
    {
      title: 'Tools & Others',
      skills: ['Git/GitHub', 'Maven', 'JDBC', 'Postman', 'AI/ML', 'Cloud Basics', 'DevOps Basics'],
    },
  ];

  return (
    <section id="skills" style={styles.skills}>
      <div className="container">
        <h2>Technical Skills</h2>
        <div style={styles.grid}>
          {skillCategories.map((cat, idx) => (
            <div key={idx} style={styles.card}>
              <h3>{cat.title}</h3>
              <ul style={styles.list}>
                {cat.skills.map(skill => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  skills: {
    background: '#0a0f1c',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
  },
  card: {
    background: '#111827',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
  },
  list: {
    listStyle: 'none',
    marginTop: '1rem',
  },
  listItem: {
    marginBottom: '0.5rem',
  },
};

export default Skills;