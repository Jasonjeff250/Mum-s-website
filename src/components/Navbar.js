import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">EDIYESTHRIFTS</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/whatsapp">WhatsApp</Link></li>
        <li><Link to="/instagram">Instagram</Link></li>
        <li><Link to="/facebook">Facebook</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
