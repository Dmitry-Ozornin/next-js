"use client";
import { getAllPosts } from "@/services/getPosts";

// import { usePostsStore } from "@/store/store";
import Link from "next/link";
import useSWR from "swr";
// import { useEffect, useState } from "react";
// import { useShallow } from "zustand/shallow";

// type Props = {
//   posts: any[];
// };
// const Posts = ({ posts }: Props) => {
//   return (
//     <ul>
//       {posts.map((post: any) => (
//         <li key={post.id}>
//           <Link href={`/blog/${post.id}`}>{post.title}</Link>
//         </li>
//       ))}
//     </ul>
//   );
// };
// export { Posts };

//c zustand
// const Posts = () => {
//   const [posts, loading, getAllPosts] = usePostsStore(
//     useShallow((state) => [state.posts, state.loading, state.getAllPosts]),
//   );

//   useEffect(() => {
//     getAllPosts();
//   }, [getAllPosts]);

//   return loading ? (
//     <h3>Loading posts...</h3>
//   ) : (
//     <ul>
//       {posts.map((post: any) => (
//         <li key={post.id}>
//           <Link href={`/blog/${post.id}`}>{post.title}</Link>
//         </li>
//       ))}
//     </ul>
//   );
// };
// export { Posts };

//c swr
const Posts = () => {
  const { data: posts, isLoading } = useSWR("posts", getAllPosts);
  return isLoading ? (
    <h3>Loading posts...</h3>
  ) : (
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};
export { Posts };
