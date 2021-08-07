import React from 'react';
import {
  FaLinkedin,
  FaInstagram,
  Fa500Px,
  FaTwitter,
  FaBehance,
} from 'react-icons/fa';
import * as styles from './Connect.module.scss';

interface ConnectProps {
  isConnect: boolean;
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
        <li className={styles.socialMedia}>
          <a
            className={styles.socialMediaLink}
            href="https://www.linkedin.com/in/danlubbers/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size="25" /> <p>LinkedIn</p>
          </a>
        </li>
        <li className={styles.socialMedia}>
          <a
            className={styles.socialMediaLink}
            href="https://www.instagram.com/danlubbers/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram size="25" /> <p>Instagram</p>
          </a>
        </li>
        <li className={styles.socialMedia}>
          <a
            className={styles.socialMediaLink}
            href="https://twitter.com/danlubbers"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter size="25" /> <p>Twitter</p>
          </a>
        </li>
        <li className={styles.socialMedia}>
          <a
            className={styles.socialMediaLink}
            href="https://500px.com/p/danlubbers"
            target="_blank"
            rel="noreferrer"
          >
            <Fa500Px size="25" /> <p>500px</p>
          </a>
        </li>
        <li className={styles.socialMedia}>
          <a
            className={styles.socialMediaLink}
            href="https://www.behance.net/danlubbers"
            target="_blank"
            rel="noreferrer"
          >
            <FaBehance size="25" /> <p>Behance</p>
          </a>
        </li>
      </ul>
    </article>
  );
};

export default Connect;
