import Lawyer from "@/models/Lawyer";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";
export async function GET(req) {

  // Search Params
  const searchParams = req.nextUrl.searchParams;
  const search = searchParams.get('search')
  try {
        console.log('connecting----🛠️')
        await connectDB();
        console.log('✅:::::::::connected')
    let result;
    const pipeline = [{
      $search: {
        index: 'searchLawyer',
        text: {
          query: search,
          path: {wildcard : '*'},
          fuzzy: {}
        }
      }
    }]

    if(search){
      result = await Lawyer.aggregate(pipeline)
    }
    else result = await Lawyer.find({});
    
    return NextResponse.json({ message: "OK", result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}