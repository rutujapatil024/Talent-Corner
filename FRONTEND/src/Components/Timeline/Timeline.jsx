import React, { useEffect, useRef } from 'react';
import './Timeline.css';
import growthVideo from '../../assets/growth-timeline.mp4';

const milestones = [
  { year: '2002', event: 'Talent Corner HR Services founded with a vision to simplify hiring' },
  { year: '2008', event: 'Expanded presence to 5 cities in India' },
  { year: '2014', event: 'Crossed 1000+ successful placements' },
  { year: '2018', event: 'Established presence in 10+ major metros' },
  { year: '2022', event: 'Launched tech-driven hiring platform' },
  { year: '2024', event: 'Served 3000+ clients across industries' },
];

const Timeline = () => {
  const scrollRef = useRef();
  const scrollInterval = useRef(null);
  const isHovered = useRef(false);

  useEffect(() => {
    const container = scrollRef.current;
    let scrollPos = 0;

    const autoScroll = () => {
      if (!container || isHovered.current) return;

      scrollPos = container.scrollLeft + 2; // Increased speed: change 2 → 3 for even faster
      if (scrollPos >= container.scrollWidth - container.clientWidth) {
        scrollPos = 0;
      }

      container.scrollTo({ left: scrollPos, behavior: 'smooth' });
    };

    scrollInterval.current = setInterval(autoScroll, 30); // Lower interval = smoother/faster

    return () => clearInterval(scrollInterval.current);
  }, []);

  return (
    <section className="timeline-section">
      <h2 className="timeline-title">Growth Timeline</h2>

      <div
        className="timeline-horizontal"
        ref={scrollRef}
        onMouseEnter={() => (isHovered.current = true)}
        onMouseLeave={() => (isHovered.current = false)}
      >
        {milestones.map((milestone, index) => (
          <div className="timeline-block" key={index}>
            <div className="timeline-dot" />
            <div className="timeline-info">
              <h3>{milestone.year}</h3>
              <p>{milestone.event}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="timeline-video">
        <video controls autoPlay muted loop>
          <source src={growthVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default Timeline;
