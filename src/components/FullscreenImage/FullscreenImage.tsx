import React from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import * as styles from './FullscreenImage.module.scss';
import Portal from '../Portal/Portal';

interface FullscreenImageProps {
  setShowFullscreen: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  image: IGatsbyImageData;
  name: string;
  description: string;
}

const FullscreenImage: React.FC<FullscreenImageProps> = ({
  setShowFullscreen,
  image,
  name,
  description,
}) => (
  <Portal>
    <div className={styles.fullscreenImageContainer}>
      <div className={styles.iconWrapper}>
        <div className={styles.icon} onClick={() => setShowFullscreen(false)}>
          <span className={styles.forwardSlash} />
          <span className={styles.backSlash} />
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <div className={styles.imageDesktopWrapper}>
          <div className={styles.imageDescriptionContainer}>
            <h1 className={styles.imageName}>{name}</h1>
            <h1 className={styles.imageDescription}>{description}</h1>
          </div>
          <GatsbyImage className={styles.image} image={image} alt={name} />
        </div>
      </div>
    </div>
  </Portal>
);

export default FullscreenImage;
