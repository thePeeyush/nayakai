import getUrl from "../../utils/getUrl";
import PostCard from "../../components/PostCard";
import SkeletonCard from "../../components/SkeletonCard";
import { Suspense } from "react";

export default function Post({ searchParams }) {
    return (

        <Suspense fallback={<Loading />}>
            <PostSection searchParams={searchParams} />
        </Suspense>
    );
}

const fetchPost = async (postID) => {
    try {
        const url = `${getUrl()}/api/post?postID=${postID}`;
        const res = await fetch(url, { method: "GET", cache: "no-store" });
        if (!res.ok) {
            throw new Error(`Something went wrong: ${res.status}`);
        }
        return (await res.json()).result;

    } catch (error) {
        console.log(error);
    }
};

const PostSection = async ({ searchParams }) => {
    const post = await fetchPost(searchParams.post);
    const comments = post?.comments;
    return (
        <div className="w-full lg:pt-2 pt-16 overflow-y-scroll lg:overflow-hidden flex flex-col lg:flex-row">
            <div className="w-full h-auto">
                <PostCard large={true} post={post} />
            </div>
            <div className="min-w-fit w-ful">
                <h1 className=" w-full text-current lg:text-start mx-auto text-2xl bg-base-200 p-4 text-blue-5 font-light min-w-[300px]">comments<span className="text-gray-400"> ({comments.length})</span></h1>
                <div className="flex flex-col gap-4 lg:overflow-y-scroll h-full pb-40">
                    {
                        comments?.length > 0 && comments.map((comment) => {
                            return <PostCard key={comment._id} post={comment} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

function Loading() {
    return (
        <div className="w-full lg:pt-2 pt-16  overflow-y-scroll lg:overflow-hidden flex flex-col lg:flex-row">
            <SkeletonCard />
            <div className="min-w-fit w-ful">
                <h1 className=" w-full text-current lg:text-start mx-auto text-2xl bg-base-200 p-4 text-blue-5 font-light min-w-[300px]">comments</h1>
                <div className="flex flex-col gap-4 lg:overflow-y-scroll h-full pb-40 min-w-72">
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                </div>
            </div>
        </div>
    );
}
