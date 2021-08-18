import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as styles from './GalleryMobile.module.scss';

const GalleryMobile = ({ imageData }) => {
  if (!Array.isArray(imageData) || imageData.length <= 0) return null;

  const imageMobileData = imageData.map((data) => {
    const image = getImage(data.src);
    return (
      <div className={styles.imageWrapper} key={data.id}>
        <GatsbyImage className={styles.image} image={image} alt={data.name} />
      </div>
    );
  });

  return (
    <section className={styles.imageMobileContainer}>{imageMobileData}</section>
  );
};

export default GalleryMobile;