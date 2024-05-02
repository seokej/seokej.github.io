import React, { Fragment, useEffect, useState } from "react";
import styles from "./SdfHeaderComponent.module.scss";
import SdfMoHeaderComponent from "./SdfMoHeaderComponent";

const SdfHeaderComponent = () => {
  // gnb dropMenu 관련 state
  const [isActive, setIsActive] = useState<boolean>(false);
  // m_gnb dropMenu 관련 state
  const [isMoActive, setIsMoActive] = useState<boolean>(false);

  // m_gnb dropMenuList 관련 state
  // const [isOpen, setIsOpen] = useState<boolean>(false);
  // const [isKeyActive, setIsKeyActive] = useState<boolean>(false);

  // gnb메뉴에 있는 돋보기(검색)버튼 관련 state
  const [isSearchBtnClick, setIsSearchBtnClick] = useState<boolean>(false);

  useEffect(() => {
    const ele = document.getElementById("gnbBottom");
    const ele_overlay = document.getElementById("overlay");

    // 마우스가 'gnbBottom'영역에 있을 때 dropMenu가 노출되도록
    if (ele) {
      ele.addEventListener("mouseenter", () => {
        setIsActive(true);
      });
    }

    // 마우스가 'overlay'영역에 있을 때 dropMenu가 노출되도록
    if (!ele_overlay) return;
    ele_overlay.addEventListener("mouseenter", () => {
      setIsActive(true);
    });

    // 마우스가 'overlay'영역에서 벗어났을때 dropMenu가 비노출되도록
    ele_overlay.addEventListener("mouseleave", () => {
      setIsActive(false);
    });
  }, []);

  /**
   * 검색 버튼 클릭했을때 동작하는 함수
   * (검색 모달창을 띄움)
   */
  const handleSearchBtn = () => {
    setIsSearchBtnClick(true);
  };

  /**
   * gnb에 enter키를 사용하면 dropMenu가 노출되도록 하는 함수
   * @param e
   */
  const onKeyUp = (e: any) => {
    if (e.keyCode === 13) {
      setIsActive(true);
    }
  };

  /**
   * 키보드 tab으로 dropMenu를 지나 gnb에 있는 검색버튼에 도달했을 때 비노출되도록 하는 함수
   */
  const onChangeGnbFocus = () => {
    setIsActive(false);
  };

  /**
   *  Mo용 Gnb
   */
  // const onClickMoGnb = (e: any) => {
  //   const items = document.querySelectorAll(`.${styles.m__gnbMenuList}`);

  //   items.forEach((item) => {
  //     item.addEventListener("click", () => {
  //       items.forEach((e) => {
  //         e.classList.remove(`${styles.m__gnbMenuListActive}`);
  //       });
  //       item.classList.toggle(`${styles.m__gnbMenuListActive}`);
  //     });
  //   });
  // };

  return (
    <Fragment>
      <header className={styles.header}>
        <div className={styles.header__inner}>
          <a className={styles.logo}>
            <span className="blind">서울디지털재단</span>
          </a>
          <nav className={styles.gnbWrap}>
            <div className={styles.gnbTop}>
              <ul className={styles.gnbTop__menu}>
                <li className={styles.gnbTop__menuList}>
                  <a href="#" className={styles.gnbTop__menuItem}>
                    정보공개
                  </a>
                </li>
                <li className={styles.gnbTop__menuList}>
                  <a href="#">로그인</a>
                </li>
                <li className={styles.gnbTop__menuList}>
                  <a href="#" className={styles.gnbTop__menuItemKor}>
                    KOR
                  </a>
                </li>
                <li className={styles.gnbTop__menuList}>
                  <a href="#">ENG</a>
                </li>
              </ul>

              <ul className={styles.gnbTop__snsMenu}>
                <li>
                  <a href="#">
                    <img src="/images/sdf/gnb/ico_gnb_blog.png" alt="블로그" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/images/sdf/gnb/ico_gnb_fb.png" alt="페이스북" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/images/sdf/gnb/ico_gnb_yt.png" alt="유튜브" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="/images/sdf/gnb/ico_gnb_in.png"
                      alt="인스타그램"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="/images/sdf/gnb/ico_report.jpg"
                      alt="부정부패신고"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="/images/sdf/gnb/ico_seoul.jpg"
                      alt="동행매력서울특별시"
                    />
                  </a>
                </li>
              </ul>
            </div>

            <div id="mainHeader">
              <ul id="gnbBottom" className={styles.gnbBottom}>
                <li className={styles.gnbBottom__item}>
                  <a
                    href="#"
                    className={styles.gnbBottom__itemLink}
                    onKeyUp={(e) => {
                      onKeyUp(e);
                    }}
                  >
                    주요사업
                  </a>
                  <ul
                    className={
                      isActive
                        ? styles.gnbBottom__item__drop__active
                        : styles.gnbBottom__item__drop
                    }
                  >
                    <li className={styles.gnbBottom__item__dropList}>
                      <a href="#">A·B·C를 통한 지능 정보화 선도</a>
                    </li>
                    <li className={styles.gnbBottom__item__dropList}>
                      <a href="#">스마트시티 글로벌 경쟁력 강화</a>
                    </li>
                    <li className={styles.gnbBottom__item__dropList}>
                      <a href="#">디지털 포용으로 동행서울 구현</a>
                    </li>
                  </ul>
                </li>
                <li className={styles.gnbBottom__item}>
                  <a
                    href="#"
                    className={styles.gnbBottom__itemLink}
                    onKeyUp={(e) => {
                      onKeyUp(e);
                    }}
                  >
                    소통마당
                  </a>
                  <ul
                    className={
                      isActive
                        ? styles.gnbBottom__item__drop__active
                        : styles.gnbBottom__item__drop
                    }
                  >
                    <li className={styles.gnbBottom__item__dropList}>
                      <a href="#">행사 · 교육</a>
                    </li>
                    <li className={styles.gnbBottom__item__dropList}>
                      <a href="#">공지사항</a>
                    </li>
                    <li className={styles.gnbBottom__item__dropList}>
                      <a href="#">사업공고</a>
                    </li>
                    <li className={styles.gnbBottom__item__dropList}>
                      <a href="#">채용공고</a>
                    </li>
                    <li className={styles.gnbBottom__item__dropList}>
                      <a href="#">Q&A</a>
                    </li>
                  </ul>
                </li>
                <li className={styles.gnbBottom__item}>
                  <a
                    href="#"
                    className={styles.gnbBottom__itemLink}
                    onKeyUp={(e) => {
                      onKeyUp(e);
                    }}
                  >
                    지식정보
                  </a>
                  <ul
                    className={
                      isActive
                        ? styles.gnbBottom__item__drop__active
                        : styles.gnbBottom__item__drop
                    }
                  >
                    <li className={styles.gnbBottom__item__dropList}>
                      <a href="#">연구보고서</a>
                    </li>
                    <li className={styles.gnbBottom__item__dropList}>
                      <a href="#">비주얼 리포트</a>
                    </li>
                    <li className={styles.gnbBottom__item__dropList}>
                      <a href="#">자료실</a>
                    </li>
                    <li className={styles.gnbBottom__item__dropList}>
                      <a href="#">카드뉴스</a>
                    </li>
                  </ul>
                </li>
                <li className={styles.gnbBottom__item}>
                  <a
                    href="#"
                    className={styles.gnbBottom__itemLink}
                    onKeyUp={(e) => {
                      onKeyUp(e);
                    }}
                  >
                    알림마당
                  </a>
                  <ul
                    className={
                      isActive
                        ? styles.gnbBottom__item__drop__active
                        : styles.gnbBottom__item__drop
                    }
                  >
                    <li className={styles.gnbBottom__item__dropList}>
                      <a href="#">재단소식</a>
                    </li>
                    <li className={styles.gnbBottom__item__dropList}>
                      <a href="#">보도자료</a>
                    </li>
                    <li className={styles.gnbBottom__item__dropList}>
                      <a href="#">포토뉴스</a>
                    </li>
                    <li className={styles.gnbBottom__item__dropList}>
                      <a href="#">언론보도</a>
                    </li>
                    <li className={styles.gnbBottom__item__dropList}>
                      <a href="#">계약정보</a>
                    </li>
                  </ul>
                </li>
                <li className={styles.gnbBottom__item}>
                  <a
                    href="#"
                    className={styles.gnbBottom__itemLink}
                    onKeyUp={(e) => {
                      onKeyUp(e);
                    }}
                  >
                    기관소개
                  </a>
                  <ul
                    className={
                      isActive
                        ? styles.gnbBottom__item__drop__active
                        : styles.gnbBottom__item__drop
                    }
                  >
                    <li className={styles.gnbBottom__item__dropList}>
                      <a href="#">소개</a>
                    </li>
                    <li className={styles.gnbBottom__item__dropList}>
                      <a href="#">조직도</a>
                    </li>
                    <li className={styles.gnbBottom__item__dropList}>
                      <a href="#">인권경영</a>
                    </li>
                    <li className={styles.gnbBottom__item__dropList}>
                      <a href="#">윤리경영</a>
                    </li>
                    <li className={styles.gnbBottom__item__dropList}>
                      <a href="#">오시는 길</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <button
                    role="search"
                    onClick={() => {
                      handleSearchBtn();
                    }}
                    onFocus={() => {
                      onChangeGnbFocus();
                    }}
                    className={styles.gnbBottom__searchBtn}
                  >
                    <img
                      src="/images/sdf/gnb/ico_gnb_search.png"
                      alt="검색창 열림"
                    />
                    <span className="blind">검색 버튼</span>
                  </button>
                </li>
                <li className={styles.m__gnbMenuBtnWrap}>
                  <button
                    className={
                      isMoActive
                        ? `${styles.m__gnbMenuBtn} ${styles.active}`
                        : styles.m__gnbMenuBtn
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMoActive((prev) => !prev);
                    }}
                  >
                    <span className={styles.m__gnbMenuLine} />
                    <span className={styles.m__gnbMenuLine} />
                    <span className={styles.m__gnbMenuLine} />
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div
          id="overlay"
          className={
            isActive
              ? styles.gnbBottom__overlay__active
              : styles.gnbBottom__overlay
          }
        />

        <div
          className={
            isSearchBtnClick ? styles.search__wrap__active : styles.search__wrap
          }
        >
          <div className={styles.search__inner}>
            <label htmlFor="hader__search" className={styles.header__search}>
              검색어를 입력하세요
            </label>
            <input
              type="text"
              id="hader__search"
              name="hader__search"
              placeholder="검색어를 입력하세요"
            />
            <button type="submit" className={styles.header__searchBtn}>
              <img src="/images/sdf/ico/ico_search.png" alt="검색버튼" />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsSearchBtnClick(false);
              }}
              className={styles.header__searchBtnClose}
            >
              <img src="/images/sdf/ico/ico_close.png" alt="닫기버튼" />
            </button>
          </div>
        </div>

        <div
          className={
            isMoActive
              ? `${styles.m__gnbMenu} ${styles.active}`
              : styles.m__gnbMenu
          }
        >
          <div>
            <div>
              <ul className={styles.m__gnbMenuLoginWrap}>
                <li className={styles.m__gnbMenuLogin}>
                  <a href="#">로그인</a>
                </li>
                <li className={styles.m__gnbMenuLoginKrWrap}>
                  <a href="#" className={styles.m__gnbMenuLoginKr}>
                    KR
                  </a>
                  <a href="#">EN</a>
                </li>
              </ul>
            </div>
          </div>

          <SdfMoHeaderComponent />
          {/* <div className={styles.m__gnbMenuBottom}>
            <ul>
              <li className={styles.m__gnbMenuList}>
                <a
                  className={styles.m__gnbMenuListLink}
                  href="#"
                  onClick={(e) => {
                    // onClickMoGnb(e);
                  }}
                >
                  주요사업
                </a>
                <ul className={styles.m__gnbMenuDropWrap}>
                  <li>
                    <a href="#">A·B·C를 통한 지능 정보화 선도</a>
                    <ul>
                      <li>
                        <a href="#">도시데이터 활용 컨설팅</a>
                      </li>
                      <li>
                        <a href="#">AI·행정서비스 연구 개발</a>
                      </li>
                      <li>
                        <a href="#">공공데이터 활용 분석 지원</a>
                      </li>
                      <li>
                        <a href="#">디지털정책연구</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">스마트시티 글로벌 경쟁력 강화</a>
                    <ul>
                      <li>
                        <a href="#">서울스마트시티센터 운영</a>
                      </li>
                      <li>
                        <a href="#">스마트도시 솔루션 해외진출</a>
                      </li>
                      <li>
                        <a href="#">서울 스마트라이프 위크</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">디지털 포용으로 동행서울 구현</a>
                    <ul>
                      <li>
                        <a href="#">어르신 디지털 나들이 지원단</a>
                      </li>
                      <li>
                        <a href="#">디지털 포용 콘텐츠 개발 및 플랫폼 운영</a>
                      </li>
                      <li>
                        <a href="#">디지털 돌봄 체험버스 운영</a>
                      </li>
                      <li>
                        <a href="#">스마트도시 서비스 개발</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className={styles.m__gnbMenuList}>
                <a
                  className={styles.m__gnbMenuListLink}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    // onClickMoGnb(e);
                  }}
                >
                  소통마당
                </a>
                <ul className={styles.m__gnbMenuDropWrap}>
                  <li>
                    <a href="#">행사 · 교육</a>
                  </li>
                  <li>
                    <a href="#">공지사항</a>
                  </li>
                  <li>
                    <a href="#">사업공고</a>
                  </li>
                  <li>
                    <a href="#">채용공고</a>
                  </li>
                  <li>
                    <a href="#">Q&amp;A</a>
                  </li>
                </ul>
              </li>
              <li className={styles.m__gnbMenuList}>
                <a
                  className={styles.m__gnbMenuListLink}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    // onClickMoGnb(e);
                  }}
                >
                  지식정보
                </a>
                <ul className={styles.m__gnbMenuDropWrap}>
                  <li>
                    <a href="#">연구보고서</a>
                  </li>
                  <li>
                    <a href="#">비주얼 리포트</a>
                  </li>
                  <li>
                    <a href="#">자료실</a>
                  </li>
                  <li>
                    <a href="#">카드뉴스</a>
                  </li>
                </ul>
              </li>
              <li className={styles.m__gnbMenuList}>
                <a
                  className={styles.m__gnbMenuListLink}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    // onClickMoGnb(e);
                  }}
                >
                  알림마당
                </a>
                <ul className={styles.m__gnbMenuDropWrap}>
                  <li>
                    <a href="#">재단소식</a>
                  </li>
                  <li>
                    <a href="#">보도자료</a>
                  </li>
                  <li>
                    <a href="#">포토뉴스</a>
                  </li>
                  <li>
                    <a href="#">언론보도</a>
                  </li>
                  <li>
                    <a href="#">계약정보</a>
                    <ul>
                      <li>
                        <a href="#">발주계획</a>
                      </li>
                      <li>
                        <a href="#">계약체결현황</a>
                      </li>
                      <li>
                        <a href="#">입찰공고</a>
                      </li>
                      <li>
                        <a href="#">개찰결과</a>
                      </li>
                      <li>
                        <a href="#">검사검수</a>
                      </li>
                      <li>
                        <a href="#">대금지급</a>
                      </li>
                      <li>
                        <a href="#">계약변경현황</a>
                      </li>
                      <li>
                        <a href="#">하도급계약현황</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className={styles.m__gnbMenuList}>
                <a
                  className={styles.m__gnbMenuListLink}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    // onClickMoGnb(e);
                  }}
                >
                  기관소개
                </a>
                <ul className={styles.m__gnbMenuDropWrap}>
                  <li>
                    <a href="#">소개</a>
                    <ul>
                      <li>
                        <a href="#">인사말</a>
                      </li>
                      <li>
                        <a href="#">연혁</a>
                      </li>
                      <li>
                        <a href="#">비전</a>
                      </li>
                      <li>
                        <a href="#">ESG경영</a>
                      </li>
                      <li>
                        <a href="#">CI소개</a>
                      </li>
                      <li>
                        <a href="#">캐릭터</a>
                      </li>
                      <li>
                        <a href="#">홍보자료</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">조직도</a>
                  </li>
                  <li>
                    <a href="#">인권경영</a>
                    <ul>
                      <li>
                        <a href="#">인권경영 선언문·내부규정</a>
                      </li>
                      <li>
                        <a href="#">인권경영 추진 현황</a>
                      </li>
                      <li>
                        <a href="#">인권침해 신고센터</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">윤리경영</a>
                    <ul>
                      <li>
                        <a href="#">임직원 행동강령</a>
                      </li>
                      <li>
                        <a href="#">클린신고센터</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">오시는 길</a>
                    <ul>
                      <li>
                        <a href="#">서울디지털재단 본사</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className={styles.m__gnbMenuList}>
                <a
                  className={styles.m__gnbMenuListLink}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    // onClickMoGnb(e);
                  }}
                >
                  정보공개
                </a>
                <ul className={styles.m__gnbMenuDropWrap}>
                  <li>
                    <a href="#">정보공개 제도</a>
                    <ul>
                      <li>
                        <a href="#">정보공개 제도안내</a>
                      </li>
                      <li>
                        <a href="#">사전정보공표</a>
                      </li>
                      <li>
                        <a href="#">결재문서 원문공개</a>
                      </li>
                      <li>
                        <a href="#">경영/행정정보공개</a>
                      </li>
                      <li>
                        <a href="#">정보공개 심의회</a>
                      </li>
                      <li>
                        <a href="#">정보공개 목록</a>
                      </li>
                      <li>
                        <a href="#">위원회 현황</a>
                      </li>
                      <li>
                        <a href="#">비공개대상정보 세부기준</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">경영정보</a>
                    <ul>
                      <li>
                        <a href="#">회의록/회의결과</a>
                      </li>
                      <li>
                        <a href="#">출장 결과보고</a>
                      </li>
                      <li>
                        <a href="#">규정집</a>
                      </li>
                      <li>
                        <a href="#">수의계약</a>
                      </li>
                      <li>
                        <a href="#">세입세출 예산</a>
                      </li>
                      <li>
                        <a href="#">자산운영현황</a>
                      </li>
                      <li>
                        <a href="#">결산재무제표</a>
                      </li>
                      <li>
                        <a href="#">세입세출 결산</a>
                      </li>
                      <li>
                        <a href="#">인건비 예산 및 집행현황</a>
                      </li>
                      <li>
                        <a href="#">출연금조성현황</a>
                      </li>
                      <li>
                        <a href="#">복리후생비 집행현황</a>
                      </li>
                      <li>
                        <a href="#">사업계획</a>
                      </li>
                      <li>
                        <a href="#">회계감사보고</a>
                      </li>
                      <li>
                        <a href="#">간행물</a>
                      </li>
                      <li>
                        <a href="#">경영실적 평가 결과</a>
                      </li>
                      <li>
                        <a href="#">기관장 성과계약 달성도</a>
                      </li>
                      <li>
                        <a href="#">이사회 구성</a>
                      </li>
                      <li>
                        <a href="#">업무차량 현황</a>
                      </li>
                      <li>
                        <a href="#">상품권 구매 관리 현황</a>
                      </li>
                      <li>
                        <a href="#">부패방지 시책평가 결과</a>
                      </li>
                      <li>
                        <a href="#">시민만족도 평가 결과</a>
                      </li>
                      <li>
                        <a href="#">대외포상내역</a>
                      </li>
                      <li>
                        <a href="#">행정정보공개평가</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">공공데이터 개방</a>
                  </li>
                  <li>
                    <a href="#">대외협력</a>
                    <ul>
                      <li>
                        <a href="#">사회공헌활동현황</a>
                      </li>
                      <li>
                        <a href="#">국내MOU체결현황</a>
                      </li>
                      <li>
                        <a href="#">해외MOU체결현황</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">조직및인사</a>
                    <ul>
                      <li>
                        <a href="#">장애인고용현황</a>
                      </li>
                      <li>
                        <a href="#">임원 및 인력현황</a>
                      </li>
                      <li>
                        <a href="#">친인척고용현황</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">구매실적</a>
                    <ul>
                      <li>
                        <a href="#">사회적기업 구매실적</a>
                      </li>
                      <li>
                        <a href="#">장애인기업 구매실적</a>
                      </li>
                      <li>
                        <a href="#">중증장애인 생산품 구매실적 </a>
                      </li>
                      <li>
                        <a href="#">소기업·소상공인 구매실적 </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">감사</a>
                    <ul>
                      <li>
                        <a href="#">외부감사결과</a>
                      </li>
                      <li>
                        <a href="#">자체감사결과</a>
                      </li>
                      <li>
                        <a href="#">청렴교육현황</a>
                      </li>
                      <li>
                        <a href="#">일상감사기준</a>
                      </li>
                      <li>
                        <a href="#">일상감사결과</a>
                      </li>
                      <li>
                        <a href="#">부패임직원현황</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div> */}
        </div>
      </header>
      <div className={isSearchBtnClick ? "dim" : ""} />
    </Fragment>
  );
};

export default SdfHeaderComponent;
