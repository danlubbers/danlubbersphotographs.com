import React, { useState } from 'react';
import { Link } from 'gatsby';
import * as styles from './Header.module.scss';
import headerLogo from '../../assets/logos/danlubbers_logo_#A52A25_outlined.svg';

import Navbar from '../Navbar/Navbar';
import Bio from '../Bio/Bio';
import Connect from '../Connect/Connect';

const Header = ({ bioImage }) => {
  const [isPortfolio, setIsPortfolio] = useState(false);
  const [isBio, setIsBio] = useState(false);
  const [isConnect, setIsConnect] = useState(false);

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

  return (
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
      <Bio isBio={isBio} bioImage={bioImage} />
      <Connect isConnect={isConnect} />
    </div>
  );
};

export default Header;
