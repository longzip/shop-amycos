import Document, { Html, Head, Main, NextScript } from "next/document";
import { FB_PIXEL_ID } from "../lib/fpixel";
import { FB_PAGE_ID } from "../lib/constants";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="vi">
        <Head>
          {/* <script
            id="mcjs"
            dangerouslySetInnerHTML={{
              __html: `!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","${MAILCHIMP_FORM_CONN}");`,
            }}
          /> */}
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
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '1501297014052877');
                fbq('track', 'PageView');
          `,
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src="https://www.facebook.com/tr?id=1501297014052877&ev=PageView&noscript=1"
            />
          </noscript>

          <script
            async
            src={`https://js.hsforms.net/forms/embed/v2.js?ver=10.2.5`}
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
