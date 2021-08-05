import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as styles from './Bio.module.scss';

interface BioProps {
  bioImage: any;
  isBio: boolean;
}

const Bio: React.FC<BioProps> = ({ isBio, bioImage }) => {
  const image = getImage(bioImage);

  return (
    <article
      className={
        isBio ? styles.bioContainerActive : styles.bioContainerInactive
      }
    >
      <div className={styles.imageContainer}>
        <GatsbyImage className={styles.bioImage} image={image} alt="test" />
      </div>
      <div className={styles.descriptionContainer}>
        <p>description</p>
      </div>
      <div className={styles.clientsContainer}>
        <div className={styles.clientsWrapper}>
          <div className={styles.clients}>
            <p>clients</p>
          </div>
          <div className={styles.editorials}>editorials</div>
          <div className={styles.press}>press</div>
        </div>
      </div>
    </article>
  );
};

export default Bio;
