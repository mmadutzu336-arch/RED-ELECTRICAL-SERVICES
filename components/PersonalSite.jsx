import { useState, useCallback, useMemo } from "react";

const OWNER_NAME = "Rosu Madalin";
const WHATSAPP_NUMBER = "35797682622";
const PHONE_NUMBER = "+357 97682622";
const LOCATION = "Larnaca, Cyprus";

const TRANSLATIONS = {
  en: {
    about: "About us",
    services: "Services",
    projects: "Projects",
    contact: "Contact",
    heroTitle: "Professional Electrician in Larnaca",
    heroSub: "Installations • Repairs • Maintenance • Fast response",
    quote: "Request a quote",
  },
  ro: {
    about: "Despre noi",
    services: "Servicii",
    projects: "Proiecte",
    contact: "Contact",
    heroTitle: "Electrician profesionist în Larnaca",
    heroSub: "Instalații • Reparații • Mentenanță • Intervenții rapide",
    quote: "Solicită ofertă",
  },
  gr: {
    about: "Σχετικά",
    services: "Υπηρεσίες",
    projects: "Έργα",
    contact: "Επικοινωνία",
    heroTitle: "Επαγγελματίας ηλεκτρολόγος στη Λάρνακα",
    heroSub: "Εγκαταστάσεις • Επισκευές • Συντήρηση • Άμεση εξυπηρέτηση",
    quote: "Ζητήστε προσφορά",
  },
  ru: {
    about: "О нас",
    services: "Услуги",
    projects: "Проекты",
    contact: "Контакты",
    heroTitle: "Электрик в Ларнаке",
    heroSub: "Установка • Ремонт • Обслуживание • Быстро",
    quote: "Запросить цену",
  },
  de: {
    about: "Über uns",
    services: "Leistungen",
    projects: "Projekte",
    contact: "Kontakt",
    heroTitle: "Elektriker in Larnaca",
    heroSub: "Installation • Reparatur • Wartung • Schnell",
    quote: "Angebot anfordern",
  },
  ar: {
    about: "من نحن",
    services: "الخدمات",
    projects: "المشاريع",
    contact: "اتصل بنا",
    heroTitle: "كهربائي محترف في لارنكا",
    heroSub: "تركيب • إصلاح • صيانة • خدمة سريعة",
    quote: "اطلب عرض سعر",
  },
};

const SERVICES = [
  { icon: "⚡", title: "Electrical Installations" },
  { icon: "🔧", title: "Emergency Repairs" },
  { icon: "🛠", title: "Maintenance Services" },
  { icon: "💡", title: "LED Lighting Systems" },
  { icon: "🏠", title: "Residential Wiring" },
  { icon: "🏢", title: "Commercial Projects" },
];

const PROJECTS = [
  "Villa Electrical System",
  "Restaurant LED Upgrade",
  "Industrial Panel Wiring",
  "Apartment Renovation",
  "Smart Home Setup",
  "Emergency Fixes",
];

const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="text-yellow-500 text-2xl" aria-label="Lightning bolt">
      ⚡
    </div>
    <span className="font-bold">RED ELECTRICAL SERVICES</span>
  </div>
);

const ADMIN_PASSWORD = "lessalahores2026";

export default function PersonalSite() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [lang, setLang] = useState("en");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const t = useMemo(() => TRANSLATIONS[lang] || TRANSLATIONS.en, [lang]);

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
          {SERVICES.map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-200"
            >
              <div className="text-3xl mb-2">{service.icon}</div>
              <p className="font-semibold text-gray-800">{service.title}</p>
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
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-200"
            >
              <p className="font-semibold text-gray-800">{project}</p>
            </div>
          ))}
        </div>
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
          <p className="text-sm text-gray-500">Owner: {OWNER_NAME}</p>
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
        <p>
          © 2026 RED ELECTRICAL SERVICES | Owner: {OWNER_NAME} | {LOCATION}
        </p>
        <p className="text-sm text-gray-500 mt-2">All rights reserved</p>
      </footer>
    </div>
  );
}
