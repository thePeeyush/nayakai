import { NextResponse } from "next/server";
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request) {
  const body = await request.json();
  const prompt = body.prompt;
  const Query = "You are an Indian Legal Expert and Advisor. Answer in less than 80 words in very concise and simple points";

  try {
    const chatResponse = await openai.chat.completions.create({
      messages: [{ role: 'system', content: Query },
                 { role: 'user', content: prompt }],
      model: "gpt-3.5-turbo",
    });

    const result = chatResponse.choices[0].message || "I'm offline, try again later";
      return NextResponse.json({ message: "OK", result }, { status: 201 });
    } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
