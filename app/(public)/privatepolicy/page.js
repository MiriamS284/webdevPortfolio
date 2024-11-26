// pages/datenschutz.js
export default function Datenschutz() {
  return (
    <section className="p-8 bg-stone-100 text-stone-600 mt-6">
      <h2 className="text-3xl font-bold mb-4">Datenschutzerklärung</h2>

      <h3 className="text-2xl font-semibold mt-8 mb-4">
        1. Allgemeine Hinweise und Pflichtinformationen
      </h3>
      <p className="mb-4">
        <strong>Datenschutz</strong>
        <br />
        Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten
        sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und
        entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser
        Datenschutzerklärung.
      </p>

      <h3 className="text-2xl font-semibold mt-8 mb-4">
        2. Erhebung und Speicherung personenbezogener Daten sowie Art und Zweck
        von deren Verwendung
      </h3>
      <p className="mb-4">
        <strong>Beim Besuch der Website</strong>
        <br />
        Beim Aufrufen unserer Website [Website-URL] werden durch den auf Ihrem
        Endgerät zum Einsatz kommenden Browser automatisch Informationen an den
        Server unserer Website gesendet. Diese Informationen werden temporär in
        einem sogenannten Logfile gespeichert. Folgende Informationen werden
        dabei ohne Ihr Zutun erfasst und bis zur automatisierten Löschung
        gespeichert:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>IP-Adresse des anfragenden Rechners,</li>
        <li>Datum und Uhrzeit des Zugriffs,</li>
        <li>Name und URL der abgerufenen Datei,</li>
        <li>Website, von der aus der Zugriff erfolgt (Referrer-URL),</li>
        <li>
          verwendeter Browser und ggf. das Betriebssystem Ihres Rechners sowie
          der Name Ihres Access-Providers.
        </li>
      </ul>
      <p className="mb-4">
        Die genannten Daten werden durch uns zu folgenden Zwecken verarbeitet:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          Gewährleistung eines reibungslosen Verbindungsaufbaus der Website,
        </li>
        <li>Gewährleistung einer komfortablen Nutzung unserer Website,</li>
        <li>Auswertung der Systemsicherheit und -stabilität sowie</li>
        <li>zu weiteren administrativen Zwecken.</li>
      </ul>
      <p className="mb-4">
        Die Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 S. 1
        lit. f DSGVO. Unser berechtigtes Interesse folgt aus oben aufgelisteten
        Zwecken zur Datenerhebung. In keinem Fall verwenden wir die erhobenen
        Daten zu dem Zweck, Rückschlüsse auf Ihre Person zu ziehen.
      </p>

      <h3 className="text-2xl font-semibold mt-8 mb-4">
        3. Weitergabe von Daten
      </h3>
      <p className="mb-4">
        Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den
        im Folgenden aufgeführten Zwecken findet nicht statt. Wir geben Ihre
        persönlichen Daten nur an Dritte weiter, wenn:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          Sie Ihre nach Art. 6 Abs. 1 S. 1 lit. a DSGVO ausdrückliche
          Einwilligung dazu erteilt haben,
        </li>
        <li>
          die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. f DSGVO zur
          Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen
          erforderlich ist und kein Grund zur Annahme besteht, dass Sie ein
          überwiegendes schutzwürdiges Interesse an der Nichtweitergabe Ihrer
          Daten haben,
        </li>
        <li>
          für den Fall, dass für die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. c
          DSGVO eine gesetzliche Verpflichtung besteht, sowie
        </li>
        <li>
          dies gesetzlich zulässig und nach Art. 6 Abs. 1 S. 1 lit. b DSGVO für
          die Abwicklung von Vertragsverhältnissen mit Ihnen erforderlich ist.
        </li>
      </ul>

      <h3 className="text-2xl font-semibold mt-8 mb-4">4. Betroffenenrechte</h3>
      <p className="mb-4">
        Sie haben das Recht:
        <ul className="list-disc list-inside mb-4">
          <li>
            gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten
            personenbezogenen Daten zu verlangen,
          </li>
          <li>
            gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger oder
            Vervollständigung Ihrer bei uns gespeicherten personenbezogenen
            Daten zu verlangen,
          </li>
          <li>
            gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten
            personenbezogenen Daten zu verlangen,
          </li>
          <li>
            gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer
            personenbezogenen Daten zu verlangen,
          </li>
          <li>
            gemäß Art. 20 DSGVO Ihre personenbezogenen Daten, die Sie uns
            bereitgestellt haben, in einem strukturierten, gängigen und
            maschinenlesbaren Format zu erhalten oder die Übermittlung an einen
            anderen Verantwortlichen zu verlangen und
          </li>
          <li>
            gemäß Art. 77 DSGVO sich bei einer Aufsichtsbehörde zu beschweren.
          </li>
        </ul>
      </p>

      <h3 className="text-2xl font-semibold mt-8 mb-4">5. Datensicherheit</h3>
      <p className="mb-4">
        Wir verwenden innerhalb des Website-Besuchs das verbreitete
        SSL-Verfahren (Secure Socket Layer) in Verbindung mit der jeweils
        höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt wird.
        In der Regel handelt es sich dabei um eine 256-Bit-Verschlüsselung. Ob
        eine einzelne Seite unseres Internetauftrittes verschlüsselt übertragen
        wird, erkennen Sie an der geschlossenen Darstellung des Schüssel-
        beziehungsweise Schloss-Symbols in der unteren Statusleiste Ihres
        Browsers.
      </p>
    </section>
  );
}
