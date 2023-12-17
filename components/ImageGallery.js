// ImageGallery.jsx

import React from "react";
import styles from "./ImageGallery.module.css"; // Import the CSS module

const ImageGallery = () => {
  return (
    <div>
      <div className={styles.instaList}>
        {Array.from({ length: 10 }, (_, index) => (
          <div
            key={index}
            className={styles.galleryItem}
            style={{
              backgroundImage: `url('/images/client-${String(index + 1).padStart(2, '0')}.jpg')`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
