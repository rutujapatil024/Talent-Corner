// src/components/Faq.jsx
import React, { useState } from 'react';
import './Faq.css';
import { FaChevronDown } from 'react-icons/fa';

const faqData = [
  {
    question: 'What is the business model of Talent Corner?',
    answer: 'We operate a franchise model where you own and operate your recruitment consultancy under the Talent Corner brand. You earn income by successfully closing recruitment mandates.'
  },
  {
    question: 'Do I need prior recruitment experience?',
    answer: 'No. While experience helps, our training programs are designed to make anyone successful in recruitment with commitment and consistent effort.'
  },
  {
    question: 'What kind of support will I receive?',
    answer: 'You receive training, access to job portals, business development support, marketing support, and a dedicated franchise manager.'
  },
  {
    question: 'How soon can I start making money?',
    answer: 'On average, our successful partners start making money in 60 to 90 days after training and consistent business activity.'
  },
  {
    question: 'How much can I earn?',
    answer: 'This depends on your dedication. Many of our successful partners earn 6–7 figures annually. We’ll provide projections during onboarding.'
  },
  {
    question: 'Is this a full-time or part-time opportunity?',
    answer: 'While it can be started part-time, we recommend full-time involvement to maximize success and income.'
  },
  {
    question: 'Do I need an office to start?',
    answer: 'No. You can begin from home using a laptop and internet connection. As you grow, you may choose to get an office.'
  },
  {
    question: 'What is the initial investment?',
    answer: 'Investment starts from INR 75,000 + GST. Details will be discussed in our initial discovery call.'
  },
  {
    question: 'Are there any monthly royalty fees?',
    answer: 'No monthly royalties. You share revenue only on closures. The model is success-based.'
  },
  {
    question: 'Will you provide job openings or do I need to find them?',
    answer: 'We support you with mandates and train you to acquire your own clients to scale independently.'
  },
  {
    question: 'Can I hire my own team?',
    answer: 'Yes, you can grow your own team under your franchise unit for faster scalability.'
  },
  {
    question: 'How long is the franchise agreement valid?',
    answer: 'The agreement is valid for 3 years and is renewable at a nominal fee thereafter.'
  }
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">Franchise FAQs</h2>
      <div className="faq-container">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFaq(index)}
          >
            <div className="faq-question">
              <span>{item.question}</span>
              <FaChevronDown className="icon" />
            </div>
            <div className="faq-answer-wrapper">
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
