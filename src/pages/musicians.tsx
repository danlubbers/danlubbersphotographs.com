import React from 'react';
import { PageProps, graphql } from 'gatsby';
import './index.scss';
import recordEvent from 'utilities/recordEvents';

import GalleryCategories from '../components/GalleryCategories/GalleryCategories';

const Musicians: React.FC<PageProps> = ({ data }) => (
  <main>
    {recordEvent(`Photo: Musicians`, `Photo: User landed on Musicians Gallery`)}
    <GalleryCategories data={data} />
  </main>
);

export default Musicians;

export const query = graphql`
  query {
    imageContent: allImageContentJson(
      filter: { category: { eq: "musicians" } }
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
