import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div className="container" style={styles.container}>
        <p>&copy; {new Date().getFullYear()} Fillimon Gebre (KingFillari). All rights reserved.</p>
        <p>Built with React & ❤️</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    background: '#0a0f1c',
    textAlign: 'center',
    padding: '1.5rem 0',
    borderTop: '1px solid #1f2937',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
  },
};

export default Footer;