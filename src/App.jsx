import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Publications from './components/Publications';
import Leadership from './components/Leadership';


const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Certifications />
      <Publications />
      <Leadership />
      
    </div>
  );
};

export default App;
