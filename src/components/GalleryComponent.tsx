import React from "react";
import { ImageType } from "@/cherryplImages";
import styles from "@/styles/gallery.module.scss";

interface Props {
  type: string;
  images: ImageType[];
  onClick: (index: number) => void;
}

const GalleryComponent = (props: Props) => {
  const { type, images, onClick } = props;

  return (
    <div
      //   style={{
      //     gridTemplateColumns: `${
      //       type === "pc"
      //         ? "repeat(3, minmax(0, 1fr))"
      //         : "repeat(3, minmax(0, 1fr))"
      //     }`,
      //   }}
      className={styles.wrap}
    >
      {images.map((data: ImageType, index: number) => {
        return (
          <div
            key={index}
            className={styles.gImgWrap}
            style={{
              paddingTop: `${type === "pc" ? "60%" : "141%"}`,
            }}
          >
            <div
              className={styles.gImg}
              style={{
                backgroundImage: `url(${data.src})`,
                backgroundColor: `#242424`,
                backgroundSize: `${type === "pc" ? "cover" : "70%"}`,
                transitionDuration: `${type === "pc" ? "10s" : "20s"}`,
              }}
              onClick={() => {
                onClick(index);
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default GalleryComponent;
