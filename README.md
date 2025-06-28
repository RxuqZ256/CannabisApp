# CannabisApp

Dieses Projekt stellt eine Vergleichs-App für Cannabisprodukte bereit. Ziel ist es, unterschiedliche Sorten mit Angaben zu THC- und CBD-Gehalt komfortabel zu vergleichen. Neben Beschreibung und Wirkstoffwerten gibt es Felder für Typ, Aroma, Herkunft und medizinische Verwendung. Ein Suchfeld erlaubt das Filtern nach Namen sowie nach minimalem THC- und CBD-Gehalt. Beim Start erscheint ein Hauptmenü, über das sich alle Bereiche der App aufrufen lassen.

Die Oberfläche nutzt ein modernes Karten-basiertes Layout. Im Bereich "Karte" wird eine Leaflet-Karte geladen, die anhand der Datei `zones.json` zeigt, wo das Rauchen erlaubt oder verboten ist. Wenn der Standort freigegeben wird, prüft die App, ob man sich in einer der Zonen befindet, und blendet einen Hinweis ein. Die Karte wird erst erstellt, wenn der Bereich geöffnet wird, damit sie korrekt angezeigt wird.

## Lokale Nutzung

1. Repository klonen oder herunterladen.
2. `index.html` im Browser öffnen. Alternativ kann ein einfacher Entwicklungsserver wie `npx serve` oder die Live-Server-Erweiterung in VS Code verwendet werden.
3. Die Liste der Produkte liegt in `products.json` und wird von `app.js` per `fetch` geladen. Diese Datei muss neben der HTML-Seite verfügbar sein.
4. **Hinweis:** `app.js` ist für die Ausführung im Browser gedacht. Bei `node app.js` erscheint daher der Fehler `ReferenceError: document is not defined`.
5. Optional können mit `npm test` einfache Tests ausgeführt werden. Derzeit wird nur der Text `no tests` ausgegeben.

Im Bereich "Vergleich" wird eine Liste verschiedener Sorten angezeigt, die sich über das Suchfeld filtern lässt.

## GitHub Pages

Um die App online zu verwenden, kann sie auf GitHub Pages bereitgestellt werden. Ein passender Workflow liegt unter `.github/workflows/gh-pages.yml`.

1. Repository auf GitHub erstellen und die Dateien hochladen oder per `git push` übertragen.
2. In den Repository-Einstellungen unter **Pages** als Quelle **GitHub Actions** auswählen.
3. Bei jedem Push auf den Branch `main` veröffentlicht der Workflow die App und zeigt die URL im "Pages"-Bereich an.

## Lizenz

Dieses Projekt steht unter der [MIT-Lizenz](LICENSE).
