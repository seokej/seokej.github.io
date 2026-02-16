import React, { Fragment, useEffect, useState } from "react";
import styles from "./SdfHeaderComponent.module.scss";
import SdfMoHeaderComponent from "./SdfMoHeaderComponent";

const SdfHeaderComponent = () => {
  // gnb dropMenu 관련 state
  const [isActive, setIsActive] = useState<boolean>(false);
  // m_gnb dropMenu 관련 state
  const [isMoActive, setIsMoActive] = useState<boolean>(false);

  // gnb메뉴에 있는 돋보기(검색)버튼 관련 state
  const [isSearchBtnClick, setIsSearchBtnClick] = useState<boolean>(false);

  useEffect(() => {
    if (isSearchBtnClick) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isSearchBtnClick]);

  /**
   * 드롭다운 메뉴 마우스/키보드 제어를 위한 핸들러
   */
  const handleGnbMouseEnter = () => {
    setIsActive(true);
  };

  const handleGnbMouseLeave = () => {
    setIsActive(false);
  };

  /**
   * 검색 버튼 클릭했을때 동작하는 함수
   * (검색 모달창을 띄움)
   */
  const handleSearchBtn = () => {
    setIsSearchBtnClick(true);
  };

  /**
   * gnb에 enter / space 키를 사용하면 dropMenu가 노출되도록 하는 함수
   * @param e
   */
  const onKeyUp = (
    e: React.KeyboardEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsActive(true);
    }
  };

  /**
   * 키보드 tab으로 dropMenu를 지나 gnb에 있는 검색버튼에 도달했을 때 비노출되도록 하는 함수
   */
  const onChangeGnbFocus = () => {
    setIsActive(false);
  };

  return (
    <Fragment>
      <header className={styles.header} role="banner">
        <div className={styles.header__inner}>
          <a
            href="/"
            className={styles.logo}
            aria-label="서울디지털재단 홈페이지로 이동"
          >
            <span className="blind">서울디지털재단</span>
          </a>
          <nav
            className={styles.gnbWrap}
            role="navigation"
            aria-label="주요 메뉴"
          >
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
                  <button
                    type="button"
                    className={styles.gnbTop__menuItemKor}
                    aria-current="page"
                  >
                    KOR
                  </button>
                </li>
                <li className={styles.gnbTop__menuList}>
                  <button type="button">ENG</button>
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
              <ul
                id="gnbBottom"
                className={styles.gnbBottom}
                aria-label="주요 서비스 메뉴"
                onMouseEnter={handleGnbMouseEnter}
              >
                <li className={styles.gnbBottom__item}>
                  <button
                    type="button"
                    className={styles.gnbBottom__itemLink}
                    aria-haspopup="true"
                    aria-expanded={isActive}
                    onKeyUp={(e) => {
                      onKeyUp(e);
                    }}
                  >
                    주요사업
                  </button>
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
                  <button
                    type="button"
                    className={styles.gnbBottom__itemLink}
                    aria-haspopup="true"
                    aria-expanded={isActive}
                    onKeyUp={(e) => {
                      onKeyUp(e);
                    }}
                  >
                    소통마당
                  </button>
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
                  <button
                    type="button"
                    className={styles.gnbBottom__itemLink}
                    aria-haspopup="true"
                    aria-expanded={isActive}
                    onKeyUp={(e) => {
                      onKeyUp(e);
                    }}
                  >
                    지식정보
                  </button>
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
                  <button
                    type="button"
                    className={styles.gnbBottom__itemLink}
                    aria-haspopup="true"
                    aria-expanded={isActive}
                    onKeyUp={(e) => {
                      onKeyUp(e);
                    }}
                  >
                    알림마당
                  </button>
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
                  <button
                    type="button"
                    className={styles.gnbBottom__itemLink}
                    aria-haspopup="true"
                    aria-expanded={isActive}
                    onKeyUp={(e) => {
                      onKeyUp(e);
                    }}
                  >
                    기관소개
                  </button>
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
                    type="button"
                    aria-label="통합 검색 열기"
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
          aria-hidden={!isActive}
          onMouseEnter={handleGnbMouseEnter}
          onMouseLeave={handleGnbMouseLeave}
        />

        <div
          className={
            isSearchBtnClick ? styles.search__wrap__active : styles.search__wrap
          }
          role="dialog"
          aria-modal="true"
          aria-labelledby="header__search-label"
          aria-hidden={!isSearchBtnClick}
        >
          <div className={styles.search__inner}>
            <label
              id="header__search-label"
              htmlFor="header__search"
              className={styles.header__search}
            >
              검색어를 입력하세요
            </label>
            <input
              type="text"
              id="header__search"
              name="header__search"
              placeholder="검색어를 입력하세요"
            />
            <button type="submit" className={styles.header__searchBtn}>
              <img src="/images/sdf/ico/ico_search.png" alt="검색버튼" />
            </button>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setIsSearchBtnClick(false);
            }}
            className={styles.header__searchBtnClose}
            aria-label="검색창 닫기"
          >
            <img
              src="/images/sdf/ico/ico_close.png"
              alt=""
              aria-hidden="true"
            />
          </button>
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
        </div>
      </header>
      <div className={isSearchBtnClick ? "dim" : ""} />
    </Fragment>
  );
};

export default SdfHeaderComponent;
