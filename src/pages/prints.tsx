import React from 'react';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { PageProps, graphql } from 'gatsby';
import './index.scss';
import PrintsComponent from '../components/Prints/Prints';
import recordEvent from '../utilities/recordEvents';

interface ImageContentProps {
  data: {
    allPrintsJson: {
      nodes: {
        id: string;
        name: string;
        description: string;
        category: string;
        src: { childrenImageSharp: IGatsbyImageData };
        price: number;
      }[];
    };
  };
}

const Prints: React.FC<PageProps & ImageContentProps> = ({ data }) => (
  <main>
    {recordEvent(
      `Photo: Prints`,
      `Photo: User landed on Prints for sale Gallery`,
    )}
    <PrintsComponent data={data} />
  </main>
);

export default Prints;

export const query = graphql`
  query {
    allPrintsJson {
      nodes {
        category
        description
        id
        name
        price
        src {
          childrenImageSharp {
            gatsbyImageData(
              height: 400
              quality: 60
              jpgOptions: { quality: 50 }
              webpOptions: { quality: 50 }
            )
          }
        }
      }
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
