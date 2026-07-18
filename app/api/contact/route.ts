import { NextResponse } from "next/server";

// Wire this up to Resend, SendGrid, or your provider of choice.
// This stub validates the payload and returns success so the
// frontend flow can be tested end-to-end before email is connected.
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body ?? {};

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // TODO: send email via your provider, e.g.:
    // await resend.emails.send({ from, to, subject, html });

    console.log("New contact message:", body);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }
}
