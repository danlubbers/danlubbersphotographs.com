import React from 'react';
import { Link } from 'gatsby';
import * as styles from './NavGalleryLinks.module.scss';
import recordEvents from '../../utilities/recordEvents';

const NavGalleryLinks = () => (
  <>
    {` `}
    <Link
      className={styles.link}
      to="/portraits"
      onClick={() =>
        recordEvents(`Photo: Portraits Page`, `User clicked Portraits Link`)
      }
    >
      <li className={styles.galleryTitle}>Portraits</li>
    </Link>
    <Link
      className={styles.link}
      to="/scenic"
      onClick={() =>
        recordEvents(`Photo: Scenic Page `, `User clicked Scenic Link`)
      }
    >
      <li className={styles.galleryTitle}>Scenic</li>
    </Link>
    <Link
      className={styles.link}
      to="/nature"
      onClick={() =>
        recordEvents(`Photo: Nature Page`, `User clicked Nature Link`)
      }
    >
      <li className={styles.galleryTitle}>Nature</li>
    </Link>
    <Link
      className={styles.link}
      to="/action"
      onClick={() =>
        recordEvents(`Photo: Action Page`, `User clicked Action Link`)
      }
    >
      <li className={styles.galleryTitle}>Action</li>
    </Link>
    <Link
      className={styles.link}
      to="/lifestyle"
      onClick={() =>
        recordEvents(`Photo: Lifestyle Page`, `User clicked Lifestyle Link`)
      }
    >
      <li className={styles.galleryTitle}>Lifestyle</li>
    </Link>
    <Link
      className={styles.link}
      to="/still-life"
      onClick={() =>
        recordEvents(`Photo: Still-Life Page`, `User clicked Still-Life Link`)
      }
    >
      <li className={styles.galleryTitle}>Still life</li>
    </Link>
    <Link
      className={styles.link}
      to="/musicians"
      onClick={() =>
        recordEvents(`Photo: Musicians Page`, `User clicked Musicians Link`)
      }
    >
      <li className={styles.galleryTitle}>Musicians</li>
    </Link>
    <Link
      className={styles.link}
      to="/published"
      onClick={() =>
        recordEvents(`Photo: Published Page`, `User clicked Published Link`)
      }
    >
      <li className={styles.galleryTitle}>Published</li>
    </Link>
    {/* <Link className={styles.link} to="/retouching">
      <li className={styles.galleryTitle}>Retouching Before & After</li>
    </Link> */}
  </>
);

export default NavGalleryLinks;
