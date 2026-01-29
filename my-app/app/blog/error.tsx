'use client';
export default function ErrorWrapper({ error }: { error: Error }) {
  return (
    <div>
      <h1>Ошибка</h1>
      <p>{error.message}</p>
    </div>
  );
}