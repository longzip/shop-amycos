import { useEffect } from 'react';

const ZaloChatWidget = () => {
  useEffect(() => {
    // Kiểm tra xem SDK của Zalo đã được tải chưa
    if (typeof window !== 'undefined' && !window.ZaloSocialSDK) {
      const script = document.createElement('script');
      script.src = 'https://sp.zalo.me/plugins/sdk.js';
      script.async = true;
      document.body.appendChild(script);

      // Khởi tạo Zalo Chat Widget sau khi SDK đã tải xong
      script.onload = () => {
        window.ZaloSocialSDK.init();

        // Tạo element chứa widget
        const container = document.createElement('div');
        container.id = 'zalo-chat-widget';
        container.setAttribute('data-oaid', process.env.ZALO_OA_ID); // Thay bằng ID OA của bạn
        container.setAttribute('data-welcome-message', 'Rất vui khi được hỗ trợ bạn!');
        container.setAttribute('data-autopopup', "0");
        document.body.appendChild(container);
      };
    }
  }, []);

  return null; // Component này không render gì cả, chỉ thực hiện tác vụ tải SDK và khởi tạo widget
};

export default ZaloChatWidget;