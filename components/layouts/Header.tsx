'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-orange-300">
      <div className="flex p-6">
        <Link href="/" className="text-2xl font-bold">
          choipi
        </Link>

        <div className="ml-6">ちょい足しレシピ共有サイト</div>

        <Link href="login" className="rounded-xl border-4 p-1">
          ログイン
        </Link>

        <Link href="mypage" className="rounded-xl border-4 p-1">
          マイページ
        </Link>
      </div>
    </header>
  );
}
