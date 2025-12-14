import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, organization, email, type, message } = body;

    await resend.emails.send({
      from: "Hult Prize RCCIIT <onboarding@resend.dev>",
      to: ["hultprizercciit@gmail.com"], // YOUR EMAIL
      subject: "New Partnership Proposal – Hult Prize RCCIIT",
      html: `
        <h2>New Partnership Proposal</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Organization:</strong> ${organization}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Partnership Type:</strong> ${type}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
