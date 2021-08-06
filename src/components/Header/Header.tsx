import React, { useState } from 'react';
import { Link } from 'gatsby';
import * as styles from './Header.module.scss';
import headerLogo from '../../assets/logos/danlubbers_logo.svg';

import Bio from '../Bio/Bio';

const Header = ({ bioImage }) => {
  console.log(bioImage);

  const [isBio, setIsBio] = useState(false);
  const [isPortfolio, setIsPortfolio] = useState(false);

  const handleClickPortfolio = () => {
    setIsPortfolio(true);
  };

  const handleClickLeavePortfolio = () => {
    setIsPortfolio(false);
  };

  const handleClickBio = () => {
    setIsBio(!isBio);
    setIsPortfolio(false);
  };
  return (
    <>
      <header>
        <Link to="/">
          <img src={headerLogo} alt="logo" />
        </Link>

        <nav>
          <ul className={styles.navWrapper}>
            <div onMouseLeave={handleClickLeavePortfolio}>
              <li
                className={styles.navTitle}
                onMouseEnter={handleClickPortfolio}
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
                  <li className={styles.galleryTitle}>
                    Retouching Before & After
                  </li>
                </Link>
              </ul>
            </div>
            <li
              className={isBio ? styles.bioActive : styles.navTitle}
              onClick={handleClickBio}
            >
              BIO
            </li>

            <li className={styles.navTitle}>CONNECT</li>
          </ul>
        </nav>
      </header>
      <Bio isBio={isBio} bioImage={bioImage} />
    </>
  );
};

export default Header;
