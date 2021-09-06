import React from 'react';
import { PageProps, graphql } from 'gatsby';
import './index.scss';
import recordEvent from 'utilities/recordEvents';

import GalleryCategories from '../components/GalleryCategories/GalleryCategories';

const Lifestyle: React.FC<PageProps> = ({ data }) => (
  <main>
    {recordEvent(`Photo: Lifestyle`, `Photo: User landed on Lifestyle Gallery`)}
    <GalleryCategories data={data} />
  </main>
);

export default Lifestyle;

export const query = graphql`
  query {
    imageContent: allImageContentJson(
      filter: { category: { eq: "lifestyle" } }
    ) {
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
