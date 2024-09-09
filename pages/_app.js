import Head from "next/head";
import "../styles/globals.css";

// NProgress style.
import "nprogress/nprogress.css";

import Router from "next/router";
import NProgress from "nprogress";
import ZaloChatWidget from "../src/components/zalo/ChatWidget";

NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mỹ Phẩm Amycos - Giải Pháp Hoàn Hảo Cho Làn Da Mặt Sáng Mịn, Không Tì Vết</title>
        <meta
          name="description"
          content="Nám, mụn, da xỉn màu không còn là nỗi lo. Amycos với các dòng sản phẩm chuyên biệt sẽ giúp bạn giải quyết mọi vấn đề về da, mang lại làn da sáng mịn, tươi trẻ."
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Component {...pageProps} />
      <ZaloChatWidget />
    </>
  );
}

export default MyApp;
