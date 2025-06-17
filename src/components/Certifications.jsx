import React from 'react';
import pdfIcon from '../assets/pdf-icon.PNG'; // use your icon here

const certifications = [
  { title: 'AWS', file: 'aws.pdf' },
  { title: 'Data Science 101', file: 'data-science-101.pdf' },
  { title: 'Data Visualization', file: 'data-visualization.pdf' },
  { title: 'Machine Learning', file: 'machine-learning.pdf' },
  { title: 'Python 101', file: 'python-101.pdf' },
];

const Certifications = () => (
  <div id="certifications" style={{ backgroundColor: '#1e1e1e', color: '#fff', minHeight: '50vh', padding: '4rem 1rem 1rem' }}>

    <h1 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem' }}>Certifications</h1>
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '3rem' }}>
      {certifications.map((cert, index) => (
        <div key={index} style={{ textAlign: 'center' }}>
          <a href={`/certifications/${cert.file}`} target="_blank" rel="noopener noreferrer">
            <img src={pdfIcon} alt={cert.title} style={{ width: '80px', marginBottom: '1rem' }} />
          </a>
          <div>{cert.title}</div>
        </div>
      ))}
    </div>
  </div>
);

export default Certifications;
