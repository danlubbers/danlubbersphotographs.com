import React from 'react';
import * as styles from './GalleryCategories.module.scss';
import SEO from '../SEO/SEO';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import GallerySlider from '../GallerySlider/GallerySlider';
import BioMobile from '../BioMobile/BioMobile';
import ConnectMobile from '../ConnectMobile/ConnectMobile';

const GalleryCategories = ({ data }) => {
  console.log(data);

  return (
    <>
      <SEO />
      <Header bioDescription={data.bioDescription.edges[0].node} />

      <div>
        <GallerySlider sliderData={data.imageContent.nodes} />
      </div>

      <div className={styles.mobileComponents}>
        <BioMobile bioDescription={data.bioDescription.edges[0].node} />
        <ConnectMobile />
      </div>

      <Footer />
    </>
  );
};

export default GalleryCategories;
