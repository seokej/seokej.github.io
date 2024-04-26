import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";

const inter = Inter({
  subsets: ["latin"],
  weight: "800",
});

export default function Home() {
  return (
    <div className={`${styles.main} ${inter.className}`}>
      <div className={styles.title}>UI DEVELOPER PORTFOLIO</div>
      <div className={styles.subtitle}>
        <div>welcome</div>
        <img
          className={styles.subtitle_img}
          src="/images/down-arrow.png"
          alt="아래화살표"
        />
      </div>
    </div>
  );
}
