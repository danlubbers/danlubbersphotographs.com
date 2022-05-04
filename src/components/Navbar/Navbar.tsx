import React from 'react';
import { Link } from 'gatsby';
import * as styles from './Navbar.module.scss';

import NavGalleryLinks from '../NavGalleryLinks/NavGalleryLinks';

interface NavbarProps {
  handleClickNavDisplays: (arg0: string) => void;
  isPortfolio: boolean;
  isBio: boolean;
  isConnect: boolean;
  isPrints: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
  handleClickNavDisplays,
  isPortfolio,
  isBio,
  isConnect,
  isPrints,
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
      <Link className={styles.printsLink} to="/prints">
        <li
          className={isPrints ? styles.printsActive : styles.navTitle}
          onClick={() => handleClickNavDisplays(`prints`)}
          aria-hidden="true"
        >
          PRINTS
        </li>
      </Link>
    </ul>
  </nav>
);

export default Navbar;
