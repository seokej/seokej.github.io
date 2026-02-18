import styled from "styled-components";

export const NwMainStyled = styled.div`
  .top {
    position: relative;
    background: #fff;
    width: 100%;
    max-width: 1920px;
    height: 90px;
    top: 0;
    margin: 0 auto;
    position: fixed;
    box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.1);
    z-index: 10;
  }

  .top:after {
    content: "";
    display: table;
    clear: both;
  }

  .logo {
    position: absolute;
    top: 23px;
    left: 6%;
    width: 200px;
    height: 40px;
    z-index: 9;
  }

  .logo a {
    display: block;
    line-height: 40px;
    text-indent: -9999em;
    text-align: center;
    background: url(/images/nw/logo_whale.svg) no-repeat center/ contain;
  }

  .inner {
    max-width: 1280px;
    margin: 0 auto;
    width: 100%;
  }

  .nav {
    position: relative;
    display: inline-block;
    width: 100%;
    text-align: center;
    font-size: 0;
    vertical-align: top;
    z-index: 8;
  }

  .menu {
    display: inline-block;
    width: 15%;
    text-align: center;
  }

  .menu a {
    color: #2d1d1d;
    font-size: 18px;
    font-weight: 750;
    line-height: 90px;
    letter-spacing: -0.8px;
  }

  .menu a:hover {
    color: #05c3a7;
  }

  .dropmenu {
    display: none;
    position: absolute;
    top: 90px;
    left: 0;
    width: 100%;
    height: 161px;
    background: #fff;
    border-top: 1px solid #f0f0f0;
    z-index: 7;
    text-align: center;
    margin: 0 auto;
  }

  .dep {
    display: inline-block;
    padding: 20px 0;
    width: 15%;
    vertical-align: top;
  }

  .dep a {
    color: #7c7c7c;
    font-size: 16px;
    font-weight: 400;
    line-height: 40px;
    font-family:
      Arial, "나눔바른고딕", "NanumBarunGothic", NanumBarunGothicRegular,
      "NanumBarunGothic_light", "돋움", dotum, AppleGothic, sans-serif;
    letter-spacing: -0.8px;
    text-align: center;
  }

  .dep a:hover {
    color: #000;
  }

  .H_down {
    position: absolute;
    width: 125px;
    height: 50px;
    top: 20px;
    right: 4%;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    line-height: 50px;
    color: #15c5aa;
    border: 1px solid #15c5aa;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
    transition: all 0.3s;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    -o-transition: all 0.3s;
  }

  .H_down:hover {
    background: #15c5aa;
    color: #fff;
  }

  .menu-trigger {
    display: none;
  }

  section {
    width: 100%;
  }

  .main_top {
    width: 100%;
    height: calc(100vh - 90px);
    min-height: 700px;
    background: transparent url(/images/nw/top_bg.jpg) no-repeat top center/
      cover;
  }

  .main_top .inner_wide {
    display: table;
    position: relative;
    height: 100%;
  }

  .inner_wide {
    max-width: 1600px;
    margin: 0 auto;
    width: 100%;
  }

  .text_area {
    color: #000;
    position: absolute;
    display: inline-block;
    top: 50%;
    transform: translateY(-50%);
    left: 3%;
    vertical-align: middle;
    z-index: 6;
  }

  .text_area h3 {
    font-size: 64px;
    line-height: 1.2em;
    font-weight: bold;
  }

  .point_green {
    color: #05d7b4;
  }

  .topArea_subtx {
    font-size: 32px;
    padding-top: 20px;
  }

  .main_button {
    margin-top: 50px;
    display: block;
    width: 100%;
  }

  .M_button {
    display: inline-block;
    width: 250px;
    text-align: center;
    font-size: 30px;
    color: #fff;
    border-radius: 45px;
    height: 77px;
    line-height: 77px;
    background: #05d6b4;
    position: relative;
  }

  .M_button:after {
    content: "";
    display: inline-block;
    width: 30px;
    height: 77px;
    background: url(/images/nw/icon_btn_arrow.png) 50% 50% no-repeat;
    background-size: 100%;
    margin-left: 18px;
    vertical-align: top;
  }

  .main_right {
    position: absolute;
    display: inline-block;
    width: 100%;
    height: 100%;
    text-align: right;
    vertical-align: top;
  }

  .main_rightbg {
    position: absolute;
    display: inline-block;
    right: 0;
    width: 100%;
    height: 100%;
    max-width: 980px;
    max-height: 780px;
    background: url(/images/nw/top_rightimg_bg.png) no-repeat 75% top/ contain;
  }

  .main_slide {
    height: calc(100vh + 90px);
  }

  .main_slide.work {
    background: url(/images/nw/tasking_bg.jpg) no-repeat top center/ cover;
  }

  .main_slide.security {
    background: url(/images/nw/security_bg.jpg) no-repeat top center/ cover;
  }

  .main_slide.custom {
    background: url(/images/nw/custom_bg.jpg) no-repeat top center/ cover;
  }

  .swiper-container {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    width: 100%;
    height: 780px;
    overflow: hidden;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .main_slide .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 10%;
  }

  .a .swiper-pagination > .swiper-pagination-bullet {
    background: #fff;
    width: 10px;
    height: 10px;
    opacity: 0.6;
  }

  .a .swiper-pagination > .swiper-pagination-bullet-active {
    background: #fff;
    width: 20px;
    height: 10px;
    border: 0;
    border-radius: 5px;
    opacity: 1;
  }

  .slide_tx_area {
    display: table-cell;
    width: 47%;
    height: 100%;
    text-align: left;
    vertical-align: middle;
    padding-left: 3%;
  }

  .slide_tx_area h4 {
    font-size: 55px;
    color: #fff;
    font-weight: 600;
    padding: 30px 0 60px;
    line-height: 1.2em;
  }

  .slide_subtx {
    font-size: 30px;
    font-weight: 600;
    color: #fff;
    opacity: 0.7;
    line-height: 1.2em;
  }

  .point_bg_white {
    background: #fff;
    color: #00b7bc;
    padding: 0 10px;
  }

  .detail_button {
    width: 100%;
  }

  .D_button {
    font-size: 18px;
    font-weight: 600;
    color: #fff;
    line-height: 1em;
    padding: 20px 26px 20px 0;
    background: url(/images/nw/icon_view_white.png) no-repeat center right;
    background-color: transparent;
    background-size: 16px 16px;
  }

  .main_slide .inner_wide {
    display: table;
    height: 100%;
  }

  .slide_right {
    display: table-cell;
    width: 50%;
    text-align: right;
    vertical-align: middle;
    box-sizing: border-box;
  }

  .slide_rightbg {
    width: 100%;
    display: inline-block;
    height: auto;
    position: relative;
  }

  .slide_rightbg > img {
    display: block;
    width: 90%;
    border-radius: 20px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    -ms-border-radius: 20px;
    -o-border-radius: 20px;
    box-shadow: 20px 20px 10px 5px rgb(0 0 0 / 8%);
  }

  .icon {
    position: absolute;
    top: -16%;
    right: 15%;
    width: 22%;
    z-index: 5;
    max-height: 390px;
    overflow: hidden;
  }

  .icon > img {
    width: 100%;
    display: block;
  }

  .security .point_bg_white {
    color: #058dec;
  }

  .custom .point_bg_white {
    color: #454ccd;
  }

  .download {
    width: 100%;
    background-color: #fff;
    padding: 10% 0;
    text-align: center;
  }

  .download img {
    display: inline-block;
    margin-bottom: 3%;
    vertical-align: middle;
  }

  .btn_whale_dl {
    text-align: center;
  }

  .btn_whale_dl a {
    background: #05d6b4;
    display: inline-block;
    color: #fff;
    font-size: 30px;
    width: 250px;
    height: 77px;
    line-height: 77px;
    border-radius: 45px;
  }

  .btn_whale_dl a:after {
    content: "";
    display: inline-block;
    width: 30px;
    height: 77px;
    background: url(/images/nw/icon_btn_arrow.png) no-repeat right center;
    background-size: 100%;
    margin-left: 18px;
    vertical-align: top;
  }

  footer {
    padding: 50px 0;
    background-color: #f9f9f9;
    text-align: center;
  }

  footer h2 {
    display: inline-block;
    margin: 0 0 20px;
    max-width: 141px;
  }

  .f_logo_img {
    display: block;
    width: 100%;
  }

  .footer_ul li {
    position: relative;
    display: inline-block;
    margin: 10px 20px 0;
    text-align: center;
  }

  .footer_ul li:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: -21px;
    width: 1px;
    height: 18px;
    background: #dadada;
  }

  .footer_ul li:last-child:after {
    display: none;
  }

  .footer_ul li a {
    font-size: 16px;
    color: #c0c0c0;
    font-weight: 400;
    font-family:
      Arial, "나눔바른고딕", "NanumBarunGothic", NanumBarunGothicRegular,
      "NanumBarunGothic_light", "돋움", dotum, AppleGothic, sans-serif;
  }

  .beta_dl {
    line-height: 1.5em;
  }

  .beta_dl a {
    color: #000;
    font-family:
      Arial, "나눔바른고딕", "NanumBarunGothic", NanumBarunGothicRegular,
      "NanumBarunGothic_light", "돋움", dotum, AppleGothic, sans-serif;
    font-size: 16px;
    font-weight: 550;
  }

  .nav_m {
    display: none;
  }

  @media screen and (max-width: 1600px) {
    .logo {
      left: 3%;
      width: 180px;
    }
  }

  @media screen and (max-width: 1280px) {
    .logo {
      left: 3%;
      width: 140px;
    }

    .menu {
      width: 13%;
    }

    .menu a {
      font-family:
        Arial, "나눔바른고딕", "NanumBarunGothic", NanumBarunGothicRegular,
        "NanumBarunGothic_light", "돋움", dotum, AppleGothic, sans-serif;
      font-size: 16px;
    }

    .inner {
      width: 90%;
      margin: 0 auto;
    }

    .dep {
      width: 12.5%;
    }

    .dep a {
      color: #7c7c7c;
      font-size: 14px;
      letter-spacing: -0.8px;
      text-align: center;
    }

    .H_down {
      position: absolute;
      top: 25px;
      right: 3%;
      width: 100px;
      height: 40px;
      font-size: 15px;
      font-weight: 600;
      line-height: 40px;
      font-family:
        Arial, "나눔바른고딕", "NanumBarunGothic", NanumBarunGothicRegular,
        "NanumBarunGothic_light", "돋움", dotum, AppleGothic, sans-serif;
    }

    .text_area h3 {
      font-size: 50px;
    }

    .topArea_subtx {
      font-size: 22px;
    }

    .M_button {
      width: 200px;
      font-size: 24px;
      border-radius: 32px;
      height: 64px;
      line-height: 64px;
    }

    .M_button:after {
      height: 64px;
    }

    .main_rightbg {
      background-size: 70%;
      background-position: center right;
    }

    .slide_tx_area {
      width: 45%;
      padding-left: 5%;
    }

    .slide_tx_area h4 {
      font-size: 44px;
      font-weight: 600;
      padding: 20px 0 60px;
      line-height: 1.2em;
    }

    .slide_subtx {
      font-size: 22px;
      font-weight: 600;
      color: #fff;
      opacity: 0.7;
      line-height: 1.2em;
    }
  }

  @media screen and (max-width: 980px) {
    a {
      font-family:
        Arial, "나눔바른고딕", "NanumBarunGothic", NanumBarunGothicRegular,
        "NanumBarunGothic_light", "돋움", dotum, AppleGothic, sans-serif;
    }

    .top {
      height: 60px;
    }

    .logo {
      top: 10px;
      left: 4%;
      width: 140px;
    }

    .menu {
      display: none;
    }

    .H_down {
      display: none;
    }

    .menu-trigger {
      position: relative;
      display: block;
      width: 28px;
      height: 26px;
      right: 40px;
      top: 3px;
      float: right;
      z-index: 100;
    }

    .menu-trigger.active {
      top: -1px;
      right: 33px;
    }

    .nav_line {
      position: absolute;
      width: 100%;
      height: 2px;
      left: 0;
      margin-top: 9.09090909px;
      background-color: #000;
      -webkit-transition: all 0.2s ease-in-out;
      -o-transition: all 0.2s ease-in-out;
      transition: all 0.2s ease-in-out;
    }

    .btn_top {
      top: -9.09090909px;
    }

    .btn_bottom {
      top: 9.09090909px;
    }

    #action {
      -webkit-transition: all 0.2s ease-in-out;
      -o-transition: all 0.2s ease-in-out;
      transition: all 0.2s ease-in-out;
    }

    #action.active {
      animation: smallbig 0.4s;
    }

    @keyframes smallbig {
      0%,
      100% {
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        -o-transform: scale(1);
        transform: scale(1);
      }
      50% {
        -webkit-transform: scale(0);
        -ms-transform: scale(0);
        -o-transform: scale(0);
        transform: scale(0);
      }
    }

    #action.active span:nth-child(1),
    #action.active span:nth-child(2),
    #action.active span:nth-child(3) {
      -webkit-transition-delay: 0.2s;
      -o-transition-delay: 0.2s;
      transition-delay: 0.2s;
    }

    #action.active span:nth-child(2) {
      opacity: 0;
    }

    #action.active span:nth-child(1) {
      -webkit-transform: translateY(9px) rotate(45deg);
      -ms-transform: translateY(9px) rotate(45deg);
      -o-transform: translateY(9px) rotate(45deg);
      transform: translateY(9px) rotate(45deg);
    }

    #action.active span:nth-child(3) {
      -webkit-transform: translateY(-9px) rotate(-45deg);
      -ms-transform: translateY(-9px) rotate(-45deg);
      -o-transform: translateY(-9px) rotate(-45deg);
      transform: translateY(-9px) rotate(-45deg);
    }

    .nav_panel_overlay {
      position: fixed;
      display: none;
      background-color: rgba(0, 0, 0, 0.6);
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 1;
      cursor: pointer;
    }

    .nav_m.active .nav_panel_overlay {
      display: block;
    }

    .nav_m {
      display: block;
    }

    .nav_panel {
      position: fixed;
      display: block;
      width: 80%;
      height: 100%;
      top: 0;
      right: -100%;
      z-index: 19;
      background: #fff;
      transition: all 0.2s ease-in-out;
      -webkit-transition: all 0.2s ease-in-out;
      -moz-transition: all 0.2s ease-in-out;
      -o-transition: all 0.2s ease-in-out;
      -ms-transition: all 0.2s ease-in-out;
    }

    .nav_panel.active {
      right: 0;
    }

    .nav_m_ul {
      position: relative;
      top: 62px;
    }

    .nav_m_ul a {
      font-size: 15px;
      font-weight: 400;
      padding-left: 20px;
      height: 50px;
      line-height: 50px;
    }

    .m_arrow {
      height: 50px;
      width: 60px;
      display: block;
      float: right;
      position: relative;
      cursor: pointer;
    }

    .nav_m_ul .m_arrow:before {
      width: 16px;
      height: 1.5px;
      background: #535353;
      content: "";
      display: inline-block;
      position: absolute;
      right: 22px;
      top: calc(50% - 1px);
      transition: all 0.3s ease-in-out;
      -webkit-transition: all 0.3s ease-in-out;
      -moz-transition: all 0.3s ease-in-out;
      -o-transition: all 0.3s ease-in-out;
      -ms-transition: all 0.3s ease-in-out;
    }

    .nav_m_ul .m_arrow:after {
      width: 16px;
      height: 1px;
      background: #535353;
      content: "";
      display: inline-block;
      position: absolute;
      right: 22px;
      top: calc(50% - 1px);
      transition: all 0.3s ease-in-out;
      -webkit-transition: all 0.3s ease-in-out;
      -moz-transition: all 0.3s ease-in-out;
      -o-transition: all 0.3s ease-in-out;
      -ms-transition: all 0.3s ease-in-out;
      transform: rotate(90deg);
      -webkit-transform: rotate(90deg);
      -moz-transform: rotate(90deg);
      -o-transform: rotate(90deg);
      -ms-transform: rotate(90deg);
    }

    .nav_m_li.open .m_arrow:before,
    .nav_m_li.open .m_arrow:after {
      background: #05c3a7;
    }

    .nav_m_li.open .m_arrow:after {
      -webkit-transition-delay: 0.09s;
      -moz-transition-delay: 0.09s;
      -o-transition-delay: 0.09s;
      -ms-transition-delay: 0.09s;
      transition-delay: 0.09s;
      transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
    }

    .m_drop_ul {
      width: 100%;
      display: none;
    }

    .nav_m_li.open .m_drop_ul {
      border-top: 2px solid #05c3a7;
      display: block;
    }

    .nav_m_li.open .nav_m_list {
      color: #05c3a7;
    }

    .m_drop_ul li {
      height: 45px;
      margin: 0 5%;
      width: 90%;
      border-bottom: 1px solid #e0e0e0;
    }

    .m_drop_ul a {
      height: 100%;
      font-size: 15px;
      color: #666;
      padding: 0 0 0 8px;
      line-height: 45px;
    }

    .main_rightbg {
      max-width: 500px;
      height: 100%;
      background: url(/images/nw/top_rightimg_bg_m.png) no-repeat 65% 90%;
      width: 80%;
      background-size: 100%;
    }

    .main_top {
      margin: 60px 0 0;
      height: 750px;
      min-height: auto;
      background: transparent url(/images/nw/top_bg_m.jpg) no-repeat center/
        cover;
    }

    .text_area {
      top: 100px;
      transform: translateY(0);
    }

    .text_area h3 {
      font-size: 40px;
    }

    .topArea_subtx {
      font-size: 18px;
    }

    .slide_tx_area h4 {
      font-size: 32px;
      padding: 20px 0 40px;
    }

    .main_slide {
      height: 600px;
    }
  }
`;
