import type { Lang } from "./locale";

export const WHATSAPP_URL = "https://wa.me/97439993606";
export const CALENDLY_URL = "https://calendly.com/your-team/intro-call"; // TODO: replace with real Calendly link
export const CONTACT_EMAIL = "hello@inasmart.com";
export const CONTACT_PHONE = "+974 3999 3606";
export const CONTACT_WHATSAPP_DISPLAY = "+974 39993606";
export const CONTACT_ADDRESS = { en: "Doha, Qatar", ar: "الدوحة، قطر" };

type NavKey = "home" | "solutions" | "products" | "projects" | "brands" | "about" | "contact";

export const NAV: { key: NavKey; href: string; en: string; ar: string }[] = [
  { key: "home", href: "", en: "Home", ar: "الرئيسية" },
  { key: "solutions", href: "solutions", en: "Solutions", ar: "الحلول" },
  { key: "products", href: "products", en: "Products", ar: "المنتجات" },
  { key: "projects", href: "projects", en: "Projects", ar: "المشاريع" },
  { key: "brands", href: "brands", en: "Brands", ar: "العلامات" },
  { key: "about", href: "about", en: "About", ar: "من نحن" },
  { key: "contact", href: "contact", en: "Contact", ar: "تواصل معنا" },
];

export const solutions = [
  {
    id: "smart-classrooms",
    mono: "SC",
    en: { title: "Smart Classrooms", description: "Interactive displays, connectivity, and classroom technology for modern teaching." },
    ar: { title: "الفصول الذكية", description: "شاشات تفاعلية واتصال وتقنيات صفية تدعم التدريس الحديث." },
  },
  {
    id: "ai-labs",
    mono: "AI",
    en: { title: "AI Labs", description: "Dedicated spaces for AI exploration, assistants, and project-based learning." },
    ar: { title: "مختبرات الذكاء الاصطناعي", description: "مساحات مخصصة لاستكشاف الذكاء الاصطناعي والمساعدين والتعلم القائم على المشاريع." },
  },
  {
    id: "stem-labs",
    mono: "ST",
    en: { title: "STEM Labs", description: "Fully equipped STEM environments with kits, workstations, and curriculum alignment." },
    ar: { title: "مختبرات STEM", description: "بيئات STEM متكاملة مع مجموعات ومحطات عمل ومواءمة للمناهج." },
  },
  {
    id: "robotics-labs",
    mono: "RO",
    en: { title: "Robotics Labs", description: "Robotics arenas, programming stations, and competition-ready setups." },
    ar: { title: "مختبرات الروبوتات", description: "ساحات روبوتات ومحطات برمجة وتجهيزات جاهزة للمنافسات." },
  },
  {
    id: "vr-ar",
    mono: "VR",
    en: { title: "VR/AR Solutions", description: "Immersive learning experiences with VR/AR hardware and educational content." },
    ar: { title: "حلول الواقع الافتراضي والمعزز", description: "تجارب تعلم غامرة مع أجهزة ومحتوى تعليمي للواقع الافتراضي والمعزز." },
  },
  {
    id: "makerspaces",
    mono: "MK",
    en: { title: "Makerspaces & 3D Printing", description: "Maker labs with 3D printers, tools, and creative production workflows." },
    ar: { title: "مساحات الصنع والطباعة ثلاثية الأبعاد", description: "مختبرات صنع بطابعات ثلاثية الأبعاد وأدوات وسير عمل إنتاج إبداعي." },
  },
  {
    id: "furniture",
    mono: "FU",
    en: { title: "Educational Furniture", description: "Ergonomic, flexible furniture designed for collaborative and active learning." },
    ar: { title: "الأثاث التعليمي", description: "أثاث مرن ومريح مصمم للتعلم التعاوني والنشط." },
  },
  {
    id: "custom",
    mono: "CU",
    en: { title: "Custom Educational Projects", description: "End-to-end packages: equipment, furniture, training, installation, and planning." },
    ar: { title: "مشاريع تعليمية مخصصة", description: "حزم متكاملة: معدات وأثاث وتدريب وتركيب وتخطيط للمشروع." },
  },
];

export const productCategories = [
  {
    id: "ai-smart-learning",
    en: {
      title: "AI & Smart Learning",
      description: "Artificial intelligence and smart educational tools for curious learners.",
      subcategories: ["AI Toys", "AI Devices", "Smart Learning Kits"],
    },
    ar: {
      title: "الذكاء الاصطناعي والتعلم الذكي",
      description: "أدوات تعليمية ذكية تعتمد على الذكاء الاصطناعي للمتعلمين الفضوليين.",
      subcategories: ["ألعاب الذكاء الاصطناعي", "أجهزة الذكاء الاصطناعي", "مجموعات التعلم الذكي"],
    },
  },
  {
    id: "stem-robotics",
    en: {
      title: "STEM & Robotics",
      description: "Science, technology, engineering, coding, and hands-on robotics.",
      subcategories: ["STEM Kits", "Robotics", "Coding", "Electronics"],
    },
    ar: {
      title: "العلوم والتقنية والروبوتات",
      description: "العلوم والتقنية والهندسة والبرمجة والروبوتات العملية.",
      subcategories: ["مجموعات STEM", "الروبوتات", "البرمجة", "الإلكترونيات"],
    },
  },
  {
    id: "creative-early-learning",
    en: {
      title: "Creative & Early Learning",
      description: "Focused on younger learners, creativity, and foundational skills.",
      subcategories: ["Creative Learning", "Early Learning", "Educational Resources"],
    },
    ar: {
      title: "التعلم الإبداعي والمبكر",
      description: "موجه للمتعلمين الصغار والإبداع والمهارات التأسيسية.",
      subcategories: ["التعلم الإبداعي", "التعلم المبكر", "موارد تعليمية"],
    },
  },
];

export const projectCategories = [
  { id: "all", en: "All", ar: "الكل" },
  { id: "schools", en: "Schools", ar: "المدارس" },
  { id: "universities", en: "Universities", ar: "الجامعات" },
  { id: "innovation", en: "Innovation Spaces", ar: "مساحات الابتكار" },
  { id: "ai", en: "AI Projects", ar: "مشاريع الذكاء الاصطناعي" },
];

export const projects = [
  {
    id: "greenfield-stem",
    category: "schools",
    en: { title: "STEM Lab for a Growing School", summary: "A complete STEM lab with robotics stations, teacher training, and installation." },
    ar: { title: "مختبر STEM لمدرسة نامية", summary: "مختبر STEM متكامل مع محطات روبوتات وتدريب للمعلمين وتركيب." },
  },
  {
    id: "campus-ai",
    category: "universities",
    en: { title: "University AI Learning Hub", summary: "An AI lab with devices, software pathways, and collaborative project zones." },
    ar: { title: "مركز تعلم ذكاء اصطناعي جامعي", summary: "مختبر ذكاء اصطناعي بأجهزة ومسارات برمجية ومناطق مشاريع تعاونية." },
  },
  {
    id: "makerspace-city",
    category: "innovation",
    en: { title: "Community Innovation Space", summary: "Makerspace and 3D printing suite for public innovation programmes." },
    ar: { title: "مساحة ابتكار مجتمعية", summary: "مساحة صنع وطباعة ثلاثية الأبعاد لبرامج الابتكار العامة." },
  },
  {
    id: "classroom-ai",
    category: "ai",
    en: { title: "AI-Enhanced Classroom Rollout", summary: "Smart classroom technology with AI assistants across multiple grade levels." },
    ar: { title: "نشر فصول معززة بالذكاء الاصطناعي", summary: "تقنيات فصول ذكية مع مساعدي ذكاء اصطناعي عبر مراحل دراسية متعددة." },
  },
  {
    id: "robotics-academy",
    category: "schools",
    en: { title: "Robotics Academy Setup", summary: "Competition-ready robotics lab with curriculum kits and coaching support." },
    ar: { title: "إعداد أكاديمية روبوتات", summary: "مختبر روبوتات جاهز للمنافسات مع مجموعات مناهج ودعم تدريبي." },
  },
  {
    id: "vr-campus",
    category: "universities",
    en: { title: "Immersive Learning Studio", summary: "VR/AR studio for science and design programmes on campus." },
    ar: { title: "استوديو تعلم غامر", summary: "استوديو واقع افتراضي ومعزز لبرامج العلوم والتصميم في الحرم الجامعي." },
  },
];

export const brands = [
  { en: "Partner Brand A", ar: "علامة شريكة أ" },
  { en: "Partner Brand B", ar: "علامة شريكة ب" },
  { en: "Partner Brand C", ar: "علامة شريكة ج" },
  { en: "Partner Brand D", ar: "علامة شريكة د" },
  { en: "Partner Brand E", ar: "علامة شريكة هـ" },
  { en: "Partner Brand F", ar: "علامة شريكة و" },
];

export const aboutContent = [
  {
    en: { title: "Mission", body: "To empower learners and institutions with modern educational products and complete learning environments." },
    ar: { title: "المهمة", body: "تمكين المتعلمين والمؤسسات بمنتجات تعليمية حديثة وبيئات تعلم متكاملة." },
  },
  {
    en: { title: "Vision", body: "A region where every school and family can access innovative, practical tools for the future of learning." },
    ar: { title: "الرؤية", body: "منطقة يتمكن فيها كل مدرسة وأسرة من الوصول إلى أدوات مبتكرة وعملية لمستقبل التعلم." },
  },
  {
    en: { title: "Team", body: "Educators, technologists, and project specialists who design, supply, and support educational solutions." },
    ar: { title: "الفريق", body: "تربويون وتقنيون ومتخصصو مشاريع يصممون ويوردون ويدعمون الحلول التعليمية." },
  },
  {
    en: { title: "Experience", body: "Delivering products for homes and classrooms, and full solutions for schools, universities, and businesses." },
    ar: { title: "الخبرة", body: "خبرة في توريد المنتجات للمنازل والفصول، والحلول المتكاملة للمدارس والجامعات والشركات." },
  },
  {
    en: {
      title: "Educational philosophy",
      body: "Learning thrives when tools are hands-on, inclusive, and matched to real institutional needs — not one-size-fits-all catalogues.",
    },
    ar: {
      title: "الفلسفة التعليمية",
      body: "يزدهر التعلم عندما تكون الأدوات عملية وشاملة ومتوافقة مع احتياجات المؤسسات الحقيقية — لا كتالوجات عامة للجميع.",
    },
  },
];

export const quoteProjectTypes = [
  { en: "Smart Classroom", ar: "فصل ذكي" },
  { en: "AI Lab", ar: "مختبر ذكاء اصطناعي" },
  { en: "STEM Lab", ar: "مختبر STEM" },
  { en: "Robotics Lab", ar: "مختبر روبوتات" },
  { en: "VR/AR Solution", ar: "حل واقع افتراضي/معزز" },
  { en: "Makerspace", ar: "مساحة صنع" },
  { en: "Educational Furniture", ar: "أثاث تعليمي" },
  { en: "Custom Project", ar: "مشروع مخصص" },
  { en: "Product Order", ar: "طلب منتجات" },
  { en: "Other", ar: "أخرى" },
];

export const ui = {
  en: {
    quoteCta: "Request a Quote",
    whatsappNav: "WhatsApp",
    hero: {
      kicker: "Educational Technology Partner — Qatar & GCC",
      title: "Complete learning environments, built for institutions.",
      copy: "From AI labs to STEM classrooms — we supply, install, and support the technology schools and universities need to teach what's next.",
      ctaQuote: "Request a Quote",
      ctaSolutions: "Browse Solutions",
    },
    trust: "Trusted by schools, universities & innovation programs across Qatar",
    solutionsSection: { kicker: "Solutions", title: "Complete implementations, not single items", link: "View all solutions →" },
    productsSection: { kicker: "Products", title: "Three pathways into modern learning tools", link: "View all products →" },
    projectsSection: { kicker: "Proof", title: "Recent implementations" },
    ctaBand: {
      title: "Planning a lab, classroom, or campus rollout?",
      copy: "Tell us your project scope and budget — we'll prepare a tailored proposal within days.",
      quote: "Request a Quote",
      call: "Book a Call",
    },
    productsPage: {
      kicker: "Products",
      title: "Educational products for parents, teachers & educators",
      copy: "Organised into three categories, from AI learning devices to classroom-ready STEM kits.",
    },
    solutionsPage: {
      kicker: "Solutions",
      title: "Complete educational environments",
      copy: "Installations and implementations for schools, universities, and businesses.",
    },
    projectsPage: { kicker: "Projects", title: "Case studies & successful implementations" },
    brandsPage: { kicker: "Brands", title: "Partner brands we distribute", copy: "Recognised partners — credibility through quality. Logos to be added." },
    aboutPage: { kicker: "About", title: "About INASMART" },
    contactPage: {
      kicker: "Contact",
      title: "Reach us",
      copy: "By form, phone, email, or WhatsApp.",
      email: "Email",
      phone: "Phone",
      whatsapp: "WhatsApp",
      address: "Address",
      formName: "Name",
      formEmail: "Email",
      formMessage: "Message",
      send: "Send message",
    },
    quotePage: {
      kicker: "Request a Quote",
      title: "Tell us about your project",
      copy: "We'll prepare a tailored proposal for your organisation.",
      org: "Organisation name",
      contactName: "Contact name",
      email: "Email",
      phone: "Phone",
      type: "Project type",
      students: "Number of students",
      budget: "Budget",
      requirements: "Requirements",
      submit: "Submit quote request",
      orCall: "Or book a call instead",
      orWhatsapp: "Continue on WhatsApp",
    },
    footer: {
      tagline: "Educational products and complete learning environments for the next generation of learners.",
      explore: "Explore",
      contact: "Contact",
      rights: "All rights reserved.",
    },
  },
  ar: {
    quoteCta: "طلب عرض سعر",
    whatsappNav: "واتساب",
    hero: {
      kicker: "شريك التقنية التعليمية — قطر ودول الخليج",
      title: "بيئات تعلم متكاملة، مصممة للمؤسسات.",
      copy: "من مختبرات الذكاء الاصطناعي إلى فصول STEM — نوفر التقنية التي تحتاجها المدارس والجامعات، ونقوم بتركيبها ودعمها.",
      ctaQuote: "طلب عرض سعر",
      ctaSolutions: "استكشف الحلول",
    },
    trust: "موثوق من قبل المدارس والجامعات وبرامج الابتكار في قطر",
    solutionsSection: { kicker: "الحلول", title: "تنفيذات متكاملة، لا منتجات منفردة", link: "عرض جميع الحلول ←" },
    productsSection: { kicker: "المنتجات", title: "ثلاثة مسارات نحو أدوات تعلم حديثة", link: "عرض جميع المنتجات ←" },
    projectsSection: { kicker: "الإثبات", title: "أحدث التنفيذات" },
    ctaBand: {
      title: "هل تخطط لمختبر أو فصل أو مشروع على مستوى الحرم الجامعي؟",
      copy: "أخبرنا بنطاق مشروعك وميزانيتك — سنجهز عرضاً مخصصاً خلال أيام.",
      quote: "طلب عرض سعر",
      call: "حجز مكالمة",
    },
    productsPage: {
      kicker: "المنتجات",
      title: "منتجات تعليمية لأولياء الأمور والمعلمين والتربويين",
      copy: "منظمة في ثلاث فئات، من أجهزة التعلم بالذكاء الاصطناعي إلى مجموعات STEM الجاهزة للفصول.",
    },
    solutionsPage: {
      kicker: "الحلول",
      title: "بيئات تعليمية متكاملة",
      copy: "تركيبات وتنفيذات للمدارس والجامعات والشركات.",
    },
    projectsPage: { kicker: "المشاريع", title: "دراسات حالة وتنفيذات ناجحة" },
    brandsPage: { kicker: "العلامات", title: "العلامات التجارية الشريكة التي نوزعها", copy: "شركاء موثوقون — مصداقية من خلال الجودة. الشعارات ستُضاف قريباً." },
    aboutPage: { kicker: "من نحن", title: "عن إيناسمارت" },
    contactPage: {
      kicker: "تواصل معنا",
      title: "تواصل معنا",
      copy: "عبر النموذج أو الهاتف أو البريد أو واتساب.",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      whatsapp: "واتساب",
      address: "العنوان",
      formName: "الاسم",
      formEmail: "البريد الإلكتروني",
      formMessage: "الرسالة",
      send: "إرسال الرسالة",
    },
    quotePage: {
      kicker: "طلب عرض سعر",
      title: "أخبرنا عن مشروعك",
      copy: "سنجهز عرضاً مخصصاً لمؤسستك.",
      org: "اسم المؤسسة",
      contactName: "اسم المسؤول",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      type: "نوع المشروع",
      students: "عدد الطلاب",
      budget: "الميزانية",
      requirements: "المتطلبات",
      submit: "إرسال طلب العرض",
      orCall: "أو احجز مكالمة بدلاً من ذلك",
      orWhatsapp: "تابع عبر واتساب",
    },
    footer: {
      tagline: "منتجات وبيئات تعليمية حديثة لجيل المتعلمين القادم.",
      explore: "استكشف",
      contact: "تواصل",
      rights: "جميع الحقوق محفوظة.",
    },
  },
} satisfies Record<Lang, unknown>;

export function t(lang: Lang) {
  return ui[lang];
}
