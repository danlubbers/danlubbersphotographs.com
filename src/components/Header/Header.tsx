import React, { useState } from 'react';
import { Link } from 'gatsby';
import * as styles from './Header.module.scss';
import headerLogo from '../../assets/logos/danlubbers_logo_#A52A25_outlined.svg';

import Bio from '../Bio/Bio';
import Connect from '../Connect/Connect';

const Header = ({ bioImage }) => {
  console.log(bioImage);

  const [isPortfolio, setIsPortfolio] = useState(false);
  const [isBio, setIsBio] = useState(false);
  const [isConnect, setIsConnect] = useState(false);

  const handleClickHome = () => {
    setIsBio(false);
    setIsConnect(false);
  };

  const handleClickPortfolio = () => {
    setIsPortfolio(true);
  };

  const handleClickLeavePortfolio = () => {
    setIsPortfolio(false);
  };

  const handleClickBio = () => {
    setIsBio(!isBio);
    setIsPortfolio(false);
    setIsConnect(false);
  };

  const handleClickConnect = () => {
    setIsConnect(!isConnect);
    setIsBio(false);
    setIsPortfolio(false);
  };
  return (
    <div className={styles.headerContainer}>
      <header>
        <Link className={styles.logoLink} to="/" onClick={handleClickHome}>
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

            <li
              className={isConnect ? styles.connectActive : styles.navTitle}
              onClick={handleClickConnect}
            >
              CONNECT
            </li>
          </ul>
        </nav>
      </header>
      <Bio isBio={isBio} bioImage={bioImage} />
      <Connect isConnect={isConnect} />
    </div>
  );
};

export default Header;
