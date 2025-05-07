import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">M GOVINDARAJAN M.A, B.L</h1>
      <ul>
        <li><a href="/" className="nav-link">Home</a></li>
        <li><a href="#contact" className="nav-link">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
