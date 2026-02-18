"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "bootstrap/dist/css/bootstrap.min.css";
import { TossMainStyled } from "../styled/TossMainStyled";

const TossMainComponent = () => {
  const [activeTab, setActiveTab] = useState("tab-1");
  const [activeArticleTab, setActiveArticleTab] = useState("tab-19");
  const [activeMobileTab, setActiveMobileTab] = useState("tab-10");

  useEffect(() => {
    // toss_main.js의 로직을 React useEffect로 변환
    if (typeof window === "undefined") return;

    // GSAP ScrollTrigger 등록 및 섹션3 ~ 섹션4 사이에서 black-background 페이드 효과
    gsap.registerPlugin(ScrollTrigger);

    gsap.set("h2", { opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#section3",
        start: "top top",
        endTrigger: "#section4",
        end: "top top",
        scrub: true,
      },
    });

    tl.to(".black-background", { opacity: 0 }).to(".black-background", {
      opacity: 1,
    });

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const header = document.querySelector("header");

      if (scrollTop > 60) {
        header?.classList.add("topFixed");
      } else {
        header?.classList.remove("topFixed");
      }

      const section2 = document.getElementById("section2");
      const windowHeight = window.innerHeight;
      const threshold = 200;

      if (section2) {
        const section2Top = section2.offsetTop;

        // 헤더 색상 전환
        if (scrollTop > section2Top) {
          header?.classList.add("topFixed_W");
        } else {
          header?.classList.remove("topFixed_W");
        }

        // 차트 애니메이션: 섹션2가 화면에 충분히 들어왔을 때 한 번만 anim 추가
        if (scrollTop + windowHeight > section2Top + threshold) {
          const chartLines = document.querySelectorAll(".chart-line");
          chartLines.forEach((line) => {
            (line as HTMLElement).classList.add("anim");
          });
        }
      }

      // section3 배경 고정
      const section3 = document.getElementById("section3");
      const section5 = document.getElementById("section5");
      if (section3 && section5) {
        const section3Top = section3.offsetTop;
        const section5Top = section5.offsetTop;
        const bgFixed = document.querySelector(".bg_fixed");
        const blackBg = document.querySelector(".black-background");

        if (scrollTop > section3Top) {
          bgFixed?.classList.add("fixed");
          blackBg?.classList.add("fixed");
        } else {
          bgFixed?.classList.remove("fixed");
          blackBg?.classList.remove("fixed");
        }

        if (scrollTop > section5Top) {
          blackBg?.classList.remove("fixed");
          bgFixed?.classList.remove("fixed");
          if (blackBg) (blackBg as HTMLElement).style.display = "none";
          if (bgFixed) (bgFixed as HTMLElement).style.display = "none";
        } else {
          if (blackBg) (blackBg as HTMLElement).style.display = "block";
          if (bgFixed) (bgFixed as HTMLElement).style.display = "block";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  const handleImageWrapClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.classList.add("active");
  };

  const handleCloseBtn = (e: React.MouseEvent<HTMLSpanElement>) => {
    // 이벤트 전파 막기
    e.preventDefault();
    e.stopPropagation();

    const imageWrap = e.currentTarget.closest(
      ".image-wrap",
    ) as HTMLElement | null;
    imageWrap?.classList.remove("active");
  };

  return (
    <TossMainStyled>
      <header className="header">
        <div className="top">
          <div className="top-inner">
            <div className="logo-box">
              <Link href="#" className="logo">
                <span className="blind">토스</span>
                <span className="icon">
                  <svg viewBox="0 0 390 100" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M134.385 24.801h12.582V10.078L164.077 0v24.801h17.868v15.352h-17.867v27.954c0 7.176 3.019 9.694 7.424 9.694 2.39 0 4.278-.755 6.29-2.518l7.927 13.597c-4.395 3.273-9.937 5.162-16.231 5.162-14.218 0-22.52-6.8-22.52-25.306V40.153h-12.583V24.801zm108.177 33.74c0-10.575-8.303-19.011-18.62-19.011-10.443 0-18.622 8.436-18.622 19.011 0 10.576 8.179 19.01 18.622 19.01 10.317 0 18.62-8.436 18.62-19.01zm-54.605.124c0-19.638 15.479-35.372 35.859-35.372 20.256 0 35.985 15.736 35.985 35.372 0 19.515-15.479 35.373-35.985 35.373-20.384.004-35.86-15.858-35.86-35.373zM263.38 77.17l16.734-6.545c3.02 6.042 8.431 9.19 15.603 9.19 7.046 0 10.82-3.398 10.82-7.429 0-4.908-7.298-6.042-15.98-7.805-11.448-2.39-24.158-5.916-24.158-20.267 0-11.457 11.072-21.402 27.808-21.276 14.342 0 22.9 5.413 29.19 14.478l-15.86 6.419c-2.77-4.532-7.046-7.176-13.337-7.176-6.796 0-10.067 2.77-10.067 6.547 0 4.281 5.542 5.413 15.479 7.554 11.322 2.266 24.65 6.169 24.65 20.773 0 10.574-9.437 22.533-29.19 22.407-16.091 0-26.282-6.042-31.692-16.87zm65.373 0l16.733-6.545c3.019 6.042 8.43 9.19 15.603 9.19 7.045 0 10.82-3.398 10.82-7.429 0-4.908-7.299-6.042-15.98-7.805-11.448-2.39-24.156-5.916-24.156-20.267 0-11.457 11.072-21.402 27.806-21.276 14.343 0 22.899 5.413 29.19 14.478l-15.861 6.419c-2.77-4.532-7.046-7.176-13.337-7.176-6.795 0-10.067 2.77-10.067 6.547 0 4.281 5.542 5.413 15.48 7.554 11.323 2.266 24.65 6.169 24.65 20.773 0 10.574-9.436 22.533-29.191 22.407-16.09 0-26.28-6.042-31.69-16.87zM112.006 52.797a47.008 47.008 0 01-13.745 33.3 46.954 46.954 0 01-33.27 13.775c-18.895.013-35.194-11.12-42.688-27.191A75.726 75.726 0 000 83.113C2.326 69.98 7.187 54.43 15.064 40.18 24.81 22.562 39.476 7.424 61.734 5.948a45.529 45.529 0 018.287.136c23.592 2.388 41.985 22.43 41.985 46.713z"
                      fill="#0050FF"
                      fillRule="nonzero"
                    />
                  </svg>
                </span>
              </Link>
            </div>

            <div className="m-icon-wrap">
              <Link href="#" className="m-icon-button">
                <span className="m-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="line-icon"
                  >
                    <path
                      fill="#FFF"
                      className="m-open"
                      d="M4.118 6.2h16a1.2 1.2 0 100-2.4h-16a1.2 1.2 0 100 2.4m16 4.6h-16a1.2 1.2 0 100 2.4h16a1.2 1.2 0 100-2.4m0 7h-16a1.2 1.2 0 100 2.4h16a1.2 1.2 0 100-2.4"
                      fillRule="evenodd"
                    />
                    <path
                      fill="#B0B8C1"
                      className="m-close"
                      fillRule="evenodd"
                      d="M13.815 12l5.651-5.651a1.2 1.2 0 00-1.697-1.698l-5.651 5.652-5.652-5.652a1.201 1.201 0 00-1.697 1.698L10.421 12l-5.652 5.651a1.202 1.202 0 00.849 2.049c.307 0 .614-.117.848-.351l5.652-5.652 5.651 5.652a1.198 1.198 0 001.697 0 1.2 1.2 0 000-1.698L13.815 12z"
                    />
                  </svg>
                </span>
              </Link>
            </div>

            <div className="nav-wrap">
              <ul className="nav">
                <li>
                  <Link href="#">회사 소개</Link>
                </li>
                <li>
                  <Link href="#">고객센터</Link>
                </li>
                <li>
                  <Link href="#">자주 묻는 질문</Link>
                </li>
                <li>
                  <Link href="/toss/sub">공동인증서 관리</Link>
                </li>
                <li>
                  <Link href="#">채용</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <div className="main">
        <section>
          <div id="section1">
            <div className="main-text">
              <span>
                금융, 그 이상의 <br />
                역사를 만들고 있습니다
              </span>
            </div>
            <div className="arrow">
              <Image
                src="/images/toss/down-arrow.png"
                alt="아래화살표"
                width={24}
                height={24}
              />
            </div>
          </div>

          {/* Section 2 */}
          <div id="section2">
            <div className="chart">
              <svg
                viewBox="0 0 500 500"
                xmlns="http://www.w3.org/2000/svg"
                height="100%"
                width="100%"
                version="1.1"
                className="svg-container"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="193.01%"
                  >
                    <stop offset="23.41%" stopColor="rgba(49, 130, 246, 0.4)" />
                    <stop offset="50%" stopColor="rgba(18, 20, 23, 0.4)" />
                  </linearGradient>
                </defs>
                <g>
                  <path
                    className="chart-fill"
                    d="M 0,500 C 1.5,498.5 7.75,491.5 10,490 C 12.25,488.5 12.75,490.75 15,490 C 17.25,489.25 22.75,486.5 25,485 C 27.25,483.5 27.75,480 30,480 C 32.25,480 37,485 40,485 C 43,485 47,480.9 50,480 C 53,479.1 56.25,480.875 60,479 C 63.75,477.125 70.5,468.85 75,467.5 C 79.5,466.15 86.25,470.75 90,470 C 93.75,469.25 96.25,464.225 100,462.5 C 103.75,460.775 111.25,460.375 115,458.5 C 118.75,456.625 121.25,452.025 125,450 C 128.75,447.975 136.25,447.25 140,445 C 143.75,442.75 146.25,436.875 150,435 C 153.75,433.125 161.25,433.4 165,432.5 C 168.75,431.6 171.25,430.275 175,429 C 178.75,427.725 186.25,426.1 190,424 C 193.75,421.9 196.25,416.725 200,415 C 203.75,413.275 211.25,412.05 215,412.5 C 218.75,412.95 221.25,418.375 225,418 C 228.75,417.625 236.25,411.95 240,410 C 243.75,408.05 246.25,410.25 250,405 C 253.75,399.75 261.25,381.75 265,375 C 268.75,368.25 271.25,366 275,360 C 278.75,354 286.25,341 290,335 C 293.75,329 296.25,323 300,320 C 303.75,317 311.25,316.5 315,315 C 318.75,313.5 321.25,315.25 325,310 C 328.75,304.75 336.25,289 340,280 C 343.75,271 346.25,255.625 350,250 C 353.75,244.375 361.25,245.5 365,242.5 C 368.75,239.5 371.25,231.125 375,230 C 378.75,228.875 386.25,237.25 390,235 C 393.75,232.75 396.25,220.25 400,215 C 403.75,209.75 411.25,203.75 415,200 C 418.75,196.25 421.25,192.25 425,190 C 428.75,187.75 436.25,188 440,185 C 443.75,182 446.25,173 450,170 C 453.75,167 461.25,168.75 465,165 C 468.75,161.25 471.25,150.25 475,145 C 478.75,139.75 486.25,133 490,130 C 493.75,127 498.5,125.75 500,125 L 500 500 L 0 500 L 0,500"
                  />
                  <path
                    className="chart-line"
                    d="M 0,500 C 1.5,498.5 7.75,491.5 10,490 C 12.25,488.5 12.75,490.75 15,490 C 17.25,489.25 22.75,486.5 25,485 C 27.25,483.5 27.75,480 30,480 C 32.25,480 37,485 40,485 C 43,485 47,480.9 50,480 C 53,479.1 56.25,480.875 60,479 C 63.75,477.125 70.5,468.85 75,467.5 C 79.5,466.15 86.25,470.75 90,470 C 93.75,469.25 96.25,464.225 100,462.5 C 103.75,460.775 111.25,460.375 115,458.5 C 118.75,456.625 121.25,452.025 125,450 C 128.75,447.975 136.25,447.25 140,445 C 143.75,442.75 146.25,436.875 150,435 C 153.75,433.125 161.25,433.4 165,432.5 C 168.75,431.6 171.25,430.275 175,429 C 178.75,427.725 186.25,426.1 190,424 C 193.75,421.9 196.25,416.725 200,415 C 203.75,413.275 211.25,412.05 215,412.5 C 218.75,412.95 221.25,418.375 225,418 C 228.75,417.625 236.25,411.95 240,410 C 243.75,408.05 246.25,410.25 250,405 C 253.75,399.75 261.25,381.75 265,375 C 268.75,368.25 271.25,366 275,360 C 278.75,354 286.25,341 290,335 C 293.75,329 296.25,323 300,320 C 303.75,317 311.25,316.5 315,315 C 318.75,313.5 321.25,315.25 325,310 C 328.75,304.75 336.25,289 340,280 C 343.75,271 346.25,255.625 350,250 C 353.75,244.375 361.25,245.5 365,242.5 C 368.75,239.5 371.25,231.125 375,230 C 378.75,228.875 386.25,237.25 390,235 C 393.75,232.75 396.25,220.25 400,215 C 403.75,209.75 411.25,203.75 415,200 C 418.75,196.25 421.25,192.25 425,190 C 428.75,187.75 436.25,188 440,185 C 443.75,182 446.25,173 450,170 C 453.75,167 461.25,168.75 465,165 C 468.75,161.25 471.25,150.25 475,145 C 478.75,139.75 486.25,133 490,130 C 493.75,127 498.5,125.75 500,125 L 500 500 L 0 500 L 0,500"
                  />
                </g>
              </svg>
            </div>

            <div className="sub-text">
              <div>
                <span>
                  변화를 열망하는 사람들이 모여, <br /> 역사에 남을만한 변화를
                  만듭니다.
                </span>

                <div className="sub-text-table">
                  <table>
                    <colgroup>
                      <col />
                      <col />
                    </colgroup>

                    <thead className="pc-table">
                      <tr>
                        <th>누적 가입자 수</th>
                        <th>누적 투자금액</th>
                      </tr>
                    </thead>

                    <thead className="m-table">
                      <tr>
                        <th>누적 가입자 수</th>
                      </tr>
                    </thead>

                    <tbody className="pc-table">
                      <tr>
                        <td>2,000만 +</td>
                        <td>1조 원 +</td>
                      </tr>
                    </tbody>

                    <tbody className="m-table">
                      <tr>
                        <td>2,000만 +</td>
                      </tr>
                    </tbody>

                    <thead className="m-table">
                      <tr>
                        <th>누적 투자금액</th>
                      </tr>
                    </thead>

                    <tbody className="m-table">
                      <tr>
                        <td>1조 원 +</td>
                      </tr>
                    </tbody>

                    <thead className="pc-table">
                      <tr>
                        <th>전체 팀원 수</th>
                        <th>출시 서비스 수</th>
                      </tr>
                    </thead>

                    <thead className="m-table">
                      <tr>
                        <th>전체 팀원 수</th>
                      </tr>
                    </thead>

                    <tbody className="m-table">
                      <tr>
                        <td>1,100명 +</td>
                      </tr>
                    </tbody>

                    <thead className="m-table">
                      <tr>
                        <th>출시 서비스 수</th>
                      </tr>
                    </thead>

                    <tbody className="m-table">
                      <tr>
                        <td>50개 +</td>
                      </tr>
                    </tbody>

                    <tbody className="pc-table">
                      <tr>
                        <td>1,100명 +</td>
                        <td>50개 +</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div id="section3">
            <div className="bg_fixed"></div>
            <div className="black-background"></div>

            <div className="sub-text2">
              <h1>Team Mission</h1>
              <span>
                토스팀은 바꾸고 싶은 세상의 모습이 있고 생각만 해도 가슴 뛰는
                목표가 있는 조직입니다. <br /> 어렵고, 불편하고, 멀게 느껴지는
                금융이 아닌 누구에게나 쉽고 상식적인 금융을 만드는 것이 토스팀의
                존재 이유입니다.
              </span>
            </div>
          </div>

          {/* Section 4 - Timeline */}
          <div id="section4">
            <div className="sub-text3">
              <span>
                토스팀은 오늘도 <br /> 위대한 역사를 만들고 있습니다
              </span>
            </div>

            <div className="timeline-wrap">
              <ul className="timeline-year" role="tablist">
                {[
                  "2021",
                  "2020",
                  "2019",
                  "2018",
                  "2017",
                  "2016",
                  "2015",
                  "2014",
                  "2013",
                ].map((year, idx) => {
                  const tabId = `tab-${idx + 1}`;
                  const isActive = activeTab === tabId;
                  return (
                    <li key={year} className="year">
                      <button
                        className={`years ${isActive ? "active" : ""}`}
                        role="tab"
                        aria-selected={isActive}
                        data-tab={tabId}
                        onClick={() => setActiveTab(tabId)}
                      >
                        {year}
                      </button>
                    </li>
                  );
                })}
              </ul>

              <div className="timeline-detail-wrap">
                {/* Timeline details - 각 년도별 내용 */}
                {[
                  {
                    id: "tab-1",
                    items: [
                      { date: "2021.02", text: "㈜토스증권 출범" },
                      { date: "2021.04", text: "㈜토스씨엑스 설립" },
                      {
                        date: "2021.06",
                        text: "토스뱅크 컨소시엄 제3 인터넷전문은행 본인가 획득\n4,600억 원 투자 유치 (기업가치 한화 약 8조원 돌파)",
                      },
                      {
                        date: "2021.08",
                        text: "평생 무료 송금 정책 전격 도입",
                      },
                    ],
                  },
                  {
                    id: "tab-2",
                    items: [
                      {
                        date: "2020.04",
                        text: "첫 월간 흑자 기록\n토스신용카드(PLCC) 출시",
                      },
                      {
                        date: "2020.05",
                        text: "토스인증서 발급 1,100만 돌파",
                      },
                      { date: "2020.07", text: "고객 피해 전액 책임제 시행" },
                      {
                        date: "2020.08",
                        text: "2,070억 원 투자 유치 (기업가치 한화 약 3조 원 돌파)\n㈜토스페이먼츠 출범\n토스보험파트너 앱 출시",
                      },
                      {
                        date: "2020.11",
                        text: "토스준비법인(토스증권) 금융투자업 본인가 획득",
                      },
                    ],
                  },
                  {
                    id: "tab-3",
                    items: [
                      {
                        date: "2019.02",
                        text: "토스 3.0 출시 및 브랜드 로고 리뉴얼",
                      },
                      {
                        date: "2019.03",
                        text: "토스준비법인(토스증권) 예비인가 획득",
                      },
                      { date: "2019.04", text: "토스머니카드 출시" },
                      { date: "2019.08", text: "770억 원 투자 유치" },
                      {
                        date: "2019.10",
                        text: "월간 활성 사용자 1,000만 명 돌파",
                      },
                      { date: "2019.11", text: "토스카드 2.0 출시" },
                      {
                        date: "2019.12",
                        text: "토스뱅크 컨소시엄 제3 인터넷전문은행 예비인가 획득\n무료 신용등급 조회 누적 사용자 1,000만 명 돌파",
                      },
                    ],
                  },
                  {
                    id: "tab-4",
                    items: [
                      {
                        date: "2018.04",
                        text: "이승건 대표 정보통신의 날 기념 대통령 표창 수상",
                      },
                      { date: "2018.06", text: "440억 원 투자 유치" },
                      {
                        date: "2018.10",
                        text: "세계 100대 핀테크 기업 중 28위 선정",
                      },
                      {
                        date: "2018.11",
                        text: "과학기술정보통신부 주최 2018 정보보호대상 수상\n㈜토스인슈어런스 설립",
                      },
                      {
                        date: "2018.12",
                        text: "900억 원 투자 유치 (기업가치 한화 약 1조 원 돌파)",
                      },
                    ],
                  },
                  {
                    id: "tab-5",
                    items: [
                      {
                        date: "2017.02",
                        text: "무료 신용등급 조회 서비스 출시",
                      },
                      { date: "2017.03", text: "550억 원 투자 유치" },
                      {
                        date: "2017.11",
                        text: "세계 100대 핀테크 기업 중 35위 선정",
                      },
                      {
                        date: "2017.12",
                        text: "월 송금액 1조, 누적 송금액 10조 돌파",
                      },
                    ],
                  },
                  {
                    id: "tab-6",
                    items: [
                      {
                        date: "2016.04",
                        text: "265억 원 투자 유치\n이승건 대표 한국핀테크산업협회 초대 회장 부임",
                      },
                      { date: "2016.08", text: "누적 송금액 1조 원 돌파" },
                      {
                        date: "2016.12",
                        text: "구글 플레이 '2016 올해의 베스트앱' 대상 수상",
                      },
                    ],
                  },
                  {
                    id: "tab-7",
                    items: [
                      { date: "2015.02", text: "간편 송금 서비스 출시" },
                      { date: "2015.07", text: "50억 원 투자 유치" },
                      { date: "2015.10", text: "토스(Toss) 상표권 등록" },
                    ],
                  },
                  {
                    id: "tab-8",
                    items: [{ date: "2014.08", text: "10억 원 투자 유치" }],
                  },
                  {
                    id: "tab-9",
                    items: [{ date: "2013.08", text: "㈜비바리퍼블리카 설립" }],
                  },
                ].map((tab) => (
                  <div
                    key={tab.id}
                    id={tab.id}
                    className={`timeline-detail ${
                      activeTab === tab.id ? "active" : ""
                    }`}
                  >
                    {tab.items.map((item, idx) => (
                      <div key={idx}>
                        <span>{item.date}</span>
                        <p>{item.text}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              {/* Mobile Timeline */}
              <div className="m-timeline-year-wrap">
                <div className="m-timeline-year m_scroll ready2" role="tablist">
                  {[
                    "2021",
                    "2020",
                    "2019",
                    "2018",
                    "2017",
                    "2016",
                    "2015",
                    "2014",
                    "2013",
                  ].map((year, idx) => (
                    <button
                      key={year}
                      className={`m-year ${idx === 0 ? "first current" : ""}`}
                      role="tab"
                      aria-selected={activeMobileTab === `tab-${idx + 10}`}
                      data-tab={`tab-${idx + 10}`}
                      onClick={() => setActiveMobileTab(`tab-${idx + 10}`)}
                    >
                      {year}
                    </button>
                  ))}
                  <div className="m-indicator" id="m-indicator2"></div>
                </div>

                <input
                  type="text"
                  className="hidden"
                  id="txtstart"
                  defaultValue="0"
                />
                <input
                  type="text"
                  className="hidden"
                  id="txtdestination"
                  defaultValue="0"
                />
              </div>

              <div className="m-timeline-content-wrap">
                {/* Mobile timeline content - 각 년도별 내용 (tab-10 ~ tab-18) */}
                {[
                  {
                    id: "tab-10",
                    items: [
                      { date: "2021.02", text: "㈜토스증권 출범" },
                      { date: "2021.04", text: "㈜토스씨엑스 설립" },
                      {
                        date: "2021.06",
                        text: "토스뱅크 컨소시엄 제3 인터넷전문은행 본인가 획득\n4,600억 원 투자 유치 (기업가치 한화 약 8조원 돌파)",
                      },
                      {
                        date: "2021.08",
                        text: "평생 무료 송금 정책 전격 도입",
                      },
                    ],
                  },
                  {
                    id: "tab-11",
                    items: [
                      {
                        date: "2020.04",
                        text: "첫 월간 흑자 기록\n토스신용카드(PLCC) 출시",
                      },
                      {
                        date: "2020.05",
                        text: "토스인증서 발급 1,100만 돌파",
                      },
                      { date: "2020.07", text: "고객 피해 전액 책임제 시행" },
                      {
                        date: "2020.08",
                        text: "2,070억 원 투자 유치 (기업가치 한화 약 3조 원 돌파)\n㈜토스페이먼츠 출범\n토스보험파트너 앱 출시",
                      },
                      {
                        date: "2020.11",
                        text: "토스준비법인(토스증권) 금융투자업 본인가 획득",
                      },
                    ],
                  },
                  {
                    id: "tab-12",
                    items: [
                      {
                        date: "2019.02",
                        text: "토스 3.0 출시 및 브랜드 로고 리뉴얼",
                      },
                      {
                        date: "2019.03",
                        text: "토스준비법인(토스증권) 예비인가 획득",
                      },
                      { date: "2019.04", text: "토스머니카드 출시" },
                      { date: "2019.08", text: "770억 원 투자 유치" },
                      {
                        date: "2019.10",
                        text: "월간 활성 사용자 1,000만 명 돌파",
                      },
                      { date: "2019.11", text: "토스카드 2.0 출시" },
                      {
                        date: "2019.12",
                        text: "토스뱅크 컨소시엄 제3 인터넷전문은행 예비인가 획득\n무료 신용등급 조회 누적 사용자 1,000만 명 돌파",
                      },
                    ],
                  },
                  {
                    id: "tab-13",
                    items: [
                      {
                        date: "2018.04",
                        text: "이승건 대표 정보통신의 날 기념 대통령 표창 수상",
                      },
                      { date: "2018.06", text: "440억 원 투자 유치" },
                      {
                        date: "2018.10",
                        text: "세계 100대 핀테크 기업 중 28위 선정",
                      },
                      {
                        date: "2018.11",
                        text: "과학기술정보통신부 주최 2018 정보보호대상 수상\n㈜토스인슈어런스 설립",
                      },
                      {
                        date: "2018.12",
                        text: "900억 원 투자 유치 (기업가치 한화 약 1조 원 돌파)",
                      },
                    ],
                  },
                  {
                    id: "tab-14",
                    items: [
                      {
                        date: "2017.02",
                        text: "무료 신용등급 조회 서비스 출시",
                      },
                      { date: "2017.03", text: "550억 원 투자 유치" },
                      {
                        date: "2017.11",
                        text: "세계 100대 핀테크 기업 중 35위 선정",
                      },
                      {
                        date: "2017.12",
                        text: "월 송금액 1조, 누적 송금액 10조 돌파",
                      },
                    ],
                  },
                  {
                    id: "tab-15",
                    items: [
                      {
                        date: "2016.04",
                        text: "265억 원 투자 유치\n이승건 대표 한국핀테크산업협회 초대 회장 부임",
                      },
                      { date: "2016.08", text: "누적 송금액 1조 원 돌파" },
                      {
                        date: "2016.12",
                        text: "구글 플레이 '2016 올해의 베스트앱' 대상 수상",
                      },
                    ],
                  },
                  {
                    id: "tab-16",
                    items: [
                      { date: "2015.02", text: "간편 송금 서비스 출시" },
                      { date: "2015.07", text: "50억 원 투자 유치" },
                      { date: "2015.10", text: "토스(Toss) 상표권 등록" },
                    ],
                  },
                  {
                    id: "tab-17",
                    items: [{ date: "2014.08", text: "10억 원 투자 유치" }],
                  },
                  {
                    id: "tab-18",
                    items: [{ date: "2013.08", text: "㈜비바리퍼블리카 설립" }],
                  },
                ].map((tab) => (
                  <div
                    key={tab.id}
                    className={`m-timeline-content ${
                      activeMobileTab === tab.id ? "current" : ""
                    }`}
                    id={tab.id}
                  >
                    {tab.items.map((item, idx) => (
                      <div key={idx}>
                        <div className="m-t-content-year">
                          <span>{item.date}</span>
                          <p className="m-t-content">{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 5 - Finance Cards */}
          <div id="section5">
            <div className="sub-text4">
              <span>
                <h1>토스가 바꿀 금융</h1>
                <span className="sub-text4span">
                  모두를 위한, 새로운 금융을 만들고자 합니다
                </span>
              </span>
            </div>

            <div className="finance row-5">
              {[
                {
                  className: "core",
                  title: "토스코어",
                  text: "상식적인 금융 서비스는\n삶을 윤택하게 합니다",
                  body: "문자 메시지 보내듯 편하게 송금하고, 모든 자산을 손끝에서 편하게 관리하고, 최고의 사용 경험을 선사하는 디자인 덕분에 행복해지고, 큰 노력 없이 금융과 관련된 고민을 모두 해결하는 것. 토스에서는 누구나 경험할 수 있습니다.",
                  banner: "토스는 왜 금융을 바꾸려고 하는가?",
                },
                {
                  className: "stock",
                  title: "토스증권",
                  text: "투자, 쉽게 시작하고 즐길 수\n있는 문화가 됩니다",
                  body: "그동안 투자는 전문적인 공부가 필요한 영역이라는 인식 때문에, 시작하는 것조차 어려웠던 것이 사실입니다. 토스증권이 준비중인 투자 서비스를 통해 어렵게 느껴졌던 투자가 재밌어질거고, 많은 분들의 삶에 '투자 문화'가 중요하게 자리잡을 겁니다.",
                  banner: "토스가 투자 서비스를 만든다면?",
                },
                {
                  className: "payment",
                  title: "토스페이먼츠",
                  text: "결제 산업의 새로운 미래를\n제시합니다",
                  body: "변화가 더디고 진입 장벽 또한 높았던 결제 산업, 이제 바뀌어야 합니다. 토스페이먼츠는 그동안 어렵고 힘들었던 결제 경험을 혁신하고자 합니다. 소비자들에게 쉽고 편한 서비스 경험을 제공하고, 가맹점들에게는 오직 사업에만 집중할 수 있는 환경을 보장하는 제품을 만들어 냅니다.",
                  banner: "토스페이먼츠 홈페이지 바로가기",
                },
                {
                  className: "insurance",
                  title: "토스인슈어런스",
                  text: "궁극적인 목표는\n고객이 만족하는 것",
                  body: "토스인슈어런스의 목표는 보험 상품을 많이 판매하는 것이 아닙니다. 고객의 위험을 최대한 줄이고, 상황에 꼭 맞는 상품을 추천해 드리는 것, 궁극적으로 '최고의 고객 만족'을 지향합니다. 변함 없던 보험 업계, 이제 정말 바뀌어야 합니다. 토스인슈어런스는 그 흐름을 주도하는 팀입니다.",
                  banner: "토스인슈어런스 홈페이지 바로가기",
                },
                {
                  className: "bank",
                  title: "토스뱅크",
                  text: "포용과 혁신의 은행을\n지향합니다",
                  body: "토스뱅크 팀의 목표는 두 가지입니다. 하나는 기존 은행의 주고객이었던 직장인 뿐 아니라, 소상공인, 저신용자까지도 부담없이 이용할 수 있는 접근성 높은 은행이 되는 것. 다른 하나는 금융 산업의 축을 공급자 중심에서 사용자 중심으로 완벽하게 옮겨오는 것입니다.",
                  banner: "토스가 꿈꾸는 은행, 어떤 모습일까?",
                },
                {
                  className: "cx",
                  title: "토스씨엑스",
                  text: "고객 경험을\n최우선으로 생각합니다",
                  body: "토스에게 CS는 Customer Service를 넘어 Customer Satisfaction과 Customer Success를 의미합니다. 이제 한 단계 더 나아간 토스씨엑스(CX)는 고객 경험을 수호하며 미친 만족감을 드릴 것입니다.",
                  banner: "고객이 반드시, 토스에서 멋진 경험을 할 수 있도록",
                },
              ].map((card, idx) => (
                <div key={idx} className="content-wrap col-sm-6 col-12">
                  <div className="image-wrap" onClick={handleImageWrapClick}>
                    <div className={card.className}></div>
                    <p className="mini-title">{card.title}</p>
                    <p className="mini-text">{card.text}</p>
                    <div className="plus">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" />
                        </svg>
                      </span>
                    </div>
                    <p className="mini-body">{card.body}</p>
                    <p className="mini-banner">{card.banner}</p>
                    <span className="close-btn" onClick={handleCloseBtn}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5 15.538l-3.592-3.548 3.546-3.587-1.416-1.403-3.545 3.589-3.588-3.543-1.405 1.405 3.593 3.552-3.547 3.592 1.405 1.405 3.555-3.596 3.591 3.55 1.403-1.416z" />
                      </svg>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 6 - Investors */}
          <div id="section6">
            <div className="world-wrap">
              <span className="sub-text5">
                세계적인 투자자들이 토스팀과 함께합니다
              </span>

              <div className="world">
                {[
                  "logo-aspex",
                  "logo-bessemer",
                  "logo-paypal",
                  "logo-goodwater",
                  "logo-kp",
                  "logo-altos",
                  "logo-gic",
                  "logo-ribbit",
                ].map((logo, idx) => (
                  <Image
                    key={idx}
                    src={`/images/toss/${logo}.jpg`}
                    alt={logo.replace("logo-", "")}
                    width={150}
                    height={60}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Section 7 - Articles */}
          <div id="section7">
            <div>
              <div className="title-wrap">
                <span>언론 속의 토스</span>

                <div className="article-year-wrap">
                  <div className="article-year" role="tablist">
                    {["2021", "2020", "2019", "2018", "2017"].map(
                      (year, idx) => (
                        <button
                          key={year}
                          className={`a-year ${idx === 0 ? "first current" : ""}`}
                          role="tab"
                          aria-selected={activeArticleTab === `tab-${19 + idx}`}
                          data-tab={`tab-${19 + idx}`}
                          onClick={() => setActiveArticleTab(`tab-${19 + idx}`)}
                        >
                          {year}
                        </button>
                      ),
                    )}
                    <div className="indicator"></div>
                  </div>
                </div>
              </div>

              <div className="article-wrap">
                {[
                  {
                    id: "tab-19",
                    articles: [
                      {
                        source: "한국경제",
                        date: "2021.06",
                        title: "토스, 기업가치 8조로... '데카콘' 눈앞",
                      },
                      {
                        source: "매일경제",
                        date: "2021.06",
                        title:
                          '"학생 주부도 맘놓고 대출" 9월 문여는 토스뱅크, 중저신용자 대출 승부수',
                      },
                      {
                        source: "조선일보",
                        date: "2021.06",
                        title:
                          '20대 80% 쓰는 토스, 은행된다... "세계 첫 슈퍼 금융앱 기대하라"',
                      },
                      {
                        source: "이데일리",
                        date: "2021.04",
                        title:
                          "토스, 지난해 매출 4000억 육박 ... '올해 매출 1조원 도전'",
                      },
                      {
                        source: "서울경제",
                        date: "2021.02",
                        title:
                          "'토스가 핀테크 유니콘 되기까지' 오리지널 다큐멘터리 공개",
                      },
                      {
                        source: "헤럴드경제",
                        date: "2021.02",
                        title:
                          "'모바일・초보・밀레니얼' 3박자 갖춘 토스증권 출범",
                      },
                    ],
                  },
                  {
                    id: "tab-20",
                    articles: [
                      {
                        source: "중앙일보",
                        date: "2020.12",
                        title:
                          '휴가 무제한, 고과∙보고 없는 토스 "자유 주면 영웅이 나온다"',
                      },
                      {
                        source: "MTN",
                        date: "2020.08",
                        title:
                          "토스, '역대 최대 규모' 2000억원 투자 유치…'금융 슈퍼앱' 실현",
                      },
                      {
                        source: "중앙일보",
                        date: "2020.08",
                        title:
                          "토스의 영토확대…317조 PG시장 판 흔들 '토스페이먼츠' 출범",
                      },
                      {
                        source: "매일경제",
                        date: "2020.07",
                        title:
                          "명의도용·보이스피싱 피해…토스, 업계 첫 `전액보상제`",
                      },
                      {
                        source: "연합뉴스",
                        date: "2020.05",
                        title:
                          "토스, 4월 사상 첫 흑자…'본격 이익 성장궤도 진입'",
                      },
                      {
                        source: "이데일리",
                        date: "2020.03",
                        title:
                          "토스, 투자중개업 예비인가 획득…'20~30대 투자참여 이끌 것'",
                      },
                    ],
                  },
                  {
                    id: "tab-21",
                    articles: [
                      {
                        source: "KBS",
                        date: "2019.12",
                        title: "'토스뱅크'도 나온다…제3 인터넷 은행 예비인가",
                      },
                      {
                        source: "CNBC",
                        date: "2019.09",
                        title:
                          "This dentist built a $2 billion Korean start-up — after 8 failed businesses along the way",
                      },
                      {
                        source: "지디넷코리아",
                        date: "2019.08",
                        title: "토스, 770억원 투자 유치...'기업가치 2조7천억'",
                      },
                      {
                        source: "DBR",
                        date: "2019.01",
                        title: "지시-명령은 없다… 리더는 소통을 도와줄뿐",
                      },
                    ],
                  },
                  {
                    id: "tab-22",
                    articles: [
                      {
                        source: "BloomBerg",
                        date: "2018.12",
                        title:
                          "Digital Wallet Launched by Dentist Is Valued at $1.2 Billion",
                      },
                      {
                        source: "CNBC",
                        date: "2018.11",
                        title: "토스, 과기부 주최 '정보보호 대상' 수상",
                      },
                      {
                        source: "지디넷코리아",
                        date: "2018.07",
                        title:
                          "간편함과 속도로 글로벌 핀테크기업 도약…`토스` 들여다 보니",
                      },
                      {
                        source: "DBR",
                        date: "2018.01",
                        title:
                          "이승건 '30초 송금 '토스' 돌풍… 금융소비자가 첫 번째로 찾는 서비스될 것'",
                      },
                    ],
                  },
                  {
                    id: "tab-23",
                    articles: [
                      {
                        source: "BloomBerg",
                        date: "2017.12",
                        title:
                          "Unicorn Rising: How This South Korean PayPal-Backed Startup Churns $1B A Month",
                      },
                      {
                        source: "CNBC",
                        date: "2017.11",
                        title:
                          "'8전 9기 CEO'의 초간편 송금앱… 실리콘밸리도 놀랐다",
                      },
                      {
                        source: "지디넷코리아",
                        date: "2017.11",
                        title:
                          "간편 송금 앱 '토스' 운영 비바리퍼블리카, 한국 첫 세계 100대 핀테크 기업에",
                      },
                    ],
                  },
                ].map((tab) => (
                  <ul
                    key={tab.id}
                    className={`article-inner ${
                      activeArticleTab === tab.id ? "current" : ""
                    }`}
                    id={tab.id}
                  >
                    {tab.articles.map((article, idx) => (
                      <li key={idx}>
                        <Link href="#">
                          <div className="article">
                            {article.source}
                            <span>{article.date}</span>
                            <span className="article-title">
                              {article.title}
                            </span>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer>
        <div className="footer">
          <div className="site-wrap">
            <ul className="site">
              <li className="li-title">서비스</li>
              <li>
                <Link href="#">공지사항</Link>
              </li>
              <li>
                <Link href="#">자주 묻는 질문</Link>
              </li>
              <li>
                <Link href="#">공동인증서 관리</Link>
              </li>
              <li>
                <Link href="#">계정 일시잠금</Link>
              </li>
              <li>
                <Link href="#">고객센터</Link>
              </li>
            </ul>

            <ul className="site">
              <li className="li-title">회사</li>
              <li>
                <Link href="#">회사 소개</Link>
              </li>
              <li>
                <Link href="#">토스페이먼츠</Link>
              </li>
              <li>
                <Link href="#">토스인슈어런스</Link>
              </li>
              <li>
                <Link href="#">토스증권</Link>
              </li>
              <li>
                <Link href="#">토스씨엑스</Link>
              </li>
              <li>
                <Link href="#">채용</Link>
              </li>
              <li>
                <Link href="#">블로그</Link>
              </li>
              <li>
                <Link href="#">공고</Link>
              </li>
            </ul>

            <ul className="site">
              <li className="li-title">문의</li>
              <li>
                <Link href="#">사업 제휴</Link>
              </li>
              <li>
                <Link href="#">광고 문의</Link>
              </li>
              <li>
                <Link href="#">인증 사업 문의</Link>
              </li>
              <li>
                <Link href="#">마케팅·PR</Link>
              </li>
              <li>
                <Link href="#">IR</Link>
              </li>
            </ul>

            <ul className="site last">
              <li className="li-title">고객센터</li>
              <li>
                <Link href="#">전화: 1599-4905 (24시간 연중무휴)</Link>
              </li>
              <li>
                <Link href="#">이메일(고객전용): support@toss.im</Link>
              </li>
              <li>
                <Link href="#">이메일(외부기관전용): support-af@toss.im</Link>
              </li>
              <li>
                <Link href="#">민원 접수</Link>
              </li>
            </ul>
          </div>

          <div className="company">
            <span>㈜비바리퍼블리카</span>사업자 등록번호 : 120-88-01280 | 대표 :
            이승건
            <br />
            호스팅 서비스 : 주식회사 비바리퍼블리카 | 통신판매업 신고번호 :
            2014-서울강남-03377{" "}
            <Link href="#" className="company-check">
              사업자정보확인
            </Link>
            <br />
            06236 서울특별시 강남구 테헤란로 142, 12층
            <br className="m_br" />
            (역삼동, 아크플레이스)
            <br />
            고객센터 : 서울특별시 강남구 테헤란로 133, 8층 (역삼동,
            한국타이어빌딩)
          </div>

          <div className="term">
            <ul>
              <li>
                <Link href="#">서비스 이용약관</Link>
              </li>
              <li>
                <Link href="#">통합 금융정보 서비스 약관</Link>
              </li>
              <li>
                <Link href="#">이용자의 권리 및 유의사항</Link>
              </li>
              <li>
                <Link href="#" className="f-color">
                  개인정보 처리방침
                </Link>
              </li>
              <li>
                <Link href="#" className="f-color">
                  채용팀 개인정보 처리방침
                </Link>
              </li>
              <li>
                <Link href="#">영상정보처리기기 운영 관리 방침</Link>
              </li>
              <li>
                <Link href="#">위치기반서비스 이용약관</Link>
              </li>
              <li>
                <Link href="#">가맹점 고지사항</Link>
              </li>
              <li>
                <Link href="#">토스인증서업무준칙</Link>
              </li>
              <li>
                <Link href="#">토스인증서이용약관</Link>
              </li>
            </ul>
          </div>

          <ul className="sns">
            <li>
              <Link href="#">
                <Image
                  src="/images/toss/icn-facebook.svg"
                  alt="facebook"
                  width={24}
                  height={24}
                />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image
                  src="/images/toss/icn-blog.svg"
                  alt="blog"
                  width={24}
                  height={24}
                />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image
                  src="/images/toss/icn-naver.svg"
                  alt="naver"
                  width={24}
                  height={24}
                />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image
                  src="/images/toss/icn-twitter.svg"
                  alt="X"
                  width={24}
                  height={24}
                />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image
                  src="/images/toss/icn-instagram.svg"
                  alt="instagram"
                  width={24}
                  height={24}
                />
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </TossMainStyled>
  );
};

export default TossMainComponent;
