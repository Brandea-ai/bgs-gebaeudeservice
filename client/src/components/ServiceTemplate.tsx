'use client'

import { ReactNode } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";
import SwissNavigation from "@/components/SwissNavigation";
import SwissFooter from "@/components/SwissFooter";

interface ServiceTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  benefits: string[];
  process?: string[];
  additionalContent?: ReactNode;
}

export default function ServiceTemplate({
  title,
  subtitle,
  description,
  image,
  features,
  benefits,
  process,
  additionalContent
}: ServiceTemplateProps) {
  return (
    <div className="min-h-screen bg-white">
      <SwissNavigation />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-white via-red-50/30 to-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-primary font-semibold mb-4">{subtitle}</div>
              <h1 className="text-5xl font-bold text-slate-900 leading-tight mb-6">
                {title}
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                {description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/kontakt">
                  <Button size="lg">
                    Jetzt Anfragen
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <a href="tel:+41413205610">
                  <Button size="lg" variant="outline">
                    +41 41 320 56 10
                  </Button>
                </a>
              </div>
            </div>
            <div>
              <img 
                src={image}
                alt={title}
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <h2 className="text-3xl font-bold mb-6">Leistungsumfang</h2>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-3xl font-bold mb-6">Ihre Vorteile</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {process && process.length > 0 && (
        <section className="py-20 bg-slate-50">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-12">Unser Prozess</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <Card key={index} className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {index + 1}
                  </div>
                  <p className="text-slate-700">{step}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {additionalContent}

      <section className="py-20 bg-gradient-to-br from-primary/10 via-red-50 to-primary/10">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Bereit für professionelle Reinigung?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Kontaktieren Sie uns für ein unverbindliches Angebot.
            </p>
            <Link href="/kontakt">
              <Button size="lg" className="text-lg px-8">
                Jetzt Kontakt aufnehmen
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <SwissFooter />
    </div>
  );
}
