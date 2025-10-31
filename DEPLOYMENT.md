# BGS Website Deployment Anleitung

## Problem
Das Projekt hat sowohl einen Client (React/Vite) als auch einen Server (Express). Vercel muss nur den Client deployen.

## Lösung

### Option 1: Vercel Dashboard (Empfohlen)
1. Gehe zu https://vercel.com/brandea/bgs-gebaeudeservice
2. Klicke auf "Settings" → "Build and Deployment"
3. Ändere **Build Command** zu: `vite build`
4. Ändere **Output Directory** zu: `dist/public`
5. Klicke "Save"
6. Gehe zu "Deployments" und klicke auf "Redeploy" beim letzten Deployment

### Option 2: Vercel CLI (Lokal)
```bash
# Installiere Vercel CLI
npm i -g vercel

# Deploye
vercel --prod
```

## Umgebungsvariablen in Vercel setzen
Gehe zu Settings → Environment Variables und füge hinzu:
- `VITE_APP_TITLE` = `Swiss Reinigungsfirma - Professionelle Gebäudereinigung`
- `VITE_APP_LOGO` = `/swiss-logo.webp`

## Lokales Testen
```bash
# Development
pnpm dev

# Production Build testen
pnpm build
pnpm start
```

## Vercel.json
Die `vercel.json` Datei ist bereits konfiguriert:
```json
{
  "buildCommand": "vite build",
  "outputDirectory": "dist/public",
  "framework": "vite",
  "installCommand": "pnpm install"
}
```

## Status
✅ Repository geklont
✅ .env.example erstellt
✅ vercel.json erstellt
✅ Umgebungsvariablen in Vercel gesetzt
⚠️ Deployment zeigt Server-Code (muss mit Option 1 oder 2 oben behoben werden)
