import React from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import * as styles from './FullscreenImage.module.scss';
import Portal from '../Portal/Portal';

interface FullscreenImageProps {
  setShowFullscreen: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  image: IGatsbyImageData;
  name: string;
  description: string;
  prevSlide: () => void;
  nextSlide: () => void;
}

const FullscreenImage: React.FC<FullscreenImageProps> = ({
  setShowFullscreen,
  image,
  name,
  description,
  prevSlide,
  nextSlide,
}) => (
  <Portal>
    <div className={styles.fullscreenImageContainer}>
      <FiChevronLeft className={styles.leftArrow} onClick={prevSlide} />
      <FiChevronRight className={styles.rightArrow} onClick={nextSlide} />
      <div className={styles.iconWrapper}>
        <div
          className={styles.icon}
          aria-hidden="true"
          onClick={() => setShowFullscreen(false)}
        >
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
          <GatsbyImage image={image} alt={name} />
        </div>
      </div>
    </div>
  </Portal>
);

export default FullscreenImage;
