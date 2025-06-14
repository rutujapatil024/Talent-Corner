// src/components/Values.jsx
import React from 'react';
import './Values.css';

import { FaCheckSquare, FaComments, FaHeart } from 'react-icons/fa';

const Values = () => {
  return (
    <section className="values-section">
      <h2 className="values-heading">Why Choose Us?</h2>
      <h3 className="core-title">Our Core Values</h3>
      <p className="core-subtitle">
        With these values, we embrace our mission to bring each client the best service.
      </p>

      <div className="values-grid">
        <div className="value-card">
          <div className="icon-circle">
            <FaCheckSquare className="value-icon" />
          </div>
          <h4>Integrity</h4>
          <p className="keywords">Ethical | Fair | Fearless | Truthful</p>
          <p>
            Integrity is when our words and actions remain the same.
            We believe, follow and stand for ethical practices in Business.
          </p>
        </div>

        <div className="value-card">
          <div className="icon-circle">
            <FaComments className="value-icon" />
          </div>
          <h4>Transparency</h4>
          <p className="keywords">Honest | Open Communication</p>
          <p>
            We work with honesty, provide correct information
            and keep an open communication.
          </p>
        </div>

        <div className="value-card">
          <div className="icon-circle">
            <FaHeart className="value-icon" />
          </div>
          <h4>Relationship</h4>
          <p className="keywords">Cohesive | Collaborative | Seamless</p>
          <p>
            When Transparency and Integrity are applied in any relationship,
            it becomes seamless and harmonious.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Values;
