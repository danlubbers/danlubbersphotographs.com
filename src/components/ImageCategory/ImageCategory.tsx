import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ImageSlider from '../ImageSlider/ImageSlider';
import ImageMobile from '../ImageMobile/ImageMobile';

const ImageCategory = ({ data }) => {
  // const [isLaptop, setIsLaptop] = useState(null);
  const { innerWidth } = window;

  // useEffect(() => {
  //   if (innerWidth > 768) setIsLaptop(true);
  //   else setIsLaptop(false);
  // }, []);
  // console.log(isLaptop);
  return (
    <>
      <Header bioImage={data.bioImage.nodes[0]} />
      {innerWidth > 768 ? (
        <ImageSlider sliderData={data.imageContent.nodes} />
      ) : (
        <ImageMobile imageData={data.imageContent.nodes} />
      )}
      <Footer />
    </>
  );
};

export default ImageCategory;
