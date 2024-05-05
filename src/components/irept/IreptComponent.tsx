import React, { useEffect, useState } from "react";
import styles from "@/styles/detail.module.scss";
import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";
import { irept_mo_images } from "@/ireptImages";
import GalleryComponent from "../GalleryComponent";
import Link from "next/link";

const IreptComponent = () => {
  const [position, setScroll] = useState(0);
  const [indexMo, setIndexMo] = useState(-1);

  const mo_currentImage = irept_mo_images[indexMo];
  const mo_nextIndex = (indexMo + 1) % irept_mo_images.length;
  const mo_nextImage = irept_mo_images[mo_nextIndex] || mo_currentImage;
  const mo_prevIndex =
    (indexMo + irept_mo_images.length - 1) % irept_mo_images.length;
  const mo_prevImage = irept_mo_images[mo_prevIndex] || mo_currentImage;

  const handleClickMo = (indexMo: number) => setIndexMo(indexMo);
  const handleCloseMo = () => setIndexMo(-1);
  const handleMovePrevMo = () => setIndexMo(mo_prevIndex);
  const handleMoveNextMo = () => setIndexMo(mo_nextIndex);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const ele = document.getElementById("nav");

    if (ele && position > 300) {
      ele.style.opacity = "0.8";
    } else if (ele && position < 300) {
      ele.style.opacity = "1";
      return;
    }
  }, [position]);

  const onScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <div className={styles.wrap}>
      <nav id="nav" className={styles.nav}>
        <ul className={styles.nav_inner}>
          <li className={styles.nav_item}>
            <Link href="/" className={styles.nav_link}>
              Back to Main
            </Link>
          </li>
        </ul>
      </nav>

      <div className={styles.item_container}>
        <div className={styles.item_container_inner}>
          <div className={`${styles.item_mockup} ${styles.item_mockup_irept}`}>
            <img
              src="/images/portfolio/mockup/img_mockup3D_irept.png"
              alt="목업"
            />
          </div>
          <div className={styles.item_wrap}>
            <div className={styles.item_title}>
              <div className={styles.title}>i-Rept</div>
              <div className={styles.year}>2021</div>
            </div>

            <div className={styles.item_desc}>
              <div>양서파충류인들을 위한 어플리케이션</div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.item_img_wrap}>
        <div className={styles.item_img_mo_wrap}>
          <div className={styles.item_img_mo_title}>
            UI
            <div className={styles.item_img_title_desc}>
              * 썸네일을 클릭하면 확대해서 보실 수 있습니다.
            </div>
          </div>
          <div>
            <GalleryComponent
              type="mo"
              images={irept_mo_images}
              onClick={handleClickMo}
            />

            {!!mo_currentImage && (
              <Lightbox
                mainSrc={mo_currentImage.original}
                mainSrcThumbnail={mo_currentImage.src}
                nextSrc={mo_nextImage.original}
                nextSrcThumbnail={mo_nextImage.src}
                prevSrc={mo_prevImage.original}
                prevSrcThumbnail={mo_prevImage.src}
                onCloseRequest={handleCloseMo}
                onMovePrevRequest={handleMovePrevMo}
                onMoveNextRequest={handleMoveNextMo}
              />
            )}
          </div>
        </div>
      </div>

      <div className={styles.copyright}>© SEJ. All Rights Reserved</div>
    </div>
  );
};

export default IreptComponent;
