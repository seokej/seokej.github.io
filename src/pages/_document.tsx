import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko" title="SEJ's portfolio">
      <Head />
      <body>
        <div id="accessibility">
          <a href="#mainHeader">주메뉴 바로가기</a>
          <a href="#mainMenu">본문내용 바로가기</a>
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
