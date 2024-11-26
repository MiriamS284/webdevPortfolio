import nodemailer from "nodemailer";

export async function POST(req) {
  const { firstName, lastName, subject, email, message } = await req.json();

  try {
    // SendGrid Transporter konfigurieren
    const transporter = nodemailer.createTransport({
      service: "SendGrid",
      auth: {
        user: "apikey", // Benutzername ist immer 'apikey' bei SendGrid
        pass: process.env.SENDGRID_API_KEY, // API-Schlüssel
      },
    });

    // E-Mail-Optionen definieren
    const mailOptions = {
      from: process.env.EMAIL_FROM, // Verifizierte Absenderadresse aus Umgebungsvariablen
      to: process.env.EMAIL_TO, // Empfängeradresse
      subject: `Kontaktformular: ${subject}`,
      text: `
        Vorname: ${firstName}
        Nachname: ${lastName}
      
        E-Mail: ${email}
        Nachricht: ${message}
      `,
    };

    // E-Mail senden
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "E-Mail erfolgreich gesendet" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Fehler beim E-Mail-Versand:", error);
    return new Response(
      JSON.stringify({ message: "Fehler beim Senden der E-Mail" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
