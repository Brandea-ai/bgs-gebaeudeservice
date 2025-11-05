#!/bin/bash

# Script to add AppointmentButton to all service pages

# List of files to update
FILES=(
  "client/src/pages/business/Bueroreinigung.tsx"
  "client/src/pages/business/Baureinigung.tsx"
  "client/src/pages/business/Industriereinigung.tsx"
  "client/src/pages/business/Fassadenreinigung.tsx"
  "client/src/pages/business/Fensterreinigung.tsx"
  "client/src/pages/business/Aussenanlagen.tsx"
  "client/src/pages/business/Hallenreinigung.tsx"
  "client/src/pages/business/Maschinenreinigung.tsx"
  "client/src/pages/business/FacilityManagement.tsx"
  "client/src/pages/basis/Unterhaltsreinigung.tsx"
  "client/src/pages/basis/Hausmeisterservice.tsx"
  "client/src/pages/basis/Winterdienst.tsx"
  "client/src/pages/basis/Beschaffung.tsx"
  "client/src/pages/basis/Sonderleistungen.tsx"
  "client/src/pages/premium/Privatjet.tsx"
  "client/src/pages/premium/Yacht.tsx"
  "client/src/pages/premium/Housekeeping.tsx"
  "client/src/pages/premium/Luxusimmobilien.tsx"
  "client/src/pages/standorte/Zuerich.tsx"
  "client/src/pages/standorte/Zug.tsx"
  "client/src/pages/standorte/Luzern.tsx"
)

echo "🚀 Updating ${#FILES[@]} pages with AppointmentButton..."

for file in "${FILES[@]}"; do
  if [ -f "$file" ]; then
    echo "📝 Processing: $file"

    # Add import if not exists
    if ! grep -q "import AppointmentButton" "$file"; then
      # Find the last import line and add after it
      sed -i '' '/^import.*from.*lucide-react/a\
import AppointmentButton from "@/components/AppointmentButton";
' "$file"
      echo "  ✅ Added import"
    fi

    # Replace phone button with AppointmentButton
    # Pattern 1: <Button ... >+41 41 320 56 10</Button>
    if grep -q "+41 41 320 56 10" "$file"; then
      # This is complex - better to do manually or with more sophisticated sed
      echo "  ⚠️  Found phone button - needs manual update"
    fi

    # Pattern 2: <a href="tel:+41413205610">
    if grep -q 'href="tel:' "$file"; then
      echo "  ⚠️  Found tel: link - needs manual update"
    fi

  else
    echo "❌ File not found: $file"
  fi
done

echo "✅ Done! Please review changes and replace phone buttons manually."
