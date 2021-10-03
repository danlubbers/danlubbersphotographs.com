import React, { useState, useCallback, useEffect } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import recordEvent from 'utilities/recordEvents';
import FullscreenImage from 'components/FullscreenImage/FullscreenImage';
import * as styles from './GallerySlider.module.scss';
import CopyrightOverlay from '../CopyrightOverlay/CopyrightOverlay';

function GallerySlider({ sliderData, show }) {
  const [current, setCurrent] = useState(0);
  const [showFullscreenImage, setShowFullscreenImage] = useState(false);
  const { length } = sliderData;

  if (!Array.isArray(sliderData) || sliderData.length <= 0) return null;

  const keyPress = useCallback(
    (e) => {
      if (e.key === `ArrowRight`) {
        setCurrent(current === length - 1 ? 0 : current + 1);
        recordEvent(`Photo: GallerySlider`, `Right Arrow keypress`);
      }
      if (e.key === `ArrowLeft`) {
        setCurrent(current === 0 ? length - 1 : current - 1);
        recordEvent(`Photo: GallerySlider`, `Left Arrow keypress`);
      }
    },
    [current, length],
  );

  useEffect(() => {
    document.addEventListener(`keydown`, keyPress);
    return () => document.removeEventListener(`keydown`, keyPress);
  }, [keyPress]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    recordEvent(`Photo: GallerySlider`, `Right Arrow Mouse Click`);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    recordEvent(`Photo: GallerySlider`, `Left Arrow Mouse Click`);
  };

  const toggleFullScreen = () => {
    setShowFullscreenImage(!showFullscreenImage);
    recordEvent(`Photo: Fullscreen`, `User clicked image for Fullscreen Mode`);
  };

  const imageSliderData = sliderData.map((data, idx) => {
    const image = getImage(data.src);
    return (
      <>
        <div
          className={
            idx === current ? `${styles.slideActive}` : `${styles.slide}`
          }
          key={data.id}
        >
          {idx === current && (
            <div
              className={styles.imageDesktopWrapper}
              aria-hidden="true"
              onMouseDown={toggleFullScreen}
            >
              <div className={styles.imageDescriptionContainer}>
                <h1 className={styles.imageName}>{data.name}</h1>
                <h1 className={styles.imageDescription}>{data.description}</h1>
              </div>
              <GatsbyImage image={image} alt={data.name} />
            </div>
          )}
          <div className={styles.imageMobileWrapper}>
            <div className={styles.imageDescriptionContainer}>
              <h1 className={styles.imageName}>{data.name}</h1>
              <h1 className={styles.imageDescription}>{data.description}</h1>
            </div>
            <GatsbyImage
              className={styles.mobileImage}
              image={image}
              alt={data.name}
            />
          </div>
        </div>
        {idx === current && showFullscreenImage && (
          <FullscreenImage
            setShowFullscreen={setShowFullscreenImage}
            image={image}
            name={data.name}
            description={data.description}
            prevSlide={prevSlide}
            nextSlide={nextSlide}
          />
        )}
      </>
    );
  });

  return (
    <section className={styles.imageContainer}>
      {show && <CopyrightOverlay />}
      <FiChevronLeft className={styles.leftArrow} onClick={prevSlide} />
      <FiChevronRight className={styles.rightArrow} onClick={nextSlide} />
      {imageSliderData}
    </section>
  );
}
export default GallerySlider;
