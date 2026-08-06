import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/lib/data";

// RESEND_API_KEY must be set in your environment (.env.local for dev,
// project settings on your host for production). Never commit the real key.
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, projectType, budget, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      // "Resend Onboarding" sandbox sender works before you verify a domain.
      // Once you verify your own domain in Resend, switch this to
      // e.g. "Portfolio <hello@yourdomain.com>".
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: siteConfig.email,
      replyTo: email,
      subject: `New project inquiry from ${name}`,
      html: `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Project Type:</strong> ${escapeHtml(projectType || "Not specified")}</p>
        <p><strong>Budget:</strong> ${escapeHtml(budget || "Not specified")}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error: "Failed to send message." }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}