import { gql } from "@apollo/client";

export const PRODUCT_CATEGORIES_SLUGS = gql`
  query ProductCategories {
    productCategories(first: 100) { # Giới hạn số lượng danh mục để tránh lỗi "phân trang quá mức"
      nodes {
        id
        slug
      }
    }
  }
`;