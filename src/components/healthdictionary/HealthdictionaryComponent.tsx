import React, { useEffect, useState } from "react";
import styles from "@/styles/detail.module.scss";
import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";
import GalleryComponent from "../GalleryComponent";
import Link from "next/link";
import { hd_images, hd_mo_images } from "@/healthdictionaryImages";

const HealthdictionaryComponent = () => {
  const [position, setScroll] = useState(0);
  const [index, setIndex] = useState(-1);
  const [indexMo, setIndexMo] = useState(-1);

  const currentImage = hd_images[index];
  const nextIndex = (index + 1) % hd_images.length;
  const nextImage = hd_images[nextIndex] || currentImage;
  const prevIndex = (index + hd_images.length - 1) % hd_images.length;
  const prevImage = hd_images[prevIndex] || currentImage;

  const mo_currentImage = hd_mo_images[indexMo];
  const mo_nextIndex = (indexMo + 1) % hd_mo_images.length;
  const mo_nextImage = hd_mo_images[mo_nextIndex] || mo_currentImage;
  const mo_prevIndex =
    (indexMo + hd_mo_images.length - 1) % hd_mo_images.length;
  const mo_prevImage = hd_mo_images[mo_prevIndex] || mo_currentImage;

  const handleClick = (index: number) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

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
          <div className={styles.item_mockup}>
            <img
              className={styles.item_mockup_itemMain}
              src="/images/portfolio/mockup/img_mockup_hd_pc.png"
              alt="목업"
            />
            <img
              className={styles.item_mockup_itemSub}
              src="/images/portfolio/mockup/img_mockup_hd.png"
              alt="목업"
            />
          </div>
          <div className={styles.item_wrap}>
            <div className={styles.item_title}>
              <div className={styles.title}>헬스딕셔너리</div>
              <div className={styles.year}>2021</div>
            </div>

            <div className={styles.item_desc}>
              <div>건강식품과 건강 관련 정보 제공 플랫폼</div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.item_img_wrap}>
        <div className={styles.item_img_pc_wrap}>
          <div className={styles.item_img_pc_title}>
            PC UI
            <div className={styles.item_img_title_desc}>
              * 썸네일을 클릭하면 확대해서 보실 수 있습니다.
            </div>
          </div>

          <div>
            <GalleryComponent
              type="pc"
              images={hd_images}
              onClick={handleClick}
            />

            {!!currentImage && (
              <Lightbox
                mainSrc={currentImage.original}
                mainSrcThumbnail={currentImage.src}
                nextSrc={nextImage.original}
                nextSrcThumbnail={nextImage.src}
                prevSrc={prevImage.original}
                prevSrcThumbnail={prevImage.src}
                onCloseRequest={handleClose}
                onMovePrevRequest={handleMovePrev}
                onMoveNextRequest={handleMoveNext}
              />
            )}
          </div>
        </div>

        <div className={styles.item_img_mo_wrap}>
          <div className={styles.item_img_mo_title}>
            MO UI
            <div className={styles.item_img_title_desc}>
              * 썸네일을 클릭하면 확대해서 보실 수 있습니다.
            </div>
          </div>
          <div>
            <GalleryComponent
              type="mo"
              images={hd_mo_images}
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

export default HealthdictionaryComponent;
