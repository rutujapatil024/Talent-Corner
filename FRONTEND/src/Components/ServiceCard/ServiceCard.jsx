import React from 'react';
import './ServiceCard.css';
import { Link } from 'react-router-dom';

import execImg from '../../assets/executive.jpg';
import campusImg from '../../assets/campus.jpg';
import cxoImg from '../../assets/cxo.jpg';

const services = [
  {
    title: 'Executive Recruitment',
    image: execImg,
    description:
      'Executive Recruitment (informally called headhunting) is a specialized recruitment service in which we help our clients seek out and recruit highly qualified candidates.',
    link: '/recruitment',
  },
  {
    title: 'Campus Recruitment',
    image: campusImg,
    description:
      'Campus Recruitment allows us to identify and nurture talent at an early stage. We visit various colleges and recruit the students at our client location across India.',
    link: '/campus',
  },
  {
    title: 'CxO Search',
    image: cxoImg,
    description:
      'CxO Search is an Executive Search and Selection recruitment service. We specialise in attraction, acquisition and placement of senior and leadership executives across all sectors.',
    link: '/cxo',
  },
];

const ServiceCard = () => {
  return (
    <div className="services-wrapper">
      <h1>Our Services</h1>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="image-container">
              <img src={service.image} alt={service.title} className="card-image" />
            </div>
            <div className="card-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <br />
              <Link to={service.link} className="read-more-btn">Read More</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
