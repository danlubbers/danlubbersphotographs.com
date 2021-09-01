import React from 'react';
import * as styles from './Navbar.module.scss';

import NavGalleryLinks from '../NavGalleryLinks/NavGalleryLinks';

interface NavbarProps {
  handleClickNavDisplays: (arg0: string) => void;
  isPortfolio: boolean;
  isBio: boolean;
  isConnect: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
  handleClickNavDisplays,
  isPortfolio,
  isBio,
  isConnect,
}) => (
  <nav>
    <ul className={styles.navWrapper}>
      <li onMouseLeave={() => handleClickNavDisplays(`leavePortfolio`)}>
        <p
          className={styles.navTitle}
          onMouseEnter={() => handleClickNavDisplays(`enterPortfolio`)}
        >
          PORTFOLIO
        </p>
        <div
          className={
            isPortfolio
              ? styles.portfolioDropdownActive
              : styles.portfolioDropdownInactive
          }
        >
          <NavGalleryLinks />
        </div>
      </li>
      <li
        className={isBio ? styles.bioActive : styles.navTitle}
        onClick={() => handleClickNavDisplays(`bio`)}
        aria-hidden="true"
      >
        <p className={styles.navTitle}>BIO</p>
      </li>

      <li
        className={isConnect ? styles.connectActive : styles.navTitle}
        onClick={() => handleClickNavDisplays(`connect`)}
        aria-hidden="true"
      >
        <p className={styles.navTitle}>CONNECT</p>
      </li>
    </ul>
  </nav>
);

export default Navbar;
