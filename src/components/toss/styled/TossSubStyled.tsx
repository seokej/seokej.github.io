import styled from "styled-components";

export const TossSubStyled = styled.div`
  header {
    position: fixed;
    background-color: transparent;
    width: 100%;
    height: 59px;
    z-index: 1000;
    border-bottom: 1px solid transparent;
  }

  .top {
    margin: 0 auto;
    max-width: 1140px;
  }

  .top_inner {
    position: relative;
    max-width: 1064px;
    height: 58px;
    margin-right: auto;
    margin-left: auto;
    padding: 9px 20px;
    box-sizing: border-box;
  }

  .logo_box {
    float: left;
  }

  .logo {
    display: inline-block;
    padding: 10px;
    vertical-align: top;
  }

  .logo div {
    overflow: hidden;
    height: 20px;
  }

  .logo img {
    display: block;
    height: 100%;
  }

  .nav_wrap {
    overflow: hidden;
    text-align: right;
    box-sizing: border-box;
  }

  .nav li {
    display: inline-block;
    padding: 0 8px;
    display: inline-block;
    margin-right: 10px;
    margin-left: 10px;
    padding: 10px 6px;
    color: #3b3b46;
    vertical-align: top;
    -webkit-text-decoration: none;
    text-decoration: none;
  }

  .nav a {
    font-family: "Gothic A1", sans-serif;
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;
    letter-spacing: -0.5px;
  }

  .nav a:hover {
    text-decoration: none;
    color: #0056b3;
  }

  section {
    -webkit-flex: 1 1 624px;
    -ms-flex: 1 1 624px;
    flex: 1 1 624px;
    min-height: 624px;
  }

  .section {
    position: relative;
    min-width: 672px;
    height: 100%;
    width: 100%;
    max-width: 624px;
    margin-right: auto;
    margin-left: auto;
  }

  .title_wrap {
    position: absolute;
    top: 90px;
    right: 0;
    left: 0;
    z-index: 1;
  }

  .title_wrap h1 {
    margin: 0;
    font-size: 54px;
    font-weight: bold;
    line-height: 1.3;
    color: #454f5d;
  }

  .title_wrap p {
    margin: 40px 0 0 0;
    font-size: 24px;
    font-weight: 400;
    line-height: 1.42;
    color: #3a4961;
    letter-spacing: -0.44px;
  }

  .input {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: flex-end;
    -webkit-box-align: flex-end;
    -ms-flex-align: flex-end;
    align-items: flex-end;
    width: 100%;
    padding: 0;
    margin-top: 40px;
  }

  .form-group {
    -webkit-flex: none;
    -ms-flex: none;
    flex: none;
    width: 238px;
    margin-right: 20px;
  }

  .second {
    width: 148px;
    margin-right: 20px;
  }

  .form-group_label {
    font-size: 13px;
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    font-weight: 500;
    line-height: 1.3;
    color: #333d4b;
    margin-bottom: 6px;
  }

  .form-group_controls {
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
  }

  .text-field {
    height: 60px;
    font-size: 22px;
    line-height: 26px;
    position: relative;
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-transition: background-color 0.2s ease;
    transition: background-color 0.2s ease;
    background-color: #f9fafb;
    border-radius: 14px;
    -webkit-box-align: center;
    align-items: center;
    box-shadow: inset 0 0 0 1px rgb(0 0 0 / 2%);
    font-weight: 500;
    color: rgb(209, 209, 209);
  }

  .text-field_input {
    font-family: Arial;
    font-size: 22px;
    -webkit-box-flex: 1;
    flex: 1;
    height: 100%;
    width: 100%;
    min-width: 0;
    background-color: initial;
    border: none;
    -webkit-appearance: none;
    appearance: none;
    padding: 0 0 0 16px;
    caret-color: #4593fc;
    font-weight: bold;
    color: rgb(170, 170, 170);
  }

  .text-field_input::placeholder {
    color: #94989b;
    opacity: 1;
  }

  .text-field_input::-webkit-input-placeholder {
    color: #94989b;
  }

  .text-field_input:-ms-input-placeholder {
    color: #94989b;
  }

  .text-field_input:-mos-input-placeholder {
    color: #94989b;
  }

  .button {
    width: 120px;
    height: 60px;
  }

  #button1 {
    display: -webkit-inline-box;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    position: relative;
    font-weight: 600;
    -webkit-font-smoothing: antialiased;
    white-space: nowrap;
    -webkit-user-select: none;
    user-select: none;
    border: 0 solid transparent;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-appearance: none;
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
    overflow: hidden;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    padding: 0;
    color: #fff;
    background-color: #3182f6;
    border-radius: 16px;
  }

  .button:not(:disabled):not(.disabled) {
    cursor: pointer;
  }

  .button:after {
    content: " ";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: initial;
    -webkit-transition: background-color 0.1s ease-in-out;
    transition: background-color 0.1s ease-in-out;
  }

  .button:not(:disabled):not(.disabled):hover:after {
    background-color: rgba(0, 0, 0, 0.26);
  }

  .button_content {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    box-sizing: border-box;
    min-width: 96px;
    height: 56px;
    max-height: 56px;
    padding: 15px 16px;
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

  .site_wrap {
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
  }

  .li_title {
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

  .term .f_color {
    color: #000;
  }

  .term .f_color:hover {
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
`;
