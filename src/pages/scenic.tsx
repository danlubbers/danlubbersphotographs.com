import React from 'react';
import { PageProps, graphql } from 'gatsby';
import './index.scss';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ImageSlider from '../components/ImageSlider/ImageSlider';

const Scenic: React.FC<PageProps> = ({ data }) => {
  console.log(data);

  return (
    <main>
      <Header bioImage={data.bioImage.nodes[0]} />
      <ImageSlider sliderData={data.imageContent.nodes} />
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
        description
        src {
          childImageSharp {
            gatsbyImageData(
              height: 800
              quality: 100
              webpOptions: { quality: 90 }
              jpgOptions: { quality: 100 }
            )
          }
        }
      }
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
