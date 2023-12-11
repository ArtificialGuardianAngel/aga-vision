import fs from 'fs/promises';
import path from 'path';
import { google } from 'googleapis';
import { authenticate } from '@google-cloud/local-auth';
import { JSONClient } from 'google-auth-library/build/src/auth/googleauth';
import Mail from 'nodemailer/lib/mailer';
import MailComposer from 'nodemailer/lib/mail-composer';

const SCOPES = ['https://www.googleapis.com/auth/gmail.readonly'];
const TOKEN_PATH = path.join(process.cwd(), 'config/google_token.json');
const CREDENTIALS_PATH = path.join(
  process.cwd(),
  'config/google_credentials.json',
);

async function loadSavedCredentialsIfExist() {
  try {
    const content = await fs.readFile(TOKEN_PATH);
    const credentials = JSON.parse(content as unknown as string);
    return google.auth.fromJSON(credentials);
  } catch (err) {
    return null;
  }
}

async function saveCredentials(client: any) {
  const content = await fs.readFile(CREDENTIALS_PATH);
  const keys = JSON.parse(content as unknown as string);
  const key = keys.installed || keys.web;
  const payload = JSON.stringify({
    type: 'authorized_user',
    client_id: key.client_id,
    client_secret: key.client_secret,
    refresh_token: client.credentials.refresh_token,
  });
  await fs.writeFile(TOKEN_PATH, payload);
}

async function authorize() {
  let client = await loadSavedCredentialsIfExist();
  if (client) {
    return client as unknown as string;
  }
  client = (await authenticate({
    scopes: SCOPES,
    keyfilePath: CREDENTIALS_PATH,
  })) as JSONClient;
  if (client.credentials) {
    await saveCredentials(client);
  }
  return client as unknown as string;
}

const encodeMessage = (message: Buffer) => {
  return Buffer.from(message)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
};

const createMail = async (options: Mail.Options) => {
  const mailComposer = new MailComposer(options);
  const message = await mailComposer.compile().build();
  return encodeMessage(message);
};

export const sendEmail = async (options: Mail.Options) => {
  try {
    const auth = await authorize();
    const rawMessage = await createMail(options);

    const gmail = google.gmail({ version: 'v1', auth });
    await gmail.users.messages.send({
      userId: 'me',
      requestBody: {
        raw: rawMessage,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
