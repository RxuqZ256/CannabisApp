# CannabisApp

Dieses Projekt stellt eine Vergleichs-App f\u00fcr Cannabisprodukte bereit. Ziel ist es, unterschiedliche Sorten mit Angaben zu THC- und CBD-Gehalt komfortabel zu vergleichen. Neben Beschreibung und Wirkstoffwerten gibt es Felder f\u00fcr Typ, Aroma, Herkunft und medizinische Verwendung. Ein Suchfeld erlaubt das Filtern nach Namen sowie nach minimalem THC- und CBD-Gehalt. Beim Start erscheint ein Hauptmen\u00fc, \u00fcber das sich alle Bereiche der App aufrufen lassen.

Die Oberfl\u00e4che nutzt ein modernes Karten-basiertes Layout. Im Bereich "Karte" wird eine Leaflet-Karte geladen, die anhand der Datei `zones.json` zeigt, wo das Rauchen erlaubt oder verboten ist. Wenn der Standort freigegeben wird, pr\u00fcft die App, ob man sich in einer der Zonen befindet, und blendet einen Hinweis ein. Die Karte wird erst erstellt, wenn der Bereich ge\u00f6ffnet wird, damit sie korrekt angezeigt wird.

## Lokale Nutzung

1. Repository klonen oder herunterladen.
2. `index.html` im Browser \u00f6ffnen. Alternativ kann ein einfacher Entwicklungsserver wie `npx serve` oder die Live-Server-Erweiterung in VS Code verwendet werden.
3. Die Liste der Produkte liegt in `products.json` und wird von `app.js` per `fetch` geladen. Diese Datei muss neben der HTML-Seite verf\u00fcgbar sein.
4. **Hinweis:** `app.js` ist f\u00fcr die Ausf\u00fchrung im Browser gedacht. Bei `node app.js` erscheint daher der Fehler `ReferenceError: document is not defined`.
5. Optional k\u00f6nnen mit `npm test` einfache Tests ausgef\u00fchrt werden. Derzeit wird nur der Text `no tests` ausgegeben.

Im Bereich "Vergleich" wird eine Liste verschiedener Sorten angezeigt, die sich \u00fcber das Suchfeld filtern l\u00e4sst.

## GitHub Pages

Um die App online zu verwenden, kann sie auf GitHub Pages bereitgestellt werden. Ein passender Workflow liegt unter `.github/workflows/gh-pages.yml`.

1. Repository auf GitHub erstellen und die Dateien hochladen oder per `git push` \u00fcbertragen.
2. In den Repository-Einstellungen unter **Pages** als Quelle **GitHub Actions** ausw\u00e4hlen.
3. Bei jedem Push auf den Branch `main` ver\u00f6ffentlicht der Workflow die App und zeigt die URL im "Pages"-Bereich an.

## Lizenz

Dieses Projekt steht unter der [MIT-Lizenz](LICENSE).
