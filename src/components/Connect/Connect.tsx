import React from 'react';
import * as styles from './Connect.module.scss';
import SocialMedia from '../SocialMedia/SocialMedia';

interface ConnectProps {
  isConnect?: boolean;
}

const Connect: React.FC<ConnectProps> = ({ isConnect }) => (
  <article
    className={
      isConnect
        ? styles.connectContainerActive
        : styles.connectContainerInactive
    }
  >
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

export default Connect;
