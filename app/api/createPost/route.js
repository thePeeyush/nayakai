import { NextResponse } from "next/server";
import z from 'zod';
import connectDB from "@/utils/db";
import Post from "@/models/Post";
import Profile from "@/models/Profile";
import { auth } from "@/auth";
import signuploadform from "@/utils/uploadSignature";
import { ObjectId } from "mongodb";

export async function POST(request) {
  const body = await request.json();
  console.log(body);

  const session = await auth();
  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  const userID = new ObjectId(session.user.id);

  try {
    console.log('connecting----🛠️')
    await connectDB();
    console.log('✅:::::::::connected')

    const profile = await Profile.findOne({ userID });
    if (!profile) {
      return NextResponse.json({ message: "Profile not found" }, { status: 404 });
    }
    const result = await Post.create({
      content: body.content,
      author: profile._id,
      media: body?.media,
      tags: body?.tags,
      level: body?.level || 0,
    });

    if (body?.postID) {
      await Post.updateOne({ _id: new ObjectId(body.postID) }, { $push: { comments: result._id } });
      await profile.updateOne({ $push: { comments: result._id } });
      return NextResponse.json({ message: "OK", result }, { status: 201 });
    }

    await profile.updateOne({ $push: { posts: result._id } });
    return NextResponse.json({ message: "OK", result }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}


export async function GET() {
  const sig = signuploadform();
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const session = await auth();
  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  try {
    const result = {
      signature: sig.signature,
      timestamp: sig.timestamp,
      cloudname: cloudName,
      apikey: apiKey
    }
    return NextResponse.json({ message: "OK", result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}