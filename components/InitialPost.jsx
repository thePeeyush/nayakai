import { Suspense } from "react";
import getUrl from "../utils/getUrl";
import PostCard from "../components/PostCard";
import SkeletonCard from "../components/SkeletonCard";
const InitialPost = () => {

    return (
        <Suspense fallback={<Loading/>}>
            <PostsSection />
        </Suspense>
    )
}

const fetchInitialPosts = async () => {
    // try {
    //     const url = `${getUrl()}/api/content?page=${1}`;
    //     const res = await fetch(url, { method: "GET", cache: "no-store" });
    //     const posts = (await res.json()).result;
    //     return posts;
    // } catch (error) {
    //     console.log(error);
    // }
};

const PostsSection = async () => {
    const posts = await fetchInitialPosts();
    return (
        <>
            {posts?.length > 0 && posts.map((post) => {
                return <PostCard key={post._id} post={post} />
            })}
        </>
    )
}

function Loading() {
    return (
      <div className="w-full overflow-y-auto lg:-ml-36 pt-20 lg:pt-8 gap-4 overflow-hidden">
        <div className="flex flex-col items-center w-full gap-4 max-w-xl mx-auto">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      </div>
    );
  }



export default InitialPost