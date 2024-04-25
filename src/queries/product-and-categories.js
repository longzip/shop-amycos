import { gql } from "@apollo/client";

/**
 * GraphQL categories and products query.
 */
const PRODUCTS_AND_CATEGORIES_QUERY = gql`
  query {
    pageBy(uri: "/") {
      seo {
        fullHead
      }
    }
    heroCarousel: productCategories(where: { slug: "offers" }) {
      nodes {
        id
        children {
          nodes {
            id
            name
            slug
            databaseId
            description
            slug
            image {
              id
              sourceUrl
              srcSet
              title
              altText
              description
            }
          }
        }
      }
    }
  }
`;

export default PRODUCTS_AND_CATEGORIES_QUERY;
