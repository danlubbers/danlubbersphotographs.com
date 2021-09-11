import React from 'react';
import * as styles from './PWAModal.module.scss';
import logo from '../../assets/images/manifest/logo192.png';
import AppleShareIcon from '../../assets/logos/apple-share-icon.png';

interface PWAModalProps {
  handleModalClick: () => void;
}

const PWAModal: React.FC<PWAModalProps> = ({ handleModalClick }) => (
  <div className={styles.pwaModalContainer}>
    <div className={styles.pwaModalWrapper}>
      <img className={styles.logo} src={logo} alt="Dan Lubbers Logo" />
      <h4>Dan Lubbers Photographs App</h4>
      <p className={styles.installText}>
        Install this application on your homescreen for a better user experience
      </p>
      <p className={styles.tapText}>
        Tap{` `}
        <img
          className={styles.appleShareIcon}
          src={AppleShareIcon}
          alt="apple share icon"
        />
        {` `}
        then scroll down and tap{` `}
      </p>
      <p className={styles.addToHomeScreen}>&quot;Add to Home Screen&quot;</p>

      <button
        className={styles.closeBtn}
        type="button"
        onClick={handleModalClick}
      >
        CLOSE
      </button>
    </div>
    <div className={styles.background} />
  </div>
);

export default PWAModal;
