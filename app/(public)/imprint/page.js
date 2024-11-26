import Link from "next/link";

export const metadata = {
  title: "Impressum| Miriam Sparbrod",
  description: "Impressum Sparbrod Web Development",
};

// pages/impressum.js
export default function Impressum() {
  return (
    <section className="p-8 bg-stone-100 text-stone-600 mt-6">
      <h2 className="text-3xl font-bold mb-4">Impressum</h2>
      <p className="mb-4">Angaben gemäß § 5 TMG</p>
      <p className="mb-4">
        <strong>Miriam Sparbrod</strong>
        <br />
        Dorfstr. 75, 04626, Vollmershain
        <br />
        Deutschland
      </p>
      <p className="mb-4">
        <strong>Vertreten durch:</strong>
        <br />
        Miriam Sparbrod
      </p>
      <p className="mb-4">
        <strong>Kontakt:</strong>
        <br />
        E-Mail:
        <Link href="sparbrod.webdev@gmail.com" className="text-slate-600">
          <span className="pl-2">sparbrod.webdev@gmail.com</span>
        </Link>
      </p>
      <p className="mb-4">
        <strong>Umsatzsteuer-ID:</strong>
        <br />
        Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
        [USt-IdNr.]
      </p>
      <p className="mb-4">
        <strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong>
        <br />
        Miriam Sparbrod
        <br />
        Dorfstr. 75, 04626, Vollmershain
        <br />
        Deutschland
      </p>
      <p className="mb-4">
        <strong>Streitschlichtung:</strong>
        <br />
        Die Europäische Kommission stellt eine Plattform zur
        Online-Streitbeilegung (OS) bereit:{" "}
        <a
          href="https://ec.europa.eu/consumers/odr"
          className="text-blue-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://ec.europa.eu/consumers/odr
        </a>
        . Unsere E-Mail-Adresse finden Sie oben im Impressum.
      </p>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>
    </section>
  );
}
