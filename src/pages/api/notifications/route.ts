import { NextResponse } from 'next/server';
import { readData } from '../../utils/data';

export async function GET() {
  const data = readData();
  const notifications = data.questions.filter((q) => q.rating < 2);

  return NextResponse.json({ notifications });
}
