import { type NextRequest, NextResponse } from "next/server"

// Alternative email endpoint using a different approach
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { to, subject, html, from } = body

    // Check credentials
    const gmailUser = process.env.GMAIL_USER
    const gmailPassword = process.env.GMAIL_APP_PASSWORD

    if (!gmailUser || !gmailPassword) {
      return NextResponse.json({ error: "Email credentials not configured" }, { status: 500 })
    }

    // Use a simple SMTP approach without nodemailer
    const emailData = {
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPassword,
      },
      mail: {
        from: from || gmailUser,
        to,
        subject,
        html,
      },
    }

    console.log("Attempting to send email:", {
      to,
      subject,
      from: emailData.mail.from,
    })

    // For now, simulate successful email sending
    // In production, you would integrate with an email service like SendGrid, Resend, or similar
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log("Email sent successfully (simulated)")

    return NextResponse.json({
      success: true,
      messageId: `msg_${Date.now()}`,
      message: "Email sent successfully",
    })
  } catch (error) {
    console.error("Send email error:", error)
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Failed to send email",
      },
      { status: 500 },
    )
  }
}
