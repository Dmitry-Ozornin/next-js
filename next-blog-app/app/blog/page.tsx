import { Posts } from "@/components/Posts";
import { PostSearch } from "@/components/PostSearch";

// import { getAllPosts } from "@/services/getPosts";
// import { usePostsStore } from "@/store/store";
// import { useEffect } from "react";
import { Metadata } from "next";
// import { useEffect, useState } from "react";
// import { shallow, useShallow } from "zustand/shallow";

export const metadata: Metadata = {
  title: "Blog | Next App",
};

export default function Blog() {
  // const [posts, setPosts] = useState<any[]>([]);
  // const [loading, setLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   document.title = "Blog | Next App";
  //   getAllPosts()
  //     .then(setPosts)
  //     .finally(() => setLoading(false));
  // }, []);

  // c помощью zustand

  // return (
  //   <>
  //     <h1>Blog page</h1>
  //     <PostSearch />
  //     <Posts />
  //   </>
  // );

  // c помощью swr установка npm i swr

    return (
      <>
        <h1>Blog page</h1>
        <PostSearch />
        <Posts />
      </>
    );
}
