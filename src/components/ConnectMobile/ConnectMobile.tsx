import React from 'react';
import * as styles from './ConnectMobile.module.scss';
import SocialMedia from '../SocialMedia/SocialMedia';

const ConnectMobile = () => (
  <article className={styles.connectContainer}>
    <h3 className={styles.contactTitle}>CONTACT</h3>
    <div className={styles.connectWrapper}>
      <p className={styles.email}>
        Email:{` `}
        <a
          className={styles.emailLink}
          href="mailto:dan@danlubbers.com?subject=Mailed from danlubbersphotographs.com"
        >
          dan@danlubbers.com
        </a>
      </p>
      <SocialMedia />
    </div>
  </article>
);

export default ConnectMobile;
