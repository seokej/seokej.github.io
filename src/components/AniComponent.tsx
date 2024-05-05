import React, { useEffect, useState } from "react";
import styles from "@/styles/detail.module.scss";
import Link from "next/link";

const AniComponent = () => {
  const [position, setScroll] = useState(0);

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
          <div className={`${styles.item_mockup} ${styles.item_mockup_ani}`}>
            <div
              className={styles.mockup_preview}
              style={{
                backgroundImage: `url(/images/portfolio/mockup/iMac_mockup.png)`,
              }}
            >
              <div className={styles.mockup_preview_img_wrap}>
                <div
                  className={styles.mockup_preview_img}
                  style={{
                    backgroundImage: `url(/images/portfolio/mockup/alpha_vid.gif)`,
                  }}
                />
              </div>
            </div>
          </div>
          <div className={`${styles.item_wrap} ${styles.item_wrap_ani}`}>
            <div className={styles.item_title}>
              <div className={styles.title}>
                Lottie 애니메이션, 투명 동영상, @keyframes 애니메이션 활용
              </div>
              <div className={styles.year}>2023</div>
            </div>

            <div className={`${styles.item_desc} ${styles.item_desc_ani}`}>
              <div>
                CSS의 @keyframes을 이용한 애니메이션, <br />
                크로스 브라우징에 대응 가능한 Webm/mp4 영상 제작,
                <br />
                디자인툴 After Effects, Json을 이용한 Lottie 애니메이션 <br />
                Lottie 라이브러리를 통해 애니메이션 제어 가능 <br />
                (ex, 버튼을 클릭했을 때 부드럽고 화려한 인터랙션 애니메이션을
                구현할 수 있음)
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.item_img_wrap} ${styles.item_img_ani_wrap}`}>
        <div className={styles.item_img_pc_wrap}>
          <div className={styles.item_img_pc_title}>
            Lottie를 활용한 애니메이션 (Json 형태)
            <div className={styles.item_img_ani_desc}>
              <img src="/images/portfolio/lottie1.gif" alt="lottie" />
              <img src="/images/portfolio/lottie3.gif" alt="lottie" />
              <img src="/images/portfolio/lottie2.gif" alt="lottie" />
            </div>
          </div>

          <div className={styles.item_img_mo_wrap}>
            <div className={styles.item_img_mo_title}>
              Webm/mp4 확장자의 투명 동영상
              <div className={styles.item_img_mo_subtitle}>
                * 단풍 떨어지는 영상이 content위에 투명하게 깔림
              </div>
              <img
                src="/images/portfolio/mockup/alpha_vid.gif"
                alt="alpha_vid"
              />
            </div>
          </div>

          <div className={styles.item_img_mo_wrap}>
            <div className={styles.item_img_mo_title}>
              Keyframe을 이용한 css 애니메이션
              <div className={styles.item_img_ani_desc}>
                <img src="/images/portfolio/keyframes.gif" alt="keyframes" />
                <img
                  src="/images/portfolio/keyframes_code.png"
                  alt="keyframes"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>© SEJ. All Rights Reserved</div>
    </div>
  );
};

export default AniComponent;
