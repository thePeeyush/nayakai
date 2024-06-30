"use client";
import { useEffect } from "react";
import { useState } from "react";
import { CiChat1, CiShare1, CiTimer } from "react-icons/ci";
import { PiTriangleFill, PiTriangleThin } from "react-icons/pi";
import VedioPlayer from "./VedioPlayer";
import { dislikePost, likePost } from "../server/action";
import CardBtn from "./CardBtn";
import calculateTime from "../utils/calculateTime";
import { useOurStore } from "../store/states";
import { toggleCreatePostModal } from "./ModalForPost";
import getUrl from "../utils/getUrl";
import Link from "next/link";
import { BsChevronLeft } from "react-icons/bs";
import PostOptions from "./PostOption";

const PostCard = ({ post, large }) => {
    const { content, media, comments, likes, dislikes, views, createdAt: date, _id: postID, level } = post;
    const { name: authorName, profilePic: authorProfilePic, userName: authorUserName, _id: authorID } = post.author;
    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    const [dislikeCount, setDislikeCount] = useState(0);
    const [copied, setCopied] = useState(false);
    const { setPost, setPostToComment, userLikes, userDislikes } = useOurStore((state) => state);

    useEffect(() => {
        if (post) {
            setLikeCount(likes.length);
            setDislikeCount(dislikes.length);
            setIsLiked(userLikes.includes(postID));
            setIsDisliked(userDislikes.includes(postID));
        }
    }, [post, userLikes, userDislikes]);



    const handleLike = async () => {
        if (isDisliked) {
            setDislikeCount(dislikeCount - 1);
            setIsDisliked(false);
            setLikeCount(likeCount + 1);
            setIsLiked(true);
            const result = await likePost(postID);
            if (result) return;
            setDislikeCount(dislikeCount + 1);
            setIsDisliked(true);
            setLikeCount(likeCount - 1);
            setIsLiked(false);
            return;
        } else if (isLiked) {
            setLikeCount(likeCount - 1);
            setIsLiked(false);
            const result = await likePost(postID);

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
            setDislikeCount(dislikeCount + 1);
            setIsDisliked(true);
            const result = await dislikePost(postID);
            if (result) return;
            setLikeCount(likeCount + 1);
            setIsLiked(true);
            setDislikeCount(dislikeCount - 1);
            setIsDisliked(false);
            return;
        } else if (isDisliked) {
            setDislikeCount(dislikeCount - 1);
            setIsDisliked(false);
            const result = await dislikePost(postID);
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

    const handleComment = async () => {
        const postData = {
            postID,
            level,
            content,
            date,
            authorName,
            authorProfilePic,
            authorUserName,
        }
        setPostToComment(postData);
        toggleCreatePostModal();
    };

    const handleShare = async () => {
        await navigator.clipboard.writeText(`${getUrl()}/post?post=${postID}`);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 3000);
    };

    return (
        <div className={`flex flex-col w-full ${large ? "px-4 border-b-0 border-r h-full overflow-auto " : "max-w-xl"} items-center border-b mx-auto p-2`} >
            <div className="flex justify-start w-full py-2 gap-2">

                {large && <BsChevronLeft className="text-2xl p-2 mt-[2px] cursor-pointer min-w-10 w-10 h-10 rounded-full hover:bg-gray-200 " onClick={() => window.history.back()} />}
                <Link href={`${getUrl()}/profile?id=${authorID}`}>
                    <img
                        className=" min-w-10 w-10 h-10 rounded-full mt-[2px]"
                        src={authorProfilePic}
                        alt="author Image"
                    />
                </Link>
                <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                        <h1 className=" font-semibold  text-sm md:text-base truncate max-w-32 md:max-w-52" style={{ WebkitLineClamp: 1 }}>
                            {authorName}
                        </h1>
                        <p className=" text-xs md:text-sm opacity-80">@{authorUserName}</p>
                        <div className="flex items-center">
                            <CiTimer className="text-xs md:text-sm opacity-80" />
                            <h1 className=" text-xs md:text-sm opacity-80">{calculateTime(date)}</h1>
                        </div>
                    </div>
                    <h1 className={`line-clamp-4 ${large ? "line-clamp-none" : ""}`}>
                        {large ? content : (
                            <Link href={`${getUrl()}/post?post=${postID}`}>
                                {content}
                            </Link>
                        )}
                    </h1>
                </div>
                    <PostOptions postID={postID} />
            </div>

            <div className={`carousel carousel-center rounded-md w-full min-w-full h-auto max-h-[70vh] ${large ? "" : ""} relative`}>
                {media.map((item, index) => {
                    return (
                        <div key={index} className="carousel-item w-full relative min-h-fit">
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
                    onClick={handleComment}
                    color={"hover:text-blue-500"}
                    bgColor={"hover:bg-blue-500"}
                    title={comments.length}
                >
                    <CiChat1 />{" "}
                </CardBtn>
                <CardBtn
                    onClick={handleShare}
                    color={"hover:text-pink-500"}
                    bgColor={"hover:bg-pink-500"}
                    title={copied ? "copied" : ""}
                >
                    <CiShare1 />
                </CardBtn>
            </div>
        </div>
    );
};

export default PostCard;
