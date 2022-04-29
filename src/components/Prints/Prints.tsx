import React from 'react';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import * as styles from './Prints.module.scss';

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
    <div className={styles.printsContainer}>
      {data.allPrintsJson.nodes.map(({ id, name, description, src, price }) => {
        const image = getImage(src.childrenImageSharp[0]);

        return (
          <div className="Catalogue__item" key={id}>
            <div className="Product__image">
              <GatsbyImage image={image} alt={name} />
            </div>
            <div className="Product__details">
              <div className="Product__name">{name}</div>
              <div className="Product__description">{description}</div>
              <div className="Product__price">${price}</div>
            </div>
            <button
              className="Product snipcart-add-item"
              style={{ cursor: `pointer` }}
              type="button"
              data-item-id={id}
              data-item-price={price}
              data-item-image={`http://localhost:8000${image.images.fallback.src}`}
              data-item-name={name}
              data-item-description={description}
              data-item-custom1-name="size"
              data-item-custom1-options="9x6|12x8[+75.00]|18x12[+150.00]"
              data-item-url="/"
            >
              Buy now
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default Prints;
