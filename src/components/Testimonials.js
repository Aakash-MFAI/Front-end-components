import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import '../styles/Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Samantha D.',
    rating: 4.5,
    comment: '"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It\'s become my favorite go-to shirt."',
    date: 'Posted on August 14, 2023',
    verified: true,
  },
  {
    id: 2,
    name: 'Alex M.',
    rating: 4,
    comment: '"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I\'m quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."',
    date: 'Posted on August 15, 2023',
    verified: true,
  },
  {
    id: 3,
    name: 'Ethan R.',
    rating: 4.5,
    comment: '"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish design caught my eye, and the fit is perfect. I can see the attention to touch in every aspect of this shirt."',
    date: 'Posted on August 16, 2023',
    verified: true,
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="testimonial-slider">
      <h2 className="testimonial-title">Our Customer Feedbacks</h2>
      <p className="testimonial-subtitle">
        Browse our wide selection of cotton sarees. Whether you love handloom styles or modern designs, there's something here just for you!
      </p>
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`testimonial-card ${index === currentIndex ? 'active' : ''}`}
          >
            <div className="testimonial-rating">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  fill={i < Math.floor(testimonial.rating) ? '#FFD700' : 'none'}
                  stroke={i < Math.ceil(testimonial.rating) ? '#FFD700' : '#D3D3D3'}
                />
              ))}
            </div>
            <div className="testimonial-header">
              <span className="testimonial-name">{testimonial.name}</span>
              {testimonial.verified && (
                <span className="testimonial-verified">✓</span>
              )}
            </div>
            <p className="testimonial-comment">{testimonial.comment}</p>
            <p className="testimonial-date">{testimonial.date}</p>
          </div>
        ))}
      </div>
      <button className="slider-button prev" onClick={prevSlide}>
        <ChevronLeft size={24} />
      </button>
      <button className="slider-button next" onClick={nextSlide}>
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default TestimonialSlider;