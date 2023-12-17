// components/HeroCarousel.js
import React, { useState, useEffect, useRef } from 'react';
import styles from './HeroCarousel.module.css'; // Create this file for styling
const HeroCarouselThumbnail = ({ index, thumbnail, onClick, isActive }) => {
  return (
    <div
      key={index}
      className={`${thumbnail} ${isActive ? styles.active : ''}`}
      onClick={() => onClick}
    >
      {/* <img
        src={thumbnail}
        alt={`Thumbnail ${index + 1}`}
        loading="lazy"
        className={styles.thumbnailImage}
        height={50}
        width={50}
      /> */}
    </div>
  );
};

const HeroCarousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef();

  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
  };

  const stopAutoPlay = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoPlay();

    return () => {
      stopAutoPlay();
    };
  }, [slides]);

  return (
    <div
      className={styles.carousel}
      onMouseEnter={() => {
        setIsHovered(true);
        stopAutoPlay();
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        startAutoPlay();
      }}
    >
      <div className={styles.slides}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.slide} ${index === currentSlide ? styles.active : ''
              }`}
          >
            <img
              src={slide.mainImage}
              alt={`Slide ${index + 1}`}
              loading="lazy"
              className={styles.image}
              width={1920}
              height={1080}
            />
            {/* <div className={styles.slideContent}>
              {slide.title && <h3>{slide.title}</h3>}
              {slide.description && <p>{slide.description}</p>}
              {slide.cta && <button>{slide.cta}</button>}
            </div> */}
          </div>
        ))}
      </div>
      {/* <div className={styles.thumbnails}>
        {slides.map((slide, index) => (
          <HeroCarouselThumbnail
            key={index}
            index={index}
            thumbnail={slide.thumbnail}
            onClick={() => setCurrentSlide(index)}
            isActive={index === currentSlide}
          />
        ))}
      </div> */}
    </div>
  );
};

export default HeroCarousel;
