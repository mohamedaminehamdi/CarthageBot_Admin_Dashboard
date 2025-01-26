import { NextResponse } from 'next/server';
import { readData } from '../../utils/data';

export async function GET() {
  const data = readData();
  const frequency: any = {};
  const ratings: any = {};

  data.questions.forEach((question) => {
    frequency[question.category] = (frequency[question.category] || 0) + 1;
    ratings[question.category] = ratings[question.category] || [];
    ratings[question.category].push(question.rating);
  });

  return NextResponse.json({ frequency, ratings });
}
