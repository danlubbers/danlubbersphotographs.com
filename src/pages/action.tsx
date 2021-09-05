import React from 'react';
import { PageProps, graphql } from 'gatsby';
import './index.scss';
import recordEvent from 'utilities/recordEvents';

import GalleryCategories from '../components/GalleryCategories/GalleryCategories';

const Action: React.FC<PageProps> = ({ data }) => (
  <main>
    {recordEvent(`Photo: Action`, `Photo: User landed on Action Gallery`)}
    <GalleryCategories data={data} />
  </main>
);

export default Action;

export const query = graphql`
  query {
    imageContent: allImageContentJson(filter: { category: { eq: "action" } }) {
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
