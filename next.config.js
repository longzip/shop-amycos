const path = require("path");
const allowedImageWordPressDomain = new URL(
  process.env.NEXT_PUBLIC_WORDPRESS_URL
).hostname;

module.exports = {
  trailingSlash: true,
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
        source: "/danh-muc-san-pham/offers/:path*",
        destination: "https://blog.amycos.vn/:path*",
        permanent: true,
      },
      {
        source: "/san-pham/:path*",
        destination: "/cua-hang/:path*",
        permanent: true,
      },
      {
        source: "/shop/:path*",
        destination: "/cua-hang/:path*",
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
          "/cua-hang/amycos-glow-booster-serum-duong-da-mo-nam-tan-nhang/",
        permanent: true,
      },
      {
        source: "/cua-hang/serum-huong-duong/",
        destination: "/cua-hang/serum-hoa-huong-duong-amycos/",
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
