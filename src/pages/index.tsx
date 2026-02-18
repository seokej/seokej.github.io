import { useEffect, useState } from "react";
import styles from "@/styles/Home.module.scss";
import Link from "next/link";

export default function Home() {
  const [isActive, setIsActive] = useState("main");
  const [position, setScroll] = useState(0);

  const onScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    const ele = document.getElementById("nav");
    const main = document.getElementById("main");
    const works = document.getElementById("works");
    const contact = document.getElementById("contact");

    if (ele && position > 500) {
      ele.style.opacity = "0.8";
    } else if (ele && position < 500) {
      ele.style.opacity = "1";
      return;
    }

    if (!main || !works || !contact) return;

    const mainPosition = window.scrollY + main.getBoundingClientRect().top;
    const worksPosition = window.scrollY + works.getBoundingClientRect().top;
    const contactPosition =
      window.scrollY + contact.getBoundingClientRect().top;

    if (position > mainPosition && position < worksPosition) {
      setIsActive("main");
    } else if (position > worksPosition && position < contactPosition - 600) {
      setIsActive("works");
    } else if (position > contactPosition - 600) {
      setIsActive("contact");
    }
  }, [position]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className={styles.wrap}>
      <div className={styles.arrow}>
        <img
          className={styles.arrow_img}
          src="/images/down-arrow.png"
          alt="아래화살표"
        />
      </div>

      <nav id="nav" className={styles.nav}>
        <ul className={styles.nav_inner}>
          <li className={styles.nav_item}>
            <a
              href="#main"
              className={
                isActive === "main"
                  ? `${styles.nav_link} ${styles.nav_link_active}`
                  : `${styles.nav_link}`
              }
              onClick={() => {
                setIsActive("main");
              }}
            >
              Main
            </a>
          </li>
          <li className={styles.nav_item}>
            <a
              href="#works"
              className={
                isActive === "works"
                  ? `${styles.nav_link} ${styles.nav_link_active}`
                  : `${styles.nav_link}`
              }
              onClick={() => {
                setIsActive("works");
              }}
            >
              Works
            </a>
          </li>
          <li className={styles.nav_item}>
            <a
              href="#contact"
              className={
                isActive === "contact"
                  ? `${styles.nav_link} ${styles.nav_link_active}`
                  : `${styles.nav_link}`
              }
              onClick={() => {
                setIsActive("contact");
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <main id="main" className={styles.main}>
        <div>
          <div className={styles.solid_item01}>
            <img src="/images/portfolio/main_img04.png" alt="solid" />
          </div>
          <div className={styles.solid_item02}>
            <img src="/images/portfolio/main_img05.png" alt="solid" />
          </div>
        </div>
        <div className={styles.title_wrap}>
          <div
            className={`${styles.title} ${styles.title_none}`}
            data-fill-text="READY"
          >
            READY
          </div>
          <div
            className={`${styles.title} ${styles.title_none}`}
            data-fill-text="TO"
          >
            TO
          </div>
          <div
            className={`${styles.title} ${styles.title_none}`}
            data-fill-text="WORK"
          >
            WORK
          </div>
          <div className={`${styles.title} ${styles.title_dev}`}>
            UI DEVELOPER
          </div>
        </div>
        <div className={styles.title_wrap_mo}>
          <div className={`${styles.title_mo} ${styles.title_none_mo}`}>
            READY TO WORK
          </div>
          <div className={`${styles.title_mo} ${styles.title_dev_mo}`}>
            UI DEVELOPER
          </div>
        </div>
      </main>

      <section id="works" className={styles.project_wrap}>
        <div className={styles.project_wrap_title}>
          PROJECT
          <div className={styles.project_wrap_subtitle}>
            (기여도가 적히지 않은 작업물들은 모두 기여도 100%)
          </div>
        </div>
        <div className={styles.project_inner}>
          {/* 엔터프라이즈블록체인 */}
          <div>
            <div className={styles.project_img_wrap}>
              <div
                className={styles.project_img}
                style={{ backgroundImage: `url(/images/portfolio/eb.gif)` }}
              />
            </div>
            <div className={styles.project_inner_desc_wrap}>
              <div className={styles.project_title}>엔터프라이즈블록체인</div>
              <div className={styles.project_desc}>
                GSAP을 이용한 interactive한 Animation 구현
                <br />
              </div>
              <div className={styles.project_tag}>
                <span>#REACT </span>
                <span>#JavaScript </span>
                <span>#Styled-components </span>
                <span>#Gsap </span>
                <span>#Gsap/ScrollTrigger </span>
                <span>#PC(only) </span>
              </div>
              <div className={styles.project_btn_wrap}>
                <Link
                  target="_blank"
                  href="/enterprise"
                  className={styles.project_btn_view}
                >
                  View Site
                  <img src="/images/portfolio/img_link.png" alt="링크이동" />
                </Link>
                <Link
                  target="_blank"
                  href="https://github.com/seokej/eb"
                  className={styles.project_btn_git}
                >
                  github
                </Link>
              </div>
            </div>
          </div>

          {/* 서울디지털재단 */}
          <div>
            <div className={styles.project_img_wrap}>
              <div
                className={styles.project_img}
                style={{ backgroundImage: `url(/images/portfolio/sdf.png)` }}
              />
            </div>
            <div className={styles.project_inner_desc_wrap}>
              <div className={styles.project_title}>서울디지털재단</div>
              <div className={styles.project_desc}>
                NextJs의 편리한 라우팅, Axios를 이용한 API 통신,
                <br />
                React hook을 활용한 상태관리,
                <br />
                TypeScript 사용으로 타입 안정성을 통한 개발 생산성 향상,
                <br />
                키보드 TAP키로 접근하는 사용자의 편의성을 생각하여 클론코딩한
                사이트입니다.
                <br />
              </div>
              <div className={styles.project_tag}>
                <span>#REACT </span>
                <span>#TypeScript </span>
                <span>#Next.js </span>
                <span>#Axios </span>
                <span>#SCSS </span>
                <span>#Swiper </span>
                <span>#반응형 </span>
                <span>#접근성 </span>
              </div>
              <div className={styles.project_btn_wrap}>
                <Link
                  target="_blank"
                  href="/sdf"
                  className={styles.project_btn_view}
                >
                  View Site
                  <img src="/images/portfolio/img_link.png" alt="링크이동" />
                </Link>
                <Link
                  target="_blank"
                  href="https://github.com/seokej/sdf"
                  className={styles.project_btn_git}
                >
                  github
                </Link>
              </div>
            </div>
          </div>

          {/* 넷플릭스 */}
          <div>
            <div className={styles.project_img_wrap}>
              <div
                className={styles.project_img}
                style={{
                  backgroundImage: `url(/images/portfolio/netflix.png)`,
                }}
              />
            </div>
            <div className={styles.project_inner_desc_wrap}>
              <div className={styles.project_title}>넷플릭스</div>
              <div className={styles.project_desc}>
                Reack hook과 DOM 메소드를 활용하여 modal 좌표, 넓이 값 계산,
                <br />
                Swiper / react-modal 라이브러리 활용, <br />
                TypeScript 사용으로 타입 안정성을 통한 개발 생산성 향상
                <br />
              </div>
              <div className={styles.project_tag}>
                <span>#REACT </span>
                <span>#TypeScript </span>
                <span>#SCSS </span>
                <span>#Swiper </span>
                <span>#반응형 </span>
              </div>
              <div className={styles.project_btn_wrap}>
                <Link
                  target="_blank"
                  href="/netflix"
                  className={styles.project_btn_view}
                >
                  View Site
                  <img src="/images/portfolio/img_link.png" alt="링크이동" />
                </Link>
                <Link
                  target="_blank"
                  href="https://github.com/seokej/netflix"
                  className={styles.project_btn_git}
                >
                  github
                </Link>
              </div>
            </div>
          </div>

          {/* Toss */}
          <div>
            <div className={styles.project_img_wrap}>
              <div
                className={styles.project_img}
                style={{ backgroundImage: `url(/images/portfolio/toss.png)` }}
              />
            </div>
            <div className={styles.project_inner_desc_wrap}>
              <div className={styles.project_title}>Toss</div>
              <div className={styles.project_desc}>
                GSAP 라이브러리 활용,
                <br />
                jQuery와 css를 이용한 애니메이션 구현,
                <br />
                WAI-ARIA를 이용해 웹 접근성 향상
              </div>
              <div className={styles.project_tag}>
                <span>#HTML </span>
                <span>#CSS </span>
                <span>#jQuery </span>
                <span>#GSAP </span>
                <span>#반응형 </span>
                <span>#접근성 </span>
              </div>
              <div className={styles.project_btn_wrap}>
                <Link
                  target="_blank"
                  href="/toss"
                  className={styles.project_btn_view}
                >
                  Main Page
                  <img src="/images/portfolio/img_link.png" alt="링크이동" />
                </Link>
                <Link
                  target="_blank"
                  href="/toss?variant=sub"
                  className={styles.project_btn_view}
                >
                  Sub Page
                  <img src="/images/portfolio/img_link.png" alt="링크이동" />
                </Link>
              </div>
            </div>
          </div>

          {/* 펄어비스 */}
          <div>
            <div className={styles.project_img_wrap}>
              <div
                className={styles.project_img}
                style={{
                  backgroundImage: `url(/images/portfolio/pearlabyss.png)`,
                }}
              />
            </div>
            <div className={styles.project_inner_desc_wrap}>
              <div className={styles.project_title}>펄어비스</div>
              <div className={styles.project_desc}>
                Swiper, aos 라이브러리 활용,
                <br />
                카운팅 이벤트, 테이블 태그 활용, <br />
                jQuery와 css를 이용한 애니메이션 구현 <br />
              </div>
              <div className={styles.project_tag}>
                <span>#HTML </span>
                <span>#CSS </span>
                <span>#jQuery </span>
                <span>#Swiper </span>
                <span>#Aos </span>
                <span>#반응형 </span>
              </div>
              <div className={styles.project_btn_wrap}>
                <Link
                  target="_blank"
                  href="/pearlabyss?variant=main"
                  className={styles.project_btn_view}
                >
                  Main Page
                  <img src="/images/portfolio/img_link.png" alt="링크이동" />
                </Link>
                <Link
                  target="_blank"
                  href="/pearlabyss?variant=sub"
                  className={styles.project_btn_view}
                >
                  Sub Page
                  <img src="/images/portfolio/img_link.png" alt="링크이동" />
                </Link>
              </div>
            </div>
          </div>

          {/* 하이브인사이트 */}
          <div>
            <div className={styles.project_img_wrap}>
              <div
                className={styles.project_img}
                style={{
                  backgroundImage: `url(/images/portfolio/HI.png)`,
                }}
              />
            </div>
            <div className={styles.project_inner_desc_wrap}>
              <div className={styles.project_title}>하이브인사이트</div>
              <div className={styles.project_desc}>
                풀 페이지 슬라이드, Swiper 슬라이드 활용
                <br />
              </div>
              <div className={styles.project_tag}>
                <span>#HTML </span>
                <span>#CSS </span>
                <span>#jQuery </span>
                <span>#Swiper </span>
                <span>#fullpage </span>
                <span>#반응형 </span>
              </div>
              <div className={styles.project_btn_wrap}>
                <Link
                  target="_blank"
                  href="/hi"
                  className={styles.project_btn_view}
                >
                  Main Page
                  <img src="/images/portfolio/img_link.png" alt="링크이동" />
                </Link>
                <Link
                  target="_blank"
                  href="/hi?variant=sub"
                  className={styles.project_btn_view}
                >
                  Sub Page
                  <img src="/images/portfolio/img_link.png" alt="링크이동" />
                </Link>
              </div>
            </div>
          </div>

          {/* 배달의민족 */}
          <div>
            <div className={styles.project_img_wrap}>
              <div
                className={styles.project_img}
                style={{ backgroundImage: `url(/images/portfolio/bm.png)` }}
              />
            </div>
            <div className={styles.project_inner_desc_wrap}>
              <div className={styles.project_title}>배달의민족</div>
              <div className={styles.project_desc}>
                풀 페이지 슬라이드 라이브러리 활용, <br />
                CSS 애니메이션 활용
              </div>
              <div className={styles.project_tag}>
                <span>#HTML </span>
                <span>#CSS </span>
                <span>#jQuery </span>
                <span>#fullpage </span>
                <span>#반응형 </span>
              </div>
              <div className={styles.project_btn_wrap}>
                <Link
                  target="_blank"
                  href="/bm?variant=Main"
                  className={styles.project_btn_view}
                >
                  Main Page
                  <img src="/images/portfolio/img_link.png" alt="링크이동" />
                </Link>
              </div>
            </div>
          </div>

          {/* 네이버웨일 */}
          <div>
            <div className={styles.project_img_wrap}>
              <div
                className={styles.project_img}
                style={{ backgroundImage: `url(/images/portfolio/nw.png)` }}
              />
            </div>
            <div className={styles.project_inner_desc_wrap}>
              <div className={styles.project_title}>네이버웨일</div>
              <div className={styles.project_desc}>테이블태그 활용</div>
              <div className={styles.project_tag}>
                <span>#HTML </span>
                <span>#CSS </span>
                <span>#jQuery </span>
                <span>#반응형 </span>
              </div>
              <div className={styles.project_btn_wrap}>
                <Link
                  target="_blank"
                  href="/nw?variant=main"
                  className={styles.project_btn_view}
                >
                  Main Page
                  <img src="/images/portfolio/img_link.png" alt="링크이동" />
                </Link>
                <Link
                  target="_blank"
                  href="/nw?variant=sub"
                  className={styles.project_btn_view}
                >
                  Sub Page
                  <img src="/images/portfolio/img_link.png" alt="링크이동" />
                </Link>
              </div>
            </div>
          </div>

          {/* lottie */}
          <div>
            <div className={styles.project_img_wrap}>
              <div
                className={styles.project_img}
                style={{
                  backgroundImage: `url(/images/portfolio/lottie1.gif)`,
                }}
              />
            </div>
            <div className={styles.project_inner_desc_wrap}>
              <div className={styles.project_title}>
                Lottie 애니메이션 및 @keyframes 애니메이션 활용
              </div>
              <div className={styles.project_desc}>
                디자인툴 After Effects과 Json을 이용한 Lottie 애니메이션, <br />
                CSS의 @keyframes을 이용한 애니메이션
              </div>
              <div className={styles.project_tag}>
                <span>#Lottie </span>
                <span>#CSS </span>
                <span>#@keyframes </span>
                <span>#반응형 </span>
              </div>
              <div className={styles.project_btn_wrap}>
                <Link href="/ani" className={styles.project_btn_more}>
                  Read More
                </Link>
              </div>
            </div>
          </div>

          {/* 체리플 */}
          <div>
            <div className={styles.project_img_wrap}>
              <div
                className={styles.project_img}
                style={{
                  backgroundImage: `url(/images/portfolio/cherrypl2.jpg)`,
                }}
              />
            </div>
            <div className={styles.project_inner_desc_wrap}>
              <div className={styles.project_title}>체리플</div>
              <div className={styles.project_desc}>기여도 40%</div>
              <div className={styles.project_tag}>
                <span>#PHP </span>
                <span>#HTML </span>
                <span>#CSS </span>
                <span>#jQuery </span>
                <span>#Bootstrap </span>
                <span>#반응형 </span>
              </div>
              <div className={styles.project_btn_wrap}>
                <Link href="/cherrypl" className={styles.project_btn_more}>
                  Read More
                </Link>
              </div>
            </div>
          </div>

          {/* 코끼리교실 */}
          <div>
            <div className={styles.project_img_wrap}>
              <div
                className={styles.project_img}
                style={{
                  backgroundImage: `url(/images/portfolio/ele2.jpg)`,
                }}
              />
            </div>
            <div className={styles.project_inner_desc_wrap}>
              <div className={styles.project_title}>코끼리교실</div>
              <div className={styles.project_desc}>기여도 60%</div>
              <div className={styles.project_tag}>
                <span>#PHP </span>
                <span>#HTML </span>
                <span>#CSS </span>
                <span>#jQuery </span>
                <span>#Bootstrap </span>
                <span>#반응형 </span>
              </div>
              <div className={styles.project_btn_wrap}>
                <Link
                  href="/elephantschool"
                  className={styles.project_btn_more}
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>

          {/* 헬스딕셔너리 */}
          <div>
            <div className={styles.project_img_wrap}>
              <div
                className={styles.project_img}
                style={{
                  backgroundImage: `url(/images/portfolio/hd3.jpg)`,
                }}
              />
            </div>
            <div className={styles.project_inner_desc_wrap}>
              <div className={styles.project_title}>헬스딕셔너리</div>
              <div className={styles.project_desc}>기여도 50%</div>
              <div className={styles.project_tag}>
                <span>#PHP </span>
                <span>#HTML </span>
                <span>#CSS </span>
                <span>#jQuery </span>
                <span>#반응형 </span>
              </div>
              <div className={styles.project_btn_wrap}>
                <Link
                  href="/healthdictionary"
                  className={styles.project_btn_more}
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>

          {/* i-rept */}
          <div>
            <div className={styles.project_img_wrap}>
              <div
                className={`${styles.project_img} ${styles.project_img_irept}`}
                style={{
                  backgroundImage: `url(/images/portfolio/irept4.png)`,
                }}
              />
            </div>
            <div className={styles.project_inner_desc_wrap}>
              <div className={styles.project_title}>i-rept</div>
              <div className={styles.project_desc}>기여도 30%</div>
              <div className={styles.project_tag}>
                <span>#PHP </span>
                <span>#HTML </span>
                <span>#CSS </span>
                <span>#jQuery </span>
                <span>#모바일 </span>
              </div>
              <div className={styles.project_btn_wrap}>
                <Link href="/irept" className={styles.project_btn_more}>
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className={styles.footer}>
        <div className={styles.footer_inner}>
          <div className={styles.solid_item03}>
            <img src="/images/portfolio/main_img04.png" alt="solid" />
          </div>
          <div className={styles.footer_title}>CONTACT</div>
          <div className={styles.footer_desc}>
            <div className={styles.footer_name}>석은지</div>
            <div className={styles.footer_mail}>myeunji720@naver.com</div>
            <div className={styles.footer_tel}>+82 10 3236 0267</div>
          </div>
          <div className={styles.footer_Copyright}>
            © 2024. All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  );
}
