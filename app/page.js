"use client";
import getUrl from "../utils/getUrl";
import Post from "../components/PostCard";
import SkeletonCard from "../components/SkeletonCard";
import { useEffect } from "react";
import { useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Home() { 
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);
  const loaderRef = useRef(null);
  const isInView = useInView(loaderRef);

  useEffect(() => {
    if (isInView) {
      fetchPosts({ page: page + 1 });
    }
  }, [isInView]);

  const fetchPosts = async ({ page }) => {
    try {
      const url = `${getUrl()}/api/content?page=${page}`;
      const res = await fetch(url, { method: "GET", cache: "no-store" });
      const posts = (await res.json()).result;
      if (posts.length === 0) return;
      setPage((prevPage) => prevPage + 1);
      setPosts((prevPosts) => [...prevPosts, ...posts]);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="w-full overflow-y-auto lg:-ml-36 pt-20 lg:pt-16 gap-4 sm:p-4">
      {posts.length > 0 &&
        posts.map((element, index) => {
          return <Post key={index} post={element} />;
        })}
      <span
        ref={loaderRef}
        className="h-[1px] w-full"
      ></span>
      <Loading />
    </div>
  );
}

function Loading() {
  return (
    <div className="flex flex-col items-center w-full p-2 gap-4 max-w-xl mx-auto">
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  );
}
