import React from 'react';
import { PageProps, graphql } from 'gatsby';
import './index.scss';

import Header from '../components/Header/Header';
import ImageTest from '../components/ImageTest/ImageTest';
import Footer from '../components/Footer/Footer';

const Home: React.FC<PageProps> = ({ data }) => {
  console.log(data);

  // const filteredPhotoData = data.photos.nodes.filter((photoData) => {
  //   console.log(`filtered`, photoData);
  //   return photoData.category === `index`;
  // });

  return (
    <main>
      <Header />
      <ImageTest sliderData={data.imageContent.nodes} />
      <Footer />
    </main>
  );
};

export default Home;

export const query = graphql`
  query {
    imageContent: allImageContentJson(filter: { category: { eq: "index" } }) {
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
