import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const {
      fullName,
      email,
      phone,
      inquirySubject,
      eventDate,
      guestCount,
      address,
      beanDetails,
      message,
    } = req.body;

    if (!fullName || !email || !inquirySubject) {
      return res.status(400).json({ error: "Missing required fields." });
    }

    // Build specific details text depending on inquiry type
    let specificDetailsHtml = "";
    if (inquirySubject === "Event Catering Inquiry") {
      specificDetailsHtml = `
        <p><strong>Event Date:</strong> ${eventDate || "N/A"}</p>
        <p><strong>Guest Count / Cups:</strong> ${guestCount || "N/A"}</p>
        <p><strong>Location / Address:</strong> ${address || "N/A"}</p>
      `;
    } else {
      specificDetailsHtml = `
        <p><strong>Coffee Selection & Quantity:</strong> ${beanDetails || "N/A"}</p>
      `;
    }

    // Notification sent to Blendwagen
    await resend.emails.send({
      from: "Blendwagen Inquiries <onboarding@resend.dev>", // Replace with your verified domain
      to: ["blendwagen@gmail.com"], // Your business inbox
      subject: `[New Inquiry] ${inquirySubject} - ${fullName}`,
      html: `
        <h2>New Inquiry Received</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Subject:</strong> ${inquirySubject}</p>
        <hr />
        ${specificDetailsHtml}
        <hr />
        <p><strong>Additional Message:</strong></p>
        <p>${message || "None provided"}</p>
      `,
    });

    return res.status(200).json({ success: true, message: "Emails sent successfully!" });
  } catch (error) {
    console.error("Resend API error:", error);
    return res.status(500).json({ error: "Failed to send email inquiry." });
  }
}