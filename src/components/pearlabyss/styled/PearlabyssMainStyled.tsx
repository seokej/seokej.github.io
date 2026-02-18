import styled from "styled-components";

export const PearlabyssMainStyled = styled.div`
  body {
    background-color: #fff;
  }

  header {
    position: relative;
    height: 70px;
    z-index: 30;
  }

  .logo_box {
    background: url(/images/pearlabyss/cm_bi_white.svg) no-repeat center center;
    background-size: 150px auto;
    width: 170px;
    height: 68px;
    display: flex;
    margin-top: 1px;
  }

  .main_inner {
    position: relative;
    display: flex;
    z-index: 10;
    height: 70px;
  }

  .top_wrap {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 70px;
    border-bottom: 1px solid #e5e5e5;
    box-sizing: border-box;
    z-index: 11;
    background: transparent;
  }

  .top_inner {
    position: absolute;
    display: flex;
    justify-content: space-between;
    width: calc(100% - 20px);
    max-width: 1460px;
    margin: 0 auto;
    left: 50%;
    transform: translateX(-50%);
    z-index: 9;
    background: transparent;
  }

  .main_inner:not(:hover) .top_wrap {
    border-bottom: none;
  }

  .option {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 110px;
    height: 70px;
    box-sizing: border-box;
  }

  .option ul {
    font-size: 0;
    display: flex;
  }

  .option a {
    display: flex;
    align-items: center;
  }

  .option li {
    height: 16px;
    font-size: 13px;
    line-height: 14px;
  }

  .option li + li {
    margin-left: 20px;
    padding-left: 20px;
    position: relative;
  }

  .option li + li:before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    display: block;
    width: 1px;
    height: 6px;
    background-color: #999;
    transform: translate3d(0, -3px, 0);
  }

  .true {
    color: #fff;
    font-weight: bold;
    font-size: 13px;
  }

  .false {
    color: rgba(150, 150, 150, 0.795);
    font-weight: bold;
    font-size: 13px;
  }

  .false:hover {
    color: black;
    font-weight: bold;
    font-size: 13px;
  }

  #lnb.fixed {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    background-color: #fff;
  }

  #lnb.fixed #dropclick {
    color: #000;
  }

  #lnb.fixed .logo a {
    background: url(/images/pearlabyss/cm_bi_black.svg) no-repeat center center;
    background-size: 150px auto;
    display: flex;
    margin-top: 1px;
    width: 10.75rem;
    height: 3.55rem;
    background-size: auto 1.08rem;
  }

  #lnb.fixed .true {
    color: #000;
  }

  #lnb.fixed .menu-trigger .nav_line {
    background: #000;
    color: #000;
  }

  .nav_wrap {
    position: relative;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    padding: 0 10px;
    z-index: 12;
    box-sizing: border-box;
  }

  .nav {
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }

  .navmenu #dropclick {
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70px;
    padding: 0 50px;
    box-sizing: border-box;
  }

  .sub_list > li {
    text-align: center;
  }

  .sub_list a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 6px 0;
    font-size: 14px;
    line-height: 20px;
  }

  .sub_list span {
    font-size: 14px;
    line-height: 20px;
  }

  .navmenu > ul {
    display: inline-flex;
    list-style: none;
  }

  .navmenu .menu {
    display: inline-block;
  }

  .navmenu .menu > a {
    position: relative;
  }

  .navmenu .menu > a:before {
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 50%;
    height: 2px;
    transform: translateX(-50%);
    background: #000;
    content: "";
    display: none;
  }

  .navmenu .menu:hover > a:before {
    display: block;
  }

  .line {
    position: absolute;
    top: 68px;
    width: 0;
    height: 2px;
    transition:
      all 0.2s,
      opacity 0s;
  }

  .main_inner:not(:hover) .line {
    opacity: 0;
  }

  .main_inner:hover .dropmenu {
    display: block;
    position: relative;
  }

  .menu.active .dropmenu {
    display: block;
    position: relative;
  }

  .main_inner .dropmenu {
    display: block;
    position: relative;
  }

  .main_inner:hover .navmenu #dropclick {
    color: black;
    transition: none;
  }

  .nav .dropmenu {
    display: none;
    margin: 18px 0 0 0;
  }

  .dropmenu ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .dropmenu li {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .dropmenu a {
    width: 100%;
    height: auto;
    padding: 6px 0;
  }

  .dropmenu span {
    color: #969696;
    font-weight: initial;
    font-size: 14px;
    line-height: 20px;
  }

  .swiper-container {
    width: 100%;
    height: 100%;
    position: relative;
    top: -70px;
  }

  .main .swiper-slide {
    height: 780px;
  }

  .swiper-slide {
    text-align: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
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

  .slide .swiper-pagination {
    margin-bottom: 10px;
  }

  .slide .swiper-pagination > .swiper-pagination-bullet {
    opacity: 0.4;
    background-color: #fff;
    width: 6px;
    height: 6px;
    margin: 0 14px;
  }

  .slide .swiper-pagination > .swiper-pagination-bullet-active {
    background-color: white;
    opacity: 1;
  }

  .swiper-container-horizontal
    .swiper-pagination-bullets
    .swiper-pagination-bullet {
    margin: 0 14px;
  }

  .swiper-container-horizontal .swiper-pagination-bullets {
    bottom: 34px;
    left: 0;
    width: 100%;
  }

  .swiper-slide.swiper-slide-active .title {
    transform: translate3d(-50%, 0, 0);
    opacity: 1;
  }

  .swiper-slide .title {
    position: absolute;
    z-index: 1000;
    color: #fff;
    left: 50%;
    transform: translateX(-50%);
    bottom: 156px;
    font-size: 2.14rem;
    line-height: 45px;
    transform: translate3d(-50%, 50%, 0);
    opacity: 0;
    transition:
      opacity 1s,
      transform 1s;
  }

  .slide-btn .swiper-button-prev {
    left: 38px;
    position: absolute;
    background: url(/images/pearlabyss/icn_cm_arrow_right_white.svg) no-repeat
      center center;
    background-size: 18px auto;
    -webkit-transform: rotate3d(0, 1, 0, 180deg);
    transform: rotate3d(0, 1, 0, 180deg);
    z-index: 10009;
  }

  .slide-btn .swiper-button-next {
    right: 38px;
    position: absolute;
    background: url(/images/pearlabyss/icn_cm_arrow_right_white.svg) no-repeat
      center center;
    background-size: 18px auto;
    z-index: 10009;
  }

  .slide-btn .swiper-button-prev,
  .slide-btn .swiper-button-next {
    border: 1px solid #fff;
    border-radius: 50%;
    width: 54px;
    height: 54px;
  }

  .slide-btn .swiper-button-prev:hover,
  .slide-btn .swiper-button-next:hover {
    background-color: rgba(255, 255, 255, 0.2);
    -webkit-transition:
      background-color 0.4s,
      -webkit-transform 0.4s;
    transition:
      background-color 0.4s,
      transform 0.4s;
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    display: none;
  }

  .news_slide .swiper-container {
    display: none;
  }

  .container {
    position: relative;
    margin: 0 auto;
  }

  .news_wrap {
    position: relative;
    max-width: 1480px;
    margin: 0px auto 100px auto;
    padding: 0 20px;
    box-sizing: border-box;
  }

  .news_wrap h3 {
    font-size: 18px;
    font-weight: bold;
    color: #191c21;
    margin-bottom: 22px;
  }

  .news_wrap h4 {
    display: block;
    max-height: 44px;
    font-size: 16px;
    font-weight: bold;
    color: #191c21;
    overflow: hidden;
    word-break: keep-all;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
  }

  .date {
    margin: 14px auto 24px 0;
    font-size: 12px;
    color: #939393;
  }

  .desc {
    display: block;
    height: 18px;
    font-size: 14px;
    line-height: 18px;
    white-space: nowrap;
    overflow: hidden;
    word-break: break-word;
    text-overflow: ellipsis;
    color: #6a6a6a;
  }

  .news_list {
    display: block;
    width: 100%;
    overflow: hidden;
    position: relative;
    height: auto;
  }

  .news_item {
    width: 33%;
    float: left;
    display: block;
    height: auto;
    box-sizing: border-box;
  }

  .news_item:nth-child(2) .item {
    padding: 0 30px;
    border-left: 1px solid #ebebeb;
  }

  .news_item:nth-child(3) .item {
    padding: 0 0 0 30px;
    border-left: 1px solid #ebebeb;
  }

  .news_list:after {
    content: "";
    display: table;
    clear: both;
  }

  .item {
    display: block;
    width: 100%;
    padding-right: 30px;
    box-sizing: border-box;
    line-height: 22px;
  }

  .news_slide .swiper-pagination > .swiper-pagination-bullet {
    display: none;
  }

  .main_item_wrap {
    position: relative;
    max-width: 1440px;
    height: 576px;
    margin: 0 auto 160px auto;
    background: #fff;
  }

  .menu_item {
    top: 0;
    left: 0;
    width: 20%;
    height: 100%;
    position: absolute;
    overflow: hidden;
  }

  .two {
    left: 20%;
  }

  .three {
    left: 40%;
  }

  .four {
    left: 60%;
  }

  .five {
    left: 80%;
  }

  .mainitem_image {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    filter: grayscale(0.8);
    transition:
      filter 0.5s,
      transform 0.5s;
  }

  .menu_item {
    overflow: hidden;
  }

  .menu_item:hover .mainitem_image {
    transform: scale(1.2);
    filter: grayscale(0);
    overflow: hidden;
  }

  .info {
    position: absolute;
    left: 0;
    bottom: 0;
    color: #fff;
    text-align: center;
    width: 100%;
    height: 300px;
  }

  .info_title {
    position: absolute;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    width: 100%;
    bottom: 100px;
    transition: bottom 0.5s;
  }

  .menu_item:hover .info_title {
    bottom: 128px;
  }

  .info_desc {
    position: absolute;
    bottom: 60px;
    max-height: 0;
    margin-top: 16px;
    padding-top: 26px;
    font-size: 18px;
    opacity: 0;
    overflow: hidden;
    display: block;
    width: 100%;
    text-align: center;
    transition:
      opacity 0.5s,
      max-height 0.5s;
  }

  .menu_item:hover .info_desc {
    max-height: 200px;
    opacity: 1;
  }

  .info_desc:before,
  .menu_item:hover .info_desc:before {
    opacity: 1;
  }

  .menu_item .info_desc:before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    display: block;
    width: 24px;
    height: 0;
    border-bottom: 1px solid #fff;
    transform: translateX(-50%);
    opacity: 0;
    transition: opacity 0.5s;
  }

  .last_wrap {
    padding-bottom: 80px;
    max-width: 1440px;
    margin: 0 auto;
  }

  .last_wrap .swiper-container {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .last_wrap .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

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

  .bx_group {
    box-sizing: border-box;
    width: 100%;
    height: auto;
    overflow: hidden;
  }

  .bx_group img {
    width: 100%;
  }

  .last_p_wrap {
    overflow: hidden;
  }

  .scale {
    margin: 0;
    padding: 0;
    font-size: 0;
    overflow: hidden;
  }

  .scale img {
    transform: scale(1);
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transition: all 0.3s ease-in-out; /* 부드러운 모션을 위해 추가*/
  }

  .scale:hover img {
    transform-origin: center;
    transform: scale(1.1);
    transform: scale(1.1); /*  default */
    -webkit-transform: scale(1.1); /*  크롬 */
    -moz-transform: scale(1.1); /* FireFox */
    -o-transform: scale(1.1); /* Opera */
  }

  .small_title {
    color: #6a6a6a;
    font-size: 14px;
    line-height: 1.2rem;
    margin: 16px 0 16px 0;
    text-align: left;
  }

  .small_title_item {
    display: block;
    font-size: 18px;
    font-weight: bold;
    line-height: 1.6rem;
    max-height: 3.2rem;
    color: #1e1e1e;
    white-space: normal;
    overflow: hidden;
    text-align: justify;
    word-break: break-all;
    margin: 0;
    padding: 0;
    position: relative;
    padding-right: 1rem;
  }

  .last_wrap .swiper-container-horizontal > .swiper-pagination-bullets {
    display: none;
  }

  .last_wrap .swiper-pagination-bullet {
    opacity: 0.4;
  }

  .last_wrap .swiper-pagination-bullet-active {
    background: black;
    opacity: 1;
  }

  footer {
    margin: 0 auto;
    border-top: 1px solid #e0e0e0;
  }

  .footer_wrap {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1220px;
    margin: 0 auto;
    padding: 60px 20px 70px 20px;
    box-sizing: border-box;
    overflow: hidden;
  }

  .footer {
    float: left;
    flex: 0 0 16.66%;
  }

  .f_a_bold {
    font-size: 16px;
    font-weight: bold;
    color: #000;
    line-height: 40px;
  }

  .footer li a {
    font-size: 14px;
    color: #969696;
    line-height: 30px;
    text-align: left;
  }

  .hide li a:hover {
    color: #000;
  }

  .f_1 {
    margin-top: 30px;
  }

  .copyright_wrap {
    padding: 32px 20px 30px 20px;
    border-top: 1px solid #e0e0e0;
    text-align: center;
    position: relative;
  }

  .copyright_wrap:after {
    content: "";
    display: table;
    clear: both;
  }

  .copyright_inner {
    max-width: 1480px;
    display: inline-block;
    align-items: center;
    justify-content: center;
    align-content: center;
  }

  .cr_logo {
    float: left;
    width: 170px;
    height: 1rem;
    background: url(/images/pearlabyss/cm_bi_black.svg) no-repeat center left;
    background-size: contain;
  }

  .cr_item {
    font-size: 14px;
    color: #6a6a6a;
    opacity: 0.5;
    display: inline-block;
  }

  .footer_sns {
    position: absolute;
    right: 70px;
    top: 50%;
    transform: translateY(-50%);
  }

  .sns {
    margin: 3px;
  }

  .facebook {
    width: 40px;
    height: 40px;
    background: url(/images/pearlabyss/icn_footer_facebook_round.svg) no-repeat
      center left;
    display: inline-block;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .youtube {
    width: 40px;
    height: 40px;
    background: url(/images/pearlabyss/icn_footer_youtube_round.svg) no-repeat
      center left;
    display: inline-block;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .linkdin {
    width: 40px;
    height: 40px;
    background: url(/images/pearlabyss/icn_footer_linkedin_round.svg) no-repeat
      center left;
    display: inline-block;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .sns a:hover {
    opacity: 0.8;
  }

  /* 첫번째,두번째 사이즈 */

  @media screen and (min-width: 1025px) {
    .main_inner:hover {
      background: #fff;
      height: 343px;
      transition:
        background 0.3s,
        height 0.3s;
    }

    .main_inner:not(:hover) {
      transition:
        background 0.3s,
        height 0.3s;
    }

    .main_inner:hover .true {
      color: black;
      transition: 0.2s;
    }

    .main_inner:hover .logo a {
      background: url(/images/pearlabyss/cm_bi_black.svg) no-repeat center
        center;
      background-size: 150px auto;
      width: 170px;
      height: 68px;
      display: flex;
      margin-top: 1px;
    }

    .btn_sidemenu {
      display: none;
    }

    .navmenu a {
      transition: 0.2s;
    }

    .false a {
      transition: 0.2s;
    }

    .dropmenu span:hover {
      color: #000;
      transition: 0.2s;
    }

    .scale {
      overflow: hidden;
    }

    .scale img {
      transform: scale(1);
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transition: all 0.3s ease-in-out; /* 부드러운 모션을 위해 추가*/
    }

    .scale:hover img {
      transform-origin: center;
      transform: scale(1.1);
      transform: scale(1.1); /*  default */
      -webkit-transform: scale(1.1); /*  크롬 */
      -moz-transform: scale(1.1); /* FireFox */
      -o-transform: scale(1.1); /* Opera */
    }
  }

  /* 두번째 사이즈만 */

  @media screen and (max-width: 1280px) {
    .navmenu #dropclick {
      transition: 0.2s;
      padding: 0 33px;
    }

    .dropmenu a {
      width: 100%;
      height: auto;
      padding: 6px 0;
    }

    .swiper-slide .title {
      bottom: 9.2rem;
      width: 74%;
      font-size: 1.6rem;
      letter-spacing: -0.1rem;
    }
  }

  /* 세번째 사이즈만 */

  @media screen and (max-width: 1024px) {
    header {
      height: 58px;
    }

    .main_inner {
      height: 58px;
    }

    .top_wrap {
      height: 58px;
      border: none;
    }

    .top_wrap:hover {
      height: 58px;
    }

    .top_inner {
      height: 58px;
      align-items: center;
      justify-content: center;
    }

    .logo_box {
      width: 10.75rem;
      height: 3.55rem;
      background-size: auto 1.08rem;
    }

    .top_wrap:hover {
      background: transparent;
      height: 70px;
    }

    .top_wrap {
      border: none;
    }

    .nav_wrap {
      display: none;
    }

    .option {
      display: none;
    }

    .menu-trigger,
    .menu-trigger span {
      display: inline-block;
      transition: all 0.4s;
      box-sizing: border-box;
    }

    .menu-trigger {
      position: relative;
      width: 28px;
      height: 16px;
      z-index: 10005;
      top: 22px;
      left: 23px;
    }

    .menu-trigger span {
      position: absolute;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #fff;
      border-radius: 4px;
    }

    .menu-trigger.active .nav_line {
      background: #000;
      color: #000;
    }

    .menu-trigger span:nth-of-type(1) {
      top: 0;
    }

    .menu-trigger span:nth-of-type(2) {
      top: 7px;
    }

    .menu-trigger span:nth-of-type(3) {
      bottom: 0;
    }

    .menu-trigger.active span:nth-of-type(1) {
      -webkit-transform: translateY(7px) rotate(-45deg);
      transform: translateY(7px) rotate(-45deg);
    }
    .menu-trigger.active span:nth-of-type(2) {
      opacity: 0;
    }
    .menu-trigger.active span:nth-of-type(3) {
      -webkit-transform: translateY(-7px) rotate(45deg);
      transform: translateY(-7px) rotate(45deg);
      color: #000;
    }

    .nav_wrap.active {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      padding: 0 1.666rem;
      box-sizing: border-box;
      position: fixed;
      top: 0;
      left: 0;
      width: 375px;
      max-width: 100vw;
      height: 100vh;
      background: #fff;
      z-index: 16;
    }

    .nav {
      position: relative;
      display: block;
      width: 100%;
      height: calc(100% - 1.6rem);
      margin-top: 6rem;
      background-color: #fff;
      overflow-x: hidden;
      overflow-y: auto;
      z-index: 9;
      box-sizing: border-box;
      min-height: 3.7rem;
      font-size: 100%;
    }

    .nav .dropmenu {
      display: none;
      margin: 0 0 0 0;
    }

    .navmenu #dropclick {
      color: black;
    }

    .menu #dropclick {
      justify-content: left;
    }

    .navmenu {
      position: absolute;
      left: 0;
      width: 100%;
      height: 100%;
      padding: 0;
      box-sizing: border-box;
      transform: translateX(0);
      opacity: 1;
      z-index: 1007;
    }

    .nav a {
      color: #000;
      font-size: 18.5px;
      display: flex;
      align-items: center;
      height: 50px;
      padding: 0 15px 0 15px;
      margin: 0.4rem 0;
      border-bottom: 2px solid #efefef;
      position: relative;
      justify-content: flex-start;
    }

    .navmenu > ul {
      display: flex;
      flex-direction: column;
      padding: 2rem 0 3rem 0;
    }

    .menu.active .dropmenu ul {
      max-height: 400px;
    }

    .dropmenu ul {
      max-height: 0;
      transition: max-height 0.5s;
    }

    .dropmenu {
      max-height: 40rem;
      margin: 0;
      overflow: hidden;
      display: block;
    }

    .sub_list > li {
      width: 100%;
      box-sizing: border-box;
      overflow: hidden;
    }

    .sub_list a {
      width: 100%;
      height: auto;
      padding: 8px 18px;
      position: relative;
      box-sizing: border-box;
      border: none;
    }

    .sub_list span {
      font-size: 16px;
      color: #707070;
    }

    .menu > a:after {
      content: "";
      position: absolute;
      right: 1.666rem;
      top: 50%;
      display: block;
      width: 0.88rem;
      height: 0.88rem;
      border-right: 0.166rem solid #adadad;
      border-bottom: 0.166rem solid #adadad;
      transform-origin: center center;
      transform: translateY(-50%) rotate(45deg);
      transition: transform 0.2s;
    }

    .menu.active > a:after {
      border-color: #000;
      transform: translateY(0) rotate(225deg);
    }

    .navmenu .menu:hover > a:before {
      display: none;
    }

    .slide-btn {
      display: none;
    }

    .news_slide .swiper-slide .title {
      bottom: 3.686rem;
      font-size: 1.05rem;
      letter-spacing: -0.1rem;
      line-height: 1.4;
      word-break: keep-all;
    }

    .news_item {
      width: 33%;
      float: left;
      display: block;
      height: auto;
      box-sizing: border-box;
    }

    .news_item:nth-child(2) .item {
      padding: 0 30px;
      border-left: none;
    }

    .news_item:nth-child(3) .item {
      padding: 0 0 0 30px;
      border-left: none;
    }

    .main_item_wrap {
      position: relative;
      max-width: 1440px;
      height: auto;
      margin: 0 auto 160px auto;
      background: #fff;
      margin-bottom: 11rem;
    }

    .one {
      top: 0;
      left: auto;
      width: 50%;
      height: 41.4vw;
      position: relative;
      float: left;
      display: block;
    }

    .two {
      top: 0;
      left: auto;
      width: 50%;
      height: 41.4vw;
      position: relative;
      float: left;
      display: block;
    }

    .three {
      top: 0;
      left: auto;
      width: 33.33%;
      height: 41.4vw;
      position: relative;
      float: left;
      display: block;
    }

    .four {
      top: 0;
      left: auto;
      width: 33.34%;
      height: 41.4vw;
      position: relative;
      float: left;
      display: block;
    }

    .five {
      top: 0;
      left: auto;
      width: 33.33%;
      height: 41.4vw;
      position: relative;
      float: left;
      display: block;
    }

    .main_item_wrap:after {
      content: "";
      display: table;
      clear: both;
    }

    .info {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: 100%;
    }

    .info_title,
    .menu_item:hover .info_title {
      position: relative;
      font-size: 1.425rem;
      font-weight: bold;
      text-align: center;
      width: 100%;
      transition: none;
      position: relative;
      left: auto;
      bottom: auto;
    }

    .info_desc,
    .menu_item:hover .info_desc {
      position: relative;
      overflow: hidden;
      display: block;
      width: 100%;
      text-align: center;
      transition: none;
      margin-top: 1rem;
      padding-top: 0;
      max-height: none;
      font-size: 1rem;
      opacity: 1;
      left: auto;
      bottom: auto;
    }

    .menu_item .info_desc:before {
      display: none;
    }

    .mainitem_image img {
      display: none;
    }

    .mainitem_image {
      background: url(/images/pearlabyss/t_spr_main_category_bg.jpg) no-repeat
        top left;
      background-size: 100vw auto;
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      filter: none;
    }

    .one .mainitem_image {
      background-position: 0 0;
    }

    .two .mainitem_image {
      background-position: -50vw 0;
    }

    .three .mainitem_image {
      background-position: 0 -41.4vw;
    }

    .four .mainitem_image {
      background-position: -33.33vw -41.4vw;
    }

    .five .mainitem_image {
      background-position: -66.66vw -41.4vw;
    }

    .menu_item:hover .mainitem_image {
      transform: scale(1);
      filter: none;
      overflow: hidden;
    }

    footer {
      margin: 0 auto;
      border-top: 1px solid #e0e0e0;
    }

    .footer_wrap {
      display: block;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;
      width: 100%;
      margin: 0 auto;
      box-sizing: border-box;
      overflow: hidden;
      padding: 1rem 1.666rem;
    }

    .footer {
      display: block;
      float: none;
      flex: 0;
      padding: 0.4rem 0;
    }

    .f_a_bold {
      position: relative;
      font-size: 15px;
      font-weight: bold;
      color: #000;
      line-height: 40px;
      width: 100%;
      display: block;
    }

    .footer li a {
      font-size: 14px;
      color: #969696;
      line-height: 30px;
      text-align: left;
    }

    .f_1 {
      margin-top: 0px;
    }

    .copyright_wrap {
      padding: 0;
      border-top: 1px solid #e0e0e0;
      text-align: center;
      position: relative;
    }

    .copyright_wrap:after {
      content: "";
      display: table;
      clear: both;
    }

    .copyright_inner {
      position: relative;
      width: 100%;
      display: inline-block;
      align-items: center;
      justify-content: center;
      align-content: center;
    }

    .cr_logo {
      display: block;
      float: none;
      width: 7.5rem;
      height: 1rem;
      background: url(/images/pearlabyss/cm_bi_black.svg) no-repeat center left;
      background-size: contain;
      margin: 1.25rem auto 0.72rem auto;
    }

    .cr_item {
      display: block;
      width: 100%;
      font-size: 14px;
      color: #6a6a6a;
      opacity: 0.5;
      display: inline-block;
      margin-bottom: 0.92rem;
    }

    .footer_sns {
      position: relative;
      width: 100%;
      top: auto;
      right: auto;
      left: 50%;
      padding: 1rem 0;
      transform: translateX(-50%);
      border-bottom: 1px solid #e0e0e0;
    }

    .top {
      background: #000;
      width: 14px;
      height: 2px;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      border-radius: 4px;
      transition: all 0.4s;
    }

    .bottom {
      background: #000;
      width: 14px;
      height: 2px;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      border-radius: 4px;
      transform: rotate(90deg);
      transition: all 0.4s;
    }

    .footer.active span:nth-of-type(1) {
      -webkit-transform: translateY(-50%) rotate(-45deg);
      transform: rotate(-45deg);
    }

    .footer.active span:nth-of-type(2) {
      -webkit-transform: translateY(-50%) rotate(45deg);
      transform: rotate(45deg);
    }

    .hide {
      overflow: hidden;
      max-height: 0;
    }

    .footer.active .hide {
      max-height: 21rem;
      overflow: hidden;
      transition: max-height 1.4s ease;
    }
  }

  /* 네번째 사이즈만 */

  @media screen and (max-width: 767px) {
    .slide .swiper-wrapper .swiper-slide {
      height: 100%;
    }

    .slide .swiper-wrapper .swiper-slide img {
      height: 122.6vw;
    }

    .news_slide .swiper-container {
      display: block;
    }

    .news_list {
      display: none;
    }

    .slide .swiper-pagination > .swiper-pagination-bullet {
      opacity: 0.4;
      background-color: #fff;
      width: 8px;
      height: 8px;
      margin: 0 14px;
    }

    .slide .swiper-pagination > .swiper-pagination-bullet-active {
      background-color: white;
      opacity: 1;
    }

    .a.swiper-container-horizontal
      .swiper-pagination-bullets
      .swiper-pagination-bullet {
      margin: 0 14px;
    }

    .a.swiper-container-horizontal .swiper-pagination-bullets {
      bottom: 34px;
      left: 0;
      width: 100%;
    }

    .news_slide .swiper-container {
      width: 100%;
      height: 100%;
      position: relative;
      top: 0px;
    }

    .news_slide {
      position: relative;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    .desc {
      overflow: hidden;
    }

    .news_item h4,
    .date {
      text-align: left;
    }

    .item {
      padding-right: 0px;
    }

    .news_slide .swiper-pagination {
      position: relative;
      top: 20px;
    }

    .news_slide .swiper-pagination > .swiper-pagination-bullet {
      display: inline-block;
      opacity: 0.4;
      background-color: #000;
      width: 8px;
      height: 8px;
      margin: 8px 8px;
    }

    .news_slide .swiper-pagination > .swiper-pagination-bullet-active {
      background-color: black;
      opacity: 1;
    }

    .news_slide
      .swiper-container-horizontal
      .swiper-pagination-bullets
      .swiper-pagination-bullet {
      margin: 0 14px;
    }

    .news_slide .swiper-container-horizontal .swiper-pagination-bullets {
      bottom: 0px;
      left: 0;
      width: 100%;
    }

    .news_item {
      width: 100%;
      float: none;
      display: block;
      height: auto;
      box-sizing: border-box;
    }

    .news_slide {
      margin-bottom: 4.166rem;
      padding-bottom: 4.166rem;
    }

    .news_wrap {
      position: relative;
    }

    .news_wrap h3 {
      display: block;
      position: relative;
      top: 0;
    }

    .news_wrap h4 {
      font-size: 1rem;
    }

    .date {
      font-size: 0.85rem;
    }

    .last_wrap .swiper-container-horizontal > .swiper-pagination-bullets {
      display: none;
    }
  }

  @media screen and (max-width: 767px) {
    .last_wrap {
      padding: 0 10px;
    }

    .last_wrap .swiper-pagination-bullets.swiper-pagination-horizontal {
      bottom: 140px;
    }

    .last_wrap .swiper-container-horizontal > .swiper-pagination-bullets {
      display: block;
    }

    .last_p_wrap {
      margin-bottom: 30px;
    }
  }

  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    body {
      overflow-x: hidden;
    }

    .swiper-slide img {
      width: 100%;
      height: auto;
      max-height: 780px;
    }
  }
`;
