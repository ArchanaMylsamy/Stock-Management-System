// FormComponent.js
import React, { useState } from 'react';
import './FormComponent.css'; // Import the CSS file for styling

const FormComponent = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    department: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <div className="form-overlay">
      <div className="form-container1">
        <span onClick={onClose} className="close-btn">&times;</span>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="username" className="form-label">Username:</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} className="form-input" />

          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-input" />

          <label htmlFor="department" className="form-label">Department:</label>
          <input type="text" id="department" name="department" value={formData.department} onChange={handleChange} className="form-input" />

          <button type="submit" className="form-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
