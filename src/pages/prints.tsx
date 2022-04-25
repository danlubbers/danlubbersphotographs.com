import React from 'react';
import { PageProps, graphql } from 'gatsby';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';

import './index.scss';
import recordEvent from '../utilities/recordEvents';

interface imageContentProps {
  data: {
    allPrintsJson: {
      nodes: {
        id: string;
        name: string;
        description: string;
        category: string;
        src: { childrenImageSharp: IGatsbyImageData };
        price: number;
        relativePath: string;
      }[];
    };
  };
}

// {
//     childrenImageSharp: {
//       gatsbyImageData: {
//         backgroundColor: string;
//         height: number;
//         layout: string;
//         width: number;
//       };
//     };
//   }[];

const Prints: React.FC<PageProps & imageContentProps> = ({ data }) => {
  // eslint-disable-next-line no-console
  console.log(`data`, data.allPrintsJson.nodes);
  return (
    <main>
      {recordEvent(
        `Photo: Prints`,
        `Photo: User landed on Prints for sale Gallery`,
      )}

      <div className="Catalogue">
        {data.allPrintsJson.nodes.map(
          ({ id, name, description, src, price }) => {
            const image = getImage(src.childrenImageSharp[0]);
            return (
              <div className="Catalogue__item" key={id}>
                <div
                  className="Product snipcart-add-item"
                  data-item-id={id}
                  data-item-price={price}
                  data-item-image={image}
                  data-item-name={name}
                  data-item-description={description}
                  data-item-url={null}
                >
                  <div className="Product__image">
                    <GatsbyImage image={image} alt={name} />
                  </div>
                  <div className="Product__details">
                    <div className="Product__name">{name}</div>
                    <div className="Product__description">{description}</div>
                    <div className="Product__price">${price}</div>
                  </div>
                  <span className="Product__buy">Buy now</span>
                </div>
              </div>
            );
          },
        )}
      </div>
    </main>
  );
};
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
