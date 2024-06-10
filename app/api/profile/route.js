import { NextResponse } from "next/server";
import connectDB from '../../../utils/db';
import Profile from '../../../models/Profile';
import { auth } from "@/auth";
import { ObjectId } from "mongodb";

export async function POST(request) {
    const body = await request.json();
    try {
        console.log('connecting----🛠️')
        await connectDB();
        console.log('✅:::::::::connected')
        const userID = new ObjectId(body.id);
        let profile = await Profile.findOne({ userID });

        if (!profile) {
            profile = await Profile.create({
                userID,
                userName: body.name + "-" + Math.random().toString(36).substr(2, 9),
                profilePic: body.image,
                ...body,
            });
        }
        const result = profile;
        return NextResponse.json({ message: "OK", result }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}

export async function GET() {
    const session = await auth();
    if (!session) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
    // const searchParams = request.nextUrl.searchParams;
    // const id = searchParams.get('pid')
    // const userID = new ObjectId(id || session.user.id);
    const userID = new ObjectId(session.user.id);
    try {
        console.log('connecting----🛠️')
        await connectDB();
        console.log('✅:::::::::connected')
        const result = await Profile.findOne({ userID });
        return NextResponse.json({ message: "OK", result }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}