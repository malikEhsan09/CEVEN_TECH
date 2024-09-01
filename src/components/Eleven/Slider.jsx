import React, { useState, useEffect } from 'react';
import left from '../../assets/teamsImages/chevron-left.svg';
import right from '../../assets/teamsImages/chevron-right.svg';
import team1 from '../../assets/teamsImages/teams-1.jpg';
import team2 from '../../assets/teamsImages/teams-2.jpg';
import team3 from '../../assets/teamsImages/teams-3.jpg';
import './Slider.css';

const images = [team1, team2, team3];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 3000); // auto-move every 3 seconds
    return () => clearInterval(slideInterval); // clear interval on component unmount
  }, []);

  return (
    <div className="slider-container-custom relative w-full max-w-4xl mx-auto overflow-hidden">
      <div
        className="slider-wrapper-custom flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className="slide-custom min-w-full" key={index}>
            <img src={image} alt={`Slide ${index}`} className="w-full h-auto object-cover" />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md slider-button-custom"
      >
        <img src={left} alt="Previous" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md slider-button-custom"
      >
        <img src={right} alt="Next" />
      </button>
    </div>
  );
};

export default Slider;
