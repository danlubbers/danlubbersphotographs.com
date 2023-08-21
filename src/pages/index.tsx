import React, { useState } from 'react';
import { HeadFC, PageProps, graphql } from 'gatsby';
import './index.scss';
import useIsIOS from 'utilities/useIsIOS';
import recordEvent from 'utilities/recordEvents';
import Portal from '../components/Portal/Portal';
import PWAModal from '../components/PWAModal/PWAModal';
import GalleryCategories from '../components/GalleryCategories/GalleryCategories';
import SEO from '../components/SEO/SEO';

const Home: React.FC<PageProps> = ({ data }) => {
  const { prompt } = useIsIOS() as any;
  const [openModal, setOpenModal] = useState<boolean>(true);

  const handleModalClick = () => {
    setOpenModal(!openModal);
  };
  return (
    <main>
      {recordEvent(`Photo: Homescreen`, `Photo: User landed on Website`)}
      {prompt && openModal && (
        <Portal>
          <PWAModal handleModalClick={handleModalClick} />
        </Portal>
      )}
      <GalleryCategories data={data} />
    </main>
  );
};

export default Home;

export const Head: HeadFC = () => <SEO />;

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
