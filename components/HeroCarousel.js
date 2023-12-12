// components/HeroCarousel.js
import { useReducer } from 'react';
import styles from '@components/HeroCarousel.module.css'; // Create a corresponding CSS module file

const initialState = {
  currentSlide: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_CURRENT_SLIDE':
      return {
        ...state,
        currentSlide: action.payload,
      };
    default:
      return state;
  }
};

const HeroCarousel = ({ slides }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleThumbnailClick = (index) => {
    dispatch({ type: 'SET_CURRENT_SLIDE', payload: index });
  };

  return (
    <div className={styles.heroCarousel}>
      <div className={styles.mainArea}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.slideContent} ${index === state.currentSlide ? styles.active : ''
              }`}
          >
            <img
              src={slide.mainImage}
              alt={`Slide ${index + 1}`}
              className={styles.mainImage}
            />
            <div className={`${styles.overlay} container`}>
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
              <a className={styles.btnPrimaryGhost} href="#">{slide.cta}</a>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.thumbnailContainer}>
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.thumbnail}
            alt={`Thumbnail ${index + 1}`}
            className={`${styles.thumbnail} ${index === state.currentSlide ? styles.active : ''
              }`}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
