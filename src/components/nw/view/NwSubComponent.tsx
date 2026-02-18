"use client";
import React from "react";
import Link from "next/link";
import { NwSubStyled } from "../styled/NwSubStyled";

const NwSubComponent = () => {
  return (
    <NwSubStyled>
      <header>
        <div className="top">
          <div className="top-inner">
            <div className="logo-wrap">
              <Link href="/nw#" className="logo">
                <span className="blind">네이버웨일</span>
              </Link>
            </div>

            <div className="nav-wrap">
              <ul className="menu">
                <li className="menu-list">
                  <Link href="/nw#" className="menu-link home">
                    홈
                  </Link>
                </li>
                <li className="menu-list">
                  <Link href="/nw#" className="menu-link">
                    취약점 보고
                  </Link>
                </li>
                <li className="menu-list">
                  <Link href="/nw#" className="menu-link">
                    명예의 전당
                  </Link>
                </li>
                <li className="menu-list">
                  <Link href="/nw#" className="menu-link">
                    FAQ
                  </Link>
                </li>
                <li className="menu-list">
                  <Link href="/nw#" className="menu-link">
                    이용약관
                  </Link>
                </li>
              </ul>

              <div className="language-box">
                <button type="button" className="lang-choice">
                  <span>KOR</span>
                  <span className="lang-drop"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="section-wrap">
        <section id="section1"></section>

        <section id="section2">
          <div className="section-title-wrap">
            <h1 className="section-title"></h1>
          </div>

          <div className="content">
            <div>
              <h1>1. 소개</h1>
              <p>
                웨일 버그 바운티 프로그램은 웨일 브라우저의 취약점을 조기에 찾아
                사용자들에게 안전한 서비스를 제공하기 위해 네이버에서 추진하는
                프로그램입니다. 전 세계의 보안 전문가들의 도움으로 웨일
                브라우저의 보안 취약점을 빠르게 찾아 고치고, 보안 전문가들의
                노력에 적절한 포상을 지급함으로써 웨일 브라우저를 더욱 안전하게
                만드는 일을 장려합니다.
              </p>
            </div>

            <div>
              <h1>2. 범위</h1>
              <h2>
                최신 버전의 웨일 브라우저에서 발생하는 취약점들을 대상으로
                합니다.
              </h2>
              <h3>
                - 리포트한 시점 기준으로 최신버전에서 발생하는 취약점이어야
                합니다
                <br />
                - Chromium에서 사용하지 않고 웨일에서만 사용하는 third party
                library상에서의 취약점도 인정됩니다
                <br />- 동기화 관련 취약점도 인정됩니다
              </h3>
              <h2>다음과 같은 경우는 버그 바운티 대상에 포함 되지 않습니다.</h2>
              <h3>
                - 네이버 웹 서비스는 버그 바운티 대상에 포함되지 않습니다 (e.g.
                *.naver.com, *.navercorp.com )
                <br />
                - 기본 확장 프로그램(밸리, 파파고 등)에서 통신하는 서버들은 버그
                바운티 대상에 포함되지 않습니다
                <br />
                - 상태 표시줄을 통한 URL 미리보기 스푸핑은 버그 바운티 대상에
                포함되지 않습니다
                <br />- XSS Auditor 기능 우회는 버그바운티 대상에 포함되지
                않습니다
              </h3>
            </div>

            <div>
              <h1>3. 포상</h1>
              <div className="reward">
                <table>
                  <colgroup>
                    <col style={{ width: "240px" }} />
                    <col style={{ width: "620px" }} />
                    <col style={{ width: "164px" }} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>취약점</th>
                      <th>예시</th>
                      <th>최대 포상금액</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="odd">
                      <td>샌드박스 우회</td>
                      <td>
                        중요 시스템파일 접근 및 수정, 높은 권한으로 임의의
                        프로그램 실행 등
                      </td>
                      <td className="amount">USD $7,500</td>
                    </tr>
                    <tr>
                      <td>임의 코드 실행</td>
                      <td>메모리 버그 등을 통한 임의 코드 실행 등</td>
                      <td className="amount">USD $5,000</td>
                    </tr>
                    <tr className="odd">
                      <td>Same Origin Policy 우회</td>
                      <td>Universal XSS 등</td>
                      <td className="amount">USD $4,000</td>
                    </tr>
                    <tr>
                      <td>중요 정보 탈취</td>
                      <td>임의의 메모리 값을 읽는 취약점 등</td>
                      <td className="amount">USD $2,000</td>
                    </tr>
                    <tr className="odd">
                      <td>차단 우회</td>
                      <td>
                        악성 페이지 차단, 악성 프로그램 다운로드 차단 등 우회
                      </td>
                      <td className="amount">USD $750</td>
                    </tr>
                    <tr>
                      <td>스푸핑</td>
                      <td>Address bar spoofing, Referer spoofing 등</td>
                      <td className="amount">USD $500</td>
                    </tr>
                    <tr className="odd">
                      <td>내장 확장프로그램 취약점</td>
                      <td>
                        기본으로 내장되어있는 확장 프로그램에서 발생하는 XSS 등
                      </td>
                      <td className="amount">USD $500</td>
                    </tr>
                    <tr>
                      <td>기타</td>
                      <td></td>
                      <td className="amount">USD $500</td>
                    </tr>
                  </tbody>
                </table>

                <h3>
                  - 포상금은 취약점의 위험도와 보고서 등을 종합적으로 검토하여
                  주어집니다
                  <br />
                  - 사용자의 개입이 많이 필요한 경우 포상 금액이 줄어들 수
                  있습니다
                  <br />
                  - 네이버가 아닌 third party에 의해 작성된 코드에서 발견된
                  취약점의 경우 포상 금액이 줄어들 수 있습니다
                  <br />- 새로운 방식의 공격 기법이나 버그타입에 대해서는 좀 더
                  많은 포상금이 주어질 수 있습니다
                </h3>
              </div>
            </div>

            <div>
              <h1>4. 포상 대상에서 제외되는 경우</h1>
              <h2>다음과 같은 경우들은 포상 대상에서 제외됩니다.</h2>

              <h2 className="top-mg">
                - 같은 Chromium 버전을 기반으로 한 다른 브라우저상에서도
                발생하는 취약점
                <br />
                - 운영체제 또는 하드웨어 상에서 발생하는 취약점
                <br />
                - 최신버전에서 취약점이 재현되지 않는 경우
                <br />
                - 다른 사람이 먼저 제보한 취약점
                <br />
                - 이미 공개적으로 알려진 취약점
                <br />
                - 증명 없이 가능성만을 제시한 경우
                <br />
                - Assert 등에 의한 단순한 Crash 또는 Denial-of-Service(DoS) 공격
                <br />
                - 너무 많은 사용자의 개입이 필요한 경우
                <br />
                - 보안 기능을 끄고 취약점을 발생 시킨 경우
                <br />
                - 실험적인 기능(whale://flags)을 켰을때만 발생하는 취약점
                <br />- 이미 다른 곳에 제보한 취약점
              </h2>
            </div>

            <div>
              <h1>5. 제한 사항 및 공개 정책</h1>
              <h2>
                - 취약점이 고쳐지고 대부분의 사용자가 업데이트를 할때까지
                취약점에 대한 자세한 정보는 공개하지 말아주시기 바랍니다
                <br />
                - 다른 사용자에게 피해를 끼칠 수 있는 행위는 삼가주시기 바랍니다
                <br />- 네이버 임직원은 해당 프로그램에 참여할 수 없습니다
              </h2>
            </div>

            <div>
              <h1>6. 제보</h1>
              <h2>
                취약점은{" "}
                <Link href="/nw#" className="send-link">
                  이곳
                </Link>
                을 통해 제보해주시기 바랍니다. 보고서에는 다음과 같은 사항들을
                포함하면 좋습니다.
              </h2>
              <h2 className="top-mg">
                - 취약점 요약
                <br />
                - 버그를 재현하기 위한 최소한의 코드
                <br />
                - 공격을 완벽히 성공시키는 코드
                <br />
                - register 값 조작 등 공격 가능성을 보여주는 코드
                <br />
                - Crash가 났을 경우 stack trace
                <br />
                - 예상되는 버그 원인
                <br />- 해당 취약점이 보안상 어떤 위협이 될 수 있는지에 대한
                설명
              </h2>

              <h4>
                기타 문의 사항은{" "}
                <Link href="/nw#" className="send-link">
                  dl_whalebugbounty@navercorp.com
                </Link>
                으로 보내주시기 바랍니다. ※ 절대 취약점은 이메일에 작성하지
                마시기 바랍니다.
              </h4>
            </div>
          </div>
        </section>
      </div>

      <footer>
        <div className="footer-wrap">
          <div className="footer">
            <div className="f-logo-wrap">
              <Link href="/nw#" className="f-logo" aria-hidden="true"></Link>
            </div>
            <p>
              {" "}
              ©{" "}
              <Link href="/nw#" className="f-text">
                {" "}
                NAVER Corp.{" "}
              </Link>{" "}
              All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </NwSubStyled>
  );
};

export default NwSubComponent;
