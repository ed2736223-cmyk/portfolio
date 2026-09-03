import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["ed2736223@gmail.com"],
      subject: "New Portfolio Message",
      html: `
        <h2>New Contact Form Message</h2>
        <p><b>Name:</b> ${body.name}</p>
        <p><b>Email:</b> ${body.email}</p>
        <p><b>Message:</b> ${body.message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error(err);
    return Response.json({ error: err.message }, { status: 500 });
  }
}