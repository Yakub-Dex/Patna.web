import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { TranslationDictionary } from '../i18n/translations';

interface FaqAccordionProps {
  t: TranslationDictionary;
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({ t }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full divide-y hairline-divide border-y hairline-border">
      {t.faq.items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} className="py-5 sm:py-6 transition-colors">
            <button
              onClick={() => toggle(idx)}
              className="w-full flex items-start justify-between gap-4 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2541b2] rounded-md"
              aria-expanded={isOpen}
            >
              <div className="flex items-baseline gap-4">
                <span className="text-xs font-mono text-[#2541b2] dark:text-[#5B7CF6] font-semibold shrink-0">
                  {idx < 9 ? `0${idx + 1}` : idx + 1}
                </span>
                <h4 className="text-base sm:text-lg font-semibold text-[#141716] dark:text-[#E8EAE9] group-hover:text-[#2541b2] transition-colors">
                  {item.q}
                </h4>
              </div>
              <span
                className={`p-1 rounded-md text-neutral-400 group-hover:text-[#141716] dark:group-hover:text-[#E8EAE9] transition-transform duration-200 shrink-0 ${
                  isOpen ? 'rotate-180 text-[#2541b2]' : ''
                }`}
              >
                <ChevronDown className="w-5 h-5" />
              </span>
            </button>

            {isOpen && (
              <div className="mt-4 pl-8 sm:pl-9 pr-4 text-sm sm:text-base text-[#5B615E] dark:text-[#9BA19E] leading-relaxed transition-all">
                <p>{item.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
