import styled from "styled-components";

export const BmMainStyled = styled.div`
  .container {
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  .top_fixed {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
  }

  .header {
    margin: 0 auto;
    max-width: 1024px;
    display: flex;
    justify-content: space-between;
  }

  .fp-viewing-7 .header {
    display: none;
  }

  .bm_logo {
    position: relative;
    margin: 60px 0 0 4.9%;
    max-width: 142px;
  }

  .bm_logo img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .text {
    position: absolute;
    display: block;
    top: 20%;
  }

  img {
    max-width: 100%;
    height: auto;
    vertical-align: baseline;
  }

  .content {
    position: relative;
    width: 1024px;
    height: 100vh;
    margin: 0 auto;
    padding: 0 50px;
    box-sizing: border-box;
  }

  .sns_list {
    position: relative;
    margin: 58px 93px 0 0;
    width: 224px;
    font-size: 0;
  }

  .sns_list li {
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    width: 56px;
  }

  .sns_list li:first-child {
    margin-right: -5px;
  }

  .sns_list a {
    position: relative;
    display: inline-block;
    width: 34px;
    height: 34px;
  }

  /* .sns_list li img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  } */

  .rider {
    display: block;
    position: absolute;
    z-index: 1002;
    right: 0;
    width: 191px;
    height: 241px;
  }

  .rider img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .box {
    opacity: 1;
    transition: opacity 0.5s ease;
  }

  .fp-viewing-1 .box {
    opacity: 0;
    transition: all 0.5s ease;
  }

  .fp-viewing-2 .box,
  .fp-viewing-3 .box,
  .fp-viewing-4 .box,
  .fp-viewing-5 .box,
  .fp-viewing-6 .box,
  .fp-viewing-7 .box {
    opacity: 0;
  }

  .fp-viewing-0 #fp-nav ul li a.active span,
  .fp-slidesNav ul li a.active span,
  #fp-nav ul li:hover a.active span,
  .fp-slidesNav ul li:hover a.active span {
    display: none;
  }

  .fp-viewing-0 #fp-nav ul li a span,
  #fp-nav ul li:hover a span,
  .fp-slidesNav ul li:hover a span {
    display: none;
  }

  .fp-viewing-7 #fp-nav ul li a.active span,
  .fp-slidesNav ul li a.active span,
  #fp-nav ul li:hover a.active span,
  .fp-slidesNav ul li:hover a.active span {
    display: none;
  }

  .fp-viewing-7 #fp-nav ul li a span,
  #fp-nav ul li:hover a span,
  .fp-slidesNav ul li:hover a span {
    display: none;
  }

  #fp-nav ul li:first-child {
    display: none;
  }

  #fp-nav ul li:last-child {
    display: none;
  }

  .section {
    background: #2ac1bc;
  }

  .s7 {
    background: #fff;
  }

  .s0 {
    background: url(/images/bm/main_04@2x.jpg) no-repeat 50% 50%;
    background-size: cover;
  }

  #fp-nav ul li a.active span,
  .fp-slidesNav ul li a.active span,
  #fp-nav ul li:hover a.active span,
  .fp-slidesNav ul li:hover a.active span {
    display: block;
    width: 10px;
    height: 10px;
    background: url(/images/bm/dotSelect@2x.png) no-repeat;
    background-size: 100% 100%;
    margin: -5px 0px 0px -5px;
    border-radius: 100%;
  }

  #fp-nav ul li a span,
  #fp-nav ul li:hover a span,
  .fp-slidesNav ul li:hover a span {
    display: block;
    width: 10px;
    height: 10px;
    background: url(/images/bm/dotScroll02@2x.png) no-repeat;
    background-size: 100% 100%;
    margin: -5px 0px 0px -5px;
  }

  #fp-nav ul li a span,
  .fp-slidesNav ul li a span {
    border-radius: 50%;
    position: absolute;
    z-index: 1;
    height: 4px;
    width: 4px;
    border: 0;
    background: #333;
    left: 50%;
    top: 50%;
    margin: -2px 0 0 -2px;
    -webkit-transition: all 0.1s ease-in-out;
    -moz-transition: all 0.1s ease-in-out;
    -o-transition: all 0.1s ease-in-out;
    transition: all 0.1s ease-in-out;
  }

  #fp-nav {
    position: fixed;
    top: 50%;
    right: 6.5%;
    margin: 0;
    padding: 0;
    list-style: none;
    transform: translateY(-50%);
    z-index: 1004;
  }

  #fp-nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  #fp-nav ul li a {
    display: block;
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
  }

  #fp-nav.right {
    right: 6.5%;
  }

  #fp-nav ul li {
    display: block;
    width: 14px;
    height: 13px;
    margin: 7px;
    position: relative;
    margin-top: 12px;
  }

  .scroll {
    position: absolute;
    display: block;
    bottom: 32px;
    left: 50%;
    width: 20%;
    height: 8%;
    transform: translateX(-50%);
    z-index: 1001;
  }

  .app_dl {
    max-width: 262px;
    float: right;
    display: none;
  }

  .app_dl img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .float1 {
    position: fixed;
    width: 1024px;
    margin: 0 auto;
    left: 0;
    right: 0;
    bottom: 4px;
    z-index: 1002;
  }

  .float1:after {
    content: "";
    display: table;
    clear: both;
  }

  .app_dl_black {
    width: 200px;
    float: right;
  }

  .app_dl_black img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .float2 {
    position: fixed;
    display: block;
    height: 223px;
    width: 1024px;
    top: 130px;
    margin: 0 auto;
    left: 0;
    right: 20px;
    opacity: 1;
    transition: all 0.5s ease;
    z-index: 1003;
  }

  .float2:after {
    content: "";
    display: table;
    clear: both;
  }

  .img1 {
    width: 440px;
  }

  .img1 img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  .img2 {
    width: 500px;
    margin-top: -24.5px;
  }

  .img2 img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  .mini_text {
    margin-top: 5.3%;
    color: #fff;
    font-size: 14px;
    font-weight: 300;
    line-height: 1.5;
    font-family: "APPLE SD Gothic NEO", "Noto Sans CJK KR", sans-serif;
  }

  .sub_text {
    display: block;
    font-size: 1em;
    line-height: 3em;
  }

  .fp-viewing-0 .app_dl {
    display: block;
  }

  .fp-viewing-0 .float2 {
    opacity: 0;
    transition: all 0.5s ease;
  }

  .mini_img1 {
    position: absolute;
    width: 232px;
    bottom: 16%;
    right: 21%;
    max-width: 100%;
    height: auto;
  }

  .mini_img1 img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  .mini_img2 {
    position: absolute;
    width: 204px;
    bottom: 13%;
    right: 17%;
    max-width: 100%;
    height: auto;
  }

  .mini_img2 img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  .section.s1.active .bike {
    -webkit-animation: bike 1s ease;
    animation: bike 1s ease;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }

  @-webkit-keyframes bike {
    0% {
      -webkit-transform: translateX(0) translateY(0);
    }
    100% {
      -webkit-transform: translateX(60%) translateY(60%);
    }
  }

  @keyframes bike {
    0% {
      -webkit-transform: translateX(0) translateY(0);
      transform: translateX(0) translateY(0);
    }
    100% {
      -webkit-transform: translateX(60%) translateY(60%);
      transform: translateX(60%) translateY(60%);
    }
  }

  .mini_img3 {
    position: absolute;
    width: 400px;
    right: 40px;
    bottom: 0;
    max-width: 100%;
    height: auto;
  }

  .mini_img3 img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  .fp-viewing-2 .mini_img3 {
    -webkit-transform: translate(0, 100%);
    transform: translate(0, 100%);
    transition: all 0.8s ease;
  }

  .section.s2.active .move {
    -webkit-animation: move 1s ease forwards;
    animation: move 1s ease forwards;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }

  @-webkit-keyframes move {
    0% {
      -webkit-transform: translateY(100%);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      opacity: 0;
    }
  }

  @keyframes move {
    0% {
      -webkit-transform: translateY(100%);
      transform: translateY(100%);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }

  .mini_img4 {
    position: absolute;
    width: 360px;
    right: 9%;
    bottom: -1px;
    max-width: 100%;
    height: auto;
  }

  .mini_img4 img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  .section.s3.active .move {
    -webkit-animation: move 1s ease forwards;
    animation: move 1s ease forwards;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }

  .mini_img5 {
    position: absolute;
    width: 413.3px;
    right: 10%;
    bottom: 0;
  }

  .mini_img5 img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  .section.s4.active .move {
    -webkit-animation: move 1s ease forwards;
    animation: move 1s ease forwards;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }

  .img3 {
    width: 408px;
    margin-top: -24.5px;
    height: auto;
  }

  .img3 img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  .mini_text2 {
    margin-top: 6.6%;
    color: #fff;
    font-size: 14px;
    font-weight: 300;
    line-height: 1.5;
    font-family: "APPLE SD Gothic NEO", "Noto Sans CJK KR", sans-serif;
  }

  .sub_text2 {
    display: block;
    font-size: 1em;
    line-height: 2.3em;
    color: rgba(255, 255, 255, 0.7);
  }

  .sub_text2 br {
    display: none;
  }

  .mini_img6 {
    position: absolute;
    width: 600px;
    bottom: 15.95%;
    right: 10%;
    opacity: 0;
  }

  .mini_img6 img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  .section.s5.active .move-left {
    -webkit-animation: move-left 0.8s ease forwards;
    animation: move-left 0.8s ease forwards;
  }

  @-webkit-keyframes move-left {
    0% {
      -webkit-transform: translateX(100%);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(25%);
      opacity: 0;
    }
  }

  @keyframes move-left {
    0% {
      -webkit-transform: translateX(100%);
      transform: translateX(100%);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(25%);
      transform: translateX(25%);
      opacity: 1;
    }
  }

  .mini_img7 {
    position: absolute;
    width: 352px;
    right: 10%;
    bottom: 0;
  }

  .mini_img7 img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  .section.s6.active .move {
    -webkit-animation: move 1s ease forwards;
    animation: move 1s ease forwards;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }

  footer {
    height: 100vh;
  }

  .footer {
    width: 1024px;
    margin: 0 auto;
    padding-top: 7%;
    padding-left: 5%;
    padding-right: 5%;
  }

  .f_title {
    width: 41.85%;
    float: right;
  }

  .text_title {
    width: 176px;
  }

  .text_title img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  .f_left {
    padding-left: 10%;
  }

  .f_link {
    width: 450px;
    margin-top: 0;
  }

  .f_link li {
    display: inline-block;
  }

  .f_link img {
    display: inline-block;
    height: 30px;
  }

  .f_ul {
    margin-top: 3%;
  }

  .link1 {
    margin-right: 23px;
  }

  .link1 img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  .link2 {
    width: 138px;
    margin-right: 23px;
  }

  .link2 img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  .sns_link {
    width: 30%;
    margin: 5% 0 5% -0.7%;
  }

  .sns_link li {
    display: inline-block;
    width: 40px;
    margin-right: 4%;
  }

  .sns_link li:first-child {
    margin-right: 0;
  }

  .sns_link li img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .info {
    font-size: 15px;
    position: relative;
    color: #333333;
    line-height: 1.7em;
    font-family: "AppleSDGothicNeo", sans-serif;
  }

  .info a {
    color: #333333;
  }

  .info p {
    padding-bottom: 1.45%;
  }

  .business {
    margin-left: 10px;
    background: url(/images/bm/link-line_01@2x.png) bottom no-repeat;
    background-size: 100% 4px;
  }

  .mail {
    background: url(/images/bm/link-line_01@2x.png) bottom no-repeat;
    background-size: 100% 4px;
  }

  @media screen and (max-width: 1024px) {
    .content {
      width: 100%;
    }

    .sns_list {
      display: none;
    }

    .rider {
      width: 125px;
      height: 156px;
    }

    .float {
      position: fixed;
      width: 1024px;
      height: 350px;
      bottom: 0;
      margin-left: 0px;
      left: 0%;
    }

    .scroll {
      display: block;
      bottom: 32px;
      left: 4%;
      width: 20%;
      transform: initial;
    }

    .bm_logo {
      position: relative;
      margin: 45px 0 0 6%;
      max-width: 142px;
    }

    .app_dl {
      max-width: 262px;
      float: right;
      display: none;
    }

    .float1 {
      position: fixed;
      width: 100%;
      margin: 0 auto;
      left: 0;
      right: 0;
      bottom: 4px;
      z-index: 1002;
    }

    .float1:after {
      content: "";
      display: table;
      clear: both;
    }

    .app_dl_black {
      width: 200px;
      float: right;
    }

    .float2 {
      position: fixed;
      display: block;
      height: 223px;
      width: 100%;
      top: 19px;
      margin: 0 auto;
      left: 0;
      right: 20px;
      opacity: 1;
      transition: none;
      z-index: 1003;
    }

    .float2:after {
      content: "";
      display: table;
      clear: both;
    }

    .fp-viewing-7 .scroll {
      display: none;
    }

    .footer::after {
      content: "";
      display: table;
      clear: both;
    }

    .footer {
      position: relative;
      width: 100%;
      padding-top: 5%;
      padding-left: 5%;
      padding-right: 5%;
    }

    .f_title {
      width: 100%;
      display: block;
      float: unset;
    }

    .text_title {
      width: 45%;
    }

    .f_left {
      padding-left: 0;
      margin-top: 10%;
    }
  }

  @media screen and (max-width: 768px) {
    /* .section {
      width: 80%;
    } */

    .img1 {
      width: 85%;
      max-width: 374px;
      left: 6%;
    }

    .bm_logo {
      width: 28%;
      margin-top: 40px;
    }

    .app_dl {
      width: 45%;
    }

    .app_dl_black {
      width: 45%;
    }

    .img2 {
      width: 85%;
      top: 25.1%;
      left: 6%;
    }

    .img3 {
      width: 66%;
      top: 25.5%;
      left: 6%;
    }

    .sub_text {
      font-size: 0.9em;
      line-height: 2em;
    }

    .sub_text2 {
      margin-top: 6px;
      line-height: 1.5em;
    }

    .sub_text2 br {
      display: block;
    }

    .mini_img1 {
      bottom: 30%;
      right: 32%;
      width: 42%;
    }

    .mini_img2 {
      bottom: 26%;
      right: 25%;
      width: 42%;
    }

    .mini_img3 {
      right: -5%;
      width: 85%;
    }

    .mini_img4 {
      right: 0;
      width: 55.2%;
    }

    .mini_img5 {
      bottom: -1px;
      right: 10%;
      width: 55.2%;
    }

    .mini_img6 {
      bottom: 30px;
      right: 10%;
      width: 80%;
    }

    .mini_img7 {
      bottom: 0;
      right: -7%;
      width: 70%;
    }

    .footer {
      height: 100vh;
    }

    .text_title {
      width: 40%;
    }

    .f_left {
      padding-left: 0;
      margin-top: 10%;
    }

    .f_link {
      width: 450px;
      margin-top: 0;
    }

    .f_link li {
      display: inline-block;
    }

    .f_link img {
      display: inline-block;
      height: 1.3rem;
    }

    .f_ul {
      margin-top: 5%;
    }

    .link2 {
      width: 98px;
      margin-right: 22px;
    }

    .sns_link {
      width: 100%;
      margin: 5% 0 5% -2%;
    }

    .sns_link li {
      width: 10%;
    }

    .sns_link li:first-child {
      margin-right: 5px;
    }

    .info {
      font-size: 0.7rem;
      position: absolute;
      bottom: 8.5%;
    }

    .info a {
      color: #333333;
    }

    .info p {
      padding-bottom: 3%;
    }

    .business {
      margin-left: 10px;
      background: url(/images/bm/link-line_01@2x.png) bottom no-repeat;
      background-size: 100% 4px;
    }

    .mail {
      background: url(/images/bm/link-line_01@2x.png) bottom no-repeat;
      background-size: 100% 4px;
    }
  }
`;
