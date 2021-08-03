import React from 'react';
import * as styles from './Footer.module.scss';

const Footer = () => (
  <footer>
    <p className={styles.footerText}>
      ALL IMAGES COPYRIGHT ©{` `}
      <a
        className={styles.footerLink}
        href="http://www.danlubbers.com"
        target="_blank"
        rel="noreferrer"
      >
        DAN LUBBERS
      </a>
      {` `}| SITE BUILT BY{` `}
      <a
        className={styles.footerLink}
        href="http://www.danlubbers.com"
        target="_blank"
        rel="noreferrer"
      >
        DAN LUBBERS
      </a>
    </p>
  </footer>
);

export default Footer;
