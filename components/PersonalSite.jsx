import Image from "next/image";
import { useState, useCallback, useMemo } from "react";

const OWNER_NAME = "Rosu Madalin";
const WHATSAPP_NUMBER = "35797682622";
const PHONE_NUMBER = "+357 97682622";
const EMAIL_ADDRESS = "owner@redeletricalserices.com";
const SITE_URL = "https://redelectricalservices.com";
const QR_CODE_SRC = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(SITE_URL)}&color=ff0000`;
const LOCATION = "Larnaca, Cyprus";

const TRANSLATIONS = {
  en: {
    about: "About us",
    services: "Services",
    projects: "Projects",
    feedback: "Feedback",
    leaveComment: "Leave a comment",
    commentNamePlaceholder: "Your name",
    commentTextareaPlaceholder: "Share your experience...",
    commentSubmit: "Submit comment",
    recentComments: "Recent comments",
    viewProject: "View project",
    contact: "Contact",
    heroTitle: "Professional Electrician in Larnaca",
    heroSub: "Installations • Repairs • Maintenance • Fast response",
    quote: "Request a quote",
    whatsapp247: "Hello, I'm interested in the 24/7 Service. Please provide details and pricing.",
    whatsappPricing: "Hello, I'm interested in the {title}. Please send details.",
    servicesList: [
      { icon: "⚡", title: "Electrical Installations" },
      { icon: "🔧", title: "Emergency Repairs" },
      { icon: "🛠", title: "Maintenance Services" },
      { icon: "🕒", title: "24/7 Service – €100/month" },
      { icon: "💡", title: "LED Lighting Systems" },
      { icon: "🏠", title: "Residential Wiring" },
      { icon: "🏢", title: "Commercial Projects" },
    ],
    pricingList: [
      { title: "24/7 Service", price: "€100/month", description: "Priority emergency response and ongoing support for electrical issues every day, all year round." },
    ],
    projectsList: [
      { title: "Villa Electrical System", description: "Complete electrical setup for a luxury villa, including panel installation and outdoor lighting.", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80", images: ["https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80","https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80"] },
      { title: "Restaurant LED Upgrade", description: "Modern LED lighting retrofit for a restaurant that improves ambiance and energy efficiency.", image: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=800&q=80", images: ["https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1200&q=80","https://images.unsplash.com/photo-1517256064527-09c73fc73e97?auto=format&fit=crop&w=1200&q=80"] },
    ],
    feedbacksList: [
      { name: "Ioana M.", location: "Larnaca", text: "Excellent service and fast response. Highly recommended." },
      { name: "George P.", location: "Nicosia", text: "Clean, professional installation. Great communication." },
    ],
  },
  ro: {
    about: "Despre noi",
    services: "Servicii",
    projects: "Proiecte",
    feedback: "Feedback",
    leaveComment: "Lasă un comentariu",
    commentNamePlaceholder: "Numele tău",
    commentTextareaPlaceholder: "Spune-ne despre experiența ta...",
    commentSubmit: "Trimite comentariu",
    recentComments: "Comentarii recente",
    viewProject: "Vezi proiectul",
    contact: "Contact",
    heroTitle: "Electrician profesionist în Larnaca",
    heroSub: "Instalații • Reparații • Mentenanță • Intervenții rapide",
    quote: "Solicită ofertă",
    whatsapp247: "Bună, sunt interesat de serviciul 24/7. Vă rog trimiteți detalii și prețuri.",
    whatsappPricing: "Bună, sunt interesat de {title}. Vă rog trimiteți detalii.",
    servicesList: [
      { icon: "⚡", title: "Instalații electrice" },
      { icon: "🔧", title: "Reparații de urgență" },
      { icon: "🛠", title: "Servicii de întreținere" },
      { icon: "🕒", title: "Serviciu 24/7 – €100/lună" },
      { icon: "💡", title: "Sisteme LED" },
      { icon: "🏠", title: "Instalări rezidențiale" },
      { icon: "🏢", title: "Proiecte comerciale" },
    ],
    pricingList: [
      { title: "Serviciu 24/7", price: "€100/lună", description: "Intervenție prioritară și suport continuu pentru probleme electrice, zi de zi, tot anul." },
    ],
    projectsList: [
      { title: "Sistem electric pentru vilă", description: "Instalare completă pentru o vilă luxoasă, inclusiv panou și iluminat exterior.", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80", images: ["https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80","https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80"] },
      { title: "Modernizare LED restaurant", description: "Retrofit LED care îmbunătățește ambianța și eficiența energetică.", image: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=800&q=80", images: ["https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1200&q=80","https://images.unsplash.com/photo-1517256064527-09c73fc73e97?auto=format&fit=crop&w=1200&q=80"] },
    ],
    feedbacksList: [
      { name: "Ioana M.", location: "Larnaca", text: "Servicii excelente și intervenție rapidă. Recomand." },
      { name: "George P.", location: "Nicosia", text: "Instalare curată și profesionistă. Comunicare excelentă." },
    ],
  },
  gr: {
    about: "Σχετικά",
    services: "Υπηρεσίες",
    projects: "Έργα",
    feedback: "Ανατροφοδότηση",
    leaveComment: "Αφήστε ένα σχόλιο",
    commentNamePlaceholder: "Το όνομά σας",
    commentTextareaPlaceholder: "Μοιραστείτε την εμπειρία σας...",
    commentSubmit: "Υποβολή σχολίου",
    recentComments: "Πρόσφατα σχόλια",
    viewProject: "Δείτε το έργο",
    contact: "Επικοινωνία",
    heroTitle: "Επαγγελματίας ηλεκτρολόγος στη Λάρνακα",
    heroSub: "Εγκαταστάσεις • Επισκευές • Συντήρηση • Άμεση εξυπηρέτηση",
    quote: "Ζητήστε προσφορά",
    whatsapp247: "Γειά σας, ενδιαφέρομαι για την υπηρεσία 24/7. Παρακαλώ στείλτε λεπτομέρειες και τιμές.",
    whatsappPricing: "Γειά σας, ενδιαφέρομαι για {title}. Παρακαλώ στείλτε λεπτομέρειες.",
    servicesList: [
      { icon: "⚡", title: "Electrical Installations" },
      { icon: "🔧", title: "Emergency Repairs" },
      { icon: "🛠", title: "Maintenance Services" },
      { icon: "🕒", title: "24/7 Service – €100/month" },
      { icon: "💡", title: "LED Lighting Systems" },
      { icon: "🏠", title: "Residential Wiring" },
      { icon: "🏢", title: "Commercial Projects" },
    ],
    pricingList: [
      { title: "24/7 Service", price: "€100/month", description: "Priority emergency response and ongoing support for electrical issues every day, all year round." },
    ],
    projectsList: [
      { title: "Villa Electrical System", description: "Complete electrical setup for a luxury villa, including panel installation and outdoor lighting.", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80", images: ["https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80","https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80"] },
      { title: "Restaurant LED Upgrade", description: "Modern LED lighting retrofit for a restaurant that improves ambiance and energy efficiency.", image: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=800&q=80", images: ["https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1200&q=80","https://images.unsplash.com/photo-1517256064527-09c73fc73e97?auto=format&fit=crop&w=1200&q=80"] },
    ],
    feedbacksList: [
      { name: "Ioana M.", location: "Larnaca", text: "Excellent service and fast response. Highly recommended." },
      { name: "George P.", location: "Nicosia", text: "Clean, professional installation. Great communication." },
    ],
  },
  ru: {
    about: "О нас",
    services: "Услуги",
    projects: "Проекты",
    feedback: "Отзывы",
    leaveComment: "Оставить комментарий",
    commentNamePlaceholder: "Ваше имя",
    commentTextareaPlaceholder: "Расскажите о своем опыте...",
    commentSubmit: "Отправить комментарий",
    recentComments: "Последние комментарии",
    viewProject: "Посмотреть проект",
    contact: "Контакты",
    heroTitle: "Электрик в Ларнаке",
    heroSub: "Установка • Ремонт • Обслуживание • Быстро",
    quote: "Запросить цену",
    whatsapp247: "Здравствуйте, меня интересует услуга 24/7. Пожалуйста, пришлите подробности и цены.",
    whatsappPricing: "Здравствуйте, меня интересует {title}. Пожалуйста, пришлите подробности.",
    servicesList: [
      { icon: "⚡", title: "Electrical Installations" },
      { icon: "🔧", title: "Emergency Repairs" },
      { icon: "🛠", title: "Maintenance Services" },
      { icon: "🕒", title: "24/7 Service – €100/month" },
      { icon: "💡", title: "LED Lighting Systems" },
      { icon: "🏠", title: "Residential Wiring" },
      { icon: "🏢", title: "Commercial Projects" },
    ],
    pricingList: [
      { title: "24/7 Service", price: "€100/month", description: "Priority emergency response and ongoing support for electrical issues every day, all year round." },
    ],
    projectsList: [
      { title: "Villa Electrical System", description: "Complete electrical setup for a luxury villa, including panel installation and outdoor lighting.", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80", images: ["https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80","https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80"] },
      { title: "Restaurant LED Upgrade", description: "Modern LED lighting retrofit for a restaurant that improves ambiance and energy efficiency.", image: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=800&q=80", images: ["https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1200&q=80","https://images.unsplash.com/photo-1517256064527-09c73fc73e97?auto=format&fit=crop&w=1200&q=80"] },
    ],
    feedbacksList: [
      { name: "Ioana M.", location: "Larnaca", text: "Excellent service and fast response. Highly recommended." },
      { name: "George P.", location: "Nicosia", text: "Clean, professional installation. Great communication." },
    ],
  },
  de: {
    about: "Über uns",
    services: "Leistungen",
    projects: "Projekte",
    feedback: "Feedback",
    leaveComment: "Hinterlasse einen Kommentar",
    commentNamePlaceholder: "Dein Name",
    commentTextareaPlaceholder: "Teile deine Erfahrung...",
    commentSubmit: "Kommentar senden",
    recentComments: "Neueste Kommentare",
    viewProject: "Projekt ansehen",
    contact: "Kontakt",
    heroTitle: "Elektriker in Larnaca",
    heroSub: "Installation • Reparatur • Wartung • Schnell",
    quote: "Angebot anfordern",
    whatsapp247: "Hallo, ich interessiere mich für den 24/7-Service. Bitte senden Sie Details und Preise.",
    whatsappPricing: "Hallo, ich interessiere mich für {title}. Bitte senden Sie Details.",
    servicesList: [
      { icon: "⚡", title: "Electrical Installations" },
      { icon: "🔧", title: "Emergency Repairs" },
      { icon: "🛠", title: "Maintenance Services" },
      { icon: "🕒", title: "24/7 Service – €100/month" },
      { icon: "💡", title: "LED Lighting Systems" },
      { icon: "🏠", title: "Residential Wiring" },
      { icon: "🏢", title: "Commercial Projects" },
    ],
    pricingList: [
      { title: "24/7 Service", price: "€100/month", description: "Priority emergency response and ongoing support for electrical issues every day, all year round." },
    ],
    projectsList: [
      { title: "Villa Electrical System", description: "Complete electrical setup for a luxury villa, including panel installation and outdoor lighting.", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80", images: ["https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80","https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80"] },
      { title: "Restaurant LED Upgrade", description: "Modern LED lighting retrofit for a restaurant that improves ambiance and energy efficiency.", image: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=800&q=80", images: ["https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1200&q=80","https://images.unsplash.com/photo-1517256064527-09c73fc73e97?auto=format&fit=crop&w=1200&q=80"] },
    ],
    feedbacksList: [
      { name: "Ioana M.", location: "Larnaca", text: "Excellent service and fast response. Highly recommended." },
      { name: "George P.", location: "Nicosia", text: "Clean, professional installation. Great communication." },
    ],
  },
  ar: {
    about: "من نحن",
    services: "الخدمات",
    projects: "المشاريع",
    feedback: "التعليقات",
    leaveComment: "اترك تعليقًا",
    commentNamePlaceholder: "اسمك",
    commentTextareaPlaceholder: "شارك تجربتك...",
    commentSubmit: "إرسال تعليق",
    recentComments: "التعليقات الأخيرة",
    viewProject: "عرض المشروع",
    contact: "اتصل بنا",
    heroTitle: "كهربائي محترف في لارنكا",
    heroSub: "تركيب • إصلاح • صيانة • خدمة سريعة",
    quote: "اطلب عرض سعر",
    whatsapp247: "مرحبًا، أنا مهتم بخدمة 24/7. الرجاء إرسال التفاصيل والأسعار.",
    whatsappPricing: "مرحبًا، أنا مهتم بـ {title}. الرجاء إرسال التفاصيل.",
    servicesList: [
      { icon: "⚡", title: "Electrical Installations" },
      { icon: "🔧", title: "Emergency Repairs" },
      { icon: "🛠", title: "Maintenance Services" },
      { icon: "🕒", title: "24/7 Service – €100/month" },
      { icon: "💡", title: "LED Lighting Systems" },
      { icon: "🏠", title: "Residential Wiring" },
      { icon: "🏢", title: "Commercial Projects" },
    ],
    pricingList: [
      { title: "24/7 Service", price: "€100/month", description: "Priority emergency response and ongoing support for electrical issues every day, all year round." },
    ],
    projectsList: [
      { title: "Villa Electrical System", description: "Complete electrical setup for a luxury villa, including panel installation and outdoor lighting.", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80", images: ["https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80","https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80"] },
      { title: "Restaurant LED Upgrade", description: "Modern LED lighting retrofit for a restaurant that improves ambiance and energy efficiency.", image: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=800&q=80", images: ["https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1200&q=80","https://images.unsplash.com/photo-1517256064527-09c73fc73e97?auto=format&fit=crop&w=1200&q=80"] },
    ],
    feedbacksList: [
      { name: "Ioana M.", location: "Larnaca", text: "Excellent service and fast response. Highly recommended." },
      { name: "George P.", location: "Nicosia", text: "Clean, professional installation. Great communication." },
    ],
  },
};

// Content (services, pricing, projects, feedback) is provided per-language in TRANSLATIONS.

const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="text-yellow-500 text-2xl" aria-label="Lightning bolt">
      ⚡
    </div>
    <span className="font-bold">RED ELECTRICAL SERVICES</span>
  </div>
);

export default function PersonalSite() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [commentForm, setCommentForm] = useState({ name: "", message: "" });
  const [comments, setComments] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [lang, setLang] = useState("en");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const t = useMemo(() => TRANSLATIONS[lang] || TRANSLATIONS.en, [lang]);

  const SERVICES = t.servicesList && t.servicesList.length ? t.servicesList : [];
  const PRICING = t.pricingList && t.pricingList.length ? t.pricingList : [];
  const PROJECTS = t.projectsList && t.projectsList.length ? t.projectsList : [];
  const FEEDBACKS = t.feedbacksList && t.feedbacksList.length ? t.feedbacksList : [];

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      // Validate form
      if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
        alert("Please fill in all fields");
        return;
      }

      setIsSubmitting(true);

      try {
        const text = `Name: ${form.name}%0AEmail: ${form.email}%0AMessage: ${form.message}`;
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank", "noopener,noreferrer");

        // Reset form after submission
        setForm({ name: "", email: "", message: "" });
      } finally {
        setIsSubmitting(false);
      }
    },
    [form]
  );

  const handleCommentChange = useCallback((e) => {
    const { name, value } = e.target;
    setCommentForm((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleProjectOpen = useCallback((project) => {
    setSelectedProject(project);
    setSelectedImageIndex(0);
  }, []);

  const handleProjectClose = useCallback(() => {
    setSelectedProject(null);
  }, []);

  const handleProjectPrev = useCallback(() => {
    if (!selectedProject) return;
    setSelectedImageIndex((current) =>
      (current - 1 + selectedProject.images.length) % selectedProject.images.length
    );
  }, [selectedProject]);

  const handleProjectNext = useCallback(() => {
    if (!selectedProject) return;
    setSelectedImageIndex((current) =>
      (current + 1) % selectedProject.images.length
    );
  }, [selectedProject]);

  const handleCommentSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (!commentForm.name.trim() || !commentForm.message.trim()) {
        alert("Please enter your name and comment.");
        return;
      }

      setComments((prev) => [
        { name: commentForm.name, text: commentForm.message },
        ...prev,
      ]);
      setCommentForm({ name: "", message: "" });
    },
    [commentForm]
  );

  const buildWhatsAppUrl = (text) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* SEO */}
      <div style={{ display: "none" }}>
        electrician Larnaca Cyprus RED ELECTRICAL SERVICES installation repair maintenance emergency
        owner {OWNER_NAME}
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg transition-colors duration-200 z-50"
        target="_blank"
        rel="noopener noreferrer"
        title="Contact us on WhatsApp"
        aria-label="WhatsApp contact button"
      >
        WhatsApp
      </a>

      {/* Header */}
      <header className="p-5 flex justify-between items-center bg-white shadow sticky top-0 z-40">
        <div>
          <Logo />
          <p className="text-xs text-gray-500">{LOCATION}</p>
          <p className="text-xs text-gray-400">Owner: {OWNER_NAME}</p>
        </div>

        <div className="flex gap-3 items-center">
          <select
            className="border p-2 rounded hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            aria-label="Language selection"
          >
            <option value="en">EN</option>
            <option value="ro">RO</option>
            <option value="gr">GR</option>
            <option value="ru">RU</option>
            <option value="de">DE</option>
            <option value="ar">AR</option>
          </select>
        </div>
      </header>

      {/* Hero */}
      <section className="text-center py-28 bg-gradient-to-r from-yellow-500 to-orange-600 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.heroTitle}</h1>
        <p className="text-lg mb-6 px-4">{t.heroSub}</p>
        <a
          href="#contact"
          className="inline-block bg-white text-orange-600 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors duration-200"
        >
          {t.quote}
        </a>
      </section>

      {/* About */}
      <section id="despre" className="p-12 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">{t.about}</h2>
        <p className="text-gray-700 leading-relaxed">
          RED ELECTRICAL SERVICES provides professional electrical solutions in {LOCATION}.
          With years of experience, owner <strong>{OWNER_NAME}</strong> delivers quality workmanship
          for residential and commercial projects. We specialize in installations, emergency repairs,
          and maintenance services with fast response times.
        </p>
      </section>

      {/* Services */}
      <section id="servicii" className="p-12 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">{t.services}</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {SERVICES.map((service, idx) => {
            const is247 = service.title && service.title.includes("24/7");
            const message = is247 ? t.whatsapp247 : t.whatsappPricing.replace("{title}", service.title || "service");
            const href = buildWhatsAppUrl(message);
            const card = (
              <div
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-200"
              >
                <div className="text-3xl mb-2">{service.icon}</div>
                <p className="font-semibold text-gray-800">{service.title}</p>
              </div>
            );

            return is247 ? (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.whatsapp247}
              >
                {card}
              </a>
            ) : (
              <div key={idx}>
                {card}
              </div>
            );
          })}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="p-12 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Pricing</h2>
        <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-1">
          {PRICING.map((item, idx) => (
            <div
              key={idx}
              className="bg-orange-50 border border-orange-200 p-8 rounded-3xl shadow-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <span className="text-2xl font-extrabold text-orange-600">{item.price}</span>
              </div>
              <p className="text-gray-700 leading-relaxed">{item.description}</p>
              <div className="mt-6">
                <a
                  href={buildWhatsAppUrl(t.whatsappPricing.replace("{title}", item.title))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold"
                >
                  {lang === 'ro' ? 'Contactează pe WhatsApp' : 'Contact on WhatsApp'}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="proiecte" className="p-12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">{t.projects}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {PROJECTS.map((project, idx) => (
            <div
              key={idx}
              className="group bg-white overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-200 cursor-pointer"
              onClick={() => handleProjectOpen(project)}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={192}
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{project.description}</p>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full border border-orange-600 px-4 py-2 text-sm font-semibold text-orange-600 transition-colors duration-200 hover:bg-orange-600 hover:text-white"
                >
                  {t.viewProject}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={handleProjectClose}
        >
          <div
            className="relative w-full max-w-4xl rounded-3xl bg-white shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={handleProjectClose}
              className="absolute right-4 top-4 rounded-full bg-white/90 p-2 text-gray-700 shadow hover:bg-white"
              aria-label="Close project preview"
            >
              ×
            </button>
            <Image
              src={selectedProject.images[selectedImageIndex]}
              alt={`${selectedProject.title} image ${selectedImageIndex + 1}`}
              width={1200}
              height={500}
              className="h-80 w-full object-cover"
            />
            <div className="p-8">
              <div className="flex items-center justify-between gap-4 mb-6">
                <h3 className="text-3xl font-bold">{selectedProject.title}</h3>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={handleProjectPrev}
                    className="rounded-full border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={handleProjectNext}
                    className="rounded-full border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100"
                  >
                    ›
                  </button>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">{selectedProject.description}</p>
              <div className="grid grid-cols-3 gap-3">
                {selectedProject.images.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => setSelectedImageIndex(index)}
                    className={`h-20 overflow-hidden rounded-2xl border ${
                      index === selectedImageIndex ? "border-orange-600" : "border-gray-200"
                    }`}
                  >
                    <Image
                    src={image}
                    alt={`${selectedProject.title} thumbnail ${index + 1}`}
                    width={160}
                    height={80}
                    className="h-full w-full object-cover"
                  />
                  </button>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-500">Click outside to close.</p>
            </div>
          </div>
        </div>
      )}

      {/* Feedback */}
      <section id="feedback" className="p-12 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">{t.feedback}</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {FEEDBACKS.map((feedback, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-shadow duration-200"
            >
              <p className="text-gray-700 leading-relaxed mb-4">“{feedback.text}”</p>
              <div className="text-sm font-semibold text-orange-600">{feedback.name}</div>
              <div className="text-xs text-gray-500">{feedback.location}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">{t.leaveComment}</h3>
          <form onSubmit={handleCommentSubmit} className="bg-white p-8 rounded-2xl shadow-lg space-y-4">
            <div>
              <label htmlFor="commentName" className="block text-sm font-medium mb-1">
                {t.commentNamePlaceholder}
              </label>
              <input
                id="commentName"
                name="name"
                type="text"
                placeholder={t.commentNamePlaceholder}
                value={commentForm.name}
                onChange={handleCommentChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label htmlFor="commentMessage" className="block text-sm font-medium mb-1">
                {t.commentTextareaPlaceholder}
              </label>
              <textarea
                id="commentMessage"
                name="message"
                placeholder={t.commentTextareaPlaceholder}
                value={commentForm.message}
                onChange={handleCommentChange}
                rows="4"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <button
              type="submit"
              className="bg-orange-600 hover:bg-orange-700 text-white w-full py-3 rounded-lg font-bold transition-colors duration-200"
            >
              {t.commentSubmit}
            </button>
          </form>
        </div>

        {comments.length > 0 && (
          <div className="mt-10 max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">{t.recentComments}</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {comments.map((comment, idx) => (
                <div
                  key={`comment-${idx}`}
                  className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-shadow duration-200"
                >
                  <p className="text-gray-700 leading-relaxed mb-4">“{comment.text}”</p>
                  <div className="text-sm font-semibold text-orange-600">{comment.name}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Contact */}
      <section id="contact" className="p-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">{t.contact}</h2>

        <div className="mb-8">
          <p className="mb-2">
            <span className="text-xl">📞</span>
            <a href={`tel:${PHONE_NUMBER}`} className="text-blue-600 hover:underline">
              {PHONE_NUMBER}
            </a>
          </p>
          <p className="mb-2">
            <span className="text-xl">✉️</span>
            <a href={`mailto:${EMAIL_ADDRESS}`} className="text-blue-600 hover:underline">
              {EMAIL_ADDRESS}
            </a>
          </p>
          <div className="mt-6 rounded-3xl border border-gray-200 bg-white p-4 shadow-sm max-w-xs">
            <p className="font-semibold text-gray-900 mb-3">Scan to visit our website</p>
            <Image
              src={QR_CODE_SRC}
              alt="QR code for RED ELECTRICAL SERVICES website"
              width={300}
              height={300}
              className="rounded-2xl"
            />
          </div>
          <p className="text-sm text-gray-500 mt-4">Owner: {OWNER_NAME}</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 shadow-lg rounded-xl space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              disabled={isSubmitting}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:bg-gray-100"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              value={form.email}
              onChange={handleChange}
              disabled={isSubmitting}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:bg-gray-100"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us about your project..."
              value={form.message}
              onChange={handleChange}
              disabled={isSubmitting}
              rows="5"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:bg-gray-100"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-orange-600 hover:bg-orange-700 disabled:bg-gray-400 text-white w-full py-3 rounded-lg font-bold transition-colors duration-200"
          >
            {isSubmitting ? "Sending..." : "Send WhatsApp"}
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center p-6 bg-white border-t">
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between md:px-6">
          <div>
            <p>
              © 2026 RED ELECTRICAL SERVICES | Owner: {OWNER_NAME} | {LOCATION}
            </p>
            <p className="text-sm text-gray-500 mt-2">All rights reserved</p>
          </div>
          <div className="max-w-[120px] mx-auto md:mx-0">
            <p className="text-sm font-semibold text-gray-700 mb-2">Scan to visit site</p>
            <Image
              src={QR_CODE_SRC}
              alt="QR code for RED ELECTRICAL SERVICES"
              width={120}
              height={120}
              className="mx-auto rounded-2xl border border-gray-200"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
