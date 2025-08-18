import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import bioImage from '../../assets/images/dan-lubbers-tetons-portrait-IMG_7552-web.jpg';
import * as styles from './Bio.module.scss';
import clients from '../../data/clients.json';
import editorials from '../../data/editorials.json';
import press from '../../data/press.json';

interface BioProps {
  isBio: boolean;
  bioDescription: {
    bio: string;
    quote: string;
  };
}

interface CategoryProps {
  uuid: string;
  name: string;
  link: string;
}

const Bio: React.FC<BioProps> = ({ isBio, bioDescription }) => {
  const { bio, quote } = bioDescription;

  const getJsonCategory = (category: CategoryProps[]) =>
    category.map((details) => (
      <li key={details.uuid}>
        <a
          href={details.link}
          title={details.name}
          target="_blank"
          rel="noopener noreferrer"
        >
          {details.name}
        </a>
      </li>
    ));

  return (
    <article
      className={
        isBio ? styles.bioContainerActive : styles.bioContainerInactive
      }
    >
      <div className={styles.bioWrapper}>
        <div className={styles.imageContainer}>
          <img
            className={styles.bioImage}
            src={bioImage}
            alt="Portrait of Dan Lubbers"
          />
        </div>

        <div className={styles.descriptionContainer}>
          {/* BIO with Markdown + safe links */}
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              a: (props) => (
                <a {...props} target="_blank" rel="noopener noreferrer" />
              ),
              p: (props) => <p className={styles.descriptionText} {...props} />,
            }}
          >
            {bio}
          </ReactMarkdown>

          {/* Quote stays plain text (or switch to ReactMarkdown if you want formatting) */}
          <p className={styles.descriptionQuote}>{quote}</p>
        </div>

        <div className={styles.clientsEditorialPressContainer}>
          <div className={styles.clientsWrapper}>
            <ul className={styles.clients}>
              <h4 className={styles.clientsTitle}>CLIENTS</h4>
              {getJsonCategory(clients as CategoryProps[])}
            </ul>

            <ul className={styles.editorials}>
              <h4 className={styles.editorialsTitle}>EDITORIALS</h4>
              {getJsonCategory(editorials as CategoryProps[])}
            </ul>

            <ul className={styles.press}>
              <h4 className={styles.pressTitle}>PRESS</h4>
              {getJsonCategory(press as CategoryProps[])}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Bio;
