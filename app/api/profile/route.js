import { NextResponse } from "next/server";
import connectDB from '../../../utils/db';
import Profile from '../../../models/Profile';
import { ObjectId } from "mongodb";

export async function GET(request) {
    const searchParams = request.nextUrl.searchParams;
    const profileID = searchParams.get('profileID');
    const userID = searchParams.get('userID');
    try {
        let option = { _id: profileID }

        if (!profileID) {
            const ID = new ObjectId(userID);
            option = { userID : ID }
        }

        console.log('connecting--------🛠️')
        await connectDB();
        console.log('✅:::::::::connected')
        const result = await Profile.findOne(option).populate({
            path: "posts",
            options: { limit: 20 },
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