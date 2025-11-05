#!/bin/bash

# BGS Next.js Migration Script - Professionell & Hochwertig
echo "🚀 Starte professionelle Next.js Migration..."

# Erstelle App-Verzeichnisstruktur
mkdir -p app/{premium,business,basis,standorte,blog,ueber-uns,kontakt,referenzen,impressum,datenschutz}

# Funktion zum Migrieren einer Page
migrate_page() {
  local src_file=$1
  local dest_dir=$2
  local filename=$(basename "$src_file")

  echo "📄 Migriere: $src_file → $dest_dir/page.tsx"

  # Kopiere und transformiere
  cat "$src_file" | \
    # Entferne react-helmet-async imports
    sed '/react-helmet-async/d' | \
    # Entferne Helmet Component
    sed '/<Helmet>/,/<\/Helmet>/d' | \
    # Ersetze wouter durch next/link
    sed "s|from 'wouter'|from 'next/link'|g" | \
    sed 's|from "wouter"|from "next/link"|g' | \
    # Ersetze <Link href zu <Link href (Next.js Syntax)
    sed 's|<Link href="\([^"]*\)">|<Link href="\1">|g' | \
    # Ersetze </Link>
    sed 's|</Link>|</Link>|g' | \
    # Füge 'use client' am Anfang hinzu
    sed '1i\
'\''use client'\''
' > "$dest_dir/page.tsx"
}

# Home Page
migrate_page "client/src/pages/SwissHome.tsx" "app"

# Premium Services
for service in Privatjet Yacht Housekeeping Luxusimmobilien; do
  service_lower=$(echo "$service" | tr '[:upper:]' '[:lower:]')
  mkdir -p "app/premium/$service_lower"
  migrate_page "client/src/pages/premium/$service.tsx" "app/premium/$service_lower"
done

# Business Services
for service in Bueroreinigung Baureinigung Industriereinigung Fassadenreinigung Fensterreinigung Aussenanlagen Hallenreinigung Maschinenreinigung FacilityManagement; do
  service_lower=$(echo "$service" | tr '[:upper:]' '[:lower:]' | sed 's/facilitymanagement/facility-management/')
  mkdir -p "app/business/$service_lower"
  if [ -f "client/src/pages/business/$service.tsx" ]; then
    migrate_page "client/src/pages/business/$service.tsx" "app/business/$service_lower"
  fi
done

# Basis Services
for service in Unterhaltsreinigung Hausmeisterservice Winterdienst Beschaffung Sonderleistungen; do
  service_lower=$(echo "$service" | tr '[:upper:]' '[:lower:]')
  mkdir -p "app/basis/$service_lower"
  migrate_page "client/src/pages/basis/$service.tsx" "app/basis/$service_lower"
done

# Standorte
for ort in Zuerich Zug Luzern; do
  ort_lower=$(echo "$ort" | tr '[:upper:]' '[:lower:]')
  mkdir -p "app/standorte/$ort_lower"
  migrate_page "client/src/pages/standorte/$ort.tsx" "app/standorte/$ort_lower"
done

# Blog Posts
mkdir -p app/blog/{richtige-reinigungsfirma-finden,professionelle-gebaeudereinigung,reinigungskosten-schweiz,umweltfreundliche-reinigung}
migrate_page "client/src/pages/Blog.tsx" "app/blog"
migrate_page "client/src/pages/blog/RichtigeReinigungsfirmaFinden.tsx" "app/blog/richtige-reinigungsfirma-finden"
migrate_page "client/src/pages/blog/ProfessionelleGebaeudereinigung.tsx" "app/blog/professionelle-gebaeudereinigung"
migrate_page "client/src/pages/blog/ReinigungskostenSchweiz.tsx" "app/blog/reinigungskosten-schweiz"
migrate_page "client/src/pages/blog/UmweltfreundlicheReinigung.tsx" "app/blog/umweltfreundliche-reinigung"

# Main Pages
migrate_page "client/src/pages/UeberUns.tsx" "app/ueber-uns"
migrate_page "client/src/pages/Kontakt.tsx" "app/kontakt"
migrate_page "client/src/pages/Referenzen.tsx" "app/referenzen"
migrate_page "client/src/pages/Impressum.tsx" "app/impressum"
migrate_page "client/src/pages/Datenschutz.tsx" "app/datenschutz"

# Not Found
mkdir -p app/not-found
cp "client/src/pages/NotFound.tsx" "app/not-found.tsx"

echo "✅ Migration abgeschlossen! Alle Pages wurden erfolgreich migriert."
echo "📊 Migrierte Pages:"
find app -name "page.tsx" | wc -l
