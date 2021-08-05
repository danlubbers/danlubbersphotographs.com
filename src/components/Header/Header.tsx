import React, { useState } from 'react';
import { Link } from 'gatsby';
import * as styles from './Header.module.scss';
import headerLogo from '../../assets/logos/danlubbers_logo.svg';

import Bio from '../Bio/Bio';

const Header = ({ bioImage }) => {
  console.log(bioImage);

  const [isBio, setIsBio] = useState(false);

  const handleClickBio = () => {
    setIsBio(!isBio);
  };
  return (
    <>
      <header>
        {/* <Link to="/">
          <img src={headerLogo} alt="logo" />
        </Link> */}

        <nav>
          <ul>
            <Link className={styles.link} to="/scenic">
              <li>PORTFOLIO</li>
            </Link>

            <li onClick={handleClickBio}>BIO</li>

            <li>CONNECT</li>
          </ul>
        </nav>
      </header>
      <Bio isBio={isBio} bioImage={bioImage} />
    </>
  );
};

export default Header;
