import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  tr: {
    translation: {
      navbar: {
        home: "Ana Sayfa",
        about: "Hakkında",
        projects: "Projeler",
        founder: "Kurucumuz",
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
        home: "Sürdürülebilir, Yaşanılabilir Ve Akıllı Şehirler Planlıyoruz..",
        homecontent: "Sürdürülebilir ,kentin ihtiyaçlarını karşılayıcı gelişme ile günümüzden gelecek kuşaklara kentin doğal,tarihi yapısını ve kapasitesini koruyarak planlama ile gelecek nesillere aktarmak.",
        whyus: "Neden Biz?",
        whyuscontent: "Coğrafi bilgi sistemleri, ileri teknoloji ve katılımcı planlama modellerini benimseyerek, sürdürülebilir, yaşanabilir ve akıllı şehirler yaratmaktır. Yerel kalkınmayı destekleyen, çevre bilincine öncelik veren ve topluma değer katan bir yaklaşımla sektörde fark yaratmayı hedefliyoruz. PlanPro, tüm paydaşları için güvenilir, yenilikçi ve sorumlu bir çözüm ortağı olarak, geleceğin şehirlerini bugünden planlamaktadır.",
        ecofriendly: "Çevre Dostu Altyapı",
        promote: "Toplu Taşıma Odaklı Çözümler",
        community: "Toplum Katılımı",
        greenspace:"Herkes İçin Yeşil Alanlar",
        ourservices: "Hizmetlerimiz",
      },
      projects: {
        title: "Projelerimiz",
        viewDetails: "Daha Fazla",
        list: [
          {
            title: "Çevre Düzeni Planı",
            description: "Ülke ve bölge plan kararlarına uygun olarak konut, sanayi, tarım ulaşım gibi yerleşme ve arazi kullanılması kararlarını belirleyen plan olaraktanımlanan Çevre Düzeni Planı, konut, sanayi, tarım, turizm, ulaşım gibi sektörlerile kentsel ve kırsal yapı ve gelişmeyle doğal ve kültürel değerler arasında koruma kullanma dengesini sağlayan arazi kullanma kararlarını belirleyen yönetsel, mekansal ve işlevsel bütünlük gösteren sınırlar içinde varsa bölge planı kararlarına uygun olarak yapılan, idareler arası koordinasyon esaslarını belirleyen 1/25.000, 1/50.000, 1/100.000, 1/200.000 ölçeklerde olan plan notları ve raporuyla bir bütün olan planı ifade eder. Çevre Düzeni Planları, Kalkınma Planları ve Bölge Planları esas alınarak yapılır, altölçekli 1/5000 Nazım İmar Planı, 1/1000 Uygulama İmar Planlarına esas teşkil eder. Plan hiyerarşisinde Çevre Düzeni Planından sonra gelen 1/5000 ve 1/1000 ölçekli Nazım İmar Planı ve Uygulama İmar Planlarının İmar Kanunu ve ilgili mevzuat çerçevesinde Çevre Düzeni Planına uygun olması yasal bir zorunluluktur.",
            image: "https://images.unsplash.com/photo-1719304627715-bf5720e17d0f?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          {
            title: 'Nazim Imar Plani',
            description: 'Bölge veya çevre düzeni planlarına uygun olarak halihazır haritalar üzerine, yine varsa kadastral durumu işlenmiş olarak çizilen ve arazi parçalarının; genel kullanış biçimlerini, başlıca bölge tiplerini, bölgelerin gelecekteki nüfus yoğunluklarını, gerektiğinde yapı yoğunluğunu, çeşitli yerleşme alanlarının gelişme yön ve büyüklükleri ile ilkelerini, ulaşım sistemlerini ve problemlerinin çözümü gibi hususları göstermek ve uygulama imar planlarının hazırlanmasına esas olmak üzere düzenlenen, detaylı bir raporla açıklanan ve raporuyla beraber bütün olan 1/25000 veya 1/5000 olcekli plan olarak tanımlanır Planlama alanı ve yakın çevresi ile alanın bölge veya kent bütünü içindeki konumunu belirlemek üzere eşik analizi, yerinde yapılan incelemeler gibi fiziksel çalışmalarla birlikte, bilimsel tekniklere ve yöntemlere dayalı, yeterli nitelikte ve kapsamda ekonomik, sosyal, kültürel, politik, tarihi, sektörel ve teknolojik araştırmalar yapılır, ilgili kurum ve kuruluşların görüş ve önerileri alınır. Plan ve plan kararları, yapılan inceleme ve araştırma sonuçları değerlendirilerek oluşturulur. Plan raporunda, yapılan tüm inceleme ve araştırmalar, alınan görüş ve öneriler ve yapılan değerlendirmelerle birlikte, planın gerçekleştirilmesini sağlayacak uygulama araçları, kurumsal yapı ve denetim konularına dair ilkeler de yer alır.',
            image: 'https://plus.unsplash.com/premium_photo-1679953782394-050faa36cc5d?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          },
          {
            title: 'Uygulama Imar Plani',
            description: 'Tasdikli halihazır haritalar üzerine kadastral durumu işlenmiş olarak nazım imar planı esaslarına göre çizilen ve çeşitli bölgelerin yapı adalarını, bunların yoğunluk ve düzenini, yolları ve uygulama için gerekli imar uygulama programlarına esas olacak uygulama etaplarını ve diğer bilgileri ayrıntıları ile gösteren 1/1000 olcekli plan olarak tanımlanır.',
            image: 'https://plus.unsplash.com/premium_photo-1675324517011-24d2c741c22f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          },
          {
            title: 'Koruma Amacli Imar Plani',
            description: 'Koruma amaçlı imar plânı; 2863 Sayılı Kültür ve Tabiat Varlıklarını Koruma Kanun uyarınca belirlenen sit alanlarında, alanın etkileşim-geçiş sahasını da göz önünde bulundurarak, kültür ve tabiat varlıklarının sürdürülebilirlik ilkesi doğrultusunda korunması amacıyla arkeolojik, tarihi, doğal, mimarî, demografik, kültürel, sosyo-ekonomik, mülkiyet ve yapılaşma verilerini içeren alan araştırmasına dayalı olarak; hali hazır haritalar üzerine, koruma alanı içinde yaşayan hane halkları ve faaliyet gösteren iş yerlerinin sosyal ve ekonomik yapılarını iyileştiren, istihdam ve katma değer yaratan stratejileri, koruma esasları ve kullanma şartları ile yapılaşma sınırlamalarını, sağlıklaştırma, yenileme alan ve projelerini, uygulama etap ve programlarını, açık alan sistemini, yaya dolaşımı ve taşıt ulaşımını, alt yapı tesislerinin tasarım esasları, yoğunluklar ve parsel tasarımlarını, yerel sahiplilik, uygulamanın finansmanı ilkeleri uyarınca katılımcı alan yönetimi modellerini de içerecek şekilde hazırlanan, hedefler, araçlar, stratejiler ile plânlama kararları, tutumları, plân notları ve açıklama raporu ile bir bütün olan nazım ve uygulama imar plânlarının gerektirdiği ölçekteki plânlardır.',
            image: 'https://plus.unsplash.com/premium_photo-1684450053094-33957b0a5795?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          },
          {
            title: 'Revizyon ve Mevzii İmar Planı',
            description: 'Revizyon Planı: Mevcut Nazım ve Uygulama İmar Planları’nın yenilenmesi ve uygulamasının problem olduğu durumlarda, planın tamamı veya büyük bir kısmının plan yapım tekniklerine uyularak yenilenmesi sonucu elde edilen plandır.\nMevzii Planı:Mevcut planların yerleşmiş nüfus için yetersiz kalması veya yeni yerleşim alanlarının kullanıma açılması gereğinin ve sınırlarının ilgili idarece belirlenmesi halinde, ilgili yönetmeliğin plan yapım kurallarına uyulmak üzere yapımı mümkün olan, yürürlükteki her tür ve ölçekteki plan sınırları dışında, planla bütünleşmeyen konumdaki, sosyal ve teknik altyapı ihtiyaçlarını kendi bünyesinde sağlayan, raporuyla bir bütün olan imar planıdır. Üst ölçekte alınan kararlara uymak zorundadır.',
            image: 'https://plus.unsplash.com/premium_photo-1677672434452-2f16955332e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVuZXdhYmxlJTIwZW5lcmd5JTIwY29uc3RydWN0aW9ufGVufDB8fDB8fHww',
          },
          {
            title: 'Akıllı Kentler',
            description: 'Dijital ikiz uygulamalarının sunduğu gerçek zamanlı analiz ve simülasyon yetenekleri, fiziksel altyapının dijital kopyalarını oluşturarak daha bilinçli ve stratejik kararlar alınmasını sağlıyor. Şehirlerin büyüme ve gelişim planları dijital ikizler sayesinde çeşitli senaryolar altında test edilerek olası sorunlar ve iyileştirme alanları önceden belirlenebiliyor. Bu sayede şehirlerin daha sürdürülebilir ve etkili bir şekilde yönetilmesine olanak tanınıyor. Ayrıca dijital ikizler ile yapılan analizler altyapı yatırımlarının maliyetlerini ve çevresel etkilerini öngörmeye yardımcı oluyor. Böylece akıllı ve bütüncül   şehirler planlanabiliyor.',
            image: 'https://plus.unsplash.com/premium_photo-1681429767128-e451570160d7?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }
        ]
      },
      founder: {
        founderTitle: "",
        founderTitleContent: "",
        founderNameandDescription: "",
        
      },
      about: {
        aboutTitle: "Hakkımızda",
        aboutHeader: "PlanPro olarak, şehir ve bölge planlama ile coğrafi bilgi sistemleri alanında uzmanlaşmış ekibimizle, kaliteli, yenilikçi ve sürdürülebilir çözümler üretmek için çalışıyoruz. Sürdürülebilir, yaşanabilir ve akılcı bir yaklaşımla yalnızca bugünün değil, geleceğin kentlerini de planlıyoruz.",
        aboutMissionTitle: "Misyonumuz",
        aboutMissionContent: "PlanPro olarak, şehir ve bölge planlama ile coğrafi bilgi sistemleri alanında uzmanlaşmış bir ekip ile kaliteli, yenilikçi ve sürdürülebilir çözümler üretmek için çalışıyoruz. Çevresel dengeyi koruyan, toplumsal faydayı en üst düzeye çıkaran, ekonomik gelişimi destekleyen projeler geliştirerek şehirlerin ve bölgelerin potansiyelini ortaya çıkarıyoruz. Modern teknolojileri etkin bir şekilde kullanarak kamu kurumları, özel sektör ve yerel topluluklar için işlevsel ve estetik yaşam alanları tasarlıyoruz. Projelerimizde bilimsel veriye dayalı bir yaklaşımı benimseyerek, hem yerel hem de ulusal düzeyde ihtiyaçlara yönelik özgün çözümler sunuyoruz. İnsan odaklı bir anlayışla, katılımcı planlama süreçlerini teşvik ediyor, kentin ve kentlinin ihtiyaçlarına tam anlamıyla cevap veren projeler ortaya koyuyoruz. Şehirlerin akıllı dönüşüm süreçlerini destekleyen, coğrafi bilgi sistemlerini etkin kullanan, tüm paydaşlarımızla güçlü bir iletişim ve işbirliği içinde çalışmayı temel ilkemiz olarak görüyoruz. PlanPro, yalnızca bugünün değil, geleceğin ihtiyaçlarına da yanıt verecek şekilde sürdürülebilir kentleşme modelleri geliştirmeyi, yaşam kalitesini artırmayı ve bölgelerin ekonomik, sosyal ve kültürel anlamda kalkınmasına katkıda bulunmayı misyon edinmiştir.",
        aboutVisionTitle: "Vizyonumuz",
        aboutVisionContent: "Coğrafi bilgi sistemleri, ileri teknoloji ve katılımcı planlama modellerini benimseyerek, sürdürülebilir, yaşanabilir ve akıllı şehirler yaratmaktır. Yerel kalkınmayı destekleyen, çevre bilincine öncelik veren ve topluma değer katan bir yaklaşımla sektörde fark yaratmayı hedefliyoruz. PlanPro, tüm paydaşları için güvenilir, yenilikçi ve sorumlu bir çözüm ortağı olarak, geleceğin şehirlerini bugünden planlamaktadır.",

      }
    },
  },
  en: {
    translation: {
      navbar: {
        home: "Home",
        about: "About",
        projects: "Projects",
        founder: "Founder",
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
      projects: {
        title: "Our Projects",
        viewDetails: "View Details",
        list: [
          {
            title: "Environmental Plan",
            description: "The Environmental Plan is defined as a plan that determines land-use decisions for housing, industry, agriculture, and transportation in alignment with national and regional planning decisions. It establishes land-use decisions that ensure a balance between conservation and utilization among sectors such as housing, industry, agriculture, tourism, and transportation, as well as the urban and rural structures and developments, while protecting natural and cultural values. Within administratively, spatially, and functionally cohesive boundaries, and in accordance with regional planning decisions where applicable, the plan sets the principles of inter-agency coordination and is prepared at scales of 1/25,000, 1/50,000, 1/100,000, or 1/200,000, including plan notes and a report as an integral whole. Environmental Plans are prepared based on Development Plans and Regional Plans, and serve as a foundation for lower-scale 1/5000 Master Development Plans and 1/1000 Implementation Zoning Plans. According to the planning hierarchy, it is a legal obligation for Master Development Plans and Implementation Zoning Plans at scales of 1/5000 and 1/1000, which follow the Environmental Plan, to comply with the Environmental Plan within the framework of the Zoning Law and relevant regulations.",
            image: "https://images.unsplash.com/photo-1719304627715-bf5720e17d0f?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          {
            title: 'Master Development Plan',
            description: 'Defined as a 1/25,000 or 1/5,000 scale plan, the Master Development Plan is drawn on existing maps, incorporating cadastral data if available, in accordance with regional or environmental plans. It outlines the general usage of land parcels, major zoning types, future population densities of regions, building densities when necessary, development directions and magnitudes of various settlement areas, principles, transportation systems, and solutions to problems. It serves as a basis for the preparation of implementation zoning plans and is explained in detail through a comprehensive report, which together form an integral whole. To determine the planning area, its immediate surroundings, and its position within the regional or urban framework, threshold analysis, on-site physical studies, and scientific and technical methods are utilized. Sufficient and comprehensive economic, social, cultural, political, historical, sectoral, and technological research is conducted, and opinions and suggestions from relevant institutions and organizations are obtained. Plan decisions are formulated by evaluating the results of these studies and analyses. The plan report includes all the conducted studies and analyses, the received opinions and suggestions, and the evaluations, along with principles concerning the implementation tools, institutional structure, and monitoring mechanisms required to realize the plan.',
            image: 'https://plus.unsplash.com/premium_photo-1679953782394-050faa36cc5d?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          },
          {
            title: 'Implementation Zoning Plan',
            description: 'Defined as a 1/1000 scale plan, the Implementation Zoning Plan is drawn on approved current maps with cadastral information incorporated, based on the principles of the Master Development Plan. It provides detailed information on building blocks in various areas, their density and layout, roads, and implementation phases required for zoning application programs, along with other relevant details.',
            image: 'https://plus.unsplash.com/premium_photo-1675324517011-24d2c741c22f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          },
          {
            title: 'Conservation Zoning Plan',
            description: 'The Conservation Zoning Plan is a plan prepared for sites designated under Law No. 2863 on the Protection of Cultural and Natural Assets, taking into account the interaction-transition zones of the area. Its purpose is to preserve cultural and natural assets in line with the principle of sustainability. The plan is based on field research that includes archaeological, historical, natural, architectural, demographic, cultural, socio-economic, ownership, and construction data. It is drawn on current maps and includes strategies aimed at improving the social and economic structures of households and businesses operating within the conservation area. These strategies create employment and added value while establishing conservation principles, usage conditions, construction limitations, health restoration, renewal zones and projects, implementation phases and programs, open space systems, pedestrian circulation and vehicle transportation, infrastructure design principles, densities, and parcel designs. The plan incorporates local ownership and participatory area management models, based on principles for financing implementation. It is prepared as an integrated document comprising goals, tools, strategies, planning decisions, attitudes, plan notes, and explanatory reports, in the scales required by the master and implementation zoning plans.',
            image: 'https://plus.unsplash.com/premium_photo-1684450053094-33957b0a5795?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          },
          {
            title: 'Revision and Local Development Plans',
            description: 'Revision Plan: A plan prepared to revise and renew the existing Master Development Plans and Implementation Zoning Plans when their implementation becomes problematic. It is obtained by renewing the entire plan or a significant portion of it in accordance with plan preparation techniques.\n Local Development Plan: A zoning plan prepared in cases where existing plans are insufficient for the established population or when new settlement areas need to be opened for use. The boundaries of these areas are determined by the relevant authority. The plan is created in compliance with the planning rules outlined in the relevant regulations, applicable to areas outside the boundaries of all existing plans of any type and scale, and not integrated with the existing plan. It independently addresses social and technical infrastructure needs and is accompanied by a report as an integral whole. The plan must comply with higher-level decisions.',
            image: 'https://plus.unsplash.com/premium_photo-1677672434452-2f16955332e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVuZXdhYmxlJTIwZW5lcmd5JTIwY29uc3RydWN0aW9ufGVufDB8fDB8fHww',
          },
          {
            title: 'Smart Cities',
            description: 'The real-time analysis and simulation capabilities offered by digital twin applications enable the creation of digital replicas of physical infrastructure, facilitating more informed and strategic decision-making. Growth and development plans of cities can be tested under various scenarios using digital twins, allowing potential problems and areas for improvement to be identified in advance. This enables cities to be managed more sustainably and effectively. Furthermore, analyses conducted with digital twins help predict the costs and environmental impacts of infrastructure investments. In this way, smart and holistic cities can be planned.',
            image: 'https://plus.unsplash.com/premium_photo-1681429767128-e451570160d7?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }
        ]
      },
      about: {
        aboutTitle: "About Us",
        aboutHeader: "As PlanPro, we work with our expert team specializing in urban and regional planning and geographic information systems to produce high-quality, innovative, and sustainable solutions. With a sustainable, livable, and rational approach, we plan not only the cities of today but also those of the future.",
        aboutMissionTitle: "Our Mission",
        aboutMissionContent: "As PlanPro, we work with a team of experts specializing in urban and regional planning and geographic information systems to develop high-quality, innovative, and sustainable solutions. By preserving environmental balance, maximizing social benefits, and supporting economic growth, we unlock the potential of cities and regions. Utilizing modern technologies effectively, we design functional and aesthetic living spaces for public institutions, the private sector, and local communities. Our projects are guided by a scientific, data-driven approach to provide unique solutions tailored to both local and national needs. With a human-centered perspective, we promote participatory planning processes and create projects that fully address the needs of cities and their residents. Supporting smart urban transformation and leveraging geographic information systems efficiently, we prioritize strong communication and collaboration with all stakeholders. Committed to sustainable urbanization, PlanPro aims to enhance quality of life while contributing to the economic, social, and cultural development of regions, ensuring cities are prepared for both today's and tomorrow’s challenges.",
        aboutVisionTitle: "Our Vision",
        aboutVisionContent: "Geographic information systems embrace advanced technology and participatory planning models to create sustainable, livable, and smart cities. With an approach that supports local development, prioritizes environmental awareness, and adds value to society, we aim to make a difference in the industry. As a reliable, innovative, and responsible solution partner for all stakeholders, PlanPro is planning the cities of the future today.",

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
