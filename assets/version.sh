#!/bin/sh
# Hängt an CSS/JS eine Versionsnummer (Prüfsumme) an, damit Handys nach einem Update
# nicht die alten, zwischengespeicherten Dateien benutzen. Vor jedem Hochladen ausführen.
cd "$(dirname "$0")/.." || exit 1
for f in book.css book.js recipes.js; do
  v=$(shasum "assets/$f" | cut -c1-8)
  sed -i '' -E "s#assets/$f(\?v=[0-9a-f]+)?\"#assets/$f?v=$v\"#g" *.html
done
grep -ho 'assets/[a-z]*\.[a-z]*?v=[0-9a-f]*' index.html
