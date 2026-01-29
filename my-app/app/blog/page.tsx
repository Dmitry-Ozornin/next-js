import { Metadata } from "next";
import Link from "next/link";

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", { 
    next: { 
      revalidate: 60 // время с каким промежутком делать запросы за новыми постами
    } 
  });

  if(!response.ok) throw new Error('Failed to fetch data');
  return response.json();
}
export const metadata: Metadata = {
  title: "Мой блог",
};
export default async function Blog() {
  const posts = await getData();
  return (
    <>
      <h1>Блог</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id} style={{ marginLeft: "40px" }}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
