// pages/404.js

import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Oops! Trang không tồn tại</h1>
      <p className="text-lg mb-8">Có vẻ như bạn đã đi lạc. Hãy quay trở lại trang chủ nhé.</p>
      <Link href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Về trang chủ
      </Link>
    </div>
  );
}