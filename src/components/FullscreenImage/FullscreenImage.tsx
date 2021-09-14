import React from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import * as styles from './FullscreenImage.module.scss';
import Portal from '../Portal/Portal';

interface FullscreenImageProps {
  setShowFullscreen: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  image: IGatsbyImageData;
  title: string;
}

const FullscreenImage: React.FC<FullscreenImageProps> = ({
  setShowFullscreen,
  image,
  title,
}) => (
  <>
    <Portal>
      <div className={styles.fullscreenImageContainer}>
        <div className={styles.iconWrapper}>
          <div className={styles.icon} onClick={() => setShowFullscreen(false)}>
            <span className={styles.forwardSlash} />
            <span className={styles.backSlash} />
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <GatsbyImage className={styles.image} image={image} alt={title} />
        </div>
      </div>
    </Portal>
  </>
);

export default FullscreenImage;
