import styles from "@/styles/Home.module.scss";
import { useEffect, useState } from "react";

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
    } else if (position > worksPosition && position < contactPosition) {
      setIsActive("works");
    } else if (position > contactPosition) {
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
            <img src="/images/portfolio/main_img01.png" alt="solid" />
          </div>
          <div className={styles.solid_item02}>
            <img src="/images/portfolio/main_img05.png" alt="solid" />
          </div>
        </div>
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
          <div className={styles.title}>UI DEVELOPER</div>
        </div>
      </main>

      <section id="works" className={styles.project_wrap}>
        <div className={styles.project_wrap_title}>
          PROJECT
          <div className={styles.project_wrap_subtitle}>(모두 기여도 100%)</div>
        </div>
        <div className={styles.project_inner}>
          <div>
            <div className={styles.project_img_wrap}>
              <a
                className={styles.project_img}
                style={{ backgroundImage: `url(/images/portfolio/sdf.png)` }}
              />
            </div>
            <div className={styles.project_inner_desc_wrap}>
              <div className={styles.project_title}>서울디지털재단</div>
              <div className={styles.project_desc}>
                NextJs의 편리한 라우팅, Axios를 이용한 API 통신,
                <br />
                TypeScript 사용으로 타입 안정성을 통한 개발 생산성 향상,
                <br />
                키보드 TAP키로 접근하는 사용자의 편의성을 생각하여 클론코딩한
                사이트입니다.
                <br />
                <br />
                [해당 사이트를 고른 이유]
                <br />웹 접근성 인증 마크를 받은 사이트의 클론 코딩을 통해
                인증마크를 받은 사이트들은 어떻게 짜여져 있는지 파악하는것이
                목표였습니다.
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
                <button className={styles.project_btn_view} onClick={() => {}}>
                  View Site
                  <img src="/images/portfolio/img_link.png" alt="링크이동" />
                </button>
                <button className={styles.project_btn_git} onClick={() => {}}>
                  github
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.project_img_wrap}>
              <a
                className={styles.project_img}
                style={{
                  backgroundImage: `url(/images/portfolio/netflix.png)`,
                }}
              />
            </div>
            <div className={styles.project_inner_desc_wrap}>
              <div className={styles.project_title}>넷플릭스</div>
              <div className={styles.project_desc}>넷플릭스 클론코딩</div>
              <div className={styles.project_tag}>
                <span>#REACT </span>
                <span>#TypeScript </span>
                <span>#SCSS </span>
                <span>#Swiper </span>
                <span>#반응형 </span>
              </div>
              <div className={styles.project_btn_wrap}>
                <button className={styles.project_btn_view} onClick={() => {}}>
                  View Site
                  <img src="/images/portfolio/img_link.png" alt="링크이동" />
                </button>
              </div>
            </div>
          </div>

          <div>
            <div className={styles.project_img_wrap}>
              <a
                className={styles.project_img}
                style={{ backgroundImage: `url(/images/portfolio/toss.png)` }}
              />
            </div>
            <div className={styles.project_inner_desc_wrap}>
              <div className={styles.project_title}>Toss</div>
              <div className={styles.project_desc}>Toss 클론코딩</div>
              <div className={styles.project_tag}>
                <span>#HTML </span>
                <span>#CSS </span>
                <span>#jQuery </span>
                <span>#GSAP </span>
                <span>#반응형 </span>
              </div>
              <div className={styles.project_btn_wrap}>
                <button className={styles.project_btn_view} onClick={() => {}}>
                  View Site
                  <img src="/images/portfolio/img_link.png" alt="링크이동" />
                </button>
                <button className={styles.project_btn_git} onClick={() => {}}>
                  github
                </button>
              </div>
            </div>
          </div>

          <div>
            <div className={styles.project_img_wrap}>
              <a
                className={styles.project_img}
                style={{ backgroundImage: `url(/images/portfolio/sdf.png)` }}
              />
            </div>
            <div className={styles.project_inner_desc_wrap}>
              <div className={styles.project_title}>서울 디지털 재단</div>
              <div className={styles.project_desc}>
                서울 디지털 재단 클론 코딩을 통한 웹 접근성, 반응형 작업
              </div>
              <div className={styles.project_tag}>
                <span>#react </span>
                <span>#typescript </span>
                <span>#nextJs </span>
              </div>
              <div className={styles.project_btn_wrap}>
                <button className={styles.project_btn_view} onClick={() => {}}>
                  View Site
                  <img src="/images/portfolio/img_link.png" alt="링크이동" />
                </button>
                <button className={styles.project_btn_git} onClick={() => {}}>
                  github
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.project_img_wrap}>
              <a
                className={styles.project_img}
                style={{ backgroundImage: `url(/images/portfolio/sdf.png)` }}
              />
            </div>
            <div className={styles.project_inner_desc_wrap}>
              <div className={styles.project_title}>서울 디지털 재단</div>
              <div className={styles.project_desc}>
                서울 디지털 재단 클론 코딩을 통한 웹 접근성, 반응형 작업
              </div>
              <div className={styles.project_tag}>
                <span>#react </span>
                <span>#typescript </span>
                <span>#nextJs </span>
              </div>
              <div className={styles.project_btn_wrap}>
                <button className={styles.project_btn_view} onClick={() => {}}>
                  View Site
                  <img src="/images/portfolio/img_link.png" alt="링크이동" />
                </button>
                <button className={styles.project_btn_git} onClick={() => {}}>
                  github
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.project_img_wrap}>
              <a
                className={styles.project_img}
                style={{ backgroundImage: `url(/images/portfolio/sdf.png)` }}
              />
            </div>
            <div className={styles.project_inner_desc_wrap}>
              <div className={styles.project_title}>서울 디지털 재단</div>
              <div className={styles.project_desc}>
                서울 디지털 재단 클론 코딩을 통한 웹 접근성, 반응형 작업
              </div>
              <div className={styles.project_tag}>
                <span>#react </span>
                <span>#typescript </span>
                <span>#nextJs </span>
              </div>
              <div className={styles.project_btn_wrap}>
                <div className={styles.project_btn_wrap}>
                  <button
                    className={styles.project_btn_more}
                    onClick={() => {}}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.project_img_wrap}>
              {" "}
              <a
                className={styles.project_img}
                style={{ backgroundImage: `url(/images/portfolio/sdf.png)` }}
              />
            </div>
            <div className={styles.project_inner_desc_wrap}>
              <div className={styles.project_title}>서울 디지털 재단</div>
              <div className={styles.project_desc}>
                서울 디지털 재단 클론 코딩을 통한 웹 접근성, 반응형 작업
              </div>
              <div className={styles.project_tag}>
                <span>#react </span>
                <span>#typescript </span>
                <span>#nextJs </span>
              </div>
              <div className={styles.project_btn_wrap}>
                <div className={styles.project_btn_wrap}>
                  <button
                    className={styles.project_btn_more}
                    onClick={() => {}}
                  >
                    Read More
                  </button>
                </div>
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
