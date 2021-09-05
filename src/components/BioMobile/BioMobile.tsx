import React from 'react';
import * as styles from './BioMobile.module.scss';

import clients from '../../data/clients.json';
import editorials from '../../data/editorials.json';
import press from '../../data/press.json';

interface CategoryProps {
  uuid: string;
  name: string;
  link: string;
}

const BioMobile = ({ bioDescription }) => {
  const { bio, quote } = bioDescription;
  const getJsonCategory = (category) =>
    category.map((details: CategoryProps, idx) => (
      <span className={styles.detailsWrapper} key={details.uuid}>
        <a
          className={styles.detailsLink}
          href={details.link}
          title={details.name}
          target="_blank"
          rel="noreferrer"
        >
          {idx < category.length - 1 ? (
            <p className={styles.detailsTitle}> {details.name} / </p>
          ) : (
            <p className={styles.detailsTitle}> {details.name} </p>
          )}
        </a>
      </span>
    ));

  return (
    <article className={styles.bioMobileContainer}>
      {` `}
      <div className={styles.descriptionContainer}>
        <h3 className={styles.bioTitle}>BIO</h3>
        <p className={styles.descriptionText}>{bio}</p>
        <p className={styles.descriptionQuote}>{quote}</p>
      </div>
      <div className={styles.clientsEditorialPressContainer}>
        <div className={styles.clients}>
          <h4 className={styles.clientsTitle}>CLIENTS</h4>
          {getJsonCategory(clients)}
        </div>

        <div className={styles.editorials}>
          <h4 className={styles.editorialsTitle}>EDITORIALS</h4>
          {getJsonCategory(editorials)}
        </div>

        <div className={styles.press}>
          <h4 className={styles.pressTitle}>PRESS</h4>
          {getJsonCategory(press)}
        </div>
      </div>
    </article>
  );
};

export default BioMobile;
