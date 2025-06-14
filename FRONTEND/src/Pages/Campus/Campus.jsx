import React from "react";
import "./Campus.css";
import { assets } from "../../assets/assets";
import GetInTouchForm from "../../Components/GetInTouch/GetInTouchForm"; // Adjust the path as needed

const Campus = () => {
  return (
    <div className="campus-container">
      <div className="campus-content">
        <div className="campus-text">
          <h1>Campus Recruitment</h1>
          <p>
            SME segment is playing a key role in the GDP of the country. According to the estimates of the Ministry of SMEs, the sector contributes around 40% of the manufacturing output, accounts for over 8% of the national GDP, and creates more job opportunities both in rural and urban parts of the country. This sector offers a wide range of job profile.
          </p>
          <p>
            In India, SME sector is majorly run by families. This sector thrives to reach to the Corporate levels but they face challenges in the areas like recruitment, HR practices etc. Now a day’s SME sector is really trying hard to overcome their recruitment challenges.
          </p>
          <p>
            Post ‘Make in India’ campaign one can see a significant growth in this particular sector. By judging the tremendous exposure and opportunities in this sector now a day’s highly-qualified and experienced people are willing to start or take up challenging positions in this sector.
          </p>
          <p>
            Still attracting new skill and talent to this sector is one of the challenges for the SME sector. We at Talent Corner offers the Campus Recruitment Solution.
          </p>
          <p>
            Due to the bandwidth and budget constraint, it is not always possible for the SME to personally travel and recruit. Under Campus Recruitment, we visit different colleges and universities and recruit the young talent as per the requirement of our SME clients. This solution is highly beneficial for the SME’s as it helps them to save time and money.
          </p>
          <p>
            Our Campus Recruitment Solution Team does the presentation & conducts the Initial round of screening before presenting the shortlisted candidates to the clients for the final selection.
          </p>
        </div>
        <div className="campus-image">
          <img src={assets.campus_re} alt="Campus Recruitment" />
        </div>
      </div>
      <GetInTouchForm />
    </div>
  );
};

export default Campus;
