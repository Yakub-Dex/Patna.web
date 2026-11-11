import React, { useState } from 'react';
import { X, Check, Copy, ExternalLink, Code2 } from 'lucide-react';
import { REQUIRED_PLACEHOLDERS, PATNA_CONFIG } from '../config/patnaConfig';

interface PlaceholdersModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PlaceholdersModal: React.FC<PlaceholdersModalProps> = ({ isOpen, onClose }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-2xl rounded-2xl border hairline-border bg-white dark:bg-[#121514] text-[#141716] dark:text-[#E8EAE9] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b hairline-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Code2 className="w-5 h-5 text-[#2541b2]" />
            <h3 className="text-base font-semibold">Production Handover Checklist & Placeholders</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          <p className="text-sm text-[#5B615E] dark:text-[#9BA19E]">
            This website is fully configured with centralized placeholders in{' '}
            <code className="text-xs font-mono bg-neutral-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded text-[#2541b2]">
              src/config/patnaConfig.ts
            </code>
            . Replace the following values before going live:
          </p>

          <div className="space-y-4">
            {REQUIRED_PLACEHOLDERS.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border hairline-border bg-neutral-50/50 dark:bg-[#161918]"
              >
                <div className="flex items-start justify-between gap-4 mb-1">
                  <div>
                    <span className="text-xs font-mono font-bold text-[#2541b2] dark:text-[#5B7CF6] block">
                      {item.label}
                    </span>
                    <span className="text-xs font-mono text-neutral-400">
                      Key: {item.key} · Location: {item.fileLocation}
                    </span>
                  </div>

                  <button
                    onClick={() => handleCopy(item.current, item.key)}
                    className="p-1.5 rounded-md border hairline-border bg-white dark:bg-[#1B1F1D] text-xs font-mono hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors flex items-center gap-1 shrink-0"
                    title="Copy placeholder value"
                  >
                    {copiedKey === item.key ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-blue-600" />
                        <span className="text-blue-600 text-[11px]">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-neutral-400" />
                        <span className="text-[11px]">Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="mt-2 p-2 rounded bg-white dark:bg-[#101211] border hairline-border text-xs font-mono text-[#141716] dark:text-[#E8EAE9] break-all">
                  {item.current}
                </div>

                <p className="mt-2 text-xs text-[#5B615E] dark:text-[#9BA19E]">
                  {item.purpose}
                </p>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-blue-50 dark:bg-[#121B38] border border-blue-500/20 text-xs text-[#2541b2] dark:text-[#5B7CF6] leading-relaxed">
            <strong>Deployment Note:</strong> When ready to deploy, update{' '}
            <code className="font-mono">PATNA_CONFIG.whatsappRaw</code> to your live Twilio / Meta WhatsApp Business Cloud phone number (e.g., 2557XXXXXXXX). All buttons on the page will automatically sync without modifying UI markup.
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t hairline-border bg-neutral-50 dark:bg-[#151817] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold rounded-lg text-white bg-[#2541b2] hover:bg-[#1D3394] transition-colors"
          >
            Done Reviewing
          </button>
        </div>
      </div>
    </div>
  );
};
