import React from "react";
import Card from "./cards";
import getUrl from "../utils/getUrl";

const Post = async ({ postID }) => {
    const url = new URL(getUrl() + '/api/post');
    url.searchParams.append("id", postID);
    const res = await fetch(url, { method: "GET", cache: "no-store" });

    if (!res.ok) return;
    const post = (await res.json()).result;
    return <Card post={post} />;
};

export default Post;
