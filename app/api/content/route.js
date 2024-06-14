import { NextResponse } from "next/server";
import Post from "@/models/Post";
import connectDB from "@/utils/db";
import { unstable_noStore } from "next/cache";

export async function GET(request) {
    const searchParams = request.nextUrl.searchParams;
    const page = searchParams.get('page');
    try {
        console.log('connecting----🛠️')
        await connectDB();
        console.log('✅:::::::::connected')
        const result = await Post.find({}).sort({date: -1}).skip((page - 1) * 10).limit(10);
        return NextResponse.json({ message: "OK", result }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}