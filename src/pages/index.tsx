import React from 'react';
import { PageProps, graphql } from 'gatsby';
import './index.scss';

// import imageData from '../data/image-content.json';

// import ImageSlider from '../components/ImageSlider/ImageSlider';
import ImageTest from '../components/ImageTest/ImageTest';
import Header from '../components/Header/Header';

const Home: React.FC<PageProps> = ({ data }) => {
  console.log(data.photos.edges[1]);

  return (
    <main>
      <Header />
      {/* <ImageSlider sliderData={imageData} /> */}
      {/* <ImageTest sliderData={data.allImageContentJson.edges} /> */}
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
          childImageSharp {
            gatsbyImageData
          }
          base
        }
      }
    }
  }
`;
