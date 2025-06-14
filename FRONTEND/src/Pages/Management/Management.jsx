import React from "react";
import "./Management.css";
import team from "../../assets/team.jpg";

const Management = () => {
  return (
    <div className="management-container">
      <div className="management-header">
        <h1>Our <span>Management</span></h1>
      </div>
      <div className="img-sec">
        <img src={team} alt="Management Team" className="management-image" />
      </div>
      <div className="leader">
        <h2>Mr. Bankim Doshi – <span>Chairman</span></h2>
        <p>
          Mr. Bankim Doshi laid the foundation of Talent Corner in 2002.
          In 1978 he started his career as an Insurance Agent with Life Insurance Corporation of India (LIC).<br />
          In the past, he launched multiple online portals:
          <ul>
            <li><a href="http://www.anurash.com" target="_blank" rel="noopener noreferrer">www.anurash.com</a> – Offering and comparing various insurance products</li>
            <li><a href="http://www.lagnanbandhan.com" target="_blank" rel="noopener noreferrer">www.lagnanbandhan.com</a> – Online matrimonial website</li>
            <li><a href="http://www.satpusto.com" target="_blank" rel="noopener noreferrer">www.satpusto.com</a> – Family tree website</li>
          </ul>
          In 1989, he was awarded a <strong>GOLD Medal</strong> by the Honorable LIC Chairman for achieving a record-breaking business of ₹5 crores.<br />
          He plays a vital role in building teams and shaping strategies at Talent Corner.<br />
          <em>"He strongly believes that to run a successful business, one must empower the team—and that team will take the company to the next level."</em>
        </p>
      </div>

      <div className="leader">
        <h2>Mr. Rashesh Doshi – <span>Managing Director</span></h2>
        <p>
          He joined Talent Corner in 2004 and expanded both the recruitment and business development teams.<br />
          Rashesh introduced a highly effective Franchise Model, which has helped the company scale while delivering success to its partners.<br />
          He is responsible for the <strong>strategic growth</strong> of the company.<br />
          <em>"He believes in the philosophy of Plan More, Think Longer & Once Decided, Act Fast."</em><br />
          He is also an active member of:
          <ul>
            <li>BNI (Business Networking International)</li>
            <li>Round Table India</li>
            <li>PSR Project – Ascent by Mr. Harsh Mariwala (Marico Industries)</li>
          </ul>
        </p>
        <a
          href="https://www.linkedin.com/in/rasheshdoshi"
          className="know-more-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Know more about Mr. Rashesh Doshi
        </a>
      </div>

      <div className="contact-us">
        <h2>Contact <span>Us</span></h2>
        <p><strong>Call Us Now:</strong> <a href="tel:+912242444002">+91 22 4244 4002</a></p>
        <p><strong>Email Us:</strong> <a href="mailto:contact@talentcorner.in">contact@talentcorner.in</a></p>
        <p><strong>Address:</strong><br />
          308, Swastik Disa,<br />
          Ghatkopar (W), MH-400086
        </p>
        <a href="tel:+912242444002" className="call-now-btn">Call Us Now</a>
      </div>
    </div>
  );
};

export default Management;
