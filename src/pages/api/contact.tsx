import nodemailer from "nodemailer";
import { google } from "googleapis";
import { NextApiRequest, NextApiResponse } from "next";

type Body = {
    name: String;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, message } = req.body as any;

  const OAuth2 = google.auth.OAuth2;

  const OAuth2Client = new OAuth2(
    process.env.NEXT_PUBLIC_GOOGLE_GMAIL_CLIENT_ID,
    process.env.NEXT_PUBLIC_GOOGLE_GMAIL_CLIENT_SECRET,
    process.env.NEXT_PUBLIC_GOOGLE_GMAIL_REDIRECT_URI
  );

  OAuth2Client.setCredentials({
    refresh_token: process.env.NEXT_PUBLIC_GOOGLE_GMAIL_REFRESH_TOKEN
  });

  const accessToken = new Promise((resolve, reject) => {
    OAuth2Client.getAccessToken((err, token) => {
        if(err) reject(err);
        resolve(token);
    });
  });

  const transporter = nodemailer.createTransport({
    /** @ts-ignore */
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        type: "OAuth2",
        user: "renanzanoti@gmail.com",
        clientId: process.env.NEXT_PUBLIC_GOOGLE_GMAIL_CLIENT_ID,
        accessToken,
        clientSecret: process.env.NEXT_PUBLIC_GOOGLE_GMAIL_CLIENT_SECRET,
        refreshToken: process.env.NEXT_PUBLIC_GOOGLE_GMAIL_REFRESH_TOKEN
    }
  });

  const result = await transporter.sendMail({
    from: "Nodemailer OAuth2",
    to: "rh.zanoti@gmail.com",
    subject: "Teste",
    text: "Hello World"
  });
  
  return res.status(200).json({ helo: "world :)", result });
};