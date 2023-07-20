import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import './App.css';
import Project from './routes/Project';
import About from './routes/About';
import Contact from './routes/Contact';
import Home from './routes/Home';
import Skill from './routes/Skill';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skill" element={<Skill />} />
      </Routes>
    </Router>
  );
}

export default App;
