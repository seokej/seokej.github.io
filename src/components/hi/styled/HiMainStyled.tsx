import styled from "styled-components";

export const HiMainStyled = styled.div`
  .top {
    position: fixed;
    top: 0;
    width: 100%;
    min-height: 87px;
    background: #fff;
    z-index: 10;
  }

  .bottom_line {
    position: absolute;
    bottom: 0;
    left: 40px;
    right: 40px;
    z-index: 999;
    height: 1px;
    background: #000;
    opacity: 1;
    display: block;
    transition: all 1s ease 0.1s;
  }

  .top_inner {
    position: relative;
    margin: 0 40px;
    padding: 0 20px;
    min-height: 87px;
    top: 0;
    z-index: 1;
  }

  .top_inner:after {
    display: table;
    content: "";
    clear: both;
  }

  :not(.fp-viewing-0).left_logo_box {
    display: none;
  }

  .fp-viewing-0 .left_logo_box {
    display: block;
    position: absolute;
    top: 40px;
    transition: all 1s ease 0.1s;
  }

  .fp-viewing-0 .left_logo {
    background-size: 1091px 265px;
    background-image: url(/images/hi/normal.png);
    background-position: -348px -107px;
    width: 197px;
    height: 62px;
    display: block;
  }

  .fp-viewing-0 .left_text {
    margin-top: 40px;
    text-transform: uppercase;
    color: #000;
    font-size: 14px;
    font-weight: bold;
    line-height: 24px;
    font-family: "Audiowide", cursive;
  }

  .logo {
    display: inline-block;
    margin-top: 34px;
  }

  .logo a {
    display: inline-block;
    width: 267px;
    height: 20px;
    background: url(/images/hi/normal.png);
    background-size: 1091px 265px;
    background-position: -549px -107px;
  }

  .nav_wrap {
    position: absolute;
    display: block;
    top: 0;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
  }

  .nav {
    display: block;
  }

  .fade2 {
    animation: fadein2 1s;
  }

  @keyframes fadein2 {
    from {
      opacity: 0;
      transform: translate(0px, 40px);
    }
    to {
      opacity: 1;
      transform: translate(0px, 0px);
    }
  }

  @-moz-keyframes fadein2 {
    /* Firefox */
    from {
      opacity: 0;
      transform: translate(0px, 40px);
    }
    to {
      opacity: 1;
      transform: translate(0px, 0px);
    }
  }

  @-webkit-keyframes fadein2 {
    /* Safari and Chrome */
    from {
      opacity: 0;
      transform: translate(0px, 40px);
    }
    to {
      opacity: 1;
      transform: translate(0px, 0px);
    }
  }

  @-o-keyframes fadein2 {
    /* Opera */
    from {
      opacity: 0;
      transform: translate(0px, 40px);
    }
    to {
      opacity: 1;
      transform: translate(0px, 0px);
    }
  }

  .nav {
    font-size: 0;
    width: 620px;
    margin-left: 90px;
  }

  .nav li {
    margin-left: 50px;
    display: inline-block;
  }

  .nav li:first-child {
    margin-left: 0;
  }

  .nav a {
    display: inline-block;
    font-size: 18px;
    font-weight: bold;
    line-height: 88px;
    height: 87px;
  }

  .right {
    float: right;
    margin-top: 31px;
  }

  .right li {
    display: inline-block;
    vertical-align: middle;
    font-size: 0;
  }

  .lang {
    position: relative;
  }

  .right_ul {
    font-size: 0;
  }

  .right_ul > li > a {
    display: block;
    padding: 2px;
  }

  .lang_drop_list.open .lang_button:after {
    -webkit-transform: rotateZ(180deg);
    -moz-transform: rotateZ(180deg);
    -ms-transform: rotateZ(180deg);
    -o-transform: rotateZ(180deg);
    transform: rotateZ(180deg);
  }

  .lang {
    left: 6px;
  }

  .lang_button {
    border: none;
    background: transparent;
    color: #000;
    font-size: 18px;
    font-weight: bold;
    line-height: 1.3;
    font-family: "Noto Sans KR", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .lang_button:after {
    display: inline-block;
    background-size: 1091px 265px;
    background-image: url(/images/hi/normal.png);
    background-position: -935px -107px;
    width: 15px;
    height: 10px;
    margin-left: 8px;
    margin-top: 3px;
    vertical-align: middle;
    position: relative;
    top: -2px;
    left: -4px;
    content: "";
  }

  .lang_drop {
    display: none;
    position: absolute;
    top: 40px;
    left: 0;
    right: -30px;
    width: 150px;
    padding: 32px 30px;
    border: 1px solid #000000;
    background: #ffffff;
    box-sizing: border-box;
    text-align: right;
  }

  .lang_drop_list.open .lang_button:after {
    display: block;
  }

  .lang_drop_ul li {
    margin-top: 14px;
    text-align: right;
  }

  .lang_drop_ul .m_t {
    margin-top: 0;
  }

  .lang_drop_ul a {
    font-size: 16px;
    line-height: 15px;
    color: #242424;
    text-align: right;
    white-space: nowrap;
  }

  .icon_person {
    display: inline-block;
    width: 24px;
    height: 24px;
    background-size: 1091px 265px;
    background-image: url(/images/hi/normal.png);
    background-position: -605px -131px;
  }

  .icon_ham {
    display: inline-block;
    background-size: 1091px 265px;
    background-image: url(/images/hi/normal.png);
    background-position: -633px -131px;
    width: 24px;
    height: 20px;
  }

  .right_ul li {
    margin-left: 24px;
  }

  .right_ul li:first-child {
    margin-left: 0;
  }

  .panel_wrap {
    display: none;
  }

  #fullpage {
    width: 100%;
  }

  .section {
    position: relative;
    height: 100vh;
    min-height: 100vh;
    background: #fff;
  }

  .section.black {
    background: #000;
  }

  .inner {
    display: block;
    height: 100%;
    position: relative;
    margin: 0 60px;
  }

  #section2 {
    background: #5b5757;
  }

  .a #section3 {
    position: relative;
    background-color: initial;
  }

  .bg_black {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
  }

  .bg_black.animate {
    animation: bg_black 1s 2s;
    animation-fill-mode: forwards;
  }

  @keyframes bg_black {
    from {
      height: 0%;
    }
    to {
      height: 100%;
      background: #000;
    }
  }

  .fp-viewing-0 .bottom_line,
  .fp-viewing-0 .logo,
  .fp-viewing-0 .nav_wrap {
    opacity: 0;
    display: none;
    transition: ease-in-out 3s;
  }

  .right_text {
    position: absolute;
    right: -100px;
    top: 50%;
    max-height: 172px;
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
  }

  .right_text p {
    position: relative;
    font-family: "Audiowide", cursive;
    font-size: 13px;
    line-height: 10px;
    color: #000;
    text-transform: uppercase;
  }

  #section1 {
    background-color: initial;
  }

  .video_box {
    position: absolute;
    top: 52.5%;
    left: 50%;
    width: 100%;
    height: 100%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  .video_box .video {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  #section2 .inner {
    padding-top: 242px;
  }

  .masking_wrap {
    position: relative;
    overflow: hidden;
    font-size: 0;
  }

  .masking {
    font-size: 60px;
    font-weight: 100;
    color: #fff;
    line-height: 90px;
    text-align: center;
    letter-spacing: -2.5px;
  }

  .fp-viewing-1 .text1 {
    animation: masking 0.5s;
    animation-fill-mode: forwards;
  }

  .fp-viewing-1 .text2 {
    animation: masking 1s;
    animation-fill-mode: forwards;
  }

  .fp-viewing-1 .text3 {
    animation: masking 1.5s;
    animation-fill-mode: forwards;
  }

  @keyframes masking {
    from {
      transform: translate(0px, 300px);
    }
    to {
      transform: translate(0px, 0px);
    }
  }

  .white_line {
    position: absolute;
    display: block;
    width: 6px;
    height: 508px;
    background: #fff;
    left: 50%;
    bottom: -75px;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
  }

  .mask_box {
    position: absolute;
    top: 24px;
    left: 50%;
    overflow: hidden;
    display: block;
    width: 540px;
    height: 540px;
    margin: 0 auto;
    -webkit-transform: translate(-50%, -200px);
    -ms-transform: translate(-50%, -200px);
    transform: translate(-50%, -200px);
  }

  .fp-viewing-2 .mask_box {
    transform: translate(-50%, 0%);
    height: 100%;
    width: 100%;
    transition-duration: 0.7s;
    transition-delay: 0.8s;
  }

  .slide_itm {
    position: relative;
    overflow: hidden;
    height: 100%;
  }

  .mask_img img {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    height: 100%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    max-width: none;
  }

  .gradient_cover {
    opacity: 0;
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: url(/images/hi/img_dimmed.png) no-repeat 0 0;
    background-size: 100% 100%;
    -webkit-transition: opacity 1.4s ease-in;
    -o-transition: opacity 1.4s ease-in;
    transition: opacity 1.4s ease-in;
  }

  .fp-viewing-2 .gradient_cover {
    opacity: 0.6;
  }

  .scale {
    position: absolute;
    bottom: 4.96%;
    left: 50%;
    width: 1100px;
    height: 249px;
    font-size: 200px;
    letter-spacing: 42px;
    text-indent: -44px;
    line-height: 200px;
    z-index: 1005;
    color: #000;
    background: none;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    font-family: "Audiowide", cursive;
  }

  .fp-viewing-2 .scale {
    left: 50%;
    bottom: 80%;
    letter-spacing: 6px;
    text-indent: -10px;
    line-height: 48px;
    width: 377px;
    height: 56px;
    color: rgb(255, 255, 255);
    font-size: 80px;
    bottom: 77%;
    transition-duration: 0.7s;
    transition-delay: 1.5s;
  }

  .black_line {
    position: absolute;
    width: 6px;
    height: 400px;
    top: 0;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    transform: translate(-50%, 81%);
    background: #000;
  }

  .fp-viewing-2 .black_line {
    animation: black_line 0.1s 1s;
    animation-fill-mode: forwards !important;
  }

  @keyframes black_line {
    from {
      background-color: rgb(0, 0, 0);
      opacity: 1;
      z-index: -1;
      height: 400px;
      transform: translate(-50%, 74%);
    }
    to {
      background-color: rgb(255, 255, 255);
      opacity: 1;
      z-index: 1009;
      height: 400px;
      transform: translate(-50%, 81%);
    }
  }

  .a #section4 {
    background: #000;
  }

  #section4 .inner {
    position: relative;
    background: #000 url(/images/hi/section4_bg.png) no-repeat bottom 83px
      center/auto calc(100vh - 210px);
  }

  #section4 .b {
    z-index: 2;
    position: relative;
    height: 100%;
    width: 312px;
  }

  .b .swiper-pagination {
    color: #fff;
    font-size: 20px;
    position: absolute;
    bottom: 50px;
  }

  #section4 .swiper-button-next {
    position: absolute;
    top: 59%;
    right: 50px;
    background-size: 1091px 265px;
    background-image: url(/images/hi/normal.png);
    background-position: -348px 0px;
    width: 743px;
    height: 50px;
    -webkit-transform: translateY(-100%);
    -ms-transform: translateY(-100%);
    transform: translateY(-100%);
    cursor: pointer;
    transform: translate(0px, -50px);
  }

  #section4 .swiper-button-prev {
    z-index: 1;
    transform: translate(0px, 0px);
    position: absolute;
    top: 59%;
    left: 36px;
    background-size: 1091px 265px;
    background-image: url(/images/hi/normal.png);
    background-position: -348px -54px;
    width: 582px;
    height: 49px;
    cursor: pointer;
  }

  .swiper-button-next:after,
  .swiper-button-prev:after {
    content: "";
  }

  .b .swiper-slide {
    margin-top: 25.49px;
    width: 312px;
    overflow: hidden;
    z-index: 120;
  }

  .slide_box {
    overflow: hidden;
    position: absolute;
    width: 312px;
    top: 52%;
    left: 50%;
    z-index: 120;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  .swiper-slide img {
    /* overflow: hidden; */
    z-index: 1029;
  }

  .slide_text {
    width: 312px;
    color: #fff;
    margin-top: 24px;
    overflow: hidden;
  }

  .slide_text strong {
    display: inline-block;
    margin-top: 7px;
    font-size: 24px;
    line-height: 33px;
    font-weight: bold;
  }

  .slide_text h1,
  .slide_text p {
    font-size: 18px;
  }

  .slide_text p {
    margin-top: 12px;
    line-height: 27px;
  }

  .swiper-pagination-current {
    display: inline-block;
    -webkit-transform: translateY(-25%);
    -ms-transform: translateY(-25%);
    transform: translateY(-25%);
  }

  .swiper-pagination-total {
    display: inline-block;
    -webkit-transform: translateY(25%);
    -ms-transform: translateY(25%);
    transform: translateY(25%);
  }

  .artist {
    position: absolute;
    display: inline-block;
    top: 20%;
    left: 40px;
  }

  .docent {
    font-size: 80px;
    font-weight: bold;
    line-height: 86px;
    letter-spacing: 0px;
    color: #fff;
  }

  .desc {
    display: block;
    font-size: 32px;
    line-height: 46px;
    letter-spacing: -0.5px;
    color: #fff;
    margin-top: 40px;
  }

  .box {
    position: relative;
  }

  .marquee {
    padding: 0.5em 0;
    overflow: hidden;
    margin-bottom: 10px;
    position: relative;
  }

  .marquee p:after {
    content: "";
    white-space: nowrap;
    padding-right: 50px;
  }

  .marquee p {
    font-family: "Audiowide", cursive;
    font-size: 330px;
    font-weight: bold;
    margin: 0;
    padding-left: 100%;
    display: inline-block;
    white-space: nowrap;
    -webkit-animation-name: marquee;
    -webkit-animation-timing-function: linear;
    -webkit-animation-duration: 20s;
    -webkit-animation-iteration-count: infinite;
    -moz-animation-name: marquee;
    -moz-animation-timing-function: linear;
    -moz-animation-duration: 20s;
    -moz-animation-iteration-count: infinite;
    -ms-animation-name: marquee;
    -ms-animation-timing-function: linear;
    -ms-animation-duration: 20s;
    -ms-animation-iteration-count: infinite;
    -o-animation-name: marquee;
    -o-animation-timing-function: linear;
    -o-animation-duration: 20s;
    -o-animation-iteration-count: infinite;
    animation-name: marquee;
    animation-timing-function: linear;
    animation-duration: 20s;
    animation-iteration-count: infinite;
  }

  @-webkit-keyframes marquee {
    from {
      -webkit-transform: translate(0%);
    }
    99%,
    to {
      -webkit-transform: translate(-100%);
    }
  }

  @-moz-keyframes marquee {
    from {
      -moz-transform: translate(0%);
    }
    99%,
    to {
      -moz-transform: translate(-100%);
    }
  }

  @-ms-keyframes marquee {
    from {
      -ms-transform: translate(0%);
    }
    99%,
    to {
      -ms-transform: translate(-100%);
    }
  }

  @-o-keyframes marquee {
    from {
      -o-transform: translate(0%);
    }
    99%,
    to {
      -o-transform: translate(-100%);
    }
  }

  @keyframes marquee {
    from {
      transform: translate(0%);
    }
    99%,
    to {
      transform: translate(-100%);
    }
  }

  .MD {
    position: relative;
    font-size: 32px;
    letter-spacing: -0.5px;
    text-align: center;
    word-break: keep-all;
  }

  .shop {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 280px;
    height: 74px;
    border: solid 3px black;
    background: transparent;
    font-size: 24px;
    font-weight: bold;
    line-height: 66px;
    margin: 0 auto;
    padding: 0 38px;
    margin-top: 60px;
  }

  .shop:after {
    content: "";
    display: inline-block;
    width: 68px;
    height: 12px;
    vertical-align: super;
    margin: -4px 0 0 30px;
    background-size: 1091px 265px;
    background-image: url(/images/hi/normal.png);
    background-position: -820px -107px;
  }

  #section5 {
    padding-top: 250px;
    background-color: initial;
  }

  .md_ul {
    margin-top: 160px;
    text-align: center;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    padding: 0 60px;
    gap: 60px;
  }

  .md_ul li {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 100%;
    aspect-ratio: 384 / 500;
    margin-right: 44px;
  }

  .md_ul li img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  .md_ul li:last-child {
    margin-right: 0;
  }

  .s5_video {
    margin: 160px 0;
    text-align: center;
  }

  .s5_video video {
    margin: 0 auto;
  }

  .footer {
    background: #000;
    color: #fff;
  }

  .footer .inner {
    display: flex;
    padding: 84px 0 80px;
  }

  .f_logo {
    display: flex;
    flex: 1 1 auto;
    width: 19.3%;
    text-align: center;
    justify-content: center;
    align-items: center;
  }

  .f_logo_hybe {
    display: inline-block;
    width: 163px;
    height: 125px;
    background-image: url(/images/hi/ico_footer_logo.png);
  }

  .f_right {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    position: relative;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    width: 79.4%;
    padding: 0 0 0 12px;
    font-size: 0;
  }

  .address {
    position: relative;
    width: 57.9%;
    min-height: 193px;
    box-sizing: border-box;
    vertical-align: top;
    padding: 6px 30px 0 80px;
  }

  .address h1 {
    font-size: 25px;
    font-weight: bold;
    line-height: 31px;
    text-transform: uppercase;
  }

  .address p {
    font-size: 18px;
    margin-top: 10px;
    letter-spacing: -0.5px;
  }

  .address p ~ p {
    margin-top: 16px;
    letter-spacing: -1.6px;
  }

  .address:before {
    position: absolute;
    left: 41px;
    top: 0;
    bottom: 0;
    width: 3px;
    background: #fff;
    content: "";
  }

  .f_hybe:before {
    position: absolute;
    left: 0px;
    top: 0;
    bottom: 0;
    width: 3px;
    background: #fff;
    content: "";
  }

  .f_ul {
    margin-top: 50px;
  }

  .f_ul li {
    font-size: 0;
    display: inline-block;
  }

  .f_ul li:after {
    content: "";
    display: inline-block;
    vertical-align: middle;
    width: 1px;
    height: 12px;
    background: #fff;
    margin: 0 8px 0 10px;
    opacity: 0.18;
  }

  .f_ul li:last-child:after {
    content: none;
  }

  .f_ul a {
    color: #fff;
    font-size: 16px;
    vertical-align: middle;
  }

  .f_hybe {
    display: inline-block;
    position: relative;
    width: 41.9%;
    min-height: 193px;
    padding: 8px 0 0 39px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    vertical-align: top;
  }

  .f_hybe p {
    font-size: 14px;
    color: #a6a9aa;
    line-height: 20px;
    letter-spacing: -0.4px;
  }

  .f_hybe strong {
    font-size: 14px;
  }

  .f_hybe p ~ p {
    display: block;
    position: absolute;
    font-size: 16px;
    color: #fff;
    bottom: 17px;
  }

  .m_section {
    display: none;
  }

  @media (max-width: 1680px) {
    .md_ul {
      font-size: 0;
      padding: 0 40px;
      gap: 0px;
    }

    .md_ul li {
      margin-right: 0px;
    }
  }

  @media (max-width: 1279px) {
    body {
      height: 100%;
    }

    .top {
      display: none;
    }

    #fullpage {
      display: none;
    }

    .section {
      display: none;
    }

    .m_section {
      display: block;
    }

    .m_top {
      position: fixed;
      width: 100%;
      background: #fff;
      z-index: 100;
    }

    .m_inner {
      display: block;
      position: relative;
      height: 71px;
      margin: 0;
      padding: 0 20px;
    }

    .m_inner::before {
      display: block;
      position: absolute;
      bottom: 0;
      left: 20px;
      right: 20px;
      height: 1px;
      background: #000;
      content: "";
    }

    .m_inner2 {
      margin: 0 20px;
      display: block;
      position: relative;
      height: inherit;
    }

    .m_section1 {
      position: relative;
      top: 71px;
      height: 514px;
      background: #fff;
    }

    .m_logo_box {
      display: block;
      position: absolute;
      top: 50%;
      -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
    }

    .m_logo {
      background-image: url(/images/hi/retina.png);
      background-position: -150px 0px;
      width: 102px;
      height: 33px;
      display: block;
    }

    .m_right_box {
      padding-top: 22px;
    }

    .m_right {
      float: right;
      margin-right: 2px;
      margin-top: 2px;
    }

    .m_right li {
      display: inline;
      vertical-align: middle;
      margin-left: 15px;
    }

    .m_icon_notice {
      display: inline-block;
      width: 24px;
      height: 24px;
      background: url(/images/hi/btn-notice.png) no-repeat 0 0;
      background-size: 100% auto;
    }

    .m_icon_person {
      display: inline-block;
      background-position: -49px -146px;
      background-image: url(/images/hi/retina.png);
      width: 20px;
      height: 20px;
    }

    .m_icon_ham {
      display: inline-block;
      background-image: url(/images/hi/retina.png);
      background-position: -73px -146px;
      width: 20px;
      height: 16px;
    }

    .m_left_text {
      position: absolute;
      left: 0px;
      top: 37%;
      -webkit-transform: translate(-45%, -50%) rotate(90deg);
      -ms-transform: translate(-45%, -50%) rotate(90deg);
      transform: translate(-45%, -50%) rotate(90deg);
    }

    .m_left_text p {
      position: relative;
      font-family: "GinzaNarrow";
      font-size: 12px;
      color: #000;
      text-transform: uppercase;
    }

    .m_video_box {
      position: absolute;
      top: 0;
      left: 50%;
      width: 100%;
      height: 100%;
      -webkit-transform: translateX(-50%);
      -moz-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
      transform: translateX(-50%);
      overflow: hidden;
    }

    .m_video_box .m_video {
      position: absolute;
      top: 43%;
      left: 50%;
      height: 441px;
      -webkit-transform: translate(-50%, -50%);
      -moz-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      -o-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
    }

    .m_section2 {
      position: relative;
      height: 674px;
      overflow: hidden;
    }

    .m_mask_bg {
      overflow: hidden;
      position: absolute;
      height: 319px;
      width: 100%;
    }

    .m_brown_bg {
      position: absolute;
      background: #5b5757;
      height: 319px;
      width: 100%;
    }

    .m_black_bg {
      position: absolute;
      background: #000;
      height: 319px;
      width: 100%;
      top: 100%;
    }

    .m_masking {
      color: #fff;
      font-size: 20px;
      font-weight: 100;
      text-align: center;
      letter-spacing: -0.5px;
      line-height: 29px;
      padding-top: 25px;
    }

    .m_white_line {
      position: absolute;
      display: block;
      width: 3px;
      height: 168px;
      background: #fff;
      top: 150px;
      left: 50%;
      -webkit-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
      transform: translateX(-50%);
    }

    .m_black_line {
      display: block;
      position: absolute;
      bottom: 104px;
      left: 50%;
      width: 3px;
      height: 168px;
      background: #000;
      -webkit-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
      transform: translateX(-50%);
    }

    .m_mainimg {
      position: relative;
      display: block;
      width: 270px;
      margin: 60px auto 0;
      z-index: 99;
    }

    .m_scale {
      position: absolute;
      font-size: 72px;
      bottom: 0%;
      left: 50%;
      transform: translateX(-50%);
      font-family: "Audiowide", cursive;
    }

    .m_section3 {
      position: relative;
      height: 540px;
      background: #000 url(/images/hi/section4_bg.png) no-repeat center center;
      background-size: auto 444px;
    }

    .m_artist {
      color: #fff;
      position: absolute;
      top: 25px;
      left: 25px;
    }

    .m_docent {
      font-size: 30px;
      font-weight: bold;
      line-height: 35px;
    }

    .m_desc {
      position: relative;
      margin-top: 5px;
      font-size: 16px;
      line-height: 24px;
    }

    .m_section4 {
      position: relative;
    }

    .box {
      position: relative;
    }

    .m_marquee {
      padding: 0.5em 0;
      overflow: hidden;
      margin-bottom: 10px;
      position: relative;
    }

    .m_marquee p:after {
      content: "";
      white-space: nowrap;
      padding-right: 50px;
    }

    .m_marquee p {
      font-family: "Audiowide", cursive;
      font-size: 60px;
      font-weight: bold;
      margin: 0;
      padding-left: 100%;
      display: inline-block;
      white-space: nowrap;
      -webkit-animation-name: marquee;
      -webkit-animation-timing-function: linear;
      -webkit-animation-duration: 20s;
      -webkit-animation-iteration-count: infinite;
      -moz-animation-name: marquee;
      -moz-animation-timing-function: linear;
      -moz-animation-duration: 20s;
      -moz-animation-iteration-count: infinite;
      -ms-animation-name: marquee;
      -ms-animation-timing-function: linear;
      -ms-animation-duration: 20s;
      -ms-animation-iteration-count: infinite;
      -o-animation-name: marquee;
      -o-animation-timing-function: linear;
      -o-animation-duration: 20s;
      -o-animation-iteration-count: infinite;
      animation-name: marquee;
      animation-timing-function: linear;
      animation-duration: 20s;
      animation-iteration-count: infinite;
    }

    @-webkit-keyframes marquee {
      from {
        -webkit-transform: translate(0%);
      }
      99%,
      to {
        -webkit-transform: translate(-100%);
      }
    }

    @-moz-keyframes marquee {
      from {
        -moz-transform: translate(0%);
      }
      99%,
      to {
        -moz-transform: translate(-100%);
      }
    }

    @-ms-keyframes marquee {
      from {
        -ms-transform: translate(0%);
      }
      99%,
      to {
        -ms-transform: translate(-100%);
      }
    }

    @-o-keyframes marquee {
      from {
        -o-transform: translate(0%);
      }
      99%,
      to {
        -o-transform: translate(-100%);
      }
    }

    @keyframes marquee {
      from {
        transform: translate(0%);
      }
      99%,
      to {
        transform: translate(-100%);
      }
    }

    .m_MD {
      position: relative;
      font-size: 16px;
      letter-spacing: -0.5px;
      text-align: center;
      word-break: keep-all;
    }

    .m_shop {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 213px;
      height: 54px;
      border: solid 2px black;
      background: transparent;
      font-size: 16px;
      font-weight: bold;
      line-height: 20px;
      margin: 0 auto;
      padding: 0 30px;
      margin-top: 50px;
    }

    .m_shop:after {
      content: "";
      display: inline-block;
      background-image: url(/images/hi/retina.png);
      background-position: -150px -73px;
      width: 62px;
      height: 11px;
      margin: -8px 0 0 6px;
    }

    .m_md_wrap {
      width: 320px;
      margin: 0 auto;
    }

    .m_md_ul {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 10px;
      margin-top: 100px;
      margin: 49px -4px 0;
      text-align: center;
      font-size: 0;
    }

    .m_md_ul li {
      position: relative;
      display: inline-block;
      width: 100%;
      height: 100%;
      aspect-ratio: 156 / 209;
      margin: 4px;
    }

    .m_md_ul li img {
      max-width: 100%;
    }

    .m_md_ul li:last-child {
      margin-right: 0;
    }

    .m_s5_video {
      position: relative;
      width: 320px;
      height: 320px;
      margin: 8px auto 90px;
      text-align: center;
      clear: both;
    }

    .m_s5_video video {
      position: absolute;
      top: 0;
      left: 50.8%;
      height: 100%;
      width: 100%;
      -webkit-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
      transform: translateX(-50%);
    }

    .m_section3 .m_b {
      z-index: 2;
      position: relative;
      height: 100%;
      width: 156px;
    }

    .m_b .swiper-pagination {
      color: #fff;
      font-size: 20px;
      position: absolute;
      bottom: 50px;
    }

    .m_section3 .swiper-button-next {
      z-index: 900;
      position: absolute;
      top: 50%;
      right: 26px;
      background-image: url(/images/hi/retina.png);
      background-position: -125px -117px;
      background-size: inherit;
      width: 119px;
      height: 25px;
      -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
      cursor: pointer;
    }

    .m_section3 .swiper-button-prev {
      z-index: 900;
      position: absolute;
      top: 50%;
      left: 26px;
      background-image: url(/images/hi/retina.png);
      background-position: 0px -117px;
      background-size: inherit;
      width: 121px;
      height: 25px;
      -webkit-transform: translateY(50%);
      -ms-transform: translateY(50%);
      transform: translateY(50%);
      cursor: pointer;
    }

    .m_b .swiper-slide {
      margin-top: 25.49px;
      width: 156 px;
      overflow: hidden;
      z-index: 120;
    }

    .m_b .slide_box {
      overflow: hidden;
      position: absolute;
      width: 156px;
      top: 52%;
      left: 50%;
      z-index: 120;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
    }

    .m_b .swiper-slide img {
      overflow: hidden;
      max-width: 156px;
      z-index: 1029;
    }

    .m_b .slide_text {
      width: 156px;
      color: #fff;
      margin-top: 15px;
      overflow: hidden;
    }

    .m_b .slide_text strong {
      display: inline-block;
      margin-top: 7px;
      font-size: 16px;
      line-height: 10px;
      font-weight: bold;
    }

    .m_b .slide_text h1,
    .m_b .slide_text p {
      font-size: 12px;
    }

    .m_b .slide_text p {
      margin-top: 5px;
      line-height: 18px;
    }

    .m_b .swiper-pagination-fraction {
      font-weight: 300;
      font-size: 12px;
    }

    .m_b .swiper-pagination-current {
      font-size: 12px;
      display: inline-block;
      -webkit-transform: translateY(-25%);
      -ms-transform: translateY(-25%);
      transform: translateY(-25%);
    }

    .m_b .swiper-pagination-total {
      font-size: 12px;
      display: inline-block;
      -webkit-transform: translateY(25%);
      -ms-transform: translateY(25%);
      transform: translateY(25%);
    }

    .m_footer {
      background: #000;
      color: #fff;
    }

    .m_footer .m_inner2 {
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      padding: 105px 0 45px;
    }

    .m_f_logo {
      display: block;
      width: 100%;
      text-align: center;
    }

    .m_f_logo_hybe {
      display: inline-block;
      width: 146px;
      height: 113px;
      background-image: url(/images/hi/retina.png);
      background-position: 0px 0px;
    }

    .m_f_right {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      position: relative;
      -webkit-box-flex: 1;
      -ms-flex: 1 1 auto;
      flex: 1 1 auto;
      width: 100%;
      padding: 0;
      font-size: 0;
      margin-top: 27px;
    }

    .m_address {
      position: relative;
      width: 100%;
      min-height: 193px;
      box-sizing: border-box;
      vertical-align: top;
      padding: 70px 0 0 24px;
    }

    .m_address h1 {
      font-size: 16px;
      font-weight: bold;
      line-height: 31px;
      text-transform: uppercase;
    }

    .m_address p {
      font-size: 12px;
      margin-top: 10px;
      letter-spacing: -0.3px;
    }

    .m_address p ~ p {
      margin-top: 10px;
      letter-spacing: -1px;
    }

    .m_f_ul {
      margin-top: 40px;
    }

    .m_f_ul li {
      font-size: 0;
      display: inline-block;
    }

    .m_f_ul li:after {
      content: "";
      display: inline-block;
      vertical-align: middle;
      width: 1px;
      height: 7px;
      background: #fff;
      margin: 0 12px 0 11px;
      opacity: 0.18;
    }

    .m_f_ul li:last-child:after {
      content: none;
    }

    .m_f_ul a {
      color: #fff;
      font-size: 12px;
      vertical-align: middle;
    }

    .m_f_hybe {
      display: inline-block;
      position: relative;
      width: 100%;
      min-height: 193px;
      padding: 58px 0 0 24px;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      vertical-align: top;
    }

    .m_f_hybe:before {
      position: absolute;
      left: 12px;
      top: 30px;
      bottom: 0;
      width: 98%;
      height: 2px;
      background: #fff;
      content: "";
    }

    .m_f_hybe p {
      font-size: 12px;
      color: #a6a9aa;
      line-height: 20px;
      letter-spacing: -0.4px;
      margin-top: 5px;
    }

    .m_f_hybe strong {
      font-size: 12px;
    }

    .m_f_hybe p ~ p {
      position: static;
      display: block;
      font-size: 12px;
      color: #fff;
      bottom: 17px;
      margin-top: 20px;
    }

    .panel_wrap.active {
      display: block;
    }

    .panel_wrap.active .icon_ham_panel {
      position: fixed;
      width: 100%;
      height: 100vh;
      top: 0;
      right: 0;
      background-color: #fff;
      z-index: 120;
      padding: 0 32px;
      box-sizing: border-box;
      animation: fadein 0.5s;
      -moz-animation: fadein 0.5s; /* Firefox */
      -webkit-animation: fadein 0.5s; /* Safari and Chrome */
      -o-animation: fadein 0.5s; /* Opera */
    }

    @keyframes fadein {
      from {
        opacity: 0;
        right: -300px;
      }
      to {
        opacity: 1;
        right: 0;
      }
    }
    @-moz-keyframes fadein {
      /* Firefox */
      from {
        opacity: 0;
        right: -300px;
      }
      to {
        opacity: 1;
        right: 0;
      }
    }
    @-webkit-keyframes fadein {
      /* Safari and Chrome */
      from {
        opacity: 0;
        right: -300px;
      }
      to {
        opacity: 1;
        right: 0;
      }
    }
    @-o-keyframes fadein {
      /* Opera */
      from {
        opacity: 0;
        right: -300px;
      }
      to {
        opacity: 1;
        right: 0;
      }
    }

    .icon_ham_overlay {
      position: fixed;
      display: none;
      background-color: rgba(0, 0, 0, 0.7);
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 110;
    }

    .panel_wrap.active .icon_ham_overlay {
      display: block;
    }

    .panel_head {
      z-index: 2;
      font-size: 0;
      box-sizing: border-box;
      position: relative;
      padding: 28px 0;
      border-bottom: 1px solid #000000;
    }

    .panel_logo {
      display: inline-block;
      width: 123px;
      height: 39px;
      background: url(/images/hi/normal.png);
      background-size: 1091px 265px;
      background-position: -934px -54px;
    }

    .panel_close {
      position: absolute;
      display: inline-block;
      background-size: 1091px 265px;
      background-image: url(/images/hi/normal.png);
      background-position: -577px -131px;
      width: 24px;
      height: 24px;
      top: 50%;
      right: 30px;
      -webkit-transform: translateY(-50%);
      -moz-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      -o-transform: translateY(-50%);
      transform: translateY(-50%);
      cursor: pointer;
    }

    .panel_body_ul {
      box-sizing: border-box;
      padding: 80px 0;
    }

    .panel_body_ul li {
      margin-top: 35px;
    }

    .panel_body_ul li:first-child {
      margin-top: 0;
    }

    .panel_body a {
      line-height: 27px;
      font-size: 28px;
      font-weight: bold;
    }

    .panel_drop_ul {
      margin-top: 34px;
      white-space: nowrap;
      overflow-y: scroll;
    }

    .panel_drop_ul a {
      font-size: 20px;
      color: #6f7076;
      line-height: 20px;
    }

    .panel_drop_ul {
      display: none;
    }

    .panel_body_li.open .panel_drop_ul {
      display: block;
    }
  }

  @media (min-width: 1280px) {
    .panel_wrap.active {
      display: block;
    }

    .panel_wrap.active .icon_ham_panel {
      position: fixed;
      width: 480px;
      height: 100vh;
      top: 0;
      right: 0;
      background-color: #fff;
      z-index: 1200;
      padding: 0 32px;
      box-sizing: border-box;
      animation: fadein 0.5s;
      -moz-animation: fadein 0.5s; /* Firefox */
      -webkit-animation: fadein 0.5s; /* Safari and Chrome */
      -o-animation: fadein 0.5s; /* Opera */
    }

    @keyframes fadein {
      from {
        opacity: 0;
        right: -300px;
      }
      to {
        opacity: 1;
        right: 0;
      }
    }
    @-moz-keyframes fadein {
      /* Firefox */
      from {
        opacity: 0;
        right: -300px;
      }
      to {
        opacity: 1;
        right: 0;
      }
    }
    @-webkit-keyframes fadein {
      /* Safari and Chrome */
      from {
        opacity: 0;
        right: -300px;
      }
      to {
        opacity: 1;
        right: 0;
      }
    }
    @-o-keyframes fadein {
      /* Opera */
      from {
        opacity: 0;
        right: -300px;
      }
      to {
        opacity: 1;
        right: 0;
      }
    }

    .icon_ham_overlay {
      position: fixed;
      display: none;
      background-color: rgba(0, 0, 0, 0.7);
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 11;
    }

    .panel_wrap.active .icon_ham_overlay {
      display: block;
    }

    .panel_head {
      z-index: 2;
      font-size: 0;
      box-sizing: border-box;
      position: relative;
      padding: 28px 0;
      border-bottom: 1px solid #000000;
    }

    .panel_logo {
      display: inline-block;
      width: 123px;
      height: 39px;
      background: url(/images/hi/normal.png);
      background-size: 1091px 265px;
      background-position: -934px -54px;
    }

    .panel_close {
      position: absolute;
      display: inline-block;
      background-size: 1091px 265px;
      background-image: url(/images/hi/normal.png);
      background-position: -577px -131px;
      width: 24px;
      height: 24px;
      top: 50%;
      right: 30px;
      -webkit-transform: translateY(-50%);
      -moz-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      -o-transform: translateY(-50%);
      transform: translateY(-50%);
      cursor: pointer;
      z-index: 1009;
    }

    .panel_body_ul {
      box-sizing: border-box;
      padding: 80px 0;
    }

    .panel_body_ul li {
      margin-top: 35px;
    }

    .panel_body_ul li:first-child {
      margin-top: 0;
    }

    .panel_body a {
      line-height: 27px;
      font-size: 28px;
      font-weight: bold;
    }

    .panel_drop_ul {
      margin-top: 34px;
      white-space: nowrap;
      overflow-y: scroll;
    }

    .panel_drop_ul a {
      font-size: 20px;
      color: #6f7076;
      line-height: 20px;
    }

    .panel_drop_ul {
      display: none;
    }

    .panel_body_li.open .panel_drop_ul {
      display: block;
    }
  }
`;
