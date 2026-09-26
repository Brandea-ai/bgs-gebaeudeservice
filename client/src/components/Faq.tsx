import { ChevronDown } from 'lucide-react'
import RichText from './RichText'

/** Häufige Fragen als details im HTML, Antworten ohne JavaScript lesbar (M22) */
export default function Faq({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <div className="max-w-4xl divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
      {items.map((item) => (
        <details key={item.question} className="group px-6 py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
            <h3 className="text-base md:text-lg font-semibold text-slate-900">{item.question}</h3>
            <ChevronDown className="w-5 h-5 shrink-0 text-slate-500 transition-transform group-open:rotate-180" aria-hidden="true" />
          </summary>
          <p className="mt-3 text-slate-700 leading-relaxed">
            <RichText text={item.answer} />
          </p>
        </details>
      ))}
    </div>
  )
}
