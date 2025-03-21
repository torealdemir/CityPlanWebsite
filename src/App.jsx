import { useState, useEffect } from 'react'
import 'leaflet/dist/leaflet.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

  
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import Founder from './components/Founder'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  useEffect(() => {
    document.title = "PlanPro 🏢"; // Set the page title dynamically
  }, []);
  return (
    <Router>
    <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/founder" element={<Founder />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
    <Footer />
    </Router>
  )
}

export default App;