import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="vi">
        <Head>
        </Head>
        <body>
          <Main />
          <NextScript />
          {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
            />
          ) : null}
          {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          ) : null}
          <div className="zalo-chat-widget" data-oaid="939846860985963068" data-welcome-message="Rất vui khi được hỗ trợ bạn!" data-autopopup="0" data-width="" data-height=""></div>
          <script src="https://sp.zalo.me/plugins/sdk.js"></script>
        </body>
      </Html>
    );
  }
}
