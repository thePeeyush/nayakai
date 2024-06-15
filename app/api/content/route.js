import { NextResponse } from "next/server";
import Post from "@/models/Post";
import connectDB from "@/utils/db";

export async function GET(request) {
    const searchParams = request.nextUrl.searchParams;
    const page = searchParams.get('page');
    try {
        console.log('connecting----🛠️')
        await connectDB();
        console.log('✅:::::::::connected')
        const pipeline = [
            {
              $lookup: {
                from: "profiles",
                localField: "author",
                foreignField: "_id",
                as: "authorDetails",
              },
            },
            {
              $unwind: "$authorDetails",
            },
            {
              $project: {
                dislikes: 1,
                views: 1,
                date: 1,
                content: 1,
                tags: 1,
                comments: 1,
                likes: 1,
                "authorDetails.userName": 1,
                "authorDetails.name": 1,
                "authorDetails.profilePic": 1,
                _id: 1,
                author: 1,
                media: 1,
              },
            },
          ]
        const result = await Post.aggregate(pipeline).sort({date: -1}).skip((page - 1) * 10).limit(10);
        return NextResponse.json({ message: "OK", result }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}