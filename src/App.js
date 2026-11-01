import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import WhatsApp from './pages/WhatsApp';
import Instagram from './pages/Instagram';
import Facebook from './pages/Facebook';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/whatsapp" element={<WhatsApp />} />
        <Route path="/instagram" element={<Instagram />} />
        <Route path="/facebook" element={<Facebook />} />
      </Routes>
    </Router>
  );
}

export default App;
