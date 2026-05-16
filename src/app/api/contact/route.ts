import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { firstName, lastName, email, phone, message } = data;

    // Create a transporter using SMTP (User will configure these in .env)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true' || false,
      auth: {
        user: process.env.SMTP_USER || 'jackmhas@gmail.com',
        pass: process.env.SMTP_PASS || 'ojammhvlmveqxnxp',
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER || 'jackmhas@gmail.com',
      to: 'info@maxsolutionz.com',
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${firstName || ''} ${lastName || ''}</p>
        <p><strong>Email:</strong> ${email || ''}</p>
        <p><strong>Phone:</strong> ${phone || ''}</p>
        <p><strong>Message:</strong></p>
        <p>${(message || '').toString().replace(/\n/g, '<br>')}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
