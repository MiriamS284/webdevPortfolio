import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    // Anfrage-Daten auslesen
    const { firstName, lastName, organization, subject, email, message } =
      await req.json();

    // Transporter konfigurieren
    const transporter = nodemailer.createTransport({
      service: "SendGrid",
      auth: {
        user: "apikey", // SendGrid verwendet "apikey" als Benutzername
        pass: process.env.SENDGRID_API_KEY, // API-Schlüssel aus Umgebungsvariablen
      },
    });

    // E-Mail-Optionen definieren
    const mailOptions = {
      from: process.env.EMAIL_FROM, // Absenderadresse
      to: process.env.EMAIL_TO, // Empfängeradresse
      subject: `Kontaktformular: ${subject}`, // Betreff der E-Mail
      text: `
        Vorname: ${firstName}
        Nachname: ${lastName}
        Organisation: ${organization}
        E-Mail: ${email}
        
        Nachricht:
        ${message}
      `,
    };

    // E-Mail senden
    await transporter.sendMail(mailOptions);

    // Erfolgsantwort zurückgeben
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
