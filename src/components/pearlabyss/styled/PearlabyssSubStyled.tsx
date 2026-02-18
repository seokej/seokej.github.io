import styled from "styled-components";

export const PearlabyssSubStyled = styled.div`
  header {
    position: relative;
    height: 70px;
    z-index: 30;
    background: #fff;
  }

  .logo_box {
    background: url(/images/pearlabyss/cm_bi_black.svg) no-repeat center center;
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
    height: 70px;
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
    color: #000;
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
    color: #000;
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

  section {
    position: relative;
    color: #000;
    overflow: hidden;
  }

  .main {
    height: 320px;
    background: #000;
    overflow: hidden;
  }

  .two_img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    overflow: hidden;
  }

  .main_title {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .maintitle {
    font-size: 42px;
    line-height: 1.4;
  }

  .bold {
    font-weight: bold;
  }

  .sectionwrap {
    margin: 70px auto;
    box-sizing: border-box;
  }

  .sectionwrap_under {
    margin-top: 130px;
    margin-bottom: 120px;
    box-sizing: border-box;
  }

  .common_table + .right_title {
    margin-top: 90px;
  }

  .container {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    max-width: 1220px;
    margin: 0 auto;
    padding: 0 10px;
  }

  .h3 {
    font-size: 26px;
  }

  .count {
    margin-top: 30px;
    font-size: 16px;
  }

  .count p {
    margin-bottom: 4px;
  }

  .memberCountCon {
    font-size: 26px;
  }

  .right_title {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
    margin-bottom: 14px;
  }

  .righttitle {
    font-size: 24px;
  }

  .date,
  .date2 {
    font-size: 14px;
    color: #969696;
  }

  .date2 {
    color: #000;
    margin: 10px 0;
  }

  .common_table {
    border-top: 2px solid #000;
    font-size: 14px;
    color: #6a6a6a;
    text-align: left;
  }

  thead tr {
    height: 58px;
    border-bottom: 1px solid #c1c1c1;
    color: #000;
  }

  th,
  td {
    box-sizing: border-box;
    padding: 12px 17px;
    text-align: left;
    vertical-align: middle;
    line-height: 1.5;
    font-size: 14px;
  }

  .sectionwrap_under th,
  td {
    vertical-align: top;
  }

  tbody tr:hover {
    background-color: #fafafa;
  }

  tbody tr {
    height: 58px;
    border-bottom: 1px solid #e8e8e8;
  }

  .th-center {
    text-align: center;
  }

  .tr-right {
    padding-right: 15%;
    text-align: right;
  }

  .black {
    color: #000;
  }

  .left_wrap {
    flex: 1 1 28%;
  }

  .right_wrap {
    flex: 1 1 72%;
  }

  table {
    width: 100%;
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

  .hide a:hover {
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

    .main {
      height: 240px;
    }

    .two_img {
      height: 240px;
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
      background-color: #000;
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

    .main {
      height: 10rem;
      background: transparent;
    }

    .maintitle {
      font-size: 2.35rem;
    }

    .two_img {
      display: none;
    }

    .sectionwrap {
      margin: 0px;
      box-sizing: border-box;
    }

    .sectionwrap_under {
      margin-top: 0px;
      margin-bottom: 120px;
      box-sizing: border-box;
    }

    .titlenone {
      display: none;
    }

    .right_date {
      position: absolute;
      right: 0;
      z-index: 1000;
    }

    .date2 {
      display: none;
    }

    .container {
      display: block;
    }

    .left_wrap {
      flex: 1;
    }

    .right_wrap {
      flex: 1;
    }

    .sectionwrap_under {
      margin-top: 5rem;
    }

    .righttitle {
      font-size: 18.6px;
    }

    .t_m_top {
      margin-top: 2.5rem;
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
`;
