import  Link  from "next/link";
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-blue-600">Добро пожаловать на мой сайт!</h1>
        <p className="text-gray-600 mt-2">Это моя первая страница на Next.js</p>
        <Link href={"/about"}>Страница обо мне</Link>
      </header>

      <main>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">О чем этот сайт?</h2>
          <div className="bg-white p-4 rounded-lg shadow">
            <p>Здесь я буду изучать Next.js и создавать крутые проекты.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Что я уже узнал:</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Next.js — это фреймворк для React</li>
            <li>Роутинг через папки в app/</li>
            <li>Серверные компоненты по умолчанию</li>
            <li>Tailwind CSS для стилей</li>
          </ul>
        </section>
      </main>

      <footer className="mt-8 pt-4 border-t">
        <p className="text-gray-500">Создано с помощью Next.js • {new Date().getFullYear()} год</p>
      </footer>
    </div>
  );
}
