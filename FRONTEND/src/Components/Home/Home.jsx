import React, { useState, useEffect } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Service from '../Service/Service';
import ServiceCard from '../ServiceCard/ServiceCard';
import Clients from '../Clients/Clients';
import Timeline from '../Timeline/Timeline';
import Values from '../Values/Values';
import GetInTouch from '../GetInTouch/GetInTouchForm';
import intro_video from '../../assets/intro_video.mp4';
import ReviewSlider from '../ReviewSlider/ReviewSlider';


import home1 from '../../assets/home1.jpeg';
import home2 from '../../assets/home2.jpg';
import home3 from '../../assets/home3.jpg';
import home4 from '../../assets/home4.jpg';


const images = [home1, home2, home3, home4];

const Home = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="home-container">
            <div className="home-left">
                <h1>Building Careers. Building Organisations.</h1>
                <p>
                    Talent Corner is India’s leading recruitment and HR services firm, shaping the future of businesses by connecting them with the right talent.
                    With a strong presence across the country, we specialize in executive search, staffing solutions, and HR advisory services for businesses of all sizes.<br/> <br/>

                   <b> Whether you're an employer seeking top-tier candidates or a professional exploring new opportunities, Talent Corner is your trusted partner for growth, success, and long-term collaboration.</b>
                </p>
                <Link to="/getintouch" className="get-in-touch-btn">
  Get In Touch
</Link>
            </div>
            <div className="home-right">
                <img src={images[current]} alt="slider" className="slider-image" />
            </div>
            <br/>
            <div className='service'>
                <Service/>
            </div>
            <div style={{ width: '100vw', overflowX: 'hidden' }}>
            <ServiceCard/>
            </div>
            <div className="timeline">
                <Timeline/>
            </div>
         
            <div className="values">
                <Values/>
            </div>
            <div className="clients">
                <Clients/>
            </div>
     <div className="main-container">
  <div className="intro-video">
    <video
      src={intro_video}
      autoPlay
      muted
      loop
      playsInline
      style={{ width: "100%", borderRadius: "10px" }}
    />
  </div>

  <div className="form">
    <GetInTouch />
    </div>
           <div className="review-box">
    <ReviewSlider />
  </div>
   </div>
        </div>
    );
};

export default Home;
