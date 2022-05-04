import React from 'react';
import * as styles from './PrintsDescription.module.scss';

const PrintsDescription = () => (
  <article className={styles.printsDescriptionContainer}>
    <p className={styles.paperDescription}>
      All prints are printed on Hahnemühle photo rag pearl archival acid-free
      320 gsm paper
    </p>
    <p className={styles.paperDescription}>
      All prints come with a certificate of authenticity
    </p>
  </article>
);

export default PrintsDescription;
