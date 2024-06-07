import Lawyer from "@/models/Lawyer";
import connectDB from "@/utils/db";
import generateUniqueId from "@/utils/newid"; 
import { NextResponse } from "next/server";
import {auth} from "../../../../auth";

export async function POST(request) {
    const {name,dob,phone,degree,state,district,city} = await request.json();
    const session = await auth();
    if (!session) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
    const userID = session.user.id;
    console.log(userID);
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

        const result = createLawyer || "db error"
        return NextResponse.json({ message: "OK"
        , result }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}

function getRandomNumber() {
    const randomDecimal = Math.random();
    const randomNumber = Math.floor(randomDecimal * 5) + 1;
    return randomNumber;
  }