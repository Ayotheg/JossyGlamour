#!/usr/bin/env bash
# Downloads every website image used in the Jossyglamour redesign into ./images
# Usage: bash download-images.sh
set -e
mkdir -p images
BASE="https://jossyglamour.com/wp-content/uploads"
for p in \
  2025/12/Jossy-img-3.jpeg \
  2025/12/Jossy-img-4.jpeg \
  2025/12/Jossy-img-6.jpeg \
  2025/12/Jossy-img-2.jpeg \
  2026/01/Jossy-img-2.jpeg \
  2026/01/Beuaty-img-123.jpeg \
  2026/01/FA-JossyGlamour-6.jpeg \
  2026/01/Styling-Creative-Services-001.jpeg \
  2026/01/Jossyglamour-Parafet-img-5.jpeg \
  2026/01/Jossyglamour-Parafet-img-6.jpeg \
  2026/01/Jossyglamour-Parafet-img-7.jpeg \
  2026/01/Jossyglamour-Parafet-img-8.jpeg
do
  name="$(echo "$p" | tr '/' '-')"   # e.g. 2026-01-Jossy-img-2.jpeg (keeps the two Jossy-img-2 files distinct)
  echo "→ $name"
  curl -fsSL "$BASE/$p" -o "images/$name"
done
echo "Done. Also copy logo.jpg and JossyGlamour-CEO.jpeg from the uploads download into ./images"
