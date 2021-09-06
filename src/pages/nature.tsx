import React from 'react';
import { PageProps, graphql } from 'gatsby';
import './index.scss';
import recordEvent from 'utilities/recordEvents';

import GalleryCategories from '../components/GalleryCategories/GalleryCategories';

const Nature: React.FC<PageProps> = ({ data }) => (
  <main>
    {recordEvent(`Photo: Nature`, `Photo: User landed on Nature Gallery`)}
    <GalleryCategories data={data} />
  </main>
);

export default Nature;

export const query = graphql`
  query {
    imageContent: allImageContentJson(filter: { category: { eq: "nature" } }) {
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
