import React from 'react';
import Portal from 'components/Portal/Portal';
import * as styles from './CopyrightOverlay.module.scss';

const CopyrightOverlay = () => (
  <Portal>
    <div className={styles.copyrightOverlayContainer}>
      <p className={styles.copyrightText}>
        All images are copyrighted. Please {` `}
        <a
          className={styles.emailLink}
          href="mailto:lubbers.dan@gmail.com?subject=Mailed from danlubbersphotographs.com about 'Copywrited Photos'"
          target="_blank"
          rel="noreferrer"
        >
          CONTACT ME
        </a>
        {` `}
        to obtain a copy
        {` `}
      </p>
    </div>
  </Portal>
);

export default CopyrightOverlay;
