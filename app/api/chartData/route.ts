import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const chartType = searchParams.get('type');

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant that provides data for charts."
        },
        {
          role: "user",
          content: `Generate sample data for a ${chartType} chart. For a line chart, provide an array of objects with 'date' and 'value' properties. For a bar chart, provide an array of objects with 'category' and 'value' properties. Respond with a JSON array of objects.`
        }
      ],
      temperature: 0.7,
    });

    const data = JSON.parse(completion.choices[0].message.content || '[]');
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching data from OpenAI:', error);
    return NextResponse.json({ error: 'Failed to fetch chart data' }, { status: 500 });
  }
}