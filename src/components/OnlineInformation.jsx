import { Link } from "react-router-dom";

export default function OnlineInformation({ children }) {
  return (
    <>
          <p className="text-lg leading-relaxed mb-6">Hos Hypnomarck träffar du mig via videosamtal. Jag tar emot privatpersoner online för hypnoterapi och förändringscoaching. Vi börjar med en kostnadsfri konsultation där vi pratar om vad du vill arbeta med och om mitt arbetssätt passar dig.</p>
          {children}
          <section className="mt-10 space-y-4 leading-relaxed text-lg">
            <h2 className="text-2xl font-serif">Så går det till</h2>
            <ol className="list-decimal pl-6 space-y-3">
              <li><strong>Skicka en förfrågan.</strong> Använd bokningsformuläret så återkommer jag för att hitta en tid. En förfrågan är inte en bekräftad bokning.</li>
              <li><strong>Vi ses för en gratis konsultation.</strong> Samtalet tar cirka 30 minuter. Du får berätta om dina mål och ställa frågor om upplägget.</li>
              <li><strong>Vi kommer överens om nästa steg.</strong> Om du vill gå vidare planerar vi fortsättningen tillsammans. En enskild session tar 60–90 minuter.</li>
            </ol>
          </section>
          <section className="mt-10 space-y-4 leading-relaxed text-lg">
            <h2 className="text-2xl font-serif">Inför ett videosamtal</h2>
            <p>Välj gärna en lugn plats där du kan sitta bekvämt och prata ostört. Kontrollera internetanslutning, kamera och ljud innan samtalet. Hör av dig om du har frågor om tekniken eller dina förutsättningar.</p>
            <h2 className="text-2xl font-serif pt-4">Vad kostar det?</h2>
            <p>Den första konsultationen är gratis. Aktuella alternativ finns på startsidan under <a href="/#pricing" className="underline">sessioner och priser</a>. Vi går igenom vilket upplägg som är aktuellt innan du bestämmer dig.</p>
            <h2 className="text-2xl font-serif pt-4">Vem möter jag?</h2>
            <p>Jag heter Johannes Stenmarck och är certifierad inom Hypnoterapi 2.0 av Dan och Sara Ahtola på Ahtola Vision. <Link to="/om-mig" className="underline">Läs om min bakgrund och mitt arbetssätt</Link>.</p>
            <h2 className="text-2xl font-serif pt-4">Vill du förstå hypnos innan du bokar?</h2>
            <p>På sidan <Link to="/om-hypnos" className="underline">Vad är hypnos?</Link> hittar du vanliga frågor och information om forskningsläget. Hypnoterapi ersätter inte medicinsk eller psykiatrisk vård.</p>
            <h2 className="text-2xl font-serif pt-4">Tar du även emot på plats?</h2>
            <p>Privatpersoner träffar jag online. För företagsuppdrag kan jag även komma till arbetsplatsen. Kontakta mig på <a href="mailto:info@hypnomarck.se" className="underline">info@hypnomarck.se</a> för att prata om era behov.</p>
          </section>
    </>
  );
}
