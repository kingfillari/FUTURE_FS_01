import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'];

  return (
    <nav style={styles.nav}>
      <div className="container" style={styles.container}>
        <div style={styles.logo}>
          <a href="#home" style={styles.logoLink}>Fillimon<span style={{color: '#f39c12'}}>.</span></a>
        </div>
        <div style={styles.hamburger} onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul style={{...styles.navLinks, ...(isOpen ? styles.navLinksOpen : {})}}>
          {navItems.map(item => (
            <li key={item} onClick={closeMenu}>
              <a href={`#${item.toLowerCase()}`} style={styles.link}>{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: '#111827',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    padding: '1rem 0',
    boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  logoLink: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#fff',
    textDecoration: 'none',
  },
  hamburger: {
    display: 'none',
    fontSize: '1.8rem',
    cursor: 'pointer',
    color: '#fff',
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    gap: '2rem',
  },
  navLinksOpen: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    textAlign: 'center',
    padding: '1rem 0',
    gap: '1rem',
  },
  link: {
    color: '#e0e0e0',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'color 0.3s',
  },
};

// Add media query via CSS-in-JS or style tag
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @media (max-width: 768px) {
    .nav-links {
      display: none;
    }
    .nav-links-open {
      display: flex;
    }
    .hamburger {
      display: block !important;
    }
  }
`;
document.head.appendChild(styleSheet);

export default Navbar;