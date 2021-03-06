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
    <ul
      className={styles.navWrapper}
      onMouseLeave={() => handleClickNavDisplays(`leavePortfolio`)}
    >
      <li
        className={styles.navTitle}
        onMouseEnter={() => handleClickNavDisplays(`enterPortfolio`)}
      >
        PORTFOLIO
      </li>
      <ul
        className={
          isPortfolio
            ? styles.portfolioDropdownActive
            : styles.portfolioDropdownInactive
        }
      >
        <NavGalleryLinks />
      </ul>

      <li
        className={isBio ? styles.bioActive : styles.navTitle}
        onClick={() => handleClickNavDisplays(`bio`)}
        aria-hidden="true"
      >
        BIO
      </li>

      <li
        className={isConnect ? styles.connectActive : styles.navTitle}
        onClick={() => handleClickNavDisplays(`connect`)}
        aria-hidden="true"
      >
        CONNECT
      </li>
    </ul>
  </nav>
);

export default Navbar;
