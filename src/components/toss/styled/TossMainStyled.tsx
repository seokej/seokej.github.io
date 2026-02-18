import styled from "styled-components";

export const TossMainStyled = styled.div`
  header {
    position: fixed;
    background-color: transparent;
    width: 100%;
    height: 60px;
    z-index: 1000;
    border-bottom: 1px solid transparent;
  }

  .top {
    width: 100%;
    margin: auto;
    max-width: 1140px;
    height: 100%;
    display: flex;
  }

  .topFixed {
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(30px);
  }

  .topFixed_W {
    background-color: #fff;
    border-bottom-color: rgba(0, 27, 55, 0.1);
    z-index: 10000;
  }

  .topFixed_W .nav a {
    color: #4e5968;
  }

  .topFixed_W .nav a:hover {
    color: #0056b3;
    border: 0;
    border-radius: 8px;
    background: rgba(2, 32, 71, 0.05);
    text-decoration: none;
    text-align: left;
  }

  .top-inner {
    display: flex;
    width: 92%;
    margin: auto;
    height: 100%;
    justify-content: space-between;
    -webkit-justify-content: space-between;
    -moz-justify-content: space-between;
  }

  .logo-box {
    display: flex;
    align-items: center;
    margin-right: 24px;
  }

  .logo {
    display: flex;
  }

  .logo span {
    display: flex;
    min-width: 24px;
    width: 78px;
    height: 20px;
  }

  .icon svg {
    width: auto;
    height: 20px;
  }

  .topFixed_W .icon svg [fill]:not([fill="none"]) {
    fill: #0050ff;
  }

  .icon svg [fill]:not([fill="none"]) {
    fill: #fff;
  }

  .nav-wrap {
    display: flex;
    display: -webkit-flex;
    display: -moz-flex;
    overflow-y: hidden;
    max-height: 100%;
    justify-content: space-between;
    transition: all 0.2s ease;
    opacity: 1;
  }

  .nav {
    display: flex;
    align-items: center;
  }

  .nav li {
    display: flex;
    align-items: center;
    padding: 0 8px;
  }

  .nav a {
    font-family: "Gothic A1", sans-serif;
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;
    letter-spacing: -0.5px;
    color: #f0f4f5;
    padding: 14px 10px;
    background-color: transparent;
  }

  .nav a:hover {
    border: 0;
    border-radius: 8px;
    background: #d9d9ff1c;
    text-decoration: none;
    text-align: left;
  }

  #section1 {
    position: relative;
    display: block;
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-image: url(/images/toss/kv-1.jpg);
    background-position: left center;
    background-repeat: no-repeat;
  }

  .main-text {
    font-family: "Nanum Gothic", sans-serif;
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    margin-bottom: 247px;
    text-align: center;
  }

  .main-text span {
    font-size: 72px;
    font-weight: bold;
    line-height: 93.6px;
    letter-spacing: -0.05em;
    word-break: keep-all;
    color: #f0f4f5;
  }

  .arrow {
    position: absolute;
    bottom: 97px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
  }

  .arrow img {
    width: 28px;
    height: auto;
    cursor: pointer;
    -webkit-animation: animation_arrow 2s infinite;
    animation: animation_arrow 2s infinite;
  }

  @keyframes animation_arrow {
    0% {
      opacity: 0;
    }
    50% {
      -webkit-transform: translateY(-8px);
      -moz-transform: translateY(-8px);
      -ms-transform: translateY(-8px);
      transform: translateY(-8px);
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @-webkit-keyframes animation_arrow {
    0% {
      opacity: 0;
    }
    50% {
      -webkit-transform: translateY(-8px);
      -moz-transform: translateY(-8px);
      -ms-transform: translateY(-8px);
      transform: translateY(-8px);
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  #section2 {
    position: relative;
    display: block;
    background-color: #121417;
    width: 100vw;
    max-width: 100%;
    height: 100vh;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
  }

  .sub-text {
    max-width: 960px;
    z-index: 1000;
  }

  .sub-text span {
    font-family: sans-serif;
    margin: 0 auto;
    display: block;
    font-size: 38px;
    font-weight: bold;
    line-height: 52px;
    letter-spacing: -0.05em;
    word-break: keep-all;
    color: #f0f4f5;
    margin-bottom: 25px;
  }

  .sub-text-table {
    display: table;
    width: 100%;
    color: #fff;
  }

  table {
    margin: 0 auto;
    max-width: 960px;
    margin-top: 51px;
    width: 100%;
  }

  col:nth-child(1) {
    width: 50%;
  }

  col:nth-child(2) {
    width: 50%;
  }

  table th {
    font-size: 21px;
    color: #b0b8c1;
    font-weight: normal;
    line-height: 26.29px;
    text-align: left;
  }

  table td {
    width: 400px;
    font-family: "Inter", sans-serif;
    font-size: 64px;
    color: #fff;
    font-weight: bold;
    line-height: 80.13px;
    padding-top: 9px;
    padding-bottom: 51px;
  }

  .chart {
    position: absolute;
    bottom: 0;
    left: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    margin: 0 auto;
  }

  .chart-fill {
    opacity: 0;
    fill: url(#gradient);
    -webkit-transform: scale(1.01);
    -moz-transform: scale(1.01);
    -ms-transform: scale(1.01);
    transform: scale(1.01);
    -webkit-animation: fill 2s linear 1s forwards;
    animation: fill 2s linear 1s forwards;
  }

  @-webkit-keyframes fill {
    to {
      opacity: 0.3;
    }
  }

  @keyframes fill {
    to {
      opacity: 0.3;
    }
  }

  .chart-line {
    fill: none;
    stroke: url(#gradient);
    stroke-dasharray: 2000;
    stroke-dashoffset: 2000;
    stroke-linecap: round;
    stroke-width: 2;
    -webkit-transform: scale(1.01);
    -moz-transform: scale(1.01);
    -ms-transform: scale(1.01);
    transform: scale(1.01);
  }

  .chart-line.anim {
    -webkit-animation: draw 2s linear 1s forwards;
    animation: draw 2s linear 1s forwards;
  }

  @-webkit-keyframes draw {
    to {
      stroke-dashoffset: 0;
    }
  }

  @keyframes draw {
    to {
      stroke-dashoffset: 0;
    }
  }

  #section3 {
    position: relative;
    display: flex;
    height: 200vh;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    background-color: #121417;
  }

  .bg_fixed.fixed {
    position: fixed;
    background-image: url(/images/toss/kv-2.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    top: 0px;
    left: 0px;
    height: 100vh;
    width: 100vw;
  }

  .black-background.fixed {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    background: rgb(18, 20, 23);
  }

  .sub-text2 {
    position: absolute;
    width: 100%;
    max-width: 788px;
    height: 406px;
    right: 0;
    left: 0;
    background: rgba(26, 30, 36, 0.65);
    text-align: center;
    padding: 60px 92px;
    margin: 0 auto;
    border-radius: 16px;
    backdrop-filter: blur(30px);
    box-sizing: border-box;
  }

  .sub-text2 h1 {
    margin-bottom: 20px;
    font-size: 30px;
    line-height: 42px;
    font-weight: 500;
    color: #b0b8c1;
    box-sizing: border-box;
  }

  .sub-text2 span {
    font-family: "Nanum Gothic", sans-serif;
    font-weight: bold;
    font-size: 27px;
    color: #f0f4f5;
    line-height: 42px;
    word-break: keep-all;
    white-space: pre-line;
    box-sizing: border-box;
  }

  #section4 {
    position: relative;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 100vw;
    max-width: 100%;
    height: auto;
    padding-bottom: 116px;
    color: #f0f4f5;
  }

  .sub-text3 span {
    display: inline-block;
    font-weight: bold;
    font-size: 42px;
    text-align: center;
    line-height: 60px;
    color: #f0f4f5;
    margin-bottom: 82px;
  }

  .timeline-wrap {
    position: relative;
    width: 600px;
    margin: 0 auto;
  }

  .timeline-year {
    float: left;
    font-size: 20px;
    font-style: normal;
    font-weight: bold;
    line-height: 25px;
    color: rgb(78, 89, 104);
  }

  .year {
    position: relative;
    width: 77px;
    height: 75px;
    cursor: pointer;
  }

  .year::after {
    display: block;
    cursor: pointer;
    position: absolute;
    top: 8px;
    right: -3px;
    width: 2px;
    height: 75px;
    content: "";
    background-color: rgb(51, 61, 75);
    z-index: 0;
  }

  .years {
    cursor: pointer;
    color: rgb(78, 89, 104);
    background: none;
    border: none;
  }

  .years.active {
    color: rgb(255, 255, 255);
  }

  .years::after {
    display: block;
    cursor: pointer;
    position: absolute;
    top: 8px;
    right: -8px;
    width: 12px;
    height: 12px;
    content: "";
    background-color: rgb(51, 61, 75);
    border-radius: 50%;
    z-index: 1;
  }

  .years.active::after {
    background: rgb(25, 31, 40);
    box-shadow: 0px 0px 0px 4px #ffffff;
    -webkit-box-shadow: 0px 0px 0px 4px #fff; /* Safari and Chrome */
    -moz-box-shadow: 0px 0px 0px 4px #fff; /* Firefox */
    -webkit-transition:
      color 0.1s ease-in-out,
      background-color 0.1s ease-in-out,
      border-color 0.1s ease-in-out,
      box-shadow 0.1s ease-in-out,
      opacity 0.1s ease-in-out;
    transition:
      color 0.1s ease-in-out,
      background-color 0.1s ease-in-out,
      border-color 0.1s ease-in-out,
      box-shadow 0.1s ease-in-out,
      opacity 0.1s ease-in-out;
  }

  .timeline-detail-wrap {
    position: relative;
    display: inline-block;
    vertical-align: top;
    top: 2px;
    left: 75px;
  }

  .timeline-detail {
    position: absolute;
    display: none;
    width: 500px;
    height: 70px;
  }

  .timeline-detail.active {
    display: block;
    -webkit-animation: move 0.4s ease-in-out;
    animation: move 0.4s ease-in-out;
  }

  @keyframes move {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .timeline-detail-wrap div span {
    font-size: 17px;
    font-style: normal;
    font-weight: bold;
    line-height: 21px;
    color: rgb(139, 149, 161);
    opacity: 1 !important;
  }

  .timeline-detail-wrap div p {
    font-family:
      "Segoe UI", "Helvetica Neue", Helvetica, Verdana, Arial, sans-serif;
    margin-bottom: 40px;
    font-size: 17px;
    font-style: normal;
    font-weight: bold;
    line-height: 1.3em;
    color: rgb(242, 244, 246);
    word-break: keep-all;
    white-space: pre-line;
  }

  #section5 {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    width: 100vw;
    max-width: 100%;
    padding: 175px 0;
    background-color: #ffffff;
  }

  .sub-text4 h1 {
    font-size: 52px;
    color: #000;
    font-weight: bold;
    margin-bottom: 13px;
  }

  .sub-text4 span {
    display: inline-block;
    font-size: 24px;
    text-align: center;
    line-height: 72px;
    color: #4e5968;
    margin-bottom: 32px;
  }

  .finance {
    z-index: 1;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    -webkit-justify-content: center;
    justify-content: center;
    max-width: 960px;
    margin: 0 auto;
  }

  .content-wrap {
    width: 458px;
    height: 523px;
    margin: 14px 0;
    padding: 0 15px;
    overflow: hidden;
  }

  .image-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 32px;
    overflow: hidden;
    cursor: pointer;
    border-radius: 16px;
    box-sizing: border-box;
  }

  .core {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(/images/toss/team-1core.jpg);
    background-size: cover;
    z-index: -1;
    border-radius: 16px;
    transition: background-image 0.3s ease 0s;
  }

  .stock {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(/images/toss/team-2securities.jpg);
    background-size: cover;
    z-index: -1;
    border-radius: 16px;
    transition: background-image 0.3s ease 0s;
  }

  .payment {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(/images/toss/team-3payments.jpg);
    background-size: cover;
    z-index: -1;
    border-radius: 16px;
    transition: background-image 0.3s ease 0s;
  }

  .insurance {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(/images/toss/team-4insu.jpg);
    background-size: cover;
    z-index: -1;
    border-radius: 16px;
    transition: background-image 0.3s ease 0s;
  }

  .bank {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(/images/toss/team-5bank.jpg);
    background-size: cover;
    z-index: -1;
    border-radius: 16px;
    transition: background-image 0.3s ease 0s;
  }

  .cx {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(/images/toss/team-6cx.jpg);
    background-size: cover;
    z-index: -1;
    border-radius: 16px;
    transition: background-image 0.3s ease 0s;
  }

  .image-wrap p {
    white-space: pre-line;
  }

  .mini-title {
    height: 24px;
    margin: 0 0 8px 0;
    overflow-y: hidden;
    font-size: 15px;
    line-height: 24px;
    color: #4e5968;
    opacity: 1;
  }

  .mini-text {
    font-family: sans-serif;
    font-size: 30px;
    font-weight: bold;
    color: #333d4b;
    line-height: 44px;
    letter-spacing: -1.5px;
    margin: 0 0 20px 0;
  }

  .image-wrap.active > div:before {
    position: absolute;
    inset: 0px;
    content: "";
    background: rgba(255, 255, 255, 0.6);
  }

  .image-wrap.active > div {
    -webkit-filter: blur(5px);
    filter: blur(30px);
    transform: scale(1.2);
    background: #e6f0f8;
  }

  .image-wrap.active .mini-title {
    height: 0px;
    opacity: 0;
    transition:
      opacity 0.3s ease,
      height 0.3s ease;
  }

  .image-wrap.active .mini-text {
    font-size: 25px;
    line-height: 33px;
  }

  .image-wrap.active .plus {
    opacity: 0;
    height: 0px;
  }

  .plus {
    height: 24px;
    opacity: 1;
    overflow-y: hidden;
    -webkit-transition:
      height 0.3s ease,
      opacity 0.3s ease;
    transition:
      height 0.3s ease,
      opacity 0.3s ease;
  }

  .image-wrap.active .close-btn {
    opacity: 1;
  }

  .close-btn {
    position: absolute;
    bottom: 0px;
    left: 0px;
    padding: 35px;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.3s ease 0s;
  }

  .image-wrap.active .mini-body {
    opacity: 1;
    display: block;
  }

  .mini-body {
    display: none;
    font-family: "Nanum Gothic", sans-serif;
    margin: 0px;
    font-size: 15px;
    font-weight: 600;
    line-height: 1.5;
    color: rgb(51, 61, 75);
    letter-spacing: -0.1px;
    opacity: 0;
    transition: opacity 0.3s ease 0s;
  }

  .image-wrap.active .mini-banner {
    display: block;
    opacity: 1;
  }

  .mini-banner {
    display: none;
    margin-top: 24px;
    font-size: 16px;
    font-weight: normal;
    line-height: 20px;
    color: rgb(49, 130, 246);
    opacity: 0;
    transition:
      font-size 0.3s ease 0s,
      line-height 0.3s ease 0s;
  }

  #section6 {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    height: 688px;
    background-color: #f9fafb;
  }

  .sub-text5 {
    display: block;
    color: #191f28;
    font-size: 46px;
    font-weight: bold;
    line-height: 70px;
    white-space: pre-line;
    margin-bottom: 68px;
    text-align: center;
    letter-spacing: -1.5px;
  }

  .world {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    max-width: 850px;
  }

  .world img {
    width: 211px;
    height: 102px;
  }

  #section7 {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 122px 0px 138px;
    background-color: rgb(255, 255, 255);
    box-sizing: border-box;
  }

  .title-wrap {
    display: flex;
    width: 960px;
    margin-bottom: 68px;
  }

  .title-wrap span {
    margin-right: 38px;
    font-size: 46px;
    font-style: normal;
    font-weight: bold;
    font-stretch: normal;
    line-height: 1.4em;
    color: rgb(25, 31, 40);
    text-align: center;
    letter-spacing: normal;
    word-break: keep-all;
    -webkit-font-smoothing: subpixel-antialiased;
  }

  .article-year-wrap {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    line-height: 1.5;
  }

  .article-year {
    position: relative;
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    max-width: 100%;
    overflow-x: visible;
  }

  .a-year {
    font-family: sans-serif;
    font-size: 18px;
    position: relative;
    width: 75px;
    height: 44px;
    padding: 10px 18px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    cursor: pointer;
    white-space: nowrap;
    color: #4e5968;
    transition:
      font-weight 0.2s ease,
      color 0.2s ease;
    box-sizing: border-box;
    line-height: 1.6;
    text-decoration: none !important;
    border: none;
    background: none;
  }

  .a-year:hover {
    color: #4e5968 !important;
    text-decoration: none !important;
  }

  .ready .indicator {
    content: "";
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
  }

  .ready .current {
    color: #191f28 !important;
    font-weight: bold;
    border-radius: 21px;
    height: 100%;
    background-color: rgba(2, 32, 71, 0.05);
  }

  .article {
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    color: rgb(49, 130, 246);
  }

  .article span:first-child {
    font-size: 14px;
    margin-left: 10px;
    font-weight: 500;
    color: rgb(176, 184, 193);
  }

  .article-inner {
    display: none;
  }

  .article-inner.current {
    display: block;
    -webkit-animation: slideup 0.5s forwards;
    animation: slideup 0.5s forwards;
  }

  @keyframes slideup {
    from {
      transform: translateY(50px);
      opacity: 0;
    }
    to {
      transform: translateY(0px);
      opacity: 1;
    }
  }

  @-webkit-keyframes slideup {
    from {
      transform: translateY(50px);
      opacity: 0;
    }
    to {
      transform: translateY(0px);
      opacity: 1;
    }
  }

  .article-inner li::after {
    position: absolute;
    top: 50%;
    right: 20px;
    width: 26px;
    height: 22px;
    margin-top: -11px;
    content: "";
    background-image: url(/images/toss/right_arrow.png);
    background-size: 26px 22px;
    opacity: 0.1;
    transition: all 0.5s ease 0s;
  }

  .article-inner li:hover::after {
    opacity: 0.75;
    transform: translate3d(12px, 0px, 0px);
  }

  .article-inner li:hover {
    transform: scale(1.01);
  }

  .article-inner li {
    position: relative;
    padding: 44px 2px;
    font-weight: bold;
    cursor: pointer;
    border-bottom: 1px solid rgba(69, 79, 93, 0.07);
    transition: all 0.35s ease 0s;
  }

  .article .article-title {
    font-family: "sans-serif";
    display: block;
    margin-top: 14px;
    font-size: 21px;
    font-weight: 600;
    line-height: 1.4em;
    color: rgb(51, 61, 75);
    transition: all 0.2s ease 0s;
    letter-spacing: -0.5px;
  }

  footer {
    background-color: #f9fafb;
    padding: 50px 0 100px;
  }

  .footer {
    color: #000;
    position: relative;
    max-width: 1064px;
    margin: auto;
    padding: 0 67px;
    box-sizing: border-box;
  }

  .site-wrap {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    padding-bottom: 50px;
  }

  .site {
    font-family: "Nanum Gothic", sans-serif;
    font-weight: bold;
    font-size: 14px;
    line-height: 30px;
    width: 170px;
  }

  .last {
    flex: 1;
    -webkit-box-flex: 1;
    -ms-flex: 1;
  }

  .li-title {
    color: #000;
    font-weight: bold;
    padding-bottom: 5px;
  }

  .site a {
    color: #6b7684;
  }

  .site a:hover {
    text-decoration: underline;
    cursor: pointer;
    color: #0056b3;
  }

  .company span {
    color: #000;
    font-weight: bold;
    font-size: 15px;
    display: block;
    padding-bottom: 15px;
    white-space: pre-wrap;
    word-break: keep-all;
    word-wrap: break-word;
  }

  .company {
    font-size: 13px;
    color: #8b95a1;
    line-height: 20px;
    margin-bottom: 30px;
  }

  .term {
    font-family: "Nanum Gothic", sans-serif;
    font-size: 13px;
    font-weight: bold;
  }

  .term ul {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 24px 0 30px;
    list-style: none;
  }

  .term li {
    padding-right: 30px;
  }

  .term a {
    line-height: 22px;
    color: #6b7684;
  }

  .term a:hover {
    text-decoration: underline;
    cursor: pointer;
    color: #0056b3;
  }

  .term .f-color {
    color: #000;
  }

  .term .f-color:hover {
    color: #000;
  }

  .sns li {
    display: inline-block;
    margin-right: 5px;
  }

  .sns a {
    transition: opacity 0.2s ease;
    opacity: 0.7;
  }

  .sns a:hover {
    opacity: 1;
  }

  .m-icon-wrap {
    display: none;
  }

  .m-table {
    display: none;
  }

  .m-timeline-year-wrap {
    display: none;
  }

  .m-timeline-content {
    display: none;
  }

  /***** md *****/
  @media (max-width: 768px) {
    .title-wrap {
      flex-direction: column;
      width: 100%;
      margin-bottom: 41px;
    }

    .title-wrap span {
      margin: 0px 0px 35px;
      font-size: 32px;
    }

    .article-inner li::after {
      background-image: none;
    }

    .sub-text {
      padding: 20px 31px;
    }
  }

  @media (max-width: 639px) {
    .m-icon-wrap {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      align-self: center;
    }

    .m-icon-button {
      height: 100%;
      padding: 0 8px;
      margin-right: -8px;
      line-height: 1.5;
    }

    .m-icon {
      width: 24px;
      height: 24px;
      min-width: 24px;
      color: #fff;
      display: -webkit-inline-box;
      display: inline-flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
    }

    .m-icon svg {
      width: 100%;
      height: 100%;
    }

    #section1 {
      background-position: center center;
    }

    .main-text {
      max-width: calc(100vw - 126px);
      margin: 0 auto 181px;
    }

    .arrow {
      bottom: 118px;
    }

    .header.active {
      z-index: 9999;
      background-color: #fff;
      backdrop-filter: blur(2px);
      transition: background-color 0.2s ease;
      -webkit-transition: backdrop-filter 0.2s ease-in-out;
      transition: backdrop-filter 0.2s ease-in-out;
    }

    .header.active .icon svg [fill]:not([fill="none"]) {
      fill: #0050ff;
    }

    .nav-wrap {
      background-color: #fff;
      width: 100%;
      flex-direction: column;
      position: absolute;
      top: 60px;
      left: 0;
      max-height: 0;
      opacity: 0;
      transition: all 0.2s ease;
    }

    .nav-wrap.active {
      opacity: 1;
      max-height: 100vh;
      height: auto;
    }

    .nav {
      flex-direction: column;
      transition: all 0.2s ease;
    }

    .nav li {
      padding: 0;
      width: 100%;
    }

    .nav a {
      color: #4e5968;
      padding: 18px 20px;
      border-radius: 0;
      width: 100%;
    }

    .nav a:hover {
      background-color: rgba(2, 32, 71, 0.05);
      color: #0056b3;
    }

    .m-open {
      opacity: 1;
      transition: all 0.2s ease-in;
    }

    .header.active .m-open {
      opacity: 0;
    }

    .m-close {
      opacity: 0;
      transition: all 0.2s ease-out;
    }

    .header.active .m-close {
      opacity: 1;
    }
  }

  @media (min-width: 720px) {
    .m_br {
      content: " ";
    }
  }

  @media (max-width: 720px) {
    .main-text {
      max-width: calc(100vw - 126px);
      margin: 0 auto 181px;
    }

    .main-text span {
      font-size: 40px;
      line-height: 52px;
    }

    .sub-text span {
      font-family: "Nanum Gothic", sans-serif;
      font-size: 28px;
      line-height: 39.2px;
      text-align: center;
      letter-spacing: -0.5px;
      margin-bottom: 40px;
    }

    .sub-text span br {
      content: " ";
    }

    .sub-text-table {
      display: table;
      max-width: 960px;
      width: 100%;
      color: #fff;
    }

    table {
      margin-top: 51px;
      width: 100%;
    }

    .m-table {
      display: block;
    }

    .pc-table {
      display: none;
    }

    table th {
      font-size: 17px;
      line-height: 21.28px;
    }

    table td {
      width: 100%;
      font-size: 40px;
      line-height: 50.08px;
      padding-top: 9px;
      padding-bottom: 51px;
    }

    .sub-text2 {
      width: calc(100vw - 60px);
      height: auto;
      padding: 42px 24px 36px;
    }

    .sub-text2 h1 {
      margin-bottom: 7px;
      font-size: 19px;
      line-height: 27.55px;
    }

    .sub-text2 span {
      margin-bottom: 7px;
      font-size: 18px;
      line-height: 30.45px;
    }

    .sub-text2 span br {
      content: " ";
    }

    #section3 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
    }

    .sub-text3 span {
      text-align: left;
      font-size: 40px;
      line-height: 52px;
      padding: 0px 26px;
      margin-bottom: 54px;
      letter-spacing: -1px;
    }

    .timeline-year {
      display: none;
    }

    .timeline-detail-wrap {
      display: none;
    }

    .timeline-wrap {
      margin: 0;
      width: auto;
    }

    #section4 {
      overflow: hidden;
    }

    .m-timeline-year-wrap {
      display: block;
      max-width: 100vw;
      margin-bottom: 36px;
    }

    .m-timeline-year-wrap .m_scroll {
      overflow-x: auto;
    }

    .m_scroll {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }

    .m_scroll::-webkit-scrollbar {
      display: none;
    }

    .article-year {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }

    .article-year::-webkit-scrollbar {
      display: none;
    }

    .m-timeline-year {
      position: relative;
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      max-width: 100%;
      overflow-x: visible;
      -webkit-overflow-scrolling: touch;
    }

    .m-timeline-year::after {
      background-color: rgba(2, 32, 71, 0.05);
      height: 1px;
      box-sizing: inherit;
    }

    .ready2::after {
      background-color: rgb(78, 89, 104);
    }

    .ready2::after,
    .m-indicator {
      content: "";
      position: absolute;
      width: 200%;
      left: 0;
      bottom: 0;
    }

    .m-indicator {
      background-color: rgb(242, 244, 246);
      border-radius: 1px;
      height: 2px;
      width: 83px;
      transition: 0.2s ease;
      z-index: 1100;
    }

    .ready2 .current {
      z-index: 10000;
      color: #fff;
      font-weight: bold;
    }

    .m-year {
      position: relative;
      height: 52px;
      padding: 14px 20px;
      transition:
        font-weight 0.2s ease,
        color 0.2s ease;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      cursor: pointer;
      white-space: nowrap;
      color: #4e5968;
      font-family: sans-serif;
      font-size: 19px;
      font-weight: bold;
      line-height: 24px;
      text-align: center;
      letter-spacing: -0.4px;
      box-sizing: border-box;
      border: none;
      background: none;
    }

    .m-t-content-year {
      font-size: 14px;
      font-weight: 600;
      line-height: 18px;
      color: rgb(49, 130, 246);
    }

    .m-timeline-content-wrap {
      position: relative;
      left: 0px;
      width: 100%;
      padding: 0px 17px;
      word-break: keep-all;
      box-sizing: border-box;
    }

    .m-timeline-content {
      display: none;
    }

    .m-timeline-content.current {
      display: block;
      -webkit-animation: slideup 0.5s forwards;
      animation: slideup 0.5s forwards;
    }

    @keyframes slideup {
      from {
        transform: translateY(50px);
        opacity: 0;
      }
      to {
        transform: translateY(0px);
        opacity: 1;
      }
    }

    @-webkit-keyframes slideup {
      from {
        transform: translateY(50px);
        opacity: 0;
      }
      to {
        transform: translateY(0px);
        opacity: 1;
        -webkit-transform: translateY(0px);
        -moz-transform: translateY(0px);
        -ms-transform: translateY(0px);
        -o-transform: translateY(0px);
      }
    }

    .m-timeline-content div span {
      margin-bottom: 5px;
      font-size: 17px;
      font-style: normal;
      font-weight: bold;
      line-height: 21px;
      color: rgb(139, 149, 161);
    }

    .m-timeline-content div p {
      font-family: "Nanum Gothic", sans-serif;
      margin-bottom: 50px;
      font-size: 16px;
      font-style: normal;
      font-weight: bold;
      line-height: 1.5em;
      color: rgb(242, 244, 246);
      white-space: pre-wrap;
    }

    .hidden {
      display: none;
    }

    #section5 {
      overflow: hidden;
      padding: 79px 14px;
      word-break: keep-all;
      box-sizing: border-box;
    }

    .sub-text4 h1 {
      font-size: 34px;
      margin-bottom: 10px;
      letter-spacing: -1.5px;
      line-height: 40px;
    }

    .sub-text4 span {
      font-family: sans-serif;
      font-size: 18px;
      font-weight: bold;
      letter-spacing: normal;
      word-break: keep-all;
    }

    #section5 .sub-text4span {
      margin-bottom: 35px;
      font-size: 20px;
      line-height: 30px;
      letter-spacing: -1.5px;
    }

    .content-wrap {
      width: calc(100vw - 28px);
      height: 392px;
    }

    .image-wrap {
      padding: 24px;
    }

    .finance {
      z-index: 1;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      justify-content: space-between;
      max-width: 960px;
      margin: 0 auto;
    }

    .mini-text {
      font-family: sans-serif;
      font-size: 24px;
      font-weight: bold;
      color: #333d4b;
      line-height: 38px;
      letter-spacing: -1.5px;
      margin: 0 0 15px 0;
    }

    #section6 {
      height: auto;
      padding: 75px 24px;
    }

    .sub-text5 {
      margin-bottom: 41px;
      font-size: 32px;
      line-height: 40px;
    }

    .world {
      width: 100%;
    }

    .world img {
      width: 163.42px;
      height: 79px;
    }

    #section7 {
      overflow: hidden;
    }

    .article-year-wrap {
      max-width: 100vw;
    }

    .article-year {
      padding: 0px 10px;
      overflow-x: auto;
    }

    .article-year::-webkit-scrollbar {
      display: none;
    }

    .article-year div {
      margin-left: 5px;
    }

    .article-year div:first-child {
      margin-left: 0px;
    }

    .article-wrap {
      padding: 0px 26px;
      text-align: left;
    }

    .article-inner li {
      padding: 36px 2px;
    }

    .article .article-title {
      margin-top: 8px;
      font-size: 18px;
      letter-spacing: -1.2px;
    }

    footer {
      margin-top: 0;
      padding: 60px 40px 80px;
    }

    .footer {
      padding: 0;
    }

    .site-wrap {
      flex-direction: column;
      -webkit-box-orient: vertical;
      -ms-flex-direction: column;
      padding-bottom: 0;
    }

    .site {
      width: 100%;
      padding-bottom: 40px;
    }

    .company span {
      color: #000;
      font-weight: bold;
      font-size: 15px;
      display: block;
      padding-bottom: 15px;
      white-space: pre-wrap;
      word-break: keep-all;
      word-wrap: break-word;
    }

    .company {
      font-family: sans-serif;
      font-size: 12px;
      font-weight: 600;
      color: #8b95a1;
      line-height: 20px;
      margin-bottom: 30px;
      letter-spacing: -0.8px;
    }

    .company-check {
      text-decoration: none;
      color: #6b7684;
    }

    .term ul {
      flex-direction: column;
      flex-wrap: wrap;
    }

    .term ul a {
      display: block;
      padding-top: 3px;
      padding-bottom: 3px;
    }
  }

  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    .m-indicator {
      display: none;
    }

    .last {
      flex: auto;
    }
  }
`;
