import React from 'react';
import './Footer.scss';

const Footer = () => (
  <footer>
    <p className="footer-text">
      ALL IMAGES COPYRIGHT ©{` `}
      <a
        className="footer-link"
        href="http://www.danlubbers.com"
        target="_blank"
        rel="noreferrer"
      >
        DAN LUBBERS
      </a>
      {` `}| SITE BUILT BY{` `}
      <a
        className="footer-link"
        href="http://www.danlubbers.com"
        target="_blank"
        rel="noreferrer"
      >
        DAN LUBBERS
      </a>
    </p>
  </footer>
);

export default Footer;
