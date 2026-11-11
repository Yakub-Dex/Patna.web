export type Language = 'en' | 'sw';

export interface TranslationDictionary {
  nav: {
    byLine: string;
    howItWorks: string;
    categories: string;
    audiences: string;
    forBusinesses: string;
    faq: string;
    startWhatsApp: string;
    switchLang: string;
  };
  hero: {
    headlineStart: string;
    headlineHighlight: string;
    subheading: string;
    ctaWhatsApp: string;
    ctaBusiness: string;
    channelsLabel: string;
    channelsList: string[];
    sampleQueriesLabel: string;
    verifiedProvidersBadge: string;
    responseSpeedBadge: string;
    channelSelectorLabel: string;
  };
  simulation: {
    statusOnline: string;
    patnaTyping: string;
    channelWhatsapp: string;
    channelSms: string;
    tabWhatsapp: string;
    tabSms: string;
    offersFound: string;
    bestMatchBadge: string;
    selectOfferBtn: string;
    enquiryCardTitle: string;
    extractedDetails: string;
    verifiedProvider: string;
    currency: string;
    step1Label: string;
    step2Label: string;
    step3Label: string;
    step4Label: string;
    replayBtn: string;
    nextStepBtn: string;
    ackMessageWhatsapp: string;
    ackMessageSms: string;
    confirmedBubbleText: string;
    connectedMessageWhatsapp: string;
    connectedMessageSms: string;
    queries: Array<{
      id: string;
      label: string;
      channel: 'whatsapp' | 'sms';
      userMessage: string;
      parsed: {
        category: string;
        item: string;
        budgetOrRoute: string;
        urgency: string;
        location: string;
      };
      patnaIntro: string;
      offers: Array<{
        provider: string;
        location: string;
        verified: boolean;
        details: string;
        price: string;
        rating: string;
        deliveryTime: string;
      }>;
    }>;
  };
  howItWorks: {
    sectionTag: string;
    title: string;
    subtitle: string;
    steps: Array<{
      number: string;
      title: string;
      description: string;
      detail: string;
    }>;
  };
  channels: {
    sectionTag: string;
    title: string;
    subtitle: string;
    items: Array<{
      name: string;
      badge: string;
      description: string;
      idealFor: string;
      icon: string;
    }>;
  };
  categories: {
    sectionTag: string;
    title: string;
    subtitle: string;
    items: Array<{
      id: string;
      title: string;
      description: string;
      example: string;
      subcategories: string[];
      isComingSoon?: boolean;
    }>;
  };
  audiences: {
    sectionTag: string;
    title: string;
    subtitle: string;
    items: Array<{
      role: string;
      description: string;
      benefit: string;
      icon: string;
    }>;
  };
  slang: {
    sectionTag: string;
    title: string;
    subtitle: string;
    rawMessageLabel: string;
    structuredCardLabel: string;
    features: Array<{
      title: string;
      description: string;
    }>;
    demoToggleTitle: string;
    examples: Array<{
      id: string;
      input: string;
      category: string;
      priceCap: string;
      urgency: string;
      destination: string;
      notes: string;
    }>;
  };
  trust: {
    sectionTag: string;
    title: string;
    subtitle: string;
    pillars: Array<{
      title: string;
      description: string;
      metric: string;
    }>;
  };
  forBusinesses: {
    sectionTag: string;
    title: string;
    subtitle: string;
    bullets: Array<{
      title: string;
      description: string;
    }>;
    providerCta: string;
    pricingNote: string;
    statsStrip: Array<{
      label: string;
      value: string;
    }>;
  };
  faq: {
    sectionTag: string;
    title: string;
    subtitle: string;
    items: Array<{
      q: string;
      a: string;
    }>;
  };
  finalCta: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    qrNote: string;
    numberNotice: string;
  };
  footer: {
    company: string;
    headquarters: string;
    rightsReserved: string;
    tagline: string;
    linksTitle: string;
    legalTitle: string;
    contactTitle: string;
    socialTitle: string;
    privacy: string;
    terms: string;
    placeholdersTrigger: string;
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  en: {
    nav: {
      byLine: 'by Patnacom Services',
      howItWorks: 'How it works',
      categories: 'What you can search',
      audiences: 'Who it serves',
      forBusinesses: 'For businesses',
      faq: 'FAQ',
      startWhatsApp: 'Start now',
      switchLang: 'Kiswahili',
    },
    hero: {
      headlineStart: 'Your Huduma Moja Desk. ',
      headlineHighlight: 'Just ask on WhatsApp or SMS.',
      subheading:
        'Ask in Swahili, English, or everyday slang—Patna brings matched offers within minutes from verified local providers straight to your chat and helps in fulfilling it.',
      ctaWhatsApp: 'Start now',
      ctaBusiness: 'List your business',
      channelsLabel: 'Coming soon',
      channelsList: ['Web and App'],
      sampleQueriesLabel: 'Try a real Tanzanian enquiry:',
      verifiedProvidersBadge: 'Local Tanzanian Providers',
      responseSpeedBadge: 'Offers within minutes',
      channelSelectorLabel: 'Preview Mode',
    },
    simulation: {
      statusOnline: 'online · verified service',
      patnaTyping: 'Patna is matching verified local providers...',
      channelWhatsapp: 'WhatsApp Business',
      channelSms: 'SMS',
      tabWhatsapp: 'WhatsApp View',
      tabSms: 'SMS View',
      offersFound: '3 matched offers found for your request',
      bestMatchBadge: 'Top Match',
      selectOfferBtn: 'Confirm with Provider',
      enquiryCardTitle: 'Structured Enquiry Generated',
      extractedDetails: 'Understood parameters',
      verifiedProvider: 'Verified Tanzanian Merchant',
      currency: 'TZS',
      step1Label: 'Send Request',
      step2Label: 'Patna Matches',
      step3Label: 'Offers Arrive',
      step4Label: 'Direct Connect',
      replayBtn: 'Replay',
      nextStepBtn: 'Next Step',
      ackMessageWhatsapp: 'Habari! Request received. Patna is matching with verified Tanzanian providers right now... ⚡',
      ackMessageSms: 'PATNA: Request received. Matching with verified local providers. Stand by for offers.',
      confirmedBubbleText: 'Confirming offer with provider',
      connectedMessageWhatsapp: 'Connected! The provider has been notified. You can message or call them directly with zero spam.',
      connectedMessageSms: 'PATNA: Offer confirmed. The provider has received your request and will contact you directly.',
      queries: [
        {
          id: 'phone',
          label: '“Simu ya laki 8”',
          channel: 'whatsapp',
          userMessage: 'Mambo Patna, natafuta simu nzuri ya laki 8 hivi Kariakoo au Posta, preferably Samsung au iPhone clean yenye storage 128GB.',
          parsed: {
            category: 'Smartphones & Electronics',
            item: '128GB Smartphone (Samsung / iPhone)',
            budgetOrRoute: 'Cap: TZS 800,000 (Laki 8)',
            urgency: 'Today',
            location: 'Kariakoo / Posta, Dar es Salaam',
          },
          patnaIntro: 'Tumepata maduka 3 ya kuaminika yenye simu hii sasa hivi:',
          offers: [
            {
              provider: 'Kariakoo Smart Hub',
              location: 'Msimbazi St, Kariakoo',
              verified: true,
              details: 'Samsung Galaxy A34 5G 128GB · Brand new sealed · 1-yr warranty',
              price: 'TZS 780,000',
              rating: '4.9 ★',
              deliveryTime: 'Free dispatch in Dar (45 min)',
            },
            {
              provider: 'Posta Tech Express',
              location: 'Samora Ave, Posta',
              verified: true,
              details: 'iPhone 11 128GB · Clean grade A · Battery 92% · Receipt included',
              price: 'TZS 795,000',
              rating: '4.8 ★',
              deliveryTime: 'Ready for pickup or boda boda',
            },
            {
              provider: 'Mwenge Digital Store',
              location: 'Mwenge Kituoni',
              verified: true,
              details: 'Redmi Note 13 Pro 128GB · Brand new in box · Charger + case',
              price: 'TZS 720,000',
              rating: '4.7 ★',
              deliveryTime: 'Same-day delivery across Dar',
            },
          ],
        },
        {
          id: 'bus',
          label: '“Bus Dar to Mwanza kesho”',
          channel: 'whatsapp',
          userMessage: 'Nahitaji bus Dar to Mwanza kesho asubuhi. Luxury seat yenye AC na charging socket, bajeti under 65k.',
          parsed: {
            category: 'Intercity Bus Travel',
            item: '1x Semi-Luxury / Luxury Bus Ticket',
            budgetOrRoute: 'Dar es Salaam → Mwanza (Under TZS 65,000)',
            urgency: 'Tomorrow 06:00 AM',
            location: 'Departs Magufuli Bus Terminal (Mbezi)',
          },
          patnaIntro: 'Hapa kuna nafasi zilizothibitishwa za mabasi kesho asubuhi:',
          offers: [
            {
              provider: 'Tahmeed Coach Express',
              location: 'Magufuli Terminal (Bay 12)',
              verified: true,
              details: 'Departure 06:15 AM · 2x2 Reclining Luxury · AC + USB power socket',
              price: 'TZS 55,000',
              rating: '4.9 ★',
              deliveryTime: 'E-Ticket sent immediately on WhatsApp',
            },
            {
              provider: 'Shabiby Line Classic',
              location: 'Magufuli Terminal (Bay 04)',
              verified: true,
              details: 'Departure 06:00 AM · VIP Class · WiFi on board · Refreshment snack',
              price: 'TZS 60,000',
              rating: '4.8 ★',
              deliveryTime: 'Instant seat selection available',
            },
            {
              provider: 'Dar Lux Coaches',
              location: 'Magufuli Terminal (Bay 08)',
              verified: true,
              details: 'Departure 06:30 AM · Executive Comfort · Bottled water provided',
              price: 'TZS 50,000',
              rating: '4.7 ★',
              deliveryTime: 'WhatsApp QR boarding pass',
            },
          ],
        },
        {
          id: 'hotel',
          label: '“Hotel Arusha under 1.5m”',
          channel: 'whatsapp',
          userMessage: 'Looking for a quiet lodge or boutique hotel in Arusha for 3 nights, under 1.5m total, with breakfast and reliable fiber wifi.',
          parsed: {
            category: 'Hotels & Accommodation',
            item: '3 Nights Lodging with Breakfast & Fast Wi-Fi',
            budgetOrRoute: 'Ceiling: TZS 1,500,000 Total',
            urgency: 'Check-in this weekend',
            location: 'Arusha CBD / Njiro',
          },
          patnaIntro: 'Here are 3 verified properties matching your dates and budget:',
          offers: [
            {
              provider: 'Mount Meru Sanctuary Retreat',
              location: 'Njiro Hill, Arusha',
              verified: true,
              details: 'Deluxe Garden Room · Full English breakfast · 50Mbps fiber WiFi',
              price: 'TZS 1,280,000 (3 nights)',
              rating: '4.9 ★',
              deliveryTime: 'Free airport pickup from KIA included',
            },
            {
              provider: 'Kibo Palace Executive Suites',
              location: 'Old Moshi Rd, Arusha',
              verified: true,
              details: 'Executive King Room · Breakfast & pool access · Quiet work lounge',
              price: 'TZS 1,420,000 (3 nights)',
              rating: '4.8 ★',
              deliveryTime: 'Instant confirmed WhatsApp reservation',
            },
            {
              provider: 'Green Olive Boutique Hotel',
              location: 'Sakina, Arusha',
              verified: true,
              details: 'Mountain View Suite · Complimentary breakfast · Backup generator',
              price: 'TZS 1,050,000 (3 nights)',
              rating: '4.7 ★',
              deliveryTime: 'Guaranteed flexible check-in',
            },
          ],
        },
        {
          id: 'delivery',
          label: '“Boda delivery Kariakoo to Masaki”',
          channel: 'sms',
          userMessage: 'Nahitaji boda ya haraka kubeba mzigo wa vipuri vidogo toka Kariakoo mtaa wa Narung’ombe kwenda Masaki, bajeti isizidi 12,000.',
          parsed: {
            category: 'Parcel & Logistics',
            item: 'Spare parts box dispatch (up to 10kg)',
            budgetOrRoute: 'Kariakoo → Masaki (Max TZS 12,000)',
            urgency: 'Pickup within 15 minutes',
            location: 'Narung’ombe St → Chole Rd, Masaki',
          },
          patnaIntro: 'Waendesha boda 3 walio karibu wamethibitisha upatikanaji:',
          offers: [
            {
              provider: 'BodaFast Dispatch (Rider: Juma S.)',
              location: '2 mins away at Narung’ombe',
              verified: true,
              details: 'Box carrier fitted · Insured parcel · Live tracking SMS',
              price: 'TZS 10,000',
              rating: '4.9 ★',
              deliveryTime: 'Arrives in 5 mins · Drop-off 35 mins',
            },
            {
              provider: 'Dar Metro Courier (Rider: Kelvin M.)',
              location: 'Congo St, Kariakoo',
              verified: true,
              details: 'Secure lockbox · Digital delivery signature',
              price: 'TZS 11,000',
              rating: '4.8 ★',
              deliveryTime: 'Arrives in 8 mins',
            },
            {
              provider: 'Express Piki (Rider: Hamisi A.)',
              location: 'Msimbazi / Narung’ombe junction',
              verified: true,
              details: 'Standard delivery · Direct route via Ali Hassan Mwinyi',
              price: 'TZS 9,500',
              rating: '4.7 ★',
              deliveryTime: 'Arrives in 10 mins',
            },
          ],
        },
      ],
    },
    howItWorks: {
      sectionTag: 'The Flow',
      title: '4 steps from enquiry to confirmed booking.',
      subtitle: 'No complex app installs, no scrolling endless ads, no haggling in public comments.',
      steps: [
        {
          number: '01',
          title: 'Ask in your own words',
          description: 'Type a message on WhatsApp, send an SMS to our number, or search on Web/App. Use everyday Swahili, English, or slang like "laki 8".',
          detail: 'No specific format required. Patna parses natural expressions and intent.',
        },
        {
          number: '02',
          title: 'Patna turns it into a clear enquiry',
          description: 'Our system instantly structures your request with exact budget caps, location bounds, dates, and specifications.',
          detail: 'Eliminates back-and-forth friction so providers know exactly what you need.',
        },
        {
          number: '03',
          title: 'Matched providers respond with offers',
          description: 'Patna notifies qualified, verified local providers matching your criteria. They reply with real prices and availability.',
          detail: 'You receive 2–4 verified offers in your chat within minutes.',
        },
        {
          number: '04',
          title: 'You pick one and confirm',
          description: 'Review transparent pricing and ratings. Pick the provider you want, and your booking or delivery is finalized.',
          detail: 'Your personal phone number stays private until you choose to confirm.',
        },
      ],
    },
    channels: {
      sectionTag: 'Omnichannel Access',
      title: 'Built for everyone in Tanzania. Accessible anywhere.',
      subtitle: 'Connect through whichever tool fits your workflow and phone capability.',
      items: [
        {
          name: 'WhatsApp',
          badge: '',
          description: 'The easiest way to search. Chat directly with Patna in natural language, receive photo offers, and confirm bookings in one thread.',
          idealFor: 'Everyday consumers, smartphone users, and local merchants',
          icon: 'MessageSquare',
        },
        {
          name: 'SMS',
          badge: '',
          description: 'Works with zero data bundle or smartphone. Send a text from any feature phone (kitochi) and receive parsed provider offers via SMS.',
          idealFor: 'Regional towns, travel on the road, and feature-phone users',
          icon: 'Smartphone',
        },
        {
          name: 'Web App',
          badge: 'Coming Soon',
          description: 'A lightning-fast browser interface for desktop and laptop users researching bulk orders, corporate travel, or complex procurement.',
          idealFor: 'Offices, administrative buyers, and business managers',
          icon: 'Globe',
        },
        {
          name: 'App',
          badge: 'Coming Soon',
          description: 'A native companion app with push status notifications, saved recurring enquiries, and multi-business lead tracking.',
          idealFor: 'High-frequency traders, logistics dispatchers, and fleet owners',
          icon: 'AppWindow',
        },
      ],
    },
    categories: {
      sectionTag: 'Search Coverage',
      title: 'What you can search right now.',
      subtitle: 'Real local providers standing by across Tanzania’s core commercial sectors.',
      items: [
        {
          id: 'products',
          title: 'Consumer Goods',
          description: 'Phones. Laptops. Spare parts. Beauty Products. Hardware. Building Materials and Home appliances',
          example: '“Natafuta simu ya samsung nina budget ya 500,000”',
          subcategories: [],
        },
        {
          id: 'buses',
          title: 'Tickets',
          description: 'Buses connecting Dar, Arusha, Mwanza, Dodoma, Mbeya and all regions, plus flight routes from air service providers such as Air Tanzania, Flightlink, Precision Air and others.',
          example: '“Ndege Dar to Mwanza Ijumaa hii” or “Bus Dar to Dodoma kesho asubuhi seat ya dirishani”',
          subcategories: [],
        },
        {
          id: 'hotels',
          title: 'Hospitality',
          description: "Verified accomodation from City lodges, Hotels, BnB's to Luxury Safari suites",
          example: '“Chumba safi cha hoteli Dodoma mjini under 80,000 kuanzia kesho”',
          subcategories: [],
        },
        {
          id: 'food',
          title: 'Food Services',
          description: 'Office Lunch Deliveries. Event & Corporate catering. Nyama Choma.',
          example: '“Chakula cha mchana ofisini Posta watu 6, pilau kuku na juisi fresh”',
          subcategories: [],
        },
        {
          id: 'logistics',
          title: 'Delivery Services',
          description: 'Instant Delivery via Boda, Bajaj, 3 Wheeler Guta, Van or Heavy Truck',
          example: '“Guta la kubeba mifuko 20 ya saruji toka Ilala kwenda Tabata leo”',
          subcategories: [],
        },
        {
          id: 'jobs',
          title: 'Jobs',
          description: 'Certified Electricians. Plumbers. retail and Shop Assistants. Drivers. Maids',
          example: '“Fundi umeme anayejua solar panel wiring pande za Kinondoni kesho”',
          subcategories: [],
          isComingSoon: true,
        },
      ],
    },
    audiences: {
      sectionTag: 'Built For Every Sector',
      title: 'Empowering Tanzania’s entire commercial engine.',
      subtitle: 'From market stall traders in Kariakoo to industrial manufacturers and daily consumers.',
      items: [
        {
          role: 'Retailers & Distributors',
          description: 'Shops in Kariakoo, Posta, Mlimani, and regional markets get inbound buyer leads directly when customers are ready to purchase.',
          benefit: 'No ad spend waste — only answer verified customers seeking your exact stock.',
          icon: 'Store',
        },
        {
          role: 'Manufacturers',
          description: 'Industrial producers of building materials, packaged goods, and hardware and other goods receive structured bulk requests.',
          benefit: 'Connect directly with regional wholesalers, retailers and contractors.',
          icon: 'Factory',
        },
        {
          role: 'Food & Restaurants',
          description: 'Mama lishe, local eateries, and professional caterers receive individual and corporate office lunch and party orders.',
          benefit: 'Fill quiet daytime hours with high-volume group deliveries.',
          icon: 'UtensilsCrossed',
        },
        {
          role: 'Service Providers',
          description: 'Legal, accounting, fumigation, cleaning, and security companies receive qualified service requests.',
          benefit: 'Direct access to institutional and private clients needing urgent quotes.',
          icon: 'Briefcase',
        },
        {
          role: 'Entrepreneurs',
          description: 'Social media goods sellers, small processors and manufacturers, developers, and independent consultants win local contracts.',
          benefit: 'Access markets, sales and distribution capabilities.',
          icon: 'Rocket',
        },
        {
          role: 'Transport & Logistics',
          description: 'Truck Owners provide the physical delivery of goods and services as partners.',
          benefit: 'Reduce empty return trips and idle waiting at stages.',
          icon: 'Truck',
        },
      ],
    },
    slang: {
      sectionTag: '05 — Local Language Engine',
      title: 'Built for how Tanzanians actually talk.',
      subtitle: 'No rigid formal forms. Patna understands Swahili, English, mixed codes, and local slang.',
      rawMessageLabel: 'Raw Customer Message',
      structuredCardLabel: 'Structured Patna Enquiry',
      features: [
        {
          title: 'Currency Shorthand',
          description: 'Understands “laki 8” (TZS 800,000), “moko na nusu” or “1.5m” (TZS 1,500,000), and “buku tatu” (TZS 3,000).',
        },
        {
          title: 'Temporal Expressions',
          description: 'Interprets “kesho asubuhi”, “leo mchana”, “weekend hii”, and “ndani ya saa mbili” accurately into UTC+3 timestamps.',
        },
        {
          title: 'Local Neighborhood Geography',
          description: 'Recognizes local landmarks from “Msimbazi”, “Mwenge kituo cha daladala”, “Posta mpya”, to “Keko Furniture”.',
        },
      ],
      demoToggleTitle: 'Try switching real conversation examples below:',
      examples: [
        {
          id: 'slang-phone',
          input: '“Ebana Patna mchongo vipi, nahitaji tecno camon au infinix ya kijanja isiyozidi laki 4 pande za Sinza au Mwenge.”',
          category: 'Mobile Devices',
          priceCap: 'TZS 400,000 Max (Laki 4)',
          urgency: 'Same day',
          destination: 'Sinza / Mwenge Corridor',
          notes: 'Target models: Tecno Camon or modern Infinix. Local pickup preferred.',
        },
        {
          id: 'slang-bus',
          input: '“Kaka naomba bus ya Arusha kwenda Mwanza Alhamisi hii, seat ya mbele luxury, budget 50k.”',
          category: 'Intercity Bus',
          priceCap: 'TZS 50,000',
          urgency: 'Thursday Morning Departure',
          destination: 'Arusha → Mwanza',
          notes: 'Front row seat requested, semi-luxury coach class.',
        },
        {
          id: 'slang-truck',
          input: '“Nahitaji canter kesho asubuhi kubeba mbao toka Temeke kwenda Boko, bei gani?”',
          category: 'Freight & Haulage',
          priceCap: 'Provider Competitive Quote',
          urgency: 'Tomorrow Morning',
          destination: 'Temeke → Boko (Approx 38km)',
          notes: 'Cargo: Timber planks. Medium flatbed / canter truck required.',
        },
      ],
    },
    trust: {
      sectionTag: 'Privacy & Integrity',
      title: 'Private by default. Complete peace of mind.',
      subtitle: 'Designed so consumers can enquire safely without having their numbers leaked or spammed.',
      pillars: [
        {
          title: 'Your phone number stays masked',
          description: 'Providers see only your requirements, not your personal phone number, until you specifically confirm an offer.',
          metric: '100% Private',
        },
        {
          title: 'Enquiries handled inside the chat',
          description: 'You will never receive 20 annoying phone calls from aggressive sellers. All matched offers arrive cleanly in your WhatsApp/SMS thread.',
          metric: 'Zero Cold Calls',
        },
        {
          title: 'Opt out anytime with a single word',
          description: 'Type "STOP" or "SITAKI" at any moment to cancel an enquiry or halt updates immediately. No hidden subscriptions.',
          metric: '1-Click Opt Out',
        },
        {
          title: 'Verified Tanzanian providers only',
          description: 'Every seller, transporter, and hotel is vetted with local registration, location checks, and verified credentials.',
          metric: 'Vetted Merchants',
        },
      ],
    },
    forBusinesses: {
      sectionTag: 'For businesses',
      title: 'Turn Patna into your highest-converting sales desk.',
      subtitle: 'Stop paying for unproven social media ads. Receive buyers who have cash in hand and know what they want.',
      bullets: [
        {
          title: 'Pre-qualified buyers delivered to WhatsApp',
          description: 'Every enquiry has a stated budget, timeline, and exact specs. You only quote on requests you can actually fulfill.',
        },
        {
          title: 'Reply in plain text — zero apps or portals',
          description: 'You don’t need an expensive computer or complicated inventory management software. Reply directly on WhatsApp.',
        },
        {
          title: 'Onboarded in under 5 minutes',
          description: 'Send your business name, location, and product categories to Patna on WhatsApp to start receiving enquiries.',
        },
        {
          title: 'Pay only per qualified enquiry',
          description: 'No heavy monthly lock-in contracts. Transparent, affordable micro-fees per matched customer lead.',
        },
      ],
      providerCta: 'Join as a Provider Now',
      pricingNote: 'Fair micro-fee per lead · No subscription traps · Easy MPesa / TigoPesa / Airtel Money top-ups',
      statsStrip: [
        { label: 'Merchant Onboarding Time', value: '< 5 Mins' },
        { label: 'Customer Lead Intent', value: 'High' },
        { label: 'Software Requirements', value: 'WhatsApp Only' },
        { label: 'Coverage', value: 'Tanzania-Wide' },
      ],
    },
    faq: {
      sectionTag: 'Frequently Asked Questions',
      title: 'Everything you need to know about Patna.',
      subtitle: 'Clear, straightforward answers about how we operate, privacy, and costs.',
      items: [
        {
          q: 'What exactly is Patna?',
          a: 'Patna is a WhatsApp, SMS, Web, and App-based search and recommendation service for Tanzania, operated by Patnacom Services in Dar es Salaam. Instead of browsing endless Instagram pages or calling multiple contacts, you message Patna with what you need in plain Swahili, English, or slang. Patna extracts your requirements, queries verified local businesses, and brings back competitive offers directly into your chat.',
        },
        {
          q: 'Is Patna free for customers searching?',
          a: 'Yes! Patna is 100% free for consumers. You do not pay any fee to search for products, buses, hotels, food, or delivery services. You only pay the chosen provider for the actual goods or services you confirm.',
        },
        {
          q: 'How does searching work on SMS for basic feature phones?',
          a: 'If you do not have internet or a smartphone, you simply send an SMS to our number. For example: "Patna simu ya laki 4 Kariakoo". Our engine parses your message and texts you back the top 2 verified vendor offers with prices and contact codes.',
        },
        {
          q: 'How do merchants, traders, and manufacturers join?',
          a: 'Joining is instantaneous! Click the "Join as a provider" button to open WhatsApp with Patna. Send your business name, physical location (e.g., Kariakoo, Posta, Arusha CBD), and what you sell. Our onboarding team verifies your details within a few hours.',
        },
        {
          q: 'Which Tanzanian cities and regions does Patna cover?',
          a: 'Patna currently covers Greater Dar es Salaam (all districts including Ilala, Kinondoni, Ubungo, Kigamboni, Temeke), plus major intercity routes to Arusha, Mwanza, Dodoma, Morogoro, Mbeya, Tanga, and Zanzibar. We are expanding to all 31 regions.',
        },
        {
          q: 'Is my personal phone number shared with sellers?',
          a: 'No. Your phone number is masked while providers submit their initial offers. Only after you review the offers and explicitly choose to confirm with a provider is contact information shared to finalize delivery or reservation.',
        },
        {
          q: 'Is Patna a marketplace or an enquiry broker?',
          a: 'Patna is an intelligent conversational matchmaker. We do not hold physical inventory or operate bus fleets ourselves. We bridge verified local suppliers with motivated customers, ensuring transparency and competitive local pricing.',
        },
      ],
    },
    finalCta: {
      title: 'Find whatever you need in Tanzania today.',
      subtitle: 'Experience the fastest way to buy, book, or transport without leaving your chat app.',
      ctaPrimary: 'Start now',
      ctaSecondary: 'Join as a Provider',
      qrNote: 'Scan with your phone camera or click to open WhatsApp directly.',
      numberNotice: 'Official WhatsApp & SMS Line: +255 700 000 000',
    },
    footer: {
      company: 'Patnacom Services. A Service Company',
      headquarters: 'Dar es Salaam, Tanzania',
      rightsReserved: 'All rights reserved.',
      tagline: 'WhatsApp & Multi-Channel Search & Recommendation Service for Tanzania.',
      linksTitle: 'Navigation',
      legalTitle: 'Legal & Compliance',
      contactTitle: 'Contact Us',
      socialTitle: 'Follow Us',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      placeholdersTrigger: 'Config & Placeholders Checklist',
    },
  },
  sw: {
    nav: {
      byLine: 'huduma ya Patnacom Services',
      howItWorks: 'Jinsi inavyofanya kazi',
      categories: 'Unachoweza kutafuta',
      audiences: 'Wanaohudumiwa',
      forBusinesses: 'Kwa wafanyabiashara',
      faq: 'Maswali ya kawaida',
      startWhatsApp: 'Anza sasa',
      switchLang: 'English',
    },
    hero: {
      headlineStart: 'Dawati Lako la Huduma Moja. ',
      headlineHighlight: 'Uliza tu WhatsApp au SMS.',
      subheading:
        'Uliza kwa Kiswahili, Kiingereza au lugha ya mtaani—Patna inakuletea ofa zilizochaguliwa ndani ya dakika chache kutoka kwa watoa huduma walioidhinishwa moja kwa moja kwenye chat yako na kusaidia katika ukamilishaji wake.',
      ctaWhatsApp: 'Anza sasa',
      ctaBusiness: 'Sajili biashara yako',
      channelsLabel: 'Inakuja hivi karibuni',
      channelsList: ['Tovuti na App'],
      sampleQueriesLabel: 'Jaribu maombi halisi ya Kitanzania:',
      verifiedProvidersBadge: 'Watoa Huduma Walioidhinishwa',
      responseSpeedBadge: 'Majibu ndani ya dakika chache',
      channelSelectorLabel: 'Mwonekano',
    },
    simulation: {
      statusOnline: 'mtandaoni · huduma iliyoidhinishwa',
      patnaTyping: 'Patna inatafuta watoa huduma wa karibu...',
      channelWhatsapp: 'WhatsApp Business',
      channelSms: 'SMS',
      tabWhatsapp: 'Mwonekano wa WhatsApp',
      tabSms: 'Mwonekano wa SMS',
      offersFound: 'Ofa 3 zimepatikana kulingana na ombi lako',
      bestMatchBadge: 'Chaguo Bora Zaidi',
      selectOfferBtn: 'Thibitisha na Muuzaji',
      enquiryCardTitle: 'Ombi Lililopangwa Kikamilifu',
      extractedDetails: 'Vigezo vilivyoeleweka',
      verifiedProvider: 'Mfanyabiashara Aliyehakikiwa',
      currency: 'TZS',
      step1Label: 'Tuma Ombi',
      step2Label: 'Patna Inatafuta',
      step3Label: 'Ofa Zinafika',
      step4Label: 'Unganishwa Moja kwa Moja',
      replayBtn: 'Rudia',
      nextStepBtn: 'Hatua Inayofuata',
      ackMessageWhatsapp: 'Habari! Ombi lako limepokelewa. Mfumo unatafuta wauzaji waliohakikiwa karibu nawe sasa hivi... ⚡',
      ackMessageSms: 'PATNA: Ombi lako limepokelewa. Tunatafuta wauzaji walio karibu. Subiri ofa ndani ya dakika 2.',
      confirmedBubbleText: 'Ninathibitisha ofa hii na muuzaji',
      connectedMessageWhatsapp: 'Umeunganishwa! Muuzaji ametaarifiwa. Unaweza kumpigia au kuchat naye moja kwa moja bila usumbufu.',
      connectedMessageSms: 'PATNA: Ofa imethibitishwa. Muuzaji amepokea ombi lako na atawasiliana nawe mara moja bila usumbufu.',
      queries: [
        {
          id: 'phone',
          label: '“Simu ya laki 8”',
          channel: 'whatsapp',
          userMessage: 'Mambo Patna, natafuta simu nzuri ya laki 8 hivi Kariakoo au Posta, preferably Samsung au iPhone clean yenye storage 128GB.',
          parsed: {
            category: 'Simu na Vifaa vya Umeme',
            item: 'Simu ya 128GB (Samsung au iPhone)',
            budgetOrRoute: 'Kiwango cha juu: TZS 800,000 (Laki 8)',
            urgency: 'Leo hii',
            location: 'Kariakoo au Posta, Dar es Salaam',
          },
          patnaIntro: 'Tumepata maduka 3 ya kuaminika yenye simu hii sasa hivi:',
          offers: [
            {
              provider: 'Kariakoo Smart Hub',
              location: 'Mtaa wa Msimbazi, Kariakoo',
              verified: true,
              details: 'Samsung Galaxy A34 5G 128GB · Mpya kwenye box · Warranty ya mwaka 1',
              price: 'TZS 780,000',
              rating: '4.9 ★',
              deliveryTime: 'Usafiri bure Dar nzima (ndani ya dk 45)',
            },
            {
              provider: 'Posta Tech Express',
              location: 'Samora Avenue, Posta',
              verified: true,
              details: 'iPhone 11 128GB · Hali safi sana · Battery 92% · Risiti inatolewa',
              price: 'TZS 795,000',
              rating: '4.8 ★',
              deliveryTime: 'Tayari kwa kuchukua au kutumiwa boda',
            },
            {
              provider: 'Mwenge Digital Store',
              location: 'Mwenge Kituoni',
              verified: true,
              details: 'Redmi Note 13 Pro 128GB · Mpya sealed · Charger na case vipo',
              price: 'TZS 720,000',
              rating: '4.7 ★',
              deliveryTime: 'Inafika siku hiyo hiyo Dar nzima',
            },
          ],
        },
        {
          id: 'bus',
          label: '“Bus Dar to Mwanza kesho”',
          channel: 'whatsapp',
          userMessage: 'Nahitaji bus Dar kwenda Mwanza kesho asubuhi. Luxury seat yenye AC na charging socket, bajeti isizidi 65k.',
          parsed: {
            category: 'Usafiri wa Mabasi ya Mikoani',
            item: 'Tiketi 1 ya Basi Dar → Mwanza',
            budgetOrRoute: 'Dar es Salaam → Mwanza (Chini ya TZS 65,000)',
            urgency: 'Kesho saa 12:00 Asubuhi',
            location: 'Stendi Kuu ya Magufuli (Mbezi Luis)',
          },
          patnaIntro: 'Hapa kuna nafasi zilizothibitishwa za mabasi kesho asubuhi:',
          offers: [
            {
              provider: 'Tahmeed Coach Express',
              location: 'Kituo cha Magufuli (Bay 12)',
              verified: true,
              details: 'Kuondoka 12:15 Asubuhi · 2x2 Reclining Luxury · AC + Sehemu ya kuchaji simu',
              price: 'TZS 55,000',
              rating: '4.9 ★',
              deliveryTime: 'Tiketi ya kielektroniki inatumwa WhatsApp sasa hivi',
            },
            {
              provider: 'Shabiby Line Classic',
              location: 'Kituo cha Magufuli (Bay 04)',
              verified: true,
              details: 'Kuondoka 12:00 Asubuhi · VIP Class · WiFi ndani ya basi · Vitafunwa',
              price: 'TZS 60,000',
              rating: '4.8 ★',
              deliveryTime: 'Chagua kiti moja kwa moja',
            },
            {
              provider: 'Dar Lux Coaches',
              location: 'Kituo cha Magufuli (Bay 08)',
              verified: true,
              details: 'Kuondoka 12:30 Asubuhi · Executive Comfort · Maji ya kunywa bure',
              price: 'TZS 50,000',
              rating: '4.7 ★',
              deliveryTime: 'QR boarding pass inatumwa WhatsApp',
            },
          ],
        },
        {
          id: 'hotel',
          label: '“Hotel Arusha under 1.5m”',
          channel: 'whatsapp',
          userMessage: 'Natafuta lodge nzuri au hoteli tulivu Arusha kwa siku 3, jumla isizidi milioni 1.5, iwe na kifungua kinywa na internet ya kasi.',
          parsed: {
            category: 'Hoteli na Malazi',
            item: 'Chumba siku 3 chenye Breakfast na Wi-Fi',
            budgetOrRoute: 'Ukomo: TZS 1,500,000 Jumla',
            urgency: 'Kuingia wikendi hii',
            location: 'Arusha Mjini au Njiro',
          },
          patnaIntro: 'Hizi hapa hoteli 3 zilizothibitishwa kulingana na tarehe zako:',
          offers: [
            {
              provider: 'Mount Meru Sanctuary Retreat',
              location: 'Mlima Njiro, Arusha',
              verified: true,
              details: 'Deluxe Garden Room · Kifungua kinywa kamili · Fiber WiFi ya kasi',
              price: 'TZS 1,280,000 (siku 3)',
              rating: '4.9 ★',
              deliveryTime: 'Usafiri bure toka uwanja wa ndege KIA',
            },
            {
              provider: 'Kibo Palace Executive Suites',
              location: 'Old Moshi Rd, Arusha',
              verified: true,
              details: 'Executive King Room · Kifungua kinywa + Swimming pool · Lounge tulivu',
              price: 'TZS 1,420,000 (siku 3)',
              rating: '4.8 ★',
              deliveryTime: 'Uthibitisho wa papo hapo WhatsApp',
            },
            {
              provider: 'Green Olive Boutique Hotel',
              location: 'Sakina, Arusha',
              verified: true,
              details: 'Chumba chenye mwonekano wa mlima · Kifungua kinywa kipo · Generator ipo',
              price: 'TZS 1,050,000 (siku 3)',
              rating: '4.7 ★',
              deliveryTime: 'Uhuru wa kuingia muda wowote',
            },
          ],
        },
        {
          id: 'delivery',
          label: '“Boda delivery Kariakoo to Masaki”',
          channel: 'sms',
          userMessage: 'Nahitaji boda ya haraka kubeba mzigo wa vipuri vidogo toka Kariakoo mtaa wa Narung’ombe kwenda Masaki, bajeti isizidi 12,000.',
          parsed: {
            category: 'Mizigo na Usafirishaji',
            item: 'Boksi la vipuri (hadi kilo 10)',
            budgetOrRoute: 'Kariakoo → Masaki (Mwisho TZS 12,000)',
            urgency: 'Kufuatwa ndani ya dk 15',
            location: 'Narung’ombe St → Chole Rd, Masaki',
          },
          patnaIntro: 'Waendesha boda 3 walio karibu wamethibitisha upatikanaji:',
          offers: [
            {
              provider: 'BodaFast Dispatch (Dereva: Juma S.)',
              location: 'Dk 2 toka Narung’ombe',
              verified: true,
              details: 'Boksi maalum la mzigo · Mzigo umekingwa · SMS ya kufuatilia safari',
              price: 'TZS 10,000',
              rating: '4.9 ★',
              deliveryTime: 'Kufika dk 5 · Kufikisha Masaki dk 35',
            },
            {
              provider: 'Dar Metro Courier (Dereva: Kelvin M.)',
              location: 'Mtaa wa Congo, Kariakoo',
              verified: true,
              details: 'Boksi lililofungwa salama · Sahihi ya kidijitali',
              price: 'TZS 11,000',
              rating: '4.8 ★',
              deliveryTime: 'Kufika ndani ya dk 8',
            },
            {
              provider: 'Express Piki (Dereva: Hamisi A.)',
              location: 'Kona ya Msimbazi na Narung’ombe',
              verified: true,
              details: 'Usafiri wa kawaida · Njia ya moja kwa moja Ali Hassan Mwinyi',
              price: 'TZS 9,500',
              rating: '4.7 ★',
              deliveryTime: 'Kufika ndani ya dk 10',
            },
          ],
        },
      ],
    },
    howItWorks: {
      sectionTag: 'Mfumo na Njia',
      title: 'Hatua 4 tu toka unapoandika hadi unapothibitisha.',
      subtitle: 'Bila kupakua app ngumu, bila kupitia mamia ya matangazo, bila kubishania bei kwenye comments.',
      steps: [
        {
          number: '01',
          title: 'Uliza kwa maneno yako',
          description: 'Andika ujumbe WhatsApp, tuma SMS kwenye namba yetu, au tafuta mtandaoni. Tumia Kiswahili, Kiingereza au misamiati ya mtaani kama "laki 8".',
          detail: 'Hakuna fomula maalum. Patna inatambua maana na dhamira ya maneno yako.',
        },
        {
          number: '02',
          title: 'Patna inaunda ombi lililo wazi',
          description: 'Mfumo unakusanya vigezo vya bajeti yako, eneo, tarehe, na aina halisi ya bidhaa unayotaka.',
          detail: 'Inaondoa maswali yasiyo na mwisho ili wauzaji waelewe mara moja.',
        },
        {
          number: '03',
          title: 'Watoa huduma wanajibu kwa ofa',
          description: 'Patna inawataarifu wauzaji na watoa huduma walioidhinishwa wanaokidhi vigezo vyako. Wanajibu bei halisi zilizopo.',
          detail: 'Unapokea ofa 2 hadi 4 zilizohakikiwa ndani ya dakika chache kwenye chat yako.',
        },
        {
          number: '04',
          title: 'Unachagua na kuthibitisha',
          description: 'Linganisha bei na tathmini za ubora. Chagua inayokufaa na unathibitisha oda au nafasi yako bila wasiwasi.',
          detail: 'Namba yako ya simu haipewi mtu yeyote hadi wewe mwenyewe uamue kuthibitisha.',
        },
      ],
    },
    channels: {
      sectionTag: 'Njia Nyingi za Kufikia',
      title: 'Imejengwa kwa kila Mtanzania. Inapatikana popote.',
      subtitle: 'Tumia njia yoyote inayolingana na simu yako au mfumo wako wa kazi.',
      items: [
        {
          name: 'WhatsApp',
          badge: '',
          description: 'Njia rahisi zaidi ya kutafuta. Chati moja kwa moja na Patna kwa maneno ya kawaida, pata picha za bidhaa, na thibitisha ndani ya chat.',
          idealFor: 'Watumiaji wa simu janja, wanunuzi wa kila siku, na wafanyabiashara',
          icon: 'MessageSquare',
        },
        {
          name: 'SMS',
          badge: '',
          description: 'Inafanya kazi bila bando la intaneti. Tuma ujumbe toka kwenye kitochi chochote na upokee ofa za wauzaji kwa SMS ya kawaida.',
          idealFor: 'Mikoani, safarini barabarani, na wenye simu za kawaida',
          icon: 'Smartphone',
        },
        {
          name: 'Web App',
          badge: 'Inakuja Hivi Karibuni',
          description: 'Ukurasa wa wavuti wa haraka sana kwa watumiaji wa kompyuta wanaofanya manunuzi makubwa ya kibiashara au maofisini.',
          idealFor: 'Maofisini, wasimamizi wa manunuzi, na mashirika',
          icon: 'Globe',
        },
        {
          name: 'App',
          badge: 'Inakuja Hivi Karibuni',
          description: 'App maalum yenye taarifa za haraka (push notifications), orodha ya maombi ya mara kwa mara, na ufuatiliaji wa kina.',
          idealFor: 'Wafanyabiashara wakubwa, wasafirishaji, na wamiliki wa vyombo vya usafiri',
          icon: 'AppWindow',
        },
      ],
    },
    categories: {
      sectionTag: 'Huduma Zinazopatikana',
      title: 'Unachoweza kutafuta sasa hivi.',
      subtitle: 'Wafanyabiashara na watoa huduma wa Kitanzania wapo tayari katika sekta kuu.',
      items: [
        {
          id: 'products',
          title: 'Consumer Goods',
          description: 'Phones. Laptops. Spare parts. Beauty Products. Hardware. Building Materials and Home appliances',
          example: '“Natafuta simu ya samsung nina budget ya 500,000”',
          subcategories: [],
        },
        {
          id: 'buses',
          title: 'Tiketi',
          description: 'Mabasi ya safari za kuunganisha Dar, Arusha, Mwanza, Dodoma, Mbeya na mikoa yote, pamoja na safari za ndege toka mashirika kama Air Tanzania, Flightlink, Precision Air na mengineyo.',
          example: '“Tiketi ya ndege Dar kwenda Mwanza” au “Bus Dar to Dodoma kesho asubuhi seat ya dirishani”',
          subcategories: [],
        },
        {
          id: 'hotels',
          title: 'Hospitality',
          description: "Verified accomodation from City lodges, Hotels, BnB's to Luxury Safari suites",
          example: '“Chumba safi cha hoteli Dodoma mjini under 80,000 kuanzia kesho”',
          subcategories: [],
        },
        {
          id: 'food',
          title: 'Food Services',
          description: 'Office Lunch Deliveries. Event & Corporate catering. Nyama Choma.',
          example: '“Chakula cha mchana ofisini Posta watu 6, pilau kuku na juisi fresh”',
          subcategories: [],
        },
        {
          id: 'logistics',
          title: 'Delivery Services',
          description: 'Instant Delivery via Boda, Bajaj, 3 Wheeler Guta, Van or Heavy Truck',
          example: '“Guta la kubeba mifuko 20 ya saruji toka Ilala kwenda Tabata leo”',
          subcategories: [],
        },
        {
          id: 'jobs',
          title: 'Jobs',
          description: 'Certified Electricians. Plumbers. retail and Shop Assistants. Drivers. Maids',
          example: '“Fundi umeme anayejua solar panel wiring pande za Kinondoni kesho”',
          subcategories: [],
          isComingSoon: true,
        },
      ],
    },
    audiences: {
      sectionTag: 'Imejengwa kwa Kila Sekta',
      title: 'Kuwezesha uchumi wote wa Kitanzania.',
      subtitle: 'Kuanzia wafanyabiashara wa Kariakoo hadi viwanda, wajasiriamali na wanunuzi wa kila siku.',
      items: [
        {
          role: 'Wauzaji wa Rejareja na Wasambazaji',
          description: 'Maduka ya Kariakoo, Posta, Mlimani na mikoani wanapata wateja waliotayari kulipa moja kwa moja kwenye simu zao.',
          benefit: 'Hakuna kupoteza pesa kwenye matangazo ya jumla — jibu wateja wanaotafuta mzigo wako sasa hivi.',
          icon: 'Store',
        },
        {
          role: 'Viwanda',
          description: 'Wazalishaji wa vifaa vya ujenzi, bidhaa zilizofungashwa, na bidhaa za hardware na nyinginezo wanapata oda kubwa.',
          benefit: 'Ungana moja kwa moja na wauzaji wa jumla mikoani, wauzaji wa rejareja na makandarasi.',
          icon: 'Factory',
        },
        {
          role: 'Chakula na Migahawa',
          description: 'Mama lishe wa mtaani na migahawa mikubwa wanapata oda za chakula cha mchana cha watu binafsi na maofisi pamoja na hafla bila usumbufu.',
          benefit: 'Jaza masaa ya mchana na oda nyingi za makundi maofisini.',
          icon: 'UtensilsCrossed',
        },
        {
          role: 'Watoa Huduma',
          description: 'Wanasheria, wahasibu, kampuni za usafi, ulinzi na fumigation wanapata maombi ya nukuu za bei (quotations).',
          benefit: 'Fikia wateja wa mashirika na watu binafsi wanaohitaji huduma kwa haraka.',
          icon: 'Briefcase',
        },
        {
          role: 'Wajasiriamali',
          description: 'Wauzaji wa bidhaa mitandaoni (social media goods sellers), wasindikaji wadogo na viwanda vidogo, watengeneza mifumo na washauri wa kujitegemea wanapata mikataba.',
          benefit: 'Pata masoko, mauzo na uwezo wa usambazaji (Access markets, sales and distribution capabilities).',
          icon: 'Rocket',
        },
        {
          role: 'Usafiri na Usafirishaji',
          description: 'Wamiliki wa Malori huwezesha usafirishaji wa bidhaa na huduma kama washirika (Truck Owners provide the physical delivery of goods and services as partners).',
          benefit: 'Punguza kurudi mtupu barabarani na ongeza kipato cha kila siku.',
          icon: 'Truck',
        },
      ],
    },
    slang: {
      sectionTag: '05 — Mfumo wa Lugha ya Ndani',
      title: 'Imeelewa namna Watanzania wanavyoongea haswa.',
      subtitle: 'Bila maneno magumu ya kiofisi. Patna inaelewa Kiswahili, Kiingereza, na lugha safi ya mtaani.',
      rawMessageLabel: 'Ujumbe Halisi wa Mteja',
      structuredCardLabel: 'Ombi Lililopangwa na Patna',
      features: [
        {
          title: 'Vifupisho vya Bei',
          description: 'Inaelewa “laki 8” (TZS 800,000), “moko na nusu” au “1.5m” (TZS 1,500,000), na “buku tatu” (TZS 3,000).',
        },
        {
          title: 'Muda wa Kienyeji',
          description: 'Inatambua kwa usahihi “kesho asubuhi”, “leo mchana”, “weekend hii”, na “ndani ya saa mbili”.',
        },
        {
          title: 'Mitaa na Vituo vya Dar na Mikoani',
          description: 'Inatambua maeneo maarufu toka “Msimbazi”, “Mwenge stand”, “Posta mpya”, hadi “Keko samani”.',
        },
      ],
      demoToggleTitle: 'Badilisha mifano ya maongezi hapa chini uone:',
      examples: [
        {
          id: 'slang-phone',
          input: '“Ebana Patna mchongo vipi, nahitaji tecno camon au infinix ya kijanja isiyozidi laki 4 pande za Sinza au Mwenge.”',
          category: 'Simu za Mkononi',
          priceCap: 'TZS 400,000 Mwisho (Laki 4)',
          urgency: 'Siku ya leo',
          destination: 'Ukanda wa Sinza na Mwenge',
          notes: 'Aina: Tecno Camon au Infinix mpya. Mteja yuko tayari kufuata mzigo.',
        },
        {
          id: 'slang-bus',
          input: '“Kaka naomba bus ya Arusha kwenda Mwanza Alhamisi hii, seat ya mbele luxury, budget 50k.”',
          category: 'Mabasi ya Mikoani',
          priceCap: 'TZS 50,000',
          urgency: 'Alhamisi Asubuhi',
          destination: 'Arusha → Mwanza',
          notes: 'Kiti cha mbele, basi daraja la luxury lenye nafasi nzuri.',
        },
        {
          id: 'slang-truck',
          input: '“Nahitaji canter kesho asubuhi kubeba mbao toka Temeke kwenda Boko, bei gani?”',
          category: 'Usafirishaji wa Mizigo',
          priceCap: 'Bei shindani ya watoa huduma',
          urgency: 'Kesho Asubuhi',
          destination: 'Temeke → Boko (Takriban km 38)',
          notes: 'Mzigo: Mbao za kuezeka. Gari la canter linahitajika.',
        },
      ],
    },
    trust: {
      sectionTag: 'Usalama na Faragha',
      title: 'Faragha yako kwanza. Amani ya moyo.',
      subtitle: 'Imebuniwa ili mtu yeyote aweze kuulizia huduma bila namba yake kusambazwa hovyo.',
      pillars: [
        {
          title: 'Namba yako ya simu inafichwa',
          description: 'Wauzaji wanaona ombi lako na bajeti yako pekee, hawaoni namba yako ya simu hadi utakapothibitisha ofa yao.',
          metric: '100% Faragha',
        },
        {
          title: 'Majibu yote yanakuja ndani ya chat',
          description: 'Hutapokea simu 20 toka kwa wauzaji wanaokupigia hovyo. Ofa zote zilizolingana zinakuja kwa utulivu WhatsApp au SMS.',
          metric: 'Hakuna Kero za Simu',
        },
        {
          title: 'Jiondoe muda wowote kwa neno moja',
          description: 'Andika "STOP" au "SITAKI" wakati wowote kufuta ombi lako au kusitisha ujumbe mara moja. Hakuna ada zilizofichwa.',
          metric: 'Kujiondoa Papo Hapo',
        },
        {
          title: 'Watoa huduma waliohakikiwa tu',
          description: 'Kila duka, dereva na hoteli inathibitishwa na timu yetu kwa anuani halisi na usajili wa biashara kabla ya kuruhusiwa kujibu.',
          metric: 'Wauzaji Halisi',
        },
      ],
    },
    forBusinesses: {
      sectionTag: 'Kwa Wafanyabiashara',
      title: 'Fanya Patna kuwa sehemu yako kuu ya mauzo.',
      subtitle: 'Acha kupoteza pesa kwenye matangazo yasiyo na uhakika. Pokea wateja walio na fedha mkononi na wanajua wanachotaka.',
      bullets: [
        {
          title: 'Wateja walio tayari wanaletwa WhatsApp kwako',
          description: 'Kila ombi lina bajeti maalum, muda unaotakiwa, na maelezo kamili. Unajibu tu pale unapokuwa na mzigo huo stoo.',
        },
        {
          title: 'Jibu kwa maneno ya kawaida — bila app ngumu',
          description: 'Huna haja ya kununua kompyuta ya gharama wala programu ngumu. Jibu kawaida kwenye WhatsApp kama unavyochati na marafiki.',
        },
        {
          title: 'Kujiunga ni chini ya dakika 5',
          description: 'Tuma jina la biashara yako, eneo ulipo, na bidhaa unazouza kwa namba ya Patna kwenye WhatsApp ili uanze kupokea maombi.',
        },
        {
          title: 'Lipa tu kwa kila ombi lililothibitishwa',
          description: 'Hakuna malipo makubwa ya kila mwezi. Ada ndogo sana na ya wazi kwa kila mteja unayeletewa anayelingana na biashara yako.',
        },
      ],
      providerCta: 'Jiunge kama Mtoa Huduma Sasa',
      pricingNote: 'Ada ndogo sana kwa kila mteja · Hakuna mkataba mgumu · Lipa kwa urahisi kupitia MPesa / TigoPesa / Airtel Money',
      statsStrip: [
        { label: 'Muda wa Kujiunga', value: '< Dk 5' },
        { label: 'Uhakika wa Mteja', value: 'Wa Juu' },
        { label: 'Mahitaji ya Programu', value: 'WhatsApp Tu' },
        { label: 'Upatikanaji', value: 'Tanzania Nzima' },
      ],
    },
    faq: {
      sectionTag: 'Maswali ya Mara kwa Mara',
      title: 'Kila unachopaswa kufahamu kuhusu Patna.',
      subtitle: 'Majibu ya wazi na ya moja kwa moja kuhusu uendeshaji, usalama na gharama.',
      items: [
        {
          q: 'Patna ni nini hasa?',
          a: 'Patna ni huduma ya kutafuta na kupendekeza bidhaa na huduma nchini Tanzania kupitia WhatsApp, SMS, Tovuti na App, inayoendeshwa na Patnacom Services jijini Dar es Salaam. Badala ya kuhangaika Instagram au kupiga simu kwa marafiki, unamwandikia Patna unachohitaji kwa Kiswahili au lugha ya mtaani. Patna inatambua hitaji lako, inawauliza wauzaji na watoa huduma wa karibu, na inakuletea ofa zao bora moja kwa moja kwenye simu yako.',
        },
        {
          q: 'Je, huduma ya Patna ni bure kwa mteja anayetafuta?',
          a: 'Ndiyo! Patna ni bure kwa 100% kwa mnunuzi. Huna ada yoyote ya kuulizia bidhaa, mabasi, hoteli, chakula au usafirishaji. Unalipa tu bei halisi ya bidhaa unayochagua kwa muuzaji husika.',
        },
        {
          q: 'Je, mtu mwenye kitochi anawezaje kutumia SMS?',
          a: 'Kama huna intaneti au unatumia simu ya kawaida (kitochi), tuma SMS kwenda namba yetu. Mfano: "Patna simu ya laki 4 Kariakoo". Mfumo wetu utasoma ombi lako na kukujibu kwa SMS ofa 2 bora za maduka yaliyopo pamoja na bei na namba zao.',
        },
        {
          q: 'Wafanyabiashara, wenye maduka na viwanda wanajiungaje?',
          a: 'Kujiunga ni rahisi mno! Bonyeza kitufe cha "Jiunge kama mtoa huduma" ili kufungua WhatsApp na Patna. Tuma jina la biashara yako, eneo ulipo (mfano Kariakoo, Posta, Arusha Mjini) na aina ya vitu unavyotoa. Timu yetu inathibitisha maelezo yako ndani ya masaa machache.',
        },
        {
          q: 'Patna inahudumia mikoa na miji gani Tanzania?',
          a: 'Kwa sasa Patna inahudumia Dar es Salaam nzima (wilaya zote: Ilala, Kinondoni, Ubungo, Kigamboni, Temeke), pamoja na njia kuu za safari kwenda Arusha, Mwanza, Dodoma, Morogoro, Mbeya, Tanga na Zanzibar. Tunatekeleza upanuzi mikoa yote 31.',
        },
        {
          q: 'Je, namba yangu ya simu itapewa wauzaji wengi?',
          a: 'Hapana kabisa. Namba yako inafichwa. Wauzaji wanajibu ndani ya mfumo wa Patna na unaona ofa zao kwanza. Namba yako inashirikiwa tu pale unapoamua mwenyewe kuthibitisha oda na muuzaji maalum.',
        },
        {
          q: 'Je, Patna ni duka la mtandaoni (marketplace) au mtafutaji?',
          a: 'Patna ni mtafutaji mwenye akili (intelligent matchmaker). Sisi hatuna stoo ya bidhaa wala mabasi yetu wenyewe. Tunawaunganisha wauzaji halisi wa Kitanzania na wanunuzi wenye uhitaji, kuhakikisha uwazi na bei shindani.',
        },
      ],
    },
    finalCta: {
      title: 'Pata chochote unachohitaji nchini Tanzania leo.',
      subtitle: 'Njia ya haraka na ya kisasa zaidi ya kununua, kukata tiketi, au kusafirisha mzigo bila kuondoka kwenye chat yako.',
      ctaPrimary: 'Anza sasa',
      ctaSecondary: 'Jiunge kama Mfanyabiashara',
      qrNote: 'Changanua QR kwa kamera ya simu au bonyeza kufungua WhatsApp mara moja.',
      numberNotice: 'Namba Rasmi ya WhatsApp na SMS: +255 700 000 000',
    },
    footer: {
      company: 'Patnacom Services. A Service Company',
      headquarters: 'Dar es Salaam, Tanzania',
      rightsReserved: 'Haki zote zimehifadhiwa.',
      tagline: 'Huduma ya Utafutaji na Mapendekezo kupitia WhatsApp na Njia Mbalimbali nchini Tanzania.',
      linksTitle: 'Urambazaji',
      legalTitle: 'Sheria na Uzingatiaji',
      contactTitle: 'Wasiliana Nasi',
      socialTitle: 'Tufuate',
      privacy: 'Sera ya Faragha',
      terms: 'Vigezo na Masharti',
      placeholdersTrigger: 'Orodha ya Taarifa za Kubadilisha',
    },
  },
};
