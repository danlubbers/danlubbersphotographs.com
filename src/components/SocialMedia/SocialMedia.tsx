import React from 'react';
import {
  FaCode,
  FaLinkedin,
  FaInstagram,
  Fa500Px,
  FaTwitter,
  FaBehance,
  FaMedium,
} from 'react-icons/fa';

import * as styles from './SocialMedia.module.scss';

const SocialMedia = () => (
  <ul className={styles.socialMediaWrapper}>
    {` `}
    <li className={styles.socialMedia}>
      <a
        className={styles.socialMediaLink}
        href="https://webdev.danlubbers.com"
        target="_blank"
        rel="noreferrer"
      >
        <FaCode size="25" /> <p>Web Development Portfolio</p>
      </a>
    </li>
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
    <li className={styles.socialMedia}>
      <a
        className={styles.socialMediaLink}
        href="https://medium.com/@lubbers.dan"
        target="_blank"
        rel="noreferrer"
      >
        <FaMedium size="25" /> <p>Medium</p>
      </a>
    </li>
  </ul>
);

export default SocialMedia;
