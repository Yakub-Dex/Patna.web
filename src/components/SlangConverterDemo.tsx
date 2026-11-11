import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { TranslationDictionary } from '../i18n/translations';

interface SlangConverterDemoProps {
  t: TranslationDictionary;
}

export const SlangConverterDemo: React.FC<SlangConverterDemoProps> = ({ t }) => {
  const [selectedExampleId, setSelectedExampleId] = useState<string>('slang-phone');

  const currentExample =
    t.slang.examples.find((ex) => ex.id === selectedExampleId) ||
    t.slang.examples[0];

  return (
    <div className="w-full">
      {/* Feature Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {t.slang.features.map((feature, idx) => (
          <div
            key={idx}
            className="p-5 rounded-xl border hairline-border bg-white dark:bg-[#121514]"
          >
            <div className="text-xs font-mono text-[#2541b2] dark:text-[#5B7CF6] mb-2 font-semibold">
              0{idx + 1} //
            </div>
            <h4 className="text-base font-semibold text-[#141716] dark:text-[#E8EAE9] mb-1.5">
              {feature.title}
            </h4>
            <p className="text-xs sm:text-sm text-[#5B615E] dark:text-[#9BA19E] leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* Interactive Switcher */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <span className="text-xs font-mono text-[#717774] dark:text-[#8D9490]">
          {t.slang.demoToggleTitle}
        </span>
        <div className="inline-flex flex-wrap gap-1.5 p-1 rounded-lg border hairline-border bg-white dark:bg-[#151817]">
          {t.slang.examples.map((ex) => (
            <button
              key={ex.id}
              onClick={() => setSelectedExampleId(ex.id)}
              className={`px-3 py-1 text-xs font-mono rounded-md transition-colors ${
                selectedExampleId === ex.id
                  ? 'bg-[#2541b2] text-white font-medium'
                  : 'text-[#5B615E] dark:text-[#9BA19E] hover:text-[#141716] dark:hover:text-[#E8EAE9]'
              }`}
            >
              {ex.category}
            </button>
          ))}
        </div>
      </div>

      {/* Customer Message Showcase */}
      <div className="w-full p-6 sm:p-7 rounded-2xl border hairline-border bg-white dark:bg-[#121514] flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#717774] dark:text-[#8D9490] flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-neutral-400" />
              {t.slang.rawMessageLabel}
            </span>
            <span className="text-[11px] font-mono text-[#2541b2] dark:text-[#5B7CF6] px-2 py-0.5 rounded bg-[#2541b2]/10 border border-[#2541b2]/20">
              {currentExample.category}
            </span>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-[#F7F8F7] dark:bg-[#161918] border border-neutral-200 dark:border-neutral-800">
            <p className="text-sm sm:text-base italic leading-relaxed text-[#141716] dark:text-[#E8EAE9]">
              {currentExample.input}
            </p>
          </div>
        </div>

        <div className="mt-5 flex items-center gap-2 text-xs font-mono text-[#717774] dark:text-[#8D9490]">
          <span className="w-2 h-2 rounded-full bg-[#2541b2] dark:bg-[#5B7CF6]" />
          <span>Parsed automatically by Patna Local Language Engine</span>
        </div>
      </div>
    </div>
  );
};
