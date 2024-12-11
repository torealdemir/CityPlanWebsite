import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  tr: {
    translation: {
      navbar: {
        home: "Ana Sayfa",
        about: "Hakkında",
        projects: "Projeler",
        pricing: "Fiyatlandırma",
        contact: "İletişim",
        language: "Dil"
      },
      footer: {
        description: "Sürdürülebilir şehir planlamasına ve topluluklar için kentsel yaşamı iyileştirmeye adanmıştır. Gelişen şehirler inşa etmeye inanıyoruz.",
        privacy: "PlanPro. Tum Haklari Saklidir",
        terms: "Kullanım Şartları"
      },
    },
  },
  en: {
    translation: {
      navbar: {
        home: "Home",
        about: "About",
        projects: "Projects",
        pricing: "Pricing",
        contact: "Contact",
        language: "Language"
      },
      footer: {
        description: "Dedicated to sustainable city planning and enhancing urban living for communities. We believe in building cities that thrive.",
        
        privacy: "PlanPro. All rights reserved.",
        terms: "Terms of Service"
      }
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "tr", // Default language
    fallbackLng: "tr", // Fallback to Turkish if key missing
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
