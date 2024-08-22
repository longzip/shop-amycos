import { ApolloClient, ApolloLink, InMemoryCache, createHttpLink } from '@apollo/client';
import fetch from 'node-fetch';

/**
 * Middleware - xử lý trước khi gửi yêu cầu
 * Nếu có token phiên làm việc trong localStorage, thêm nó vào header của yêu cầu GraphQL.
 */
const middleware = new ApolloLink((operation, forward) => {
  /**
   * Nếu có dữ liệu phiên làm việc trong local storage, đặt giá trị làm header phiên làm việc.
   */
  const session = (typeof window !== 'undefined') ? localStorage.getItem("woo-session") : null; // Kiểm tra process.browser

  if (session) {
    operation.setContext(({ headers = {} }) => ({
      headers: {
        "woocommerce-session": `Session ${session}`,
      },
    }));
  }

  return forward(operation);
});

/**
 * Afterware - xử lý sau khi nhận phản hồi
 * Lấy token phiên làm việc mới từ header và lưu vào localStorage cho các yêu cầu GraphQL tiếp theo.
 */
const afterware = new ApolloLink((operation, forward) => {
  return forward(operation).map((response) => {
    // Chỉ xử lý trong trình duyệt
    if (typeof window === 'undefined') {
      return response;
    }

    /**
     * Kiểm tra header phiên làm việc và cập nhật phiên làm việc trong local storage.
     */
    const context = operation.getContext();
    const { headers } = context.response;
    const session = headers.get("woocommerce-session");

    if (session) {
      // Xóa dữ liệu phiên làm việc nếu phiên làm việc bị hủy
      if (session === "false") {
        localStorage.removeItem("woo-session");
      } else if (localStorage.getItem("woo-session") !== session) { 
        // Cập nhật dữ liệu phiên làm việc mới nếu có thay đổi
        localStorage.setItem("woo-session", session);
      }
    }

    return response;
  });
});

// Apollo GraphQL client
const client = new ApolloClient({
  link: middleware.concat(
    afterware.concat(
      createHttpLink({
        uri: process.env.NEXT_PUBLIC_WORDPRESS_URL, // Sử dụng biến môi trường
        fetch: fetch, 
      })
    )
  ),
  cache: new InMemoryCache(),
});

export default client;