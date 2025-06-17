import React from 'react';
import pubIcon from '../assets/publication-icon.PNG'; // path to the icon

const Publications = () => (
  <div id="publications" style={{ backgroundColor: '#1e1e1e', color: '#fff', minHeight: '50vh', padding: '4rem 1rem' }}>
    <h1 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem' }}>Publications</h1>
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '3rem' }}>
      <div style={{ textAlign: 'center' }}>
        <a href="/publications/human-age-gender-estimation.pdf" target="_blank" rel="noopener noreferrer">
          <img src={pubIcon} alt="Publication Icon" style={{ width: '80px', marginBottom: '1rem' }} />
        </a>
        <div>
          <strong>Human Age and Gender Estimation from Images in Real-Time Applications</strong><br />
          Published in: IARJSET
        </div>
      </div>
    </div>
  </div>
);

export default Publications;
