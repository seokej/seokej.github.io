import styled from "styled-components";

export const HiSubStyled = styled.div`
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

  section {
    padding-top: 87px;
  }

  .main {
    max-width: 1212px;
    padding-top: 70px;
    padding-bottom: 140px;
    margin: 0 auto;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .guide {
    font-size: 60px;
    font-weight: bold;
    margin-top: -3px;
    padding-bottom: 50px;
  }

  .announce_guide {
    font-size: 20px;
    line-height: 36px;
    background-color: #f3f6f7;
    padding: 32px 33px;
    letter-spacing: -0.4px;
  }

  .noti {
    padding-top: 20px;
  }

  .noti > li {
    display: flex;
    padding: 55px 35px;
    border-top: 1px solid #e1e4e5;
  }

  .noti > li:first-child {
    border-top: none;
  }

  .icon {
    width: 198px;
    padding-right: 20px;
    box-sizing: border-box;
    -ms-flex-negative: 0;
    flex-shrink: 0;
  }

  .icon img {
    width: 35px;
  }

  .icon em {
    font-size: 24px;
    font-weight: bold;
    display: block;
    padding-top: 8px;
  }

  .detail {
    margin-top: -3px;
    font-size: 16px;
  }

  .detail li {
    display: flex;
    vertical-align: top;
    margin-top: 13px;
    line-height: 24px;
  }

  .detail li:first-child {
    margin-top: 0px;
  }

  .dot::before {
    content: "";
    width: 3px;
    height: 3px;
    display: inline-block;
    background-color: #000;
    margin-top: 12px;
    margin-right: 6px;
    flex-shrink: 0;
  }

  .blue {
    color: #0047bb;
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

  .m_footer {
    display: none;
  }

  .m_guide {
    display: none;
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

  @media (max-width: 1279px) {
    .top {
      display: none;
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

    .m_logo_box {
      display: block;
      position: absolute;
      top: 60%;
      -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
    }

    .m_logo_box h1 {
      display: inline-block;
      font-size: 16px;
      font-weight: bold;
      padding-left: 12px;
      padding-bottom: 24px;
      vertical-align: middle;
    }

    .back_icon {
      display: inline-block;
      width: 30px;
      height: 30px;
      background: url(/images/hi/btn-back.svg) no-repeat 50% 50%;
      background-size: 24px auto;
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

    .main {
      max-width: none;
      padding: 0 24px 50px;
      margin: 0;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }

    .guide {
      display: none;
    }

    .m_guide {
      display: block;
      font-size: 16px;
      font-weight: bold;
    }

    .announce_guide {
      font-size: 14px;
      line-height: 23px;
      background-color: #f3f6f7;
      padding: 28px 24px;
      letter-spacing: -0.4px;
    }

    .announce_guide p {
      margin-top: 14px;
    }

    .noti > li {
      display: flex;
      padding: 18px 0;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      border-top: 1px solid #e1e4e5;
    }

    .icon {
      display: flex;
      width: auto;
      padding-right: 0;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }

    .icon img {
      width: 22px;
    }

    .icon em {
      font-size: 14px;
      font-weight: bold;
      display: inline-block;
      padding-top: 0px;
      padding-left: 4px;
    }

    .detail {
      margin-top: 10px;
      font-size: 13px;
    }

    .detail li {
      display: flex;
      vertical-align: top;
      margin-top: 13px;
      line-height: 14px;
    }

    .detail li:first-child {
      margin-top: 0px;
    }

    .dot::before {
      content: "";
      width: 2px;
      height: 2px;
      display: inline-block;
      background-color: #000;
      margin-top: 5px;
      margin-right: 6px;
      flex-shrink: 0;
    }

    .icon_t {
      position: relative;
      top: 2px;
    }

    .footer {
      display: none;
    }

    .m_footer {
      display: block;
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
  }
`;
