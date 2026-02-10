import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function buildTransport() {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const fromAddress = process.env.SMTP_FROM || user;
  const toAddress = process.env.CONTACT_TO || process.env.SMTP_TO || "info@odcch.org";

  // Log configuration status (without sensitive data)
  console.log("Email config check:", {
    hasHost: !!host,
    hasPort: !!port,
    hasUser: !!user,
    hasPass: !!pass,
    hasFrom: !!fromAddress,
    toAddress,
  });

  if (!host || !port || !user || !pass || !fromAddress || !toAddress) {
    const missing = [];
    if (!host) missing.push("SMTP_HOST");
    if (!port) missing.push("SMTP_PORT");
    if (!user) missing.push("SMTP_USER");
    if (!pass) missing.push("SMTP_PASS");
    if (!fromAddress) missing.push("SMTP_FROM");
    if (!toAddress) missing.push("CONTACT_TO");
    
    throw new Error(
      `Email is not configured. Missing: ${missing.join(", ")}. Please add these environment variables in Vercel.`
    );
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  return { transporter, fromAddress, toAddress };
}

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
};

function validatePayload(body: ContactPayload) {
  const name = body.name?.trim();
  const email = body.email?.trim();
  const phone = body.phone?.trim();
  const subject = body.subject?.trim() || "New contact form message";
  const message = body.message?.trim();

  if (!name || !email || !message || !phone) {
    return { error: "Please provide name, email, phone, and message." } as const;
  }

  return {
    data: { name, email, phone, subject, message },
  } as const;
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactPayload;
    const validation = validatePayload(body);

    if ("error" in validation) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }

    const { data } = validation;
    
    let transportConfig;
    try {
      transportConfig = buildTransport();
    } catch (configError) {
      console.error("Transport configuration error:", configError);
      return NextResponse.json(
        { 
          success: false, 
          error: "Email service is not configured. Please contact the administrator.",
          details: process.env.NODE_ENV === 'development' ? String(configError) : undefined
        },
        { status: 503 }
      );
    }

    const { transporter, fromAddress, toAddress } = transportConfig;

    const textBody = `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nSubject: ${data.subject}\n\nMessage:\n${data.message}`;

    const htmlBody = `
      <div style="font-family: sans-serif; line-height: 1.5;">
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, "<br/>")}</p>
      </div>
    `;

    console.log("Attempting to send email to:", toAddress);

    const info = await transporter.sendMail({
      from: `ODCCH Website <${fromAddress}>`,
      replyTo: data.email,
      to: toAddress,
      subject: data.subject || "New contact form message",
      text: textBody,
      html: htmlBody,
    });

    console.log("Email sent successfully:", info.messageId);

    return NextResponse.json({ success: true, message: "Message sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Contact form send failed:", error);
    
    // Provide more detailed error information
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error("Error details:", errorMessage);
    
    return NextResponse.json(
      { 
        success: false, 
        error: "Unable to send message right now. Please try again later.",
        details: process.env.NODE_ENV === 'development' ? errorMessage : undefined
      },
      { status: 500 }
    );
  }
}
