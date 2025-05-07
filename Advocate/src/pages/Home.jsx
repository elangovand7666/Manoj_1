import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import heroImage from '../assets/home.jpg';
import c1 from '../assets/c1.png';
import c2 from '../assets/c2.png';
import c3 from '../assets/c3.png';
import c4 from '../assets/c4.png';
import pic1 from '../assets/pic1.png';
import pic2 from '../assets/pic2.png';
import pic3 from '../assets/pic3.png';
import pic4 from '../assets/pic4.png';

const Home = () => {
  return (
    <>
      <section className="hero">
        <img src={heroImage} alt="Hero" className="hero-image" />
        <div className="hero-overlay">
          <p className="tagline">
            Advocate & Notary (Govt of India) | High Court Advocate | Legal Consultant | Property & Criminal Law Expert | 33+ Years of Experience
          </p>
          <div class="hero-buttons">
          <Link to="/appointment" className="btn">Book Appointment</Link>
          <Link to="/join" className="btn blue-btn">Join as Junior Advocate</Link>
</div>
        </div>
      </section>

      <section className="about">
        <h2>About</h2>
        <p>
          I have been a part of Tamil Nadu’s legal community for over 33 years, since my enrolment in 1991.
          I have experience in civil, criminal, matrimonial and arbitration law. I was also trained and appointed by the High Court of 
          Madras as a mediator in Salem, where I handled many complex cases with a focus on fair solutions.
          With strong expertise in legal matters, I aim to provide services that meet each client’s needs, 
          always working with honesty, dedication and care.
        </p>
      </section>

      <section className="practice-areas">
        <h2>Practice Areas</h2>
        <div className="area-grid">
          <div className="area-card">🏠 Property</div>
          <div className="area-card">🔗 Crime</div>
          <div className="area-card">📜 Documentation</div>
          <div className="area-card">👨‍👩‍👧‍👦 Family & Divorce</div>
          <div className="area-card">💰 Corruption</div>
          <div className="area-card">📊 Tax</div>
          <div className="area-card">🛡️ Social Security</div>
          <div className="area-card">📂 Civil Litigation</div>
        </div>
      </section>

      <section className="success-journey">
        <h2>My Success Journey</h2>
        <div className="image-row row1">
          <img src={c1} alt="Case 1" />
          <img src={c2} alt="Case 2" />
          <img src={c3} alt="Case 3" />
          <img src={c4} alt="Case 4" />
        </div>
        <div className="image-row row2">
          <img src={pic1} alt="Pic 1" />
          <img src={pic2} alt="Pic 2" />
          <img src={pic3} alt="Pic 3" />
          <img src={pic4} alt="Pic 4" />
        </div>
      </section>
    </>
  );
};

export default Home;
