import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
// import { FiX } from 'react-icons/fi';
import * as styles from './Bio.module.scss';

interface BioProps {
  bioImage: any;
  isBio: boolean;
}

const Bio: React.FC<BioProps> = ({ isBio, bioImage }) => {
  const image = getImage(bioImage);

  return (
    <article
      className={
        isBio ? styles.bioContainerActive : styles.bioContainerInactive
      }
    >
      {/* <div className={styles.closeBtnWrapper}>
        <FiX className={styles.closeBtn} />
      </div> */}
      <div className={styles.bioWrapper}>
        <div className={styles.imageContainer}>
          <GatsbyImage className={styles.bioImage} image={image} alt="test" />
        </div>
        <div className={styles.descriptionContainer}>
          <p className={styles.descriptionText}>
            Dan Lubbers is a Photographer / Retoucher / Web Developer based in
            Saratoga Springs, NY. A love of the outdoors has led Lubbers to
            places around the world like performing service work in Guatemala
            and roaming the pyramids of Ancient Egypt. Lubbers got his start
            with Extreme Sports Photography when he was the sole photographer on
            the La Sportiva Solutions Climbing Tour in 2007 and began shooting
            for Extreme Sports Editorials and various outdoor companies. He is a
            freelancer for Amazon&apos;s Largest Photo Studio. He recently
            retouched an ad campaign for Tempurpedic. He is also a contributor
            to Aurora Photos. Lubbers has really delved into a passion for
            Environmental & Fine Art Portraiture. A love of good coffee usually
            leads one to find him at local coffee shops working diligently on
            his work either at home or when traveling. Lubbers recently received
            his certification badge from DevMountain in Full-Stack Web
            Development.
          </p>
          <p className={styles.descriptionQuote}>
            &quot;Life is too short not to create something with every breath we
            draw.&quot; ~ Maynard James Keenan
          </p>
        </div>
        <div className={styles.clientsEditorialPressContainer}>
          <div className={styles.clientsWrapper}>
            <ul className={styles.clients}>
              <h4 className={styles.clientsTitle}>CLIENTS</h4>

              <li>
                <a
                  href="http://www.amazon.com/"
                  title="Amazon"
                  target="_blank"
                  rel="noreferrer"
                >
                  Amazon
                </a>
              </li>
              <li>
                <a
                  href="https://www.ohellomedia.com/"
                  title="O Hello Media"
                  target="_blank"
                  rel="noreferrer"
                >
                  O Hello Media
                </a>
              </li>
              <li>
                <a
                  href="http://www.pwc.com/"
                  title="PwC"
                  target="_blank"
                  rel="noreferrer"
                >
                  PwC - PricewaterhouseCoopers
                </a>
              </li>
              <li>
                <a
                  href="http://www.menswearhouse.com/"
                  title="Mens Wearhouse"
                  target="_blank"
                  rel="noreferrer"
                >
                  Mens Wearhouse
                </a>
              </li>
              <li>
                <a
                  href="http://www.redbull.com/"
                  title="Red Bull"
                  target="_blank"
                  rel="noreferrer"
                >
                  Red Bull
                </a>
              </li>
              <li>
                <a
                  href="http://www.sportiva.com/"
                  title="La Sportiva"
                  target="_blank"
                  rel="noreferrer"
                >
                  La Sportiva
                </a>
              </li>
              <li>
                <a
                  href="http://www.prana.com/"
                  title="Prana"
                  target="_blank"
                  rel="noreferrer"
                >
                  Prana
                </a>
              </li>
              <li>
                <a
                  href="http://www.tempursealy.com"
                  title="Tempur+Sealy"
                  target="_blank"
                  rel="noreferrer"
                >
                  Tempur+Sealy
                </a>
              </li>
              <li>
                <a
                  href="http://www.tempurpedic.com"
                  title="Tempurpedic"
                  target="_blank"
                  rel="noreferrer"
                >
                  Tempurpedic
                </a>
              </li>
              <li>
                <a
                  href="https://www.skidmore.edu/"
                  title="Skidmore College"
                  target="_blank"
                  rel="noreferrer"
                >
                  Skidmore College
                </a>
              </li>
              <li>
                <a
                  href="https://tang.skidmore.edu/"
                  title="The Tang Museum"
                  target="_blank"
                  rel="noreferrer"
                >
                  The Tang Museum
                </a>
              </li>
              <li>
                <a
                  href="http://www.mistymountain.com/"
                  title="Misty Mountain Threadworks"
                  target="_blank"
                  rel="noreferrer"
                >
                  Misty Mountain Threadworks
                </a>
              </li>
              <li>
                <a
                  href="http://www.greenergrasspublishing.com/"
                  title="Greener Grass Publishing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Greener Grass Publishing
                </a>
              </li>
              <li>
                <a
                  href="http://www.dragcity.com/"
                  title="Drag City Record Label"
                  target="_blank"
                  rel="noreferrer"
                >
                  Drag City Record Label
                </a>
              </li>
              <li>
                <a
                  href="http://www.bonnieprincebilly.com/"
                  title="Bonnie Prince Billy"
                  target="_blank"
                  rel="noreferrer"
                >
                  Bonnie Prince Billy
                </a>
              </li>
              <li>
                <a
                  href="http://www.cheyennemize.com/"
                  title="Cheyenne Mize"
                  target="_blank"
                  rel="noreferrer"
                >
                  Cheyenne Mize
                </a>
              </li>
              <li>
                <a
                  href="http://www.justinvining.com/"
                  title="Justin Vining"
                  target="_blank"
                  rel="noreferrer"
                >
                  Justin Vining
                </a>
              </li>
              <li>
                <a
                  href="http://www.reduxpictures.com/"
                  title="Redux Pictures"
                  target="_blank"
                  rel="noreferrer"
                >
                  Redux Pictures
                </a>
              </li>
              <li>
                <a
                  href="http://www.kelleybees.com/ "
                  title="Kelley Beekeeping"
                  target="_blank"
                  rel="noreferrer"
                >
                  Kelley Beekeeping
                </a>
              </li>
            </ul>

            <ul className={styles.editorials}>
              <h4 className={styles.editorialsTitle}>EDITORIALS</h4>
              <li>
                <a
                  href="http://adventure.nationalgeographic.com/adventure/"
                  title="National Geographic Adventure"
                  target="_blank"
                  rel="noreferrer"
                >
                  National Geographic Adventure
                </a>
              </li>
              <li>
                <a
                  href="http://www.rockandice.com/"
                  title="Rock &amp; Ice Magazine"
                  target="_blank"
                  rel="noreferrer"
                >
                  Rock &amp; Ice Magazine
                </a>
              </li>
              <li>
                <a
                  href="http://www.climbing.com/"
                  title="Climbing Magazine"
                  target="_blank"
                  rel="noreferrer"
                >
                  Climbing Magazine
                </a>
              </li>
              <li>Urban Climber Magazine</li>
              <li>
                <a
                  href="http://www.dpmclimbing.com/"
                  title="Dead Point Magazine"
                  target="_blank"
                  rel="noreferrer"
                >
                  Dead Point Magazine
                </a>
              </li>
              <li>
                <a
                  href="http://www.uawfordcommunity.org/"
                  title="UAW-Ford Community Magazine"
                  target="_blank"
                  rel="noreferrer"
                >
                  UAW-Ford Community Magazine
                </a>
              </li>
              <li>
                <a
                  href="http://www.spin.com/"
                  title="Spin Magazine"
                  target="_blank"
                  rel="noreferrer"
                >
                  Spin Magazine
                </a>
              </li>
              <li>
                <a
                  href="http://icelandairwaves.is/"
                  title="Icelandic Airwaves"
                  target="_blank"
                  rel="noreferrer"
                >
                  Icelandic Airwaves
                </a>
              </li>
            </ul>

            <ul className={styles.press}>
              <h4 className={styles.pressTitle}>PRESS</h4>
              <li>
                <a
                  href="http://danlubbersphotographs.com/img/press/bio-climbing-issue-278.jpg"
                  title="Climbing Magazine Issue:278"
                  target="_blank"
                  rel="noreferrer"
                >
                  Climbing Magazine Issue:278
                </a>
              </li>
              <li>
                <a
                  href="http://danlubbersphotographs.com/img/press/entourage-uc30.jpg"
                  title="Urban Climber Magazine Issue:30 Entourage"
                  target="_blank"
                  rel="noreferrer"
                >
                  Urban Climber Magazine Issue:30 Entourage
                </a>
              </li>
              <li>
                <a
                  href="http://danlubbersphotographs.com/img/press/entourage-uc49.jpg"
                  title="Urban Climber Magazine Photo Annual Issue:49 Entourage"
                  target="_blank"
                  rel="noreferrer"
                >
                  Urban Climber Magazine Photo Annual Issue:49 Entourage
                </a>
              </li>
              <li>
                <a
                  href="http://danlubbersphotographs.com/img/press/lubbers-pa.jpg"
                  title="Urban Climber Magazine Photo Annual Issue:49 Visual"
                  target="_blank"
                  rel="noreferrer"
                >
                  Urban Climber Magazine Photo Annual Issue:49 Visual
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Bio;
