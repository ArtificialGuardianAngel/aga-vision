import { NextResponse } from 'next/server';
import slack from 'slack';
import schema from '@/lib/schemas/hackathon-form.schema';
import { sendEmail } from '../email/sender';
import { SLACK_CHANNELS } from '@/utils/slack.constants';

export const POST = async (request: Request) => {
  const data = await request.json();
  const validation = schema.safeParse(data);
  if (!validation.success) {
    return NextResponse.json({ message: validation.error }, { status: 403 });
  }

  let htmlTemplate = '';

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      htmlTemplate +=
        '<b>' +
        `${key.charAt(0).toUpperCase()}${key.slice(1)}:` +
        '</b>\r\n' +
        data[key] +
        '<br>';
    }
  }

  sendEmail({
    to: ['agnes@liv.it', 'aga@nuah.org'],
    replyTo: 'aga@nuah.org',
    sender: 'AGA',
    from: 'AGA - Artificial Guardian Angel',
    subject: 'Hackathon form',
    html: htmlTemplate,
    textEncoding: 'base64',
  });

  slack.chat.postMessage({
    token: process.env['NEXT_SLACK_API_KEY'],
    channel: SLACK_CHANNELS.hackathon,
    text: JSON.stringify(data, null, 2),
  });

  return NextResponse.json({ message: 'Ok' }, { status: 200 });
};
