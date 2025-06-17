import React from 'react';

import ageGenderIcon from '../assets/project1.PNG';
import gestureIcon from '../assets/project2.PNG';
import ecommerceIcon from '../assets/project3.PNG';
import taskIcon from '../assets/project4.PNG';
import hospitalIcon from '../assets/project5.PNG';
import powerbiIcon from '../assets/project6.PNG';
import auditIcon from '../assets/project7.PNG';
import microbiomeIcon from '../assets/project8.PNG';
import histopathologyIcon from '../assets/project9.PNG';

const projects = [
  {
    title: 'Human Age and Gender Estimation',
    icon: ageGenderIcon,
    tools: 'Python, Deep Learning (CNNs, Haar Cascades)',
    description:
      'Built a real-time system using convolutional neural networks (CNNs)\nand Haar cascade classifiers to estimate human age and gender.\nThis system has potential applications in surveillance, targeted marketing,\nand demographic analytics.'
  },
  {
    title: 'Real-Time Hand Gesture Recognition System',
    icon: gestureIcon,
    tools: 'Python, MediaPipe, OpenCV, TensorFlow, LSTM',
    description:
      'Developed a real-time ASL (A–J) recognition system using webcam input\nand hand landmark detection with MediaPipe.\nTrained an LSTM-based model achieving 93.3% validation accuracy,\nwith a full pipeline from data collection to inference.\nDesigned for robust performance across lighting conditions,\nenabling touchless interaction in HCI and accessibility use cases.'
  },
  {
    title: 'E-commerce Website for MN Organics',
    icon: ecommerceIcon,
    tools: 'WordPress',
    description:
      'Designed and launched an e-commerce website (mnorganics.in)\nfor selling pesticides and fertilizers.\nFeatures include secure online payments, an intuitive product catalogue,\nand customer feedback functionality, ensuring a seamless user experience.'
  },
  {
    title: 'Task Management System',
    icon: taskIcon,
    tools: 'Flask, Java, Selenium',
    description:
      'Developed a collaborative task management system\nfeaturing real-time Kanban boards, role-based access control,\nand task notifications.\nIntegrated commenting, dashboards, and automated testing using Selenium\nto enhance productivity and streamline project workflows.'
  },
  {
    title: 'Hospital Data Analysis Dashboard',
    icon: hospitalIcon,
    tools: 'Python, Pandas, Plotly, Preswald, Google Drive API',
    description:
      'Developed an interactive data visualization dashboard using Preswald, Pandas, and Plotly\nto analyze hospital ratings and emergency services across the USA with dynamic filtering.\nOptimized deployment by integrating Google Drive for dataset retrieval, improving accessibility\nand performance. Applied risk management principles to ensure accurate data representation\nand structured reporting.'
  },
  {
    title: 'IT Performance & Inventory Optimization',
    icon: powerbiIcon,
    tools: 'Power BI, Excel',
    description:
      'Designed an interactive data visualization dashboard to analyze IT performance metrics,\nusing Power BI and Excel.\nAt Honeywell, analyzed microcontroller inventory to identify reusable components,\noptimizing standardization and efficiency.\nAutomated data collection, reporting, and visualization, presenting insights via\nPower BI dashboards and PPTs to enhance resource utilization.'
  },
  {
    title: 'Audit & Project Progress Tracker',
    icon: auditIcon,
    tools: 'Excel (Gantt Chart), Slack, Kanban',
    description:
      'Developed a tracking system using Excel (Gantt Chart) to monitor audit findings,\nremediation actions, and deadlines.\nUtilized Slack and Kanban boards for collaboration, progress tracking, and risk management.\nStandardized documentation processes with templates for enhanced transparency and efficiency.'
  },
  {
    title: 'Gut Microbiome Analysis',
    icon: microbiomeIcon,
    tools: 'Python, Pandas, Seaborn, PCA, Bioinformatics',
    description:
      'Analyzed metagenomic abundance data to explore microbial diversity\nand identify dominant species using unsupervised learning;\napplied 16S rRNA insights to uncover patterns linked to health conditions like ASD.'
  },
  {
    title: 'Breast Cancer Histopathology Classification',
    icon: histopathologyIcon,
    tools: 'Python, TensorFlow, Keras, CNN',
    description:
      'Built and trained a CNN model to classify histopathology images as benign or malignant\nwith ~77% accuracy; implemented early stopping and prediction pipeline\nfor real-world medical image analysis.'
  }
];

const Projects = () => (
  <div id="projects" style={{ backgroundColor: '#1e1e1e', color: '#fff', padding: '4rem 1rem', textAlign: 'center' }}>
    <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Projects</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', maxWidth: '1100px', margin: '0 auto' }}>
      {projects.map((proj, index) => (
        <div key={index} style={{ padding: '1rem', backgroundColor: '#2c2c2c', borderRadius: '12px' }}>
          <img src={proj.icon} alt={proj.title} style={{ width: '60px', height: '60px', marginBottom: '1rem' }} />
          <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#ffd700' }}>{proj.title}</h3>
          <p style={{ fontWeight: 'bold', color: '#ccc', marginBottom: '0.5rem' }}>{proj.tools}</p>
          <p style={{ fontSize: '0.95rem', color: '#aaa', whiteSpace: 'pre-line' }}>{proj.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
