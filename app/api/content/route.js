import { NextResponse } from "next/server";
import connectDB from "@/utils/db";
import Post from "../../../models/Post";

export async function GET(request) {
    const searchParams = request.nextUrl.searchParams;
    const page = searchParams.get('page');
    try {
        console.log('connecting----🛠️')
        await connectDB();
        console.log('✅:::::::::connected')
        const result = await Post.find({level: 0})
        .populate({
            path: "author",
            select: "name profilePic userName _id",
        })
        .sort({createdAt: -1})
        .skip((page - 1) * 10)
        .limit(10);
        return NextResponse.json({ message: "OK", result }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}