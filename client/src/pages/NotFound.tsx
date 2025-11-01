import { Button } from "@/components/ui/button";
import { Home as HomeIcon } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="glass floating rounded-3xl p-12">
          <h1 className="text-9xl font-bold text-accent mb-4">404</h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4">
            Seite nicht gefunden
          </h2>
          <p className="text-muted-foreground mb-8">
            Die von Ihnen gesuchte Seite existiert leider nicht oder wurde verschoben.
          </p>
          <Link href="/">
            <Button size="lg" className="text-lg px-8">
              <HomeIcon className="mr-2 w-5 h-5" />
              Zurück zur Startseite
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
