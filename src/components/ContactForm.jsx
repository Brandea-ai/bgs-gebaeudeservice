import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card.jsx'
import { CheckCircle2, Loader2, Phone, Mail, MapPin, Clock } from 'lucide-react'

// Validation Schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name muss mindestens 2 Zeichen lang sein'),
  email: z.string().email('Ungültige E-Mail-Adresse'),
  phone: z.string().min(10, 'Ungültige Telefonnummer').optional().or(z.literal('')),
  company: z.string().optional(),
  serviceType: z.string().min(1, 'Bitte wählen Sie einen Service aus'),
  location: z.string().min(1, 'Bitte wählen Sie einen Standort aus'),
  message: z.string().min(10, 'Nachricht muss mindestens 10 Zeichen lang sein'),
  privacy: z.boolean().refine(val => val === true, 'Sie müssen die Datenschutzerklärung akzeptieren')
})

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data) => {
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log('Form submitted:', data)
    setIsSubmitting(false)
    setSubmitSuccess(true)
    reset()

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000)
  }

  return (
    <div className="grid lg:grid-cols-2 gap-12">
      {/* Contact Information */}
      <div className="space-y-8">
        <div>
          <h2 className="text-4xl font-bold text-[#0A2540] mb-4">
            Kontaktieren Sie uns
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Wir freuen uns auf Ihre Anfrage und beraten Sie gerne kostenlos und unverbindlich zu allen unseren Dienstleistungen.
          </p>
        </div>

        <div className="space-y-6">
          <Card className="border-2 border-[#0A2540]/10 hover:border-[#0A2540]/30 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-[#0A2540]/10 p-3 rounded-xl">
                  <Phone className="h-6 w-6 text-[#0A2540]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0A2540] mb-1">Telefon</h4>
                  <a href="tel:+41413205610" className="text-gray-600 hover:text-[#0A2540] transition-colors">
                    +41 41 320 56 10
                  </a>
                  <p className="text-sm text-gray-500 mt-1">Mo-Fr: 07:00 - 18:00 Uhr</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-[#0A2540]/10 hover:border-[#0A2540]/30 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-[#0A2540]/10 p-3 rounded-xl">
                  <Mail className="h-6 w-6 text-[#0A2540]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0A2540] mb-1">E-Mail</h4>
                  <a href="mailto:info@bgs-service.ch" className="text-gray-600 hover:text-[#0A2540] transition-colors">
                    info@bgs-service.ch
                  </a>
                  <p className="text-sm text-gray-500 mt-1">Antwort innerhalb 24h</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-[#0A2540]/10 hover:border-[#0A2540]/30 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-[#0A2540]/10 p-3 rounded-xl">
                  <MapPin className="h-6 w-6 text-[#0A2540]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0A2540] mb-1">Hauptsitz</h4>
                  <p className="text-gray-600">
                    Tannhof 10<br />
                    6020 Emmenbrücke
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-[#C5A572]/10 to-[#C5A572]/5 border-2 border-[#C5A572]/20">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-[#C5A572]/20 p-3 rounded-xl">
                  <Clock className="h-6 w-6 text-[#C5A572]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#C5A572] mb-1">24/7 Notfall-Service</h4>
                  <p className="text-gray-700">
                    Für dringende Anfragen außerhalb der Geschäftszeiten
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Contact Form */}
      <Card className="border-2 border-gray-200">
        <CardHeader>
          <CardTitle className="text-2xl">Anfrage senden</CardTitle>
          <CardDescription>
            Füllen Sie das Formular aus und wir melden uns schnellstmöglich bei Ihnen.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {submitSuccess && (
            <div className="mb-6 p-4 bg-green-50 border-2 border-green-200 rounded-xl flex items-center space-x-3">
              <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0" />
              <div>
                <p className="font-semibold text-green-800">Vielen Dank für Ihre Anfrage!</p>
                <p className="text-sm text-green-700">Wir melden uns schnellstmöglich bei Ihnen.</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <div>
              <Label htmlFor="name" className="text-gray-700 font-semibold">
                Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="name"
                {...register('name')}
                placeholder="Ihr vollständiger Name"
                className={`mt-2 ${errors.name ? 'border-red-500' : ''}`}
              />
              {errors.name && (
                <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
              )}
            </div>

            {/* Email & Phone */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email" className="text-gray-700 font-semibold">
                  E-Mail <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  {...register('email')}
                  placeholder="ihre@email.ch"
                  className={`mt-2 ${errors.email ? 'border-red-500' : ''}`}
                />
                {errors.email && (
                  <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="phone" className="text-gray-700 font-semibold">
                  Telefon
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  {...register('phone')}
                  placeholder="+41 XX XXX XX XX"
                  className="mt-2"
                />
                {errors.phone && (
                  <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>
                )}
              </div>
            </div>

            {/* Company */}
            <div>
              <Label htmlFor="company" className="text-gray-700 font-semibold">
                Firma (optional)
              </Label>
              <Input
                id="company"
                {...register('company')}
                placeholder="Ihr Firmenname"
                className="mt-2"
              />
            </div>

            {/* Service Type & Location */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="serviceType" className="text-gray-700 font-semibold">
                  Service-Typ <span className="text-red-500">*</span>
                </Label>
                <Select onValueChange={(value) => setValue('serviceType', value)}>
                  <SelectTrigger className={`mt-2 ${errors.serviceType ? 'border-red-500' : ''}`}>
                    <SelectValue placeholder="Wählen Sie einen Service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="premium">Premium (Privatjet, Yacht)</SelectItem>
                    <SelectItem value="standard">Standard B2B (Industrie)</SelectItem>
                    <SelectItem value="essentiell">Essentiell (Büro, Unterhalt)</SelectItem>
                    <SelectItem value="other">Sonstiges</SelectItem>
                  </SelectContent>
                </Select>
                {errors.serviceType && (
                  <p className="text-sm text-red-500 mt-1">{errors.serviceType.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="location" className="text-gray-700 font-semibold">
                  Standort <span className="text-red-500">*</span>
                </Label>
                <Select onValueChange={(value) => setValue('location', value)}>
                  <SelectTrigger className={`mt-2 ${errors.location ? 'border-red-500' : ''}`}>
                    <SelectValue placeholder="Wählen Sie einen Standort" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="zurich">Zürich</SelectItem>
                    <SelectItem value="luzern">Luzern</SelectItem>
                    <SelectItem value="stgallen">St. Gallen</SelectItem>
                    <SelectItem value="other">Andere Region</SelectItem>
                  </SelectContent>
                </Select>
                {errors.location && (
                  <p className="text-sm text-red-500 mt-1">{errors.location.message}</p>
                )}
              </div>
            </div>

            {/* Message */}
            <div>
              <Label htmlFor="message" className="text-gray-700 font-semibold">
                Nachricht <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="message"
                {...register('message')}
                placeholder="Beschreiben Sie Ihre Anforderungen..."
                rows={5}
                className={`mt-2 ${errors.message ? 'border-red-500' : ''}`}
              />
              {errors.message && (
                <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>
              )}
            </div>

            {/* Privacy Checkbox */}
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="privacy"
                {...register('privacy')}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-[#0A2540] focus:ring-[#0A2540]"
              />
              <Label htmlFor="privacy" className="text-sm text-gray-600 cursor-pointer">
                Ich habe die <a href="/datenschutz" className="text-[#0A2540] underline hover:text-[#1a3a5f]">Datenschutzerklärung</a> gelesen und akzeptiere diese. <span className="text-red-500">*</span>
              </Label>
            </div>
            {errors.privacy && (
              <p className="text-sm text-red-500">{errors.privacy.message}</p>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-[#0A2540] to-[#1a3a5f] hover:from-[#1a3a5f] hover:to-[#0A2540] text-white text-lg py-6"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Wird gesendet...
                </>
              ) : (
                'Anfrage senden'
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
