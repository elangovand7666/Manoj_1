import React, { useState } from 'react';
import './JoinAsJunior.css'; 
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';

const JoinAsJunior = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: '',
  });

  const [confirmation, setConfirmation] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'resume') {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmation("Application submitted successfully!We'll review it and contact you soon");
    console.log("Resume File:", formData.resume.name);
    // setFormData({ name: '', email: '', phone: '', resume: null });
    axios.post("http://localhost:5000/api1/add", {name:formData.name, email: formData.email, phone: formData.phone, resume: formData.resume.name})
    .then((res)=>{
      if(res.data.message === "Success"){
        console.log("Data saved successfully:", res.data);
      }
    })
    .catch((err) => {
      console.log("Error saving data:", err);
    });
  };

  return (
    <>
      <Navbar />
      <div className="join-form-container">
        <h2>Join as Junior Advocate</h2>
        <form onSubmit={handleSubmit} className="join-form">
          <label>
            Full Name:
            <input type="text" name="name" required value={formData.name} onChange={handleChange} />
          </label>
          <label>
            Email:
            <input type="email" name="email" required value={formData.email} onChange={handleChange} />
          </label>
          <label>
            Phone Number:
            <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} />
          </label>
          <label>
            Upload Resume:
            <input type="file" name="resume" accept=".pdf,.doc,.docx" required onChange={handleChange} />
            {formData.resume && <p>Selected File: {formData.resume.name}</p>}
          </label>
          <button type="submit" className="btn orange-btn">Submit Application</button>
        </form>
        {confirmation && (
          <div className="confirmation-message">
            <p>{confirmation}</p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default JoinAsJunior;
