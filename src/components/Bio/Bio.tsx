import React from 'react';
import * as styles from './Bio.module.scss';

const Bio = () => (
  <article className={styles.bioContainer}>
    <div className={styles.imageContainer}>
      <p>image</p>
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

export default Bio;
