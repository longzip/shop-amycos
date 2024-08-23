import { useEffect } from 'react';

const ZaloFollowButton = () => {
    useEffect(() => {
        // Kiểm tra xem SDK của Zalo đã được tải chưa
        if (typeof window !== 'undefined' && !window.ZaloSocialSDK) {
            const script = document.createElement('script');
            script.src = 'https://sp.zalo.me/plugins/sdk.js';
            script.async = true;
            document.body.appendChild(script);
            // Khởi tạo nút "Quan tâm Zalo" sau khi SDK đã tải xong
            script.onload = () => {
                window.ZaloSocialSDK.init();
            };
        }


    }, []);

    return (
        <div
            className="zalo-follow"
            data-oaid="939846860985963068"
            data-layout="1"
            data-color="blue"
            data-size="medium"
        />
    );
};

export default ZaloFollowButton;