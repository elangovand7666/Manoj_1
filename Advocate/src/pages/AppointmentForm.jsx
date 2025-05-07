import React, { useState } from 'react';
import './AppointmentForm.css';
import Navbar from '../components/Navbar';
import axios from 'axios';
import Footer from '../components/Footer';
import {enqueueSnackbar, SnackbarProvider} from 'notistack';

const generateTimeSlots = () => {
  const slots = [];
  const startHour = 9;
  const endHour = 21;

  for (let hour = startHour; hour <= endHour; hour++) {
    for (let min = 0; min < 60; min += 30) {
      const hour12 = hour % 12 || 12;
      const ampm = hour < 12 ? 'AM' : 'PM';
      const minuteStr = min === 0 ? '00' : `${min}`;
      const time = `${hour12.toString().padStart(2, '0')}:${minuteStr} ${ampm}`;
      slots.push(time);
    }
  }

  return slots;
};

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phonenumber: '',
    date: '',
    time: '',
    reason: '',
  });

  const [confirmation, setConfirmation] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      name: formData.name,
      email: formData.email,
      phonenumber: formData.phonenumber,
      date: formData.date,
      time: formData.time,
      reason: formData.reason,
    };

    const venue = 'No.7, Varma Complex, Cherry Road, Salem - 636 001';
    setConfirmation(`Appointment Booked on ${formData.date} at ${formData.time} and will take place at ${venue}`);

    axios.post('http://localhost:5000/api/add', payload)
      .then((response) => {
        console.log('Data saved successfully:', response.data);
        enqueueSnackbar('Appointment booked successfully!', { variant: 'success' });
      })
      .catch((error) => {
        console.error('Error saving data:', error);
        enqueueSnackbar('Error booking appointment. Please try again.', { variant: 'error' });
      });
  };

  return (
    <SnackbarProvider maxSnack={3}>
      <Navbar />
      <div className="form-container">
        <h2>Book an Appointment</h2>
        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input type="text" name="name" required onChange={handleChange} />

          <label>Email Address</label>
          <input type="email" name="email" required onChange={handleChange} />

          <label>Phone Number</label>
          <input type="tel" name="phonenumber" required onChange={handleChange} />

          <label>Preferred Date</label>
          <input type="date" name="date" required onChange={handleChange} />

          <label>Preferred Time</label>
          <select name="time" required onChange={handleChange}>
            <option value="">-- Select Time --</option>
            {generateTimeSlots().map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>

          <label>Reason for Appointment</label>
          <textarea name="reason" rows="4" required onChange={handleChange}></textarea>

          <button type="submit">Submit</button>
        </form>

        {confirmation && (
          <div style={{ marginTop: '4rem', backgroundColor: '#ccc', color: 'green', padding: '2rem', borderRadius: '5px' }}>
            <strong>{confirmation}</strong>
          </div>
        )}
      </div>
      <Footer />
    </SnackbarProvider>
  );
};

export default AppointmentForm;
