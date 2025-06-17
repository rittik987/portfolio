import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    // Check if environment variables are available
    const gmailUser = process.env.GMAIL_USER;
    const gmailPassword = process.env.GMAIL_APP_PASSWORD;

    if (!gmailUser || !gmailPassword) {
      return NextResponse.json(
        {
          error: "Email service temporarily unavailable. Please contact directly at rittikhossen201@gmail.com",
          success: false,
        },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPassword,
      },
    });

    // Admin notification email
    const adminMailOptions = {
      from: gmailUser,
      to: "rittikhossen201@gmail.com",
      subject: `Portfolio Contact: Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #3B82F6, #8B5CF6); padding: 30px; border-radius: 10px; margin-bottom: 20px;">
            <h1 style="color: white; margin: 0; text-align: center;">New Contact Form Submission</h1>
          </div>
          <div style="background-color: #f8f9fa; padding: 25px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #3B82F6;">
            <h2 style="color: #3B82F6; margin-top: 0;">Contact Details</h2>
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #3B82F6;">${email}</a></p>
            <p style="margin: 10px 0;"><strong>Submitted:</strong> ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</p>
          </div>
          <div style="background-color: #fff; padding: 25px; border-radius: 8px; border: 1px solid #e5e7eb; margin: 20px 0;">
            <h2 style="color: #333; margin-top: 0; border-bottom: 2px solid #3B82F6; padding-bottom: 10px;">Message</h2>
            <div style="line-height: 1.6; color: #555; background-color: #f9f9f9; padding: 15px; border-radius: 5px; font-size: 16px;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
          <div style="text-align: center; margin-top: 30px; padding: 20px; background-color: #f0f9ff; border-radius: 8px;">
            <p style="margin: 0; color: #666; font-size: 14px;">
              This message was sent from your portfolio website contact form.<br>
              Reply directly to ${email} to respond to ${name}.
            </p>
          </div>
        </div>
      `,
    };

    // Confirmation email to user
    const confirmationMailOptions = {
      from: `"Rittik Hossen" <${gmailUser}>`,
      to: email,
      subject: "Thank you for contacting me!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #10B981, #3B82F6); padding: 30px; border-radius: 10px; margin-bottom: 20px;">
            <h1 style="color: white; margin: 0; text-align: center;">Thank You for Reaching Out!</h1>
          </div>
          <div style="padding: 25px;">
            <p style="font-size: 18px; color: #333;">Hi ${name},</p>
            <p style="line-height: 1.6; color: #555;">
              Thank you for contacting me through my portfolio website. I have received your message and will get back to you as soon as possible.
            </p>
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #10B981;">
              <p style="margin: 0; font-weight: bold; color: #333;">Your message:</p>
              <p style="font-style: italic; color: #666; margin: 10px 0 0 0;">"${message}"</p>
            </div>
            <p style="line-height: 1.6; color: #555;">
              I typically respond within 24-48 hours. In the meantime, feel free to check out my other projects on 
              <a href="https://github.com/rittik987" style="color: #3B82F6;">GitHub</a>.
            </p>
            <div style="margin-top: 30px; padding: 20px; background: linear-gradient(135deg, #f0f9ff, #e0f2fe); border-radius: 8px;">
              <p style="margin: 0; color: #333;">
                Best regards,<br>
                <strong style="color: #3B82F6;">Rittik Hossen</strong><br>
                <span style="color: #666;">Full-Stack Developer</span>
              </p>
            </div>
          </div>
          <div style="text-align: center; margin-top: 20px; padding: 15px; color: #666; font-size: 12px; border-top: 1px solid #e5e7eb;">
            <p style="margin: 0;">This is an automated confirmation email from rittikhossen201@gmail.com</p>
          </div>
        </div>
      `,
    };

    // Send admin notification
    await transporter.sendMail(adminMailOptions);

    // Send confirmation to user
    await transporter.sendMail(confirmationMailOptions);

    return NextResponse.json(
      {
        message: "Message sent successfully! You should receive a confirmation email shortly.",
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Detailed contact form error:", error);

    return NextResponse.json(
      {
        error: `Contact form error: ${error instanceof Error ? error.message : "Unknown error"}. Please contact me directly at rittikhossen201@gmail.com`,
        success: false,
      },
      { status: 500 }
    );
  }
}
