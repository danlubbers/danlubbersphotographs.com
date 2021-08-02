import React from 'react';
import { PageProps, graphql } from 'gatsby';
import './index.scss';
import ImageTest from '../components/ImageTest/ImageTest';
import Header from '../components/Header/Header';

const Scenic: React.FC<PageProps> = ({ data }) => {
  console.log(data.photos.edges[1]);

  return (
    <main>
      <Header />
      <ImageTest sliderData={data.photos.edges} />
    </main>
  );
};

export default Scenic;

export const query = graphql`
  query {
    photos: allFile(
      filter: { relativeDirectory: { eq: "scenic" } }
      sort: { order: ASC, fields: base }
    ) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData
          }
          base
        }
      }
    }
  }
`;
