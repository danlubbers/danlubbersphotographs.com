import { Link } from 'gatsby';
import React from 'react';
import * as styles from './Navbar.module.scss';

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
      <div onMouseLeave={() => handleClickNavDisplays(`leavePortfolio`)}>
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
          <Link className={styles.link} to="/portraits">
            <li className={styles.galleryTitle}>Portraits</li>
          </Link>
          <Link className={styles.link} to="/scenic">
            <li className={styles.galleryTitle}>Scenic</li>
          </Link>
          <Link className={styles.link} to="/action">
            <li className={styles.galleryTitle}>Action</li>
          </Link>
          <Link className={styles.link} to="/lifestyle">
            <li className={styles.galleryTitle}>Lifestyle</li>
          </Link>
          <Link className={styles.link} to="/still-life">
            <li className={styles.galleryTitle}>Still life</li>
          </Link>
          <Link className={styles.link} to="/musicians">
            <li className={styles.galleryTitle}>Musicians</li>
          </Link>
          <Link className={styles.link} to="/iphoneography">
            <li className={styles.galleryTitle}>Iphoneography</li>
          </Link>
          <Link className={styles.link} to="/published">
            <li className={styles.galleryTitle}>Published</li>
          </Link>
          <Link className={styles.link} to="/retouched">
            <li className={styles.galleryTitle}>Retouching Before & After</li>
          </Link>
        </ul>
      </div>
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
