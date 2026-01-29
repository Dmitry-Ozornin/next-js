import { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
};
async function getData(id: string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60, // время с каким промежутком делать запросы за новыми постами
    },
  });
  return response.json();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const post = await getData(id);
  return {
    title: post.title,
    description: post.body,
    openGraph: {
      images: [{ url: "https://example.com/og.png" }],
    },
  };
}

export default async function Post({ params }: Props) {
  const { id } = await params;
  const post = await getData(id);
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
}
