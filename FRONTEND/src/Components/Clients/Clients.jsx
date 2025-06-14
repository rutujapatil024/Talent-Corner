// src/components/Clients.jsx
import React, { useEffect, useRef, useState } from 'react';
import './Clients.css';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

import tvsLogo from '../../assets/clients/tvs.png';
import niitLogo from '../../assets/clients/niit.png';
import mahindraLogo from '../../assets/clients/mahindra.jpeg';
import roltaLogo from '../../assets/clients/rolta.png';
import legrandLogo from '../../assets/clients/legrand.png';
import euronetLogo from '../../assets/clients/euronet.png';
import baskin from '../../assets/clients/baskin.png';
import firstgroup from '../../assets/clients/firstgroup.png';
import murugappa from '../../assets/clients/murugappa.png';
import nelito from '../../assets/clients/nelito.png';
import radio from '../../assets/clients/radio.jpeg';
import arihant from '../../assets/clients/arihant.jpg';

const clients = [
  { name: 'TVS', logo: tvsLogo },
  { name: 'NIIT', logo: niitLogo },
  { name: 'Mahindra Logistics', logo: mahindraLogo },
  { name: 'Rolta', logo: roltaLogo },
  { name: 'Legrand', logo: legrandLogo },
  { name: 'Euronet', logo: euronetLogo },
  { name: 'Baskin Robbins', logo: baskin },
  { name: 'First Group', logo: firstgroup },
  { name: 'Murugappa Group', logo: murugappa },
  { name: 'Nelito', logo: nelito },
  { name: 'Radio City', logo: radio },
  { name: 'Arihant', logo: arihant },

];

const Clients = () => {
  const containerRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => {
              const newVisible = [...prev];
              const idx = Number(entry.target.getAttribute('data-index'));
              if (!newVisible.includes(idx)) newVisible.push(idx);
              return newVisible;
            });
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    const elements = containerRef.current.querySelectorAll('.client-card');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="clients-section">
      <h2 className="clients-title">Some of Our Happy Clients</h2>
      <div className="clients-grid" ref={containerRef}>
        {clients.map((client, index) => (
          <div
            key={index}
            data-index={index}
            className={`client-card ${visibleItems.includes(index) ? 'visible' : ''}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <img src={client.logo} alt={client.name} className="client-logo" />
          </div>
        ))}
      </div> 
      <br/>
      <div className="contact-bar">
      <div className="contact-item">
        <FiPhone className="contact-icon" />
        <span>+91 22 4297 5100</span>
      </div>
      <div className="contact-item">
        <FiMail className="contact-icon" />
        <span>contact@talentcorner.in</span>
      </div>
      <div className="contact-item">
        <FiMapPin className="contact-icon" />
        <span>708 & 709, Bhaveshwar Arcade Annex, Ghatkopar(W), MH-400086</span>
      </div>
    </div>
    </section>
    
  );
};

export default Clients;
