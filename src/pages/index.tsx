import React from 'react';
import { PageProps, graphql } from 'gatsby';
import './index.scss';
import recordEvent from 'utilities/recordEvents';

import GalleryCategories from '../components/GalleryCategories/GalleryCategories';

const Home: React.FC<PageProps> = ({ data }) => (
  <main>
    {recordEvent(`Photo: Homescreen`, `Photo: User landed on Website`)}
    <GalleryCategories data={data} />
  </main>
);

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
