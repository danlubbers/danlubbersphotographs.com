import React from 'react';
import { Link } from 'gatsby';
import * as styles from './NavGalleryLinks.module.scss';

const NavGalleryLinks = () => (
  <>
    <li className={styles.galleryTitle}>
      <Link className={styles.link} to="/portraits">
        Portraits
      </Link>
    </li>

    <li className={styles.galleryTitle}>
      <Link className={styles.link} to="/scenic">
        Scenic
      </Link>
    </li>

    <li className={styles.galleryTitle}>
      <Link className={styles.link} to="/nature">
        Nature
      </Link>
    </li>

    <li className={styles.galleryTitle}>
      <Link className={styles.link} to="/action">
        Action
      </Link>
    </li>

    <li className={styles.galleryTitle}>
      <Link className={styles.link} to="/lifestyle">
        Lifestyle
      </Link>
    </li>

    <li className={styles.galleryTitle}>
      <Link className={styles.link} to="/still-life">
        Still life
      </Link>
    </li>

    <li className={styles.galleryTitle}>
      <Link className={styles.link} to="/musicians">
        Musicians
      </Link>
    </li>

    <li className={styles.galleryTitle}>
      <Link className={styles.link} to="/published">
        Published
      </Link>
    </li>

    <li className={styles.galleryTitle}>
      <Link className={styles.link} to="/retouching">
        Retouching Before & After
      </Link>
    </li>
  </>
);

export default NavGalleryLinks;
