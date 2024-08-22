import { gql } from '@apollo/client';
import client from '../src/components/ApolloClient';

// Import các truy vấn GraphQL cần thiết
import { PAGE_SLUGS } from '../src/queries/page-by-slug';
import { PRODUCT_CATEGORIES_SLUGS } from '../src/queries/product-by-category-slug';
import { PRODUCT_SLUGS } from '../src/queries/product-by-slug';

const Sitemap = () => null; // Component này không cần render gì cả

export const getServerSideProps = async ({ res }) => {
    try {
        // 1. Lấy danh sách các trang
        // const { data: pagesData } = await client.query({
        //   query: PAGE_SLUGS,
        // });


        // 2. Lấy danh sách các danh mục sản phẩm
        // const { data: productCategoriesData } = await client.query({
        //  query: PRODUCT_CATEGORIES_SLUGS,
        // }); 

        // 3. Lấy danh sách các sản phẩm
        const { data: productsData } = await client.query({
            query: PRODUCT_SLUGS,
        });

        // 4. Tạo các URL cho sitemap
        // const pages = pagesData.pages.nodes.map((page) => `/${page.slug}`);

        // const productCategories = productCategoriesData.data.productCategories.nodes.map(
        //   (category) => `/danh-muc/${category.slug}`
        // );
        const products = productsData.products.nodes.map(
            (product) => `/cua-hang/${product.slug}`
        );

        // 5. Tạo nội dung XML của sitemap
        const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>https://longwebstudio.net/</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
        </url>
      ${[
                // ...pages, 
                //...productCategories,
                ...products
            ]
                .map(
                    (url) => `<url>
        <loc>https://longwebstudio.net${url}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>`
                )
                .join('')}
    </urlset>`;

        // 6. Thiết lập header và trả về response
        res.setHeader('Content-Type', 'text/xml');
        res.write(sitemapXml);
        res.end();

        return {
            props: {},
        };
    } catch (error) {
        console.error('Error generating sitemap:', error);
        res.statusCode = 500;
        res.end();
        return {
            props: {},
        };
    }
};

export default Sitemap;