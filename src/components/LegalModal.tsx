import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { PATNA_CONFIG } from '../config/patnaConfig';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-3xl rounded-2xl border hairline-border bg-white dark:bg-[#121514] text-[#141716] dark:text-[#E8EAE9] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b hairline-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            {type === 'privacy' ? (
              <ShieldCheck className="w-5 h-5 text-[#2541b2]" />
            ) : (
              <FileText className="w-5 h-5 text-[#2541b2]" />
            )}
            <h3 className="text-base font-semibold">
              {type === 'privacy' ? 'Privacy Policy' : 'Terms of Service'} — {PATNA_CONFIG.companyName}
            </h3>
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
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-[#5B615E] dark:text-[#9BA19E] leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p>
                <strong>Effective Date:</strong> January 2026. Operated by{' '}
                <strong>{PATNA_CONFIG.companyName}</strong>, Dar es Salaam, Tanzania.
              </p>
              <h4 className="text-sm font-semibold text-[#141716] dark:text-[#E8EAE9] pt-2">
                1. Information We Collect
              </h4>
              <p>
                When you send an enquiry to Patna via WhatsApp, SMS, Web, or App, we collect your phone number and the text of your message solely to process, parse, and route your request to matched local providers.
              </p>
              <h4 className="text-sm font-semibold text-[#141716] dark:text-[#E8EAE9] pt-2">
                2. Number Masking & Provider Interactions
              </h4>
              <p>
                Your phone number is strictly masked from merchants and providers during the quotation phase. Providers only see the parsed items, location bounds, and budget. Only when you explicitly click to confirm a booking or purchase with a specific provider is contact information exchanged.
              </p>
              <h4 className="text-sm font-semibold text-[#141716] dark:text-[#E8EAE9] pt-2">
                3. Zero Spam Guarantee
              </h4>
              <p>
                We will never sell or rent your contact details to third-party telemarketers or ad networks. You may opt out of any active enquiry at any moment by sending "STOP" or "SITAKI".
              </p>
              <h4 className="text-sm font-semibold text-[#141716] dark:text-[#E8EAE9] pt-2">
                4. Data Protection & Tanzanian Law
              </h4>
              <p>
                {PATNA_CONFIG.companyName} complies with the Personal Data Protection Act of the United Republic of Tanzania and telecommunication guidelines set forth by TCRA.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>Effective Date:</strong> January 2026. Welcome to{' '}
                <strong>{PATNA_CONFIG.brandName}</strong>, a service operated by{' '}
                <strong>{PATNA_CONFIG.companyName}</strong> in Dar es Salaam, Tanzania.
              </p>
              <h4 className="text-sm font-semibold text-[#141716] dark:text-[#E8EAE9] pt-2">
                1. Service Description
              </h4>
              <p>
                Patna is an omnichannel search and recommendation service enabling consumers to solicit offers from independent local providers in Tanzania across WhatsApp, SMS, Web, and mobile applications.
              </p>
              <h4 className="text-sm font-semibold text-[#141716] dark:text-[#E8EAE9] pt-2">
                2. Nature of Platform & Provider Independence
              </h4>
              <p>
                Patna acts as an informational matchmaker. Independent businesses (shops, transporters, hotels, restaurants, and technicians) are solely responsible for the fulfillment, quality, warranty, and pricing of their goods and services.
              </p>
              <h4 className="text-sm font-semibold text-[#141716] dark:text-[#E8EAE9] pt-2">
                3. Merchant Obligations
              </h4>
              <p>
                All merchants, traders, and service providers agree to quote honest, current pricing, respect customer privacy, and deliver authentic merchandise under the laws of Tanzania.
              </p>
              <h4 className="text-sm font-semibold text-[#141716] dark:text-[#E8EAE9] pt-2">
                4. Governing Law
              </h4>
              <p>
                These terms are governed by and construed in accordance with the laws of the United Republic of Tanzania. Any disputes shall be subject to the jurisdiction of the courts of Dar es Salaam.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t hairline-border bg-neutral-50 dark:bg-[#151817] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold rounded-lg text-white bg-[#2541b2] hover:bg-[#1D3394] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
