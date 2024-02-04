import Lawyer from "@/models/Lawyer";
import connectDB from "@/utils/db";
import generateUniqueId from "@/utils/newid"; 
import { NextResponse } from "next/server";

export async function POST(request) {
    const {name,dob,phone,degree,state,district,city} = await request.json();
    try {
        console.log('connecting----🛠️')
        await connectDB();
        console.log('✅:::::::::connected')

        const createLawyer = await Lawyer.create({
            uid: generateUniqueId() ,
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