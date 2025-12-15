import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate the required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const htmlContent = `
      <div style="font-family: sans-serif; background-color: #f4f4f4; padding: 20px;">
        <div style="max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px;">
          <h1 style="color: #2563eb;">New Contact Form Message</h1>
          <p><strong>From:</strong> ${name} (${email})</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f8fafc; border-left: 4px solid #2563eb;">
            <strong>Message:</strong><br>
            ${message.replace(/\n/g, '<br>')}
          </div>
          <p style="margin-top: 25px; color: #64748b; font-size: 0.9em;">
            Sent from your portfolio contact form.
          </p>
        </div>
      </div>
    `;

    // Send the email
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['olajide.adebanjo06@gmail.com'],
      replyTo: email,
      subject: `New message from your portfolio: ${name}`,
      html: htmlContent,
    });

    if (error) {
      console.error('Resend API error:', error);
      return NextResponse.json(
        { error: 'Failed to send email via service' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Email sent successfully!',
      data
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}