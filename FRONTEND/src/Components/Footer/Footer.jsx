import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.TClogo} alt='' />
                    <p>Talent Corner H.R. Services Pvt. Ltd.</p>
                    <br />
                    <div className="footer-social-icons">
                        <img
                            src={assets.whatsapp}
                            alt="WhatsApp"
                            onClick={() => window.open("https://wa.me/919821014796", "_blank")}
                        />
                        <img
                            src={assets.facebook}
                            alt="Facebook"
                            onClick={() => window.open("https://www.facebook.com/talentcornerhr/", "_blank")}
                        />
                        <img
                            src={assets.instagram}
                            alt="Instagram"
                            onClick={() => window.open("https://www.instagram.com/talentcorner_hr/?hl=en", "_blank")}
                        />
                        <img
                            src={assets.linkedin}
                            alt="LinkedIn"
                            onClick={() => window.open("https://www.linkedin.com/company/talent-corner-hr-services-pvt-ltd", "_blank")}
                        />
                    </div>
                </div>

                <div className="footer-help">
                    <h3>EXPLORE</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/servicecard">Our Services</Link></li>
                        <li><Link to="/blogs">News & Blogs</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                    </ul>
                </div>

                <div className="footer-content-center">
                    <h3>GET TO KNOW US</h3>
                    <ul>
                        <li><Link to="/about">About us</Link></li>
                        <li><Link to="/privacy-policy">Privacy policy</Link></li>
                        <li><Link to="/terms&condition">Terms & Conditions</Link></li>
                        <li><Link to="/contactus">Contact us</Link></li>
                    </ul>
                </div>

                <div className="footer-content-right">
                    <h3>GET IN TOUCH</h3>
                    <ul>
                        <li>+91 22 4297 5100</li>
                        <li>contact@talentcorner.in</li>
                    </ul>
                    <ul>
                        <b>Locate us in Mumbai</b><br />
                        708 & 709, Bhaveshwar Arcade Annex, LBS Marg, Opp Shreyas Cinema, Ghatkopar West, Mumbai – 400086                    </ul>
                    <div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30162.80466205997!2d72.91279200000001!3d19.09227!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7cc343c903b%3A0x5bca581cc2b6c076!2sTalent%20Corner%20H.R.%20Services%20Private%20Limited!5e0!3m2!1sen!2sus!4v1746725634607!5m2!1sen!2sus" 
                            width="600"
                            height="150"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright © Talent Corner HR Services Pvt. Ltd., 2025. All Rights Reserved.</p>
        </div>
    )
}

export default Footer
