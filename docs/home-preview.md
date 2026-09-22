# Startsida och konsultationsförfrågan – separat förhandsversion

Bas: main 5598db539224b9bc16893fa4c378fa03b139286f, 22 september 2026.

Ny startsida med konkret målgrupp, presenterad avsändare, arbetssätt, befintliga priser och frågor. Skog och porträtt återanvänds. Befintliga undersidor finns kvar; de ingår inte i den redaktionella omarbetningen.

Formuläret kräver namn och e-post. Telefon och tidsönskemål är frivilliga. Inga frågor om hälsa eller tidigare terapi. Dialogen har Escape, fokusbegränsning och återställt fokus. Bekräftelsen skiljer mellan förfrågan och bokad tid.

## Endast för granskning – slå inte ihop med produktion

Formuläret demonstrerar flödet lokalt. Det anropar inte boknings-API:t och skickar inga e-postmeddelanden. API:t returnerar 403 även vid direkt anrop. Statistik och sociala inbäddningar är avstängda via consent-bootstrap. Alla sidors robots-meta och Vercels svar anger noindex, nofollow. Förhandsversionen är inte åtkomstskyddad enbart genom noindex.

Integritetssidan beskriver testformuläret; den är inte en färdig integritetspolicy för verksamheten. Före produktionslansering behöver verklig personuppgiftshantering dokumenteras och den nya formulärmodellen kopplas till ett uppdaterat och verifierat API. Återställ produktionssamtycke och mätning i en separat produktionsändring. Återinför inte de borttagna hälsofälten.

Den förenklade startsidan visar inga klientomdömen eller inbäddad video. Befintliga citat har inte ändrats. Ingen garanti om resultat, svarstid eller vårdbehörighet har lagts till.

## Verifiering

Bygg med npm run build. Kör en separat lokal preview på port 4185 och npx playwright test --config preview-tests.config.js. De sex testerna täcker formulärvalidering, testbekräftelse utan nätverksöverföring, återställning, fokus, Escape, integritetslänk och bredderna 320, 390, 768 och 1440 px. Produktionsspecifika samtyckes- och analyskrav gäller inte denna avsiktligt isolerade demo.
