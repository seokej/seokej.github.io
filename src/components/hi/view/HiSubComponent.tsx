"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiSubStyled } from "../styled/HiSubStyled";

const HiSubComponent = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [openPanelKey, setOpenPanelKey] = useState<string | null>(null);

  const handlePanelToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsPanelOpen((prev) => !prev);
  };

  const handlePanelClick = (e: React.MouseEvent, key: string) => {
    e.preventDefault();
    setOpenPanelKey((prev) => (prev === key ? null : key));
  };

  return (
    <HiSubStyled>
      <div className="m_top">
        <div className="m_inner">
          <div className="m_logo_box">
            <Link href="/hi" className="back_icon">
              <span className="blind">하이브인사이트</span>
            </Link>
            <h1>관람안내</h1>
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

      <header>
        <div className="top">
          <div className="top_inner">
            <div className="left_logo_box fade2">
              <Link href="/hi#" className="left_logo" aria-hidden="true"></Link>
              <div className="left_text fade2">
                <p>we</p>
                <p>believe in</p>
                <p>music</p>
              </div>
            </div>

            <div className="logo fade2">
              <Link href="/hi#" aria-hidden="true"></Link>
            </div>

            <div className="nav_wrap">
              <ul className="nav fade2">
                <li>
                  <Link href="/hi#"> 전시 </Link>
                </li>
                <li>
                  <Link href="/hi#"> 관람안내 </Link>
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
                  <span className="lang_drop_list">
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
                  </span>
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
              <Link
                href="/hi#"
                className="panel_logo"
                aria-hidden="true"
              ></Link>
              <span
                className="panel_close"
                role="button"
                tabIndex={0}
                onClick={handlePanelToggle}
                onKeyDown={(e) =>
                  e.key === "Enter" && setIsPanelOpen((prev) => !prev)
                }
                aria-label="메뉴 닫기"
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
                      <Link href="/hi#"> 관람안내 </Link>
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
            onKeyDown={(e) =>
              e.key === "Enter" && setIsPanelOpen((prev) => !prev)
            }
            aria-label="메뉴 닫기"
          ></div>
        </div>
      </header>

      <section>
        <div className="main">
          <h1 className="guide">관람안내</h1>

          <div>
            <div className="announce_guide">
              <h2 className="m_guide">관람안내</h2>
              <p>
                HYBE INSIGHT는 쾌적하고 몰입도 높은 관람을 위해 100% 예약제로
                운영됩니다.
                <br />
                방문 전 반드시 관람회차를 확인하고 사전예매를 진행해주세요.
              </p>
            </div>

            <ul className="noti">
              <li>
                <p className="icon">
                  <Image
                    src="/images/hi/ic-guide-ticket@2x.png"
                    alt="입장권"
                    width={48}
                    height={48}
                    style={{ width: 48, height: 48 }}
                  />
                  <em> 입장권 </em>
                </p>
                <ul className="detail">
                  <li className="dot">
                    <p className="blue"> 입장권 : 22,000원(20USD) </p>
                  </li>
                  <li className="dot">
                    <p className="blue"> 입장권+포토 티켓: 25,000원(23USD) </p>
                  </li>
                  <li className="dot">
                    <p>
                      {" "}
                      방문일 기준 D-1부터는 취소 및 환불이 불가능하오니
                      유의하시기 바랍니다.{" "}
                    </p>
                  </li>
                  <li className="dot">
                    <p>
                      {" "}
                      기획전시 공사 기간에는 입장권 가격에 변동이 있을 수
                      있습니다.{" "}
                    </p>
                  </li>
                </ul>
              </li>

              <li>
                <p className="icon">
                  <Image
                    src="/images/hi/ic-guide-time@2x.png"
                    alt="관람시간"
                    width={48}
                    height={48}
                    style={{ width: 48, height: 48 }}
                  />
                  <em> 관람시간 </em>
                </p>
                <ul className="detail">
                  <li className="dot">
                    <p>
                      {" "}
                      화요일~일요일 (매주 월요일 휴관, 공휴일/명절
                      정상운영){" "}
                    </p>
                  </li>
                  <li className="dot">
                    <p> 오전 11시 ~ 오후 9시 30분 (입장마감 오후 7시 20분) </p>
                  </li>
                  <li className="dot">
                    <p className="blue">
                      {" "}
                      관람 제한 시간은 2시간이며 중도 퇴장은 제한됩니다. 각 층별
                      정해진 관람시간이 있으며, 층별 이동은 크루의 안내에 따라
                      진행됩니다.{" "}
                    </p>
                  </li>
                  <li className="dot">
                    <p className="blue">
                      {" "}
                      예약 회차의 시작 시간 보다 10분 이상 늦을 시, 입장 및 전시
                      관람이 불가능하며, 입장권 환불이 불가합니다. 미리 여유있게
                      도착하셔서 편의시설 이용 및 QR KEY 체크인
                      부탁드립니다.{" "}
                    </p>
                  </li>
                  <li className="dot">
                    <p>
                      {" "}
                      관람일과 관람시간은 현장사정에 따라 달라질 수 있으니
                      안내를 참고하시기 바랍니다.{" "}
                    </p>
                  </li>
                </ul>
              </li>

              <li>
                <p className="icon">
                  <Image
                    src="/images/hi/ic-guide-how@2x.png"
                    alt="관람방식"
                    width={48}
                    height={48}
                    style={{ width: 48, height: 48 }}
                  />
                  <em> 관람방식 </em>
                </p>
                <ul className="detail">
                  <li className="dot">
                    <p>
                      {" "}
                      전시를 더욱 풍성하고 특별하게 즐기실 수 있도록 한 회차마다
                      2개의 팀으로 나누어 관람을 진행합니다.{" "}
                    </p>
                  </li>
                  <li className="dot">
                    <p>
                      {" "}
                      네트워킹 라운지 입장 순서에 따라 팀이 자동
                      배정됩니다.{" "}
                    </p>
                  </li>
                  <li className="dot">
                    <p>
                      {" "}
                      새롭게 만난 팀원들과 함께 HYBE INSIGHT의 모든 것을
                      즐겨보세요!{" "}
                    </p>
                  </li>
                </ul>
              </li>

              <li>
                <p className="icon">
                  <Image
                    src="/images/hi/ic-guide-donot@2x.png"
                    alt="관람시 유의사항"
                    width={48}
                    height={48}
                    style={{ width: 48, height: 48 }}
                    className="icon_t"
                  />
                  <em> 관람시 유의사항 </em>
                </p>
                <ul className="detail">
                  <li className="dot">
                    <p>
                      {" "}
                      DSLR, 캠코더 등, 휴대폰 이외의 모든 카메라는 전시장 내
                      휴대가 불가함을 알려드립니다.{" "}
                    </p>
                  </li>
                  <li className="dot">
                    <p>
                      {" "}
                      플래시, 삼각대 및 셀카봉을 이용한 촬영, 상업적 용도의
                      촬영/녹음/동영상 촬영은 불가하며, 관람중 따로 안내드리는
                      일부 구역에 한해 핸드폰을 이용한 사진 촬영이
                      가능합니다.{" "}
                    </p>
                  </li>
                  <li className="dot">
                    <p> 전시물 보호를 위해 거리를 두고 관람해주세요. </p>
                  </li>
                  <li className="dot">
                    <p className="blue">
                      {" "}
                      만14세 미만 고객, 37.5도 이상의 고열 고객은 입장이
                      제한됩니다.{" "}
                    </p>
                  </li>
                  <li className="dot">
                    <p> 뮤지엄 내 전구역 금연입니다. </p>
                  </li>
                </ul>
              </li>

              <li>
                <p className="icon">
                  <Image
                    src="/images/hi/ic-guide-route@2x.png"
                    alt="입장 동선 안내"
                    width={48}
                    height={48}
                    style={{ width: 48, height: 48 }}
                  />
                  <em> 입장 동선 안내 </em>
                </p>
                <ul className="detail">
                  <li className="dot">
                    <p>
                      {" "}
                      전시 입장은 지하 2층에서 시작됩니다. 건물 1층 외부 계단을
                      통해 지하2층의 뮤지엄 메인 게이트로 이동해주세요.{" "}
                    </p>
                  </li>
                  <li className="dot">
                    <p>
                      {" "}
                      예약 시간 최소 10분 전까지 지하2층 스피드게이트에서 QR
                      KEY를 태깅하여 네트워킹 라운지로 입장해주세요. (입장을
                      위한 QR KEY는 예약 회차 25분 전 생성됩니다){" "}
                    </p>
                  </li>
                  <li className="dot">
                    <p>
                      {" "}
                      입장 동선에 위치한 지하 1층의 락커룸 및 화장실 이용이
                      가능합니다.{" "}
                    </p>
                  </li>
                  <li className="dot">
                    <p>
                      {" "}
                      계단 이용이 어려운 노약자 및 장애인을 위한 스페셜케어는
                      사전신청자에 한해 제공됩니다. (아래 스페셜케어 안내에서
                      자세한 사항을 확인하세요.){" "}
                    </p>
                  </li>
                </ul>
              </li>

              <li>
                <p className="icon">
                  <Image
                    src="/images/hi/ic-guide-special@3x.png"
                    alt="스페셜케어 안내"
                    width={48}
                    height={48}
                    style={{ height: "auto" }}
                  />
                  <em> 스페셜케어 안내 </em>
                </p>
                <ul className="detail">
                  <li className="dot">
                    <p>
                      {" "}
                      거동이 불편한 노약자 및 장애인을 대상으로, 주차 공간 무료
                      제공 및 층간 이동 시 엘리베이터를 이용하실 수 있는
                      서비스입니다.{" "}
                    </p>
                  </li>
                  <li className="dot">
                    <p>
                      {" "}
                      스페셜케어를 원하시는 분은 반드시 예매 마지막 단계의
                      스페셜케어 신청을 통해 본인 및 동행인의 연락처를
                      기재해주세요. (단, 동행인도 반드시 같은 일자/회차 내에
                      별도 티켓을 구매하셔야 합니다.){" "}
                    </p>
                  </li>
                  <li className="dot">
                    <p>
                      {" "}
                      담당자가 동행인에게 전시관 내부 이동 동선 안내를 위한
                      연락을 드릴 수 있습니다.{" "}
                    </p>
                  </li>
                  <li className="dot">
                    <p> 스페셜케어는 방문 D-2까지만 신청 가능합니다. </p>
                  </li>
                </ul>
              </li>

              <li>
                <p className="icon">
                  <Image
                    src="/images/hi/ic-guide-amenity@2x.png"
                    alt="편의시설 안내"
                    width={48}
                    height={48}
                    style={{ width: 48, height: 48 }}
                  />
                  <em> 편의시설 안내 </em>
                </p>
                <ul className="detail">
                  <li className="dot">
                    <p> 지하1층 락커룸 </p>
                  </li>
                  <li className="dot">
                    <p>
                      {" "}
                      지하1층 화장실 (외부) : 전시장 내부는 혼잡이 예상되어,
                      가급적 입장 전 외부화장실을 이용해주시기 바랍니다.{" "}
                    </p>
                  </li>
                  <li className="dot">
                    <p> 지하2층 화장실 (전시장 내부) </p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>

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
                  B1/B2, HYBE YONGSAN, 42, Hangang-daero, Yongsan-gu, Seoul,
                  Republic of Korea
                </p>
                <p>서울특별시 용산구 한강대로 42, 하이브 용산 B1/B2층</p>

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
    </HiSubStyled>
  );
};

export default HiSubComponent;
