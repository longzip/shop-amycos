import Head from "next/head";
import Layout from "../src/components/Layout";
import ProductList from "../src/components/ProductList";
import client from "../src/components/ApolloClient";
import PRODUCTS_AND_CATEGORIES_QUERY from "../src/queries/product-and-categories";
import NAV_QUERY from "../src/queries/nav";
import HeroCarousel from "../src/components/home/hero-carousel";
import parse from "html-react-parser";

export default function Home({
  homePage,
  productCategories,
  heroCarousel,
  fbPageId,
  siteSeo,
  mainMenu,
  mobileMenu,
  footerMenu,
  footerMenu2,
  images,
}) {
  const fullHead = parse(homePage?.seo?.fullHead);

  return (
    <Layout
      fbPageId={fbPageId}
      siteSeo={siteSeo}
      mainMenu={mainMenu}
      mobileMenu={mobileMenu}
      footerMenu={footerMenu}
      footerMenu2={footerMenu2}
      productCategories={productCategories}
    >
      <Head>{fullHead}</Head>
      <HeroCarousel heroCarousel={heroCarousel} />

      {productCategories.map(({ name, image, products, slug }) => (
        <div key={slug}>
          <div className="mx-auto max-w-2xl lg:max-w-6xl">
            {image ? (
              <img
                src={image?.sourceUrl}
                alt={image?.altText}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            ) : null}
          </div>
          <ProductList
            products={products.nodes}
            title={name}
            xemThem={`/danh-muc-san-pham/${slug}/`}
          ></ProductList>
        </div>
      ))}
      <div className="text-center p-10">
        <h2 className="font-bold text-4xl mb-4">Mỹ Phẩm Amycos</h2>
        <p class="text-3xl">Trên Instagram</p>
      </div>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-6xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-1 gap-y-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 ">
          {images &&
            images.map(({ id, media_type, caption, media_url }) => (
              <div
                key={id}
                className="aspect-h-1 aspect-w-1 w-full overflow-hidden  bg-gray-200"
              >
                {media_type === "IMAGE" ? (
                  <img
                    src={media_url}
                    alt={caption}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                ) : (
                  <video class="w-full" controls>
                    <source src={media_url} type="video/mp4" />
                  </video>
                )}
              </div>
            ))}
        </div>
      </div>
    </Layout>
  );
}

async function loadData() {
  try {
    const {
      data: {
        mainMenu,
        footerMenu,
        footerMenu2,
        mobileMenu,
        siteSeo,
        productCategories,
      },
    } = await client.query({
      query: NAV_QUERY,
    });
    const { data } = await client.query({
      query: PRODUCTS_AND_CATEGORIES_QUERY,
    });
    return {
      mainMenu: mainMenu.nodes,
      footerMenu: footerMenu.nodes,
      footerMenu2: footerMenu2.nodes,
      mobileMenu: mobileMenu.nodes,
      siteSeo: siteSeo.schema,
      productCategories: productCategories.nodes,
      heroCarousel: data?.heroCarousel?.nodes[0]?.children?.nodes
        ? data.heroCarousel.nodes[0].children.nodes
        : [],
      homePage: data?.pageBy,
    };
  } catch (error) {
    return null;
  }
}

export async function getStaticProps() {
  const url = `https://graph.instagram.com/me/media?fields=id,media_type,caption,media_url&access_token=${process.env.INSTAGRAM_KEY}`;
  const media = await fetch(url);
  const feed = await media.json();

  let data = await loadData();
  if (!data) data = await loadData();
  if (!data) data = await loadData();
  if (!data) data = await loadData();
  if (!data) data = await loadData();

  return {
    props: { ...data, images: feed.data },
    revalidate: 3600,
  };
}
