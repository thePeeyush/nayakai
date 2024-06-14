"use client";
import { useEffect } from "react";
import { useState } from "react";
import SkeletonCard from "./SkeletonCard";
import { CiChat1, CiShare1, CiTimer } from "react-icons/ci";
import { PiTriangleFill, PiTriangleThin } from "react-icons/pi";
import { PiLineSegmentsThin } from "react-icons/pi";
import VedioPlayer from "./VedioPlayer";
import {
    dislikePost,
    likePost,
    unlikePost,
    undislikePost,
} from "../server/action";
import CardBtn from "./CardBtn";
import calculateTime from "../utils/calculateTime";
import getUrl from "../utils/getUrl";

const PostCard = ({ post }) => {
    // const [post, setPost] = useState(post);
    // const [isLoading, setIsLoading] = useState(true);
    // const [error, setError] = useState(null);
    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    const [dislikeCount, setDislikeCount] = useState(0);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             setIsLoading(true);
    //             const res = await fetch(`${getUrl()}/api/post?id=${postID}`);
    //             if (!res.ok) {
    //                 throw new Error("Failed to fetch post");
    //             }
    //             const data = await res.json();
    //             setPost(data.result);
    //             setIsLoading(false);
    //         } catch (error) {
    //             setError(error);
    //             setIsLoading(false);
    //         }
    //     };
    //     fetchData();
    // }, [postID]);

    useEffect(() => {
        if (post) {
            setLikeCount(post.likes);
            setDislikeCount(post.dislikes);
            setIsLiked(post.liked);
            setIsDisliked(post.disliked);
        }
    }, [post]);

    const handleLike = async () => {
        if (isDisliked) {
            setDislikeCount(dislikeCount - 1);
            setIsDisliked(false);
            const result = await undislikePost(postID);
            if (!result) {
                setDislikeCount(dislikeCount + 1);
                setIsDisliked(true);
                return;
            }
        }
        if (isLiked) {
            setLikeCount(likeCount - 1);
            setIsLiked(false);
            const result = await unlikePost(postID);
            if (result) return;
            setLikeCount(likeCount + 1);
            setIsLiked(true);
            return;
        }
        setLikeCount(likeCount + 1);
        setIsLiked(true);
        const result = await likePost(postID);
        if (result) return;
        setLikeCount(likeCount - 1);
        setIsLiked(false);
    };

    const handleDislike = async () => {
        if (isLiked) {
            setLikeCount(likeCount - 1);
            setIsLiked(false);
            const result = await unlikePost(postID);
            if (!result) {
                setLikeCount(likeCount + 1);
                setIsLiked(true);
                return;
            }
        }
        if (isDisliked) {
            setDislikeCount(dislikeCount - 1);
            setIsDisliked(false);
            const result = await undislikePost(postID);
            if (result) return;
            setDislikeCount(dislikeCount + 1);
            setIsDisliked(true);
            return;
        }
        setDislikeCount(dislikeCount + 1);
        setIsDisliked(true);
        const result = await dislikePost(postID);
        if (result) return;
        setDislikeCount(dislikeCount - 1);
        setIsDisliked(false);
    };

    // if (error) return <div>Error: {error.message}</div>;
    // if (isLoading) return <SkeletonCard />;

    const { content, media, comments, views, date,_id: postID } = post;
    return (
        <div className="flex flex-col w-full max-w-lg items-center border border-t-0 mx-auto px-2">
            <div className="flex justify-start w-full py-2 gap-2">
                <img
                    className=" min-w-10 w-10 h-10 rounded-full"
                    src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
                    alt="Tailwind CSS Illustration"
                />
                <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                        <h1 className=" font-semibold">Peeyush</h1>
                        <CiTimer />
                        <h1 className=" text-sm opacity-80">{calculateTime(date)} ago</h1>
                    </div>
                    <h1 className="">{content}</h1>
                </div>
            </div>

            <div className="outline-dashed outline-1 outline-gray-100 carousel carousel-center rounded-md max-h-[500px] relative">
                {media.map((item, index) => {
                    return (
                        <div key={index} className="carousel-item w-full relative">
                            {(item?.filetype.includes("image") || false) && (
                                <img
                                    className="w-full object-cover"
                                    src={item.url}
                                    alt="image"
                                />
                            )}
                            {(item?.filetype.includes("video") || false) && (
                                <VedioPlayer url={item.url} />
                            )}
                            <p
                                className={`absolute bottom-5 right-5 bg-black bg-opacity-40 text-white px-2 py-1 rounded text-xs ${media.length > 1 ? "block" : "hidden"
                                    }`}
                            >
                                {index + 1} / {media.length}
                            </p>
                        </div>
                    );
                })}
            </div>
            <div className="flex w-full justify-between text-sm text-gray-500">
                <CardBtn
                    onClick={handleLike}
                    color={isLiked ? "text-green-500" : "hover:text-green-500"}
                    bgColor={"hover:bg-green-500"}
                    title={likeCount}
                >
                    {isLiked ? <PiTriangleFill /> : <PiTriangleThin />}{" "}
                </CardBtn>
                <CardBtn
                    onClick={handleDislike}
                    color={isDisliked ? "text-red-500" : "hover:text-red-500"}
                    bgColor={"hover:bg-red-500"}
                    title={dislikeCount}
                >
                    {isDisliked ? <PiTriangleFill className="rotate-180" /> : <PiTriangleThin className="rotate-180" />}{" "}
                </CardBtn>
                <CardBtn
                    color={"hover:text-blue-500"}
                    bgColor={"hover:bg-blue-500"}
                    title={comments.length}
                >
                    <CiChat1 />{" "}
                </CardBtn>
                <CardBtn
                    color={"hover:text-yellow-500"}
                    bgColor={"hover:bg-yellow-500"}
                    title={views}
                >
                    <PiLineSegmentsThin />{" "}
                </CardBtn>
                <CardBtn
                    color={"hover:text-pink-500"}
                    bgColor={"hover:bg-pink-500"}
                    title=""
                >
                    <CiShare1 />
                </CardBtn>
            </div>
        </div>
    );
};

export default PostCard;
