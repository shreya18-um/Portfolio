import React from 'react';

const Navbar = () => (
  <nav style={{
    backgroundColor: '#1e1e1e',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'center',
    position: 'sticky',
    top: 0,
    zIndex: 1000
  }}>
    <div style={{ display: 'flex', gap: '2rem', fontSize: '1rem', color: '#ccc' }}>
      <a href="#home" style={{ textDecoration: 'none', color: '#ccc' }}>Home</a>
      <a href="#experience" style={{ textDecoration: 'none', color: '#ccc' }}>Experience</a>
      <a href="#education" style={{ textDecoration: 'none', color: '#ccc' }}>Education</a>
      <a href="#skills" style={{ textDecoration: 'none', color: '#ccc' }}>Skills</a>
      <a href="#projects" style={{ textDecoration: 'none', color: '#ccc' }}>Projects</a>
      <a href="#certifications" style={{ textDecoration: 'none', color: '#ccc' }}>Certifications</a>
      <a href="#publications" style={{ textDecoration: 'none', color: '#ccc' }}>Publications</a>
      <a href="#leadership" style={{ textDecoration: 'none', color: '#ccc' }}>Leadership</a>
    </div>
  </nav>
);

export default Navbar;
