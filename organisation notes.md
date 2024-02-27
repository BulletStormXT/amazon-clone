# Amazon Clone

## Hinweise

Bilder im public Ordner
Jeder sollte ca. 10 Produkte im json erstellen und mit users und orders zuordnen (für jeden )
Wir haben 40 Produkte mit 5 Userdaten (users, orders)
Jeder sucht 10 Produkte für Elektronik zusammen mit Namen, Bild und Preis
(mp3player, Tablets, Smartphones und Laptops ✔)

## Packages

TailwindCSS, React Icons fa, React Router, json server, concurrently nodemon --save-dev, postcss-loader

## Arbeitsaufträge

1. Warenkorb (Warenkorb Symbol mit counter etabliert, product cards button erstellt. Verlinkung wird aufgebaut)
2. Benutzerauthentifizierung
3. Bestellvorgang
4. Admit-Verwaltung (optional)
5. Json Server (angefangen, betriebsbereit)
6. Navigation, routes, pages imports/exports

## Planungsschritte

Wir arbeiten über liveshare, nutzen aber auch neben der main branch eine weitere refactoring branch
Entscheidung Vite (cra verursacht errors postcss module not found und probs mit usecontext)
Entscheidung Tailwind und/oder Bootstrap
Tailwind installiert
Icons über React-Icons/Fontawesome
desktop first, mobile später responsive anpassen
einheitliche font-family, color swatches etc.
Wir arbeiten mit react-router Version 6. Daher alle neue codes updaten [](https://reactrouter.com/en/main/start/overview)

## ChatGPT Plan

Hier ist ein grober Plan für die Erstellung eines Amazon-Klons mit React. Dieser Plan gliedert sich in verschiedene Arbeitsschritte, die du bei der Entwicklung berücksichtigen kannst:

1. Projektvorbereitung und -setup:
   • Installiere Node.js, npm (Node Package Manager) oder yarn (alternativ).
   • Erstelle ein neues React-Projekt mit Create React App oder einem ähnlichen Tool.
   • Richte das Projektverzeichnis ein und konfiguriere die grundlegenden Einstellungen.
2. Benutzeroberfläche entwerfen:
   • Skizziere die Benutzeroberfläche deines Amazon-Klons.
   • Identifiziere die Hauptkomponenten wie Header, Footer, Produktliste, Produktseite, Warenkorb usw.
   • Designe das Layout und die Navigation.
3. Komponenten erstellen:
   • Erstelle React-Komponenten für jede Seite und jede Funktion deiner Anwendung.
   • Implementiere die Logik für jede Komponente, wie das Abrufen von Produktdaten, das Hinzufügen von Produkten zum Warenkorb usw.
4. Datenverwaltung einrichten (aktuell nicht relevant):
   • Wähle eine geeignete Methode zur Verwaltung des Zustands deiner Anwendung aus, z. B. React Context API oder Redux.
   • Erstelle Store-Konfigurationen, Reducer und Actions für die Zustandsverwaltung.
5. Produktdaten verwalten:
   • Implementiere die Möglichkeit, Produktdaten aus einer Datenquelle (z. B. einer API oder einer Mock-Datenbank) abzurufen.
   • Speichere die Produktdaten im Zustand der Anwendung und zeige sie in den entsprechenden Komponenten an.
6. Benutzerinteraktionen implementieren:
   • Füge die erforderlichen Interaktionsmöglichkeiten hinzu, z. B. das Hinzufügen von Produkten zum Warenkorb, das Entfernen von Produkten, das Aktualisieren der Produktmenge usw.
   • Implementiere die Funktionalität für die Anmeldung und Registrierung von Benutzern, falls erforderlich.
7. Warenkorbverwaltung:
   • Implementiere die Warenkorbseite, auf der Benutzer ihre ausgewählten Produkte anzeigen können.
   • Füge die Möglichkeit hinzu, Produkte aus dem Warenkorb zu entfernen oder die Mengen anzupassen.
   • Implementiere die Checkout-Funktionalität.
8. Styling und Design (Sass nicht relevant):
   • Füge CSS-Stylesheets hinzu oder verwende CSS-Präprozessoren wie Sass, um das Aussehen deiner Anwendung anzupassen.
   • Verwende geeignete Bibliotheken oder Frameworks wie Material-UI, Bootstrap oder Tailwind CSS für ein ansprechendes Design.
   •
9. Testing (aktuell nicht relevant):
   • Führe Tests für die verschiedenen Funktionen deiner Anwendung durch, sowohl für die Benutzeroberfläche als auch für die Logik.
   • Verwende Test-Frameworks wie Jest und Enzyme oder React Testing Library für das Testen von React-Komponenten.
10. Optimierung und Performance:
    • Überprüfe deine Anwendung auf mögliche Performance-Probleme und optimiere sie entsprechend.
    • Verwende Techniken wie Code-Splitting, Lazy Loading und Caching, um die Ladezeiten zu verbessern und die Benutzererfahrung zu optimieren.
11. Dokumentation und Bereitstellung:
    • Dokumentiere den Code und die Funktionalitäten deiner Anwendung für zukünftige Entwickler oder für dich selbst.
    • Bereite deine Anwendung für die Bereitstellung vor, indem du sie bündelst, minimierst und auf einen Hosting-Service wie Netlify, Vercel oder AWS hochlädst.
12. Feedback einholen und iterieren:
    • Veröffentliche deine Anwendung und sammle Feedback von Benutzern.
    • Analysiere das Feedback und identifiziere mögliche Verbesserungen oder neue Funktionen, die hinzugefügt werden könnten.
    • Iteriere über deine Anwendung und aktualisiere sie entsprechend.
    Dieser Plan ist recht allgemein gehalten und kann je nach den Anforderungen und dem Umfang deines Projekts angepasst werden. Viel Erfolg bei der Entwicklung deines Amazon-Klons mit React!

### Todo

- [ ] Position Fixed am Ende aus dem Footer wieder entfernen

## CMD 4 Vite

- [x] npm create vite@latest ./ -- --template react
- [x] npm install -D tailwindcss
- [x] npx tailwindcss init
- [x] npm install --legacy-peer-deps -D postcss autoprefixer
- [x] npx tailwindcss init -p
- [x] npm install react-router-dom
- [x] npm install axios
- [x] npm install react-icons
- [x] npm install json-server
- [x] npm install concurrently nodemon --save-dev

OR
npm create vite@latest ./ -- --template react && npm install -D tailwindcss && npx tailwindcss init && npm install --legacy-peer-deps -D postcss autoprefixer && npx tailwindcss init -p && npm install react-router-dom axios react-icons json-server && npm install concurrently nodemon --save-dev

Danke @VCorvinus hab es schon mal mithilfe deiner Liste soweit installiert ;-)

npm run cdev (für das Öffnen von vite und json)

Changed Login to LoginPage
Corrected path in Routes
Added LoginForm

Bye, see ya later~!
