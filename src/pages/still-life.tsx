import React from 'react';
import { PageProps, graphql } from 'gatsby';
import './index.scss';

import GalleryCategories from '../components/GalleryCategories/GalleryCategories';

const StillLife: React.FC<PageProps> = ({ data }) => (
  <main>
    <GalleryCategories data={data} />
  </main>
);

export default StillLife;

// export const query = graphql`
//   query {
//     imageContent: allImageContentJson(
//       filter: { category: { eq: "still-life" } }
//     ) {
//       ...getImageData
//     }
//     bioImage: allImageSharp(
//       filter: { id: { eq: "5f0c3728-d190-5ff4-8004-4a51125b4487" } }
//     ) {
//       ...bioImage
//     }
//   }
// `;
