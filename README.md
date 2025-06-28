# CannabisApp

Dieses Projekt stellt eine einfache Vergleichs-App für Cannabisprodukte bereit. Ziel ist es, unterschiedliche Sorten samt Eigenschaften wie THC- und CBD-Gehalt zu vergleichen. Neben Beschreibung, THC- und CBD-Werten stehen nun weitere Felder wie Typ, Aroma, Herkunft und medizinische Verwendung bereit. Eine Suchfunktion ermöglicht das Filtern nach Namen sowie nach minimalem THC- und CBD-Gehalt. Beim Start erscheint ein Hauptmenü, über das die einzelnen Bereiche aufgerufen werden können.

Die Oberfläche verwendet ein modernes Layout mit Karten und Responsive-Design.

## Lokale Nutzung

1. Repository klonen oder herunterladen.
2. `index.html` im Browser öffnen. Alternativ kann ein einfacher Entwicklungsserver (z. B. `npx serve` oder die Live-Server-Erweiterung in VS Code) genutzt werden.
3. **Hinweis:** `app.js` wird durch die HTML-Seite eingebunden und ist nicht für die Ausführung mit Node gedacht. Ein Aufruf mit `node app.js` führt gewöhnlich zum Fehler `ReferenceError: document is not defined`.

Im Bereich „Vergleich“ wird eine Liste verschiedener Sorten angezeigt. Über das Suchfeld lassen sich die Einträge filtern.

## Lizenz

Dieses Projekt steht unter der [MIT-Lizenz](LICENSE).
