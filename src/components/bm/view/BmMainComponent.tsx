"use client";
import React, { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BmMainStyled } from "../styled/BmMainStyled";

const ANCHORS = ["0", "1", "2", "3", "4", "5", "6", "7"];

const BmMainComponent = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const goToSection = useCallback((index: number) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
    setCurrentSection(index);
  }, []);

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

  return (
    <BmMainStyled>
      <div className={`fp-viewing-${currentSection}`}>
        <div className="container">
          <div className="top_fixed">
            <div className="header">
              <div className="bm_logo">
                <Image
                  src="/images/bm/logo@2x.png"
                  alt="배달의민족"
                  width={142}
                  height={40}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
                <span className="blind">배달의민족</span>
              </div>
              <div className="sns">
                <ul className="sns_list">
                  <li>
                    <Link href="/bm#">
                      <Image
                        src="/images/bm/iconFacebook@2x.png"
                        alt="facebook"
                        fill
                        sizes="34px"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="/bm#">
                      <Image
                        src="/images/bm/iconInstagram@2x.png"
                        alt="instagram"
                        fill
                        sizes="34px"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="/bm#">
                      <Image
                        src="/images/bm/iconBlog@2x.png"
                        alt="blog"
                        fill
                        sizes="34px"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="/bm#">
                      <Image
                        src="/images/bm/iconYoutube@2x.png"
                        alt="youtube"
                        fill
                        sizes="34px"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rider box">
            <Link href="/bm#">
              <Image
                src="/images/bm/btn_rider.png"
                alt="rider"
                width={191}
                height={241}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
                priority
              />
            </Link>
          </div>

          <div className="scroll">
            <Image
              src="/images/bm/scroll@2x.png"
              alt="scroll"
              sizes="168px"
              fill
              style={{
                objectFit: "contain",
              }}
            />
          </div>

          <div className="float1">
            <div className="app_dl">
              <Link href="/bm#">
                <Image
                  src="/images/bm/btn_down@2x.png"
                  alt="appdownload"
                  width={262}
                  height={80}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  priority
                />
              </Link>
            </div>
          </div>

          <div className="float2">
            <div className="app_dl_black">
              <Link href="/bm#">
                <Image
                  src="/images/bm/btn_down_app@2x.png"
                  alt="appdownload_black"
                  width={200}
                  height={60}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </Link>
            </div>
          </div>

          <div
            id="fullpage"
            ref={scrollContainerRef}
            style={{
              height: "100vh",
              overflowY: "auto",
              scrollSnapType: "y mandatory",
            }}
          >
            <div
              className={`section s0 ${currentSection === 0 ? "active" : ""}`}
              data-anchor="0"
              data-section={0}
              ref={(el) => {
                sectionRefs.current[0] = el;
              }}
              style={{ scrollSnapAlign: "start", height: "100vh" }}
            >
              <div className="content">
                <div className="text img1">
                  <Image
                    src="/images/bm/main_text_04@2x.png"
                    alt="마음에도당충전이필요할때"
                    width={440}
                    height={200}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "contain",
                    }}
                    priority
                  />
                </div>
              </div>
            </div>

            <div
              className={`section s1 ${currentSection === 1 ? "active" : ""}`}
              data-anchor="1"
              data-section={1}
              ref={(el) => {
                sectionRefs.current[1] = el;
              }}
              style={{ scrollSnapAlign: "start", height: "100vh" }}
            >
              <div className="content">
                <div className="text img2">
                  <Image
                    src="/images/bm/ctn01_text_01@2x.png"
                    alt="배민에다있다"
                    width={500}
                    height={120}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "contain",
                    }}
                  />
                  <div className="mini_text">
                    <p>
                      3천만 이상이 선택한 배달의민족,
                      <br />
                      업계 최다 배달가능 업소 보유 중!
                      <span className="sub_text">(2017년 11월 기준)</span>
                    </p>
                  </div>
                </div>
                <div className="mini_img1">
                  <Image
                    src="/images/bm/img-road@2x.png"
                    alt="road"
                    width={232}
                    height={150}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <div className="mini_img2 bike">
                  <Image
                    src="/images/bm/img-bike@2x.png"
                    alt="라이더"
                    width={204}
                    height={180}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
            </div>

            <div
              className={`section s2 ${currentSection === 2 ? "active" : ""}`}
              data-anchor="2"
              data-section={2}
              ref={(el) => {
                sectionRefs.current[2] = el;
              }}
              style={{ scrollSnapAlign: "start", height: "100vh" }}
            >
              <div className="content">
                <div className="text img2">
                  <Image
                    src="/images/bm/ctn02_text_01@2x.png"
                    alt="맛집배달"
                    width={500}
                    height={120}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "contain",
                    }}
                  />
                  <div className="mini_text">
                    <p>
                      배달이 안되던 동네 맛집까지 ~
                      <br />
                      배민라이더스가 직접 배달해드립니다.
                      <span className="sub_text">
                        서울 전지역, 경기 및 광역시 일부 지역에서 서비스 이용
                        가능!
                      </span>
                    </p>
                  </div>
                </div>
                <div className="mini_img3 move">
                  <Image
                    src="/images/bm/img-people@2x.png"
                    alt="배민캐릭터들"
                    width={400}
                    height={350}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
            </div>

            <div
              className={`section s3 ${currentSection === 3 ? "active" : ""}`}
              data-anchor="3"
              data-section={3}
              ref={(el) => {
                sectionRefs.current[3] = el;
              }}
              style={{ scrollSnapAlign: "start", height: "100vh" }}
            >
              <div className="content">
                <div className="text img2">
                  <Image
                    src="/images/bm/ctn05_text_01@2x.png"
                    alt="배민선물"
                    width={500}
                    height={120}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "contain",
                    }}
                  />
                  <div className="mini_text">
                    <p>
                      지금 밥 한끼 보내주고 싶은 사람에게 선물해보세요.
                      <br />
                      선물 받은 상품권으로 배민에서 자유롭게 주문할 수 있습니다.
                      <span className="sub_text">
                        * 단, 전국별미, 사전예약 제외
                      </span>
                    </p>
                  </div>
                </div>
                <div className="mini_img4 move">
                  <Image
                    src="/images/bm/img-present@2x.png"
                    alt="밥배달캐릭터"
                    width={360}
                    height={320}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
            </div>

            <div
              className={`section s4 ${currentSection === 4 ? "active" : ""}`}
              data-anchor="4"
              data-section={4}
              ref={(el) => {
                sectionRefs.current[4] = el;
              }}
              style={{ scrollSnapAlign: "start", height: "100vh" }}
            >
              <div className="content">
                <div className="text img2">
                  <Image
                    src="/images/bm/ctn06_text_01@2x.png"
                    alt="배민쇼핑라이브"
                    width={500}
                    height={120}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "contain",
                    }}
                  />
                  <div className="mini_text">
                    <p>
                      궁금한 맛은 직접 물어보고, 구경하는 재미
                      <br />
                      이제 배민에서 생생하게 경험하세요!
                    </p>
                  </div>
                </div>
                <div className="mini_img5 move">
                  <Image
                    src="/images/bm/img_shoppinglive.png"
                    alt="생방송캐릭터"
                    width={413}
                    height={350}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
            </div>

            <div
              className={`section s5 ${currentSection === 5 ? "active" : ""}`}
              data-anchor="5"
              data-section={5}
              ref={(el) => {
                sectionRefs.current[5] = el;
              }}
              style={{ scrollSnapAlign: "start", height: "100vh" }}
            >
              <div className="content">
                <div className="text img3">
                  <Image
                    src="/images/bm/ctn04_text_01@2x.png"
                    alt="B마트"
                    width={408}
                    height={120}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "contain",
                    }}
                  />
                  <div className="mini_text2">
                    <p>
                      마트까지 가지 않아도, 기다리지 않아도
                      <br />
                      주문하신 상품을 바로 배달해드립니다.
                      <span className="sub_text2">
                        서울, 인천 및 경기 일부 지역에서 <br /> 서비스 이용
                        가능!
                      </span>
                    </p>
                  </div>
                </div>
                <div className="mini_img6 move-left">
                  <Image
                    src="/images/bm/bmart_rider@2x.png"
                    alt="B마트캐릭터"
                    width={600}
                    height={400}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
            </div>

            <div
              className={`section s6 ${currentSection === 6 ? "active" : ""}`}
              data-anchor="6"
              data-section={6}
              ref={(el) => {
                sectionRefs.current[6] = el;
              }}
              style={{ scrollSnapAlign: "start", height: "100vh" }}
            >
              <div className="content">
                <div className="text img2">
                  <Image
                    src="/images/bm/ctn03_text_03@2x.png"
                    alt="배민페이"
                    width={500}
                    height={120}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "contain",
                    }}
                  />
                  <div className="mini_text">
                    <p>
                      배민페이, 네이버페이 등은 물론
                      <br />
                      각종 신용카드까지 결제 가능!
                    </p>
                  </div>
                </div>
                <div className="mini_img7 move">
                  <Image
                    src="/images/bm/img-flag@2x.png"
                    alt="배민페이캐릭터"
                    width={352}
                    height={300}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
            </div>

            <div
              className={`section s7 ${currentSection === 7 ? "active" : ""}`}
              data-anchor="7"
              data-section={7}
              ref={(el) => {
                sectionRefs.current[7] = el;
              }}
              style={{ scrollSnapAlign: "start", height: "100vh" }}
            >
              <footer>
                <div className="footer">
                  <div className="f_title">
                    <h2 className="text_title">
                      <Image
                        src="/images/bm/txt-slogan@2x.png"
                        alt="우리가어떤민족입니까"
                        width={176}
                        height={80}
                        style={{
                          width: "100%",
                          height: "auto",
                          objectFit: "contain",
                        }}
                      />
                    </h2>
                  </div>
                  <div className="f_left">
                    <div className="f_link">
                      <ul>
                        <li className="link1">
                          <Link href="/bm#">
                            <Image
                              src="/images/bm/link_woowahan@2x.png"
                              alt="우아한형제들"
                              width={120}
                              height={30}
                              style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "contain",
                              }}
                            />
                          </Link>
                        </li>
                        <li>
                          <Link href="/bm#">
                            <Image
                              src="/images/bm/link_ceosite@2x.png"
                              alt="배민사장님광장"
                              width={120}
                              height={30}
                              style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "contain",
                              }}
                            />
                          </Link>
                        </li>
                      </ul>
                      <ul className="f_ul">
                        <li className="link2">
                          <Link href="/bm#">
                            <Image
                              src="/images/bm/link_store@2x.png"
                              alt="배민문방구"
                              width={138}
                              height={30}
                              style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "contain",
                              }}
                            />
                          </Link>
                        </li>
                        <li>
                          <Link href="/bm#">
                            <Image
                              src="/images/bm/link_rider@2x.png"
                              alt="라이더채용"
                              width={120}
                              height={30}
                              style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "contain",
                              }}
                            />
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="sns_link">
                      <ul>
                        <li>
                          <Link href="/bm#">
                            <Image
                              src="/images/bm/icon_facebook@2x.png"
                              alt="facebook"
                              width={40}
                              height={40}
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                              }}
                            />
                          </Link>
                        </li>
                        <li>
                          <Link href="/bm#">
                            <Image
                              src="/images/bm/icon_instagram@2x.png"
                              alt="instagram"
                              width={40}
                              height={40}
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                              }}
                            />
                          </Link>
                        </li>
                        <li>
                          <Link href="/bm#">
                            <Image
                              src="/images/bm/icon_blog@2x.png"
                              alt="blog"
                              width={40}
                              height={40}
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                              }}
                            />
                          </Link>
                        </li>
                        <li>
                          <Link href="/bm#">
                            <Image
                              src="/images/bm/icon_youtube@2x.png"
                              alt="youtube"
                              width={40}
                              height={40}
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                              }}
                            />
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="info">
                      <p>
                        <span>(주)우아한형제들</span>
                        <br />
                        <span>서울시 송파구 위례성대로 2 장은빌딩 2층</span>
                      </p>
                      <p>
                        <span>사업자번호:120-87-65763</span>{" "}
                        <span className="business">
                          <Link href="/bm#">사업자정보확인</Link>
                        </span>
                        <br />
                        <span>통신판매업: 서울 송파-0515</span>
                      </p>
                      <p>
                        <span>전자금융분쟁처리</span>
                        <br />
                        <span>대표전화 : 1600-0987 | 팩스 : 050-6050-0400</span>
                        <br />
                        <span className="mail">
                          대표메일 : help@woowahan.com
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </div>

          <div id="fp-nav" className="right">
            <ul>
              {ANCHORS.map((anchor, i) => (
                <li key={anchor}>
                  <Link
                    href="/bm#"
                    className={currentSection === i ? "active" : ""}
                    onClick={(e) => {
                      e.preventDefault();
                      goToSection(i);
                    }}
                    aria-label={`섹션 ${i + 1}로 이동`}
                  >
                    <span></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </BmMainStyled>
  );
};

export default BmMainComponent;
