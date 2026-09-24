import { createServerFn } from "@tanstack/react-start";

type ContactFormData = {
    name: string;
    phone: string;
    email: string;
    area: string;
    service: string;
    message: string;
};

function escapeHtml(value: string): string {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

export const submitContactEnquiry = createServerFn({ method: "POST" })
    .validator((data: ContactFormData) => data)
    .handler(async ({ data }) => {
        const apiKey = process.env.RESEND_API_KEY;

        if (!apiKey) {
            throw new Error("RESEND_API_KEY is not configured.");
        }

        const name = data.name.trim();
        const phone = data.phone.trim();
        const email = data.email.trim();
        const area = data.area.trim();
        const service = data.service.trim();
        const message = data.message.trim();

        if (!name || !phone) {
            throw new Error("Name and phone number are required.");
        }

        const { Resend } = await import("resend");
        const resend = new Resend(apiKey);

        const { data: result, error } = await resend.emails.send({
            from: "Pure Golden Website <info@puregoldendemolition.com>",
            to: ["info@puregoldendemolition.com"],
            replyTo: email || undefined,
            subject: `New Website Enquiry - ${name}`,
            html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Website Enquiry</h2>

          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email || "Not provided")}</p>
          <p><strong>Plot Area / Community:</strong> ${escapeHtml(area || "Not provided")}</p>
          <p><strong>Service:</strong> ${escapeHtml(service || "Not specified")}</p>

          <h3>Project Details</h3>
          <p>${escapeHtml(message || "No additional details provided.").replaceAll("\n", "<br />")}</p>

          <hr />

          <p><strong>Source:</strong> Pure Golden website contact form</p>
          <p><strong>Website:</strong> puregoldendemolition.com</p>
        </div>
      `,
        });

        if (error) {
            console.error("Resend contact enquiry error:", error);
            throw new Error("Unable to send the enquiry email.");
        }

        return {
            success: true,
            id: result?.id ?? null,
        };
    });