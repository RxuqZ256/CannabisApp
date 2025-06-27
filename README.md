# CannabisApp

Dieses Projekt stellt eine einfache Vergleichs-App für Cannabisprodukte bereit. 
Ziel ist es, unterschiedliche Sorten samt Eigenschaften wie THC- und CBD-Gehalt
zu vergleichen. Neben Beschreibung, THC- und CBD-Werten stehen nun weitere
Felder wie Typ, Aroma, Herkunft und medizinische Verwendung bereit. Eine
Suchfunktion ermöglicht das Filtern nach Namen sowie nach minimalem THC- und
CBD-Gehalt.
Beim Start erscheint nun ein Hauptmenü, über das die einzelnen Bereiche
aufgerufen werden können.

Die Oberfläche verwendet nun ein moderneres Layout mit Karten und
Responsive-Design.

## Lokale Nutzung

1. Repository klonen oder herunterladen.
2. `index.html` in einem Browser öffnen. Alternativ kann ein einfacher
   Entwicklungsserver (z. B. `npx serve` oder die Live-Server-Erweiterung in VS Code)
   verwendet werden.
3. **Hinweis:** `app.js` wird durch die HTML-Seite eingebunden und ist nicht f\u00fcr
   die Ausf\u00fchrung mit Node gedacht. Bei einem Versuch mit `node app.js` erscheint
   typischerweise der Fehler `ReferenceError: document is not defined`.

Im Bereich "Vergleich" wird eine Liste verschiedener Sorten angezeigt. Über das
Suchfeld lassen sich die Einträge filtern.

## GitHub Pages

Um die App ohne erneutes Herunterladen zu verwenden, kann sie auf GitHub Pages
bereitgestellt werden. Das Repository enthält dafür einen Workflow unter
`.github/workflows/gh-pages.yml`.

1. Repository auf GitHub erstellen und die Dateien hochladen oder per `git push`
   übertragen.
2. In den Repository-Einstellungen unter **Pages** als Quelle **GitHub Actions**
   auswählen.
3. Bei jedem Push auf den Branch `main` veröffentlicht der Workflow die App und
   zeigt die zugehörige URL im "Pages"-Bereich an.

## Lizenz

Dieses Projekt steht unter der [MIT-Lizenz](LICENSE).
