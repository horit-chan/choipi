'use client';

export default function Card() {
  return (
    <div className="m-4 flex w-140 rounded-md bg-white p-4 shadow-md">
      <div className="h-40 w-40 rounded-md bg-gray-300"></div>
      <div className="ml-4 flex flex-col">
        <h2>タイトル</h2>
        <div>元商品</div>
        <div>カテゴリ</div>
      </div>
    </div>
  );
}
