import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ImageSlider from '../ImageSlider/ImageSlider';
import ImageMobile from '../ImageMobile/ImageMobile';
import BioMobile from '../BioMobile/BioMobile';
import Connect from '../Connect/Connect';

const ImageCategory = ({ data }) => {
  const { innerWidth } = window;

  return (
    <>
      <Header bioImage={data.bioImage.nodes[0]} />
      {innerWidth > 769 ? (
        <ImageSlider sliderData={data.imageContent.nodes} />
      ) : (
        <>
          <ImageMobile imageData={data.imageContent.nodes} />
          <BioMobile />
          <Connect />
        </>
      )}
      <Footer />
    </>
  );
};

export default ImageCategory;
