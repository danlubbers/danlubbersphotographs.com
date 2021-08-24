import React, { useState } from 'react';
import { Link } from 'gatsby';
import * as styles from './Header.module.scss';
import headerLogo from '../../assets/logos/danlubbers_logo_#A52A25_outlined.svg';

import Navbar from '../Navbar/Navbar';
import Bio from '../Bio/Bio';
import Connect from '../Connect/Connect';
import NavGalleryLinks from '../NavGalleryLinks/NavGalleryLinks';

const Header = ({ bioDescription }) => {
  const [isPortfolio, setIsPortfolio] = useState(false);
  const [isBio, setIsBio] = useState(false);
  const [isConnect, setIsConnect] = useState(false);
  const [isMobileDisplay, setIsMobileDisplay] = useState(false);

  const handleClickNavDisplays = (navTitle: string) => {
    if (navTitle === `logo`) {
      setIsBio(false);
      setIsConnect(false);
    }
    if (navTitle === `enterPortfolio`) setIsPortfolio(true);
    if (navTitle === `leavePortfolio`) setIsPortfolio(false);

    if (navTitle === `bio`) {
      setIsBio(!isBio);
      setIsPortfolio(false);
      setIsConnect(false);
    }
    if (navTitle === `connect`) {
      setIsConnect(!isConnect);
      setIsBio(false);
      setIsPortfolio(false);
    }
  };

  const handleClickMobileDisplay = () => {
    setIsMobileDisplay(!isMobileDisplay);
  };

  return (
    <>
      <div className={styles.headerContainer}>
        <header>
          <Link
            className={styles.logoLink}
            to="/"
            onClick={() => handleClickNavDisplays(`logo`)}
          >
            <img src={headerLogo} alt="logo" />
          </Link>
          <Navbar
            handleClickNavDisplays={handleClickNavDisplays}
            isPortfolio={isPortfolio}
            isBio={isBio}
            isConnect={isConnect}
          />
        </header>
        <Bio isBio={isBio} bioDescription={bioDescription} />
        <Connect isConnect={isConnect} />
      </div>

      <div className={styles.headerMobileContainer}>
        <header>
          <Link
            className={styles.logoLink}
            to="/"
            onClick={() => handleClickNavDisplays(`logo`)}
          >
            <img src={headerLogo} alt="logo" />
          </Link>
        </header>
        <nav
          className={styles.menubarWrapper}
          onClick={handleClickMobileDisplay}
        >
          <div className={styles.menubar} />
          <div className={styles.menubar} />
          <div className={styles.menubar} />
        </nav>
        {isMobileDisplay && (
          <ul className={styles.mobileNav}>
            <NavGalleryLinks />
          </ul>
        )}
      </div>
    </>
  );
};

export default Header;
