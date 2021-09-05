import React from 'react';
import { PageProps, graphql } from 'gatsby';
import './index.scss';
import ReactGA from 'react-ga';
import config from '../../gatsby-config';

import GalleryCategories from '../components/GalleryCategories/GalleryCategories';

ReactGA.initialize(config.plugins[3].options.trackingIds[0]);

const Home: React.FC<PageProps> = ({ data }) => {
  console.log(config.plugins[3].options.trackingIds[0]);
  return (
    <main>
      {ReactGA.event({
        category: `Photo: Homescreen`,
        action: `Photo: User landed on Website`,
      })}
      <GalleryCategories data={data} />
    </main>
  );
};

export default Home;

export const query = graphql`
  query {
    imageContent: allImageContentJson(filter: { category: { eq: "index" } }) {
      ...getImageData
    }
    bioDescription: allBioJson {
      edges {
        node {
          id
          bio
          quote
        }
      }
    }
  }
`;
