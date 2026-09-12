# Synlighet och mätning

## Implementerat

- `/hypnoterapi-online`: sida om det befintliga onlineupplägget, med internlänk, egen titel, canonical och plats i sitemap. Inga påhittade lokala mottagningar, priser eller resultatlöften.
- `booking_start`: när bokningsformuläret öppnas med statistik godkänd.
- `generate_lead`: först när boknings-API:t bekräftar en mottagen förfrågan. Detta är inte en bekräftad session eller betalning.
- Händelserna skickar endast ett fast `form_id: consultation`. Namn, kontaktuppgifter, fritext och erfarenhet skickas inte som händelseparametrar. Nekade besökares handlingar sparas inte för senare mätning.
- GA4:s befintliga sidvisningsmätning behålls. Ingen extra manuell SPA-mätning som kan ge dubbla sidvisningar.

## Kontoåtgärder som återstår

Kan utföras i mobilens eller Macens webbläsare. Fysisk tillgång till jobbdatorn behövs inte. Codex behöver en ansluten inloggad webbläsare för att göra kontrollerna själv.

1. Öppna https://search.google.com/search-console och välj eller lägg till `hypnomarck.se`. Verifiera befintligt ägarskap; domänegendom använder DNS. En saknad HTML-tagg bevisar inte att verifiering saknas. Skapa inte dubblett om egendomen redan finns.
2. Skicka in `https://hypnomarck.se/sitemap.xml`. Inspektera startsidan, `/om-hypnos`, `/om-mig` och `/hypnoterapi-online`. Kontrollera Googles valda canonical, eventuell noindex/blockering och indexeringsstatus. Begär indexering av nya/uppdaterade sidor vid behov; det garanterar inte inkludering.
3. Öppna https://analytics.google.com och kontrollera att webbströmmen använder `G-L1S93XFX4K`. Besök webbplatsen med godkänt samtycke och kontrollera realtid/DebugView. Navigera mellan sidor och kontrollera att varje sidbyte ger en sidvisning. Kontrollera webbströmmens utökade mätning för historikändringar innan manuell SPA-mätning övervägs.
4. Markera den kodskickade `generate_lead` som nyckelhändelse. Skapa inte en andra regel som också genererar samma händelse från `form_submit` eller en sidvisning. Kontrollera att automatisk formulärmätning inte misstolkas som mottagen förfrågan.
5. Kontrollera att ingen automatisk insamling av användaruppgifter är aktiverad för det här formuläret. Formulärvärden och uppgifter om hälsa ska inte användas i Analytics, kampanjnamn eller URL-parametrar.
6. Länka rätt Search Console-egendom till rätt GA4-webbström om det saknas. Detta möjliggör kombinerad rapportering; det är inte ett krav för indexering.

Inga bokningsmail skickas av de automatiserade testerna. Testernas API och externa tjänster är simulerade. Mottagning i det riktiga GA4-kontot är en separat kontroll.

## Instagram: färdiga länkar och textutkast

Lägg externa länkar i profil eller Story-länk. Texterna nedan är utkast, inte publicerade inlägg.

Profilens webbplatslänk:
https://hypnomarck.se/hypnoterapi-online?utm_source=instagram&utm_medium=social&utm_campaign=online_intro&utm_content=bio

Story om upplägget:
https://hypnomarck.se/hypnoterapi-online?utm_source=instagram&utm_medium=social&utm_campaign=online_intro&utm_content=story_upplagg

Story med vanliga frågor:
https://hypnomarck.se/om-hypnos?utm_source=instagram&utm_medium=social&utm_campaign=online_intro&utm_content=story_fragor

Story om bakgrunden:
https://hypnomarck.se/om-mig?utm_source=instagram&utm_medium=social&utm_campaign=online_intro&utm_content=story_bakgrund

Utkast 1: ”Nyfiken på hur hypnoterapi online går till? På min hemsida beskriver jag upplägget, hur du förbereder dig och vad vi pratar om under en första konsultation. Du hittar länken i min profil.”

Utkast 2: ”Vad är hypnos egentligen? Jag har samlat vanliga frågor och information om forskningsläget på hemsidan. Läs i lugn och ro och ta gärna med dina frågor till en gratis konsultation.”

Utkast 3: ”Jag heter Johannes Stenmarck och är certifierad inom Hypnoterapi 2.0. Jag träffar privatpersoner online. På hemsidan kan du läsa om min bakgrund och mitt arbetssätt.”

Föreslagen start: publicera ett av dessa teman i veckan tillsammans med eget foto eller video och motsvarande Story-länk. Återanvänd kampanjnamnet så att resultaten går att jämföra. Mät Instagram-hänvisningar och mottagna förfrågningar, inte bara gilla-markeringar.

## Innehåll och trovärdighet

Utgå från faktiska frågor i konsultationer och Search Console. Fördjupa en sida i taget, med tydlig avsändare och källor där sakpåståenden behöver stöd. Undvik tunna sidor för många orter eller diagnoser. Lägg till utbildningsbevis och relevanta externa profillänkar när rätt offentliga underlag finns. Publicera bara verkliga omdömen som får användas; inga omdömen eller externa rekommendationer har skapats här.

Google Business Profile behöver bedömas utifrån faktisk kundkontakt på plats. Onlineverksamhet ensam är inte behörig; företagsbesök kan vara relevanta, men serviceområde och upplägg måste bekräftas innan en profil skapas.

SEO-grunden med åtkomlig HTML, internlänkar, tydlig identitet och källor hjälper även sökbaserade AI-tjänster att förstå innehållet. Ingen garanti finns för ranking, citering eller regelbundna LLM-omnämnanden. Inga särskilda AI-filer eller fabricerade omnämnanden har lagts till.

## Uppföljning

Efter att kontoåtkomsten verifierats: spara en baslinje för indexerade sidor, sökfrågor, visningar, klick och mottagna förfrågningar. Jämför likvärdiga perioder efter cirka fyra veckor. Följ några fasta frågor om varumärket och tjänsten i relevanta AI-söktjänster och anteckna datum, tjänst och källänk; enstaka svar är inte ett stabilt rankingmått. Ingen automatisk uppföljning har schemalagts.

Cookiebannertexten är kvar enligt tidigare instruktion. Den behöver beskriva att samma val styr både Google Analytics och Instagram/EmbedSocial. Sidfotens integritetspolicy och disclaimer länkar fortfarande till `#`; riktiga texter och länkmål återstår, med korrekta uppgifter om personuppgiftsansvarig och tjänsteleverantörer.

## Primärkällor

- https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- https://developers.google.com/search/docs/appearance/ai-features
- https://support.google.com/webmasters/answer/9008080
- https://developers.google.com/analytics/devguides/collection/ga4/single-page-applications
- https://support.google.com/analytics/answer/9267735
- https://support.google.com/business/answer/13763036
