# Patna — Multi-Channel Search & Recommendation Service

Comprehensive architectural and design plan for the responsive single-page website for **Patna**, an omnichannel service by **Patnacom Services** based in Dar es Salaam, Tanzania.

***

## User Review & Critical Decisions

> [!IMPORTANT]
> The plan has been updated to reflect Patna’s full multi-channel access (**WhatsApp, SMS, Web, and App**) and expanded audience covering **service companies, entrepreneurs, food vendors, manufacturers, traders, and all other commercial providers**.

- **Hero Headline**: Updated to `"Your Huduma Moja Desk. Just ask on WhatsApp or SMS"`, with subheading appending `"and helps in fulfilling it."`
- **Multi-Channel Scope**: While WhatsApp remains the instant conversational centerpiece, the design and messaging seamlessly highlight access via **WhatsApp, SMS (for feature phones & offline coverage), Web, and App**.
- **Transport & Logistics Card**: Updated explainer to `"Truck Owners provide the physical delivery of goods and services as partners."`
- **Privacy & Integrity**: Removed "Zero spam" reference.
- **Provider Standards**: Removed Patna Provider Network Standards column from the For Businesses section.

***

## 1. Overview & Core Concept

- **What It Does**: Patna bridges everyday consumers and local Tanzanian businesses across multiple accessible channels: **WhatsApp, SMS, Web, and App**. Instead of scrolling through unorganized social media, calling dozens of vendors, or asking around, users simply describe what they need in plain Swahili, English, or slang. Patna structures the enquiry, routes it to matched local providers, and delivers competitive offers directly back to the customer's preferred channel.
- **Target Audience**:
  1. *Consumers across Tanzania*: Anyone needing quick, reliable pricing for electronics, intercity travel, lodging, daily meals, freight, and everyday services via WhatsApp, SMS, Web, or App.
  2. *Providers & Commercial Partners*: **Service companies, entrepreneurs, food vendors, manufacturers, traders, retailers, transporters (boda, bajaj, guta, trucks), and all others** looking for qualified, ready-to-buy customer enquiries delivered directly to their phones without upfront advertising waste or complicated software.
- **Key Value**: Extreme accessibility across **WhatsApp, SMS, Web, and Mobile App**; fair price discovery; no spam; zero apps required for basic transactions; and private-by-default customer enquiries.

***

## 2. User Experience & Visual Design

```
┌────────────────────────────────────────────────────────────────────────┐
│ NAVBAR: Patna [by Patnacom Services]   · Nav Links · EN/SW · Channels  │
├────────────────────────────────────────────────────────────────────────┤
│ HERO:                                                                  │
│   "Find anything in Tanzania.              [ Multi-Channel Simulator ] │
│    Ask on WhatsApp, SMS, Web, or App."     - Channel: WhatsApp / SMS   │
│   [Start on WhatsApp] [List Your Business] - User: "Bus Dar to Mwanza" │
│   Channels: WhatsApp · SMS · Web · App     - Patna: Extracted Details  │
│   Query Chips: [Simu] [Bus] [Hotel]        - 3 Live Offer Cards        │
├────────────────────────────────────────────────────────────────────────┤
│ 01–04 HOW IT WORKS: Hairline 4-column step cards with mono markers     │
├────────────────────────────────────────────────────────────────────────┤
│ WHAT YOU CAN SEARCH: Bento Grid (Products, Buses, Hotels, Food, Parcel)│
├────────────────────────────────────────────────────────────────────────┤
│ FOR ALL BUSINESSES: Traders, Manufacturers, Food Vendors, Services     │
├────────────────────────────────────────────────────────────────────────┤
│ BUILT FOR TANZANIAN SLANG: Interactive Before/After (Raw -> Structured)│
├────────────────────────────────────────────────────────────────────────┤
│ PRIVACY & TRUST: 4 quiet verification pillars (Zero Spam, Private Num) │
├────────────────────────────────────────────────────────────────────────┤
│ FOR BUSINESSES & MERCHANTS: Pay per enquiry · No app required · B2B CTA│
├────────────────────────────────────────────────────────────────────────┤
│ FAQ: Smooth single-expansion accordion (7 critical objections answered)│
├────────────────────────────────────────────────────────────────────────┤
│ FINAL CTA: High-contrast WhatsApp / Multi-Channel access block         │
├────────────────────────────────────────────────────────────────────────┤
│ FOOTER: Patnacom Services · Dar es Salaam · Legal & Contact info       │
└────────────────────────────────────────────────────────────────────────┘
```

### Visual Identity & Design System
- **Aesthetic Direction**: Technical editorial minimalism inspired by parallel.ai. High typographical contrast, generous whitespace, strict hairline border rhythm, zero decorative pill tags or noisy gradients.
- **Color Palette**:
  - `Canvas`: Warm off-white `#FBFBFA` (Light) / Technical Obsidian `#0C0E0D` (Dark)
  - `Surface`: Subdued pure card `#FFFFFF` (Light) / Elevated slate `#151817` (Dark)
  - `Hairline Borders`: `rgba(0, 0, 0, 0.08)` (Light) / `rgba(255, 255, 255, 0.1)` (Dark)
  - `Typography`: Ink `#121514` (Light) / Crisp Ivory `#EFEFEF` (Dark); secondary `#5B615E`
  - `Accent`: WhatsApp Botanical Green `#0F766E` / `#059669` (Dark: `#10B981`)
- **Typography & Scale**:
  - *Headlines*: Bold, tightly-tracked display sans (`Plus Jakarta Sans` or refined geometric sans) with `text-wrap: balance`
  - *Body*: Clean readable sans (`Plus Jakarta Sans` / `DM Sans`), 15–16px, 1.6 line height
  - *Metadata & Step Indices*: Tabular Monospace (`IBM Plex Mono` / `Space Mono` / `font-mono`) for `01`, `02`, `03`, `04`, channel tags, currencies (TZS), and technical parameter tags.
- **Zero-Pill Discipline**: All categories and metadata tags are rendered as quiet unboxed text separated by typographic middots (`·`) or fine hairline cells, avoiding AI capsule cliches.

***

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Highlighting WhatsApp First while Anchoring Multi-Channel Availability (SMS, Web, App)**
  - *Chosen Approach*: Maintain WhatsApp as the primary immediate call to action (since it requires zero install and represents the primary entry point), but prominently showcase the multi-channel grid highlighting SMS (for USSD/basic phone users across regional Tanzania), Web browser search, and the forthcoming mobile App.
  - *Why*: Reflects real Tanzanian market dynamics where mobile data, SMS, and WhatsApp coexist, while positioning Patna as an enterprise-grade ecosystem.
- **Decision 2: Comprehensive Merchant & Provider Matrix**
  - *Chosen Approach*: Highlight tailored value propositions for each provider tier: service companies, entrepreneurs, food vendors & restaurants, manufacturers & distributors, and retail traders.
  - *Why*: Assures diverse business operators in Kariakoo, Posta, Sinza, and beyond that Patna works directly for their business model without complex setups.
- **Decision 3: Seamless Bilingual Toggle (EN / Kiswahili)**
  - *Chosen Approach*: Instant in-memory localized dictionary covering every headline, step description, FAQ item, and channel card.
  - *Why*: Allows instantaneous switching without page reloads or layout jumpiness.

***

## 4. Technical Architecture & Component Mapping

```
App.tsx
├── Navbar (Wordmark, Nav links, Multi-Channel Pills, Language Toggle, Dark Mode, WhatsApp CTA)
├── HeroSection
│   ├── HeroCopy (Headline, Subtitle, Multi-channel availability badges, Direct actions)
│   └── MultiChannelSimulator (WhatsApp & SMS conversational preview, live offer cards)
├── HowItWorksSection (01-04 Monospace step cards with fine hairline separators)
├── MultiChannelBanner (WhatsApp · SMS · Web · App breakdown with capability cards)
├── CategoriesSection (Products, Buses, Hotels, Food, Logistics, Jobs Coming Soon)
├── AudienceEcosystemSection (Service companies, entrepreneurs, food vendors, manufacturers, traders)
├── SlangTranslationSection (Interactive Before/After comparison: Messy message -> Structured card)
├── TrustSection (4 Privacy & Security pillars with clear guarantees)
├── ForBusinessSection (B2B value proposition for merchants, manufacturers & fleet operators)
├── FaqSection (Accessible accordion with 7 key questions)
├── FinalCtaSection (High-contrast multi-channel action card with WhatsApp direct link)
├── Footer (Patnacom Services, Dar es Salaam location, Legal links, Disclaimers)
└── ConfigModal (Interactive drawer to inspect & customize placeholder values)
```

### Placeholders to be Provided & Centrally Configured
Isolated in `src/config/patnaConfig.ts`:
1. `whatsappNumber`: `+255 700 000 000` (formatted `255700000000` for `wa.me`)
2. `smsShortcode`: `15XXX` (or standard carrier line)
3. `webAppUrl`: `https://patna.co.tz`
4. `supportEmail`: `hello@patna.co.tz` / `info@patnacom.co.tz`
5. `officeAddress`: Patnacom Services, Dar es Salaam, Tanzania
6. `termsUrl` & `privacyUrl`: Anchored modal placeholders with clean legal text.

***

## 5. Execution Steps

1. **Setup Typography & Tailwind Theme**: Configure Plus Jakarta Sans & IBM Plex Mono in `index.html` and Tailwind v4 theme variables with dark mode variant in `src/index.css`.
2. **Configuration & Complete Bilingual Matrix**: Implement `src/config/patnaConfig.ts` and `src/i18n/translations.ts` with English and Swahili text for all sections including SMS, Web, App, and the expanded merchant categories.
3. **Interactive Components**:
   - `MultiChannelSimulator.tsx`: Interactive chat & enquiry simulator supporting both WhatsApp and SMS previews with realistic provider offers.
   - `SlangConverterDemo.tsx`: Interactive before/after transformation engine showing natural language ("laki 8", "bus kesho") parsed into structured enquiries.
   - `FaqAccordion.tsx`: Accessible, smooth accordion with all 7 user objections.
   - `AudienceGrid.tsx`: Visual matrix for service companies, entrepreneurs, food vendors, manufacturers, traders, and logistics providers.
4. **Sections Assembly**: Integrate all components into `App.tsx` with mobile-first 375px responsive testing.
5. **Quality & Verification**: Verify build with `compile_applet` and test responsiveness, dark/light toggle, and language toggle.
