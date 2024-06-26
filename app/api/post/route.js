import { NextResponse } from "next/server";
import Post from "../../../models/Post";
import { ObjectId } from "mongodb";

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const postID = searchParams.get('postID');
  const _id = new ObjectId(postID);

  try {
    const result = await Post.findById(_id)
      .populate({
        path: "author",
        select: "name profilePic userName _id",
      })
      .populate({
        path: "comments",
        options: { limit: 10 },
        populate: {
          path: "author",
          select: "name profilePic userName _id",
        },
      });
    return NextResponse.json({ message: "OK", result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}