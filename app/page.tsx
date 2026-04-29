import Card from '@/components/layouts/Card';

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">一覧</h1>
      <div>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
}
