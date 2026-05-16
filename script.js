// --- TRANSLATIONS ---
const translations = {
  am: {
    nav_about: "Մեր մասին",
    nav_services: "Ծառայություններ",
    nav_feedbacks: "Feedbacks",
    nav_faq: "FAQ",
    nav_contact: "Կոնտակտներ",
    cta_register: "Գրանցվի՛ր",
    cta_register_down: "Գրանցվի՛ր",
    hero_title: "Kime • Կայմ • Career & Education Center",
    hero_subtitle: "Մասնագիտության ընտրության խորհրդատվություն | 13+",
    feat_1: "Գործիքակազմ՝ միակը ՀՀ-ում",
    feat_2: "Ինքնաճանաչում",
    feat_3: "Որոշումների կայացում",
    feat_4: "300+ հաջողված քեյս",
    sec_about: "Մեր մասին",
    about_text: "Kime Career & Education Center-ը ստեղծված է օգնելու ձեզ գտնել ձեր ճշգրիտ մասնագիտական ուղին: Մեր բացառիկ գործիքակազմի և խորհրդատվության միջոցով մենք բացահայտում ենք ձեր ներուժը և ուղղորդում դեպի հաջող կարիերա։ Գործընթացը ներառում է ինքնաճանաչում, ճիշտ որոշումների կայացում և խորը վերլուծություն:",
    sec_services: "Ծառայություններ",
    srv_1_title: "Ինքնաճանաչում",
    srv_1_desc: "Բացահայտեք ձեր ուժեղ կողմերն ու հետաքրքրությունները, և հասկացեք, թե որ ոլորտում եք լավագույնս դրսևորվելու:",
    srv_2_title: "Որոշումների կայացում",
    srv_2_desc: "Մասնագիտության ընտրության և կարիերայի պլանավորման աջակցություն՝ հիմնված իրական տվյալների վրա:",
    srv_3_title: "Կրթական Խորհրդատվություն",
    srv_3_desc: "Ուսումնական հաստատությունների և ծրագրերի ճիշտ ընտրություն Ձեր նպատակներին հասնելու համար:",
    sec_feedbacks: "Feedbacks",
    feedback_1: "«Kime-ի շնորհիվ ես վերջապես հասկացա, թե որ մասնագիտությունն է ինձ իրականում համապատասխանում: Ամբողջ գործընթացը շատ հետաքրքիր էր և արդյունավետ:»",
    feedback_2: "«Amazing approach and very helpful tools! Highly recommended for anyone confused about their career. Thank you Kime team!»",
    sec_faq: "FAQ",
    faq_1_q: "Ո՞ւմ համար է նախատեսված խորհրդատվությունը:",
    faq_1_a: "Խորհրդատվությունը նախատեսված է 13 և բարձր տարիքի անձանց համար, ովքեր կանգնած են մասնագիտության ընտրության կամ կարիերայի փոփոխության որոշման առջև:",
    faq_2_q: "Ինչպե՞ս գրանցվել հանդիպման:",
    faq_2_a: "Կարող եք գրանցվել՝ սեղմելով «Գրանցվի'ր» կոճակը, որը կուղղորդի ձեզ դեպի մեր օրացույց (Calendly)՝ հարմար օր և ժամ ընտրելու համար:",
    sec_contact: "Կոնտակտներ",
    contact_title: "Կապվեք մեզ հետ",
    ready_to_start: "Պատրա՞ստ եք սկսել",
    cta_book_call: "Ամրագրել զանգ",
    link_privacy: "Privacy Policy",
    link_terms: "Terms and Conditions"
  },
  en: {
    nav_about: "About Us",
    nav_services: "Services",
    nav_feedbacks: "Feedbacks",
    nav_faq: "FAQ",
    nav_contact: "Contacts",
    cta_register: "Register",
    cta_register_down: "Register",
    hero_title: "Kime • Career & Education Center",
    hero_subtitle: "Career Choice Consulting | 13+",
    feat_1: "Exclusive Toolkit in Armenia",
    feat_2: "Self-Discovery",
    feat_3: "Decision Making",
    feat_4: "300+ Successful Cases",
    sec_about: "About Us",
    about_text: "Kime Career & Education Center is built to help you find your exact professional path. Through our exclusive toolkit and consulting, we uncover your potential and guide you towards a successful career. The process involves self-discovery, making the right decisions, and in-depth analysis.",
    sec_services: "Services",
    srv_1_title: "Self-Discovery",
    srv_1_desc: "Discover your strengths and interests, and understand the fields where you will perform best.",
    srv_2_title: "Decision Making",
    srv_2_desc: "Support in career choice and planning based on real data and proven methodologies.",
    srv_3_title: "Educational Consulting",
    srv_3_desc: "Choosing the right educational institutions and programs to achieve your long-term goals.",
    sec_feedbacks: "Feedbacks",
    feedback_1: "\"Thanks to Kime, I finally understood which profession truly suits me. The entire process was very interesting and effective.\"",
    feedback_2: "\"Amazing approach and very helpful tools! Highly recommended for anyone confused about their career. Thank you Kime team!\"",
    sec_faq: "FAQ",
    faq_1_q: "Who is the consulting designed for?",
    faq_1_a: "The consulting is for individuals aged 13 and above who are facing career choices or career change decisions.",
    faq_2_q: "How to register for a meeting?",
    faq_2_a: "You can register by clicking the 'Register' button, which will redirect you to our calendar (Calendly) to pick a suitable day and time.",
    sec_contact: "Contacts",
    contact_title: "Get in touch",
    ready_to_start: "Ready to start?",
    cta_book_call: "Book a call",
    link_privacy: "Privacy Policy",
    link_terms: "Terms and Conditions"
  }
};

// --- LANGUAGE SWITCHER ---
const langBtns = document.querySelectorAll('.lang-btn');
const elementsToTranslate = document.querySelectorAll('[data-i18n]');

function setLanguage(lang) {
  // Update active button state
  langBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Translate elements
  elementsToTranslate.forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update document language
  document.documentElement.lang = lang;
}

langBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    setLanguage(btn.dataset.lang);
  });
});


// --- MOBILE MENU TOGGLE ---
const mobileToggle = document.querySelector('.mobile-toggle');
const mainNav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.nav-links a');

mobileToggle.addEventListener('click', () => {
  mainNav.classList.toggle('nav-active');
});

// Close menu when link clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('nav-active');
  });
});


// --- FAQ ACCORDION ---
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  question.addEventListener('click', () => {
    // Close other items
    faqItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove('active');
      }
    });
    // Toggle current item
    item.classList.toggle('active');
  });
});


// --- CALENDLY INTEGRATION ---
function openCalendly() {
  // Use Calendly Widget API
  Calendly.initPopupWidget({ url: 'https://calendly.com/kimeeduclub/new-meeting' }); // Placeholder URL, should be updated with real one
  return false;
}
