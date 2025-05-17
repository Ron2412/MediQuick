console.log("Chat is working");

import 'dotenv/config';
import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.GOOGLE_GENAI_API_KEY;
if (!apiKey) {
  throw new Error("Missing Google GenAI API key");
}

const ai = new GoogleGenAI({ apiKey });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: "Explain how AI works in a few words",
  });
  // Adjust this line if response structure is different
  console.log(response.text || response.content || response);
}

main();