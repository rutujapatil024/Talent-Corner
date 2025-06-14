import React, { useEffect, useState } from "react";

const reviews = [
  {
    name: "Sanjay Kalur",
    date: "April 3, 2025",
    content:
      "I had an amazing experience with Talent Corner. Special thanks to Richa Sharma, she was incredibly professional and supportive throughout the entire recruitment process...",
  },
  {
    name: "Sharad Kamthekar",
    date: "February 28, 2025",
    content:
      "I had a great experience with Talent HR Services. Their work was highly professional, supportive, and proactive in helping me find the right opportunity...",
  },
  {
    name: "Prashant Saraswat",
    date: "January 7, 2025",
    content:
      "I recently joined a new company through Talent corner H.R. Services Pvt. Ltd. and my experience has been nothing short of excellent...",
  },
    {
        name: "Ravi Kumar",
        date: "December 15, 2024",
        content:
        "Talent Corner is a great recruitment agency. They helped me find a job that perfectly matched my skills and aspirations. Highly recommend!",
    },
    {
        name: "Anjali Mehta",
        date: "November 10, 2024",
        content:
        "The team at Talent Corner was very supportive and guided me through the entire hiring process. I am very grateful for their assistance.",
    },
];

const ReviewSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 5000); // 5 seconds per review

    return () => clearInterval(interval);
  }, []);

  const review = reviews[index];

  return (
    <div className="review-slider">
      <div className="review-card">
        <h4>{review.name}</h4>
        <p className="review-date">{review.date}</p>
       <div style={{ color: '#ffc107', fontSize: '24px' }}>
  &#9733;&#9733;&#9733;&#9733;&#9733;
</div>

        <p className="review-text">"{review.content}"</p>
      </div>
    </div>
  );
};

export default ReviewSlider;
