import React, { useState } from 'react';
import axios from 'axios';
import './GetInTouchForm.css';

const GetInTouchForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
  });

  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState('');
  const [statusType, setStatusType] = useState(''); // success or error

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'name') {
      const lettersOnly = value.replace(/[^a-zA-Z\s]/g, '');
      setFormData(prev => ({ ...prev, [name]: lettersOnly }));
    } else if (name === 'phone') {
      const numbersOnly = value.replace(/\D/g, '').slice(0, 10);
      setFormData(prev => ({ ...prev, [name]: numbersOnly }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    // Clear error as user types
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits';
    }

    if (!formData.interest) {
      newErrors.interest = 'Please select an option';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await axios.post('http://localhost:5000/api/form', formData);

      setStatusMessage('Form submitted successfully!');
      setStatusType('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        interest: '',
      });
      setErrors({});
    } catch (error) {
      setStatusMessage('Submission failed. Please try again.');
      setStatusType('error');
    }
  };

  return (
    <div className="get-in-touch-form">
      <h2>Get in Touch</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <input
          type="tel"
          name="phone"
          placeholder="Your Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        {errors.phone && <p className="error">{errors.phone}</p>}

        <div className="checkboxes">
          <b>Interested in:</b>
          <label>
            <input
              type="radio"
              name="interest"
              value="job"
              checked={formData.interest === "job"}
              onChange={handleChange}
            />
            Job
          </label>
          <label>
            <input
              type="radio"
              name="interest"
              value="recruitment"
              checked={formData.interest === "recruitment"}
              onChange={handleChange}
            />
            Recruitment
          </label>
          <label>
            <input
              type="radio"
              name="interest"
              value="franchise"
              checked={formData.interest === "franchise"}
              onChange={handleChange}
            />
            Franchise
          </label>
          {errors.interest && <p className="error">{errors.interest}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>

      {statusMessage && (
        <p className={`status-message ${statusType}`}>{statusMessage}</p>
      )}
    </div>
  );
};

export default GetInTouchForm;
