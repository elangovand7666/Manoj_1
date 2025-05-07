import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-grid">
        <div className="footer-section">
          <h3>M GOVINDARAJAN M.A, B.L</h3>
          <p>Advocate & Notary (Govt of India)</p>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>📞 +91 94434 70899</p>
          <p>📧 govindkrishna006@gmail.com</p>
        </div>
        <div className="footer-section">
          <h4>Location</h4>
          <p>No.7, Varma Complex,</p>
          <p>(Old Palace Theatre), Cherry Road</p>
          <p>Salem - 636 001</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Govindarajan. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
