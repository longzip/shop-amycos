import Document, { Html, Head, Main, NextScript } from "next/document";
import { MAILCHIMP_FORM_CONN } from "../lib/constants";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="vi">
        <Head>
          <script
            async
            src={`https://js.hsforms.net/forms/embed/v2.js?ver=11.0.32`}
          />
        </Head>
        <body>
          <Main />
          <NextScript />

          <script
            async
            src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"
          />
          <script async src="https://sp.zalo.me/plugins/sdk.js" />

          <script
            type="text/javascript"
            id="hs-script-loader"
            async
            defer
            src="//js.hs-scripts.com/44095848.js"
          />

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
        </body>
      </Html>
    );
  }
}
