import React from 'react';
import { PageProps, graphql } from 'gatsby';
import './index.scss';
import recordEvent from 'utilities/recordEvents';

import GalleryCategories from '../components/GalleryCategories/GalleryCategories';

const StillLife: React.FC<PageProps> = ({ data }) => (
  <main>
    {recordEvent(
      `Photo: Still-Life`,
      `Photo: User landed on Still-Life Gallery`,
    )}
    <GalleryCategories data={data} />
  </main>
);

export default StillLife;

export const query = graphql`
  query {
    imageContent: allImageContentJson(
      filter: { category: { eq: "still-life" } }
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
