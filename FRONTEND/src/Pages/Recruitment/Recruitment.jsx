import React from "react";
import "./Recruitment.css";
import { assets } from "../../assets/assets";
import GetInTouchForm from "../../Components/GetInTouch/GetInTouchForm"; // Update the path as needed

const Recruitment = () => {
  return (
    <div className="recruitment-container">
      <div className="recruitment-content">
        <div className="recruitment-text">
          <h1>Executive Recruitment</h1>
          <p>
            If the top management is the brain of the company, then junior and mid-level positions are the heart, hands, and legs of the company. This is the level which works and achieves the targets or directions set by the management. Also, at these levels, one can see volatility which has a direct impact on the business. Hence at Talent Corner, we believe that Executive Recruitment is highly critical for the company as well as for us.
          </p>
          <p>
            The digitisation is not only limited to personal or social life, it is also playing a great role in the recruitment industry. Social Media has brought tremendous change in the recruitment pattern and process. Nowadays, candidates don’t upload their CVs on job portals and yet they are approached by recruiters through social media.
          </p>
          <h3>In this scenario, Talent Corner creates value by:</h3>
          <ul>
            <li>Not depending solely on job portals. (We have our own database)</li>
            <li>Ability to quickly reach professional & social online networks. (Invested in technology)</li>
            <li>Thorough screening of each candidate through our Quality Call Pitch™ before presenting to the client.</li>
            <li>Each recruiter is trained in headhunting.</li>
          </ul>
        </div>
        <div className="recruitment-image">
          <img src={assets.recruit} alt="Executive Recruitment" />
        </div>
     
      </div>
      <GetInTouchForm />
    </div>
  );
};

export default Recruitment;
