import { NextResponse } from "next/server";
import Post from "@/models/post";
import connectDB from "@/utils/db";

export async function GET() {
    try {
        console.log('connecting----🛠️')
        await connectDB();
        console.log('✅:::::::::connected')

        const result = await Post.find({}).sort({date: -1});
        return NextResponse.json({ message: "OK", result }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}