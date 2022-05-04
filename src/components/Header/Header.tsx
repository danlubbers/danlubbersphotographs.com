import React, { useState } from 'react';
import { Link } from 'gatsby';
import * as styles from './Header.module.scss';
import headerLogo from '../../assets/logos/danlubbers_logo_#A52A25_outlined.svg';

import recordEvents from '../../utilities/recordEvents';

import Navbar from '../Navbar/Navbar';
import Bio from '../Bio/Bio';
import Connect from '../Connect/Connect';
import NavGalleryLinks from '../NavGalleryLinks/NavGalleryLinks';

const Header = ({ bioDescription, prints }) => {
  const [isPortfolio, setIsPortfolio] = useState(false);
  const [isBio, setIsBio] = useState(false);
  const [isConnect, setIsConnect] = useState(false);
  const [isPrints, setIsPrints] = useState(prints);
  const [isMobileDisplay, setIsMobileDisplay] = useState(false);

  const handleClickNavDisplays = (navTitle: string) => {
    if (navTitle === `logo`) {
      setIsBio(false);
      setIsConnect(false);
      setIsPrints(false);
      recordEvents(`Photo: Logo`, `Clicked on Logo`);
    }
    if (navTitle === `enterPortfolio`) setIsPortfolio(true);
    if (navTitle === `leavePortfolio`) setIsPortfolio(false);

    if (navTitle === `bio`) {
      setIsBio(!isBio);
      setIsPortfolio(false);
      setIsConnect(false);
      setIsPrints(false);

      recordEvents(`Photo: Bio`, `Bio Component is Active`);
    }
    if (navTitle === `connect`) {
      setIsConnect(!isConnect);
      setIsBio(false);
      setIsPortfolio(false);
      setIsPrints(false);

      recordEvents(`Photo: Connect`, `Connect Component is Active`);
    }
    if (navTitle === `prints`) {
      setIsPrints(!isPrints);
      setIsConnect(false);
      setIsBio(false);
      setIsPortfolio(false);

      recordEvents(`Photo: Prints`, `Prints Component is Active`);
    }
  };

  const handleClickMobileDisplay = () => {
    setIsMobileDisplay(!isMobileDisplay);
  };

  return (
    <>
      <header className={styles.headerContainer}>
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
          isPrints={isPrints}
        />
        <Bio isBio={isBio} bioDescription={bioDescription} />
        <Connect isConnect={isConnect} />
      </header>

      <header className={styles.headerMobileContainer}>
        <div className={styles.logoWrapper}>
          <Link
            className={styles.logoLink}
            to="/"
            onClick={() => handleClickNavDisplays(`logo`)}
          >
            <img src={headerLogo} alt="logo" />
          </Link>
        </div>
        <nav
          className={styles.menubarWrapper}
          onClick={handleClickMobileDisplay}
        >
          <div
            className={
              !isMobileDisplay
                ? `${styles.menuIcon}`
                : `${styles.menuIcon} ${styles.active}`
            }
          >
            <span className={styles.menubar1} />
            <span className={styles.menubar2} />
            <span />
          </div>
        </nav>
        {isMobileDisplay && (
          <ul className={styles.mobileNav}>
            <NavGalleryLinks />
          </ul>
        )}
      </header>
    </>
  );
};

export default Header;
