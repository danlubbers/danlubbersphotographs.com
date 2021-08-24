import React from 'react';
import * as styles from './ConnectMobile.module.scss';
import SocialMedia from '../../components/SocialMedia/SocialMedia';

const ConnectMobile = () => {
  return (
    <article className={styles.connectContainer}>
      <h3 className={styles.contactTitle}>CONTACT</h3>
      <div className={styles.connectWrapper}>
        <p className={styles.email}>
          Email:{` `}
          <a
            className={styles.emailLink}
            href="mailto:lubbers.dan@gmail.com?subject=Mailed from danlubbersphotographs.com"
          >
            lubbers.dan@gmail.com
          </a>
        </p>
        <SocialMedia />
      </div>
    </article>
  );
};

export default ConnectMobile;
