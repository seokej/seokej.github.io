"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { HiMainStyled } from "../styled/HiMainStyled";

const ARTIST_SLIDES = [
  {
    img: "/images/hi/1NUEST.jpg",
    alt: "뉴이스트",
    group: "NU'EST",
    name: "JR",
  },
  { img: "/images/hi/2RM_re.jpg", alt: "RM", group: "BTS", name: "RM" },
  {
    img: "/images/hi/4SVT.jpg",
    alt: "세븐틴",
    group: "SEVENTEEN",
    name: "S.COUPS 에스쿱스",
  },
  {
    img: "/images/hi/5TXT.jpg",
    alt: "TXT",
    group: "TOMORROW X TOGETHER",
    name: "SOOBIN 수빈",
  },
  {
    img: "/images/hi/6ENHYPEN.jpg",
    alt: "ENHYPEN",
    group: "ENHYPEN",
    name: "JUNGWON 정원",
  },
];

const VIDEO_SRC =
  "https://player.vimeo.com/external/481238469.hd.mp4?s=ef50a0c08b833b145a735b659c71684c74eb24d9&profile_id=175";
const VIDEO_MD_SRC =
  "https://player.vimeo.com/external/481238518.hd.mp4?s=9d405bfef97d2c5c4c5a539ecf7d19648469f3e5&profile_id=174";

const HiMainComponent = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [openPanelKey, setOpenPanelKey] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isAnimatingRef = useRef(false);

  const handlePanelToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsPanelOpen((prev) => !prev);
  };

  const handlePanelClick = (e: React.MouseEvent, key: string) => {
    e.preventDefault();
    setOpenPanelKey((prev) => (prev === key ? null : key));
  };

  // 현재 보이는 섹션 감지 (애니메이션용)
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const index = Number((entry.target as HTMLElement).dataset.section);
          if (!Number.isNaN(index)) setCurrentSection(index);
        }
      },
      { root: container, threshold: 0.5 },
    );
    sectionRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // 휠 기반 커스텀 스크롤 스냅 (데스크톱 only)
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (event: WheelEvent) => {
      // 모바일 레이아웃(1279 이하)에서는 fullpage 스냅 비활성화
      if (window.innerWidth <= 1279) return;

      if (!sectionRefs.current.length) return;

      if (isAnimatingRef.current) return;

      const deltaY = event.deltaY;
      if (deltaY === 0) return;

      const direction = deltaY > 0 ? 1 : -1;
      const targetIndex = currentSection + direction;

      // section4에서 section5로 넘어갈 때만 스냅 허용
      if (currentSection === 3 && targetIndex === 4) {
        event.preventDefault();

        const targetSection = sectionRefs.current[4];
        if (!targetSection) return;

        isAnimatingRef.current = true;
        targetSection.scrollIntoView({ behavior: "smooth" });

        setTimeout(() => {
          isAnimatingRef.current = false;
        }, 800);
        return;
      }

      // section5(인덱스 4)에 도달한 이후에는 fullpage 스크롤 비활성화 (기본 스크롤만 사용)
      if (currentSection >= 4) {
        return;
      }

      // section1~4(인덱스 0~3) 사이에서만 스냅 허용
      if (targetIndex < 0 || targetIndex >= 4) {
        return;
      }

      // 이 시점부터는 fullpage 스냅이므로 기본 스크롤 막기
      event.preventDefault();

      const targetSection = sectionRefs.current[targetIndex];
      if (!targetSection) return;

      isAnimatingRef.current = true;
      targetSection.scrollIntoView({ behavior: "smooth" });

      // 애니메이션 동안 추가 휠 입력 잠시 무시
      setTimeout(() => {
        isAnimatingRef.current = false;
      }, 800);
    };

    // passive: false 로 등록해야 preventDefault 가능
    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, [currentSection]);

  return (
    <HiMainStyled>
      {/* 모바일 상단 */}
      <div className="m_top">
        <div className="m_inner">
          <div className="m_logo_box">
            <Link href="/hi#" className="m_logo">
              <span className="blind">하이브인사이트</span>
            </Link>
          </div>
          <div className="m_right_box">
            <ul className="m_right">
              <li>
                <Link href="/hi#">
                  <span className="m_icon_notice"></span>
                </Link>
              </li>
              <li>
                <Link href="/hi#">
                  <span className="m_icon_person"></span>
                </Link>
              </li>
              <li>
                <Link href="/hi#" onClick={handlePanelToggle}>
                  <span className="m_icon_ham"></span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 모바일 섹션 */}
      <div className="m_section">
        <div className="m_section1">
          <div className="m_inner2">
            <div className="m_left_text">
              <p> we believe in music </p>
            </div>
            <div className="m_video_box">
              <video
                muted
                loop
                autoPlay
                playsInline
                className="m_video"
                src={VIDEO_SRC}
              />
            </div>
          </div>
        </div>

        <div className="m_section2">
          <div className="m_mask_bg">
            <span className="m_brown_bg"></span>
            <span className="m_black_bg"></span>
          </div>
          <div className="m_inner2">
            <div className="m_masking_wrap">
              <p className="m_masking m_text">
                우리는 음악으로 사람들의
                <br />
                마음을 움직이고, 선한 영향력을 통해
                <br />
                사람들의 삶을 변화 시킵니다.
              </p>
            </div>
            <Image
              className="m_mainimg"
              src="/images/hi/mm_main_small.jpg"
              alt=""
              width={270}
              height={200}
              style={{ width: "auto", height: "auto" }}
            />
            <span className="m_white_line"></span>
            <span className="m_black_line"></span>
            <h1 className="m_scale">INSIGHT</h1>
          </div>
        </div>

        <div className="m_section3">
          <div className="m_artist">
            <h1 className="m_docent">
              ARTIST <br />
              DOCENT
            </h1>
            <p className="m_desc">
              당신이 함께 하고싶은 아티스트와 함께 <br />
              HYBE INSIGHT를 즐겨 보세요.
            </p>
          </div>
          <Swiper
            modules={[Pagination, Navigation]}
            className="swiper-container m_b"
            slidesPerView={1}
            slidesPerGroup={1}
            spaceBetween={0}
            centeredSlides
            loop
            pagination={{ type: "fraction", clickable: true }}
            navigation={{
              nextEl: ".m_section3 .swiper-button-next",
              prevEl: ".m_section3 .swiper-button-prev",
            }}
          >
            {ARTIST_SLIDES.map((slide, idx) => (
              <SwiperSlide key={idx}>
                <div className="slide_box">
                  <Image
                    src={slide.img}
                    alt={slide.alt}
                    width={312}
                    height={400}
                    style={{ width: "100%", height: "auto" }}
                  />
                  <div className="slide_text">
                    <h1>
                      {" "}
                      {slide.group} <br />
                      <strong> {slide.name} </strong>
                    </h1>
                    <p>
                      {" "}
                      Enjoy the experience of <br />
                      &apos;HYBE INSIGHT&apos; with me{" "}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="slide-btn">
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </div>
        </div>

        <div className="m_section4">
          <div className="box">
            <div className="m_marquee">
              <p>
                EXCLUSIVE HYBE INSIGHT&nbsp;&nbsp;&nbsp;&nbsp;EXCLUSIVE HYBE
                INSIGHT&nbsp;&nbsp;&nbsp;
              </p>
            </div>
          </div>
          <div className="m_inner2">
            <p className="m_MD">
              {" "}
              방문 D-DAY 00시부터 위버스샵에서 HYBE INSIGHT 전용 MD 상품을
              구매할 수 있습니다.{" "}
            </p>
            <Link href="/hi#" className="m_shop">
              {" "}
              위버스샵{" "}
            </Link>
            <div className="m_md_wrap">
              <ul className="m_md_ul">
                <li>
                  <Image
                    src="/images/hi/museum_official_MD_1.jpg"
                    alt="md1"
                    fill
                    sizes="156px"
                  />
                </li>
                <li>
                  <Image
                    src="/images/hi/museum_official_MD_2.jpg"
                    alt="md2"
                    fill
                    sizes="156px"
                  />
                </li>
                <li>
                  <Image
                    src="/images/hi/museum_official_MD_3.jpg"
                    alt="md3"
                    fill
                    sizes="156px"
                  />
                </li>
                <li>
                  <Image
                    src="/images/hi/museum_official_MD_4.jpg"
                    alt="md4"
                    fill
                    sizes="156px"
                  />
                </li>
              </ul>
            </div>
            <div className="m_s5_video">
              <video
                muted
                autoPlay
                loop
                playsInline
                className="video"
                src={VIDEO_MD_SRC}
              />
            </div>
          </div>

          <div className="m_footer">
            <div className="m_inner2">
              <div className="m_f_logo">
                <span className="m_f_logo_hybe"></span>
              </div>
              <div className="m_f_right">
                <div className="m_address">
                  <h1>Address</h1>
                  <p>
                    B1/B2, HYBE YONGSAN, 42, Hangang-daero, Yongsan-gu, Seoul,
                    Republic of Korea
                  </p>
                  <p>서울특별시 용산구 한강대로 42, 하이브 용산 B1/B2층</p>
                  <ul className="m_f_ul">
                    <li>
                      <Link href="/hi#">개인정보처리방침</Link>
                    </li>
                    <li>
                      <Link href="/hi#">이용약관</Link>
                    </li>
                    <li>
                      <Link href="/hi#">유료서비스이용약관</Link>
                    </li>
                    <li>
                      <Link href="/hi#">영상정보처리기기운영방침</Link>
                    </li>
                  </ul>
                </div>
                <div className="m_f_hybe">
                  <strong>㈜HYBE</strong>
                  <p>
                    서울시 용산구 한강대로 42 <br />
                    사업자등록번호 120-86-78223 <br />
                    통신판매업 신고번호 2020-서울강남-0098zk0 <br />
                    대표이사 박지원 <br />
                    고객 문의 : insight_contact@hybeinsight.com <br />
                  </p>
                  <p>©HYBE. ALL RIGHTS RESERVED.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 데스크톱 헤더 + fullpage (fp-viewing 조상 필요) */}
      <div className={`fp-viewing-${currentSection}`}>
        <header>
          <div className="top">
            <div className="top_inner">
              <div className="left_logo_box fade2">
                <Link href="/hi#" className="left_logo"></Link>
                <div className="left_text fade2">
                  <p>we</p>
                  <p>believe in</p>
                  <p>music</p>
                </div>
              </div>
              <div className="logo fade2">
                <Link href="/hi#"></Link>
              </div>
              <div className="nav_wrap">
                <ul className="nav fade2">
                  <li>
                    <Link href="/hi#"> 전시 </Link>
                  </li>
                  <li>
                    <Link href="/hi?variant=sub"> 관람안내 </Link>
                  </li>
                  <li>
                    <Link href="/hi#"> 방문예약 </Link>
                  </li>
                  <li>
                    <Link href="/hi#"> MY </Link>
                  </li>
                </ul>
              </div>
              <div className="right">
                <ul className="right_ul">
                  <li className="lang">
                    <div className="lang_drop_list">
                      <button type="button" className="lang_button">
                        <span>한국어</span>
                        <span className="blind">언어선택</span>
                      </button>
                      <div className="lang_drop">
                        <ul className="lang_drop_ul">
                          <li className="m_t">
                            <Link href="/hi#"> 한국어 </Link>
                          </li>
                          <li>
                            <Link href="/hi#"> English </Link>
                          </li>
                          <li>
                            <Link href="/hi#"> 日本語 </Link>
                          </li>
                          <li>
                            <Link href="/hi#"> 中國語 (简体) </Link>
                          </li>
                          <li>
                            <Link href="/hi#"> 中國語 (繁體) </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link href="/hi#">
                      <span className="icon_person"></span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/hi#"
                      className="ham_wrap"
                      onClick={handlePanelToggle}
                    >
                      <span className="icon_ham"></span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <span className="bottom_line fade2"></span>
          </div>

          <div className={`panel_wrap ${isPanelOpen ? "active" : ""}`}>
            <div className="icon_ham_panel">
              <div className="panel_head">
                <Link href="/hi#" className="panel_logo"></Link>
                <span
                  className="panel_close"
                  role="button"
                  tabIndex={0}
                  onClick={handlePanelToggle}
                  onKeyDown={(e) => e.key === "Enter" && setIsPanelOpen(false)}
                  aria-label="패널 닫기"
                ></span>
              </div>
              <div className="panel_body">
                <ul className="panel_body_ul">
                  <li
                    className={`panel_body_li ${openPanelKey === "exhibition" ? "open" : ""}`}
                  >
                    <button
                      type="button"
                      className="panel_click"
                      onClick={(e) => handlePanelClick(e, "exhibition")}
                    >
                      {" "}
                      전시{" "}
                    </button>
                    <ul className="panel_drop_ul">
                      <li>
                        <Link href="/hi#"> HYBE INSIGHT 소개 </Link>
                      </li>
                      <li>
                        <Link href="/hi#"> 기획전시 </Link>
                      </li>
                      <li>
                        <Link href="/hi#"> 뮤지엄샵 </Link>
                      </li>
                    </ul>
                  </li>
                  <li
                    className={`panel_body_li ${openPanelKey === "guide" ? "open" : ""}`}
                  >
                    <button
                      type="button"
                      className="panel_click"
                      onClick={(e) => handlePanelClick(e, "guide")}
                    >
                      {" "}
                      관람안내{" "}
                    </button>
                    <ul className="panel_drop_ul">
                      <li>
                        <Link href="/hi#"> 공지사항 </Link>
                      </li>
                      <li>
                        <Link href="/hi?variant=sub"> 관람안내 </Link>
                      </li>
                      <li>
                        <Link href="/hi#"> FAQ </Link>
                      </li>
                      <li>
                        <Link href="/hi#"> 오시는길 </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="panel_body_li">
                    <Link href="/hi#" className="panel_click">
                      {" "}
                      방문예약{" "}
                    </Link>
                  </li>
                  <li
                    className={`panel_body_li ${openPanelKey === "my" ? "open" : ""}`}
                  >
                    <button
                      type="button"
                      className="panel_click"
                      onClick={(e) => handlePanelClick(e, "my")}
                    >
                      {" "}
                      MY{" "}
                    </button>
                    <ul className="panel_drop_ul">
                      <li>
                        <Link href="/hi#"> 방문예약내역 </Link>
                      </li>
                      <li>
                        <Link href="/hi#"> 쿠폰함 </Link>
                      </li>
                      <li>
                        <Link href="/hi#"> 개인정보 변경 </Link>
                      </li>
                      <li>
                        <Link href="/hi#"> 서베이 </Link>
                      </li>
                      <li>
                        <Link href="/hi#"> 설정 </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className={`icon_ham_overlay ${isPanelOpen ? "active" : ""}`}
              role="button"
              tabIndex={0}
              onClick={handlePanelToggle}
              onKeyDown={(e) => e.key === "Enter" && setIsPanelOpen(false)}
              aria-label="패널 닫기"
            ></div>
          </div>
        </header>

        {/* 데스크톱 fullpage */}
        <div className="a" style={{ position: "relative" }}>
          <div
            id="fullpage"
            ref={scrollContainerRef}
            style={{
              height: "100vh",
              overflowY: "auto",
            }}
          >
            <div
              id="section1"
              className="section"
              data-section={0}
              ref={(el) => {
                sectionRefs.current[0] = el;
              }}
              style={{ height: "100vh" }}
            >
              <div className="video_box">
                <video
                  muted
                  loop
                  autoPlay
                  playsInline
                  className="video"
                  src={VIDEO_SRC}
                />
              </div>
              <div className="inner">
                <div className="right_text">
                  <p> we believe in music </p>
                </div>
              </div>
            </div>

            <div
              id="section2"
              className="section"
              data-section={1}
              ref={(el) => {
                sectionRefs.current[1] = el;
              }}
              style={{ height: "100vh" }}
            >
              <div
                className={`bg_black ${currentSection === 1 ? "animate" : ""}`}
                key={currentSection === 1 ? "animate" : "idle"}
              ></div>
              <div className="inner">
                <div className="masking_wrap">
                  <p className="masking text1">
                    {" "}
                    우리는 음악으로 사람들의
                    <br />{" "}
                  </p>
                </div>
                <div className="masking_wrap">
                  <p className="masking text2">
                    {" "}
                    마음을 움직이고, 선한 영향력을 통해
                    <br />{" "}
                  </p>
                </div>
                <div className="masking_wrap">
                  <p className="masking text3">사람들의 삶을 변화 시킵니다.</p>
                </div>
                <span className="white_line"></span>
              </div>
            </div>

            <div
              id="section3"
              className="section black"
              data-section={2}
              ref={(el) => {
                sectionRefs.current[2] = el;
              }}
              style={{ height: "100vh" }}
            >
              <span className="black_line"></span>
              <h1 className="scale">INSIGHT</h1>
              <div className="mask_box">
                <div className="slide_itm">
                  <div className="mask_img">
                    <Image
                      src="/images/hi/mm_main.jpg"
                      alt="건물"
                      width={1200}
                      height={800}
                      unoptimized
                      style={{
                        width: "auto",
                        height: "auto",
                      }}
                    />
                    <span className="gradient_cover"></span>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="section4"
              className="section black"
              data-section={3}
              ref={(el) => {
                sectionRefs.current[3] = el;
              }}
              style={{ height: "100vh" }}
            >
              <div className="inner">
                <div className="artist">
                  <h1 className="docent">
                    ARTIST <br />
                    DOCENT
                  </h1>
                  <span className="desc">
                    당신이 함께 하고싶은 아티스트와 함께 <br />
                    HYBE INSIGHT를 즐겨 보세요.
                  </span>
                </div>
                <Swiper
                  modules={[Pagination, Navigation]}
                  className="swiper-container b"
                  slidesPerView={1}
                  slidesPerGroup={1}
                  spaceBetween={0}
                  centeredSlides
                  loop
                  pagination={{ type: "fraction", clickable: true }}
                  navigation={{
                    nextEl: "#section4 .swiper-button-next",
                    prevEl: "#section4 .swiper-button-prev",
                  }}
                >
                  {ARTIST_SLIDES.map((slide, idx) => (
                    <SwiperSlide key={idx}>
                      <div className="slide_box">
                        <Image
                          src={slide.img}
                          alt={slide.alt}
                          width={312}
                          height={400}
                          style={{ width: 312, height: 400 }}
                        />
                        <div className="slide_text">
                          <h1>
                            {" "}
                            {slide.group} <br />
                            <strong> {slide.name} </strong>
                          </h1>
                          <p>
                            {" "}
                            Enjoy the experience of &apos;HYBE INSIGHT&apos;
                            with me{" "}
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="slide-btn">
                  <div className="swiper-button-next"></div>
                  <div className="swiper-button-prev"></div>
                </div>
              </div>
            </div>

            <div
              id="section5"
              className="section"
              data-section={4}
              ref={(el) => {
                sectionRefs.current[4] = el;
              }}
              style={{ minHeight: "100vh" }}
            >
              <div className="box">
                <div className="marquee">
                  <p>
                    EXCLUSIVE HYBE INSIGHT&nbsp;&nbsp;&nbsp;&nbsp;EXCLUSIVE HYBE
                    INSIGHT&nbsp;&nbsp;&nbsp;
                  </p>
                </div>
              </div>
              <p className="MD">
                {" "}
                방문 D-DAY 00시부터 위버스샵에서 HYBE INSIGHT 전용 MD 상품을
                구매할 수 있습니다.{" "}
              </p>
              <Link href="/hi#" className="shop">
                {" "}
                위버스샵{" "}
              </Link>
              <ul className="md_ul">
                <li>
                  <Image
                    src="/images/hi/museum_official_MD_1.jpg"
                    alt="md1"
                    fill
                    sizes="384px"
                  />
                </li>
                <li>
                  <Image
                    src="/images/hi/museum_official_MD_2.jpg"
                    alt="md2"
                    fill
                    sizes="384px"
                  />
                </li>
                <li>
                  <Image
                    src="/images/hi/museum_official_MD_3.jpg"
                    alt="md3"
                    fill
                    sizes="384px"
                    unoptimized
                  />
                </li>
                <li>
                  <Image
                    src="/images/hi/museum_official_MD_4.jpg"
                    alt="md4"
                    fill
                    sizes="384px"
                  />
                </li>
              </ul>
              <div className="s5_video">
                <video
                  muted
                  autoPlay
                  loop
                  playsInline
                  className="video"
                  src={VIDEO_MD_SRC}
                />
              </div>

              <footer>
                <div className="footer">
                  <div className="inner">
                    <div className="f_logo">
                      <span className="f_logo_hybe"></span>
                    </div>
                    <div className="f_right">
                      <div className="address">
                        <h1>Address</h1>
                        <p>
                          B1/B2, HYBE YONGSAN, 42, Hangang-daero, Yongsan-gu,
                          Seoul, Republic of Korea
                        </p>
                        <p>
                          서울특별시 용산구 한강대로 42, 하이브 용산 B1/B2층
                        </p>
                        <ul className="f_ul">
                          <li>
                            <Link href="/hi#">개인정보처리방침</Link>
                          </li>
                          <li>
                            <Link href="/hi#">이용약관</Link>
                          </li>
                          <li>
                            <Link href="/hi#">유료서비스이용약관</Link>
                          </li>
                          <li>
                            <Link href="/hi#">영상정보처리기기운영방침</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="f_hybe">
                        <strong>㈜HYBE</strong>
                        <p>
                          서울시 용산구 한강대로 42 <br />
                          사업자등록번호 120-86-78223 <br />
                          통신판매업 신고번호 2020-서울강남-0098zk0 <br />
                          대표이사 방시혁 <br />
                          insight_contact@hybeinsight.com
                        </p>
                        <p>©HYBE. ALL RIGHTS RESERVED.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </HiMainStyled>
  );
};

export default HiMainComponent;
