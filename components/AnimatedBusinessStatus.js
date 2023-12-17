// AnimatedBusinessStatus.js

import React, { useEffect } from 'react';
import styles from '@components/AnimatedBusinessStatus.module.css'; // Create a CSS module file for styling

const AnimatedBusinessStatus = () => {
  useEffect(() => {
    const setProperty = (duration) => {
      document.documentElement.style.setProperty(
        '--animation-time',
        duration + 's'
      );
    };

    const changeAnimationTime = () => {
      const animationDuration = Math.random();
      setProperty(animationDuration);
    };

    const intervalId = setInterval(changeAnimationTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className= { styles.animatedTextContainer }>
      <p>
        <span>O</span>
        <span>P</span>
        <span>E</span>
        <span>N</span>
      </p>
    </div>
  );
};

export default AnimatedBusinessStatus;
