"use client";
// import { usePostsStore } from "@/store/store";
// import Link from "next/link";
import { useState } from "react";
import { getPostsBySearch } from "@/services/getPosts";

import { FormEventHandler } from "react";
import useSWR from "swr";

// type Props = {
//   onSearch: (value: any[]) => void;
// };

// const PostSearch = ({ onSearch }: Props) => {
//   const [search, setSearch] = useState("");

//   const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
//     event.preventDefault();
//     const posts = await getPostsBySearch(search);
//     onSearch(posts);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="search"
//         placeholder="search"
//         value={search}
//         onChange={(event) => setSearch(event.target.value)}
//       />
//       <button type="submit">Search</button>
//     </form>
//   );
// };
// export { PostSearch };

//с zustand
// export const PostSearch = () => {
//   const [search, setSearch] = useState("");
//   const getPostsBySearch = usePostsStore((state) => state.getPostsBySearch);
//   const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
//     event.preventDefault();
//     await getPostsBySearch(search);
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="search"
//         placeholder="search"
//         value={search}
//         onChange={(event) => setSearch(event.target.value)}
//       />
//       <button type="submit">Search</button>
//     </form>
//   );
// };

// c swr
export const PostSearch = () => {
  const { mutate } = useSWR("posts");

  const [search, setSearch] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const post = await getPostsBySearch(search);
    mutate(post);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};
