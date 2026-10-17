# Startsida och konsultationsförfrågan – separat förhandsversion

Senast reviderad 17 oktober 2026. Produktionsbas: main 5598db539224b9bc16893fa4c378fa03b139286f. Startsidan, Om mig och Hypnoterapi online har bearbetats utifrån Johannes slutförda intervju. Övriga undersidor behålls med gemensamma text- och länkrättningar, men har inte genomgått en fullständig redaktionell omarbetning.

Skogen fyller första skärmen och följer med runt gemensamma läsytor. Öppningen innehåller tjänstebeskrivning, konsultation, informationslänk och utforskningspil. Porträtt och personlig introduktion kommer direkt efter öppningen. Tre vardagsberättelser ersätter problemrutorna. Menyn får ett kompakt läge vid scrollning och scrollmål lämnar plats för den. Brödtext är normalviktad och längre texter vänsterställda.

Intervjun har gett presentationen konkreta personliga uppgifter: över 20 år som skådespelare, vägen till hypnos genom egen erfarenhet, och personliga intressen. Den längre bakgrunden är utfällbar på Om mig. Yrkesbenämningen är Hypnoterapeut och Coach enligt Johannes instruktion; avsaknad av vårdlegitimation framhävs inte. En saklig beskrivning av arbetsområde och hänvisning finns i FAQ och på online-sidan.

Tre vardagsberättelser följer Johannes exempel: scrollandet när man längtar efter annat, uppskjutandet av det viktiga och att hålla inne med det egna för att ge andra plats. Arbetssättet beskriver faktiska frågor, utrymme för ovetande, val att behålla privata detaljer, och möjlighet att pausa eller säga nej. Samtal, hypnos, egen övning och uppföljning har tydliga roller. Sofias, Kevins och Eva- Lottes omdömen återges ordagrant med de namn och datum Johannes angav. Sofia visas först, de andra två är utfällbara. Ingen universell resultatgaranti har lagts till.

Introduktionsvideon är 20 minuter, ligger efter presentationen och laddas först när besökaren väljer att öppna den. Den inbäddade spelaren använder youtube-nocookie.com. Innehåll, förberedelser och avsaknad av manus/textalternativ framgår. Den första konsultationen är kostnadsfri och tar 30 minuter. Prisdialogen ligger kvar utanför huvudflödet. Enskild session: 3 000 kr, 90 minuter, introduktionsinspelning, en fördjupande inspelning och 30 minuters uppföljning. Transformationspaket enligt TranceMorf-metoden: 8 000 kr, fyra möten à 90 minuter, introduktionsinspelning, tre fördjupande inspelningar och 30 minuters uppföljning. Inspelningar för övning är cirka 20–30 minuter. Samma uppgifter används på online-sidan. Direktlänken /#priser öppnar prisdialogen.

Förfrågan kräver namn och e-post. Telefon är förvalt kontaktalternativ och kräver då telefonnummer; Google Meet kan väljas utan telefonnummer. Tidsönskemål är frivilliga. Ingen fråga om hälsa eller terapihistorik finns i första steget. Dialogen har tillgänglig benämning, inert bakgrund, fokusbegränsning, Escape och återställt fokus. Bekräftelsen skiljer förfrågan från bokad tid. Ingen osäker svarstid utlovas.

## Endast för granskning – slå inte ihop med produktion

Formuläret demonstrerar flödet lokalt utan nätverksöverföring, lagring eller e-post. API:t blockerar inskick. Statistik är avstängd och sidorna anger noindex, nofollow. Noindex är inte ett åtkomstskydd. YouTube aktiveras av besökarens val, Instagram finns som vanlig länk.

Enligt Johannes instruktion färdigställs fullständig integritetspolicy och ansvarsinformation efter övriga innehålls- och designändringar. Den befintliga informationen gäller enbart testformuläret. Produktionskoppling, faktisk e-postleverans, samtycke och mätning hör till lanseringsarbetet. Ingen produktionspublicering görs i denna leverans.

Intervjuformuläret och de fullständiga svaren ligger separat i uppgiftens outputs och förs inte in i webbprojektet. Endast redigerad webbtext publiceras i förhandsversionen. Mottagningstid är måndag–fredag 09–17; kväll och helg kan diskuteras. Automatisk mottagningsbekräftelse och personlig återkoppling hålls isär i formulärdemot. Någon exakt personlig svarstid har inte uppgetts och utlovas därför inte. Certifieringsår och formella verksamhetsuppgifter är inte ifyllda med antaganden.

## Verifiering

Ordinarie bygge: npm run build. Lokal granskning: npx playwright test --config preview-tests.config.js. Tio tester täcker förfrågan utan överföring, validering, telefon/Google Meet, fokus/Escape, testinformation, mobilmeny, scrollmål, frivillig videoladdning, priser och vägar mellan Om mig, online-sidan och startsidan samt 320/390/768/1440 px.

På Windows användes lokalt klient- och serverbygge med preserveSymlinks, förgenerering av 8 sidor från serverbygget samt statiska testfiler direkt i webbläsaren på grund av miljöns begränsning av nätverk och sökvägsupplösning. Fyra kontrollerade text/färg-par hade kontrast 4,69:1–10,43:1 på sina läsytor; detta är inte en fullständig WCAG-revision.
