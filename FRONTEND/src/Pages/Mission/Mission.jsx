import React from "react";
import "./Mission.css";
import { assets } from "../../assets/assets";

const milestonesData = [
  {
    year: "2002",
    desc: "Talent Corner began as a small startup focused on bridging the gap between employers and the right talent.",
    icon: "milestone1.png"
  },
  {
    year: "2004",
    desc: "Achieved profitability, proving a sustainable business model and setting a foundation for growth.",
    icon: "milestone2.png"
  },
  {
    year: "2007",
    desc: "Rebranded as Talent Corner HR Services Pvt. Ltd., boosting credibility and expanding operations.",
    icon: "milestone3.png"
  },
  {
    year: "2011",
    desc: "Launched our first franchise in Vasai, scaling with a personalized and decentralized approach.",
    icon: "milestone4.png"
  },
  {
    year: "2012",
    desc: "Expanded to five franchises, building a consistent and trusted HR brand.",
    icon: "milestone5.png"
  },
  {
    year: "2016",
    desc: "Reached 32 franchises, improving recruitment speed and strengthening backend systems.",
    icon: "milestone6.png"
  },
  {
    year: "2018",
    desc: "Opened a new HQ and crossed 50+ franchises, enhancing training and partnerships.",
    icon: "milestone7.png"
  },
  {
    year: "2020",
    desc: "Recognized in India’s Top 100 Franchise Opportunities for innovation during challenging times.",
    icon: "milestone8.png"
  },
  {
    year: "2021",
    desc: "Named Franchisor of the Year for outstanding partner support and value delivery.",
    icon: "milestone9.png"
  },
  {
    year: "May 2022",
    desc: "Listed among India's 10 Most Promising HR Consultants for people-first hiring strategies.",
    icon: "milestone10.png"
  },
  {
    year: "Aug 2022",
    desc: "Featured in The Economic Times under 'Enterprising Indian' for entrepreneurial excellence.",
    icon: "milestone11.png"
  },
  {
    year: "Dec 2022",
    desc: "Earned Top 100 Franchise Opportunity again, reinforcing trust and performance.",
    icon: "milestone12.png"
  },
  {
    year: "Jan 2023",
    desc: "Founder Rashesh Doshi named Under 40 Promising Entrepreneurs for visionary leadership.",
    icon: "milestone13.png"
  },
  {
    year: "Mar 2023",
    desc: "Recruitment model recognized by MSME Chamber for balancing cost, time, and quality.",
    icon: "milestone14.png"
  }
];

const Mission = () => {
  return (
    <div className="mission-container">
      <div className="mission-header">
        <h1>
          Our <span>Mission</span>
        </h1>
        <p>
          To offer integrated, best quality services enabling us to become the first choice in Human Resource management and to be a reliable partner through valued, compelling relationships.
        </p>
      </div>

      <div className="vision-header">
        <h1>
          Our <span>Vision</span>
        </h1>
        <p>
          To grow beyond our goals and innovate continuously, becoming a dynamic organization that responds to its customers' needs.
        </p>
      </div>

      <div className="director-signature">
        <p>Mr. Rashesh B Doshi</p>
        <span>Director</span>
      </div>

      <div className="milestone-section">
        <h2 className="milestone-title">Milestones of Our Company</h2>
        <div className="milestone-columns">
          <div className="milestone-column">
            {milestonesData.slice(0, 7).map((m, i) => (
              <div className="milestone-item animate-fade" key={i}>
                <img
                  src={assets[`milestone${i + 1}`]}
                  alt={`milestone-${i + 1}`}
                  className="milestone-icon animated"
                />
                <div className="milestone-text">
                  <h4>{m.year}</h4>
                  <p>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="milestone-column">
            {milestonesData.slice(7).map((m, i) => (
              <div className="milestone-item animate-fade" key={i + 7}>
                <img
                  src={assets[`milestone${i + 8}`]}
                  alt={`milestone-${i + 8}`}
                  className="milestone-icon animated"
                />
                <div className="milestone-text">
                  <h4>{m.year}</h4>
                  <p>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
