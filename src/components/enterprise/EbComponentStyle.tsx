import styled from "styled-components";

export const EbComponentStyle = styled.div`
  position: relative;
  margin: 0;
  overflow-x: hidden;

  header {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 17px 100px;
    font-size: 18px;
    font-weight: 600;
    background: transparent;
    transform: translateY(-100%);
    opacity: 0;
    z-index: 4;
    transition: transform 0.3s, color 0.5s;

    @media (max-width: 750px) {
      padding: 0 21px 0 24px;
    }

    .logo {
      width: 100px;
      height: 100px;
      transition: filter 0.4s;
    }

    .nav {
      display: flex;
      align-items: center;

      @media (max-width: 750px) {
        display: none;
      }

      .nav-link {
        display: flex;
        align-items: center;
        padding: 23px 25px;
      }
    }
  }

  .fixed {
    transform: translate(0);
    opacity: 1;
  }

  .hide {
    visibility: hidden;
    opacity: 0;
  }

  .section1 {
    position: relative;
    height: 100vh;
    overflow: hidden;

    .section1-wrap {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    .section1-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      max-height: 100vh;
      z-index: 3;
      overflow: hidden;
    }

    .section1-vid {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 2;
    }

    .section1-text {
      position: absolute;
      top: 50%;
      left: 50%;
      padding: 0 32px;
      font-size: 52px;
      font-weight: 700;
      line-height: 1.35;
      word-break: keep-all;
      white-space: nowrap;
      transform: translate(-50%, -50%);
      z-index: 3;
      opacity: 0;
    }

    .section1-text4 {
      font-size: 24px;
      line-height: 1.67;
      font-weight: 700;
    }

    .section1-text5 {
      font-size: 24px;
      line-height: 1.67;
      font-weight: 700;
    }
  }

  .section2 {
    position: relative;
    width: 100%;
    height: 100vh;

    .section2-img-wrap {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;

      .section2-img-inner {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -2;
        overflow: hidden;
      }

      img {
        width: 100%;
        height: 100vh;
        object-fit: cover;
      }
    }

    .section2-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      max-height: 100vh;
      z-index: 3;
      overflow: hidden;
    }

    .section2-text-title-wrap {
      position: absolute;
      top: 50%;
      left: 50%;
      padding: 0 32px;
      font-size: 100px;
      transform: translate(-50%, -50%);
      word-break: keep-all;
      z-index: 3;
    }

    .section2-text {
      font-weight: 700;
      line-height: 1.2;
    }

    .section2-text-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      max-height: 100vh;
      z-index: 3;
      overflow: hidden;
    }

    .section2-text4 {
      position: absolute;
      top: 50%;
      left: 50%;
      padding: 0 32px;
      transform: translate(-50%, -50%);
      font-size: 24px;
      font-weight: 600;
      line-height: 1.8;
      word-break: keep-all;
      z-index: 4;
    }

    .section2-text4-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      max-height: 100vh;
      z-index: 3;
      overflow: hidden;
    }
  }

  .section3 {
    min-height: 100vh;
    padding: 235px 100px 80px;
    color: #000;
    background: #fff;

    .section3-text-wrap {
      font-size: 72px;
      font-weight: bold;
      line-height: 1.28;
    }

    .section3-text-desc-wrap {
      max-width: 50%;
      margin-left: auto;
      padding-left: 100px;
      font-size: 24px;
      font-weight: 700;
      line-height: 1.67;
    }
  }

  .section4 {
    position: relative;
    padding: 300px 0 320px;
    background: url(/images/eb/prove.jpg) no-repeat 50% / cover;
    overflow: hidden;
    color: #fff;

    .sction4-bg-wrap {
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      overflow: hidden;
    }

    .section4-bg-before {
      position: absolute;
      top: 0;
      right: 0;
      width: 400px;
      height: 150px;
      background: #fff;
    }

    .section4-bg-after {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 400px;
      height: 150px;
      background: #fff;
    }

    .section4-img {
      position: relative;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      max-width: 100%;
      height: auto;
    }

    .section4-text-wrap {
      position: absolute;
      top: 50%;
      left: 50%;
      text-align: center;
      font-size: 72px;
      font-weight: 700;
      line-height: 1.28;
      transform: translate(-50%, -50%);
    }
  }

  .section5 {
    display: flex;
    justify-content: space-between;
    padding: 0 100px;

    img {
      max-width: 100%;
    }

    .section5-text-wrap {
      position: sticky;
      display: flex;
      align-items: center;
      font-size: 73px;
      line-height: 90px;
      font-weight: bold;
      height: 100vh;
    }

    .section5-desc-wrap {
      display: flex;
      flex: 1;
      flex-direction: column;
      padding: 100vh 0 100vh 50px;

      .section5-img {
        max-width: 46.4%;
      }

      .section5-img01,
      .section5-img03 {
        margin-left: auto;
      }

      .section5-img p {
        margin: 12px 0 0;
        font-size: 16px;
        font-weight: 600;
        line-height: 1.5;
      }

      .section5-img:not(:last-child) {
        margin-bottom: 186px;
      }
    }
  }

  .section6 {
    position: relative;
    height: auto;
    display: flex;

    .section6-top {
      display: flex;
      align-items: stretch;
      width: auto;
      height: 100vh;
      gap: 100px;

      .section6-top-left {
        display: flex;
        align-items: center;
        gap: 160px;

        .title {
          flex-shrink: 0;
          margin-left: 100px;
          font-size: 73px;
          font-weight: bold;
          line-height: 90px;
        }

        .section6-top-desc-wrap {
          display: flex;
          gap: 70px;
        }

        .section6-top-desc-item {
          position: relative;

          .icon-box {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 296px;
            height: 296px;
            border: 2px solid #fff;
            border-radius: 60px;
            background-color: #000;

            img {
              max-width: 54%;
            }
          }
        }

        .section6-top-desc-item + .section6-top-desc-item::after {
          content: "";
          position: absolute;
          top: calc(296px / 2);
          left: -55px;
          display: block;
          width: 28px;
          height: 28px;
          border: 8px solid #fff;
          border-width: 8px 8px 0 0;
          transform: translateY(-50%) rotate(45deg);
        }

        .text-box {
          margin-top: 30px;
          padding-left: 20px;
          font-size: 24px;
          font-weight: bold;
          line-height: 36px;
        }
      }

      .section6-top-right {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        flex-shrink: 0;

        img {
          width: 500px;
          margin: 0 auto;
        }

        .model-text {
          position: absolute;
          top: 50%;
          left: 50%;
          display: flex;
          flex-direction: column;
          gap: 235px;
          text-align: center;
          transform: translate(-50%, -63%);

          .bottom-box {
            display: flex;
            gap: 240px;
          }

          strong {
            font-size: 24px;
            font-weight: bold;
          }

          p {
            margin-top: 10px;
            font-weight: bold;
          }
        }
      }
    }

    .section6-bottom {
      position: absolute;
      bottom: 35px;
      left: 100px;
      color: #999;
      font-size: 14px;
      font-weight: 500;
      line-height: 24px;
    }
  }

  .section7 {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    padding: 40px 100px 0;

    .section7-title {
      font-size: 72px;
      font-weight: bold;
      line-height: 1.25;
      align-self: flex-start;
    }

    .section7-desc {
      align-self: flex-end;
      font-size: 24px;
      font-weight: bold;
      line-height: 1.6;
    }
  }

  .banner {
    position: relative;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    width: 100%;
    height: 175px;
    margin-top: 40px;

    .banner-text {
      position: absolute;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      font-size: 40px;
      font-weight: bold;
      line-height: 1.25;
      transition: opacity 0.3s;
      z-index: 1;
    }

    .banner-text-bg {
      position: absolute;
      top: 1px;
      left: 0;
      width: 100%;
      height: 100%;
      outline: 1px solid #000;
      backdrop-filter: blur(50px);
      transition: opacity 0.3s;
      z-index: 1;
    }

    .banner-color-01 {
      position: relative;
      left: 0px;
      background-color: #e657af;
    }

    .banner-color-02 {
      position: relative;
      left: 0px;
      background-color: #0049ff;
    }

    .banner-color-03 {
      position: relative;
      background-color: #00bf41;
    }
  }

  .section8 {
    position: relative;
    display: flex;
    align-items: center;
    height: 100vh;
    padding: 0 100px;
    margin: 0 0 200px;
    overflow: hidden;

    .section8-horizon {
      display: flex;
      align-items: center;
      column-gap: 190px;

      .section8-title {
        font-size: 72px;
        font-weight: bold;
        line-height: 1.28;
      }

      .section8-card-wrap {
        display: flex;
        align-items: flex-start;

        .section8-card-item:last-child {
          z-index: 1;
        }

        .section8-card-item {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 400px;
          height: 540px;
          margin-right: 40px;
          padding: 34px;
          flex-shrink: 0;
          border-radius: 20px;
          border: solid 2px #fff;
          background-color: #000;

          .section8-card-img {
            max-width: 100%;
            height: auto;
            padding-right: 50px;
            opacity: 0;
            transition: all 0.3s;
          }

          .section8-card-img.fade {
            opacity: 1;
          }
        }

        .section8-card-lock-img-wrap {
          position: relative;
          width: 400px;
          height: 540px;
          margin-right: 0;
          padding: 0;
          flex-shrink: 0;

          .section8-card-lock-img-inner {
            position: relative;
            width: 100%;
            height: 100%;
            color: #fff;
            border-radius: 20px;
            border: 2px solid transparent;
            background-image: linear-gradient(#000, #000),
              linear-gradient(315deg, #e657af, #0049ff, #43cf2e);
            background-origin: border-box;
            background-clip: content-box, border-box;
            overflow: hidden;

            .section8-card-lock-wrap {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }

            .section8-card-lock-img {
              width: 150px;
            }

            .section8-card-text {
              font-size: 40px;
              font-weight: bold;
              color: transparent;
              background: linear-gradient(90deg, #43cf2e, #0049ff, #e657af);
              background-clip: text;
              -webkit-background-clip: text;
            }
          }
        }

        .section8-card-item-title {
          position: relative;
          min-height: 110px;
          font-size: 50px;
          font-weight: bold;
          line-height: 1;

          .section8-card-item-star {
            position: absolute;
            right: 0;
            top: 12px;
            font-size: 30px;
            font-weight: 400;
            font-family: "noto sans", sans-serif;
            line-height: 0.67;
            text-align: right;
          }
        }
      }
    }

    .section8-card-item-bottom {
      position: relative;
      width: 100%;

      .section8-card-item-profile {
        position: relative;
        left: 0;

        .section8-card-item-circle1 {
          display: block;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #ff009d;
        }

        .section8-card-item-circle2 {
          display: block;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #0049ff;
        }

        .section8-card-item-circle3 {
          display: block;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #26ff00;
        }

        .section8-card-item-profile-inner.before {
          display: flex;
          align-items: center;
          font-size: 16px;
          font-weight: bold;
          line-height: 1.63;
          opacity: 1;
        }

        .section8-card-item-name {
          margin-left: 9px;
        }

        .section8-card-item-profile-inner.fade.before {
          opacity: 0;
        }

        .section8-card-item-profile-inner.after {
          position: absolute;
          top: 0;
          left: 0;
          font-size: 24px;
          font-weight: bold;
          line-height: 1.67;
          opacity: 0;
        }

        .section8-card-item-profile-inner.fade.after {
          opacity: 1;
        }
      }

      .section8-card-item-icon-wrap {
        position: absolute;
        top: 0;
        right: 0;
        width: 40px;
        height: 40px;
      }

      .section8-card-item-icon {
        position: absolute;
        top: 0;
        left: 0;
      }

      .section8-card-item-icon.icon-expand {
        opacity: 1;
      }

      .section8-card-item-icon.icon-contract {
        opacity: 0;
      }

      .section8-card-item-icon.fade.icon-expand {
        opacity: 0;
      }

      .section8-card-item-icon.fade.icon-contract {
        opacity: 1;
      }
    }

    .section8-vertical {
      position: absolute;
      bottom: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 0px 100px;

      .section8-vertical-inner {
        display: flex;
        flex-direction: column;
        margin-left: 400px;
        word-break: keep-all;

        .section8-vertical-box {
          padding-left: 207px;

          .section8-vertical-title {
            font-size: 72px;
            font-weight: bold;
            line-height: 1.28;
          }

          .section8-vertical-desc {
            margin-top: 34px;
            font-size: 24px;
            font-weight: bold;
            line-height: 1.67;
          }

          .section8-vertical-info-wrap {
            display: flex;
            flex-direction: column;
            gap: 50px;
            margin: 80px 0 160px;

            .section8-vertical-info {
              display: flex;
              align-items: center;
              gap: 40px;

              .section8-vertical-info-box {
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 400px;
                height: 200px;
                color: #fff;
                border-radius: 20px;
                border: 2px solid transparent;
                background-image: linear-gradient(#000, #000),
                  linear-gradient(315deg, #e657af, #0049ff, #43cf2e);
                background-origin: border-box;
                background-clip: content-box, border-box;
                overflow: hidden;

                .section8-vertical-info-box-text {
                  font-size: 28px;
                  line-height: 1.43;
                  font-weight: bold;
                  text-align: center;
                  background: linear-gradient(90deg, #43cf2e, #0049ff, #e657af);
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                }
              }

              .section8-vertical-info-desc {
                font-size: 24px;
                font-weight: bold;
                line-height: 1.67;
              }
            }
          }

          .section8-service-wrap {
            .section8-service-title {
              font-size: 60px;
              font-weight: bold;
              line-height: 1;
            }

            .section8-service-inner {
              display: flex;
              margin-top: 80px;
              column-gap: 50px;

              img {
                max-width: 100%;
                height: auto;
              }

              .section8-service-item {
                max-width: 300px;
              }

              .section8-service-item-title {
                margin-top: 24px;
                font-size: 24px;
                font-weight: bold;
                line-height: 1.67;
              }
            }
          }
        }

        .section8-vertical-card-wrap {
          position: relative;
          display: flex;
          align-items: center;
          width: calc(100% + 2px);
          height: 100vh;

          .section8-vertical-card-lock {
            position: absolute;
            top: 50%;
            left: -398px;
            width: 400px;
            height: 540px;
            padding: 40px 35px;
            border-radius: 20px;
            background: linear-gradient(135deg, #43cf2e, #0049ff, #e657af);
            transform: translateY(-50%);
            z-index: 3;

            .bg {
              position: relative;
              top: 50%;
              left: 50%;
              width: 396px;
              height: 536px;
              background: #000;
              border-radius: 20px;
              transform: translate(-50%, -50%);
            }

            .section8-vertical-card-text {
              position: absolute;
              top: 50%;
              left: 50%;
              font-size: 40px;
              font-weight: bold;
              color: transparent;
              background: linear-gradient(90deg, #43cf2e, #0049ff, #e657af);
              background-clip: text;
              transform: translate(-50%, -50%);
              z-index: 3;
            }

            .light {
              content: "";
              position: absolute;
              top: 50%;
              left: 50%;
              width: 100%;
              height: 100%;
              background: linear-gradient(
                315deg,
                #ee5787 15%,
                #0049ff,
                #43cf2e 85%
              );
              filter: blur(70px);
              opacity: 0.5;
              transform: translate(-50%, -50%);
              z-index: -1;
            }
          }

          .section8-vertical-card-item {
            position: relative;
            width: 400px;
            height: 540px;
            padding: 34px;
            margin-left: 41px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            flex-shrink: 0;
            color: #fff;
            border-radius: 20px;
            background-blend-mode: multiply;
            background-color: hsla(0, 0%, 42%, 0.3);
            background-color: #888;
            overflow: hidden;

            .section8-vertical-card-item-head {
              position: relative;
              display: flex;
              justify-content: space-between;
              min-height: 110px;
              font-size: 50px;
              font-weight: bold;
              line-height: 1;

              .section8-vertical-card-item-star {
                position: absolute;
                right: 0;
                top: 12px;
                font-size: 30px;
                font-weight: 400;
                font-family: "noto sans", sans-serif;
                line-height: 0.67;
                text-align: right;
              }
            }

            .section8-vertical-card-item-desc {
              position: relative;
              padding-top: 40px;
              font-size: 16px;
              font-weight: bold;
              line-height: 1.63;
              color: #fff;
              opacity: 0;
            }

            .section8-vertical-card-item-desc.fade {
              opacity: 1;
            }

            .section8-vertical-card-item-bottom {
              position: relative;
              display: flex;
              align-items: center;
              justify-content: space-between;

              .section8-vertical-card-item-profile {
                display: flex;
                align-items: center;
                gap: 9px;
              }

              .section8-vertical-card-item-circle1 {
                display: block;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background-color: #ff009d;
              }

              .section8-vertical-card-item-circle2 {
                display: block;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background-color: #0049ff;
              }

              .section8-vertical-card-item-circle3 {
                display: block;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background-color: #26ff00;
              }

              .section8-vertical-card-item-name {
                font-weight: bold;
              }

              .section8-vertical-card-item-icon-wrap {
                position: relative;

                .section8-vertical-card-item-icon {
                  display: block;
                  width: 40px;
                  height: 40px;
                  transition: all 0.3;
                }

                .section8-vertical-card-item-icon.icon-expand {
                  opacity: 1;
                }

                .section8-vertical-card-item-icon.fade.icon-expand {
                  opacity: 0;
                }

                .section8-vertical-card-item-icon.icon-contract {
                  position: absolute;
                  top: 0;
                  right: 0;
                  opacity: 0;
                }

                .section8-vertical-card-item-icon.fade.icon-contract {
                  opacity: 1;
                }
              }
            }
          }

          .section8-vertical-card-item:nth-child(2) {
            z-index: -1;
          }
          .section8-vertical-card-item:nth-child(3) {
            z-index: -2;
          }
          .section8-vertical-card-item:nth-child(4) {
            z-index: -3;
          }

          .section8-vertical-card-item:nth-child(2) .section8-vertical-card-bg {
            background: url(/images/eb/image-sec-2-1.png) no-repeat top/cover;
          }

          .section8-vertical-card-item:nth-child(3) .section8-vertical-card-bg {
            background: url(/images/eb/image-sec-2-2.png) no-repeat top/cover;
          }

          .section8-vertical-card-item:nth-child(4) .section8-vertical-card-bg {
            background: url(/images/eb/image-sec-2-3.png) no-repeat top/cover;
          }

          .section8-vertical-card-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transition: all 0.5s;
            z-index: -1;
          }

          .section8-vertical-card-bg.blur {
            filter: blur(40px);
          }

          .section8-vertical-end-text {
            position: absolute;
            bottom: 0;
            display: flex;
            align-items: center;
            height: 100vh;
            padding-left: 200px;
            font-size: 73px;
            line-height: 90px;
            font-weight: 700;
            color: #fff;
            opacity: calc(var(--progress-full) * 2.5);
          }
        }
      }
    }
  }

  .section9 {
    width: 100%;
    height: 100vh;
    padding: 0 100px;

    .section9-text-wrap {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .section9-text-title-wrap {
      align-self: start;
      width: 50%;
      font-size: 72px;
      line-height: 90px;
      font-weight: bold;
      word-break: keep-all;
    }

    .section9-text-desc-wrap {
      align-self: end;
      width: 50%;
      padding-left: 100px;
      font-size: 24px;
      font-weight: bold;
      line-height: 40px;
      word-break: keep-all;
    }
  }

  .section10 {
    position: relative;
    padding: 300px 0 320px;
    background: url(/images/eb/prove2.jpg) no-repeat 50% / cover;
    overflow: hidden;
    color: #fff;

    .sction4-bg-wrap {
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      overflow: hidden;
    }

    .section10-bg-before {
      position: absolute;
      top: 0;
      right: 0;
      width: 400px;
      height: 150px;
      background: #fff;
    }

    .section10-bg-after {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 400px;
      height: 150px;
      background: #fff;
    }

    .section10-img {
      position: relative;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      max-width: 100%;
      height: auto;
    }

    .section10-text-wrap {
      position: absolute;
      top: 50%;
      left: 50%;
      text-align: center;
      font-size: 72px;
      font-weight: 700;
      line-height: 1.28;
      transform: translate(-50%, -50%);
    }
  }

  .section11 {
    display: flex;
    position: relative;

    .section11-inner {
      display: flex;
      align-items: center;
      top: 0;
      left: 0;
      height: 100vh;
      padding: 0 100px;
    }

    .section11-title {
      font-size: 73px;
      font-weight: bold;
      line-height: 90px;
      margin-right: 120px;
    }

    .section11-card-wrap {
      display: flex;
      align-items: center;
      justify-content: center;

      .section11-card-item {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 400px;
        height: 540px;
        margin-left: 40px;
        padding: 40px 35px;
        color: #fff;
        border-radius: 20px;
        overflow: hidden;

        .section11-card-top {
          display: flex;
          justify-content: space-between;
        }

        .section11-card-top-title {
          font-size: 50px;
          font-weight: 600;
        }

        .section11-card-top-right {
          text-align: right;
          font-size: 30px;
          font-family: sans-serif;
        }

        .section11-card-top-subtitle {
          font-size: 16px;
          font-weight: bold;
          white-space: nowrap;
        }

        .section11-card-desc-wrap {
          margin-top: 40px;
          opacity: 0;
        }

        .section11-card-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .section11-card-icon {
          display: inline-block;
        }

        .section11-card-icon.expand {
          opacity: 1;
        }

        .section11-card-icon.contract {
          opacity: 0;
        }

        .section11-card-desc {
          strong {
            display: block;
            font-size: 20px;
            margin-bottom: 15px;
          }
        }

        .section11-card-desc:not(:last-child) {
          margin-bottom: 40px;
        }

        strong {
          font-weight: bold;
        }

        .section11-card-icon {
          width: 40px;
        }
      }

      .section11-card-item:nth-child(1) {
        background: #e657af;
      }

      .section11-card-item:nth-child(2) {
        background: #0049ff;
      }

      .section11-card-item:nth-child(3)::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url(/images/eb/image-sec-3-3.png) no-repeat center / cover
          #ccc;
        transition-delay: 0.2s;
        transition: all 0.3s;
        z-index: -1;
      }

      #section11-card-item-bg.blur::before {
        transform: scale(1.2);
        filter: blur(40px);
      }

      .section11-card-end {
        padding-left: 170px;
        font-weight: bold;
        font-size: 24px;
        line-height: 1.67;
      }
    }

    .section11-arrow {
      position: absolute;
      bottom: 30px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 24px;
      font-weight: bold;
      text-align: center;
    }

    .section11-arrow.fadein {
      animation: fadein 1s;
      animation-fill-mode: forwards;
    }

    .section11-arrow.fadeout {
      animation: fadeout 1s;
      animation-fill-mode: forwards;
    }

    .down-arrow {
      display: flex;
      justify-content: center;
      margin-bottom: 25px;
    }

    .down-arrow-item {
      display: block;
      width: 27px;
      height: 27px;
      margin-right: -6px;
      border-style: solid;
      border-width: 8px;
      border-left: 0;
      border-bottom: 0;
      animation: arrow 1s infinite alternate;
      transform: rotate(45deg);
    }

    .arrow1 {
      border-image: linear-gradient(60deg, #e657af 60%, #0049ff 160%);
      border-image-slice: 1;
    }

    .arrow2 {
      border-image: linear-gradient(60deg, #e657af 20%, #0049ff 145%);
      border-image-slice: 1;
      animation-delay: .2s;
    }

    .arrow3 {
      border-image: linear-gradient(60deg, #e657af, #0049ff 130%);
      border-image-slice: 1;
      animation-delay: .3s;
    }

    .arrow4 {
      border-image: linear-gradient(50deg, #e657af, #0049ff 100%);
      border-image-slice: 1;
      animation-delay: .4s;
    }

    .arrow5 {
      border-image: linear-gradient(50deg, #e657af, #0049ff 80%);
      border-image-slice: 1;
      animation-delay: .5s;
    }

    .arrow6 {
      border-image: linear-gradient(50deg, #0049ff 45%, #43cf2e 135%);
      border-image-slice: 1;
      animation-delay: .6s;
    }

    .arrow7 {
      border-image: linear-gradient(51deg, #0049ff, #43cf2e 75%);
      border-image-slice: 1;
      animation-delay: .7s;
    }


    /* .down-arrow-item {
      position: relative;
      display: block;
      width: 27px;
      height: 27px;
      margin-left: -6px;
      background: #000;
      transform: rotate(45deg);
      animation: arrow 1s alternate infinite ease;
    }

    .arrow1 {
      background: linear-gradient(45deg, #ee5787 55%, #0049ff 140%);
      animation-delay: 0.1s;
      z-index: 7;
    }

    .arrow2 {
      background: linear-gradient(45deg, #ee5787 30%, #0049ff 120%);
      animation-delay: 0.2s;
      z-index: 6;
    }

    .arrow3 {
      background: linear-gradient(45deg, #ee5787 10%, #0049ff 100%);
      animation-delay: 0.3s;
      z-index: 5;
    }

    .arrow4 {
      background: linear-gradient(45deg, #ee5787 5%, #0049ff 70%, #43cf2e 160%);
      animation-delay: 0.4s;
      z-index: 4;
    }

    .arrow5 {
      background: linear-gradient(45deg, #ee5787 5%, #0049ff 50%, #43cf2e 140%);
      animation-delay: 0.5s;
      z-index: 3;
    }

    .arrow6 {
      background: linear-gradient(45deg, #ee5787 0%, #0049ff 30%, #43cf2e 120%);
      animation-delay: 0.6s;
      z-index: 2;
    }

    .arrow7 {
      background: linear-gradient(45deg, #0049ff, #43cf2e 85%);
      animation-delay: 0.7s;
      z-index: 1;
    }

    .down-arrow-item::before {
      content: "";
      position: absolute;
      display: block;
      bottom: -11px;
      left: -11px;
      width: 30px;
      height: 30px;
      background: #fff;
    } */

    .down-title {
      position: relative;
    }

    .down-title-item2 {
      position: absolute;
      display: block;
      top: 0;
      left: 0;
      width: 100%;
      background: #fff;
    }

    @keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes fadeout {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }

    @keyframes arrow {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 0.5;
      }
      100% {
        opacity: 1;
      }
    }
  }

  .section12 {
    position: relative;
    height: 100vh;
    background: url(/images/eb/creator-sec-bg.jpg) no-repeat center / cover;

    .section12-text-wrap {
      display: flex;
      justify-content: center;
      flex-direction: column;
      height: 100%;
      padding: 0 200px;
      color: #fff;

      .section12-text-top {
        display: block;
        font-size: 60px;
        font-weight: bold;
        line-height: 75px;
        margin-bottom: 20px;
      }

      .section12-text-bottom {
        display: block;
        height: auto;
        font-size: 24px;
        font-weight: 600;
        line-height: 40px;
      }
    }

    .section12-arrow {
      position: absolute;
      bottom: 40px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .section13 {
    display: flex;
    align-items: center;

    .section13-inner {
      display: flex;
      align-items: center;
      width: auto;
      height: 100vh;
      padding: 0 100px;
    }

    .section13-title {
      font-size: 73px;
      font-weight: bold;
      line-height: 90px;
      margin-right: 120px;
    }

    .section13-card-item-wrap {
      display: flex;
      align-items: center;

      .section13-card-item:nth-child(2) {
        background-color: #0049ff;
      }

      .section13-card-item:nth-child(3) {
        background-color: #000;
      }

      .section13-card-item:nth-child(4) {
        background-color: #00bf41;
      }

      .section13-card-item {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 400px;
        height: 540px;
        margin-right: 40px;
        padding: 40px 33px;
        color: #fff;
        flex-shrink: 0;
        border-radius: 20px;
        overflow: hidden;

        #section13-card-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transition: all 0.3s;
          background: url(/images/eb/image-sec-4-1.png) no-repeat center / cover;
          z-index: -1;
        }

        #section13-card-bg.blur {
          filter: blur(40px);
        }

        .section13-card-item-head {
          position: relative;
          display: flex;
          justify-content: space-between;
          min-height: 110px;
          font-size: 50px;
          font-weight: bold;
          line-height: 65px;

          .section13-card-item-star {
            position: absolute;
            right: 0;
            top: 12px;
            font-size: 30px;
            font-weight: 400;
            font-family: "noto sans", sans-serif;
            line-height: 0.67;
            text-align: right;
          }
        }

        .section13-card-item-desc {
          position: relative;
          padding-top: 40px;
          font-size: 16px;
          font-weight: bold;
          line-height: 1.63;
          color: #fff;
        }

        .section13-card-item-bottom {
          position: relative;
          width: 100%;

          .section13-card-item-circle {
            display: block;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: #ff009d;
          }

          .section13-card-item-profile {
            display: flex;
            align-items: center;

            .section13-card-item-name {
              margin-left: 9px;
            }
          }

          .section13-card-item-icon-wrap {
            position: absolute;
            top: 0;
            right: 0;
            width: 40px;
            height: 40px;
          }

          .section13-card-item-icon {
            position: absolute;
            top: 0;
            left: 0;
          }

          .section13-card-item-icon.icon-expand {
            opacity: 1;
          }

          .section13-card-item-icon.icon-contract {
            opacity: 0;
          }

          .section13-card-item-icon.fade.icon-expand {
            opacity: 0;
          }

          .section13-card-item-icon.fade.icon-contract {
            opacity: 1;
          }
        }
      }
    }

    .section13-desc {
      padding-left: 170px;
      font-size: 24px;
      font-weight: bold;
      line-height: 40px;
    }
  }

  .section14 {
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;

    .section14-inner {
      padding: 0 100px;

      .section14-title {
        font-size: 72px;
        font-weight: bold;
        line-height: 1.28;
        margin-bottom: 30px;
      }

      .section14-desc {
        font-size: 24px;
        font-weight: 600;
        line-height: 40px;
        margin-bottom: 70px;
      }

      .section14-link-wrap {
        display: flex;
        gap: 20px;

        .black {
          background: #000;
          color: #fff;
        }

        a {
          font-size: 18px;
          font-weight: bold;
          padding: 14px 21px 12px;
          border: 2px solid #000;
        }
      }
    }
  }

  .section15 {
    transform: translateY(100%);
    transition: 0.3s;

    .section15-banner {
      display: flex;
      margin-left: -705px;
    }

    span {
      position: relative;
      display: flex;
      gap: 8px;
      align-items: center;
      justify-content: center;
      width: 235px;
      height: 60px;
      color: #fff;
      font-size: 24px;
      font-weight: bold;
      animation: banner 8s linear infinite running;
      padding: 0;
      margin: 0;
    }

    span i {
      font-style: italic;
    }

    /* 0,3,6,9,12 */
    span:nth-child(3n) {
      background: #0049ff;
    }

    /* 1,4,7,10,13 */
    span:nth-child(3n + 1) {
      background: #e657af;
    }

    /* 2,5,8,11,14 */
    span:nth-child(3n + 2) {
      background: #02be42;
    }

    span::before {
      display: block;
      position: absolute;
      z-index: 3;
      width: 40px;
      height: 60px;
      top: 0;
      left: -20px;
      content: "";
    }

    span:nth-child(3n)::before {
      background: linear-gradient(90deg, #02be42 0%, #0049ff);
    }

    span:nth-child(3n + 1)::before {
      background: linear-gradient(90deg, #0049ff 0%, #e657af);
    }

    span:nth-child(3n + 2)::before {
      background: linear-gradient(90deg, #e657af 0%, #02be42);
    }

    @keyframes banner {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(300%);
      }
    }
  }

  .section15.play {
    transform: translateY(0);
    transition: 0.3s;
  }

  footer {
    background: #000;
    position: relative;
    color: #fff;
    padding: 0 100px;

    .footer-inner {
      display: flex;
      justify-content: space-between;
      padding: 58px 0;

      .footer-info {
        font-size: 14px;

        .footer-addr {
          font-weight: 400;
          line-height: 1;
        }

        .footer-copyright {
          margin-top: 10px;
          font-weight: 300;
          line-height: 1;
          text-transform: uppercase;
        }
      }

      .footer-logo {
        img {
          width: 193px;
          display: block;
        }
      }
    }
  }

  #topBtn {
    opacity: 0;
    transition: all 0.3s;

    a {
      position: fixed;
      bottom: 40px;
      right: 100px;
      width: 50px;
      height: 50px;
      background: #000 url(/images/eb/top-btn.svg) no-repeat center;
    }
  }

  #topBtn.on {
    opacity: 1;
  }
`;

export default EbComponentStyle;
