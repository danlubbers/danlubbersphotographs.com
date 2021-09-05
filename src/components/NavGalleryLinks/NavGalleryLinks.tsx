import React from 'react';
import { Link } from 'gatsby';
import * as styles from './NavGalleryLinks.module.scss';

const NavGalleryLinks = () => (
  <>
    {` `}
    <Link className={styles.link} to="/portraits">
      <li className={styles.galleryTitle}>Portraits</li>
    </Link>
    <Link className={styles.link} to="/scenic">
      <li className={styles.galleryTitle}>Scenic</li>
    </Link>
    <Link className={styles.link} to="/nature">
      <li className={styles.galleryTitle}>Nature</li>
    </Link>
    <Link className={styles.link} to="/action">
      <li className={styles.galleryTitle}>Action</li>
    </Link>
    <Link className={styles.link} to="/lifestyle">
      <li className={styles.galleryTitle}>Lifestyle</li>
    </Link>
    <Link className={styles.link} to="/still-life">
      <li className={styles.galleryTitle}>Still life</li>
    </Link>
    <Link className={styles.link} to="/musicians">
      <li className={styles.galleryTitle}>Musicians</li>
    </Link>
    <Link className={styles.link} to="/published">
      <li className={styles.galleryTitle}>Published</li>
    </Link>
    {/* <Link className={styles.link} to="/retouching">
      <li className={styles.galleryTitle}>Retouching Before & After</li>
    </Link> */}
  </>
);

export default NavGalleryLinks;
