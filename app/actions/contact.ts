"use server";

import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy");

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
  honeypot: z.string().max(0, "Bots only!").optional(), // Anti-spam
});

export async function sendContactEmail(formData: FormData) {
  try {
    const data = Object.fromEntries(formData.entries());
    
    // Honeypot check: If a bot filled out the hidden honeypot field, we quietly reject them
    if (data.honeypot && data.honeypot !== "") {
      return { success: true }; // Silently succeed
    }

    const validatedData = contactSchema.safeParse(data);

    if (!validatedData.success) {
      return { 
        success: false, 
        error: "Invalid form data. Please check your inputs.",
        fieldErrors: validatedData.error.flatten().fieldErrors
      };
    }

    const { name, email, subject, message } = validatedData.data;

    if (!process.env.RESEND_API_KEY) {
      console.warn("No RESEND_API_KEY found, simulating success.");
      // Simulating a network request for demo purposes
      await new Promise(resolve => setTimeout(resolve, 1500));
      return { success: true };
    }

    // Send email via Resend
    const result = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>", // Or your verified domain
      to: "badugna643@gmail.com",
      reply_to: email,
      subject: `New Portfolio Message: ${subject}`,
      html: `
        <h2>New Message from your Portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
        <br />
        <p><small>Sent at: ${new Date().toUTCString()}</small></p>
      `,
    });

    if (result.error) {
      console.error("Resend API error:", result.error);
      return { success: false, error: result.error.message || "Failed to send message. Please try again later." };
    }

    return { success: true };
  } catch (error) {
    console.error("Contact action exception:", error);
    return { success: false, error: "An unexpected error occurred." };
  }
}
