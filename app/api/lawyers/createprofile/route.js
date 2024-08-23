import Lawyer from "@/models/Lawyer";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";
import { auth } from "../../../../auth";
import Profile from "../../../../models/Profile";
import { ObjectId } from "mongodb";

export async function POST(request) {
    const { name, dob, phone, degree, state, district, city } = await request.json();
    const session = await auth();
    if (!session) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
    const userID = new ObjectId(session.user.id);
    try {
        console.log('connecting----🛠️')
        await connectDB();
        console.log('✅:::::::::connected')

        const createLawyer = await Lawyer.create({
            uid: userID,
            name: name,
            age: dob,
            phone: phone,
            degree: degree,
            address: [{
                state: state,
                district: district,
                city: city,
            }],
            rating: getRandomNumber(),
        })

        const result = await Profile.findOneAndUpdate(
            { userID },
            { $set: { specific_role: { role: "Lawyer", id: createLawyer._id } } },
            { new: true }
        )
        console.log(result);

        return NextResponse.json({ message: "OK", result }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}

function getRandomNumber() {
    const randomDecimal = Math.random();
    const randomNumber = Math.floor(randomDecimal * 5) + 1;
    return randomNumber;
}