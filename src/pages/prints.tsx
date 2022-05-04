import React from 'react';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { PageProps, graphql } from 'gatsby';
import SEO from '../components/SEO/SEO';
import Header from '../components/Header/Header';
import PrintsDescription from '../components/PrintsDescription/PrintsDescription';
import PrintsComponent from '../components/Prints/Prints';
import recordEvent from '../utilities/recordEvents';

interface PrintsProps {
  data: {
    allPrintsJson: {
      nodes: {
        id: string;
        name: string;
        description: string;
        limited: boolean;
        limitedDescription?: string;
        category: string;
        src: { childrenImageSharp: IGatsbyImageData };
        price: number;
      }[];
    };
    bioDescription: {
      edges: {
        node: {
          id: string;
          bio: string;
          quote: string;
        };
      };
    };
  };
}

const Prints: React.FC<PageProps & PrintsProps> = ({ data }) => (
  <main>
    {recordEvent(
      `Photo: Prints`,
      `Photo: User landed on Prints for sale Gallery`,
    )}

    <SEO />
    <Header bioDescription={data.bioDescription.edges[0].node} prints />
    <PrintsDescription />
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
        limited
        limitedDescription
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
