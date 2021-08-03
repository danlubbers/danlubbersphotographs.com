import React from 'react';
import { Link } from 'gatsby';
import './Header.scss';
import headerLogo from '../../assets/logos/danlubbers_logo.svg';

const Header = () => (
  <header>
    <Link to="/">
      <img src={headerLogo} alt="logo" />
    </Link>

    <nav>
      <ul>
        <Link className="link" to="/scenic">
          <li>PORTFOLIO</li>
        </Link>

        <li>BIO</li>

        <li>CONNECT</li>
      </ul>
    </nav>
  </header>
);

export default Header;
