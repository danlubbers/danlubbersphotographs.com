import React from 'react';
import { PageProps, graphql } from 'gatsby';
import './index.scss';

import Header from '../components/Header/Header';
import ImageTest from '../components/ImageTest/ImageTest';

const Home: React.FC<PageProps> = ({ data }) => {
  console.log(data.photos.edges);

  return (
    <main>
      <Header />
      <ImageTest sliderData={data.photos.edges} />
    </main>
  );
};

export default Home;

export const query = graphql`
  query {
    photos: allFile(
      filter: { relativeDirectory: { eq: "index" } }
      sort: { order: ASC, fields: base }
    ) {
      edges {
        node {
          id
          base
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
