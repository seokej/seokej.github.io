import styles from "@/styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.title_wrap}>
        <div className={styles.title} data-fill-text="READY">
          READY
        </div>
        <div className={styles.title} data-fill-text="TO">
          TO
        </div>
        <div className={styles.title} data-fill-text="WORK">
          WORK
        </div>
        <div className={styles.title} data-fill-text="UI DEVELOPER">
          UI DEVELOPER
        </div>

        <div className={styles.subtitle}>
          {/* <div>welcome</div> */}
          <img
            className={styles.subtitle_img}
            src="/images/down-arrow.png"
            alt="아래화살표"
          />
        </div>
      </div>
    </div>
  );
}
