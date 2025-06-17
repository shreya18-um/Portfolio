import React, { useState } from 'react';
import langIcon from '../assets/lang.PNG';
import cloudIcon from '../assets/cloud.PNG';
import frameworksIcon from '../assets/frameworks.PNG';
import conceptsIcon from '../assets/concepts.PNG';
import problemIcon from '../assets/problem-solving.png';
import softSkillsIcon from '../assets/soft-skills.PNG';

const SkillItem = ({ title, icon, skills }) => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
      <img
        src={icon}
        alt={title}
        style={{ width: '80px', height: '80px', cursor: 'pointer' }}
        onClick={() => setOpen(!open)}
      />
      <h3 style={{ fontSize: '1.1rem', marginTop: '1rem' }}>{title}</h3>
      {open && (
        <ul style={{ color: '#ccc', marginTop: '0.5rem', lineHeight: '1.7', listStyleType: 'circle', paddingLeft: '1rem' }}>
          {skills.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Skills = () => (
  <div id="skills" style={{ backgroundColor: '#1e1e1e', color: '#fff', padding: '4rem 1rem' }}>
    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem', textAlign: 'center' }}>Skills</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
        <SkillItem
          title="Languages & Tools"
          icon={langIcon}
          skills={['Python', 'Java', 'C', 'SQL', 'HTML', 'CSS', 'JavaScript', 'PHP', 'Perl', 'MS Office', 'Excel']}
        />
        <SkillItem
          title="Cloud & Web Technologies"
          icon={cloudIcon}
          skills={['Microsoft Azure', 'WordPress', 'Flask']}
        />
        <SkillItem
          title="Frameworks & Libraries"
          icon={frameworksIcon}
          skills={['TensorFlow', 'OpenCV', 'MediaPipe', 'Power BI']}
        />
        <SkillItem
          title="Concepts"
          icon={conceptsIcon}
          skills={['Machine Learning', 'Deep Learning', 'Generative AI', 'Risk Management', 'Performance Metrics Reporting']}
        />
        <SkillItem
          title="Problem-Solving & System Design"
          icon={problemIcon}
          skills={['DSA', 'Operating Systems', 'Multi-Threading', 'OOP', 'Computer Architecture']}
        />
        <SkillItem
          title="Soft Skills"
          icon={softSkillsIcon}
          skills={['Leadership', 'Critical Thinking', 'Communication', 'Detail-Oriented']}
        />
      </div>
    </div>
  </div>
);

export default Skills;
