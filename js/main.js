/**
 * Patna - Main JavaScript
 * Handles mobile navigation, FAQ accordion, scroll animations, and language toggle
 */

// ========================================
// DOM Elements
// ========================================
const DOM = {
    navbar: document.querySelector('.navbar'),
    hamburger: document.querySelector('.hamburger'),
    navDrawer: document.querySelector('.nav-drawer'),
    navDrawerClose: document.querySelector('.nav-drawer-close'),
    navLinks: document.querySelectorAll('.nav-link'),
    faqItems: document.querySelectorAll('.faq-item'),
    sections: document.querySelectorAll('section[data-i18n]'),
    langBtns: document.querySelectorAll('.lang-btn'),
    langToggle: document.querySelector('.lang-toggle')
};

// ========================================
// Mobile Navigation
// ========================================
function initMobileNav() {
    if (!DOM.hamburger || !DOM.navDrawer) return;

    // Toggle drawer
    DOM.hamburger.addEventListener('click', () => {
        DOM.navDrawer.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    // Close drawer
    if (DOM.navDrawerClose) {
        DOM.navDrawerClose.addEventListener('click', closeDrawer);
    }

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeDrawer();
    });

    // Close on backdrop click
    DOM.navDrawer.addEventListener('click', (e) => {
        if (e.target === DOM.navDrawer) closeDrawer();
    });

    // Close drawer function
    function closeDrawer() {
        DOM.navDrawer.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Close on link click
    DOM.navLinks.forEach(link => {
        link.addEventListener('click', closeDrawer);
    });
}

// ========================================
// FAQ Accordion
// ========================================
function initFAQ() {
    if (!DOM.faqItems.length) return;

    DOM.faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = question.querySelector('i');

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all other items
            DOM.faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-answer').style.maxHeight = null;
                    otherItem.querySelector('.faq-question i').style.transform = null;
                }
            });

            // Toggle current item
            if (isActive) {
                item.classList.remove('active');
                answer.style.maxHeight = null;
                icon.style.transform = null;
            } else {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
                icon.style.transform = 'rotate(45deg)';
            }
        });

        // Initialize first item if needed
        if (item.classList.contains('active')) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
            icon.style.transform = 'rotate(45deg)';
        }
    });
}

// ========================================
// Scroll Animations (Intersection Observer)
// ========================================
function initScrollAnimations() {
    if (!DOM.sections.length) return;

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, observerOptions);

    DOM.sections.forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
}

// ========================================
// Navbar Scroll Effect
// ========================================
function initNavbarScroll() {
    if (!DOM.navbar) return;

    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            DOM.navbar.classList.add('scrolled');
        } else {
            DOM.navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });
}

// ========================================
// Language Toggle
// ========================================
function initLanguageToggle() {
    if (!DOM.langBtns.length || !DOM.langToggle) return;

    // Sample translations
    const translations = {
        en: {
            title: 'Patna - Search Tanzania',
            'nav.howItWorks': 'How it works',
            'nav.search': 'What you can search',
            'nav.language': 'Language',
            'nav.privacy': 'Privacy',
            'nav.faq': 'FAQ',
            'cta.start': 'Start on WhatsApp',
            'hero.tag': 'Tanzania &middot; WhatsApp &middot; SMS &middot; Web',
            'hero.title': 'Search Tanzania the easy way',
            'hero.subtitle': 'Find jobs, services, and information across Tanzania. Fast, simple, and free.',
            'hero.cta1': 'Start on WhatsApp',
            'hero.cta2': 'See what you can search',
            'howItWorks.title': 'How it works',
            'howItWorks.subtitle': 'Simple steps to find what you need',
            'step1.title': 'Search',
            'step1.desc': 'Type your query in natural language',
            'step2.title': 'Send',
            'step2.desc': 'Send via WhatsApp, SMS, or web',
            'step3.title': 'Match',
            'step3.desc': 'We find relevant results instantly',
            'step4.title': 'Get results',
            'step4.desc': 'Receive structured, easy-to-read answers',
            'searchSection.title': 'What you can search',
            'searchSection.subtitle': 'From jobs to services and more',
            'category1.title': 'Jobs',
            'category1.desc': 'Find employment opportunities',
            'category1.badge': 'Coming Soon',
            'category1.example': '"ufundi wa umeme"',
            'category2.title': 'Services',
            'category2.desc': 'Find local service providers',
            'category2.example': '"mfanyikazi dar"',
            'category3.title': 'Products',
            'category3.desc': 'Buy and sell goods',
            'category3.example': '"simu ya pili"',
            'category4.title': 'Housing',
            'category4.desc': 'Rent or buy property',
            'category4.example': '"nyumba kupata"',
            'category5.title': 'Transport',
            'category5.desc': 'Find rides and deliveries',
            'category5.example': '"dala dala dar"',
            'category6.title': 'Information',
            'category6.desc': 'Get local information',
            'category6.example': '"hospitali dar"',
            'languageSection.title': 'Built for how Tanzanians talk',
            'languageSection.subtitle': 'Search in Swahili or English, just like you speak',
            'lang.swahili': 'Swahili',
            'lang.english': 'English',
            'lang.mixed': 'Mixed',
            'demo.before': 'Before',
            'demo.after': 'After',
            'demo.raw': 'Ninafanya kazi ya ufundi wa umeme. Ninaweza kusaidia.',
            'enquiry.type': 'Service Offer',
            'field.service': 'Service:',
            'field.electrician': 'Electrician',
            'field.location': 'Location:',
            'field.dar': 'Dar es Salaam',
            'field.language': 'Language:',
            'field.swahili': 'Swahili',
            'mockup.title': 'Patna Search',
            'mockup.user1': 'Hujana kazi ya ufundi wa umeme?',
            'mockup.bot1': 'Huna kazi 3 za ufundi wa umeme dar es salaam',
            'mockup.placeholder': 'Search for jobs...',
            'offer1.title': 'Electrician needed',
            'offer1.loc': 'Dar es Salaam',
            'offer2.title': 'Wiring specialist',
            'offer2.loc': 'Kinondoni',
            'offer3.title': 'Solar installation',
            'offer3.loc': 'Upanga',
            'privacySection.title': 'Privacy & trust',
            'privacySection.subtitle': 'Your data is safe with us',
            'privacy1.title': 'Secure',
            'privacy1.desc': 'All your searches are encrypted and private',
            'privacy2.title': 'Anonymous',
            'privacy2.desc': 'No personal information required to search',
            'privacy3.title': 'Safe',
            'privacy3.desc': 'We never share your data with third parties',
            'privacy4.title': 'WhatsApp verified',
            'privacy4.desc': 'Official WhatsApp Business API partner',
            'faqSection.title': 'Frequently asked questions',
            'faqSection.subtitle': 'Got questions? We have answers.',
            'faq1.q': 'How do I start using Patna?',
            'faq1.a': 'Simply send a message to our WhatsApp number or use the web interface. Type what you\\'re looking for in natural language.',
            'faq2.q': 'Is Patna free to use?',
            'faq2.a': 'Yes, searching on Patna is completely free. You only pay for your WhatsApp or SMS data charges.',
            'faq3.q': 'What languages does Patna support?',
            'faq3.a': 'Patna supports Swahili, English, and mixed language queries. Search the way you speak.',
            'faq4.q': 'How accurate are the results?',
            'faq4.a': 'We use advanced matching to provide the most relevant results. Our system is constantly learning and improving.',
            'faq5.q': 'Can I search for jobs?',
            'faq5.a': 'Yes! Jobs will be available soon. You\\'ll be able to search for employment opportunities across Tanzania.',
            'faq6.q': 'Is my information safe?',
            'faq6.a': 'Absolutely. We never store or share your personal information. All searches are private and secure.',
            'finalCta.title': 'Ready to search Tanzania?',
            'finalCta.subtitle': 'Start now and find what you need in seconds',
            'finalCta.button': 'Start on WhatsApp',
            'finalCta.number': 'or call +255 700 000 000',
            'footer.links.title': 'Links',
            'footer.links.how': 'How it works',
            'footer.links.search': 'What you can search',
            'footer.links.faq': 'FAQ',
            'footer.legal.title': 'Legal',
            'footer.legal.privacy': 'Privacy Policy',
            'footer.legal.terms': 'Terms of Service',
            'footer.contact.title': 'Contact',
            'footer.contact.email': 'hello@patnacom.co.tz',
            'footer.contact.phone': '+255 700 000 000',
            'footer.copyright': '&copy; 2024 Patnacom Services. All rights reserved.'
        },
        sw: {
            title: 'Patna - Tafuta Tanzania',
            'nav.howItWorks': 'Jinsi inavyofanya kazi',
            'nav.search': 'Unaweza tafuta nini',
            'nav.language': 'Lugha',
            'nav.privacy': 'Faragha',
            'nav.faq': 'Maswali Yanayoulizwa Mara nyingi',
            'cta.start': 'Anza kwenye WhatsApp',
            'hero.tag': 'Tanzania &middot; WhatsApp &middot; SMS &middot; Wavuti',
            'hero.title': 'Tafuta Tanzania kwa njia rahisi',
            'hero.subtitle': 'Pata kazi, huduma, na taarifa zote za Tanzania. Haraka, rahisi, na bila malipo.',
            'hero.cta1': 'Anza kwenye WhatsApp',
            'hero.cta2': 'Tazama unaweza tafuta nini',
            'howItWorks.title': 'Jinsi inavyofanya kazi',
            'howItWorks.subtitle': 'Hatua zifuatazo kwa urahisi',
            'step1.title': 'Tafuta',
            'step1.desc': 'Andikia swali lako kwa lugha ya kawaida',
            'step2.title': 'Tuma',
            'step2.desc': 'Tuma kwenye WhatsApp, SMS, au wavuti',
            'step3.title': 'Lingana',
            'step3.desc': 'Tutakupatia matokeo yanayolingana',
            'step4.title': 'Pata matokeo',
            'step4.desc': 'Pokea majibu yaliyoandikishwa vizuri',
            'searchSection.title': 'Unaweza tafuta nini',
            'searchSection.subtitle': 'Kazi hadi huduma na mengine',
            'category1.title': 'Kazi',
            'category1.desc': 'Pata nafasi za ajira',
            'category1.badge': 'Inakuja Hivi Karibuni',
            'category2.title': 'Huduma',
            'category2.desc': 'Pata watoa huduma wa eneo lako',
            'category3.title': 'Bidhaa',
            'category3.desc': 'Nunua na uza bidhaa',
            'category4.title': 'Makazi',
            'category4.desc': 'Kodi au nunua nyumba',
            'category5.title': 'Usafiri',
            'category5.desc': 'Pata safari na usafishaji',
            'category6.title': 'Taarifa',
            'category6.desc': 'Pata taarifa za eneo lako',
            'languageSection.title': 'Imejengwa kwa jinsi Watanzania wasema',
            'languageSection.subtitle': 'Tafuta kwa Kiswahili au Kiingereza, kama unavyozungumza',
            'lang.swahili': 'Kiswahili',
            'lang.english': 'Kiingereza',
            'lang.mixed': 'Yaliyochanganywa',
            'demo.before': 'Kabla',
            'demo.after': 'Baada',
            'demo.raw': 'Ninafanya kazi ya ufundi wa umeme. Ninaweza kusaidia.',
            'enquiry.type': 'Zao la Huduma',
            'field.service': 'Huduma:',
            'field.electrician': 'Mfanyikazi wa Umeme',
            'field.location': 'Eneo:',
            'field.dar': 'Dar es Salaam',
            'field.language': 'Lugha:',
            'field.swahili': 'Kiswahili',
            'mockup.title': 'Tafuta Patna',
            'mockup.user1': 'Hujana kazi ya ufundi wa umeme?',
            'mockup.bot1': 'Huna kazi 3 za ufundi wa umeme dar es salaam',
            'mockup.placeholder': 'Tafuta kazi...',
            'offer1.title': 'Mfanyikazi wa umeme anahitajiwa',
            'offer1.loc': 'Dar es Salaam',
            'offer2.title': 'Mtaalamu wa Waya',
            'offer2.loc': 'Kinondoni',
            'offer3.title': 'Uwekaji wa Solari',
            'offer3.loc': 'Upanga',
            'privacySection.title': 'Faragha na uaminifu',
            'privacySection.subtitle': 'Data yako imehifadhiwa kwetu',
            'privacy1.title': 'Salama',
            'privacy1.desc': 'Utafutaji wako wote umefichwa na salama',
            'privacy2.title': 'Isiyo na Jina',
            'privacy2.desc': 'Hakuna taarifa binafsi inayohitajiwa kutafuta',
            'privacy3.title': 'Salama',
            'privacy3.desc': 'Hatutashi taarifa yako na watu wa nje',
            'privacy4.title': 'WhatsApp ime thibitishwa',
            'privacy4.desc': 'Mshirika rasmi wa WhatsApp Business API',
            'faqSection.title': 'Maswali yanayoulizwa mara nyingi',
            'faqSection.subtitle': 'Una maswali? Sisi tuna majibu.',
            'faq1.q': 'Ninaweza kuanza kutumia Patna jinsi gani?',
            'faq1.a': 'Tu tuma ujumbe kwa namba yetu ya WhatsApp au tumia kiwango cha wavuti. Andikia unachotaka kufanya kwa lugha ya kawaida.',
            'faq2.q': 'Je, Patna inatumika bila malipo?',
            'faq2.a': 'Ndiyo, kutafuta kwenye Patna ni bure kabisa. Unalipia tu ada za WhatsApp au SMS.',
            'faq3.q': 'Patna inasaidia lugha gani?',
            'faq3.a': 'Patna inasaidia Kiswahili, Kiingereza, na maombi yaliyochanganywa. Tafuta kama unavyozungumza.',
            'faq4.q': 'Matokeo yana ukweli gani?',
            'faq4.a': 'Tunatumia ukarabati wa juu kwa kupata matokeo yaliyo sahihi. Mfumo wetu unajifunza na kuboresha kila wakati.',
            'faq5.q': 'Naweza tafuta kazi?',
            'faq5.a': 'Ndiyo! Kazi zitapatikana hivi karibuni. Utatafuta nafasi za ajira zote za Tanzania.',
            'faq6.q': 'Je, taarifa zangu zime salama?',
            'faq6.a': 'Kweli. Hatutunzi au hatushiriki taarifa zako za binafsi. Utafutaji wote ni salama na faragha.',
            'finalCta.title': 'Tayari kutafuta Tanzania?',
            'finalCta.subtitle': 'Anza sasa na upate unachohitaji katika sekunde',
            'finalCta.button': 'Anza kwenye WhatsApp',
            'finalCta.number': 'au piga +255 700 000 000',
            'footer.links.title': 'Viungo',
            'footer.links.how': 'Jinsi inavyofanya kazi',
            'footer.links.search': 'Unaweza tafuta nini',
            'footer.links.faq': 'Maswali Yanayoulizwa Mara nyingi',
            'footer.legal.title': 'Kisheria',
            'footer.legal.privacy': 'Sera ya Faragha',
            'footer.legal.terms': 'Sheria za Huduma',
            'footer.contact.title': 'Mawasiliano',
            'footer.contact.email': 'hello@patnacom.co.tz',
            'footer.contact.phone': '+255 700 000 000',
            'footer.copyright': '&copy; 2024 Patnacom Services. Haki zote zimehifadhiwa.'
        }
    };

    // Load translations from data attributes
    function translate(lang) {
        const elements = document.querySelectorAll('[data-i18n]');

        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            const textKey = el.getAttribute('data-i18n-text');
            const actualKey = textKey || key;

            if (translations[lang] && translations[lang][actualKey]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translations[lang][actualKey];
                } else {
                    el.innerHTML = translations[lang][actualKey];
                }
            }
        });

        // Update document title
        if (translations[lang] && translations[lang].title) {
            document.title = translations[lang].title;
        }

        // Update active button state
        DOM.langBtns.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });

        // Store preference
        localStorage.setItem('patna-lang', lang);
    }

    // Get saved preference or default
    const savedLang = localStorage.getItem('patna-lang') || 'en';
    let currentLang = savedLang;

    // Initialize
    DOM.langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            currentLang = btn.getAttribute('data-lang');
            translate(currentLang);
        });
    });

    // Apply initial translation
    translate(currentLang);
}

// ========================================
// Smooth Scroll for Anchor Links
// ========================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Close mobile drawer if open
                if (DOM.navDrawer && DOM.navDrawer.classList.contains('active')) {
                    DOM.navDrawer.classList.remove('active');
                    document.body.style.overflow = '';
                }
            }
        });
    });
}

// ========================================
// Initialize Everything
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Core functionality
    initMobileNav();
    initFAQ();
    initScrollAnimations();
    initNavbarScroll();
    initLanguageToggle();
    initSmoothScroll();

    // Log initialization
    console.log('Patna initialized successfully');
});

// ========================================
// Handle Window Resize
// ========================================
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        // Re-calculate any responsive values if needed
    }, 100);
});
