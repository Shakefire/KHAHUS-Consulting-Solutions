import { render } from "@react-email/render";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/EmailTemplate";

interface ContactRequest {
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactRequest;
    const requiredFields = [body.fullName, body.email, body.service, body.message];

    if (requiredFields.some((field) => !field?.trim())) {
      return Response.json({ error: "Please complete all required fields." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return Response.json({ error: "Email service is not configured." }, { status: 503 });
    }

    const resend = new Resend(apiKey);
    const html = await render(<EmailTemplate {...body} />);
    const recipient = process.env.CONTACT_RECIPIENT_EMAIL || "info@khahusconsulting.com.ng";
    const sender = process.env.CONTACT_SENDER_EMAIL || "website@khahusconsulting.com.ng";

    const { error } = await resend.emails.send({
      from: sender,
      to: recipient,
      replyTo: body.email,
      subject: `New enquiry: ${body.service}`,
      html,
    });

    if (error) {
      return Response.json({ error: "Unable to send your enquiry right now." }, { status: 502 });
    }

    return Response.json({ success: true });
  } catch {
    return Response.json({ error: "Unable to process your enquiry right now." }, { status: 500 });
  }
}
