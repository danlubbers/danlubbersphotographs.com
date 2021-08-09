import React from 'react';
import { PageProps, graphql } from 'gatsby';
import './index.scss';

import ImageCategory from '../components/ImageCategory/ImageCategory';

const Scenic: React.FC<PageProps> = ({ data }) => (
  <main>
    <ImageCategory data={data} />
  </main>
);

export default Scenic;

export const query = graphql`
  query {
    imageContent: allImageContentJson(filter: { category: { eq: "scenic" } }) {
      ...getImageData
    }
    bioImage: allImageSharp(
      filter: { id: { eq: "5f0c3728-d190-5ff4-8004-4a51125b4487" } }
    ) {
      ...bioImage
    }
  }
`;
