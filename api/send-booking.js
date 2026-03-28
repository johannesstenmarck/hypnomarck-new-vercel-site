import { Resend } from "resend";

function escapeHtml(s) {
  if (s == null || s === "") return "";
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export default async function handler(req, res) {
  res.setHeader("Content-Type", "application/json");

  if (req.method !== "POST") {
    res.status(405).json({ ok: false, error: "Method not allowed" });
    return;
  }

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    res.status(503).json({
      ok: false,
      error: "E-post är inte konfigurerat. Lägg till RESEND_API_KEY i Vercel (Environment Variables)."
    });
    return;
  }

  let body;
  try {
    body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
  } catch {
    res.status(400).json({ ok: false, error: "Ogiltig JSON" });
    return;
  }

  const { name, email, phone, message, experience, preferredTimes, consent } = body;

  if (!name || !email || !phone || !message) {
    res.status(400).json({ ok: false, error: "Saknade obligatoriska fält" });
    return;
  }

  const from = process.env.RESEND_FROM?.trim() || "Hypnomarck <info@hypnomarck.se>";
  const adminTo = process.env.BOOKING_NOTIFY_EMAIL?.trim() || "info@hypnomarck.se";

  const textBlock = `
Namn: ${name}
E-post: ${email}
Telefon: ${phone}

Vad söker du hjälp med?
${message}

Tidigare erfarenhet (terapi/hypnos): ${experience || "-"}

Föredragna tider: ${preferredTimes || "-"}

Samtycke (integritetspolicy): ${consent ? "Ja" : "Nej"}
`.trim();

  const htmlAdmin = `
<p>Du har fått en ny bokningsförfrågan från hypnomarck.se.</p>
<table style="border-collapse:collapse;max-width:560px">
<tr><td style="padding:6px 12px 6px 0;font-weight:600">Namn</td><td>${escapeHtml(name)}</td></tr>
<tr><td style="padding:6px 12px 6px 0;font-weight:600">E-post</td><td>${escapeHtml(email)}</td></tr>
<tr><td style="padding:6px 12px 6px 0;font-weight:600">Telefon</td><td>${escapeHtml(phone)}</td></tr>
<tr><td style="padding:6px 12px 6px 0;vertical-align:top;font-weight:600">Meddelande</td><td>${escapeHtml(message).replace(/\n/g, "<br/>")}</td></tr>
<tr><td style="padding:6px 12px 6px 0;font-weight:600">Erfarenhet</td><td>${escapeHtml(experience || "-")}</td></tr>
<tr><td style="padding:6px 12px 6px 0;font-weight:600">Föredragna tider</td><td>${escapeHtml(preferredTimes || "-")}</td></tr>
<tr><td style="padding:6px 12px 6px 0;font-weight:600">Samtycke</td><td>${consent ? "Ja" : "Nej"}</td></tr>
</table>
`;

  const htmlVisitor = `
<p>Tack för din bokningsförfrågan!</p>
<p>Vi har tagit emot din förfrågan och återkommer inom 24 timmar.</p>
<p style="margin-top:16px">Med vänlig hälsning,<br/>Johannes Stenmarck<br/>Hypnomarck</p>
<hr style="margin:24px 0;border:none;border-top:1px solid #e7e5e4"/>
<p style="font-size:14px;color:#57534e"><strong>Din förfrågan:</strong></p>
<pre style="white-space:pre-wrap;font-family:inherit;font-size:14px;color:#44403c">${escapeHtml(textBlock)}</pre>
`;

  const resend = new Resend(key);

  try {
    const [toAdmin, toVisitor] = await Promise.all([
      resend.emails.send({
        from,
        to: adminTo,
        replyTo: email,
        subject: `Ny bokningsförfrågan från ${name}`,
        text: textBlock,
        html: htmlAdmin
      }),
      resend.emails.send({
        from,
        to: email,
        subject: "Tack för din bokningsförfrågan",
        text: `Hej ${name}!\n\nTack för din bokningsförfrågan. Vi återkommer inom 24 timmar.\n\n---\n${textBlock}\n\nMed vänlig hälsning,\nJohannes Stenmarck – Hypnomarck`,
        html: htmlVisitor
      })
    ]);

    const errA = toAdmin.error;
    const errB = toVisitor.error;
    if (errA || errB) {
      const err = errA || errB;
      res.status(502).json({ ok: false, error: err?.message || "Kunde inte skicka e-post" });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (e) {
    res.status(502).json({ ok: false, error: e?.message || "Kunde inte skicka e-post" });
  }
}
