import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function buildTransport() {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const fromAddress = process.env.SMTP_FROM || user;
  const toAddress = process.env.VOLUNTEER_TO || process.env.CONTACT_TO || "info@odcch.org";

  // Log configuration status (without sensitive data)
  console.log("Volunteer email config check:", {
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
    if (!toAddress) missing.push("VOLUNTEER_TO or CONTACT_TO");
    
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

type VolunteerPayload = {
  name?: string;
  email?: string;
  country?: string;
  interest?: string;
  dates?: string;
  notes?: string;
};

function validatePayload(body: VolunteerPayload) {
  const name = body.name?.trim();
  const email = body.email?.trim();
  const country = body.country?.trim() || "Not specified";
  const interest = body.interest?.trim() || "Not specified";
  const dates = body.dates?.trim() || "Not specified";
  const notes = body.notes?.trim() || "";

  if (!name || !email) {
    return { error: "Please provide name and email." } as const;
  }

  return {
    data: { name, email, country, interest, dates, notes },
  } as const;
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as VolunteerPayload;
    const validation = validatePayload(body);

    if ("error" in validation) {
      return NextResponse.json({ success: false, error: validation.error }, { status: 400 });
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

    const textBody = `NEW VOLUNTEER APPLICATION

Name: ${data.name}
Email: ${data.email}
Country: ${data.country}
Area of Interest: ${data.interest}
Availability: ${data.dates}

Additional Notes / Accessibility Needs:
${data.notes || "None provided"}
`;

    const htmlBody = `
      <div style="font-family: sans-serif; line-height: 1.5;">
        <h2 style="color: #f59e0b;">New Volunteer Application</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Country:</strong> ${data.country}</p>
        <p><strong>Area of Interest:</strong> ${data.interest}</p>
        <p><strong>Availability:</strong> ${data.dates}</p>
        <p><strong>Additional Notes / Accessibility Needs:</strong></p>
        <p>${data.notes ? data.notes.replace(/\n/g, "<br/>") : "None provided"}</p>
      </div>
    `;

    console.log("Attempting to send volunteer email to:", toAddress);

    const info = await transporter.sendMail({
      from: `ODCCH Website <${fromAddress}>`,
      replyTo: data.email,
      to: toAddress,
      subject: `New Volunteer Application - ${data.name}`,
      text: textBody,
      html: htmlBody,
    });

    console.log("Volunteer email sent successfully:", info.messageId);

    return NextResponse.json({ success: true, message: "Application submitted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Volunteer form send failed:", error);
    
    // Provide more detailed error information
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error("Error details:", errorMessage);
    
    return NextResponse.json(
      { 
        success: false, 
        error: "Unable to submit application right now. Please try again later.",
        details: process.env.NODE_ENV === 'development' ? errorMessage : undefined
      },
      { status: 500 }
    );
  }
}
