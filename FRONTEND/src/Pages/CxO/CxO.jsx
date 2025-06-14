import React from "react";
import "./CxO.css";
import { assets } from "../../assets/assets";
import GetInTouchForm from "../../Components/GetInTouch/GetInTouchForm"; // Adjust the path as needed

const CxO = () => {
  return (
    <div className="cxo-container">
      <div className="cxo-content">
        <div className="cxo-text">
          <h1>CxO Search</h1>
          <p>
            At Talent Corner, we believe that CxO Search is a search for future leaders. We offer a specialised recruitment solution to hire talent at senior levels—General Manager and above. These leaders play a critical role in driving the vision, strategy, and growth of organizations across industries.
          </p>
          <p>
            With several years of industry experience, our expert search consultants have the capability to conduct thorough industry mapping and discreetly approach top-performing talent. We understand that executive hiring is not just about filling a position—it's about identifying individuals who align with the company’s mission, culture, and long-term goals.
          </p>
          <p>
            Our CxO recruitment service follows a structured and consultative approach that includes market intelligence, benchmarking, talent outreach, and evaluation. We ensure confidentiality and accuracy in the entire process—from sourcing to onboarding.
          </p>
          <p>
            We have successfully placed professionals across roles such as Chief Executive Officer (CEO), Chief Financial Officer (CFO), Chief Marketing Officer (CMO), Chief Technology Officer (CTO), and other strategic roles within leading organizations.
          </p>
          <p>
            With access to an extensive professional network and proprietary tools, Talent Corner is well-equipped to help companies identify, attract, and retain high-impact leaders who can make a tangible difference.
          </p>
        </div>
        <div className="cxo-image">
          <img src={assets.cxo2} alt="CxO Search" />
        </div>
      </div>
      <GetInTouchForm />
    </div>
  );
};

export default CxO;
