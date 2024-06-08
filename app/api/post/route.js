import { NextResponse } from "next/server";
import z from 'zod';
import generateUniqueId from "@/utils/newid";
import connectDB from "@/utils/db";
import Post from "@/models/Post";
import { auth } from "@/auth";
import signuploadform from "@/utils/uploadSignature";

export async function POST(request) {
    const body = await request.json();

    const session = await auth();
    if (!session) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
    const userID = session.user.id;

    try {
        console.log('connecting----🛠️')
        await connectDB();
        console.log('✅:::::::::connected')

        const result = await Post.create({
            postID: generateUniqueId(),
            content: body.content,
            author: userID,
            date: Date.now(),
            media: body?.media,
            comments: [],
            tags: body?.tags,
            likes: 0,
            dislikes: 0,
            views: 0
        });
        return NextResponse.json({ message: "OK", result }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}


export async function GET() {
    const sig = signuploadform();
    const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
    const apiKey = process.env.CLOUDINARY_API_KEY;
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