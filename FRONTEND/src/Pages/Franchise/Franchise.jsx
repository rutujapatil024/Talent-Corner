// Franchise.jsx
import React from 'react';
import './franchise.css';
import Brochure from '../../assets/Franchise-brochure.pdf'; // Adjust path as needed
import franchise from '../../assets/franchise.jpg'; // Adjust path as needed

const Franchise = () => {
  return (
    <div className="franchise-container">
      <div className="franchise-content">
        <h1>Start your Own Recruitment Franchise in India!</h1>
        <p>
          Talent Corner believes that the recruitment industry holds tremendous need & potential.
          We are equally excited about the Power of Entrepreneurship. 2017 onwards India will
          witness 76% of growth in the Recruitment Industry. 83% leaders believe that the talent is
          the number one priority and a driving force behind the company’s success. The recruitment
          industry is not a glamorous function but it comes with a lot of responsibilities. It is not
          directly responsible for the revenue or creating game-changer product, but is responsible
          for recruiting the right talent who will bring profits to the company.
        </p>
        <p>
          A lot of recruitment firms provide a great franchise business opportunity to qualified
          entrepreneurs through HR franchise in India. It will assist them for their recruitment
          process and prove to be an excellent source of income. Firms want to work with these
          aspiring professionals who understand the importance of building the right hiring team
          and resources. This is where HR Franchise comes into picture.
        </p>
        <p>
          HR recruitment franchise in India has become a fast paced and highly competitive business
          which is on an expansion spree. The industry is supposed to expand in leaps and bounds,
          thereby giving excellent business opportunities in India for millions of qualified
          professionals.
        </p>
        

        <h2>Why choose Talent Corner?</h2>
        <p>
          We will help you to set up franchise in India with low investments and develop a
          profitable business module. You can launch and operate franchise in India with the help
          of our globally recognized recruitment techniques being backed with pioneers of
          Recruitment and Franchise Avenue. When you partner with an experienced franchise business
          like Talent Corner, you’ll be globally recognized for your techniques, resources,
          placements and thus, book greater profits in the franchise world.
        </p>

        <h3>Key features of signing up with Talent Corner:</h3>
        <ul>
          <li>More than 17 years of experience in recruitment services and other HR services</li>
          <li>Partnered with globally recognized companies across India and abroad</li>
          <li>Best franchise business in India with low investments at low risk</li>
          <li>Complete guidance and assistance on operational process, cost optimization and start-up training</li>
          <li>An opportunity for a great Return of Investment (ROI)</li>
        </ul>
        
        <a href={Brochure} download className="brochure-btn">
          Download Franchise Brochure
        </a>
      </div>

      
<div className="franchise-image">
        <img src={franchise} alt="Franchise" className="franchise-img" />
        
       
      </div>
      
    </div>
  );
};

export default Franchise;
