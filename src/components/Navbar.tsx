import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { PATNA_CONFIG } from '../config/patnaConfig';
import { Language, TranslationDictionary } from '../i18n/translations';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  isDark: boolean;
  onToggleDark: () => void;
  t: TranslationDictionary;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onToggleLang,
  isDark,
  onToggleDark,
  t,
}) => {
  const navLinks = [
    { label: t.nav.howItWorks, href: '#how-it-works' },
    { label: t.nav.categories, href: '#categories' },
    { label: t.nav.audiences, href: '#audiences' },
    { label: t.nav.forBusinesses, href: '#for-businesses' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#FBFBFA]/90 dark:bg-[#0C0E0D]/90 border-b hairline-border transition-colors duration-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
        {/* Left: Brand Wordmark */}
        <a href="#" className="flex items-baseline group whitespace-nowrap shrink-0">
          <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#2541b2] dark:text-[#5B7CF6] font-sans hover:opacity-90 transition-opacity">
            {PATNA_CONFIG.brandName}<span className="text-[#141716] dark:text-white">.</span>
          </span>
        </a>

        {/* Right: Nav Links moved further right + Language & Theme Toggles */}
        <div className="flex items-center gap-5 sm:gap-7 overflow-x-auto scrollbar-none py-1">
          <nav className="flex items-center gap-4 sm:gap-6 text-xs sm:text-[13px] font-medium text-[#5B615E] dark:text-[#9BA19E]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#141716] dark:hover:text-[#E8EAE9] transition-colors whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Controls: Language and Theme Toggles */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0 pl-3 border-l hairline-border">
            {/* Language Toggle */}
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono font-medium rounded-md border hairline-border bg-white/70 dark:bg-[#151817]/80 text-[#141716] dark:text-[#E8EAE9] hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              title="Switch language / Badili lugha"
              aria-label="Switch language"
            >
              <span className="text-neutral-400">🌐</span>
              <span>{lang.toUpperCase()}</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={onToggleDark}
              className="p-1.5 text-[#5B615E] dark:text-[#9BA19E] hover:text-[#141716] dark:hover:text-[#E8EAE9] rounded-md border hairline-border bg-white/70 dark:bg-[#151817]/80 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              title={isDark ? 'Switch to Light mode' : 'Switch to Dark mode'}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
