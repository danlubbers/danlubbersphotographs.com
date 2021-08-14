import React from 'react';
import * as styles from './ImageMobile.module.scss';

const ImageMobile = ({ imageData }) => {
  console.log(`imageData`, imageData);

  return <section className={styles.imageContainer}>IMageMobile</section>;
};

export default ImageMobile;
