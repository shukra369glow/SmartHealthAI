import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export async function predictMedicine(medicine, stock, usage) {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const prompt = `
You are an expert district health administrator.

Medicine: ${medicine}
Current Stock: ${stock}
Daily Usage: ${usage}

Predict:
1. Days until stock runs out.
2. Risk level (Low, Medium, High).
3. Recommended reorder quantity.
4. Give a short recommendation.

Return ONLY plain text.

Do NOT use markdown.
Do NOT use ** or bullet formatting.

Format exactly like this:

Days until stock runs out: 4 days
Risk Level: High
Recommended reorder quantity: 900 units
Recommendation: Order immediately.
`;

  const result = await model.generateContent(prompt);

  return result.response.text();
}
export async function askAssistant(question) {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const prompt = `
You are an AI Health Assistant for Indian Primary Health Centres (PHCs).

Answer briefly in simple English.

Question:
${question}
`;

  const result = await model.generateContent(prompt);

  return result.response.text();
}