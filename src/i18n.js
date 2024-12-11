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
        links: "HIZLI LINKLER",
        privacy: "PlanPro. Tum Haklari Saklidir",
        terms: "Kullanım Şartları",
        contactus: "Bize Ulasin!",
        followus: "BIZI TAKIP EDIN",
      },
      home: {
        home: "Sürdürülebilir, Yaşanılabilir Ve Dirençli Şehirler Planlıyoruz",
        homecontent: "Sürdürülebilir ,kentin ihtiyaçlarını karşılayıcı gelişme ile günümüzden gelecek kuşaklara kentin doğal,tarihi yapısını ve kapasitesini koruyarak planlama ile gelecek nesillere aktarmak.",
        whyus: "Neden Biz?",
        whyuscontent: "Sürdürülebilirliği teşvik eden ve kentsel yaşamı iyileştiren yenilikçi çözümler üzerine odaklanıyoruz.",
        ecofriendly: "Çevre Dostu Altyapı",
        promote: "Toplu Taşıma Odaklı Çözümler",
        community: "Toplum Katılımı",
        greenspace:"Herkes İçin Yeşil Alanlar",
        ourservices: "Hizmetlerimiz",
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
        links: "QUICK LINKS",
        privacy: "PlanPro. All rights reserved.",
        terms: "Terms of Service",
        contactus: "CONTACT US!",
        followus: "FOLLOW US",
      },
      home: {
        home: "We are planning sustainable, livable, and resilient cities",
        homecontent: "To ensure sustainable development that meets the needs of the city while preserving its natural, historical structure, and capacity, and to pass it on to future generations through careful planning.",
        whyus: "Why Choose Us?",
        whyuscontent: "We focus on innovative solutions that promote sustainability and enhance urban living.",
        ecofriendly: "Eco-friendly Infrastructure",
        promote: "Promoting Public Transport",
        community: "Community Engagement",
        greenspace:"Green Spaces for All",
        ourservices: "Our Services",


      },
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
