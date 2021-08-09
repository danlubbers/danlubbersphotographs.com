import React from 'react';
import { PageProps, graphql } from 'gatsby';
import './index.scss';

import ImageCategory from '../components/ImageCategory/ImageCategory';

const Home: React.FC<PageProps> = ({ data }) => (
  <main>
    <ImageCategory data={data} />
  </main>
);

export default Home;

export const query = graphql`
  query {
    imageContent: allImageContentJson(filter: { category: { eq: "index" } }) {
      ...getImageData
    }
    bioImage: allImageSharp(
      filter: { id: { eq: "5f0c3728-d190-5ff4-8004-4a51125b4487" } }
    ) {
      nodes {
        gatsbyImageData
      }
    }
  }
`;
