import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import { TossSubStyled } from "../styled/TossSubStyled";
// import "./toss_sub.css";

const TossSubComponent = () => {
  useEffect(() => {
    // toss_main.js의 스크롤 관련 로직을 React로 변환
    const handleScroll = () => {
      if (typeof window === "undefined") return;

      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const header = document.querySelector("header");

      if (scrollTop > 60) {
        header?.classList.add("topFixed");
      } else {
        header?.classList.remove("topFixed");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <TossSubStyled>
      <header>
        <div className="top">
          <div className="top_inner">
            <div className="logo_box">
              <Link href="#" className="logo">
                <span className="blind">토스</span>
                <div>
                  <Image
                    src="/images/toss/logo.svg"
                    alt="토스 로고"
                    width={100}
                    height={30}
                  />
                </div>
              </Link>
            </div>

            <div className="nav_wrap">
              <ul className="nav">
                <li>
                  <Link href="/toss/main">회사 소개</Link>
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

      <section>
        <div className="section">
          <div className="title_wrap">
            <h1>
              공동인증서 <br />
              주고받기
            </h1>

            <p>토스에 등록한 휴대폰 번호와 생년월일을 입력하세요.</p>

            <form className="input">
              <div className="form-group">
                <label className="form-group_label">휴대폰 번호</label>
                <div className="form-group_controls">
                  <div className="text-field">
                    <input
                      type="tel"
                      className="text-field_input"
                      autoComplete="tel"
                      placeholder="010 - 1234 - 5678"
                      maxLength={17}
                    />
                  </div>
                </div>
              </div>

              <div className="form-group second">
                <label className="form-group_label">생년월일</label>
                <div className="form-group_controls">
                  <div className="text-field">
                    <input
                      type="tel"
                      className="text-field_input"
                      autoComplete="bday"
                      placeholder="980216"
                      maxLength={6}
                    />
                  </div>
                </div>
              </div>

              <button id="button1" className="button" type="submit">
                <span className="button_content">확인</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer">
          <div className="site_wrap">
            <ul className="site">
              <li className="li_title">서비스</li>
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
              <li className="li_title">회사</li>
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
              <li className="li_title">문의</li>
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
              <li className="li_title">고객센터</li>
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
            <span>㈜비바리퍼블리카</span> 사업자 등록번호 : 120-88-01280 | 대표
            : 이승건 <br />
            호스팅 서비스 : 주식회사 비바리퍼블리카 | 통신판매업 신고번호 :
            2014-서울강남-03377 사업자정보확인 <br />
            06236 서울특별시 강남구 테헤란로 142, 12층 (역삼동, 아크플레이스){" "}
            <br />
            고객센터 : 서울특별시 강남구 테헤란로 133, 8층 (역삼동,
            한국타이어빌딩) <br />
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
                <Link href="#" className="f_color">
                  개인정보 처리방침
                </Link>
              </li>
              <li>
                <Link href="#" className="f_color">
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
                  alt="페이스북"
                  width={24}
                  height={24}
                />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image
                  src="/images/toss/icn-blog.svg"
                  alt="블로그"
                  width={24}
                  height={24}
                />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image
                  src="/images/toss/icn-naver.svg"
                  alt="네이버"
                  width={24}
                  height={24}
                />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image
                  src="/images/toss/icn-twitter.svg"
                  alt="트위터"
                  width={24}
                  height={24}
                />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image
                  src="/images/toss/icn-instagram.svg"
                  alt="인스타그램"
                  width={24}
                  height={24}
                />
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </TossSubStyled>
  );
};

export default TossSubComponent;
