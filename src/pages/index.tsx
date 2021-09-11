import React, { useState } from 'react';
import { PageProps, graphql } from 'gatsby';
import './index.scss';
import recordEvent from 'utilities/recordEvents';

import PWAModal from '../components/PWAModal/PWAModal';
import GalleryCategories from '../components/GalleryCategories/GalleryCategories';

const Home: React.FC<PageProps> = ({ data }) => {
  const [openModal, setOpenModal] = useState<boolean>(true);

  const handleModalClick = () => {
    setOpenModal(!openModal);
  };
  return (
    <main>
      {recordEvent(`Photo: Homescreen`, `Photo: User landed on Website`)}
      {openModal && <PWAModal handleModalClick={handleModalClick} />}
      <GalleryCategories data={data} />
    </main>
  );
};

export default Home;

export const query = graphql`
  query {
    imageContent: allImageContentJson(filter: { category: { eq: "index" } }) {
      ...getImageData
    }
    bioDescription: allBioJson {
      edges {
        node {
          id
          bio
          quote
        }
      }
    }
  }
`;
