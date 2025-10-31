import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionSectionProps {
  items: AccordionItem[];
  className?: string;
}

export default function AccordionSection({ items, className = "" }: AccordionSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item, index) => (
        <div
          key={index}
          className="glass floating rounded-2xl overflow-hidden transition-smooth hover:shadow-xl"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between p-6 text-left transition-smooth hover:bg-white/50"
          >
            <h3 className="text-lg font-semibold text-foreground pr-4">
              {item.title}
            </h3>
            <ChevronDown
              className={`w-5 h-5 text-accent transition-smooth flex-shrink-0 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
