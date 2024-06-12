import { NextResponse } from "next/server";
import Post from "@/models/Post";
import connectDB from "@/utils/db";
import { unstable_noStore } from "next/cache";

export async function GET() {
    try {
        console.log('connecting----🛠️')
        await connectDB();
        console.log('✅:::::::::connected')
        unstable_noStore();
        const result = await Post.find({},'_id').sort({date: -1});
        return NextResponse.json({ message: "OK", result }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}