import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function buildTransport() {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const fromAddress = process.env.SMTP_FROM || user;
  const toAddress = process.env.VOLUNTEER_TO || process.env.CONTACT_TO || "info@odcch.org";

  if (!host || !port || !user || !pass || !fromAddress || !toAddress) {
    throw new Error(
      "Email is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and SMTP_FROM."
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
    const { transporter, fromAddress, toAddress } = buildTransport();

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

    await transporter.sendMail({
      from: `ODCCH Website <${fromAddress}>`,
      replyTo: data.email,
      to: toAddress,
      subject: `New Volunteer Application - ${data.name}`,
      text: textBody,
      html: htmlBody,
    });

    return NextResponse.json({ success: true, message: "Application submitted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Volunteer form send failed", error);
    return NextResponse.json(
      { success: false, error: "Unable to submit application right now. Please try again later." },
      { status: 500 }
    );
  }
}
