import React, { useState, useCallback, useEffect } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import '../ImageSlider/ImageSlider.scss';

function ImageTest({ sliderData }) {
  console.log('SLIDER', sliderData);
  const [current, setCurrent] = useState(0);
  const { length } = sliderData;

  if (!Array.isArray(sliderData) || sliderData.length <= 0) return null;

  const keyPress = useCallback(
    (e) => {
      if (e.key === `ArrowRight`) {
        setCurrent(current === length - 1 ? 0 : current + 1);
      }
      if (e.key === `ArrowLeft`) {
        setCurrent(current === 0 ? length - 1 : current - 1);
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
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const imageSliderData = sliderData.map((data, idx) => {
    console.log(`id`, data.node.base);

    return (
      <div
        className={idx === current ? `slide-active` : `slide`}
        key={data.node.id}
      >
        {idx === current && (
          <GatsbyImage
            className="image"
            image={data.node.childImageSharp.gatsbyImageData}
            alt={data.node.base}
          />
        )}
      </div>
    );
  });

  return (
    <section className="slider">
      <FiChevronLeft className="left-arrow" onClick={prevSlide} />
      <FiChevronRight className="right-arrow" onClick={nextSlide} />
      {imageSliderData}
    </section>
  );
}
export default ImageTest;
