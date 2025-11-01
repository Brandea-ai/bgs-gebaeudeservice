import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { sendContactEmail } from "./email.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // CORS for development
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') {
      return res.sendStatus(200);
    }
    next();
  });

  // API Routes
  // Contact Form Endpoint
  app.post("/api/contact", async (req, res) => {
    console.log("📧 Contact form submission received:", { name: req.body.name, email: req.body.email });
    try {
      const { name, email, phone, service, message } = req.body;

      // Validation
      if (!name || !email || !message) {
        return res.status(400).json({ 
          success: false, 
          message: "Bitte füllen Sie alle Pflichtfelder aus." 
        });
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ 
          success: false, 
          message: "Bitte geben Sie eine gültige E-Mail-Adresse ein." 
        });
      }

      // Prepare email content
      const emailContent = {
        to: "info@brandea.de",
        from: email,
        subject: `Neue Kontaktanfrage von ${name}`,
        service: service || 'Nicht angegeben',
        text: `
Neue Kontaktanfrage über die Website

Name: ${name}
E-Mail: ${email}
Telefon: ${phone || 'Nicht angegeben'}
Gewünschte Leistung: ${service || 'Nicht angegeben'}

Nachricht:
${message}

---
Diese Nachricht wurde über das Kontaktformular auf brandea.de gesendet.
        `,
        html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #c44a2c 0%, #a83820 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
    .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
    .field { margin-bottom: 20px; }
    .label { font-weight: bold; color: #c44a2c; margin-bottom: 5px; }
    .value { background: white; padding: 10px; border-radius: 5px; border-left: 3px solid #c44a2c; }
    .message-box { background: white; padding: 20px; border-radius: 5px; border: 1px solid #ddd; margin-top: 10px; }
    .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0;">Neue Kontaktanfrage</h1>
      <p style="margin: 10px 0 0 0; opacity: 0.9;">Brandea Website Kontaktformular</p>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Name:</div>
        <div class="value">${name}</div>
      </div>
      <div class="field">
        <div class="label">E-Mail:</div>
        <div class="value"><a href="mailto:${email}">${email}</a></div>
      </div>
      <div class="field">
        <div class="label">Telefon:</div>
        <div class="value">${phone || 'Nicht angegeben'}</div>
      </div>
      <div class="field">
        <div class="label">Gewünschte Leistung:</div>
        <div class="value">${service || 'Nicht angegeben'}</div>
      </div>
      <div class="field">
        <div class="label">Nachricht:</div>
        <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
      </div>
      <div class="footer">
        Diese Nachricht wurde über das Kontaktformular auf brandea.de gesendet.
      </div>
    </div>
  </div>
</body>
</html>
        `
      };

      // Send email using Resend service
      console.log("📤 Attempting to send email via Resend...");
      try {
        const emailSent = await sendContactEmail({
          name,
          email,
          phone,
          service,
          message
        });

        if (emailSent) {
          console.log("✅ Email sent successfully!");
        } else {
          console.warn("⚠️  Email sending failed, but form submission logged");
        }
      } catch (emailError) {
        console.error("❌ Email sending error:", emailError);
        // Continue anyway - don't fail the form submission
      }

      // Return success response
      res.json({ 
        success: true, 
        message: "Vielen Dank für Ihre Nachricht! Wir melden uns in Kürze bei Ihnen." 
      });

    } catch (error) {
      console.error("❌ Error processing contact form:", error);
      console.error("Error details:", {
        message: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined
      });
      res.status(500).json({ 
        success: false, 
        message: "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut." 
      });
    }
  });

  // Health check endpoint
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  // This must be AFTER API routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
