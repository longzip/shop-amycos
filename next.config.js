const path = require("path");
const allowedImageWordPressDomain = new URL(
  process.env.NEXT_PUBLIC_WORDPRESS_URL
).hostname;

module.exports = {
  // trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  /**
   * We specify which domains are allowed to be optimized.
   * This is needed to ensure that external urls can't be abused.
   * @see https://nextjs.org/docs/basic-features/image-optimization#domains
   */
  images: {
    domains: [
      allowedImageWordPressDomain,
      "via.placeholder.com",
      "i0.wp.com",
      "i2.wp.com",
      "i1.wp.com",
    ],
  },
  // webpack: (config, { isServer }) => {
  //   if (isServer) {
  //     require("./scripts/generate-sitemap");
  //   }

  //   return config;
  // },
  async redirects() {
    return [
      {
        source: "/san-pham/tinh-chat-pha-nam-melasma-pell-20-xoa-nam-tan-goc-da-trang-sang-min-mang",
        destination: "/san-pham/tinh-chat-tri-nam-amycos-melasma-pell-20",
        permanent: true,
      },
      {
        source: "/san-pham/amycos-glow-booster-serum-duong-da-mo-nam-tan-nhang",
        destination: "/san-pham/serum-duong-da-cang-bong-amycos-glow-booster",
        permanent: true,
      },
      {
        source: "/san-pham/kem-tri-nam-melasma-cream-02-phu-hop-moi-loai-da",
        destination: "/san-pham/kem-duong-trang-da-amycos-melasma-02",
        permanent: true,
      },
      {
        source: "/san-pham/kem-tri-nam-diamond-melasma-03",
        destination: "/san-pham/kem-phuc-hoi-da-amycos-diamond-melasma-03",
        permanent: true,
      },
      {
        source: "/san-pham/sua-rua-mat-perfect-foaming",
        destination: "/san-pham/sua-rua-mat-tao-bot-amycos-perfect-foaming",
        permanent: true,
      },
      {
        source: "/san-pham/kem-chong-nang-uv-sun-block-50ml",
        destination: "/san-pham/kem-chong-nang-amycos-sun-block-cream-spf-50",
        permanent: true,
      },
      {
        source: "/san-pham/serum-acnes-skin",
        destination: "/san-pham/tinh-chat-tri-mun-amycos-acnes-skin",
        permanent: true,
      },
      {
        source: "/san-pham/serum-hoa-huong-duong-amycos",
        destination: "/san-pham/serum-phuc-hoi-da-amycos-sunflower",
        permanent: true,
      },
      {
        source: "/san-pham/tinh-chat-pha-nam-melasma-pell-10",
        destination: "/san-pham/tinh-chat-tri-nam-amycos-melasma-pell-10",
        permanent: true,
      },
      {
        source: "/san-pham/kem-duong-trang-da-ban-dem-amycos-white-premium-night-cream",
        destination: "/san-pham/kem-duong-trang-da-ban-dem-amycos-white-premium",
        permanent: true,
      },
      {
        source: "/san-pham/kem-hap-thu-nam-cho-moi-loai-da-amycos-tri-nam-tan-nhang-hieu-qua-nhanh-chong-an-toan",
        destination: "/san-pham/kem-duong-tri-nam-amycos-melasma-01",
        permanent: true,
      },
      {
        source: "/danh-muc-san-pham/offers/:path*",
        destination: "https://blog.amycos.vn/:path*",
        permanent: true,
      },
      {
        source: "/danh-muc-san-pham/:path*",
        destination: "https://mypham.amycos.vn/:path*",
        permanent: true,
      },
      {
        source: "/cua-hang/:path*",
        destination: "/san-pham/:path*",
        permanent: true,
      },
      {
        source: "/shop/:path*",
        destination: "/san-pham/:path*",
        permanent: true,
      },
      {
        source: "/cua-hang/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/shopee/",
        destination: "https://s.shopee.vn/3fjrG04APh",
        permanent: true,
      },
      {
        source: "/shopee/:path*",
        destination: "https://s.shopee.vn/:path*",
        permanent: true,
      },
      {
        source: "/zalo/",
        destination: "https://zalo.me/939846860985963068",
        permanent: true,
      },
      {
        source: "/facebook/",
        destination: "https://www.facebook.com/amycosvn/",
        permanent: true,
      },
      {
        source: "/cua-hang/glow-booster-serum/",
        destination:
          "/san-pham/amycos-glow-booster-serum-duong-da-mo-nam-tan-nhang/",
        permanent: true,
      },
      {
        source: "/cua-hang/serum-huong-duong/",
        destination: "/san-pham/serum-hoa-huong-duong-amycos/",
        permanent: true,
      },
      {
        source: "/blog/:slug*",
        destination: `https://${allowedImageWordPressDomain}/blog/:slug*`,
        permanent: true,
      },
    ];
  },
};
