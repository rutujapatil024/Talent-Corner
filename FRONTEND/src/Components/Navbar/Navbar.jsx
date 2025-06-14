import React from "react";
import "./Navbar.css";
import TClogo from "../../assets/TClogo.png";
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo-link">
      <img src={TClogo}  alt="Talent Corner Logo" className="navbar-logo-image" />
      <div className="navbar-logo">Talent Corner<br/><p style={{ fontSize: "15px" , fontWeight: "300"}}>India's Biggest Placement Consultancy</p>
      </div>
      </Link>
      
      <ul className="navbar-links">
        <li className="dropdown">About Us
          <ul className="dropdown-menu">
           <li><Link to= "/mission"> Our Mission & Milestones</Link></li> 
            <li><Link to = "/management">Management Team</Link></li>
            <li><Link to = "/growth">Our Growth</Link></li>
            <li>Gallery</li>
          </ul>
        </li>
        <li className="dropdown">Services
          <ul className="dropdown-menu">
            <li><Link to = "/recruitment">Executive Recruitment</Link></li>
            <li><Link to ='/campus'>Campus Recruitment</Link></li>
            <li><Link to ='/cxo'>CXO Search</Link></li>
          </ul>
        </li>
        <li className="dropdown">Careers</li>
        <li className="dropdown">Franchise
          <ul className="dropdown-menu">
            <li><Link to ='/franchise'>Start your Own Recruitment Franchise in India!</Link></li>
            <li>Success Stories</li>
            <li><Link to ='/faq'>Talent Corner Franchise FAQs:</Link></li>
          </ul>
        </li>
      </ul>
      <div className="right">
        +91 22 4297 5100 <br/>
        contact@talentcorner.in
        <br/>
        <Link to = "/admin">
        <button className="admin-button">Admin Panel</button> 
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
