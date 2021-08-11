import React from 'react';
import './ImageCategory.module.scss';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ImageSlider from '../ImageSlider/ImageSlider';

const ImageCategory = ({ data }) => (
  <>
    <Header bioImage={data.bioImage.nodes[0]} />
    <ImageSlider sliderData={data.imageContent.nodes} />
    <Footer />
  </>
);

export default ImageCategory;
