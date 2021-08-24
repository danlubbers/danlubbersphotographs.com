import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as styles from './Bio.module.scss';

import clients from '../../data/clients.json';
import editorials from '../../data/editorials.json';
import press from '../../data/press.json';

interface BioProps {
  isBio: boolean;
  bioImage: any;
  bioDescription: {
    bio: string;
    quote: string;
  };
}

interface CategoryProps {
  uuid: string;
  name: string;
  link: string;
}

const Bio: React.FC<BioProps> = ({ isBio, bioImage, bioDescription }) => {
  const image = getImage(bioImage);
  console.log(`BioImage`, image);

  const { bio, quote } = bioDescription;

  const getJsonCategory = (category) =>
    category.map((details: CategoryProps) => (
      <li key={details.uuid}>
        <a
          href={details.link}
          title={details.name}
          target="_blank"
          rel="noreferrer"
        >
          {details.name}
        </a>
      </li>
    ));

  return (
    <article
      className={
        isBio ? styles.bioContainerActive : styles.bioContainerInactive
      }
    >
      <div className={styles.bioWrapper}>
        <div className={styles.imageContainer}>
          <GatsbyImage className={styles.bioImage} image={image} alt="test" />
        </div>
        <div className={styles.descriptionContainer}>
          <p className={styles.descriptionText}>{bio}</p>
          <p className={styles.descriptionQuote}>{quote}</p>
        </div>
        <div className={styles.clientsEditorialPressContainer}>
          <div className={styles.clientsWrapper}>
            <ul className={styles.clients}>
              <h4 className={styles.clientsTitle}>CLIENTS</h4>
              {getJsonCategory(clients)}
            </ul>

            <ul className={styles.editorials}>
              <h4 className={styles.editorialsTitle}>EDITORIALS</h4>
              {getJsonCategory(editorials)}
            </ul>

            <ul className={styles.press}>
              <h4 className={styles.pressTitle}>PRESS</h4>
              {getJsonCategory(press)}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Bio;
