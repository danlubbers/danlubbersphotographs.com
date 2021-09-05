import React from 'react';
import { PageProps, graphql } from 'gatsby';
import './index.scss';
import recordEvent from 'utilities/recordEvents';

import GalleryCategories from '../components/GalleryCategories/GalleryCategories';

const Published: React.FC<PageProps> = ({ data }) => (
  <main>
    {recordEvent(`Photo: Published`, `Photo: User landed on Published Gallery`)}
    <GalleryCategories data={data} />
  </main>
);

export default Published;

export const query = graphql`
  query {
    imageContent: allImageContentJson(
      filter: { category: { eq: "published" } }
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
