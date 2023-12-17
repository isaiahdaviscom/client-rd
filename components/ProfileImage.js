// ProfileImage.js

import React from 'react';
import styles from '@components/ProfileImage.module.css';

const ProfileImage = () => {
  return (
    <>
      <img
        alt="Portrait photo of Robert Davis, Owner of Custom Fades Barber Shop"
        className={`${styles["full-width"]} logo-black`}
        height={508}
        id="profile"
        src="/images/robert-davis-profile.png"
        width={516}
      />
      <p className={styles["text-center"]}>Owner, Robert Davis</p>
    </>
  );
};

export default ProfileImage;