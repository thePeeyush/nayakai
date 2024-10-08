"use client";
import getUrl from "../utils/getUrl";
import PostCard from "../components/PostCard";
import SkeletonCard from "../components/SkeletonCard";
import { useEffect } from "react";
import { useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function MorePosts() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
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
      console.log(posts)
      setPage((prevPage) => prevPage + 1);
      setPosts((prevPosts) => [...prevPosts, ...posts]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {posts.length > 0 &&
        posts.map((post, index) => {
          return <PostCard key={post._id} post={post} />;
        })}
      <div ref={loaderRef} className="w-full">
        <Loading />
      </div>
    </>
  );
}

function Loading() {
  return (
    <div className="flex flex-col items-center w-full gap-4 max-w-xl mx-auto">
      <SkeletonCard />
      <SkeletonCard />
    </div>
  );
}