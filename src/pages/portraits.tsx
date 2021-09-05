import React from 'react';
import { PageProps, graphql } from 'gatsby';
import './index.scss';
import recordEvent from 'utilities/recordEvents';

import GalleryCategories from '../components/GalleryCategories/GalleryCategories';

const Portraits: React.FC<PageProps> = ({ data }) => (
  <main>
    {recordEvent(`Photo: Portraits`, `Photo: User landed on Portraits Gallery`)}
    <GalleryCategories data={data} />
  </main>
);

export default Portraits;

export const query = graphql`
  query {
    imageContent: allImageContentJson(
      filter: { category: { eq: "portraits" } }
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
