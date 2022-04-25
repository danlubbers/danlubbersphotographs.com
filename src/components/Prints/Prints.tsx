import React from 'react';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';

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

const Prints: React.FC<ImageContentProps> = ({ data }) => {
  // eslint-disable-next-line no-console
  console.log(`data`, data.allPrintsJson.nodes);
  return (
    <main>
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
                  data-item-image={`http://localhost:8000${image.images.fallback.src}`}
                  data-item-name={name}
                  data-item-description={description}
                  data-item-url="/"
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
