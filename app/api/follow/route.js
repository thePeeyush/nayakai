import {  NextResponse } from "next/server";
import { auth } from "../../../auth";
import connectDB from "../../../utils/db";
import Profile from "../../../models/Profile";

export async function POST(request) {
  const body = await request.json();
  try {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  connectDB();
    const profile = await Profile.findOne({ userID: session.user.id });
    if (!profile) {
      return NextResponse.json({ message: "Profile not found" }, { status: 404 });
    }
    if(profile.following.includes(body.profileID)){
        await profile.updateOne({ $pull: { following: body.profileID } });
        await Profile.updateOne({ _id: body.profileID }, { $pull: { followers: profile._id } });
        return NextResponse.json({ message: "OK" }, { status: 201 });
    }
    await profile.updateOne({ $push: { following: body.profileID } });
    await Profile.updateOne({ _id: body.profileID }, { $push: { followers: profile._id } });
    return NextResponse.json({ message: "OK" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}