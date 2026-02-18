"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";
import { PearlabyssMainStyled } from "../styled/PearlabyssMainStyled";

const PearlabyssMainComponent = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isLangKor, setIsLangKor] = useState(true);
  const [activeFooter, setActiveFooter] = useState<string | null>(null);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const slideSwiperRef = useRef<SwiperType | null>(null);
  const newsSwiperRef = useRef<SwiperType | null>(null);
  const lastSwiperRef = useRef<SwiperType | null>(null);

  // 현재 경로에서 쿼리 파라미터를 제거한 경로
  const basePath = "/pearlabyss";

  // 메뉴 토글 핸들러
  const handleMenuToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  };

  // 드롭다운 메뉴 클릭 핸들러
  const handleDropdownClick = (menuName: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (activeDropdown !== menuName) {
      setActiveDropdown(menuName);
    } else {
      setActiveDropdown(null);
    }
  };

  // 푸터 아코디언 클릭 핸들러
  const handleFooterClick = (footerName: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (activeFooter !== footerName) {
      setActiveFooter(footerName);
    } else {
      setActiveFooter(null);
    }
  };

  // 스크롤 시 헤더 고정
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > 70) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // AOS 초기화
  useEffect(() => {
    if (typeof window === "undefined") return;

    AOS.init({
      easing: "ease-out-back",
      duration: 1000,
      once: false,
      mirror: false,
    });

    // 컴포넌트 언마운트 시 AOS 정리
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <PearlabyssMainStyled>
      <header>
        <div className={`main_inner ${isHeaderFixed ? "fixed" : ""}`} id="lnb">
          <div className="top_wrap">
            <div className="top_inner">
              <div className="logo">
                <Link href={basePath} shallow className="logo_box">
                  <span className="blind">펄어비스</span>
                </Link>
              </div>

              <div className="option">
                <ul>
                  <li>
                    <button
                      type="button"
                      className={isLangKor ? "true" : "false"}
                      onClick={() => setIsLangKor(true)}
                    >
                      KOR
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className={!isLangKor ? "true" : "false"}
                      onClick={() => setIsLangKor(false)}
                    >
                      ENG
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <button
            className={`menu-trigger ${isMenuOpen ? "active" : ""}`}
            id="action"
            onClick={handleMenuToggle}
            aria-label="메뉴 열기/닫기"
          >
            <span className="nav_line btn_top"></span>
            <span className="nav_line btn_center"></span>
            <span className="nav_line btn_bottom"></span>
          </button>

          <div className={`nav_wrap ${isMenuOpen ? "active" : ""}`}>
            <nav className="nav">
              <div className="navmenu">
                <ul>
                  <li
                    className={`menu ${activeDropdown === "intro" ? "active" : ""}`}
                  >
                    <button
                      type="button"
                      id="dropclick"
                      onClick={(e) => handleDropdownClick("intro", e)}
                    >
                      소개
                    </button>
                    <div
                      className={`dropmenu ${
                        activeDropdown === "intro" ? "active" : ""
                      }`}
                    >
                      <ul className="sub_list">
                        <li>
                          <Link href="/pearlabyss#">
                            <span>펄어비스 소개</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/pearlabyss#">
                            <span>연구소</span>
                          </Link>
                        </li>
                      </ul>
                      <span className="line"></span>
                    </div>
                  </li>
                  <li
                    className={`menu ${activeDropdown === "game" ? "active" : ""}`}
                  >
                    <button
                      type="button"
                      id="dropclick"
                      onClick={(e) => handleDropdownClick("game", e)}
                    >
                      게임
                    </button>
                    <div
                      className={`dropmenu ${
                        activeDropdown === "game" ? "active" : ""
                      }`}
                    >
                      <ul className="sub_list">
                        <li>
                          <Link href="/pearlabyss#">
                            <span>검은사막</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/pearlabyss#">
                            <span>검은사막 모바일</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/pearlabyss#">
                            <span>섀도우 아레나</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/pearlabyss#">
                            <span>붉은사막</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/pearlabyss#">
                            <span>도깨비</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/pearlabyss#">
                            <span>플랜 8</span>
                          </Link>
                        </li>
                      </ul>
                      <span className="line"></span>
                    </div>
                  </li>
                  <li
                    className={`menu ${activeDropdown === "media" ? "active" : ""}`}
                  >
                    <button
                      type="button"
                      id="dropclick"
                      onClick={(e) => handleDropdownClick("media", e)}
                    >
                      미디어
                    </button>
                    <div
                      className={`dropmenu ${
                        activeDropdown === "media" ? "active" : ""
                      }`}
                    >
                      <ul className="sub_list">
                        <li>
                          <Link href="/pearlabyss#">
                            <span>보도자료</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/pearlabyss#">
                            <span>미디어 행사</span>
                          </Link>
                        </li>
                      </ul>
                      <span className="line"></span>
                    </div>
                  </li>
                  <li
                    className={`menu ${activeDropdown === "culture" ? "active" : ""}`}
                  >
                    <button
                      type="button"
                      id="dropclick"
                      onClick={(e) => handleDropdownClick("culture", e)}
                    >
                      문화
                    </button>
                    <div
                      className={`dropmenu ${
                        activeDropdown === "culture" ? "active" : ""
                      }`}
                    >
                      <ul className="sub_list">
                        <li>
                          <Link href="/pearlabyss#">
                            <span>기업문화</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/pearlabyss#">
                            <span>복지</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/pearlabyss#">
                            <span>펄어비스인</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/pearlabyss#">
                            <span>펄어비스 소식</span>
                          </Link>
                        </li>
                      </ul>
                      <span className="line"></span>
                    </div>
                  </li>
                  <li
                    className={`menu ${activeDropdown === "career" ? "active" : ""}`}
                  >
                    <button
                      type="button"
                      id="dropclick"
                      onClick={(e) => handleDropdownClick("career", e)}
                    >
                      채용
                    </button>
                    <div
                      className={`dropmenu ${
                        activeDropdown === "career" ? "active" : ""
                      }`}
                    >
                      <ul className="sub_list">
                        <li>
                          <Link href="/pearlabyss#">
                            <span>채용소개</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/pearlabyss#">
                            <span>지원하기</span>
                          </Link>
                        </li>
                      </ul>
                      <span className="line"></span>
                    </div>
                  </li>
                  <li
                    className={`menu ${activeDropdown === "invest" ? "active" : ""}`}
                  >
                    <button
                      type="button"
                      id="dropclick"
                      onClick={(e) => handleDropdownClick("invest", e)}
                    >
                      투자정보
                    </button>
                    <div
                      className={`dropmenu ${
                        activeDropdown === "invest" ? "active" : ""
                      }`}
                    >
                      <ul className="sub_list">
                        <li>
                          <Link href="/pearlabyss?variant=sub">
                            <span>기업지배구조</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/pearlabyss#">
                            <span>주가정보</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/pearlabyss#">
                            <span>재무정보</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/pearlabyss#">
                            <span>공시·공고</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/pearlabyss#">
                            <span>IR자료</span>
                          </Link>
                        </li>
                      </ul>
                      <span className="line"></span>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <section className="slide">
        <div className="swiper-container a main">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              el: "#slidePagination",
              clickable: true,
            }}
            navigation={{
              nextEl: "#slideNext",
              prevEl: "#slidePrev",
            }}
            onSwiper={(swiper) => {
              slideSwiperRef.current = swiper;
            }}
          >
            <SwiperSlide id="slide1">
              <Link
                href="/pearlabyss#"
                className="slide_item on"
                target="_blank"
              >
                <Image
                  src="/images/pearlabyss/9EFKZ7YRZ6AZXM3220210226052125126.jpg"
                  alt="5th"
                  width={1920}
                  height={1080}
                  style={{ objectFit: "contain" }}
                  priority
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide id="slide2">
              <Link href="/pearlabyss#" className="slide_item" target="_blank">
                <Image
                  src="/images/pearlabyss/C48K2D3ERF9CXYFU20201211010830972.jpg"
                  alt="붉은사막"
                  width={1920}
                  height={1080}
                  style={{ objectFit: "contain" }}
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide id="slide3">
              <Link
                href="/pearlabyss#"
                className="slide_item on"
                target="_self"
              >
                <h3 className="title">
                  새롭고, 흥미롭고, 잊지 못할 모험을 선사하는 <br />{" "}
                  자기혁신적인 게임 회사, 펄어비스
                </h3>
                <Image
                  src="/images/pearlabyss/MMYPV8QO5YRX0F7820200908081836459.jpg"
                  alt="회사펄어비스"
                  width={1920}
                  height={1080}
                  style={{ objectFit: "contain" }}
                />
              </Link>
            </SwiperSlide>
          </Swiper>
          <div className="swiper-pagination" id="slidePagination"></div>
          <div className="slide-btn">
            <div className="swiper-button-next" id="slideNext"></div>
            <div className="swiper-button-prev" id="slidePrev"></div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="news_wrap">
          <h3>NEWS</h3>

          <div className="news_list">
            <div className="news_item">
              <Link href="/pearlabyss#" className="item">
                <h4>
                  펄어비스 섀도우 아레나, 신규 영웅 &apos;아타락시아&apos;
                  업데이트
                </h4>
                <p className="date">2021.03.19</p>
                <p className="desc">
                  펄어비스(대표 정경인)가 궁극의 액션 PvP(Player VS Player,
                  이용자간 대결) 섀도우 아레나의 신규 영웅
                  &apos;아타락시아&apos;를 업데이트했다.
                </p>
              </Link>
            </div>
            <div className="news_item">
              <Link href="/pearlabyss#" className="item">
                <h4>
                  &apos;최후의 고대인 세이지&apos;, 펄어비스 검은사막 신규
                  클래스 사전 생성 이벤트 시작
                </h4>
                <p className="date">2021.03.17</p>
                <p className="desc">
                  펄어비스(대표 정경인)가 검은사막의 22번째 신규 클래스
                  &apos;세이지&apos; 사전 생성 이벤트를 오늘(17일)부터 시작한다.
                </p>
              </Link>
            </div>
            <div className="news_item">
              <Link href="/pearlabyss#" className="item">
                <h4>
                  &apos;22번째 신규 클래스&apos; 펄어비스 검은사막, 최후의
                  고대인 &apos;세이지&apos; 공개
                </h4>
                <p className="date">2021.03.12</p>
                <p className="desc">
                  펄어비스(대표 정경인)가 &apos;검은사막&apos; 공식 유튜브를
                  통해 22번째 신규 클래스 &apos;세이지&apos;의 &apos;개발자
                  코멘터리 영상&apos;을 오늘(12일) 공개했다.
                </p>
              </Link>
            </div>
          </div>

          <div className="news_slide">
            <Swiper
              modules={[Pagination]}
              className="swiper-container"
              slidesPerView={1}
              spaceBetween={30}
              centeredSlides={true}
              loop={false}
              pagination={{
                el: "#newsPagination",
                clickable: true,
              }}
              breakpoints={{
                768: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                  loop: false,
                },
              }}
              onSwiper={(swiper) => {
                newsSwiperRef.current = swiper;
              }}
            >
              <SwiperSlide>
                <div className="news_item">
                  <Link href="/pearlabyss#" className="item">
                    <h4>
                      펄어비스 섀도우 아레나, 신규 영웅 &apos;아타락시아&apos;
                      업데이트
                    </h4>
                    <p className="date">2021.03.19</p>
                    <p className="desc">
                      펄어비스(대표 정경인)가 궁극의 액션 PvP(Player VS Player,
                      이용자간 대결) 섀도우 아레나의 신규 영웅
                      &apos;아타락시아&apos;를 업데이트했다.
                    </p>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="news_item">
                  <Link href="/pearlabyss#" className="item">
                    <h4>
                      &apos;최후의 고대인 세이지&apos;, 펄어비스 검은사막 신규
                      클래스 사전 생성 이벤트 시작
                    </h4>
                    <p className="date">2021.03.17</p>
                    <p className="desc">
                      펄어비스(대표 정경인)가 검은사막의 22번째 신규 클래스
                      &apos;세이지&apos; 사전 생성 이벤트를 오늘(17일)부터
                      시작한다.
                    </p>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="news_item">
                  <Link href="/pearlabyss#" className="item">
                    <h4>
                      &apos;22번째 신규 클래스&apos; 펄어비스 검은사막, 최후의
                      고대인 &apos;세이지&apos; 공개
                    </h4>
                    <p className="date">2021.03.12</p>
                    <p className="desc">
                      펄어비스(대표 정경인)가 &apos;검은사막&apos; 공식 유튜브를
                      통해 22번째 신규 클래스 &apos;세이지&apos;의 &apos;개발자
                      코멘터리 영상&apos;을 오늘(12일) 공개했다.
                    </p>
                  </Link>
                </div>
              </SwiperSlide>
            </Swiper>

            <div className="swiper-pagination" id="newsPagination"></div>
          </div>
        </div>

        <div className="main_item_wrap" data-aos="fade-up">
          <Link href="/pearlabyss#" className="menu_item one">
            <div className="scale mainitem">
              <i className="mainitem_image">
                <Image
                  src="/images/pearlabyss/main_category_company.jpg"
                  alt="펄어비스"
                  width={288}
                  height={576}
                  style={{ width: "100%", height: "auto" }}
                />
              </i>
              <div className="info">
                <h4 className="info_title">펄어비스</h4>
                <p className="info_desc">우리의 비전과 가치</p>
              </div>
            </div>
          </Link>

          <Link href="/pearlabyss#" className="menu_item two">
            <div className="scale mainitem">
              <i className="mainitem_image">
                <Image
                  src="/images/pearlabyss/main_category_lab.jpg"
                  alt="연구소"
                  width={288}
                  height={576}
                  style={{ width: "100%", height: "auto" }}
                />
              </i>
              <div className="info">
                <h4 className="info_title">연구소</h4>
                <p className="info_desc">한계를 뛰어넘는 곳</p>
              </div>
            </div>
          </Link>

          <Link href="/pearlabyss#" className="menu_item three">
            <div className="scale mainitem">
              <i className="mainitem_image">
                <Image
                  src="/images/pearlabyss/main_category_culture.jpg"
                  alt="문화"
                  width={288}
                  height={576}
                  style={{ width: "100%", height: "auto" }}
                />
              </i>
              <div className="info">
                <h4 className="info_title">문화</h4>
                <p className="info_desc">파괴적인 창조자</p>
              </div>
            </div>
          </Link>

          <Link href="/pearlabyss#" className="menu_item four">
            <div className="scale mainitem">
              <i className="mainitem_image">
                <Image
                  src="/images/pearlabyss/main_category_in.jpg"
                  alt="펄어비스인"
                  width={288}
                  height={576}
                  style={{ width: "100%", height: "auto" }}
                />
              </i>
              <div className="info">
                <h4 className="info_title">펄어비스인</h4>
                <p className="info_desc">꿈을 실현하는 사람들</p>
              </div>
            </div>
          </Link>

          <Link href="/pearlabyss#" className="menu_item five">
            <div className="scale mainitem">
              <i className="mainitem_image">
                <Image
                  src="/images/pearlabyss/main_category_news.jpg"
                  alt="소식"
                  width={288}
                  height={576}
                  style={{ width: "100%", height: "auto" }}
                />
              </i>
              <div className="info">
                <h4 className="info_title">소식</h4>
                <p className="info_desc">생생한 펄어비스 이야기</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="last_wrap">
          <Swiper
            modules={[Pagination]}
            className="swiper-container"
            slidesPerView={1}
            spaceBetween={0}
            pagination={{
              el: "#lastPagination",
              clickable: true,
            }}
            breakpoints={{
              640: { slidesPerGroup: 1, slidesPerView: 1, spaceBetween: 20 }, // 640px 이상: 1개
              641: { slidesPerGroup: 2, slidesPerView: 2, spaceBetween: 10 }, // 641px 이상: 2개 (640px 초과 ~ 767px 이하)
              768: { slidesPerView: 4, spaceBetween: 10 }, // 768px 이상 (767px보다 클 때) 4개
            }}
            onSwiper={(swiper) => {
              lastSwiperRef.current = swiper;
            }}
          >
            <SwiperSlide>
              <div className="bx_group">
                <div data-aos="fade-up" data-aos-duration="1000">
                  <Link href="/pearlabyss#">
                    <div className="scale">
                      <Image
                        src="/images/pearlabyss/FHVOJIYVQNQ3GE7820210401083853867.400x225.jpg"
                        alt="장기근속"
                        width={400}
                        height={225}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                    <div className="last_p_wrap">
                      <p className="small_title">펄어비스 소식</p>
                      <p className="small_title_item">
                        &quot;함께해 주셔서 고맙습니다&quot; 장기 근속 포상 제도
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bx_group">
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="100"
                >
                  <Link href="/pearlabyss#">
                    <div className="scale">
                      <Image
                        src="/images/pearlabyss/W6ISWNYRVTZRM1RU20201116033949629.400x225.jpg"
                        alt="북적프로젝트"
                        width={400}
                        height={225}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                    <div className="last_p_wrap">
                      <p className="small_title">펄어비스 소식</p>
                      <p className="small_title_item">
                        &quot;북(Book)적 북(Book)적&quot; 프로젝트
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bx_group">
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <Link href="/pearlabyss#">
                    <div className="scale">
                      <Image
                        src="/images/pearlabyss/HSBFBZME4VAOBHD020210201095633101.400x225.jpg"
                        alt="QA재능"
                        width={400}
                        height={225}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                    <div className="last_p_wrap">
                      <p className="small_title">펄어비스인</p>
                      <p className="small_title_item">
                        게임을 사랑한 프로게이머, QA의 재능을 발견하다
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bx_group bx4">
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                  <Link href="/pearlabyss#">
                    <div className="scale">
                      <Image
                        src="/images/pearlabyss/ZH8N0EMWUGYPBDVA20201221065321203.400x225.jpg"
                        alt="크리스마스"
                        width={400}
                        height={225}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                    <div className="last_p_wrap">
                      <p className="small_title">펄어비스 소식</p>
                      <p className="small_title_item">
                        펄어비스에 찾아온 크리스마스!
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <div className="swiper-pagination" id="lastPagination"></div>
        </div>
      </section>

      <footer>
        <div className="footer_wrap">
          <div className={`footer ${activeFooter === "intro" ? "active" : ""}`}>
            <button
              type="button"
              className="f_a_bold"
              onClick={(e) => handleFooterClick("intro", e)}
            >
              소개
              <span className="plus top"></span>
              <span className="plue bottom"></span>
            </button>
            <ul className="hide">
              <li>
                <Link href="/pearlabyss#">펄어비스 소개</Link>
              </li>
              <li>
                <Link href="/pearlabyss#">연구소</Link>
              </li>
            </ul>
          </div>
          <div className={`footer ${activeFooter === "game" ? "active" : ""}`}>
            <button
              type="button"
              className="f_a_bold"
              onClick={(e) => handleFooterClick("game", e)}
            >
              게임
              <span className="plus top"></span>
              <span className="plue bottom"></span>
            </button>
            <ul className="hide">
              <li>
                <Link href="/pearlabyss#">검은사막</Link>
              </li>
              <li>
                <Link href="/pearlabyss#">검은사막 모바일</Link>
              </li>
              <li>
                <Link href="/pearlabyss#">섀도우 아레나</Link>
              </li>
              <li>
                <Link href="/pearlabyss#">붉은사막</Link>
              </li>
              <li>
                <Link href="/pearlabyss#">도깨비</Link>
              </li>
              <li>
                <Link href="/pearlabyss#">플랜 8</Link>
              </li>
            </ul>
          </div>
          <div className={`footer ${activeFooter === "media" ? "active" : ""}`}>
            <button
              type="button"
              className="f_a_bold"
              onClick={(e) => handleFooterClick("media", e)}
            >
              미디어
              <span className="plus top"></span>
              <span className="plue bottom"></span>
            </button>
            <ul className="hide">
              <li>
                <Link href="/pearlabyss#">보도자료</Link>
              </li>
              <li>
                <Link href="/pearlabyss#">미디어 행사</Link>
              </li>
            </ul>
          </div>
          <div
            className={`footer ${activeFooter === "culture" ? "active" : ""}`}
          >
            <button
              type="button"
              className="f_a_bold"
              onClick={(e) => handleFooterClick("culture", e)}
            >
              문화
              <span className="plus top"></span>
              <span className="plue bottom"></span>
            </button>
            <ul className="hide">
              <li>
                <Link href="/pearlabyss#">기업문화</Link>
              </li>
              <li>
                <Link href="/pearlabyss#">복지</Link>
              </li>
              <li>
                <Link href="/pearlabyss#">펄어비스인</Link>
              </li>
              <li>
                <Link href="/pearlabyss#">펄어비스 소식</Link>
              </li>
            </ul>
          </div>
          <div
            className={`footer ${activeFooter === "career" ? "active" : ""}`}
          >
            <button
              type="button"
              className="f_a_bold"
              onClick={(e) => handleFooterClick("career", e)}
            >
              채용
              <span className="plus top"></span>
              <span className="plue bottom"></span>
            </button>
            <ul className="hide">
              <li>
                <Link href="/pearlabyss#">채용소개</Link>
              </li>
              <li>
                <Link href="/pearlabyss#">지원하기</Link>
              </li>
            </ul>
          </div>
          <div
            className={`footer ${activeFooter === "invest" ? "active" : ""}`}
          >
            <button
              type="button"
              className="f_a_bold"
              onClick={(e) => handleFooterClick("invest", e)}
            >
              투자정보
              <span className="plus top"></span>
              <span className="plue bottom"></span>
            </button>
            <ul className="hide">
              <li>
                <Link href="/pearlabyss#">기업지배구조</Link>
              </li>
              <li>
                <Link href="/pearlabyss#">주가정보</Link>
              </li>
              <li>
                <Link href="/pearlabyss#">재무정보</Link>
              </li>
              <li>
                <Link href="/pearlabyss#">공시·공고</Link>
              </li>
              <li>
                <Link href="/pearlabyss#">IR 자료</Link>
              </li>
            </ul>
          </div>

          <div className="footer f_1">
            <Link href="/pearlabyss#" className="f_a_bold f_2">
              광고/제휴 문의
            </Link>
          </div>
          <div className="footer f_1">
            <Link href="/pearlabyss#" className="f_a_bold f_2">
              기업윤리 신고센터
            </Link>
          </div>
          <div className="footer f_1">
            <Link href="/pearlabyss#" className="f_a_bold f_2">
              개인정보 처리방침
            </Link>
          </div>
          <div className="footer f_1">
            <Link href="/pearlabyss#" className="f_a_bold f_2">
              펄어비스 스토어
            </Link>
          </div>
          <div className="footer f_1">
            <Link href="/pearlabyss#" className="f_a_bold f_2">
              게임 고객센터
            </Link>
          </div>
        </div>

        <div className="copyright_wrap">
          <div className="copyright_inner">
            <div className="footer_sns">
              <Link href="/pearlabyss#">
                <div className="sns facebook"></div>
              </Link>
              <Link href="/pearlabyss#">
                <div className="sns youtube"></div>
              </Link>
              <Link href="/pearlabyss#">
                <div className="sns linkdin"></div>
              </Link>
            </div>

            <Link href="/pearlabyss#">
              <div className="cr_logo"></div>
            </Link>
            <div className="cr_item">
              Copyright © Pearl Abyss Corp. All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </PearlabyssMainStyled>
  );
};

export default PearlabyssMainComponent;
