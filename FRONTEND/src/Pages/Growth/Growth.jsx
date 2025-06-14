import React from "react";
import "./Growth.css";
import {assets} from "../../assets/assets.js";
import { FaDownload } from "react-icons/fa";

const stats = [
  {
    value: "7.2%",
    label: "Overall Growth",
    desc: "Talent Corner saw a 7.2% increase in mandates received in March 2018 compared to March 2017, exceeding the industry's 3% growth."
  },
  {
    value: "17",
    label: "New Clients",
    desc: "17 new clients were added in the Industrial Products & Constructions sector alone."
  },
  {
    value: "12%",
    label: "NBFC Growth",
    desc: "We achieved a 12% increase in the NBFC segment, despite only a 5% industry increase in banking."
  },
  {
    value: "26%",
    label: "Production Hiring",
    desc: "There was a 26% rise in recruitment for production departments, echoing 'Make in India' progress."
  },
  {
    value: "7–9%",
    label: "City Growth",
    desc: "Increased mandates seen from Pune, Hyderabad, and Bengaluru — each growing between 7–9%."
  }
];

const Growth = () => {
  return (
    <div className="growth-container">
      <h1 className="growth-heading">
        Industry Growth & <span>Talent Corner’s</span> Growth in March 2018
      </h1>

      <div className="stats-section">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card animate-pop">
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
            <p className="stat-desc">{stat.desc}</p>
          </div>
        ))}
      </div>

      <div className="report-details">
        <p>We are excited to share with you the Naukri Job Speak Report for the Month of March 2018.</p>
        <p>The recruitment industry is seeing exciting times. Here's how Talent Corner has outperformed the industry trends.</p>
        <ul>
          <li>Talent Corner saw a 7.2% increase in mandates received, surpassing the industry’s 3% growth.</li>
          <li>17 new clients were acquired in Industrial Products & Constructions.</li>
          <li>12% growth in NBFC hiring compared to banking’s 5% rise.</li>
          <li>Production hiring shot up by 26% — Make in India is gaining traction.</li>
          <li>Mandates increased from Pune, Hyderabad, and Bengaluru by 7–9%.</li>
          <li>Senior-level hiring also saw a significant spike alongside mid-junior levels.</li>
        </ul>
        <p>To know more about our Recruitment Services or Franchise Opportunity, please get in touch with us.</p>
      </div>

      <div className="download-section">
  <a href={assets.jobreport} download className="download-btn">
    <FaDownload className="icon" />
    Download Naukri Job Speak Report (March 2018)
  </a>
</div>

    </div>
  );
};

export default Growth;
