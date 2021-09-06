import React, { useState, useCallback, useEffect } from 'react';
import * as styles from './GalleryCategories.module.scss';
// import CopyrightOverlay from '../CopyrightOverlay/CopyrightOverlay';
import SEO from '../SEO/SEO';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import GallerySlider from '../GallerySlider/GallerySlider';
import BioMobile from '../BioMobile/BioMobile';
import ConnectMobile from '../ConnectMobile/ConnectMobile';

import recordEvent from '../../utilities/recordEvents';

const GalleryCategories = ({ data }) => {
  const [show, setShow] = useState(false); // hide CopyrightOverlay ContextMenu

  const handleContextMenu = useCallback(
    (event) => {
      event.preventDefault();

      setShow(true);
      recordEvent(
        `Photo: Context Menu`,
        `User tried to right click and save image!`,
      );
    },
    [setShow],
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
      <SEO />
      <Header bioDescription={data.bioDescription.edges[0].node} />

      <div>
        <GallerySlider sliderData={data.imageContent.nodes} show={show} />
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
