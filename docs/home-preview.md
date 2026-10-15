# Startsida och konsultationsförfrågan – separat förhandsversion

Senast reviderad 15 oktober 2026. Produktionsbas: main 5598db539224b9bc16893fa4c378fa03b139286f. Befintliga undersidor finns kvar och ingår inte i den redaktionella omarbetningen.

Skogen fyller första skärmen och följer med runt gemensamma läsytor. Öppningen innehåller tjänstebeskrivning, konsultation, informationslänk och utforskningspil. Porträtt och personlig introduktion kommer direkt efter öppningen. Tre vardagsberättelser ersätter problemrutorna. Menyn får ett kompakt läge vid scrollning och scrollmål lämnar plats för den. Brödtext är normalviktad och längre texter vänsterställda.

Arbetssättet beskrivs positivt genom processen och möjligheten till förändring. Texten är ett arbetsutkast att precisera med Johannes intervjusvar. Utbildning och yrkesroll framgår utan att tillskriva Johannes vårdlegitimation. Sofias redan publicerade omdöme återges ordagrant, som hennes erfarenhet. Andra citat har inte ändrats. Ingen universell resultatgaranti har lagts till.

Introduktionsvideon är 20 minuter, ligger efter presentationen och laddas först när besökaren väljer att öppna den. Den inbäddade spelaren använder youtube-nocookie.com. Den första konsultationen är kostnadsfri. Två betalda upplägg med befintliga priser nås via en separat prisdialog, utan popularitetsmarkering eller bokningsknappar för paket.

Förfrågan kräver namn och e-post. Telefon är förvalt kontaktalternativ och kräver då telefonnummer; Google Meet kan väljas utan telefonnummer. Tidsönskemål är frivilliga. Ingen fråga om hälsa eller terapihistorik finns i första steget. Dialogen har tillgänglig benämning, inert bakgrund, fokusbegränsning, Escape och återställt fokus. Bekräftelsen skiljer förfrågan från bokad tid. Ingen osäker svarstid utlovas.

## Endast för granskning – slå inte ihop med produktion

Formuläret demonstrerar flödet lokalt utan nätverksöverföring, lagring eller e-post. API:t blockerar inskick. Statistik är avstängd och sidorna anger noindex, nofollow. Noindex är inte ett åtkomstskydd. YouTube aktiveras av besökarens val, Instagram finns som vanlig länk.

Enligt Johannes instruktion färdigställs fullständig integritetspolicy och ansvarsinformation efter övriga innehålls- och designändringar. Den befintliga informationen gäller enbart testformuläret. Produktionskoppling, faktisk e-postleverans, samtycke och mätning hör till lanseringsarbetet. Ingen produktionspublicering görs i denna leverans.

Intervjuformuläret och textunderlaget levereras separat i uppgiftens outputs och är inte offentliga webbplatsfiler. Intervjun behöver precisera personlig bakgrund, certifiering, innehåll i inspelningar och uppföljning, hållbar svarstid samt tillstånd för citat.

## Verifiering

Ordinarie bygge: npm run build. Lokal granskning: npx playwright test --config preview-tests.config.js. Nio tester täcker förfrågan utan överföring, validering, telefon/Google Meet, fokus/Escape, testinformation, mobilmeny, scrollmål, frivillig videoladdning och 320/390/768/1440 px.

På Windows användes lokalt klient- och serverbygge med preserveSymlinks, förgenerering av 8 sidor från serverbygget samt statiska testfiler direkt i webbläsaren på grund av miljöns begränsning av nätverk och sökvägsupplösning. Fyra kontrollerade text/färg-par hade kontrast 4,69:1–10,43:1 på sina läsytor; detta är inte en fullständig WCAG-revision.
