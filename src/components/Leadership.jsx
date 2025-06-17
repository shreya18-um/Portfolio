// src/components/Leadership.jsx
import React from 'react';

const Leadership = () => (
  <div id="leadership" style={{ backgroundColor: '#1e1e1e', color: '#fff', padding: '4rem 1rem' }}>
    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Leadership & Campus Involvement</h2>

      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
          Election Supervisory Board Member — Student Government, UTA
        </h3>
        <p style={{ color: '#ccc' }}>Aug 2024 – Present</p>
        <ul style={{ color: '#aaa', marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
          <li>Appointed to the Judicial Branch's Election Supervisory Board, overseeing the integrity and fairness of campus-wide student elections.</li>
          <li>Coordinated election events, promoted campus elections, and hosted candidate workshops to ensure informed student participation.</li>
          <li>Collaborated with the Supreme Court to adjudicate election disputes and enforce the election code, maintaining transparency in the electoral process.</li>
        </ul>
      </div>

      <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Achievements & Leadership</h2>
      <ul style={{ color: '#aaa', paddingLeft: '1.5rem' }}>
        <li>Elected class representative throughout undergrad — acted as liaison between faculty and students.</li>
        <li>Served as a cultural event lead in high school, coordinating logistics and managing peer teams.</li>
      </ul>
    </div>
  </div>
);

export default Leadership;
