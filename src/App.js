import React, { useState } from 'react';
import { Wrench, Refrigerator, WashingMachine, Tv, Phone, MessageCircle } from 'lucide-react';

const languages = {
  en: {
    headline: "Professional HVAC Services in Kuwait",
    subtext: "Expert repair, maintenance, and installation for all your heating, ventilation, and air conditioning needs.",
    services: [
      { title: "Maintenance", icon: Wrench },
      { title: "Refrigeration", icon: Refrigerator },
      { title: "Washing Machines", icon: WashingMachine },
      { title: "TV Repair", icon: Tv }
    ],
    callNow: "Call Now"
  },
  ar: {
    headline: "خدمات التكييف المهنية في الكويت",
    subtext: "إصلاح وصيانة وتركيب احترافي لجميع احتياجات التدفئة والتهوية والتكييف.",
    services: [
      { title: "الصيانة", icon: Wrench },
      { title: "التبريد", icon: Refrigerator },
      { title: "غسالات", icon: WashingMachine },
      { title: "إصلاح التلفزيون", icon: Tv }
    ],
    callNow: "اتصل الآن"
  }
};

function App() {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const currentLang = languages[language];

  return (
    <div className={`min-h-screen bg-navy text-steel ${language === 'ar' ? 'font-arabic' : 'font-english'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Language Toggle */}
      <div className="flex justify-end p-4">
        <button
          onClick={toggleLanguage}
          className="bg-steel text-navy px-4 py-2 rounded hover:bg-opacity-80 transition"
        >
          {language === 'en' ? 'العربية' : 'English'}
        </button>
      </div>

      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{currentLang.headline}</h1>
        <p className="text-xl md:text-2xl">{currentLang.subtext}</p>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentLang.services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white text-navy p-6 rounded-lg shadow-lg text-center">
                  <IconComponent size={48} className="mx-auto mb-4" />
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-steel text-navy">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Contact Us</h2>
          <a
            href="tel:+96560972737"
            className="inline-flex items-center bg-navy text-steel px-6 py-3 rounded-lg hover:bg-opacity-80 transition mr-4"
          >
            <Phone className="mr-2" />
            {currentLang.callNow}
          </a>
        </div>
      </section>

      {/* Floating WhatsApp Icon */}
      <a
        href="https://wa.me/96560972737"
        className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle size={24} />
      </a>
    </div>
  );
}

export default App;