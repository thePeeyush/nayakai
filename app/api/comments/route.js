import {  NextResponse } from "next/server";
import connectDB from "../../../utils/db";
import Profile from "../../../models/Profile";
import { auth } from "../../../auth";
import Comment from "../../../models/Comment";
import { ObjectId } from "mongodb";
import Post from "../../../models/Post";

export async function POST(request) {
    const body = await request.json();

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
        const result = await Comment.create({
            content: body.content,
            author: profile._id,
            referenceID: body.referenceID
        });

        if(body.reference === 'post') {
            await Post.updateOne({ _id: body.referenceID }, { $push: { comments: result._id } });
        }

        if(body.reference === 'comment') {
            await Comment.updateOne({ _id: body.referenceID }, { $push: { replies: result._id } });
        }

        await profile.updateOne({ $push: { comments: result._id } });

        return NextResponse.json({ message: "OK", result }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}