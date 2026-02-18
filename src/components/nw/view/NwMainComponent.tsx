"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { NwMainStyled } from "../styled/NwMainStyled";

const NwMainComponent = () => {
  const [isDropmenuOpen, setIsDropmenuOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [openNavKey, setOpenNavKey] = useState<string | null>(null);
  const workSwiperRef = useRef<SwiperType | null>(null);
  const securitySwiperRef = useRef<SwiperType | null>(null);
  const customSwiperRef = useRef<SwiperType | null>(null);

  const handlePanelToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsNavOpen((prev) => !prev);
  };

  const handleMArrowClick = (e: React.MouseEvent, key: string) => {
    e.preventDefault();
    setOpenNavKey((prev) => (prev === key ? null : key));
  };

  const workSlides = [
    {
      subtx: "오늘 해야 할 일을\n더욱 빠르고 가볍게",
      h4: "시간 비용 걱정 없이\n화상미팅은\n",
      point: "웨일온",
      gif: "/images/nw/ww_01_on.gif",
      gifAlt: "웨일온",
      icon: "/images/nw/tasking_bn_icon_01.png",
      iconAlt: "듀얼 탭",
    },
    {
      subtx: "오늘 해야 할 일을\n더욱 빠르고 가볍게",
      h4: "필요한 기능은\n",
      point: "사이드바",
      suffix: "\n로 바로 쓰고!",
      gif: "/images/nw/ww_01_sidebar.gif",
      gifAlt: "사이드바",
      icon: "/images/nw/tasking_bn_icon_02.png",
      iconAlt: "사이드바",
    },
    {
      subtx: "오늘 해야 할 일을\n더욱 빠르고 가볍게",
      h4: "같이 보고 싶은 페이지는\n",
      point: "듀얼 탭",
      suffix: "\n으로 한 눈에!",
      gif: "/images/nw/ww_02_duletab.gif",
      gifAlt: "듀얼탭",
      icon: "/images/nw/tasking_bn_icon_03.png",
      iconAlt: "듀얼탭",
    },
    {
      subtx: "오늘 해야 할 일을\n더욱 빠르고 가볍게",
      h4: "궁금한 내용은 드래그하고\n바로바로 ",
      point: "퀵서치!",
      gif: "/images/nw/ww_01_quick.gif",
      gifAlt: "퀵서치",
      icon: "/images/nw/tasking_bn_icon_04.png",
      iconAlt: "퀵서치",
    },
    {
      subtx: "오늘 해야 할 일을\n더욱 빠르고 가볍게",
      h4: "필요한 이미지는 브라우저\n안에서 깔끔하게 ",
      point: "캡처!",
      gif: "/images/nw/ww_01_capture.gif",
      gifAlt: "캡처",
      icon: "/images/nw/tasking_bn_icon_05.png",
      iconAlt: "캡처",
    },
  ];

  const securitySlides = [
    {
      subtx: "알아서 차단해주는\n강력한 보안!",
      h4: "위조사이트 &\n악성 프로그램 차단\n",
      point: "세이프 브라우징",
      img: "/images/nw/ww_02_safe.gif",
      imgAlt: "세이프",
    },
    {
      subtx: "알아서 차단해주는\n강력한 보안!",
      h4: "불필요한 광고 없이\n",
      point: "클린 웹",
      img: "/images/nw/ww_02_safe_02.png",
      imgAlt: "클린웹",
    },
    {
      subtx: "알아서 차단해주는\n강력한 보안!",
      h4: "로그인 기기와 동기화를\n한눈에 ",
      point: "마이 액티비티",
      img: "/images/nw/ww_02_safe_03.png",
      imgAlt: "마이액티비티",
    },
  ];

  const customSlides = [
    {
      subtx: "내 취향으로 가득한\n취향 저격 브라우저",
      h4: "콘텐츠까지\n눈부심없이 선명하게!\n",
      point: "다크모드",
      img: "/images/nw/ww_03_dark.gif",
      imgAlt: "다크모드",
    },
    {
      subtx: "내 취향으로 가득한\n취향 저격 브라우저",
      h4: "편리한 기능과 감성을 더하는\n",
      point: "위젯 & 배경화면",
      img: "/images/nw/widget_bn_img.png",
      imgAlt: "위젯",
    },
    {
      subtx: "내 취향으로 가득한\n취향 저격 브라우저",
      h4: "열어볼수록 마음에 쏙!\n",
      point: "인터페이스",
      img: "/images/nw/interface_bn_img.png",
      imgAlt: "인터페이스",
    },
  ];

  return (
    <NwMainStyled>
      <header>
        <div className="top">
          <div className="logo_wrap">
            <div className="logo">
              <Link href="/nw#">
                <span className="blind">네이버웨일</span>
                <Image
                  src="/images/nw/logo_whale.png"
                  alt="로고"
                  width={200}
                  height={40}
                />
              </Link>
            </div>
          </div>

          <div className="nav_wrap">
            <div className="inner">
              <ul className="nav">
                <li
                  className="menu"
                  onMouseEnter={() => setIsDropmenuOpen(true)}
                >
                  <Link href="/nw#"> Why We Whale </Link>
                </li>
                <li
                  className="menu"
                  onMouseEnter={() => setIsDropmenuOpen(true)}
                >
                  <Link href="/nw#"> 가이드 </Link>
                </li>
                <li
                  className="menu"
                  onMouseEnter={() => setIsDropmenuOpen(true)}
                >
                  <Link href="/nw#"> 스토어 </Link>
                </li>
                <li
                  className="menu"
                  onMouseEnter={() => setIsDropmenuOpen(true)}
                >
                  <Link href="/nw#"> 연구소 </Link>
                </li>
                <li
                  className="menu"
                  onMouseEnter={() => setIsDropmenuOpen(true)}
                >
                  <Link href="/nw#"> 웨일 스페이스 </Link>
                </li>
              </ul>
            </div>
          </div>

          <div
            className={`dropmenu ${isDropmenuOpen ? "active" : ""}`}
            onMouseLeave={() => setIsDropmenuOpen(false)}
            style={{ display: isDropmenuOpen ? "block" : undefined }}
          >
            <div className="inner">
              <ul className="dep">
                <li>
                  <Link href="/nw#"> Brand Story </Link>
                </li>
                <li>
                  <Link href="/nw#"> 주요 기능 </Link>
                </li>
              </ul>
              <ul className="dep">
                <li>
                  <Link href="/nw#"> What&apos;s NEW </Link>
                </li>
                <li>
                  <Link href="/nw#"> 웨일 이용가이드 </Link>
                </li>
                <li>
                  <Link href="/nw#"> 마이 액티비티 </Link>
                </li>
              </ul>
              <ul className="dep">
                <li>
                  <Link href="/nw#"> 확장앱 </Link>
                </li>
                <li>
                  <Link href="/nw#"> 배경테마 </Link>
                </li>
                <li>
                  <Link href="/nw#"> 개발자센터 </Link>
                </li>
              </ul>
              <ul className="dep">
                <li>
                  <Link href="/nw#"> 연구소 홈 </Link>
                </li>
                <li>
                  <Link href="/nw#"> 베스트 연구 </Link>
                </li>
                <li>
                  <Link href="/nw?variant=sub"> 버그바운티 </Link>
                </li>
              </ul>
              <ul className="dep">
                <li>
                  <Link href="/nw#"> 제품 소개 </Link>
                </li>
                <li>
                  <Link href="/nw#"> 기능 </Link>
                </li>
                <li>
                  <Link href="/nw#"> 제휴 서비스 </Link>
                </li>
              </ul>
            </div>
          </div>

          <Link href="/nw#" className="H_down">
            {" "}
            다운로드{" "}
          </Link>

          <button
            type="button"
            className={`menu-trigger ${isNavOpen ? "active" : ""}`}
            id="action"
            onClick={handlePanelToggle}
            aria-label="메뉴 열기/닫기"
          >
            <span className="nav_line btn_top"></span>
            <span className="nav_line btn"></span>
            <span className="nav_line btn_bottom"></span>
          </button>

          <div className={`nav_m ${isNavOpen ? "active" : ""}`} id="panel">
            <div className={`nav_panel ${isNavOpen ? "active" : ""}`}>
              <ul className="nav_m_ul">
                <li
                  className={`nav_m_li ${openNavKey === "whale" ? "open" : ""}`}
                >
                  <Link href="/nw#" className="nav_m_list">
                    {" "}
                    Why We Whale{" "}
                  </Link>
                  <span
                    className="m_arrow"
                    role="button"
                    tabIndex={0}
                    onClick={(e) => handleMArrowClick(e, "whale")}
                    onKeyDown={(e) =>
                      e.key === "Enter" &&
                      handleMArrowClick(
                        e as unknown as React.MouseEvent,
                        "whale",
                      )
                    }
                    aria-label="서브메뉴 토글"
                  ></span>
                  <ul className="m_drop_ul">
                    <li>
                      <Link href="/nw#"> Brand Story </Link>
                    </li>
                    <li>
                      <Link href="/nw#"> 주요 기능 </Link>
                    </li>
                  </ul>
                </li>
                <li
                  className={`nav_m_li ${openNavKey === "guide" ? "open" : ""}`}
                >
                  <Link href="/nw#" className="nav_m_list">
                    {" "}
                    이용 가이드{" "}
                  </Link>
                  <span
                    className="m_arrow"
                    role="button"
                    tabIndex={0}
                    onClick={(e) => handleMArrowClick(e, "guide")}
                    onKeyDown={(e) =>
                      e.key === "Enter" &&
                      handleMArrowClick(
                        e as unknown as React.MouseEvent,
                        "guide",
                      )
                    }
                    aria-label="서브메뉴 토글"
                  ></span>
                  <ul className="m_drop_ul">
                    <li>
                      <Link href="/nw#"> What&apos;s NEW </Link>
                    </li>
                    <li>
                      <Link href="/nw#"> 웨일 이용가이드 </Link>
                    </li>
                    <li>
                      <Link href="/nw#"> 마이 액티비티 </Link>
                    </li>
                  </ul>
                </li>
                <li
                  className={`nav_m_li ${openNavKey === "store" ? "open" : ""}`}
                >
                  <Link href="/nw#" className="nav_m_list">
                    {" "}
                    웨일 스토어{" "}
                  </Link>
                  <span
                    className="m_arrow"
                    role="button"
                    tabIndex={0}
                    onClick={(e) => handleMArrowClick(e, "store")}
                    onKeyDown={(e) =>
                      e.key === "Enter" &&
                      handleMArrowClick(
                        e as unknown as React.MouseEvent,
                        "store",
                      )
                    }
                    aria-label="서브메뉴 토글"
                  ></span>
                  <ul className="m_drop_ul">
                    <li>
                      <Link href="/nw#"> 확장앱 </Link>
                    </li>
                    <li>
                      <Link href="/nw#"> 배경테마 </Link>
                    </li>
                    <li>
                      <Link href="/nw#"> 개발자센터 </Link>
                    </li>
                  </ul>
                </li>
                <li
                  className={`nav_m_li ${openNavKey === "lab" ? "open" : ""}`}
                >
                  <Link href="/nw#" className="nav_m_list">
                    {" "}
                    연구소{" "}
                  </Link>
                  <span
                    className="m_arrow"
                    role="button"
                    tabIndex={0}
                    onClick={(e) => handleMArrowClick(e, "lab")}
                    onKeyDown={(e) =>
                      e.key === "Enter" &&
                      handleMArrowClick(e as unknown as React.MouseEvent, "lab")
                    }
                    aria-label="서브메뉴 토글"
                  ></span>
                  <ul className="m_drop_ul">
                    <li>
                      <Link href="/nw#"> 연구소 홈 </Link>
                    </li>
                    <li>
                      <Link href="/nw#"> 베스트 연구 </Link>
                    </li>
                    <li>
                      <Link href="/nw?variant=sub"> 버그바운티 </Link>
                    </li>
                  </ul>
                </li>
                <li
                  className={`nav_m_li ${openNavKey === "space" ? "open" : ""}`}
                >
                  <Link href="/nw#" className="nav_m_list">
                    {" "}
                    웨일 스페이스{" "}
                  </Link>
                  <span
                    className="m_arrow"
                    role="button"
                    tabIndex={0}
                    onClick={(e) => handleMArrowClick(e, "space")}
                    onKeyDown={(e) =>
                      e.key === "Enter" &&
                      handleMArrowClick(
                        e as unknown as React.MouseEvent,
                        "space",
                      )
                    }
                    aria-label="서브메뉴 토글"
                  ></span>
                  <ul className="m_drop_ul">
                    <li>
                      <Link href="/nw#"> 제품 소개 </Link>
                    </li>
                    <li>
                      <Link href="/nw#"> 기능 </Link>
                    </li>
                    <li>
                      <Link href="/nw#"> 제휴 서비스 </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div
              className={`nav_panel_overlay ${isNavOpen ? "active" : ""}`}
              role="button"
              tabIndex={0}
              onClick={handlePanelToggle}
              onKeyDown={(e) =>
                e.key === "Enter" && setIsNavOpen((prev) => !prev)
              }
              aria-label="메뉴 닫기"
            ></div>
          </div>
        </div>
      </header>

      <section className="main_top">
        <div className="inner_wide">
          <div className="text_area">
            <h3>
              일상은 인터넷이 아닌
              <br />
              <span className="point_green">브라우저</span>를 켤 때 시작됩니다!
            </h3>
            <p className="topArea_subtx">
              일상을 여는 새로운 시작,{" "}
              <span className="point_green">네이버 웨일</span>
            </p>
            <div className="main_button">
              <Link href="/nw#" className="M_button">
                {" "}
                다운로드{" "}
              </Link>
            </div>
          </div>

          <div className="main_right">
            <div className="main_rightbg"></div>
          </div>
        </div>
      </section>

      <section className="main_slide work">
        <Swiper
          modules={[Pagination, Autoplay]}
          className="swiper-container a"
          slidesPerView={1}
          spaceBetween={0}
          centeredSlides
          loop
          autoplay={{ delay: 20000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => {
            workSwiperRef.current = swiper;
          }}
        >
          {workSlides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div className="inner_wide">
                <div className="slide_tx_area">
                  <p className="slide_subtx">
                    {slide.subtx.split("\n").map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </p>
                  <h4>
                    {slide.h4.split("\n").map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                    <span className="point_bg_white">{slide.point}</span>
                    {slide.suffix}
                  </h4>
                  <div className="detail_button">
                    <Link href="/nw#" className="D_button">
                      {" "}
                      자세히 보기{" "}
                    </Link>
                  </div>
                </div>
                <div className="slide_right">
                  <div className="slide_rightbg">
                    <Image
                      src={slide.gif}
                      alt={slide.gifAlt}
                      width={600}
                      height={400}
                      unoptimized
                    />
                    <figure className="icon">
                      <Image
                        src={slide.icon}
                        alt={slide.iconAlt}
                        width={80}
                        height={80}
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="main_slide security">
        <Swiper
          modules={[Pagination, Autoplay]}
          className="swiper-container a"
          slidesPerView={1}
          spaceBetween={0}
          centeredSlides
          loop
          autoplay={{ delay: 20000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => {
            securitySwiperRef.current = swiper;
          }}
        >
          {securitySlides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div className="inner_wide">
                <div className="slide_tx_area">
                  <p className="slide_subtx">
                    {slide.subtx.split("\n").map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </p>
                  <h4>
                    {slide.h4.split("\n").map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                    <span className="point_bg_white">{slide.point}</span>
                  </h4>
                  <div className="detail_button">
                    <Link href="/nw#" className="D_button">
                      {" "}
                      자세히 보기{" "}
                    </Link>
                  </div>
                </div>
                <div className="slide_right">
                  <div className="slide_rightbg">
                    <Image
                      src={slide.img}
                      alt={slide.imgAlt}
                      width={600}
                      height={400}
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="main_slide custom">
        <Swiper
          modules={[Pagination, Autoplay]}
          className="swiper-container a"
          slidesPerView={1}
          spaceBetween={0}
          centeredSlides
          loop
          autoplay={{ delay: 20000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => {
            customSwiperRef.current = swiper;
          }}
        >
          {customSlides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div className="inner_wide">
                <div className="slide_tx_area">
                  <p className="slide_subtx">
                    {slide.subtx.split("\n").map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </p>
                  <h4>
                    {slide.h4.split("\n").map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                    <span className="point_bg_white">{slide.point}</span>
                  </h4>
                  <div className="detail_button">
                    <Link href="/nw#" className="D_button">
                      {" "}
                      자세히 보기{" "}
                    </Link>
                  </div>
                </div>
                <div className="slide_right">
                  <div className="slide_rightbg">
                    <Image
                      src={slide.img}
                      alt={slide.imgAlt}
                      width={600}
                      height={400}
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="download">
        <div className="inner">
          <Image
            src="/images/nw/whywewhale.gif"
            alt="whaledown"
            width={800}
            height={400}
            unoptimized
          />
          <div className="btn_whale_dl">
            <Link href="/nw#">다운로드</Link>
          </div>
        </div>
      </section>

      <footer>
        <h2 className="f_logo">
          <Link href="/nw#">
            <Image
              src="/images/nw/logo_whale_gray.svg"
              alt="logo"
              className="f_logo_img"
              width={120}
              height={24}
            />
          </Link>
        </h2>
        <ul className="footer_ul">
          <li>
            <Link href="/nw#">이용약관</Link>
          </li>
          <li>
            <Link href="/nw#">개인정보 처리방침</Link>
          </li>
          <li>
            <Link href="/nw#">Naver Whale 개인정보 보호를 위한 백서</Link>
          </li>
          <li>
            <Link href="/nw#">제휴 제안</Link>
          </li>
          <li>
            <Link href="/nw#" className="pc_only">
              고객센터
            </Link>
          </li>
          <li>
            <Link href="/nw#">© NAVER Corp.</Link>
          </li>
        </ul>
        <p className="beta_dl">
          <Link href="/nw#">베타 다운로드</Link>
        </p>
      </footer>
    </NwMainStyled>
  );
};

export default NwMainComponent;
