import { useState, useEffect } from "react";
import "./index.css";

export default function Banner() {
  const slides = [
    "/imagens/banner.png",
    
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="banner">
      <img src={slides[currentSlide]} alt={`Banner ${currentSlide}`} />
      

      <div className="banner-buttons">
        <button className="swiper-button prev" onClick={prevSlide}>‹</button>
        <button className="swiper-button next" onClick={nextSlide}>›</button>
      </div>
    </div>
  );
}