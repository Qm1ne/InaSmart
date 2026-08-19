import type { Lang } from "./locale";

export const WHATSAPP_URL = "https://wa.me/97439993606";
export const CALENDLY_URL = "https://calendly.com/inasmart-info/30min";
export const CONTACT_EMAIL = "hello@inasmart.com";
export const CONTACT_PHONE = "+974 3999 3606";
export const CONTACT_WHATSAPP_DISPLAY = "+974 39993606";
export const CONTACT_ADDRESS = { en: "Doha, Qatar", ar: "الدوحة، قطر" };

// TODO: replace with the real production domain before launch.
export const SITE_URL = "https://inasmart.com";

/**
 * Two keyword groups.
 *
 * `SEO_KEYWORDS_BRAND` — from the client's business summary. These describe the
 * offer accurately but are mostly low-competition / low-volume phrasings.
 *
 * `SEO_KEYWORDS_MARKET` — how buyers in Qatar actually search, based on the
 * language used by ranking competitors (Technobriq, Techno Q, ConvoSync, Axle
 * Systems, DLI, Aman). "ELV", "ICT", "AV" and "system integrator" are the
 * dominant category terms in this market and were missing entirely.
 *
 * Note: Google ignores the meta keywords tag. These exist to keep the vocabulary
 * in one place — the ranking work is done by the titles, headings and body copy
 * that reuse these phrases.
 */
export const SEO_KEYWORDS_BRAND = [
  "Smart technology solutions Qatar",
  "Advanced technology supplier Qatar",
  "Technology sourcing Qatar",
  "China technology sourcing Qatar",
  "AI solutions Qatar",
  "Automation solutions Qatar",
  "Robotics solutions Qatar",
  "Education technology Qatar",
  "STEM lab supplier Qatar",
  "Smart spaces Qatar",
  "Smart factory solutions Qatar",
  "Plastic manufacturing equipment Qatar",
  "Injection molding machine supplier Qatar",
  "Smart storage solutions Qatar",
  "Warehouse tracking system Qatar",
  "System integration Qatar",
  "Smart dashboards Qatar",
];

export const SEO_KEYWORDS_MARKET = [
  "System integrator Qatar",
  "Systems integrator Doha",
  "ICT solutions Qatar",
  "AV solutions Qatar",
  "Audio visual company Qatar",
  "AV system integrator Qatar",
  "ELV systems Qatar",
  "Low current systems Qatar",
  "Smart board Qatar",
  "Interactive whiteboard Qatar",
  "Interactive display Qatar",
  "Smart classroom Qatar",
  "Robotics lab setup Qatar",
  "Meeting room AV Qatar",
  "Conference room solutions Qatar",
  "Video conferencing Qatar",
  "Boardroom AV Doha",
  "Industrial automation Qatar",
  "Barcode system Qatar",
  "RFID tracking Qatar",
  "Inventory management system Qatar",
  "Warehouse management system Qatar",
  "Digital transformation Qatar",
];

/**
 * Product-level terms from the real catalogue. These are the long-tail queries
 * ("cobot supplier Qatar", "injection moulding machine Qatar") that convert
 * best — the buyer already knows the equipment name.
 */
export const SEO_KEYWORDS_PRODUCTS = [
  "Injection moulding machine Qatar",
  "Blow moulding machine Qatar",
  "Mould tooling Qatar",
  "CNC machine Qatar",
  "CMM measuring machine Qatar",
  "Cobot Qatar",
  "Collaborative robot Qatar",
  "AMR robot Qatar",
  "Autonomous mobile robot Qatar",
  "Conveyor system Qatar",
  "Warehouse racking Qatar",
  "Machine vision inspection Qatar",
  "3D scanner Qatar",
  "3D printer Qatar",
  "Laser cutter Qatar",
  "Holographic display Qatar",
  "Hologram showcase Qatar",
  "Interactive projection Qatar",
  "Self check-in kiosk Qatar",
  "Digital microscope Qatar",
  "Humanoid robot Qatar",
  "Service robot Qatar",
  "Smart podium Qatar",
  "STEM workstation Qatar",
];

export const SEO_KEYWORDS = [...SEO_KEYWORDS_MARKET, ...SEO_KEYWORDS_PRODUCTS, ...SEO_KEYWORDS_BRAND];

export const SEO_KEYWORDS_AR = [
  "شركة أنظمة ذكية قطر",
  "تكامل الأنظمة قطر",
  "أنظمة التيار الخفيف قطر",
  "حلول صوتية ومرئية قطر",
  "سبورة ذكية قطر",
  "شاشة تفاعلية قطر",
  "فصل ذكي قطر",
  "مختبر روبوتات المدارس قطر",
  "قاعة اجتماعات ذكية قطر",
  "أتمتة صناعية قطر",
  "نظام باركود قطر",
  "إدارة المخزون قطر",
  "توريد تقنية قطر",
  "التحول الرقمي قطر",
  "ماكينة حقن بلاستيك قطر",
  "ماكينة نفخ بلاستيك قطر",
  "قوالب حقن قطر",
  "ماكينة CNC قطر",
  "روبوت تعاوني قطر",
  "روبوت متحرك ذاتي قطر",
  "طابعة ثلاثية الأبعاد قطر",
  "قاطعة ليزر قطر",
  "شاشة هولوغرام قطر",
  "كشك خدمة ذاتية قطر",
  "رفوف مستودعات قطر",
];

type NavKey = "home" | "useCases" | "products" | "sectors" | "about" | "contact";

/**
 * Primary navigation. Projects is intentionally absent — the route still exists
 * at /[lang]/projects but is hidden from nav and de-indexed until the case
 * studies are rewritten for the B2B positioning. To bring it back, re-add
 * { key: "projects", href: "projects", en: "Projects", ar: "المشاريع" } here,
 * drop the `robots` block in app/[lang]/projects/page.tsx, and re-add the route
 * to app/sitemap.ts.
 */
export const NAV: { key: NavKey; href: string; en: string; ar: string }[] = [
  { key: "home", href: "", en: "Home", ar: "الرئيسية" },
  { key: "useCases", href: "use-cases", en: "Use Cases", ar: "حالات الاستخدام" },
  { key: "products", href: "products", en: "Products", ar: "المنتجات" },
  { key: "sectors", href: "sectors", en: "Across Sectors", ar: "عبر القطاعات" },
  { key: "about", href: "about", en: "About", ar: "من نحن" },
  { key: "contact", href: "contact", en: "Contact", ar: "تواصل معنا" },
];

/**
 * Human labels for the named groups inside smart_classroom.glb. The GLB itself
 * carries snake_case node names (room_shell, ptz_camera, …); this maps them to
 * something a client can read. Any group missing here falls back to a
 * prettified version of its node name.
 */
export const MODEL_PART_LABELS: Record<string, { en: string; ar: string }> = {
  room_shell: { en: "Room shell", ar: "هيكل الغرفة" },
  interactive_display: { en: "Interactive display", ar: "الشاشة التفاعلية" },
  ai_dashboard_panel: { en: "AI dashboard panel", ar: "لوحة الذكاء الاصطناعي" },
  ceiling_projector: { en: "Ceiling projector", ar: "جهاز العرض السقفي" },
  ptz_camera: { en: "PTZ camera", ar: "كاميرا PTZ" },
  ceiling_speaker: { en: "Ceiling speaker", ar: "سماعة السقف" },
  smoke_detector: { en: "Smoke detector", ar: "كاشف الدخان" },
  wifi_access_point: { en: "Wi-Fi access point", ar: "نقطة وصول واي فاي" },
  corner_camera: { en: "Corner camera", ar: "كاميرا الزاوية" },
  network_rack: { en: "Network rack", ar: "خزانة الشبكة" },
  whiteboard: { en: "Whiteboard", ar: "السبورة" },
  entry_door: { en: "Entry door", ar: "باب الدخول" },
  fire_alarm: { en: "Fire alarm", ar: "إنذار الحريق" },
  charging_cabinet: { en: "Charging cabinet", ar: "خزانة الشحن" },
  window_curtain: { en: "Window & curtain", ar: "النافذة والستارة" },
  wall_control_panels: { en: "Wall control panels", ar: "لوحات التحكم الجدارية" },
  ups_unit: { en: "UPS unit", ar: "وحدة الطاقة الاحتياطية" },
  teacher_podium: { en: "Teacher podium", ar: "منصة المعلم" },
  document_camera: { en: "Document camera", ar: "كاميرا المستندات" },
  teacher_figure: { en: "Teacher", ar: "المعلم" },
  student_workstations: { en: "Student workstations", ar: "محطات عمل الطلاب" },
};

/** Ids of the entries in `sectors`. Kept as a union so a use case cannot be
 *  tagged with a sector that does not exist. */
export type SectorId = "education" | "corporate" | "manufacturing" | "logistics-supply-chain";

export type UseCase = {
  id: string;
  mono: string;
  /**
   * Sectors this use case belongs to. The sectors page derives its "related use
   * cases" links from this, so a new use case only needs tagging here — nothing
   * in `sectors` or on the sectors page has to change.
   */
  sectors: SectorId[];
  /** Cover photo in public/. Falls back to a striped placeholder when absent. */
  image?: string;
  /** GLB model in public/. When present the cover opens an interactive 3D view. */
  model?: string;
  /** Photos in public/. When present (and no model) the cover opens a gallery. */
  gallery?: string[];
  /** Longer equipment list shown in the gallery view, beyond the `includes` tags. */
  equipment?: { en: string[]; ar: string[] };
  en: { title: string; short: string; long: string; includes: string[]; lead: string; fit: string };
  ar: { title: string; short: string; long: string; includes: string[]; lead: string; fit: string };
};

export const useCases: UseCase[] = [
  {
    id: "robotics-lab",
    mono: "RO",
    sectors: ["education"],
    en: {
      title: "Robotics Lab",
      short: "Robotics arenas, programming stations and competition-ready setups.",
      long: "Robotics arenas, programming stations and competition-ready setups, including the storage, power and safety detail that makes a lab usable on day one.",
      includes: ["Arena & tables", "Programming stations", "Robot kits", "Teacher / operator training"],
      lead: "6–10 weeks",
      fit: "Schools, universities, training centres",
    },
    ar: {
      title: "مختبر الروبوتات",
      short: "ساحات روبوتات ومحطات برمجة وتجهيزات جاهزة للمنافسات.",
      long: "ساحات روبوتات ومحطات برمجة وتجهيزات جاهزة للمنافسات, مع تفاصيل التخزين والطاقة والسلامة التي تجعل المختبر جاهزاً من اليوم الأول.",
      includes: ["الساحة والطاولات", "محطات البرمجة", "مجموعات الروبوت", "تدريب المشغلين"],
      lead: "6–10 أسابيع",
      fit: "المدارس والجامعات ومراكز التدريب",
    },
  },
  {
    id: "classroom-lab",
    mono: "CL",
    sectors: ["education", "corporate"],
    image: "/Smart_classroom.jpeg",
    model: "/smart_classroom.glb",
    en: {
      title: "Classroom Lab",
      short: "Interactive displays, connectivity and control for modern teaching.",
      long: "Interactive displays and smart boards, audio, connectivity and classroom control, specified so a teacher can start a lesson without calling IT.",
      includes: ["Interactive display", "Audio & camera", "Network & control", "Furniture"],
      lead: "4–8 weeks",
      fit: "Schools, corporate training rooms",
    },
    ar: {
      title: "الفصل الذكي",
      short: "شاشات تفاعلية واتصال وتحكم للتدريس الحديث.",
      long: "شاشات تفاعلية وصوت واتصال وتحكم صفي بمواصفات تتيح للمعلم بدء الحصة دون الاتصال بالدعم الفني.",
      includes: ["شاشة تفاعلية", "صوت وكاميرا", "الشبكة والتحكم", "الأثاث"],
      lead: "4–8 أسابيع",
      fit: "المدارس وقاعات التدريب المؤسسي",
    },
  },
  {
    id: "ai-lab",
    mono: "AI",
    sectors: ["education", "corporate"],
    image: "/AI_stem_lab.jpeg",
    gallery: ["/AI_stem_lab.jpeg", "/AI_Stem_lab_2.jpeg", "/AI_Stem_lab_3.jpeg"],
    // TODO: confirm this equipment list with the client — placeholder for review.
    equipment: {
      en: [
        "GPU workstations for model training and inference",
        "On-prem compute node or lab server rack",
        "AI vision station with depth camera",
        "Robotics kits for applied AI projects",
        "Interactive display and presentation screen",
        "Collaboration tables and project zones",
        "Network, power and cable management",
        "Model tooling, licences and onboarding",
      ],
      ar: [
        "محطات عمل GPU لتدريب النماذج وتشغيلها",
        "وحدة حوسبة محلية أو خزانة خوادم للمختبر",
        "محطة رؤية آلية مزودة بكاميرا عمق",
        "مجموعات روبوتات لمشاريع الذكاء الاصطناعي التطبيقية",
        "شاشة تفاعلية وشاشة عرض للتقديم",
        "طاولات تعاون ومناطق مشاريع",
        "الشبكة والطاقة وتنظيم الكابلات",
        "أدوات النماذج والتراخيص وتهيئة الفريق",
      ],
    },
    en: {
      title: "AI Lab",
      short: "Compute, tooling and workspace for applied AI work.",
      long: "Workstations or on-prem compute, model tooling and project zones for applied AI work — sized to the workloads you actually run.",
      includes: ["GPU workstations", "Model tooling", "Collaboration zones", "Onboarding"],
      lead: "6–12 weeks",
      fit: "Universities, R&D teams, innovation units",
    },
    ar: {
      title: "مختبر الذكاء الاصطناعي",
      short: "قدرة حاسوبية وأدوات ومساحة عمل للتطبيقات العملية.",
      long: "محطات عمل أو قدرة حاسوبية محلية وأدوات نماذج ومناطق مشاريع للعمل التطبيقي, بحجم يناسب أعمالك الفعلية.",
      includes: ["محطات GPU", "أدوات النماذج", "مناطق تعاون", "تهيئة الفريق"],
      lead: "6–12 أسبوعاً",
      fit: "الجامعات وفرق البحث ووحدات الابتكار",
    },
  },
  {
    id: "smart-factory",
    mono: "SF",
    sectors: ["manufacturing"],
    en: {
      title: "Smart Factory",
      short: "Sensors, vision and dashboards that surface downtime as it happens.",
      long: "Machine sensors, vision inspection, connectivity and dashboards that surface downtime and quality drift while a shift is still running — retrofitted onto the lines you already own.",
      includes: ["Machine sensors", "Vision inspection", "Edge gateway", "OEE dashboards"],
      lead: "8–16 weeks",
      fit: "Manufacturing, food & beverage, packaging",
    },
    ar: {
      title: "المصنع الذكي",
      short: "حساسات ورؤية آلية ولوحات تكشف التوقفات لحظياً.",
      long: "حساسات آلات ورؤية آلية للفحص واتصال ولوحات تكشف التوقفات وانحراف الجودة أثناء الوردية — مُركَّبة على خطوطك الحالية.",
      includes: ["حساسات الآلات", "الفحص بالرؤية", "بوابة طرفية", "لوحات OEE"],
      lead: "8–16 أسبوعاً",
      fit: "التصنيع والأغذية والتعبئة",
    },
  },
  {
    id: "smart-meeting-room",
    mono: "MR",
    sectors: ["corporate"],
    en: {
      title: "Smart Meeting Room",
      short: "Video, wireless presentation, booking and control that just work.",
      long: "Video conferencing, wireless presentation, room booking and one-touch control — standardised across rooms so every space behaves the same way.",
      includes: ["Video bar / codec", "Wireless presentation", "Room booking panel", "One-touch control"],
      lead: "3–6 weeks",
      fit: "Offices, government, hospitals, campuses",
    },
    ar: {
      title: "غرفة الاجتماعات الذكية",
      short: "فيديو وعرض لاسلكي وحجز وتحكم يعمل فوراً.",
      long: "مؤتمرات فيديو وعرض لاسلكي وحجز للغرف وتحكم بلمسة واحدة, موحّد بين الغرف بحيث تعمل كل مساحة بالطريقة نفسها.",
      includes: ["وحدة فيديو", "عرض لاسلكي", "لوحة حجز", "تحكم بلمسة"],
      lead: "3–6 أسابيع",
      fit: "المكاتب والجهات الحكومية والمستشفيات",
    },
  },
];

export type Sector = {
  id: SectorId;
  /** Two-letter monogram, used by the sector cover when there is no photo yet. */
  mono: string;
  /** Wide photo in public/. Falls back to a branded cover panel when absent. */
  image?: string;
  /**
   * Index into `form.sectorChips`, used to pre-select the sector when a card
   * links into the solution request form. Kept explicit so reordering either
   * list cannot silently mis-map the chips.
   */
  chipIndex: number;
  en: SectorCopy;
  ar: SectorCopy;
};

type SectorCopy = {
  title: string;
  short: string;
  long: string;
  /** What usually starts the conversation in this sector. */
  trigger: string;
  /** The constraint that makes delivery here different from the other sectors. */
  constraint: string;
  work: string[];
};

export const sectors: Sector[] = [
  {
    id: "education",
    mono: "ED",
    image: "/Smart_classroom.jpeg",
    chipIndex: 0,
    en: {
      title: "Education",
      short: "Labs, classrooms and campus technology.",
      long: "Where we started: labs and classrooms delivered around a curriculum and a school calendar, not just a purchase order.",
      trigger: "A new building, a curriculum change, or an inspection that flagged the lab you already have.",
      constraint:
        "Work has to fit the school calendar — installed in term breaks, teachers trained before the first lesson, and equipment that survives thirty students a period.",
      work: ["Robotics & STEM labs", "Smart classrooms", "AI labs", "Teacher training"],
    },
    ar: {
      title: "التعليم",
      short: "مختبرات وفصول وتقنيات الحرم التعليمي.",
      long: "من هنا بدأنا: مختبرات وفصول تُنفَّذ وفق المنهج والتقويم الدراسي لا وفق أمر الشراء فقط.",
      trigger: "مبنى جديد أو تغيير في المنهج أو تقييم أشار إلى ضعف المختبر الحالي.",
      constraint:
        "العمل يجب أن يتوافق مع التقويم الدراسي — تركيب خلال العطل، وتدريب المعلمين قبل الحصة الأولى، وتجهيزات تتحمل ثلاثين طالباً في كل حصة.",
      work: ["مختبرات روبوتات وSTEM", "فصول ذكية", "مختبرات ذكاء اصطناعي", "تدريب المعلمين"],
    },
  },
  {
    id: "corporate",
    mono: "CO",
    chipIndex: 1,
    en: {
      title: "Corporate / offices",
      short: "Meeting rooms, workplace systems and control.",
      long: "Standardised meeting rooms, workplace AV and building control — rolled out floor by floor with minimal disruption.",
      trigger: "Rooms that behave differently floor to floor, or a fit-out where AV was left to the last package.",
      constraint:
        "The building stays open. Rooms are handed back one at a time, and every space has to work the same way so nobody needs a guide to start a call.",
      work: ["Meeting rooms", "Workplace AV", "Access & control", "Multi-site rollouts"],
    },
    ar: {
      title: "الشركات والمكاتب",
      short: "غرف اجتماعات وأنظمة مكانية وتحكم.",
      long: "غرف اجتماعات موحّدة وأنظمة صوت وصورة وتحكم في المباني, تُنفَّذ طابقاً بطابق بأقل تعطيل.",
      trigger: "غرف تعمل بطريقة مختلفة من طابق لآخر، أو تجهيز مكتبي تُرك فيه نظام الصوت والصورة إلى آخر مرحلة.",
      constraint:
        "المبنى يبقى قيد التشغيل. تُسلَّم الغرف واحدة تلو الأخرى، وكل مساحة يجب أن تعمل بالطريقة نفسها دون حاجة إلى دليل استخدام لبدء اجتماع.",
      work: ["غرف الاجتماعات", "أنظمة العرض", "الدخول والتحكم", "تنفيذ متعدد المواقع"],
    },
  },
  {
    id: "manufacturing",
    mono: "MF",
    chipIndex: 2,
    en: {
      title: "Manufacturing / industrial",
      short: "Connected lines, vision inspection and monitoring.",
      long: "Retrofit monitoring and automation on existing lines, with the data landing somewhere operations actually looks.",
      trigger: "Downtime nobody can explain, quality drift found after despatch, or reporting still assembled by hand at month end.",
      constraint:
        "Lines cannot stop for us. Monitoring is retrofitted inside production windows, onto the controllers already on the floor, without touching machine safety.",
      work: ["Line monitoring", "Vision inspection", "OEE dashboards", "Automation retrofit"],
    },
    ar: {
      title: "الصناعة والتصنيع",
      short: "خطوط متصلة وفحص بالرؤية ومراقبة.",
      long: "مراقبة وأتمتة تُركَّب على الخطوط القائمة، مع بيانات تصل إلى حيث ينظر التشغيل فعلاً.",
      trigger: "توقفات لا يُعرف سببها، أو انحراف في الجودة يُكتشف بعد الشحن، أو تقارير تُجمَّع يدوياً في نهاية الشهر.",
      constraint:
        "الخطوط لا تتوقف من أجلنا. تُركَّب المراقبة ضمن نوافذ الإنتاج، على وحدات التحكم الموجودة أصلاً، دون المساس بأنظمة سلامة الآلات.",
      work: ["مراقبة الخطوط", "الفحص بالرؤية", "لوحات OEE", "أتمتة إضافية"],
    },
  },
  {
    id: "logistics-supply-chain",
    mono: "LG",
    chipIndex: 3,
    en: {
      title: "Logistics & Supply Chain",
      short: "Warehouse automation, fleet visibility and inventory tracking.",
      long: "Warehouse and yard visibility, barcode and RFID tracking, inventory management and fleet monitoring — built around the flow of goods rather than a single site.",
      trigger: "Stock counts that never match the system, pallets lost between yard and rack, or a customer asking where their shipment is.",
      constraint:
        "Coverage has to hold across the whole flow — yard, dock, rack and vehicle — including the cold, dust and wide open spans where scanning and wireless usually fail.",
      work: ["Warehouse automation", "Fleet & asset tracking", "Inventory visibility", "Yard management"],
    },
    ar: {
      title: "الخدمات اللوجستية وسلسلة التوريد",
      short: "أتمتة المستودعات وتتبع الأسطول والمخزون.",
      long: "رؤية شاملة للمستودعات والساحات، وتتبع بالباركود وRFID، وإدارة مخزون ومراقبة للأسطول — مبنية حول تدفق البضائع لا حول موقع واحد.",
      trigger: "جرد لا يطابق السجلات، أو منصات تُفقد بين الساحة والرف، أو عميل يسأل عن موقع شحنته.",
      constraint:
        "التغطية يجب أن تشمل التدفق كاملاً — الساحة والرصيف والرف والمركبة — بما في ذلك بيئات التبريد والغبار والمساحات المفتوحة حيث تفشل القراءة والاتصال اللاسلكي عادة.",
      work: ["أتمتة المستودعات", "تتبع الأصول والأسطول", "رؤية المخزون", "إدارة الساحات"],
    },
  },
];

/**
 * Use cases tagged with a given sector, in the order they appear in `useCases`.
 * Named `sectorUseCases` rather than `useCasesForSector` so the react-hooks
 * lint rule does not read the `use` prefix as a hook.
 */
export function sectorUseCases(sectorId: SectorId): UseCase[] {
  return useCases.filter((u) => u.sectors.includes(sectorId));
}

export const productCategories = [
  {
    id: "smart-spaces",
    en: { title: "Smart Spaces & Interactive Experiences", description: "Holographic, touchless and interactive systems for showrooms, lobbies, training and innovation spaces." },
    ar: { title: "المساحات الذكية والتجارب التفاعلية", description: "أنظمة هولوغرافية وتفاعلية وبلا لمس لصالات العرض والاستقبال والتدريب والابتكار." },
  },
  {
    id: "education-stem",
    en: { title: "Education, STEM & Robotics", description: "Classroom, lab and makerspace technology for schools, universities and training centres." },
    ar: { title: "التعليم وSTEM والروبوتات", description: "تقنيات الفصول والمختبرات ومساحات الصنع للمدارس والجامعات ومراكز التدريب." },
  },
  {
    id: "storage-logistics",
    en: { title: "Smart Storage & Logistics", description: "Warehouse handling, sorting and autonomous mobile robots for storage and intralogistics." },
    ar: { title: "التخزين الذكي والخدمات اللوجستية", description: "مناولة المستودعات والفرز والروبوتات المتحركة ذاتية القيادة للتخزين والنقل الداخلي." },
  },
  {
    id: "manufacturing-industrial",
    en: { title: "Plastic Manufacturing & Industrial", description: "Injection and blow moulding, tooling, CNC, metrology and machine-vision inspection." },
    ar: { title: "تصنيع البلاستيك والصناعة", description: "الحقن والنفخ والقوالب وماكينات CNC والقياس والفحص بالرؤية الآلية." },
  },
];

export type Product = {
  id: string;
  categoryId: string;
  image: string;
  signature?: boolean;
  en: { name: string; spec: string };
  ar: { name: string; spec: string };
};

/**
 * Real catalogue supplied by the client (39 products). Photography lives in
 * public/products/. `signature` marks the three INA-branded flagship
 * experiences, which are presented as custom-built rather than off-the-shelf.
 */
export const products: Product[] = [
  // Smart Spaces & Interactive Experiences
  {
    id: "ina-ai-holoportal",
    categoryId: "smart-spaces",
    image: "/products/ina-ai-holoportal.jpg",
    signature: true,
    en: { name: "INA AI HoloPortal", spec: "Life-size holographic AI guide — talk, ask, explore, interact." },
    ar: { name: "بوابة إينا الهولوغرافية بالذكاء الاصطناعي", spec: "دليل ذكي هولوغرافي بالحجم الطبيعي — تحدّث واسأل واستكشف وتفاعل." },
  },
  {
    id: "ina-spatial-creation-table",
    categoryId: "smart-spaces",
    image: "/products/ina-spatial-creation-table.jpg",
    signature: true,
    en: { name: "INA Spatial Creation Table", spec: "Physical-to-digital table turning real objects into interactive spatial content." },
    ar: { name: "طاولة إينا للإبداع المكاني", spec: "طاولة تحوّل الأشياء الحقيقية إلى محتوى مكاني تفاعلي." },
  },
  {
    id: "ina-air-interaction-wall",
    categoryId: "smart-spaces",
    image: "/products/ina-air-interaction-wall.jpg",
    signature: true,
    en: { name: "INA Air Interaction Wall", spec: "Touchless wall controlled by movement, gesture and voice." },
    ar: { name: "جدار إينا للتفاعل الجوي", spec: "جدار بلا لمس يُتحكَّم به بالحركة والإيماءة والصوت." },
  },
  {
    id: "life-size-holographic-presence",
    categoryId: "smart-spaces",
    image: "/products/life-size-holographic-presence.jpg",
    en: { name: "Life-Size Holographic Presence Display", spec: "Full-height holographic cabinet for presenters, guides and product reveals." },
    ar: { name: "شاشة حضور هولوغرافي بالحجم الطبيعي", spec: "خزانة هولوغرافية كاملة الارتفاع للعروض والإرشاد وإطلاق المنتجات." },
  },
  {
    id: "holographic-display-showcase",
    categoryId: "smart-spaces",
    image: "/products/holographic-display-showcase.jpg",
    en: { name: "3-Sided 3D Holographic Showcase", spec: "Three-face holographic vitrine for 360° product and exhibit display." },
    ar: { name: "فاترينة هولوغرافية ثلاثية الأوجه", spec: "فاترينة هولوغرافية بثلاثة أوجه لعرض المنتجات والمعروضات بزاوية 360°." },
  },
  {
    id: "transparent-holographic-display",
    categoryId: "smart-spaces",
    image: "/products/transparent-holographic-display.jpg",
    en: { name: "Transparent Holographic Display", spec: "See-through panel overlaying data and 3D models on real objects." },
    ar: { name: "شاشة شفافة هولوغرافية", spec: "لوحة شفافة تعرض البيانات والنماذج ثلاثية الأبعاد فوق الأجسام الحقيقية." },
  },
  {
    id: "ai-holographic-stem-display",
    categoryId: "smart-spaces",
    image: "/products/ai-holographic-stem-display.jpg",
    en: { name: "AI Interactive 3D Holographic Display", spec: "Desktop holographic pyramid for anatomy, engineering and science content." },
    ar: { name: "شاشة هولوغرافية تفاعلية ثلاثية الأبعاد", spec: "هرم هولوغرافي مكتبي لمحتوى التشريح والهندسة والعلوم." },
  },
  {
    id: "interactive-projection-environment",
    categoryId: "smart-spaces",
    image: "/products/interactive-projection-environment.jpg",
    en: { name: "Interactive Projection Environment", spec: "Projector and depth-sensor system turning floors and walls into interactive surfaces." },
    ar: { name: "بيئة إسقاط تفاعلية", spec: "نظام إسقاط وحساسات عمق يحوّل الأرضيات والجدران إلى أسطح تفاعلية." },
  },
  {
    id: "visitor-self-checkin-kiosk",
    categoryId: "smart-spaces",
    image: "/products/visitor-self-checkin-kiosk.jpg",
    en: { name: "Visitor Self Check-In Kiosk", spec: "Self-service kiosk with badge printing, NFC/QR scan and delivery handling." },
    ar: { name: "كشك تسجيل دخول الزوار الذاتي", spec: "كشك خدمة ذاتية مع طباعة بطاقات ومسح NFC/QR واستلام الطرود." },
  },
  {
    id: "ai-ar-spatial-glasses",
    categoryId: "smart-spaces",
    image: "/products/ai-ar-spatial-glasses.jpg",
    en: { name: "AI + AR Spatial Glasses", spec: "Lightweight AR eyewear for guided maintenance, training and field work." },
    ar: { name: "نظارات الواقع المعزز الذكية", spec: "نظارات واقع معزز خفيفة للصيانة الموجهة والتدريب والعمل الميداني." },
  },

  // Education, STEM & Robotics
  {
    id: "ai-interactive-smart-board",
    categoryId: "education-stem",
    image: "/products/ai-interactive-smart-board.jpg",
    en: { name: "AI Interactive Smart Board", spec: "Multi-touch interactive display / smart board with AI lesson tools." },
    ar: { name: "سبورة ذكية تفاعلية بالذكاء الاصطناعي", spec: "شاشة تفاعلية متعددة اللمس مع أدوات دروس بالذكاء الاصطناعي." },
  },
  {
    id: "teacher-smart-podium",
    categoryId: "education-stem",
    image: "/products/teacher-smart-podium.jpg",
    en: { name: "Teacher Smart Podium", spec: "All-in-one lectern with touch control, sources and classroom AV switching." },
    ar: { name: "منصة المعلم الذكية", spec: "منصة متكاملة بتحكم لمسي وتبديل مصادر الصوت والصورة في الفصل." },
  },
  {
    id: "interactive-stem-workstation",
    categoryId: "education-stem",
    image: "/products/interactive-stem-workstation.jpg",
    en: { name: "Interactive STEM Workstation", spec: "Lab bench with power, data, storage and instrument panel for STEM classes." },
    ar: { name: "محطة عمل STEM التفاعلية", spec: "طاولة مختبر بالطاقة والبيانات والتخزين ولوحة أجهزة لحصص STEM." },
  },
  {
    id: "ar-mixed-reality-stem",
    categoryId: "education-stem",
    image: "/products/ar-mixed-reality-stem.jpg",
    en: { name: "AR / Mixed Reality STEM System", spec: "Headset and controllers for immersive science and engineering lessons." },
    ar: { name: "نظام STEM بالواقع المختلط", spec: "نظارة ووحدات تحكم لدروس علوم وهندسة غامرة." },
  },
  {
    id: "microcontroller-sensor-kits",
    categoryId: "education-stem",
    image: "/products/microcontroller-sensor-kits.jpg",
    en: { name: "Microcontroller & Sensor Kits", spec: "Development boards, sensor modules and breadboards for coding and electronics." },
    ar: { name: "مجموعات المتحكمات والحساسات", spec: "لوحات تطوير ووحدات حساسات ولوحات تجارب للبرمجة والإلكترونيات." },
  },
  {
    id: "educational-research-mobile-robot",
    categoryId: "education-stem",
    image: "/products/educational-research-mobile-robot.jpg",
    en: { name: "Educational / Research Mobile Robot", spec: "LiDAR-equipped ROS platform for robotics, navigation and AI research." },
    ar: { name: "روبوت متحرك للتعليم والبحث", spec: "منصة ROS مزودة بـLiDAR لأبحاث الروبوتات والملاحة والذكاء الاصطناعي." },
  },
  {
    id: "humanoid-ai-robot",
    categoryId: "education-stem",
    image: "/products/humanoid-ai-robot.jpg",
    en: { name: "Humanoid AI Robot", spec: "Bipedal humanoid for interaction, reception and advanced robotics programmes." },
    ar: { name: "روبوت بشري بالذكاء الاصطناعي", spec: "روبوت بشري ثنائي القدم للتفاعل والاستقبال وبرامج الروبوتات المتقدمة." },
  },
  {
    id: "ai-quadruped-robot",
    categoryId: "education-stem",
    image: "/products/ai-quadruped-robot.jpg",
    en: { name: "AI Quadruped Robot", spec: "Four-legged robot with LiDAR and camera for inspection and research." },
    ar: { name: "روبوت رباعي الأرجل بالذكاء الاصطناعي", spec: "روبوت رباعي الأرجل مزود بـLiDAR وكاميرا للفحص والبحث." },
  },
  {
    id: "3d-printer",
    categoryId: "education-stem",
    image: "/products/3d-printer.jpg",
    en: { name: "3D Printer", spec: "Enclosed FDM printer for prototyping, makerspaces and design classes." },
    ar: { name: "طابعة ثلاثية الأبعاد", spec: "طابعة FDM مغلقة للنماذج الأولية ومساحات الصنع وحصص التصميم." },
  },
  {
    id: "laser-cutter-engraver",
    categoryId: "education-stem",
    image: "/products/laser-cutter-engraver.jpg",
    en: { name: "Laser Cutter / Engraver", spec: "Desktop laser for cutting and engraving wood, acrylic and coated metals." },
    ar: { name: "قاطعة وحفارة ليزر", spec: "ليزر مكتبي لقطع وحفر الخشب والأكريليك والمعادن المطلية." },
  },
  {
    id: "desktop-cnc-machine",
    categoryId: "education-stem",
    image: "/products/desktop-cnc-machine.jpg",
    en: { name: "Desktop CNC Machine", spec: "Compact 3-axis mill for classroom machining and prototype parts." },
    ar: { name: "ماكينة CNC مكتبية", spec: "ماكينة تفريز ثلاثية المحاور مدمجة للتشغيل الصفي وقطع النماذج." },
  },
  {
    id: "rapid-prototyping-station",
    categoryId: "education-stem",
    image: "/products/rapid-prototyping-station.jpg",
    en: { name: "Rapid Prototyping Station", spec: "CAD workstation paired with a printer and storage for design-to-part workflows." },
    ar: { name: "محطة النمذجة السريعة", spec: "محطة تصميم مع طابعة وتخزين لمسار العمل من التصميم إلى القطعة." },
  },
  {
    id: "digital-microscope-ai",
    categoryId: "education-stem",
    image: "/products/digital-microscope-ai.jpg",
    en: { name: "Digital Microscope with AI Analysis", spec: "Screen-based microscope with automatic measurement and particle analysis." },
    ar: { name: "مجهر رقمي بتحليل الذكاء الاصطناعي", spec: "مجهر بشاشة مع قياس تلقائي وتحليل للجسيمات." },
  },
  {
    id: "ai-vision-object-recognition",
    categoryId: "education-stem",
    image: "/products/ai-vision-object-recognition.jpg",
    en: { name: "AI Vision & Object Recognition Station", spec: "Camera and screen kit for teaching computer vision and classification." },
    ar: { name: "محطة الرؤية الآلية والتعرف على الأجسام", spec: "مجموعة كاميرا وشاشة لتعليم الرؤية الحاسوبية والتصنيف." },
  },

  // Smart Storage & Logistics
  {
    id: "smart-storage-shelving",
    categoryId: "storage-logistics",
    image: "/products/smart-storage-shelving.jpg",
    en: { name: "Smart Storage & Shelving System", spec: "Racking with bin locations and robot-assisted picking and handling." },
    ar: { name: "نظام التخزين والرفوف الذكية", spec: "رفوف بمواقع صناديق محددة مع مناولة وانتقاء بمساعدة الروبوت." },
  },
  {
    id: "smart-conveyor-sorting",
    categoryId: "storage-logistics",
    image: "/products/smart-conveyor-sorting.jpg",
    en: { name: "Smart Conveyor & Sorting System", spec: "Modular conveyor with scanning, diverting and live throughput dashboard." },
    ar: { name: "نظام السيور والفرز الذكي", spec: "سيور معيارية مع مسح وتحويل ولوحة إنتاجية لحظية." },
  },
  {
    id: "autonomous-mobile-robot",
    categoryId: "storage-logistics",
    image: "/products/autonomous-mobile-robot.jpg",
    en: { name: "Autonomous Mobile Robot (AMR)", spec: "Low-profile AMR for pallet, bin and trolley transport inside facilities." },
    ar: { name: "روبوت متحرك ذاتي القيادة (AMR)", spec: "روبوت منخفض لنقل المنصات والصناديق والعربات داخل المنشآت." },
  },
  {
    id: "autonomous-mobile-ai-robot",
    categoryId: "storage-logistics",
    image: "/products/autonomous-mobile-ai-robot.jpg",
    en: { name: "Autonomous Mobile AI Robot", spec: "Sensor-mast AMR with touchscreen for inventory, patrol and data capture." },
    ar: { name: "روبوت متحرك ذكي ذاتي القيادة", spec: "روبوت بعمود حساسات وشاشة لمس للجرد والدوريات وجمع البيانات." },
  },
  {
    id: "service-delivery-robot",
    categoryId: "storage-logistics",
    image: "/products/service-delivery-robot.jpg",
    en: { name: "Autonomous Service & Delivery Robot", spec: "Multi-tray robot for internal delivery in offices, hotels and clinics." },
    ar: { name: "روبوت خدمة وتوصيل ذاتي", spec: "روبوت متعدد الأرفف للتوصيل الداخلي في المكاتب والفنادق والعيادات." },
  },

  // Plastic Manufacturing & Industrial
  {
    id: "plastic-injection-molding-machine",
    categoryId: "manufacturing-industrial",
    image: "/products/plastic-injection-molding-machine.jpg",
    en: { name: "Plastic Injection Moulding Machine", spec: "Servo injection moulding machine with hopper feed and recipe control." },
    ar: { name: "ماكينة حقن البلاستيك", spec: "ماكينة حقن بمحرك سيرفو مع تغذية قمعية وتحكم بالوصفات." },
  },
  {
    id: "blow-molding-machine",
    categoryId: "manufacturing-industrial",
    image: "/products/blow-molding-machine.jpg",
    en: { name: "Blow Moulding / Plastic Forming Machine", spec: "Blow moulding line for bottles, containers and hollow plastic parts." },
    ar: { name: "ماكينة نفخ وتشكيل البلاستيك", spec: "خط نفخ للزجاجات والعبوات والقطع البلاستيكية المجوفة." },
  },
  {
    id: "mold-tooling-system",
    categoryId: "manufacturing-industrial",
    image: "/products/mold-tooling-system.jpg",
    en: { name: "Mould Tooling & Insert System", spec: "Precision tool steel moulds, cavities and inserts sourced to your part drawing." },
    ar: { name: "أنظمة القوالب والإدخالات", spec: "قوالب وتجاويف وإدخالات من فولاذ دقيق تُورَّد وفق رسم القطعة." },
  },
  {
    id: "cnc-machine",
    categoryId: "manufacturing-industrial",
    image: "/products/cnc-machine.jpg",
    en: { name: "CNC Machining Centre", spec: "Enclosed vertical machining centre with controller for production parts." },
    ar: { name: "مركز تشغيل CNC", spec: "مركز تشغيل عمودي مغلق مع وحدة تحكم لقطع الإنتاج." },
  },
  {
    id: "cmm",
    categoryId: "manufacturing-industrial",
    image: "/products/cmm.jpg",
    en: { name: "Coordinate Measuring Machine (CMM)", spec: "Touch-probe metrology system for dimensional inspection and QC reports." },
    ar: { name: "جهاز القياس الإحداثي (CMM)", spec: "نظام قياس بمجس لمسي للفحص الأبعادي وتقارير الجودة." },
  },
  {
    id: "ai-quality-inspection-station",
    categoryId: "manufacturing-industrial",
    image: "/products/ai-quality-inspection-station.jpg",
    en: { name: "AI Quality Inspection Station", spec: "In-line vision inspection with pass/fail scoring and defect logging." },
    ar: { name: "محطة فحص الجودة بالذكاء الاصطناعي", spec: "فحص بالرؤية على الخط مع تقييم قبول/رفض وتسجيل العيوب." },
  },
  {
    id: "collaborative-robot-arm",
    categoryId: "manufacturing-industrial",
    image: "/products/collaborative-robot-arm.jpg",
    en: { name: "Collaborative Robot Arm (Cobot)", spec: "6-axis cobot with gripper for pick-and-place, tending and packing." },
    ar: { name: "ذراع روبوت تعاوني (Cobot)", spec: "روبوت تعاوني بستة محاور وقابض للالتقاط والتغذية والتعبئة." },
  },
  {
    id: "ai-vision-collaborative-robot",
    categoryId: "manufacturing-industrial",
    image: "/products/ai-vision-collaborative-robot.jpg",
    en: { name: "AI Vision Collaborative Robot", spec: "Cobot with integrated vision head for guided picking and inspection." },
    ar: { name: "روبوت تعاوني بالرؤية الذكية", spec: "روبوت تعاوني برأس رؤية مدمج للالتقاط الموجّه والفحص." },
  },
  {
    id: "3d-vision-depth-camera",
    categoryId: "manufacturing-industrial",
    image: "/products/3d-vision-depth-camera.jpg",
    en: { name: "3D Vision / Depth Camera", spec: "Stereo depth camera for robot guidance, measurement and bin picking." },
    ar: { name: "كاميرا رؤية ثلاثية الأبعاد / عمق", spec: "كاميرا عمق مجسمة لتوجيه الروبوت والقياس والالتقاط من الصناديق." },
  },
  {
    id: "3d-scanner-digitization",
    categoryId: "manufacturing-industrial",
    image: "/products/3d-scanner-digitization.jpg",
    en: { name: "3D Scanner / Digitisation System", spec: "Turntable scanner producing measurable 3D models from physical parts." },
    ar: { name: "ماسح ثلاثي الأبعاد / نظام رقمنة", spec: "ماسح بقرص دوار ينتج نماذج ثلاثية الأبعاد قابلة للقياس من القطع." },
  },
];

export const deliveryModels = [
  {
    id: "supply-only",
    en: { n: "01", title: "Supply only", lead: "You know what you need.", body: "We source and supply the required technology based on specifications, application and commercial requirements." },
    ar: { n: "٠١", title: "التوريد فقط", lead: "أنت تعرف ما تحتاجه.", body: "نوفّر ونورّد التقنية المطلوبة وفق المواصفات والتطبيق والمتطلبات التجارية." },
  },
  {
    id: "supply-setup",
    en: { n: "02", title: "Supply + setup", lead: "You need the technology ready to use.", body: "We provide setup, configuration and basic implementation support, as applicable." },
    ar: { n: "٠٢", title: "التوريد والتجهيز", lead: "تحتاج التقنية جاهزة للاستخدام.", body: "نوفّر التركيب والتهيئة ودعم التنفيذ الأساسي حسب الحاجة." },
  },
  {
    id: "supply-customization",
    en: { n: "03", title: "Supply + customization", lead: "You need technology adapted to your application.", body: "Where technically possible, we customize the solution for branding, workflow, configuration or specific use requirements." },
    ar: { n: "٠٣", title: "التوريد والتخصيص", lead: "تحتاج تقنية مُكيَّفة مع تطبيقك.", body: "حيثما كان ذلك ممكناً تقنياً، نخصص الحل من حيث الهوية أو سير العمل أو الإعداد أو متطلبات الاستخدام." },
  },
  {
    id: "supply-integration",
    en: { n: "04", title: "Supply + integration", lead: "You need new technology to work with what you already have.", body: "Where technically supported, we connect devices, systems, workflows, data or dashboards with the existing environment." },
    ar: { n: "٠٤", title: "التوريد والتكامل", lead: "تحتاج التقنية الجديدة أن تعمل مع ما لديك.", body: "حيثما كان مدعوماً تقنياً، نربط الأجهزة والأنظمة وسير العمل والبيانات واللوحات ببيئتك القائمة." },
  },
  {
    id: "automation-solution",
    en: { n: "05", title: "Automation solution", lead: "You have a process that can work better.", body: "We assess the workflow and identify opportunities for automation, AI, alerts, approvals, reporting and other practical improvements." },
    ar: { n: "٠٥", title: "حل الأتمتة", lead: "لديك عملية يمكن أن تعمل بشكل أفضل.", body: "نقيّم سير العمل ونحدد فرص الأتمتة والذكاء الاصطناعي والتنبيهات والموافقات والتقارير وغيرها من التحسينات العملية." },
  },
  {
    id: "complete-smart-solution",
    en: { n: "06", title: "Complete smart solution", lead: "You have a challenge, not a predefined technology.", body: "We help define the requirement, identify and source the right technology, design the solution and support implementation, integration, automation and visibility." },
    ar: { n: "٠٦", title: "حل ذكي متكامل", lead: "لديك تحدٍ لا تقنية محددة مسبقاً.", body: "نساعد في تحديد المتطلب واختيار التقنية المناسبة وتوريدها وتصميم الحل ودعم التنفيذ والتكامل والأتمتة والرؤية التشغيلية." },
  },
];

export const coreValues = [
  {
    id: "client-first",
    en: { title: "Client-first thinking", body: "Understand the client's needs, objectives and environment before recommending the right technology or solution." },
    ar: { title: "العميل أولاً", body: "نفهم احتياجات العميل وأهدافه وبيئته قبل التوصية بأي تقنية أو حل." },
  },
  {
    id: "right-technology",
    en: { title: "Right technology", body: "Select technology based on suitability, compatibility, performance, budget and future requirements — not simply what is newest." },
    ar: { title: "التقنية المناسبة", body: "نختار التقنية بناءً على الملاءمة والتوافق والأداء والميزانية والمتطلبات المستقبلية، لا لكونها الأحدث فقط." },
  },
  {
    id: "practical-innovation",
    en: { title: "Practical innovation", body: "Apply advanced technology to solve real challenges and deliver practical, measurable value." },
    ar: { title: "ابتكار عملي", body: "نطبّق التقنية المتقدمة لحل تحديات حقيقية وتحقيق قيمة عملية قابلة للقياس." },
  },
  {
    id: "connected-thinking",
    en: { title: "Connected thinking", body: "Integrate new technology with existing systems, equipment and infrastructure to maximize investments and reduce unnecessary complexity." },
    ar: { title: "تفكير متصل", body: "ندمج التقنية الجديدة مع الأنظمة والمعدات والبنية القائمة لتعظيم الاستثمارات وتقليل التعقيد غير الضروري." },
  },
  {
    id: "reliable-sourcing",
    en: { title: "Reliable sourcing", body: "Match the right technology, specifications, suppliers and commercial options to each requirement." },
    ar: { title: "توريد موثوق", body: "نطابق التقنية والمواصفات والموردين والخيارات التجارية المناسبة لكل متطلب." },
  },
  {
    id: "smart-growth",
    en: { title: "Smart growth", body: "Enable organizations to adopt and scale technology step by step through practical, sustainable solutions." },
    ar: { title: "نمو ذكي", body: "نمكّن المؤسسات من تبني التقنية والتوسع فيها خطوة بخطوة عبر حلول عملية ومستدامة." },
  },
];

export const differentiators = [
  {
    id: "problem-not-product",
    en: { title: "We start with the problem, not the product", body: "INA SMART is technology-agnostic. We do not begin with a product we need to sell. We begin by understanding what the organization needs to achieve, then identify the technology that best fits the requirement." },
    ar: { title: "نبدأ بالمشكلة لا بالمنتج", body: "إينا سمارت محايدة تقنياً. لا نبدأ بمنتج علينا بيعه، بل نبدأ بفهم ما تريد المؤسسة تحقيقه ثم نحدد التقنية الأنسب للمتطلب." },
  },
  {
    id: "bridge-the-gap",
    en: { title: "We bridge the gap between technology and application", body: "Many organizations can find technology. The real challenge is knowing what to choose, how to use it and how to make it work in the real environment — from selection and sourcing to practical implementation." },
    ar: { title: "نسد الفجوة بين التقنية والتطبيق", body: "كثير من المؤسسات تستطيع إيجاد التقنية، لكن التحدي الحقيقي هو معرفة ما تختاره وكيف تستخدمه وكيف يعمل في البيئة الواقعية — من الاختيار والتوريد إلى التنفيذ العملي." },
  },
  {
    id: "build-on-existing",
    en: { title: "We build around what the client already has", body: "New technology does not have to mean starting from scratch. Where technically possible, we connect new technologies with existing systems, equipment, software and workflows." },
    ar: { title: "نبني على ما لدى العميل", body: "التقنية الجديدة لا تعني البدء من الصفر. وحيثما كان ممكناً تقنياً، نربط التقنيات الجديدة بالأنظمة والمعدات والبرمجيات وسير العمل القائم." },
  },
  {
    id: "practical-technology",
    en: { title: "We make advanced technology practical", body: "We focus on useful technology, not technology for display. AI, automation, robotics, IoT and smart equipment are introduced where they solve a real problem or create measurable value." },
    ar: { title: "نجعل التقنية المتقدمة عملية", body: "نركّز على التقنية المفيدة لا على العرض. فالذكاء الاصطناعي والأتمتة والروبوتات وإنترنت الأشياء والمعدات الذكية تُدخَل حيث تحل مشكلة حقيقية أو تصنع قيمة قابلة للقياس." },
  },
  {
    id: "grow-with-client",
    en: { title: "We enable technology to grow with the client", body: "A client does not need to commit to a complete transformation on day one. We can start with a single technology or defined project and progressively develop it into a connected, automated solution." },
    ar: { title: "نجعل التقنية تنمو مع العميل", body: "لا يحتاج العميل للالتزام بتحول كامل من اليوم الأول. يمكننا البدء بتقنية واحدة أو مشروع محدد ثم تطويره تدريجياً إلى حل متصل ومؤتمت." },
  },
  {
    id: "local-global",
    en: { title: "We combine local access with global technology", body: "Qatar-based engagement and support, with access to international technology and sourcing networks. Local responsiveness without limiting your technology options." },
    ar: { title: "حضور محلي وتقنية عالمية", body: "تعامل ودعم من داخل قطر، مع وصول إلى شبكات التقنية والتوريد الدولية. استجابة محلية دون تقييد خياراتك التقنية." },
  },
];

export const focusAreas = [
  {
    id: "advanced-technology-supply",
    en: {
      title: "Advanced technology supply on request",
      body: "Advanced devices, machines and smart equipment based on specifications, budget and use case.",
      tags: ["Smart displays", "AI devices", "Robotics", "Lab & industrial equipment", "Sensors & scanners", "IoT devices"],
    },
    ar: {
      title: "توريد التقنية المتقدمة عند الطلب",
      body: "أجهزة وآلات ومعدات ذكية متقدمة وفق المواصفات والميزانية وحالة الاستخدام.",
      tags: ["شاشات ذكية", "أجهزة ذكاء اصطناعي", "روبوتات", "معدات مختبرية وصناعية", "حساسات وماسحات", "أجهزة إنترنت الأشياء"],
    },
  },
  {
    id: "education-stem-robotics",
    en: {
      title: "Education, STEM & robotics labs",
      body: "Smart classrooms and lab environments built around a curriculum and a school calendar.",
      tags: ["Smart classrooms", "AI / STEM labs", "Robotics labs", "Maker spaces", "3D printing", "CNC & laser", "AI vision stations"],
    },
    ar: {
      title: "مختبرات التعليم وSTEM والروبوتات",
      body: "فصول ذكية وبيئات مختبرية مبنية وفق المنهج والتقويم الدراسي.",
      tags: ["فصول ذكية", "مختبرات ذكاء اصطناعي وSTEM", "مختبرات روبوتات", "مساحات صنع", "طباعة ثلاثية الأبعاد", "CNC وليزر", "محطات رؤية آلية"],
    },
  },
  {
    id: "smart-spaces",
    en: {
      title: "Smart spaces",
      body: "Interactive and technology-enabled spaces for training, innovation, presentations and future-focused experiences.",
      tags: ["Interactive displays", "Holographic systems", "AI-guided experiences", "Spatial interfaces"],
    },
    ar: {
      title: "المساحات الذكية",
      body: "مساحات تفاعلية مُمكَّنة تقنياً للتدريب والابتكار والعروض والتجارب المستقبلية.",
      tags: ["شاشات تفاعلية", "أنظمة هولوغرافية", "تجارب موجهة بالذكاء الاصطناعي", "واجهات مكانية"],
    },
  },
  {
    id: "smart-storage-manufacturing",
    en: {
      title: "Smart storage & light manufacturing",
      body: "Practical technology for production visibility, storage tracking, warehouse workflows and light manufacturing support. Monitoring first, integration where technically supported, advanced automation after a technical audit.",
      tags: ["Injection molding sourcing", "Auxiliary equipment", "Conveyors & cobots", "Barcode / QR tracking", "Sensors & monitoring dashboards"],
    },
    ar: {
      title: "التخزين الذكي والتصنيع الخفيف",
      body: "تقنيات عملية لرؤية الإنتاج وتتبع التخزين وسير عمل المستودعات ودعم التصنيع الخفيف. المراقبة أولاً، ثم التكامل حيثما كان مدعوماً تقنياً، والأتمتة المتقدمة بعد التدقيق الفني.",
      tags: ["توريد آلات الحقن", "معدات مساندة", "سيور وروبوتات تعاونية", "تتبع باركود / QR", "حساسات ولوحات مراقبة"],
    },
  },
];

export function flattenProducts(lang: Lang) {
  return products.map((p) => {
    const category = productCategories.find((c) => c.id === p.categoryId);
    return {
      id: p.id,
      image: p.image,
      sub: lang === "ar" ? p.ar.name : p.en.name,
      spec: lang === "ar" ? p.ar.spec : p.en.spec,
      categoryId: p.categoryId,
      category: category ? (lang === "ar" ? category.ar.title : category.en.title) : "",
    };
  });
}

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
    en: {
      title: "Mission",
      body: "To make advanced technology practical, accessible and valuable by helping organizations select, implement and connect the right technology to their real needs, existing environment and desired outcomes.",
    },
    ar: {
      title: "المهمة",
      body: "جعل التقنية المتقدمة عملية ومتاحة وذات قيمة، عبر مساعدة المؤسسات على اختيار التقنية المناسبة وتنفيذها وربطها باحتياجاتها الحقيقية وبيئتها القائمة والنتائج التي تريدها.",
    },
  },
  {
    en: {
      title: "Vision",
      body: "To become a trusted technology supply, implementation and smart solutions partner in Qatar, helping organizations transform technology requirements into connected, automated and intelligent operations.",
    },
    ar: {
      title: "الرؤية",
      body: "أن نصبح الشريك الموثوق في قطر لتوريد التقنية وتنفيذها وتقديم الحلول الذكية، بما يحوّل متطلبات التقنية إلى عمليات متصلة ومؤتمتة وذكية.",
    },
  },
  {
    en: { title: "Team", body: "Engineers, integrators and project specialists who design, supply, install and support the systems they specify." },
    ar: { title: "الفريق", body: "مهندسون ومُكاملون ومتخصصو مشاريع يصممون ويوردون ويركّبون ويدعمون ما يحددونه." },
  },
  {
    en: { title: "Experience", body: "Delivered labs, classrooms and campus technology across Qatar; now applying the same practice to industry and business." },
    ar: { title: "الخبرة", body: "نفّذنا مختبرات وفصولاً وتقنيات تعليمية في قطر، ونطبّق اليوم الخبرة ذاتها في الصناعة والأعمال." },
  },
  {
    en: { title: "How we work", body: "One accountable team from design to support. We would rather refuse a scope than hand over a system nobody can run." },
    ar: { title: "طريقة عملنا", body: "فريق واحد مسؤول من التصميم إلى الدعم. نفضّل رفض نطاق عمل على تسليم نظام لا يستطيع أحد تشغيله." },
  },
];

export const ui = {
  en: {
    whatsappNav: "WhatsApp",
    brand: {
      descriptor: "Advanced technology supply & practical smart solutions",
      positioning: "The right technology. Connected to what matters.",
      promise: "You bring the need. We bring the right technology.",
      oneLiner: "INA SMART connects the right technology to real-world needs — from advanced devices to practical, connected solutions.",
      themesTitle: "Core technology themes",
      themes: [
        "AI",
        "Automation",
        "Robotics",
        "IoT",
        "Smart dashboards",
        "Smart equipment",
        "Technology sourcing",
        "Practical integration",
        "Connected workflows",
      ],
    },
    nav: {
      request: "Request",
      requestOpen: "Request ▾",
      solutionTitle: "I need a solution",
      solutionDesc: "A challenge, no shortlist yet",
      techTitle: "I need specific technology",
      techDesc: "You know what you're buying",
      cta: "Book a call",
      langToggle: "AR",
    },
    audit: {
      sticker: "Free audit",
      badge: "New — in partnership",
      title: "Free audit",
      copy: "A 30 to 45-minute review of one workflow with our agentic AI partner: where agents can take work off your team, what it would cost, and what to leave alone. No fee, no obligation.",
      cta: "Claim the free audit",
      optTitle: "Add the free audit to this brief",
      optCopy: "Comes with every solution concept: 45 minutes with our agentic AI partner on one of your workflows, before we specify any hardware.",
      optOn: "Included ✓",
      optOff: "Add it",
      nextTitle: "Free audit",
      nextCopy: "Booked alongside the call, one workflow reviewed at no cost.",
      useTag: "Partner solution",
      useTitle: "Free audit",
      useCopy: "Before you buy anything, let our agentic AI partner review one workflow — 45 minutes, no fee. Often the cheapest use case is the one you automate instead of equip.",
    },
    hero: {
      kicker: "Advanced technology supply & practical smart solutions — Qatar",
      title: "From one advanced device to a practical smart solution.",
      copy: "We help you understand the need, source the right technology, and turn it into a working, connected solution — for factories, warehouses, offices and campuses alike.",
      cta1: "I need a solution",
      cta2: "I need specific technology",
      stats: [
        { value: "5", label: "prebuilt solutions" },
        { value: "4", label: "sectors served" },
        { value: "End-to-end", label: "design to support" },
      ],
    },
    help: {
      kicker: "How can we help?",
      title: "Two ways in, pick the one that matches where you are",
      copy: "Some clients arrive with a problem and no shortlist. Others already know the equipment they want. Both paths end with a costed, supported delivery.",
      pathA: {
        tag: "Path A",
        title: "I need a solution",
        copy: "You have a challenge! Downtime, an under-used space, a manual process. We turn it into a concept, then a working system.",
        cta: "Write a challenge brief",
        steps: [
          { n: "01", text: "Challenge brief" },
          { n: "02", text: "Call with an engineer" },
          { n: "03", text: "Solution concept + budget" },
        ],
      },
      pathB: {
        tag: "Path B",
        title: "I need specific technology",
        copy: "You already know what you're buying. Send the requirements; we review the specification and quote with supply and support included.",
        cta: "Send requirements",
        steps: [
          { n: "01", text: "Requirements" },
          { n: "02", text: "Technical review" },
          { n: "03", text: "Quote, then supply + support" },
        ],
      },
    },
    useCasesSection: { kicker: "Use cases", title: "Prebuilt solutions, ready to adapt", link: "View all use cases →" },
    useCasesPage: {
      title: "Use cases",
      copy: "Environments we have built before, packaged so scoping takes days rather than months. Every one is adapted to your site, standards and budget.",
      cardCta: "Start from this use case",
      sectionOne: "Section 1",
      prebuiltTitle: "Prebuilt solutions",
      prebuiltCopy: "Proven configurations with a known bill of materials, integration plan and support model.",
      sectionTwo: "Section 2",
      customTitle: "Nothing here fits? That is normal.",
      customCopy: "Most of our work starts as a challenge nobody has packaged yet. Describe it and we will come back with a concept, a scope and a number.",
      leadTime: "Lead time:",
      fitFor: "Typical fit:",
      view3d: "View in 3D",
      close: "Close",
      modelLoading: "Loading the 3D model…",
      modelError: "The 3D view could not be loaded. Please try again, or ask us for a walkthrough.",
      modelHint: "Drag to rotate, scroll to zoom. Click a part in the model or the list to highlight it.",
      partsTitle: "Parts",
      clearSelection: "Clear",
      viewGallery: "View photos",
      prevImage: "Previous photo",
      nextImage: "Next photo",
      goToImage: "Go to photo",
      whatItDoes: "What it does",
      whatsIncluded: "What's included",
      galleryHint: "Use the arrows, thumbnails or your keyboard arrow keys to browse.",
    },
    process: {
      kicker: "The INA SMART approach",
      title: "We start with your need, not a product list",
      copy: "Understand → Select → Source → Implement → Connect → Automate. One accountable team, from the first conversation to a working, connected solution.",
      steps: [
        { n: "01", title: "Understand", copy: "Your requirements, existing technology, infrastructure and workflows come first." },
        { n: "02", title: "Select", copy: "Technology chosen on suitability, compatibility, performance and budget — not on what is newest." },
        { n: "03", title: "Source", copy: "Reliable sourcing through local and international networks, matched to your specification." },
        { n: "04", title: "Implement", copy: "Setup, configuration and deployment in your real environment, not a showroom." },
        { n: "05", title: "Connect", copy: "Integration with the systems, equipment and software you already run." },
        { n: "06", title: "Automate", copy: "AI, automation, alerts and dashboards applied where they create measurable value." },
      ],
    },
    deliverySection: {
      kicker: "Delivery models",
      title: "One technology partner — the level of support you need",
      copy: "Engagement scales to the requirement, from supplying a single advanced device to designing a complete connected solution.",
    },
    sectorsSection: { title: "Across sectors", link: "See sector work →" },
    sectorsPage: {
      kicker: "Where we work",
      title: "Across sectors",
      copy: "The technology repeats; the constraints do not. Here is how the same integration practice lands in four very different environments.",
      typicalWork: "Typical work",
      trigger: "What usually starts the conversation",
      constraint: "What makes it different here",
      related: "Related use cases",
      /** Followed by the sector title, e.g. "Talk to us about Education". */
      ctaPrefix: "Talk to us about",
    },
    ctaBand: {
      title: "Tell us the challenge, not the part number.",
      copy: "A short brief is enough to start. We reply with a concept and an indicative budget within days.",
      cta1: "Start a brief",
      cta2: "Request a quote",
    },
    form: {
      sector: "Which sector are you in?",
      sectorChips: ["Education", "Corporate / offices", "Manufacturing / industrial", "Logistics & Supply Chain", "Other"],
      timeline: "Target timeline",
      timelineOpts: ["Not decided", "Within 1 month", "1–3 months", "3–6 months", "6+ months"],
      budget: "Indicative budget",
      budgetOpts: ["Not decided", "Under QAR 100k", "QAR 100k–500k", "QAR 500k–1M", "Above QAR 1M"],
      org: "Organisation",
      name: "Contact name",
      email: "Email",
      phone: "Phone",
      message: "Message",
      back: "Back",
      continueLabel: "Continue",
      bookCall: "Book a call",
      backHome: "Back to home",
      asideTitle: "What happens next",
      preferTalk: "Prefer to talk first?",
    },
    solution: {
      kicker: "Path A — I need a solution",
      title: "Describe the challenge",
      copy: "Three short steps. No specification needed — that is our job.",
      steps: ["Challenge brief", "Scope", "Contact", "Next steps"],
      s0Title: "Challenge brief",
      s0Copy: "What is not working today, and what would good look like?",
      l1: "The challenge",
      p1: "e.g. Unplanned line stoppages we only find out about after the shift report.",
      l2: "The outcome you want",
      p2: "e.g. Know within a minute when a line stops, and why.",
      s1Title: "Scope",
      s1Copy: "Rough numbers are fine — we refine them on the call.",
      l3: "Site or spaces involved",
      p3: "e.g. One production hall, two shifts",
      l4: "Who else is involved?",
      p4: "e.g. Operations lead, IT",
      contactTitle: "Where do we send the concept?",
      contactCopy: "One named contact is enough — we will confirm before involving anyone else.",
      doneTitle: "Brief received — next is a call.",
      doneCopy: "We read the brief, then book a 30-minute call to fill the gaps. A solution concept follows within a week.",
      next: [
        { n: "1", title: "Call", copy: "30 minutes with an engineer, not a salesperson." },
        { n: "2", title: "Solution concept", copy: "Architecture, bill of materials and indicative budget." },
        { n: "3", title: "Design → supply → integrate → pilot → support", copy: "One team accountable from drawing to handover and beyond." },
      ],
      aside: [
        { title: "5 prebuilt solutions to start from", copy: "Or a clean-sheet design if none of them fits." },
        { title: "Read within one working day", copy: "Briefs are triaged by an engineer, not a queue." },
        { title: "A call, then a concept", copy: "We only quote once we agree on the problem." },
        { title: "No obligation", copy: "The concept is yours whether you proceed or not." },
      ],
      submitLabel: "Send brief",
      picker: {
        title: "Start from a prebuilt solution?",
        copy: "If one of these is close to what you need, pick it — scoping starts from a known design instead of a blank page. Pick more than one if the project spans several spaces.",
        none: "Nothing here matches — describe the challenge below and we design it from scratch.",
        browse: "See what each one includes →",
        selected: "Starting point",
      },
      switchLabel: "Actually, I need specific technology →",
    },
    technology: {
      kicker: "Path B — I need specific technology",
      title: "Send your requirements",
      copy: "You know the spec. We check it, price it, supply it and support it.",
      steps: ["Your request", "Next steps"],
      oneTitle: "Request specific technology",
      oneCopy: "One screen. Pick from the catalogue, or describe exactly what you want — then tell us where to send the quote.",
      picker: {
        title: "Is it already in our catalogue?",
        copy: "Search the products we stock and distribute. Add what you recognise — most requests are already covered by our own catalogue or a partner brand.",
        search: "Search our catalogue",
        add: "Add",
        added: "Added ✓",
        selected: "In your request",
        none: "Nothing added yet — search above, or describe it below.",
        browse: "Browse the full catalogue →",
      },
      specificTitle: "Requesting something specific?",
      specificCopy: "Model numbers, a brand you have standardised on, or a spec in plain words — anything we don't stock, we source.",
      l1: "What do you need?",
      p1: "e.g. 12× 86\" interactive displays with wall mounts and OPS modules.",
      l2: "Standards or constraints",
      p2: "e.g. Must match existing control system; local warranty required.",
      commercialsTitle: "Quantities & delivery",
      l3: "Quantity / volumes",
      p3: "e.g. 12 units, phased over two sites",
      l4: "Delivery location",
      p4: "e.g. Doha Industrial Area",
      contactTitle: "Where to send the quote",
      doneTitle: "Requirements received — quote next.",
      doneCopy: "A technical review confirms compatibility and availability, then you get a firm quote including supply and support.",
      next: [
        { n: "1", title: "Technical review", copy: "Compatibility, availability and lead times confirmed." },
        { n: "2", title: "Quote", copy: "Firm pricing, itemised, with delivery dates." },
        { n: "3", title: "Supply + support", copy: "Delivery, installation where needed, and warranty handling." },
      ],
      aside: [
        { title: "A stocked and sourced catalogue", copy: "Plus partner brands — if we don't stock it, we source it." },
        { title: "Reviewed by an engineer", copy: "We flag mismatches before you order, not after." },
        { title: "Quote in 3–5 days", copy: "Faster for stocked items." },
        { title: "Support included", copy: "Warranty and spares handled locally." },
      ],
      submitLabel: "Send requirements",
      switchLabel: "Actually, I need a solution →",
    },
    productsPage: {
      title: "Products",
      kicker: "Products",
      heading: "Advanced technology products, supplied in Qatar",
      copy: "Smart spaces, education and STEM, storage and logistics, and plastic manufacturing equipment. Filter by category or search by name; every product links to a quote request.",
      search: "Search products",
      allCategories: "All categories",
      countSuffix: "products",
      signature: "INA signature",
      noResults: "No product matches that search. Send us the specification and we will source it.",
      cta: "Request a quote",
      viewDetails: "View details",
      close: "Close",
      backToCatalogue: "Back to catalogue",
      dialogNote: "Sizes, capacities and options vary by project. Send your requirement and we will quote the exact configuration, including installation and support where needed.",
      pending: "Specifications, sizes and options vary by project — send your requirement and we will quote the exact configuration, including items not shown here.",
    },
    aboutPage: {
      kicker: "About",
      title: "About INA SMART",
      copy: "INA SMART is a Qatar-based advanced technology supply and practical smart solutions partner. We help organizations understand their needs, source the right technology and turn it into practical, working solutions — from a single advanced device to connected systems, automated workflows, dashboards and complete projects.",
      challengeTitle: "Technology is everywhere. Making the right technology work is the real challenge.",
      challengeCopy: "Organizations have access to an increasing range of AI, automation, robotics, IoT, software and smart technologies — yet choosing the right one is often only the beginning. Disconnected technologies, underused investments and unnecessary complexity follow when a solution never quite addresses the original need. As Qatar accelerates its ambitions for innovation, digital transformation and a diversified economy under Qatar National Vision 2030, organizations need not just advanced technology, but the right technology, selected and applied to create practical value.",
      valuesKicker: "Core values",
      valuesTitle: "Choose wisely. Connect intelligently. Implement properly.",
      differentKicker: "What makes us different",
      differentTitle: "Not simply a supplier, and not a traditional integrator",
      focusKicker: "Focus areas",
      focusTitle: "Where we work",
      ctaTitle: "Where would you like to start?",
      ctaCopy: "Bring us a challenge and we design the solution, browse the catalogue if you already know the equipment, or talk it through with an engineer first.",
      ctaSolution: "I need a solution",
      ctaProducts: "Browse products",
      ctaCall: "Book a call",
    },
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
      sent: "Message sent ✓",
    },
    projectsPage: { kicker: "Projects", title: "Case studies & successful implementations" },
    brandsPage: { kicker: "Brands", title: "Partner brands we distribute", copy: "Recognised partners — credibility through quality. Logos to be added." },
    footer: {
      tagline: "Advanced technology supply and practical smart solutions in Qatar — selected, sourced, implemented, connected and automated around what you already have.",
      motto: "Innovate • Integrate • Automate",
      explore: "Explore",
      contact: "Contact",
      rights: "All rights reserved.",
    },
  },
  ar: {
    whatsappNav: "واتساب",
    brand: {
      descriptor: "توريد التقنية المتقدمة وحلول ذكية عملية",
      positioning: "التقنية المناسبة. متصلة بما يهم.",
      promise: "أنت تأتي بالحاجة، ونحن نأتي بالتقنية المناسبة.",
      oneLiner: "إينا سمارت تربط التقنية المناسبة بالاحتياجات الواقعية — من الأجهزة المتقدمة إلى حلول عملية متصلة.",
      themesTitle: "محاور التقنية الأساسية",
      themes: [
        "الذكاء الاصطناعي",
        "الأتمتة",
        "الروبوتات",
        "إنترنت الأشياء",
        "لوحات ذكية",
        "معدات ذكية",
        "توريد التقنية",
        "تكامل عملي",
        "سير عمل متصل",
      ],
    },
    nav: {
      request: "اطلب",
      requestOpen: "اطلب ▾",
      solutionTitle: "أحتاج إلى حل",
      solutionDesc: "لديك تحدٍ دون قائمة معدات",
      techTitle: "أحتاج إلى تقنية محددة",
      techDesc: "تعرف ما الذي تشتريه",
      cta: "حجز مكالمة",
      langToggle: "EN",
    },
    audit: {
      sticker: "تقييم مجاني",
      badge: "جديد — بالشراكة",
      title: "تقييم مجاني",
      copy: "مراجعة 45 دقيقة لأحد مسارات العمل مع شريكنا في الذكاء الاصطناعي الوكيل: أين يمكن للوكلاء تخفيف العبء عن فريقك، والتكلفة المتوقعة، وما يُفضَّل تركه كما هو. بلا رسوم وبلا إلزام.",
      cta: "احصل على التقييم المجاني",
      optTitle: "أضف التقييم المجاني إلى هذا الطلب",
      optCopy: "يأتي مع كل مفهوم حل: 45 دقيقة مع شريكنا في الذكاء الاصطناعي الوكيل حول أحد مسارات عملك، قبل تحديد أي أجهزة.",
      optOn: "مُضاف ✓",
      optOff: "أضِفه",
      nextTitle: "تقييم مجاني",
      nextCopy: "يُحجَز مع المكالمة, مراجعة مسار عمل واحد دون تكلفة.",
      useTag: "حل بالشراكة",
      useTitle: "تقييم مجاني",
      useCopy: "قبل شراء أي شيء، دع شريكنا في الذكاء الاصطناعي الوكيل يراجع أحد مسارات عملك, 30-45 دقيقة بلا رسوم. وغالباً ما تكون أقل الحالات كلفة هي التي تُؤتمَت بدل أن تُجهَّز.",
    },
    hero: {
      kicker: "توريد التقنية المتقدمة وحلول ذكية عملية — قطر",
      title: "من جهاز متقدم واحد إلى حل ذكي عملي.",
      copy: "نساعدك على فهم الحاجة وتوريد التقنية المناسبة وتحويلها إلى حل متصل يعمل فعلاً — للمصانع والمستودعات والمكاتب والحرم الجامعي على حد سواء.",
      cta1: "أحتاج إلى حل",
      cta2: "أحتاج إلى تقنية محددة",
      stats: [
        { value: "٥", label: "حلول جاهزة" },
        { value: "٤", label: "قطاعات مخدومة" },
        { value: "متكامل", label: "من التصميم إلى الدعم" },
      ],
    },
    help: {
      kicker: "كيف يمكننا المساعدة؟",
      title: "مسارَان للبدء, اختر الأقرب إلى وضعك",
      copy: "بعض العملاء يأتون بمشكلة دون قائمة معدات، وآخرون يعرفون تماماً ما يريدون شراءه. المسارَان ينتهيان بتسليم مُسعَّر ومدعوم.",
      pathA: {
        tag: "المسار أ",
        title: "أحتاج إلى حل",
        copy: "لديك تحدٍ — توقفات إنتاج، مساحة غير مستغلة، عملية يدوية. نحوّله إلى مفهوم حل ثم إلى نظام يعمل.",
        cta: "اكتب وصف التحدي",
        steps: [
          { n: "01", text: "وصف التحدي" },
          { n: "02", text: "مكالمة مع مهندس" },
          { n: "03", text: "مفهوم الحل والميزانية" },
        ],
      },
      pathB: {
        tag: "المسار ب",
        title: "أحتاج إلى تقنية محددة",
        copy: "أنت تعرف ما تشتريه. أرسل المتطلبات؛ نراجع المواصفات ونقدم عرض سعر يشمل التوريد والدعم.",
        cta: "أرسل المتطلبات",
        steps: [
          { n: "01", text: "المتطلبات" },
          { n: "02", text: "مراجعة فنية" },
          { n: "03", text: "عرض سعر ثم توريد ودعم" },
        ],
      },
    },
    useCasesSection: { kicker: "حالات الاستخدام", title: "حلول جاهزة قابلة للتخصيص", link: "عرض جميع حالات الاستخدام ←" },
    useCasesPage: {
      title: "حالات الاستخدام",
      copy: "بيئات نفّذناها سابقاً ومُحزَّمة بحيث يستغرق تحديد النطاق أياماً لا أشهراً. وكل منها يُكيَّف مع موقعك ومعاييرك وميزانيتك.",
      cardCta: "ابدأ من حالة الاستخدام هذه",
      sectionOne: "القسم الأول",
      prebuiltTitle: "الحلول الجاهزة",
      prebuiltCopy: "تكوينات مُثبتة بقائمة معدات وخطة تكامل ونموذج دعم معروفة مسبقاً.",
      sectionTwo: "القسم الثاني",
      customTitle: "لا يوجد ما يناسبك؟ هذا طبيعي.",
      customCopy: "معظم أعمالنا تبدأ بتحدٍ لم يُحزَّم بعد. صِف التحدي وسنعود إليك بمفهوم حل ونطاق ورقم تقديري.",
      leadTime: "مدة التنفيذ:",
      fitFor: "الأنسب لـ:",
      view3d: "عرض ثلاثي الأبعاد",
      close: "إغلاق",
      modelLoading: "جارٍ تحميل النموذج ثلاثي الأبعاد…",
      modelError: "لم يتم تحميل العرض ثلاثي الأبعاد. حاول مرة أخرى أو اطلب منا جولة توضيحية.",
      modelHint: "اسحب للتدوير، واستخدم عجلة الفأرة للتقريب. اضغط على أي جزء في النموذج أو في القائمة لتمييزه.",
      partsTitle: "الأجزاء",
      clearSelection: "إلغاء التحديد",
      viewGallery: "عرض الصور",
      prevImage: "الصورة السابقة",
      nextImage: "الصورة التالية",
      goToImage: "الانتقال إلى الصورة",
      whatItDoes: "ما الذي يقدمه",
      whatsIncluded: "ما الذي يشمله",
      galleryHint: "استخدم الأسهم أو الصور المصغّرة أو أسهم لوحة المفاتيح للتصفح.",
    },
    process: {
      kicker: "منهج إينا سمارت",
      title: "نبدأ من احتياجك لا من قائمة منتجات",
      copy: "فهم ← اختيار ← توريد ← تنفيذ ← ربط ← أتمتة. فريق واحد مسؤول من أول محادثة حتى حل متصل يعمل فعلاً.",
      steps: [
        { n: "٠١", title: "الفهم", copy: "نبدأ بمتطلباتك وتقنياتك الحالية وبنيتك التحتية وسير عملك." },
        { n: "٠٢", title: "الاختيار", copy: "اختيار التقنية وفق الملاءمة والتوافق والأداء والميزانية، لا وفق الأحدث." },
        { n: "٠٣", title: "التوريد", copy: "توريد موثوق عبر شبكات محلية ودولية بما يطابق مواصفاتك." },
        { n: "٠٤", title: "التنفيذ", copy: "تركيب وتهيئة وتشغيل في بيئتك الحقيقية لا في صالة عرض." },
        { n: "٠٥", title: "الربط", copy: "تكامل مع الأنظمة والمعدات والبرمجيات التي تعمل لديك بالفعل." },
        { n: "٠٦", title: "الأتمتة", copy: "ذكاء اصطناعي وأتمتة وتنبيهات ولوحات حيث تصنع قيمة قابلة للقياس." },
      ],
    },
    deliverySection: {
      kicker: "نماذج التسليم",
      title: "شريك تقني واحد — بمستوى الدعم الذي تحتاجه",
      copy: "يتوسع التعاون بحسب المتطلب، من توريد جهاز متقدم واحد إلى تصميم حل متصل متكامل.",
    },
    sectorsSection: { title: "عبر القطاعات", link: "أعمالنا في القطاعات ←" },
    sectorsPage: {
      kicker: "أين نعمل",
      title: "عبر القطاعات",
      copy: "التقنية تتكرر، أما القيود فلا. هكذا تُترجَم الخبرة نفسها في أربع بيئات مختلفة تماماً.",
      typicalWork: "أعمال نموذجية",
      trigger: "ما الذي يبدأ الحديث عادة",
      constraint: "ما الذي يختلف هنا",
      related: "حالات استخدام ذات صلة",
      ctaPrefix: "تحدّث معنا عن",
    },
    ctaBand: {
      title: "أخبرنا بالتحدي، لا برقم القطعة.",
      copy: "وصف قصير يكفي للبدء. سنعود بمفهوم حل وميزانية تقديرية خلال أيام.",
      cta1: "ابدأ بوصف التحدي",
      cta2: "طلب عرض سعر",
    },
    form: {
      sector: "في أي قطاع تعمل؟",
      sectorChips: ["التعليم", "الشركات والمكاتب", "الصناعة والتصنيع", "الخدمات اللوجستية وسلسلة التوريد", "أخرى"],
      timeline: "الجدول الزمني المستهدف",
      timelineOpts: ["غير محدد", "خلال شهر", "1–3 أشهر", "3–6 أشهر", "أكثر من 6 أشهر"],
      budget: "الميزانية التقديرية",
      budgetOpts: ["غير محددة", "أقل من 100 ألف ر.ق", "100–500 ألف ر.ق", "500 ألف–مليون ر.ق", "أكثر من مليون ر.ق"],
      org: "المؤسسة",
      name: "اسم المسؤول",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      message: "الرسالة",
      back: "رجوع",
      continueLabel: "متابعة",
      bookCall: "حجز مكالمة",
      backHome: "العودة للرئيسية",
      asideTitle: "ما الذي يحدث بعد ذلك",
      preferTalk: "تفضّل التحدث أولاً؟",
    },
    solution: {
      kicker: "المسار أ — أحتاج إلى حل",
      title: "صِف التحدي",
      copy: "ثلاث خطوات قصيرة. لا حاجة لمواصفات فنية — تلك مهمتنا.",
      steps: ["وصف التحدي", "النطاق", "التواصل", "الخطوات التالية"],
      s0Title: "وصف التحدي",
      s0Copy: "ما الذي لا يعمل اليوم؟ وكيف يبدو الوضع الجيد؟",
      l1: "التحدي",
      p1: "مثال: توقفات غير مخططة لا نعرف بها إلا في تقرير الوردية.",
      l2: "النتيجة المطلوبة",
      p2: "مثال: معرفة توقف الخط وسببه خلال دقيقة.",
      s1Title: "النطاق",
      s1Copy: "الأرقام التقريبية كافية — نصقلها في المكالمة.",
      l3: "الموقع أو المساحات المعنية",
      p3: "مثال: صالة إنتاج واحدة، ورديتان",
      l4: "من الأطراف المعنية؟",
      p4: "مثال: مدير التشغيل، تقنية المعلومات",
      contactTitle: "إلى أين نرسل مفهوم الحل؟",
      contactCopy: "جهة اتصال واحدة تكفي, سنؤكد معك قبل إشراك أي طرف آخر.",
      doneTitle: "تم استلام الوصف, الخطوة التالية مكالمة.",
      doneCopy: "نقرأ الوصف ثم نحدد مكالمة 30 دقيقة لاستكمال التفاصيل، ويصلك مفهوم الحل خلال أسبوع.",
      next: [
        { n: "١", title: "مكالمة", copy: "ثلاثون دقيقة مع مهندس، لا مع مندوب بيع." },
        { n: "٢", title: "مفهوم الحل", copy: "المعمارية وقائمة المعدات والميزانية التقديرية." },
        { n: "٣", title: "تصميم ← توريد ← تكامل ← تجربة ← دعم", copy: "فريق واحد مسؤول من الرسم حتى التسليم وما بعده." },
      ],
      aside: [
        { title: "5 حلول جاهزة للبدء منها", copy: "أو تصميم من الصفر إن لم يناسبك أي منها." },
        { title: "قراءة خلال يوم عمل", copy: "يفرز الطلبات مهندس لا قائمة انتظار." },
        { title: "مكالمة ثم مفهوم حل", copy: "لا نُسعّر قبل الاتفاق على المشكلة." },
        { title: "دون أي إلزام", copy: "مفهوم الحل لك سواء أكملت المشروع أم لا." },
      ],
      submitLabel: "إرسال الوصف",
      picker: {
        title: "هل تبدأ من حل جاهز؟",
        copy: "إن كان أحد هذه الحلول قريباً من احتياجك فاخترْه — يبدأ تحديد النطاق من تصميم معروف لا من صفحة فارغة. ويمكنك اختيار أكثر من حل إذا شمل المشروع عدة مساحات.",
        none: "لا يوجد ما يطابق احتياجك — صِف التحدي أدناه ونصمم الحل من الصفر.",
        browse: "اعرف ما يشمله كل حل ←",
        selected: "نقطة البداية",
      },
      switchLabel: "في الواقع، أحتاج إلى تقنية محددة ←",
    },
    technology: {
      kicker: "المسار ب — أحتاج إلى تقنية محددة",
      title: "أرسل متطلباتك",
      copy: "أنت تعرف المواصفات. نراجعها ونُسعّرها ونورّدها وندعمها.",
      steps: ["طلبك", "الخطوات التالية"],
      oneTitle: "اطلب تقنية محددة",
      oneCopy: "شاشة واحدة. اختر من الكتالوج أو صِف بدقة ما تريده، ثم أخبرنا إلى أين نرسل عرض السعر.",
      picker: {
        title: "هل هو موجود بالفعل في كتالوجنا؟",
        copy: "ابحث بين المنتجات التي نوردها ونوزعها. أضف ما تعرفه, معظم الطلبات مغطاة أصلاً من كتالوجنا أو من علامة شريكة.",
        search: "ابحث في الكتالوج",
        add: "إضافة",
        added: "تمت الإضافة ✓",
        selected: "في طلبك",
        none: "لم تُضف أي عنصر بعد — ابحث أعلاه أو صِف احتياجك أدناه.",
        browse: "استعرض الكتالوج الكامل ←",
      },
      specificTitle: "تطلب شيئاً محدداً؟",
      specificCopy: "أرقام موديلات أو علامة اعتمدتها مؤسستك أو مواصفات بكلمات بسيطة, وما لا نخزّنه نوفّره لك.",
      l1: "ما الذي تحتاجه؟",
      p1: "مثال: 12 شاشة تفاعلية 86 بوصة مع حوامل ووحدات OPS.",
      l2: "المعايير أو القيود",
      p2: "مثال: التوافق مع نظام التحكم الحالي وضمان محلي.",
      commercialsTitle: "الكميات والتسليم",
      l3: "الكميات",
      p3: "مثال: 12 وحدة على مرحلتين وموقعين",
      l4: "موقع التسليم",
      p4: "مثال: المنطقة الصناعية، الدوحة",
      contactTitle: "إلى أين نرسل عرض السعر",
      doneTitle: "تم استلام المتطلبات, العرض تالياً.",
      doneCopy: "مراجعة فنية تؤكد التوافق والتوافر، ثم يصلك عرض سعر نهائي يشمل التوريد والدعم.",
      next: [
        { n: "١", title: "مراجعة فنية", copy: "تأكيد التوافق والتوافر ومدد التسليم." },
        { n: "٢", title: "عرض السعر", copy: "أسعار نهائية مفصّلة مع تواريخ التسليم." },
        { n: "٣", title: "توريد ودعم", copy: "التسليم والتركيب عند الحاجة وإدارة الضمان." },
      ],
      aside: [
        { title: "كتالوج نوردّه ونوفّره", copy: "إضافة إلى علامات شريكة, وما لا نخزّنه نوفّره لك." },
        { title: "مراجعة بواسطة مهندس", copy: "ننبّه لأي تعارض قبل الشراء لا بعده." },
        { title: "عرض خلال 3–5 أيام", copy: "أسرع للمواد المتوفرة في المخزون." },
        { title: "الدعم مشمول", copy: "إدارة الضمان وقطع الغيار محلياً." },
      ],
      submitLabel: "إرسال المتطلبات",
      switchLabel: "في الواقع، أحتاج إلى حل ←",
    },
    productsPage: {
      title: "المنتجات",
      kicker: "المنتجات",
      heading: "منتجات تقنية متقدمة، مورّدة في قطر",
      copy: "المساحات الذكية، والتعليم وSTEM، والتخزين والخدمات اللوجستية، ومعدات تصنيع البلاستيك. صفِّ حسب الفئة أو ابحث بالاسم؛ وكل منتج يرتبط بطلب عرض سعر.",
      search: "ابحث في المنتجات",
      allCategories: "جميع الفئات",
      countSuffix: "منتجاً",
      signature: "من تصميم إينا",
      noResults: "لا يوجد منتج مطابق لبحثك. أرسل لنا المواصفات وسنوفّره لك.",
      cta: "طلب عرض سعر",
      viewDetails: "عرض التفاصيل",
      close: "إغلاق",
      backToCatalogue: "العودة إلى الكتالوج",
      dialogNote: "تختلف الأحجام والسعات والخيارات حسب المشروع. أرسل احتياجك وسنقدم عرضاً للتكوين الدقيق، بما يشمل التركيب والدعم عند الحاجة.",
      pending: "تختلف المواصفات والأحجام والخيارات حسب المشروع — أرسل احتياجك وسنقدم عرضاً للتكوين الدقيق، بما في ذلك ما لا يظهر هنا.",
    },
    aboutPage: {
      kicker: "من نحن",
      title: "عن إينا سمارت",
      copy: "إينا سمارت شريك مقره قطر لتوريد التقنية المتقدمة وتقديم حلول ذكية عملية. نساعد المؤسسات على فهم احتياجاتها وتوريد التقنية المناسبة وتحويلها إلى حلول عملية تعمل فعلاً — من جهاز متقدم واحد إلى أنظمة متصلة وسير عمل مؤتمت ولوحات ومشاريع متكاملة.",
      challengeTitle: "التقنية في كل مكان، والتحدي الحقيقي هو تشغيل التقنية المناسبة.",
      challengeCopy: "تتاح للمؤسسات اليوم مجموعة متزايدة من تقنيات الذكاء الاصطناعي والأتمتة والروبوتات وإنترنت الأشياء والبرمجيات، لكن اختيار التقنية الصحيحة ليس سوى البداية. ويترتب على ذلك تقنيات غير مترابطة واستثمارات غير مستغلة وتعقيد لا لزوم له عندما لا يعالج الحل الحاجة الأصلية. ومع تسارع طموحات قطر في الابتكار والتحول الرقمي والاقتصاد المتنوع ضمن رؤية قطر الوطنية 2030، لا تحتاج المؤسسات إلى تقنية متقدمة فحسب، بل إلى التقنية المناسبة المختارة والمطبَّقة لتصنع قيمة عملية.",
      valuesKicker: "قيمنا الأساسية",
      valuesTitle: "اختر بحكمة. اربط بذكاء. نفّذ بإتقان.",
      differentKicker: "ما الذي يميزنا",
      differentTitle: "لسنا مجرد مورّد، ولسنا مُكاملاً تقليدياً",
      focusKicker: "مجالات التركيز",
      focusTitle: "أين نعمل",
      ctaTitle: "من أين تحب أن تبدأ؟",
      ctaCopy: "احضر لنا التحدي ونصمم الحل، أو استعرض الكتالوج إن كنت تعرف المعدات التي تريدها، أو ناقش الأمر مع مهندس أولاً.",
      ctaSolution: "أحتاج إلى حل",
      ctaProducts: "استعرض المنتجات",
      ctaCall: "حجز مكالمة",
    },
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
      sent: "تم إرسال الرسالة ✓",
    },
    projectsPage: { kicker: "المشاريع", title: "دراسات حالة وتنفيذات ناجحة" },
    brandsPage: { kicker: "العلامات", title: "العلامات التجارية الشريكة التي نوزعها", copy: "شركاء موثوقون — مصداقية من خلال الجودة. الشعارات ستُضاف قريباً." },
    footer: {
      tagline: "توريد التقنية المتقدمة وحلول ذكية عملية في قطر — اختيار وتوريد وتنفيذ وربط وأتمتة حول ما لديك بالفعل.",
      motto: "ابتكار • تكامل • أتمتة",
      explore: "استكشف",
      contact: "تواصل",
      rights: "جميع الحقوق محفوظة.",
    },
  },
} satisfies Record<Lang, unknown>;

export function t(lang: Lang) {
  return ui[lang];
}
