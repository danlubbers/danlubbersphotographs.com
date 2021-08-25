import React, { useState, useCallback, useEffect } from 'react';
import * as styles from './GalleryCategories.module.scss';
import CopyrightOverlay from '../CopyrightOverlay/CopyrightOverlay';
import SEO from '../SEO/SEO';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import GallerySlider from '../GallerySlider/GallerySlider';
import BioMobile from '../BioMobile/BioMobile';
import ConnectMobile from '../ConnectMobile/ConnectMobile';

const GalleryCategories = ({ data }) => {
  const [show, setShow] = useState(false); // hide menu

  const handleContextMenu = useCallback(
    (event) => {
      event.preventDefault();
      setShow(true);
    },
    [show],
  );

  const handleClick = useCallback(() => (show ? setShow(false) : null), [show]);

  useEffect(() => {
    document.addEventListener(`click`, handleClick);
    document.addEventListener(`contextmenu`, handleContextMenu);
    return () => {
      document.removeEventListener(`click`, handleClick);
      document.removeEventListener(`contextmenu`, handleContextMenu);
    };
  });

  return (
    <>
      {show && <CopyrightOverlay />}
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
