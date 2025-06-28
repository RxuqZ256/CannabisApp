# CannabisApp

Dieses Projekt stellt eine einfache Vergleichs-App für Cannabisprodukte bereit.
Ziel ist es, unterschiedliche Sorten samt Eigenschaften wie THC- und CBD-Gehalt
zu vergleichen. Neben Beschreibung, THC- und CBD-Werten stehen nun weitere
Felder wie Typ, Aroma, Herkunft und medizinische Verwendung bereit. Eine
Suchfunktion ermöglicht das Filtern nach Namen sowie nach minimalem THC- und
CBD-Gehalt. Beim Start erscheint nun ein Hauptmenü, über das die einzelnen
Bereiche aufgerufen werden können.

Die Oberfläche verwendet nun ein moderneres Layout mit Karten und
Responsive-Design. Im Bereich "Karte" wird eine Leaflet-Karte geladen,
die anhand der Datei `zones.json` anzeigt, in welchen Gebieten das Rauchen
erlaubt oder verboten ist. Bei aktivierter Standortfreigabe prüft die App,
ob man sich in einer dieser Zonen befindet und blendet einen entsprechenden
Hinweis ein.
## Lokale Nutzung

1. Repository klonen oder herunterladen.
2. `index.html` in einem Browser öffnen. Alternativ kann ein einfacher
   Entwicklungsserver (z. B. `npx serve` oder die Live-Server-Erweiterung in
   VS Code) verwendet werden.
3. Die Liste der Produkte befindet sich jetzt in der Datei `products.json` und
   wird von `app.js` per `fetch` geladen. Stelle sicher, dass diese Datei neben
   der HTML-Seite verfügbar ist.
4. **Hinweis:** `app.js` wird von der HTML-Seite eingebunden und ist nicht für
   die Ausführung mit Node gedacht. Bei einem Versuch mit `node app.js`
   erscheint meist der Fehler `ReferenceError: document is not defined`.
5. Optional können mit `npm test` einfache Tests ausgeführt werden. Derzeit
   wird lediglich der Text `no tests` ausgegeben.

Im Bereich "Vergleich" wird eine Liste verschiedener Sorten angezeigt. Über das
Suchfeld lassen sich die Einträge filtern.

## GitHub Pages

Um die App ohne erneutes Herunterladen zu verwenden, kann sie auf GitHub Pages
bereitgestellt werden. Das Repository enthält dafür einen Workflow unter
`.github/workflows/gh-pages.yml`.

1. Repository auf GitHub erstellen und Dateien hochladen
   oder per `git push` übertragen.
2. In den Repository-Einstellungen unter **Pages** als Quelle
   **GitHub Actions** auswählen.
3. Bei jedem Push auf den Branch `main` veröffentlicht der Workflow die App und
   zeigt die zugehörige URL im "Pages"-Bereich an.

Nach Abschluss des Workflows sind deine Änderungen automatisch unter derselben
URL verfügbar. Das Deployen dauert in der Regel nur wenige Minuten.

## Lizenz

Dieses Projekt steht unter der [MIT-Lizenz](LICENSE).
