import React from 'react';
import { PageProps, graphql } from 'gatsby';
import './index.scss';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ImageTest from '../components/ImageTest/ImageTest';

const Scenic: React.FC<PageProps> = ({ data }) => {
  console.log(data);

  return (
    <main>
      <Header />
      <ImageTest sliderData={data.imageContent.nodes} />
      <Footer />
    </main>
  );
};

export default Scenic;

export const query = graphql`
  query {
    imageContent: allImageContentJson(filter: { category: { eq: "scenic" } }) {
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
