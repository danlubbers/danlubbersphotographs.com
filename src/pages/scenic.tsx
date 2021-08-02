import React from 'react';
import { PageProps, graphql } from 'gatsby';
import './index.scss';

import Header from '../components/Header/Header';
import ImageTest from '../components/ImageTest/ImageTest';

const Scenic: React.FC<PageProps> = ({ data }) => {
  console.log(data.photos.nodes);

  return (
    <main>
      <Header />
      <ImageTest sliderData={data.photos.nodes} />
    </main>
  );
};

export default Scenic;

export const query = graphql`
  query {
    photos: allImageContentJson(filter: { category: { eq: "scenic" } }) {
      nodes {
        category
        id
        name
        src {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              blurredOptions: { width: 100 }
              quality: 80
            )
          }
        }
      }
    }
  }
`;
