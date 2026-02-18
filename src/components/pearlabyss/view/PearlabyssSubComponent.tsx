"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { PearlabyssSubStyled } from "../styled/PearlabyssSubStyled";

const PearlabyssSubComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isLangKor, setIsLangKor] = useState(true);
  const [activeFooter, setActiveFooter] = useState<string | null>(null);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [memberCount, setMemberCount] = useState(0);
  const memberCountRef = useRef<HTMLDivElement>(null);

  // 메뉴 토글 핸들러
  const handleMenuToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  };

  // 드롭다운 메뉴 클릭 핸들러 (원본: .menu>a 클릭)
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

  // 숫자 카운팅 애니메이션
  useEffect(() => {
    const memberCountConTxt = 13079850;
    const duration = 600;
    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // easeOutCubic easing
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(
        startValue + (memberCountConTxt - startValue) * eased,
      );

      setMemberCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setMemberCount(memberCountConTxt);
      }
    };

    // 컴포넌트 마운트 후 약간의 딜레이를 두고 시작
    const timer = setTimeout(() => {
      animate();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // 숫자에 콤마 추가 함수
  const numberWithCommas = (x: number) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <PearlabyssSubStyled>
      <header>
        <div className={`main_inner ${isHeaderFixed ? "fixed" : ""}`} id="lnb">
          <div className="top_wrap">
            <div className="top_inner">
              <div className="logo">
                <Link href="/pearlabyss" className="logo_box">
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
                          <Link href="#">
                            <span>펄어비스 소개</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
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
                          <Link href="#">
                            <span>검은사막</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <span>검은사막 모바일</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <span>섀도우 아레나</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <span>붉은사막</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <span>도깨비</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
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
                          <Link href="#">
                            <span>보도자료</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
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
                          <Link href="#">
                            <span>기업문화</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <span>복지</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <span>펄어비스인</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
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
                          <Link href="#">
                            <span>채용소개</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
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
                          <Link href="#">
                            <span>기업지배구조</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <span>주가정보</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <span>재무정보</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <span>공시·공고</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
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

      <section className="section_wrap">
        <div className="section">
          <div className="main">
            <Image
              src="/images/pearlabyss/gov_title_bg.jpg"
              className="two_img"
              alt="회사건물"
              width={1920}
              height={600}
            />
            <div className="main_title">
              <h2 className="maintitle bold">기업지배구조</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="sectionwrap">
        <div className="container">
          <div className="left_wrap">
            <div className="left_title">
              <h3 className="h3 bold">주주 구성</h3>
            </div>
            <div className="count">
              <p>총 발행주식 수</p>
              <div className="memberCountCon bold" ref={memberCountRef}>
                {numberWithCommas(memberCount)}
              </div>
            </div>
          </div>

          <div className="right_wrap">
            <div className="right_title">
              <p className="righttitle bold titlenone">주주 현황</p>
              <p className="date right_date">2020.05.08 UTC+9 기준</p>
            </div>

            <table className="common_table">
              <colgroup>
                <col style={{ width: "28%" }} />
                <col style={{ width: "36%" }} />
                <col style={{ width: "36%" }} />
              </colgroup>

              <thead>
                <tr className="bold">
                  <th>주요 주주</th>
                  <th className="th-center">주식 수</th>
                  <th className="th-center">비율</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="black">김대일</td>
                  <td className="tr-right">4,710,422</td>
                  <td className="tr-right">36.0%</td>
                </tr>

                <tr>
                  <td className="black">임원진</td>
                  <td className="tr-right">1,810,223</td>
                  <td className="tr-right">13.8%</td>
                </tr>

                <tr>
                  <td className="black">자사주</td>
                  <td className="tr-right">1,043,493</td>
                  <td className="tr-right">8.0%</td>
                </tr>

                <tr>
                  <td className="black">GIC Private Limited</td>
                  <td className="tr-right">525,753</td>
                  <td className="tr-right">4.0%</td>
                </tr>

                <tr>
                  <td className="black">기타</td>
                  <td className="tr-right">4,989,959</td>
                  <td className="tr-right">38.1%</td>
                </tr>
              </tbody>
            </table>

            <p className="date2">
              GIC Private Limited : 주식 등의 대량보유상황보고서 기준
              (2020.05.08 UTC+9 공시)
            </p>
          </div>
        </div>
      </section>

      <section className="sectionwrap_under">
        <div className="container">
          <div className="left_wrap">
            <div className="left_title">
              <h3 className="h3 bold">이사회 구성</h3>
            </div>
          </div>

          <div className="right_wrap">
            <div className="right_title">
              <p className="righttitle bold t_m_top">사내이사</p>
            </div>

            <table className="common_table">
              <colgroup>
                <col style={{ width: "28%" }} />
                <col style={{ width: "36%" }} />
                <col style={{ width: "36%" }} />
              </colgroup>

              <thead>
                <tr className="bold">
                  <th>성명</th>
                  <th>담당업무</th>
                  <th>약력</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="black">김대일</td>
                  <td>이사회 의장 & 개발 총괄 프로듀서</td>
                  <td>
                    (前)가마소프트
                    <br />
                    (前)NHN게임즈
                    <br />
                    (前)웹젠
                  </td>
                </tr>

                <tr>
                  <td className="black">정경인</td>
                  <td>대표이사 (CEO)</td>
                  <td>(前)LB인베스트먼트</td>
                </tr>

                <tr>
                  <td className="black">서용수</td>
                  <td>아트부문 총괄 이사 (AD)</td>
                  <td>
                    (前)NHN게임즈
                    <br />
                    (前)웹젠
                  </td>
                </tr>

                <tr>
                  <td className="black">지희환</td>
                  <td>프로그램부문 총괄 이사 (CTO)</td>
                  <td>(前)NHN게임즈</td>
                </tr>

                <tr>
                  <td className="black">윤재민</td>
                  <td>부사장 (VP)</td>
                  <td>(前)게임어바웃 대표이사</td>
                </tr>

                <tr>
                  <td className="black">허진영</td>
                  <td>운영 총괄 이사 (COO)</td>
                  <td>(前)다음게임 CPO</td>
                </tr>
              </tbody>
            </table>

            <div className="right_title">
              <p className="righttitle bold">사외이사</p>
            </div>

            <table className="common_table">
              <colgroup>
                <col style={{ width: "28%" }} />
                <col style={{ width: "36%" }} />
                <col style={{ width: "36%" }} />
              </colgroup>

              <thead>
                <tr className="bold">
                  <th>성명</th>
                  <th>담당업무</th>
                  <th>약력</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="black">한정현</td>
                  <td>경영자문</td>
                  <td>
                    서울대학교 컴퓨터공학 박사
                    <br />
                    Univ. of Cincinnati, Computer Science 석사
                    <br />
                    Univ. of Southern California, Computer Science 박사
                    <br />
                    (前)미국 상무성 NIST 연구원
                    <br />
                    (前)성균관대학교 정보통신공학부, 부교수
                    <br />
                    (現)고려대학교 정보대학 컴퓨터학과 교수
                  </td>
                </tr>

                <tr>
                  <td className="black">최형규</td>
                  <td>경영자문</td>
                  <td>
                    KAIST 전산 학사
                    <br />
                    KAIST 테크노MBA 석사
                    <br />
                    (前)NHN엔터테인먼트 이사
                    <br />
                    (現)데브시스터즈벤처스㈜ 대표이사
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="right_title">
              <p className="righttitle bold">감사</p>
            </div>

            <table className="common_table">
              <colgroup>
                <col style={{ width: "28%" }} />
                <col style={{ width: "36%" }} />
                <col style={{ width: "36%" }} />
              </colgroup>

              <thead>
                <tr className="bold">
                  <th>성명</th>
                  <th>담당업무</th>
                  <th>약력</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="black">홍성주</td>
                  <td>감사</td>
                  <td>
                    (前)다음게임 대표이사
                    <br />
                    (現)팀오투 대표이사
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
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
                <Link href="#">펄어비스 소개</Link>
              </li>
              <li>
                <Link href="#">연구소</Link>
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
                <Link href="#">검은사막</Link>
              </li>
              <li>
                <Link href="#">검은사막 모바일</Link>
              </li>
              <li>
                <Link href="#">섀도우 아레나</Link>
              </li>
              <li>
                <Link href="#">붉은사막</Link>
              </li>
              <li>
                <Link href="#">도깨비</Link>
              </li>
              <li>
                <Link href="#">플랜 8</Link>
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
                <Link href="#">보도자료</Link>
              </li>
              <li>
                <Link href="#">미디어 행사</Link>
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
                <Link href="#">기업문화</Link>
              </li>
              <li>
                <Link href="#">복지</Link>
              </li>
              <li>
                <Link href="#">펄어비스인</Link>
              </li>
              <li>
                <Link href="#">펄어비스 소식</Link>
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
                <Link href="#">채용소개</Link>
              </li>
              <li>
                <Link href="#">지원하기</Link>
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
                <Link href="#">기업지배구조</Link>
              </li>
              <li>
                <Link href="#">주가정보</Link>
              </li>
              <li>
                <Link href="#">재무정보</Link>
              </li>
              <li>
                <Link href="#">공시·공고</Link>
              </li>
              <li>
                <Link href="#">IR 자료</Link>
              </li>
            </ul>
          </div>

          <div className="footer f_1">
            <Link href="#" className="f_a_bold f_2">
              광고/제휴 문의
            </Link>
          </div>
          <div className="footer f_1">
            <Link href="#" className="f_a_bold f_2">
              기업윤리 신고센터
            </Link>
          </div>
          <div className="footer f_1">
            <Link href="#" className="f_a_bold f_2">
              개인정보 처리방침
            </Link>
          </div>
          <div className="footer f_1">
            <Link href="#" className="f_a_bold f_2">
              펄어비스 스토어
            </Link>
          </div>
          <div className="footer f_1">
            <Link href="#" className="f_a_bold f_2">
              게임 고객센터
            </Link>
          </div>
        </div>

        <div className="copyright_wrap">
          <div className="copyright_inner">
            <div className="footer_sns">
              <Link href="#">
                <div className="sns facebook"></div>
              </Link>
              <Link href="#">
                <div className="sns youtube"></div>
              </Link>
              <Link href="#">
                <div className="sns linkdin"></div>
              </Link>
            </div>

            <Link href="#">
              <div className="cr_logo"></div>
            </Link>
            <div className="cr_item">
              Copyright © Pearl Abyss Corp. All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </PearlabyssSubStyled>
  );
};

export default PearlabyssSubComponent;
