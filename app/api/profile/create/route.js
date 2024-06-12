import {  NextResponse } from "next/server";
import connectDB from "../../../../utils/db";
import Profile from "../../../../models/Profile";
import { ObjectId } from "mongodb";
import { auth } from "../../../../auth";


export async function GET() {
  try {
    const session = await auth();
    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
    await connectDB();
    const userID = new ObjectId(session.user.id);
    const result = await Profile.findOne({ userID });
    if (!result) {
      const profile = await Profile.create({
        userID,
        userName: session.user.name.slice(0, 5) + Math.random().toString(36).substr(2, 9),
        name: session.user.name,
        profilePic: session.user.image,
      });
      return NextResponse.json({ message: "OK", result: profile }, { status: 201 });
    }
    return NextResponse.json({ message: "OK", result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function PUT(request) {
  const body = await request.json();
  console.log(body);
  try {
    const session = await auth();
    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
    const id = new ObjectId(session.user.id);
    await connectDB();
    const profile = await Profile.findOne({ userName: body.name });
    if (profile) {
      return NextResponse.json({ message: "UserName already exists" }, { status: 400 });
    }
    const result = await Profile.findOneAndUpdate({ userID: id }, {
      $set: { 
        profilePic: body.image,
        bio: body.bio,
        userName: body.name,
        name: body.name
       }
    }, { new: true });
    return NextResponse.json({ message: "OK", result }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}