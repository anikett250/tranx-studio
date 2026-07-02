import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, message } = await req.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Please fill all required fields." },
        { status: 400 }
      );
    }

    await transporter.sendMail({
      from: `"Tranx Studio" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `New Enquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height:1.6">
          <h2>📩 New Contact Form Submission</h2>

          <table style="border-collapse: collapse;">
            <tr>
              <td><strong>Name:</strong></td>
              <td>${name}</td>
            </tr>

            <tr>
              <td><strong>Email:</strong></td>
              <td>${email}</td>
            </tr>

            <tr>
              <td><strong>Phone:</strong></td>
              <td>${phone || "Not provided"}</td>
            </tr>
          </table>

          <h3>Message</h3>

          <p>${message.replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to send message.",
      },
      {
        status: 500,
      }
    );
  }
}