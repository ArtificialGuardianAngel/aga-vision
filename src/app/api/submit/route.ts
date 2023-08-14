import schema from '@/lib/schemas/submition-form.schema';
import slack from 'slack';
import { NextResponse } from 'next/server';
import { SLACK_CHANNELS } from '@/utils/slack.constants';

export const POST = async (request: Request) => {
  const data = await request.json();
  const validation = schema.safeParse(data);
  if (!validation.success) {
    return NextResponse.json({ message: validation.error }, { status: 403 });
  }
  slack.chat.postMessage({
    token: process.env['NEXT_SLACK_API_KEY'],
    channel: SLACK_CHANNELS.submittion,
    text: JSON.stringify(data, null, 2),
  });
  return NextResponse.json({ message: 'Ok' }, { status: 201 });
};
