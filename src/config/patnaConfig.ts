/**
 * Patna Configuration & Placeholders
 * 
 * Replace these placeholder values with your live production credentials,
 * official WhatsApp business number, SMS shortcodes, and contact emails.
 */

export interface PatnaConfig {
  companyName: string;
  brandName: string;
  tagline: string;
  headquarters: string;
  country: string;
  whatsappNumber: string; // Display format, e.g., '+255 700 000 000'
  whatsappRaw: string; // Digits only with country code for wa.me links, e.g., '255700000000'
  smsNumber: string;
  smsShortcode: string;
  contactEmail: string;
  infoEmail: string;
  businessEmail: string;
  supportPhone: string;
  webAppUrl: string;
  androidAppStatus: 'coming_soon' | 'live';
  iosAppStatus: 'coming_soon' | 'live';
  instagramUrl: string;
  facebookUrl: string;
  copyrightYear: number;
  solutionByline: string;
}

export const PATNA_CONFIG: PatnaConfig = {
  companyName: 'Patnacom Services. A Service Company',
  solutionByline: 'A Patnacom Services Solution',
  brandName: 'Patna',
  tagline: 'WhatsApp & Multi-Channel Search for Tanzania',
  headquarters: 'Dar es Salaam',
  country: 'Tanzania',
  whatsappNumber: '+255 683 007005',
  whatsappRaw: '255683007005',
  smsNumber: '+255 683 007005',
  smsShortcode: '15990', // PLACEHOLDER: Local Tanzanian carrier shortcode
  contactEmail: 'support@patnacom.co.tz', // Customer inquiries & support email
  infoEmail: 'info@patnacom.co.tz', // General information email
  businessEmail: 'partners@patnacom.co.tz', // Merchant onboarding email
  supportPhone: '+255 683 007005',
  webAppUrl: 'https://patna.co.tz',
  instagramUrl: 'https://instagram.com/patnacom', // PLACEHOLDER: Instagram handle
  facebookUrl: 'https://facebook.com/patnacom', // PLACEHOLDER: Facebook page
  androidAppStatus: 'coming_soon',
  iosAppStatus: 'coming_soon',
  copyrightYear: 2026,
};

/**
 * Generates an official WhatsApp Click-to-Chat URL
 */
export function getWhatsAppUrl(message?: string): string {
  const base = `https://wa.me/${PATNA_CONFIG.whatsappRaw}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

/**
 * Registry of placeholders for user handover checklist
 */
export const REQUIRED_PLACEHOLDERS = [
  {
    key: 'whatsappRaw',
    label: 'WhatsApp Business Phone Number',
    current: PATNA_CONFIG.whatsappRaw,
    fileLocation: 'src/config/patnaConfig.ts',
    purpose: 'Directs all "Start on WhatsApp" and provider onboarding chats.',
  },
  {
    key: 'smsNumber / smsShortcode',
    label: 'SMS Gateway / Shortcode',
    current: `${PATNA_CONFIG.smsShortcode} (${PATNA_CONFIG.smsNumber})`,
    fileLocation: 'src/config/patnaConfig.ts',
    purpose: 'Enables basic feature phone users and offline search.',
  },
  {
    key: 'contactEmail / infoEmail',
    label: 'Official Contact & Info Emails',
    current: `${PATNA_CONFIG.contactEmail} · ${PATNA_CONFIG.infoEmail}`,
    fileLocation: 'src/config/patnaConfig.ts',
    purpose: 'Customer enquiries and general company information requests.',
  },
  {
    key: 'businessEmail',
    label: 'Merchant & Provider Inquiries Email',
    current: PATNA_CONFIG.businessEmail,
    fileLocation: 'src/config/patnaConfig.ts',
    purpose: 'Commercial provider contracts, fleet integrations, and bulk supplier accounts.',
  },
  {
    key: 'socialLinks (instagramUrl / facebookUrl)',
    label: 'Social Media Profiles',
    current: `Instagram: ${PATNA_CONFIG.instagramUrl} · Facebook: ${PATNA_CONFIG.facebookUrl}`,
    fileLocation: 'src/config/patnaConfig.ts',
    purpose: 'Official social media handles for Patnacom Services in Tanzania.',
  },
  {
    key: 'legalDocuments',
    label: 'Privacy Policy & Terms of Service URLs',
    current: 'In-app accessible modal dialogues with complete standard terms',
    fileLocation: 'src/config/patnaConfig.ts',
    purpose: 'Full regulatory compliance with Tanzanian communications standards.',
  },
];
