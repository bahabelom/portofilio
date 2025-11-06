import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with API key check
const resendApiKey = process.env.RESEND_API_KEY;

const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                { message: "All fields are required", success: false },
                { status: 400 }
            );
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { message: "Invalid email address", success: false },
                { status: 400 }
            );
        }

        // Check if Resend is configured
        if (!resend) {
            return NextResponse.json(
                {
                    message: "Email service is not configured. Please contact the administrator.",
                    success: false
                },
                { status: 500 }
            );
        }

        // Send email using Resend
        try {
            // Use environment variable for FROM email, fallback to onboarding email for testing
            const fromEmail = process.env.RESEND_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";
            
            await resend.emails.send({
                from: fromEmail,
                to: "bahabelomgebremedhn2@gmail.com",
                replyTo: email,
                subject: `Portfolio Contact Form: Message from ${name}`,
                html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-top: 20px;">
              <p style="margin: 10px 0;"><strong style="color: #374151;">Name:</strong> <span style="color: #1f2937;">${name}</span></p>
              <p style="margin: 10px 0;"><strong style="color: #374151;">Email:</strong> <span style="color: #1f2937;">${email}</span></p>
              <div style="margin-top: 20px;">
                <strong style="color: #374151;">Message:</strong>
                <div style="background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px; color: #1f2937; white-space: pre-wrap;">${message.replace(/\n/g, "<br>")}</div>
              </div>
            </div>
            <p style="margin-top: 20px; color: #6b7280; font-size: 14px;">
              This email was sent from your portfolio contact form.
            </p>
          </div>
        `,
                text: `
New Contact Form Submission

Name: ${name}
Email: ${email}

Message:
${message}
        `,
            });

            return NextResponse.json(
                {
                    message: "Message sent successfully! I'll get back to you soon.",
                    success: true
                },
                { status: 200 }
            );
        } catch (emailError: any) {
            return NextResponse.json(
                {
                    message: `Failed to send email: ${emailError?.message || "Unknown error"}. Please try again later.`,
                    success: false
                },
                { status: 500 }
            );
        }
    } catch (error) {
        return NextResponse.json(
            {
                message: "Failed to send message. Please try again later.",
                success: false
            },
            { status: 500 }
        );
    }
}

