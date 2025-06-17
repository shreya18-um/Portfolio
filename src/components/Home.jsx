import React from 'react';
import profile from '../assets/profile.jpg';

const Home = () => (
  <div id="home" style={{ backgroundColor: '#1e1e1e', color: '#fff', minHeight: '100vh', padding: '4rem 2rem' }}>
    <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
      <img
        src={profile}
        alt="Shreya Umesh Naidu"
        style={{
          width: '180px',
          height: '180px',
          borderRadius: '50%',
          objectFit: 'cover',
          marginBottom: '2rem'
        }}
      />

      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
        Hi, I’m <span style={{ color: '#fff' }}>Shreya Umesh Naidu</span> 👋
      </h1>

      <p style={{
        fontSize: '1.1rem',
        marginTop: '1.5rem',
        lineHeight: '1.9',
        color: '#ccc',
        textAlign: 'justify'
      }}>
        I’m a passionate Computer Science graduate and Master’s student at the University of Texas at Arlington.
        I specialize in Python, Java, and SQL, with hands-on experience in machine learning, computer vision, and cloud technologies like Microsoft Azure.
        I've developed real-time AI systems, from gesture and age/gender recognition to cancer histopathology classification.
        My projects merge deep learning with practical applications in healthcare, bioinformatics, and supply chain optimization.
        I’ve interned at Honeywell (inventory optimization using ML and fuzzy logic) and Varcon’s Technologies (UI/UX design).
        I hold certifications in Machine Learning, Python, Data Science, and AWS Cloud Foundations. I enjoy solving real-world problems through thoughtful design and data-driven development.
      </p>

      <div style={{
        fontSize: '1.5rem',
        marginTop: '2rem',
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem'
      }}>
        <a href="https://github.com/shreya18-um" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }} title="GitHub">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/shreya-umesh-naidu-464829224/" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }} title="LinkedIn">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="mailto:shreyaumeshnaidu@gmail.com" style={{ color: 'white' }} title="Email">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="tel:+11234567890" style={{ color: 'white' }} title="Phone">
          <i className="fas fa-phone-alt"></i>
        </a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }} title="Resume">
          <i className="fas fa-file-pdf"></i>
        </a>
      </div>

      <p style={{ fontSize: '0.95rem', marginTop: '2rem', color: '#aaa' }}>
        Honeywell | University of Texas at Arlington | Volunteered Hackathon | Cultural Lead
      </p>
    </div>
  </div>
);

export default Home;
