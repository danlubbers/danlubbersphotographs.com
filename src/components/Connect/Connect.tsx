import React from 'react';
import * as styles from './Connect.module.scss';
import SocialMedia from '../../components/SocialMedia/SocialMedia';

interface ConnectProps {
  isConnect?: boolean;
}

const Connect: React.FC<ConnectProps> = ({ isConnect }) => {
  console.log(isConnect);

  return (
    <article
      className={
        isConnect
          ? styles.connectContainerActive
          : styles.connectContainerInactive
      }
    >
      <h3 className={styles.contactTitle}>CONTACT</h3>
      <ul className={styles.socialMediaWrapper}>
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
      </ul>
    </article>
  );
};

export default Connect;
