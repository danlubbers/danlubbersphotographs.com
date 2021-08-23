import React from 'react';
import SEO from '../SEO/SEO';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import GallerySlider from '../GallerySlider/GallerySlider';
import GalleryMobile from '../GalleryMobile/GalleryMobile';
import BioMobile from '../BioMobile/BioMobile';
import Connect from '../Connect/Connect';

const GalleryCategories = ({ data }) => {
  console.log(data);

  // const isBrowser = typeof window !== `undefined`;

  // const { innerWidth } = isBrowser && window;

  return (
    <>
      <SEO />
      <Header
        bioImage={data.bioImage.nodes[0]}
        bioDescription={data.bioDescription.edges[0].node}
      />
      {/* {innerWidth > 769 ? ( */}
      <GallerySlider sliderData={data.imageContent.nodes} />
      {/* ) : (
        <>
          <GalleryMobile imageData={data.imageContent.nodes} />
          <BioMobile bioDescription={data.bioDescription.edges[0].node} />
          <Connect />
        </>
      )} */}
      <Footer />
    </>
  );
};

export default GalleryCategories;
