import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Downloads() {
  const downloads = [
    { title: "Brandea Unternehmenspräsentation", type: "PDF", size: "2.4 MB" },
    { title: "KI-Readiness Check", type: "PDF", size: "1.8 MB" },
    { title: "Fractional CXO Whitepaper", type: "PDF", size: "3.2 MB" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
              <span className="text-accent">Downloads</span> & Ressourcen
            </h1>
            <p className="text-xl text-muted-foreground">
              Nützliche Dokumente und Informationen für Sie
            </p>
          </div>
          <div className="space-y-4">
            {downloads.map((item, index) => (
              <div key={index} className="glass floating rounded-2xl p-8 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <FileText className="w-8 h-8 text-accent" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.type} • {item.size}</p>
                  </div>
                </div>
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
