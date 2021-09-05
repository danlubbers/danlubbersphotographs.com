import React from 'react';
import { PageProps, graphql } from 'gatsby';
import './index.scss';
import recordEvent from 'utilities/recordEvents';

import GalleryCategories from '../components/GalleryCategories/GalleryCategories';

const Scenic: React.FC<PageProps> = ({ data }) => (
  <main>
    {recordEvent(`Photo: Scenic`, `Photo: User landed on Scenic Gallery`)}
    <GalleryCategories data={data} />
  </main>
);

export default Scenic;

export const query = graphql`
  query {
    imageContent: allImageContentJson(filter: { category: { eq: "scenic" } }) {
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
