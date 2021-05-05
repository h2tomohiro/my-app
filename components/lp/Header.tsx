import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-yellow-500">
      <header className="container h-16 flex space-x-4 items-center">
        <Link href="">
          <a href="/"></a>
        </Link>
        <p className="text-white font-bold text-2xl">event</p>
        <span className="flex-1 h-10"></span>
        <Link href="/mypage">
          <a>マイページ</a>
        </Link>
        <Link href="/create">
          <a>イベントを作成</a>
        </Link>
        <div className="bg-gray-600 w-10 h-10 rounded-full"></div>
      </header>
    </div>
  );
};

export default Header;
