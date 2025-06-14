// service.jsx
import React, { useState, useEffect } from 'react';
import './service.css';
import { industries } from './serviceData';

const Service = () => {
  const [currentIndex, setCurrentIndex] = useState(2);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + industries.length) % industries.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % industries.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleIndices = () => {
    const left = (currentIndex - 2 + industries.length) % industries.length;
    const midLeft = (currentIndex - 1 + industries.length) % industries.length;
    const midRight = (currentIndex + 1) % industries.length;
    const right = (currentIndex + 2) % industries.length;
    return [left, midLeft, currentIndex, midRight, right];
  };

  const visibleIndices = getVisibleIndices();

  return (
    <div className="service-section">
      <h2 className="section-title">Industry Specialisations</h2>
      <p className="section-description">
        We recognize that each industry has its own nuances in terms of management style, hiring practices and compensation norms. 
        To provide clients with specialized search solutions, Talent Corner has developed expertise in the following industries
      </p>

      <div className="carousel">
        <button className="nav-button" onClick={handlePrev}>&larr;</button>
        {visibleIndices.map((index, i) => (
          <div
            key={index}
            className={`carousel-item ${index === currentIndex ? 'active' : 'inactive'}`}
          >
            <div className="icon-container">
              <img src={industries[index].icon} alt={industries[index].name} />
            </div>
            <p className="industry-name">{industries[index].name}</p>
          </div>
        ))}
        <button className="nav-button" onClick={handleNext}>&rarr;</button>
      </div>
    </div>
  );
};

export default Service;
