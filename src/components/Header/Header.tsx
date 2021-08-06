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
        {/* <Link to="/">
          <img src={headerLogo} alt="logo" />
        </Link> */}

        <nav>
          <ul>
            <div onMouseLeave={handleClickLeavePortfolio}>
              <li onMouseEnter={handleClickPortfolio}>PORTFOLIO</li>
              <ul
                className={
                  isPortfolio
                    ? styles.portfolioLinksActive
                    : styles.portfolioLinksInactive
                }
              >
                <Link className={styles.link} to="/portraits">
                  <li>Portraits</li>
                </Link>
                <Link className={styles.link} to="/scenic">
                  <li>Scenic</li>
                </Link>
              </ul>
            </div>
            <li className={isBio && styles.bioActive} onClick={handleClickBio}>
              BIO
            </li>

            <li>CONNECT</li>
          </ul>
        </nav>
      </header>
      <Bio isBio={isBio} bioImage={bioImage} />
    </>
  );
};

export default Header;
