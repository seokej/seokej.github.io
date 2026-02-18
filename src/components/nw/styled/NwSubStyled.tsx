import styled from "styled-components";

export const NwSubStyled = styled.div`
  body {
    font-family:
      Arial, "나눔바른고딕", "NanumBarunGothic", NanumBarunGothicRegular,
      "NanumBarunGothic_light", "돋움", dotum, AppleGothic, sans-serif;
  }

  header {
    width: 100%;
    height: 100%;
    background-color: #3d3d3d;
  }

  .top {
    display: table;
    width: 960px;
    height: 90px;
    margin: 0 auto;
    background-color: #3d3d3d;
  }

  .top-inner {
    display: table-cell;
    vertical-align: middle;
  }

  .top-inner::after {
    content: "";
    display: block;
    clear: both;
  }

  .logo-wrap {
    position: relative;
    top: -3px;
    float: left;
  }

  .logo {
    display: block;
    width: 115px;
    height: 29px;
    background-image: url(/images/nw/sprite.png);
    background-repeat: no-repeat;
    background-size: 500px 57px;
    background-position: 0 -26px;
  }

  .nav-wrap {
    position: relative;
    float: right;
    top: 3px;
  }

  .nav-wrap::after {
    content: "";
    display: block;
    clear: both;
  }

  .menu {
    position: relative;
    float: left;
    font-size: 0;
    top: 5px;
  }

  .menu-list {
    display: inline-block;
  }

  .menu-link {
    font-size: 14px;
    color: #fff;
    margin: 0 20px;
  }

  .menu-list:not(:first-of-type)::before {
    position: absolute;
    content: "";
    display: block;
    width: 1px;
    height: 14px;
    background-color: #616161;
  }

  .home {
    color: #858585;
  }

  .menu-link:hover {
    color: #858585;
  }

  .language-box {
    float: right;
    margin-top: 1px;
    margin-left: 24px;
  }

  .lang-choice {
    position: relative;
    width: 76px;
    padding: 5px 0 5px 10px;
    text-align: left;
    font-size: 11px;
    color: #33fec3;
    cursor: pointer;
    background-color: transparent;
    border: 1px solid #4f4f4f;
  }

  .lang-drop {
    position: absolute;
    top: 8px;
    right: 10px;
    width: 7px;
    height: 4px;
    background-position: -284px -26px;
    background-image: url(/images/nw/sprite.png);
    background-repeat: no-repeat;
    background-size: 500px 57px;
  }

  #section1 {
    min-width: 960px;
    height: 494px;
    background: #201d1a url(/images/nw/main_spot.png) no-repeat 49% 50%;
    background-size: 1824px 494px;
  }

  .section-wrap #section2 {
    width: 960px;
    margin: 0px auto;
    padding-top: 100px;
    padding-bottom: 80px;
  }

  .section-title-wrap {
    padding-bottom: 16px;
    border-bottom: 1px solid #c9c9c9;
  }

  .section-title {
    width: 500px;
    height: 23px;
    background: url(/images/nw/sprite.png) no-repeat;
    background-position: 0 0;
    background-size: 500px 57px;
  }

  .content h1 {
    padding: 50px 0 10px;
    color: #4d4d4d;
    font-size: 22px;
    font-weight: bold;
  }

  .content p,
  h2 {
    font-size: 16px;
    line-height: 28px;
    color: #676767;
    white-space: pre-line;
  }

  .content h3 {
    margin-top: 16px;
    margin-bottom: 16px;
    white-space: pre-line;
    color: #808080;
    line-height: 25px;
  }

  .top-mg {
    margin-top: 16px;
  }

  .send-link {
    color: #3c579a;
    text-decoration: underline;
  }

  .content h4 {
    margin-top: 16px;
    font-size: 14px;
    color: #666;
    white-space: pre-line;
    line-height: 18px;
  }

  .reward table {
    margin: 0 0 20px;
    width: 100%;
  }

  tr {
    height: 40px;
    line-height: 40px;
    background-color: #fbfbfb;
  }

  th {
    color: #fff;
    background-color: #939393;
  }

  th:not(:first-of-type) {
    border-left: 1px solid #fff;
  }

  td {
    font-size: 14px;
    color: #666;
    padding-left: 15px;
  }

  td:not(:first-of-type) {
    border-left: 1px solid #e5e5e5;
  }

  .reward .odd {
    background-color: #f5f5f5;
  }

  .amount {
    padding-left: 38px;
  }

  .footer-wrap {
    width: 100%;
    background: #363636;
  }

  .footer {
    position: relative;
    max-width: 960px;
    height: 130px;
    margin: 0 auto;
  }

  .f-logo-wrap {
    display: inline-block;
    margin: 40px 0 15px;
  }

  .f-logo {
    display: block;
    width: 80px;
    height: 20px;
    background: url(/images/nw/sprite.png) no-repeat;
    background-position: -119px -26px;
    background-size: 500px 57px;
  }

  footer p {
    position: relative;
    top: -2px;
    font-size: 11px;
    color: #787878;
  }

  .f-text {
    color: #787878;
  }

  .f-text:hover {
    color: #fff;
  }
`;
