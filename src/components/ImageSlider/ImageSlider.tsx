import React, { useState, useCallback, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './ImageSlider.scss';

interface ImageData {
  sliderData: {
    name: string;
    imgSrc: string;
    uuid: string;
  }[];
}

const ImageSlider: React.FC<ImageData> = ({ sliderData }) => {
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

  const imageSliderData = sliderData.map((detail, idx) => (
    <div
      className={idx === current ? `slide-active` : `slide`}
      key={detail.uuid}
    >
      {idx === current && (
        <img className="image" src={detail.imgSrc} alt={detail.name} />
      )}
    </div>
  ));

  return (
    <section className="slider">
      <FiChevronLeft className="left-arrow" onClick={prevSlide} />
      <FiChevronRight className="right-arrow" onClick={nextSlide} />
      {imageSliderData}
    </section>
  );
};

export default ImageSlider;
