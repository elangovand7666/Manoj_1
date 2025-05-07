import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './pages/App.jsx';
import AppointmentForm from './pages/AppointmentForm.jsx'; 
import JoinAsJunior from './pages/JoinAsJunior.jsx';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/appointment" element={<AppointmentForm />} />
      <Route path="/join" element={<JoinAsJunior />} />
    </Routes>
  </Router>
);
