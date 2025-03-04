import { gql } from "@apollo/client";

export const PRODUCT_BY_SLUG_QUERY = gql`
  query Product($slug: ID!) {
    product(id: $slug, idType: SLUG) {
      id
      productId: databaseId
      averageRating
      slug
      description
      shortDescription
      galleryImages {
        nodes {
          id
          title
          altText
          description
          mediaItemUrl
          sourceUrl
          url: sourceUrl
        }
      }
      image {
        id
        uri
        altText
        description
        title
        srcSet
        url: sourceUrl
        sourceUrl
      }
      name
      ... on SimpleProduct {
        price
        id
        regularPrice
        stockStatus
        stockQuantity
        sku
        seo {
          title
          metaDesc
          fullHead
        }
      }
      ... on VariableProduct {
        price
        id
        regularPrice
        stockStatus
        stockQuantity
        sku
        seo {
          title
          metaDesc
          fullHead
        }
      }
      ... on ExternalProduct {
        price
        id
        regularPrice
        externalUrl
        buttonText
        seo {
          title
          metaDesc
          fullHead
        }
      }
      ... on GroupProduct {
        products {
          nodes {
            ... on SimpleProduct {
              id
              price
              regularPrice
              seo {
                title
                metaDesc
                fullHead
              }
            }
          }
        }
        id
      }
      productCategories {
        nodes {
          products(first: 5, where: { stockStatus: IN_STOCK }) {
            nodes {
              id
              productId: databaseId
              averageRating
              slug
              image {
                id
                uri
                title
                srcSet
                sourceUrl
              }
              name
              ... on SimpleProduct {
                price
                regularPrice
                id
              }
              ... on VariableProduct {
                price
                regularPrice
                id
              }
              ... on ExternalProduct {
                price
                id
                regularPrice
                externalUrl
                buttonText
              }
              ... on GroupProduct {
                products {
                  nodes {
                    ... on SimpleProduct {
                      id
                      regularPrice
                      price
                    }
                  }
                }
                id
              }
            }
          }
        }
      }
    }
  }
`;

export const PRODUCT_SLUGS = gql`
  query Products {
    products(first: 500) {
      nodes {
        id
        slug
      }
    }
  }
`;
