import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch, useLocation } from "wouter";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import CookieConsent from "./components/CookieConsent";
import SwissHome from "./pages/SwissHome";
import NotFound from "./pages/NotFound";

// Premium Services
import Privatjet from "./pages/premium/Privatjet";
import Yacht from "./pages/premium/Yacht";
import Housekeeping from "./pages/premium/Housekeeping";
import Luxusimmobilien from "./pages/premium/Luxusimmobilien";

// Business Services
import Bueroreinigung from "./pages/business/Bueroreinigung";
import Baureinigung from "./pages/business/Baureinigung";
import Industriereinigung from "./pages/business/Industriereinigung";
import Fassadenreinigung from "./pages/business/Fassadenreinigung";
import Fensterreinigung from "./pages/business/Fensterreinigung";
import Aussenanlagen from "./pages/business/Aussenanlagen";
import Hallenreinigung from "./pages/business/Hallenreinigung";
import Maschinenreinigung from "./pages/business/Maschinenreinigung";
import FacilityManagement from "./pages/business/FacilityManagement";

// Basis Services
import Unterhaltsreinigung from "./pages/basis/Unterhaltsreinigung";
import Hausmeisterservice from "./pages/basis/Hausmeisterservice";
import Winterdienst from "./pages/basis/Winterdienst";
import Beschaffung from "./pages/basis/Beschaffung";
import Sonderleistungen from "./pages/basis/Sonderleistungen";
// Standorte
import Zuerich from "./pages/standorte/Zuerich";
import Zug from "./pages/standorte/Zug";
import Luzern from "./pages/standorte/Luzern";

// Main Pages
import UeberUns from "./pages/UeberUns";
import Kontakt from "./pages/Kontakt";
import Referenzen from "./pages/Referenzen";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";

// Blog
import Blog from "./pages/Blog";
import RichtigeReinigungsfirmaFinden from "./pages/blog/RichtigeReinigungsfirmaFinden";
import ProfessionelleGebaeudereinigung from "./pages/blog/ProfessionelleGebaeudereinigung";
import ReinigungskostenSchweiz from "./pages/blog/ReinigungskostenSchweiz";
import UmweltfreundlicheReinigung from "./pages/blog/UmweltfreundlicheReinigung";

function ScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location]);
  
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
      <Route path="/" component={SwissHome} />
      
      {/* Premium Services */}
      <Route path="/premium/privatjet" component={Privatjet} />
      <Route path="/premium/yacht" component={Yacht} />
      <Route path="/premium/housekeeping" component={Housekeeping} />
      <Route path="/premium/luxusimmobilien" component={Luxusimmobilien} />
      
      {/* Business Services */}
      <Route path="/business/bueroreinigung" component={Bueroreinigung} />
      <Route path="/business/baureinigung" component={Baureinigung} />
      <Route path="/business/industriereinigung" component={Industriereinigung} />
      <Route path="/business/fassadenreinigung" component={Fassadenreinigung} />
      <Route path="/business/fensterreinigung" component={Fensterreinigung} />
      <Route path="/business/aussenanlagen" component={Aussenanlagen} />
      <Route path="/business/hallenreinigung" component={Hallenreinigung} />
      <Route path="/business/maschinenreinigung" component={Maschinenreinigung} />
      <Route path="/business/facility-management" component={FacilityManagement} />
      
      {/* Basis Services */}
      <Route path="/basis/unterhaltsreinigung" component={Unterhaltsreinigung} />
      <Route path="/basis/hausmeisterservice" component={Hausmeisterservice} />
      <Route path="/basis/winterdienst" component={Winterdienst} />
      <Route path="/basis/beschaffung" component={Beschaffung} />
      <Route path="/basis/sonderleistungen" component={Sonderleistungen} />
            {/* Standorte */}
      <Route path="/standorte/zuerich" component={Zuerich} />
      <Route path="/standorte/zug" component={Zug} />
      <Route path="/standorte/luzern" component={Luzern} />
      
      {/* Blog */}
      <Route path="/blog" component={Blog} />
      <Route path="/blog/richtige-reinigungsfirma-finden" component={RichtigeReinigungsfirmaFinden} />
      <Route path="/blog/professionelle-gebaeudereinigung" component={ProfessionelleGebaeudereinigung} />
      <Route path="/blog/reinigungskosten-schweiz" component={ReinigungskostenSchweiz} />
      <Route path="/blog/umweltfreundliche-reinigung" component={UmweltfreundlicheReinigung} />
      
      {/* Main Pages */}
      <Route path="/ueber-uns" component={UeberUns} />
      <Route path="/kontakt" component={Kontakt} />
      <Route path="/referenzen" component={Referenzen} />
      <Route path="/impressum" component={Impressum} />
      <Route path="/datenschutz" component={Datenschutz} />
      
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <ThemeProvider defaultTheme="light">
          <TooltipProvider>
            <Toaster />
            <CookieConsent />
            <Router />
          </TooltipProvider>
        </ThemeProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
