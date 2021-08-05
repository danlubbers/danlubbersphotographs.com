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
        <p className={styles.descriptionText}>
          Dan Lubbers is a Photographer / Retoucher / Web Developer based in
          Saratoga Springs, NY. A love of the outdoors has led Lubbers to places
          around the world like performing service work in Guatemala and roaming
          the pyramids of Ancient Egypt. Lubbers got his start with Extreme
          Sports Photography when he was the sole photographer on the La
          Sportiva Solutions Climbing Tour in 2007 and began shooting for
          Extreme Sports Editorials and various outdoor companies. He is a
          freelancer for Amazon's Largest Photo Studio. He recently retouched an
          ad campaign for Tempurpedic. He is also a contributor to Aurora
          Photos. Lubbers has really delved into a passion for Environmental &
          Fine Art Portraiture. A love of good coffee usually leads one to find
          him at local coffee shops working diligently on his work either at
          home or when traveling. Lubbers recently received his certification
          badge from DevMountain in Full-Stack Web Development.
        </p>
        <p className={styles.descriptionQuote}>
          "Life is too short not to create something with every breath we draw.”
          ~ Maynard James Keenan
        </p>
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
