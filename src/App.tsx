import React, { useState, useEffect } from 'react';
import {
  MessageSquare,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  MapPin,
  Rocket,
  Smartphone,
  Globe,
  AppWindow,
  Store,
  Factory,
  UtensilsCrossed,
  Briefcase,
  Truck,
  Phone,
  Mail,
  FileText,
  Lock,
  Layers,
  Check,
  Building2,
  Calendar,
  ExternalLink,
  Instagram,
  Facebook,
  Clock4,
} from 'lucide-react';

import { PATNA_CONFIG, getWhatsAppUrl } from './config/patnaConfig';
import { translations, Language } from './i18n/translations';
import { Navbar } from './components/Navbar';
import { MultiChannelSimulator } from './components/MultiChannelSimulator';
import { FaqAccordion } from './components/FaqAccordion';
import { PlaceholdersModal } from './components/PlaceholdersModal';
import { LegalModal } from './components/LegalModal';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [isDark, setIsDark] = useState<boolean>(false);
  const [placeholdersModalOpen, setPlaceholdersModalOpen] = useState<boolean>(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  // Sync dark class on document element
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const t = translations[lang];

  const handleToggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'sw' : 'en'));
  };

  const handleToggleDark = () => {
    setIsDark((prev) => !prev);
  };

  // Icon mapping helper for audiences

  const getAudienceIcon = (role: string) => {
    const r = role.toLowerCase();
    if (r.includes('trader') || r.includes('retailer') || r.includes('rejareja') || r.includes('maduka') || r.includes('distributor') || r.includes('wasambazaji'))
      return <Store className="w-5 h-5 text-[#2541b2]" />;
    if (r.includes('manufact') || r.includes('viwanda'))
      return <Factory className="w-5 h-5 text-[#2541b2]" />;
    if (r.includes('food') || r.includes('restaurant') || r.includes('mama lishe') || r.includes('migahawa') || r.includes('chakula'))
      return <UtensilsCrossed className="w-5 h-5 text-[#2541b2]" />;
    if (r.includes('service') || r.includes('huduma'))
      return <Briefcase className="w-5 h-5 text-[#2541b2]" />;
    if (r.includes('transport') || r.includes('usafiri') || r.includes('boda') || r.includes('logistics'))
      return <Truck className="w-5 h-5 text-[#2541b2]" />;
    if (r.includes('entrepreneur') || r.includes('wajasiriamali'))
      return <Rocket className="w-5 h-5 text-[#2541b2]" />;
    return <Rocket className="w-5 h-5 text-[#2541b2]" />;
  };

  const getChannelIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquare':
        return <MessageSquare className="w-5 h-5 text-[#2541b2]" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-[#2541b2]" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-[#2541b2]" />;
      default:
        return <AppWindow className="w-5 h-5 text-[#2541b2]" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FBFBFA] dark:bg-[#0C0E0D] text-[#141716] dark:text-[#E8EAE9] font-sans flex flex-col selection:bg-[#2541b2]/20 selection:text-[#2541b2]">
      {/* 1. Navbar */}
      <Navbar
        lang={lang}
        onToggleLang={handleToggleLang}
        isDark={isDark}
        onToggleDark={handleToggleDark}
        t={t}
      />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <section className="relative pt-10 sm:pt-16 pb-16 sm:pb-24 border-b hairline-border overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column: Value Proposition & CTAs */}
              <div className="lg:col-span-6 space-y-6">
                {/* Main Headline */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-[#141716] dark:text-[#E8EAE9] leading-[1.12] text-balance">
                  {t.hero.headlineStart}
                  <span className="text-[#2541b2] dark:text-[#5B7CF6] block sm:inline">
                    {t.hero.headlineHighlight}
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg text-[#5B615E] dark:text-[#9BA19E] leading-relaxed max-w-xl">
                  {t.hero.subheading}
                </p>

                {/* Action CTAs */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                  <a
                    href={getWhatsAppUrl(
                      lang === 'en'
                        ? "Hi Patna, I'm looking for..."
                        : 'Mambo Patna, nahitaji...'
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-[#2541b2] hover:bg-[#1D3394] transition-all group"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>{t.hero.ctaWhatsApp}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-75 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  <a
                    href="#for-businesses"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium border hairline-border bg-white dark:bg-[#151817] text-[#141716] dark:text-[#E8EAE9] hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                  >
                    <span>{t.hero.ctaBusiness}</span>
                    <ArrowRight className="w-4 h-4 text-neutral-400" />
                  </a>
                </div>

                {/* Channel Access Breakdown */}
                <div className="pt-4 border-t hairline-border flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-mono text-[#717774] dark:text-[#8D9490]">
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded bg-[#F5B942]/15 text-[#b07d1a] dark:text-[#F5B942] border border-[#F5B942]/30 font-medium">
                    <Clock4 className="w-2.5 h-2.5 text-[#b07d1a] dark:text-[#F5B942] shrink-0" />
                    <span>{t.hero.channelsLabel}:</span>
                  </span>
                  {t.hero.channelsList.map((ch, idx) => (
                    <React.Fragment key={ch}>
                      <span className="hover:text-[#141716] dark:hover:text-[#E8EAE9] transition-colors">
                        {ch}
                      </span>
                      {idx < t.hero.channelsList.length - 1 && <span>·</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Right Column: Interactive WhatsApp & Multi-Channel Chat Simulator */}
              <div className="lg:col-span-6 flex justify-center lg:justify-end">
                <MultiChannelSimulator t={t} />
              </div>
            </div>
          </div>
        </section>

        {/* 3. How It Works (4 Steps with Monospace Indexing) */}
        <section id="how-it-works" className="py-16 sm:py-24 border-b hairline-border bg-neutral-50/40 dark:bg-[#0E1110]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="max-w-2xl mb-12 sm:mb-16">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#2541b2] dark:text-[#5B7CF6] block mb-2">
                {t.howItWorks.sectionTag}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#141716] dark:text-[#E8EAE9] tracking-tight leading-tight mb-3">
                {t.howItWorks.title}
              </h2>
              <p className="text-sm sm:text-base text-[#5B615E] dark:text-[#9BA19E]">
                {t.howItWorks.subtitle}
              </p>
            </div>

            {/* 4 Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.howItWorks.steps.map((step) => (
                <div
                  key={step.number}
                  className="p-6 rounded-2xl border hairline-border bg-white dark:bg-[#121514] flex flex-col justify-between hover:border-[#2541b2]/40 transition-all group"
                >
                  <div>
                    <span className="text-2xl font-mono font-bold text-[#2541b2] dark:text-[#5B7CF6] block mb-4 group-hover:scale-105 transition-transform origin-left">
                      {step.number}
                    </span>
                    <h3 className="text-base font-bold text-[#141716] dark:text-[#E8EAE9] mb-2 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5B615E] dark:text-[#9BA19E] leading-relaxed mb-4">
                      {step.description}
                    </p>
                  </div>
                  <div className="pt-3">
                    <span className="text-[11px] font-mono text-[#717774] dark:text-[#8D9490] block">
                      {step.detail}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Omnichannel Access Breakdown (WhatsApp, SMS, Web, App) */}
        <section className="py-16 sm:py-24 border-b hairline-border">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12 sm:mb-16">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#2541b2] dark:text-[#5B7CF6] block mb-2">
                {t.channels.sectionTag}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#141716] dark:text-[#E8EAE9] tracking-tight leading-tight mb-3">
                {t.channels.title}
              </h2>
              <p className="text-sm sm:text-base text-[#5B615E] dark:text-[#9BA19E]">
                {t.channels.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.channels.items.map((channel, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border hairline-border bg-white dark:bg-[#121514] flex flex-col justify-between hover:border-[#2541b2]/40 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2.5 rounded-lg bg-neutral-100 dark:bg-[#1A1E1C]">
                        {getChannelIcon(channel.icon)}
                      </div>
                      {channel.badge && (
                        channel.badge.toLowerCase().includes('coming soon') || channel.badge.toLowerCase().includes('inakuja') ? (
                          <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-[#F5B942]/15 text-[#b07d1a] dark:text-[#F5B942] border border-[#F5B942]/30 font-medium">
                            <Clock4 className="w-2.5 h-2.5 text-[#b07d1a] dark:text-[#F5B942]" />
                            <span>{channel.badge}</span>
                          </span>
                        ) : (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-100 dark:bg-[#1C201E] text-[#5B615E] dark:text-[#9BA19E] border hairline-border">
                            {channel.badge}
                          </span>
                        )
                      )}
                    </div>

                    <h3 className="text-base font-bold text-[#141716] dark:text-[#E8EAE9] mb-2">
                      {channel.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5B615E] dark:text-[#9BA19E] leading-relaxed">
                      {channel.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. What You Can Search (Bento Categories) */}
        <section id="categories" className="py-16 sm:py-24 border-b hairline-border bg-neutral-50/40 dark:bg-[#0E1110]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12 sm:mb-16">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#2541b2] dark:text-[#5B7CF6] block mb-2">
                {t.categories.sectionTag}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#141716] dark:text-[#E8EAE9] tracking-tight leading-tight mb-3">
                {t.categories.title}
              </h2>
              <p className="text-sm sm:text-base text-[#5B615E] dark:text-[#9BA19E]">
                {t.categories.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {t.categories.items.map((cat) => (
                <div
                  key={cat.id}
                  className={`p-6 rounded-2xl border hairline-border bg-white dark:bg-[#121514] flex flex-col justify-between hover:border-[#2541b2]/40 transition-all h-full ${
                    cat.isComingSoon ? 'opacity-85 border-dashed' : ''
                  }`}
                >
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center justify-end mb-3 min-h-[22px]">
                      {cat.isComingSoon && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-[#F5B942]/15 text-[#b07d1a] dark:text-[#F5B942] border border-[#F5B942]/30 font-medium">
                          <Clock4 className="w-2.5 h-2.5 text-[#b07d1a] dark:text-[#F5B942] shrink-0" />
                          <span>{lang === 'sw' ? 'Inakuja Hivi Karibuni' : 'Coming Soon'}</span>
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-[#141716] dark:text-[#E8EAE9] mb-1.5 min-h-[28px] flex items-center">
                      {cat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5B615E] dark:text-[#9BA19E] mb-5 min-h-[56px] sm:min-h-[64px] flex items-start leading-relaxed">
                      {cat.description}
                    </p>

                    {/* Example Query Box */}
                    <div className="p-3.5 rounded-xl bg-[#F7F8F7] dark:bg-[#161918] border border-neutral-200/80 dark:border-neutral-800 flex items-center mt-auto">
                      <p className="text-xs italic text-[#141716] dark:text-[#E8EAE9] line-clamp-2">
                        {cat.example}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Built For Every Sector (Audiences: Service Companies, Entrepreneurs, Food, Manufacturers, Traders, Transporters) */}
        <section id="audiences" className="py-16 sm:py-24 border-b hairline-border">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12 sm:mb-16">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#2541b2] dark:text-[#5B7CF6] block mb-2">
                {t.audiences.sectionTag}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#141716] dark:text-[#E8EAE9] tracking-tight leading-tight mb-3">
                {t.audiences.title}
              </h2>
              <p className="text-sm sm:text-base text-[#5B615E] dark:text-[#9BA19E]">
                {t.audiences.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.audiences.items.map((aud, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border hairline-border bg-white dark:bg-[#121514] flex flex-col justify-between hover:border-[#2541b2]/40 transition-colors"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 rounded-lg bg-neutral-100 dark:bg-[#1A1E1C]">
                        {getAudienceIcon(aud.role)}
                      </div>
                      <h3 className="text-base font-bold text-[#141716] dark:text-[#E8EAE9]">
                        {aud.role}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-[#5B615E] dark:text-[#9BA19E] leading-relaxed mb-4">
                      {aud.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t hairline-border bg-white dark:bg-[#161918] -mx-6 -mb-6 p-4 rounded-b-2xl border-t border-neutral-200/80 dark:border-neutral-800">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#2541b2] dark:text-[#5B7CF6] font-semibold block mb-0.5">
                      The Patna Advantage:
                    </span>
                    <span className="text-xs font-medium text-[#141716] dark:text-[#E8EAE9]">
                      {aud.benefit}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Privacy and Trust */}
        <section className="py-16 sm:py-24 border-b hairline-border">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12 sm:mb-16">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#2541b2] dark:text-[#5B7CF6] block mb-2">
                {t.trust.sectionTag}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#141716] dark:text-[#E8EAE9] tracking-tight leading-tight mb-3">
                {t.trust.title}
              </h2>
              <p className="text-sm sm:text-base text-[#5B615E] dark:text-[#9BA19E]">
                {t.trust.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.trust.pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border hairline-border bg-white dark:bg-[#121514] flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-mono font-bold text-[#2541b2] dark:text-[#5B7CF6] uppercase tracking-wider block mb-3">
                      {pillar.metric}
                    </span>
                    <h3 className="text-base font-bold text-[#141716] dark:text-[#E8EAE9] mb-2 leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5B615E] dark:text-[#9BA19E] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. For Businesses (Pitch to Merchants & Providers) */}
        <section id="for-businesses" className="py-16 sm:py-24 border-b hairline-border bg-neutral-50/40 dark:bg-[#0E1110]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl space-y-6">
              <div>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#2541b2] dark:text-[#5B7CF6] block mb-2">
                  {t.forBusinesses.sectionTag}
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#141716] dark:text-[#E8EAE9] tracking-tight leading-tight mb-3">
                  {t.forBusinesses.title}
                </h2>
                <p className="text-base text-[#5B615E] dark:text-[#9BA19E]">
                  {t.forBusinesses.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {t.forBusinesses.bullets.map((b, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl border hairline-border bg-white dark:bg-[#121514]"
                  >
                    <h4 className="text-sm font-bold text-[#141716] dark:text-[#E8EAE9] mb-1.5">
                      {b.title}
                    </h4>
                    <p className="text-xs text-[#5B615E] dark:text-[#9BA19E] leading-relaxed">
                      {b.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href={getWhatsAppUrl(
                    lang === 'en'
                      ? 'Hi Patna, I want to join as a business provider. Here are my details...'
                      : 'Mambo Patna, nahitaji kujiunga kama mfanyabiashara. Maelezo yangu ni...'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-[#2541b2] hover:bg-[#1D3394] transition-all group"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{t.forBusinesses.providerCta}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-75 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 10. FAQ (Accordion) */}
        <section id="faq" className="py-16 sm:py-24 border-b hairline-border">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12 sm:mb-16">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#2541b2] dark:text-[#5B7CF6] block mb-2">
                {t.faq.sectionTag}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#141716] dark:text-[#E8EAE9] tracking-tight leading-tight mb-3">
                {t.faq.title}
              </h2>
              <p className="text-sm sm:text-base text-[#5B615E] dark:text-[#9BA19E]">
                {t.faq.subtitle}
              </p>
            </div>

            <div className="max-w-4xl">
              <FaqAccordion t={t} />
            </div>
          </div>
        </section>
      </main>

      {/* 12. Footer */}
      <footer className="border-t hairline-border bg-white dark:bg-[#0C0E0D] text-[#5B615E] dark:text-[#9BA19E] text-xs">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
            {/* Col 1: Brand */}
            <div>
              <span className="text-2xl sm:text-3xl font-extrabold text-[#2541b2] dark:text-[#5B7CF6] tracking-tight">
                {PATNA_CONFIG.brandName}<span className="text-[#141716] dark:text-white">.</span>
              </span>
              <p className="mt-2 text-xs text-[#717774] dark:text-[#8D9490]">
                {PATNA_CONFIG.solutionByline}
              </p>
            </div>

            {/* Col 2: Legal & Direct Access */}
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#141716] dark:text-[#E8EAE9] font-bold block mb-3">
                {t.footer.legalTitle}
              </span>
              <ul className="space-y-2 text-xs">
                <li>
                  <button
                    onClick={() => setLegalModalType('privacy')}
                    className="hover:text-[#141716] dark:hover:text-[#E8EAE9] transition-colors text-left"
                  >
                    {t.footer.privacy}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setLegalModalType('terms')}
                    className="hover:text-[#141716] dark:hover:text-[#E8EAE9] transition-colors text-left"
                  >
                    {t.footer.terms}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setPlaceholdersModalOpen(true)}
                    className="hover:text-[#2541b2] dark:hover:text-[#5B7CF6] text-xs font-mono text-left underline underline-offset-2 flex items-center gap-1"
                  >
                    <FileText className="w-3 h-3" />
                    <span>{t.footer.placeholdersTrigger}</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 4: Contact & Social */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#141716] dark:text-[#E8EAE9] font-bold block mb-3">
                {t.footer.contactTitle}
              </span>
              <div className="space-y-2.5 text-xs">
                <a
                  href={`mailto:${PATNA_CONFIG.contactEmail}`}
                  className="flex items-center gap-2 hover:text-[#2541b2] dark:hover:text-[#5B7CF6] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-neutral-400" />
                  <span>{PATNA_CONFIG.contactEmail}</span>
                </a>
                <a
                  href={`mailto:${PATNA_CONFIG.infoEmail}`}
                  className="flex items-center gap-2 hover:text-[#2541b2] dark:hover:text-[#5B7CF6] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-neutral-400" />
                  <span>{PATNA_CONFIG.infoEmail}</span>
                </a>
                <a
                  href={getWhatsAppUrl('Hi Patna, I have a general question')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#2541b2] dark:hover:text-[#5B7CF6] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-neutral-400" />
                  <span>{PATNA_CONFIG.whatsappNumber}</span>
                </a>
                <div className="flex items-center gap-2 text-[#717774] dark:text-[#8D9490]">
                  <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                  <span>{PATNA_CONFIG.headquarters}, {PATNA_CONFIG.country}</span>
                </div>

                {/* Social Media Links */}
                <div className="pt-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#717774] dark:text-[#8D9490] block mb-1.5">
                    {t.footer.socialTitle}
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href={PATNA_CONFIG.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg border hairline-border bg-neutral-50 dark:bg-[#161918] text-[#5B615E] dark:text-[#9BA19E] hover:text-[#2541b2] dark:hover:text-[#5B7CF6] hover:border-[#2541b2]/40 hover:bg-neutral-100 dark:hover:bg-[#1D211F] transition-all"
                      title="Instagram"
                      aria-label="Patna on Instagram"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                    <a
                      href={PATNA_CONFIG.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg border hairline-border bg-neutral-50 dark:bg-[#161918] text-[#5B615E] dark:text-[#9BA19E] hover:text-[#2541b2] dark:hover:text-[#5B7CF6] hover:border-[#2541b2]/40 hover:bg-neutral-100 dark:hover:bg-[#1D211F] transition-all"
                      title="Facebook"
                      aria-label="Patna on Facebook"
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t hairline-border text-xs text-[#717774] dark:text-[#8D9490]">
            <p>
              © {PATNA_CONFIG.copyrightYear} {PATNA_CONFIG.companyName}. {t.footer.rightsReserved}
            </p>
          </div>
        </div>
      </footer>

      {/* Placeholders Handover Modal */}
      <PlaceholdersModal
        isOpen={placeholdersModalOpen}
        onClose={() => setPlaceholdersModalOpen(false)}
      />

      {/* Legal Terms / Privacy Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
