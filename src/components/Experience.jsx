import React from 'react';

const Experience = () => (
  <div id="experience" style={{ backgroundColor: '#1e1e1e', color: '#fff', padding: '4rem 1rem' }}>
    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>Experience</h2>

      {/* Honeywell */}
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Software Engineering Intern – Honeywell Technology Solutions</h3>
        <p style={{ color: '#ccc' }}>May 2023 – Jul 2023</p>
        <ul style={{ color: '#aaa', marginTop: '0.5rem', paddingLeft: '1.2rem' }}>
          <li>Aim: To optimize inventory management by identifying fast-moving and slow-moving products and redistributing them based on demand using ML.</li>
          <li>Focus: Leveraged programming techniques to address IC/MCU interchangeability challenges in supply chains.</li>
          <li>Tools & Techniques: Used SciPy for modeling, fuzzy string-matching for item similarity, multiprocessing for faster computation.</li>
          <li>Output: Built a robust system to detect product movement trends and automate redistribution, improving inventory efficiency and demand fulfillment.</li>
        </ul>
      </div>

      

      {/* Varcon */}
      <div>
        <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>UI/UX Intern – Varcon’s Technologies Pvt Ltd</h3>
        <p style={{ color: '#ccc' }}>Aug 2023 – Sept 2023</p>
        <ul style={{ color: '#aaa', marginTop: '0.5rem', paddingLeft: '1.2rem' }}>
          <li>Aim: To develop user-centric designs focused on intuitive and accessible interfaces.</li>
          <li>Focus: Delivered seamless interaction flow using principles of user psychology and visual design.</li>
          <li>Tools: Used Figma, Adobe XD, and Sketch for prototyping; conducted usability testing for iterative design improvements.</li>
          <li>Output: Created responsive, accessible design systems for mobile/web applications; enhanced UX with structured design methodology.</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Experience;
