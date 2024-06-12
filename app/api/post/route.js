import { NextResponse } from "next/server";
import Post from "../../../models/Post";
import { ObjectId } from "mongodb";

export async function GET(request) {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');
    const _id = new ObjectId(id);
  try {
    const result = await Post.findOne({_id});
    return NextResponse.json({ message: "OK", result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}