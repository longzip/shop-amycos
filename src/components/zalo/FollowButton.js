import { useState, useEffect } from 'react'

const ZaloFollowButton = () => {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        // Kiểm tra xem SDK của Zalo đã được tải chưa
        if (typeof window !== 'undefined' && !window.ZaloSocialSDK) {
            console.log("zalo")
            const script = document.createElement('script');
            script.src = 'https://sp.zalo.me/plugins/sdk.js';
            script.async = true;
            document.body.appendChild(script);
            // Khởi tạo nút "Quan tâm Zalo" sau khi SDK đã tải xong
            // script.onload = () => {
            //     window.ZaloSocialSDK.init();
            // };
        }
        setIsClient(true)

    }, []);


    return (
        <>
            {isClient ? (<div class="zalo-follow-only-button" data-oaid="939846860985963068"></div>) : null}
        </>

    );
};

export default ZaloFollowButton;