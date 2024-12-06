import React from 'react';
import './Projects.css'
// Sample project data
const projectsData = [
  {
    id: 1,
    title: 'Çevre Düzeni Planı',
    description: 'Ülke ve bölge plan kararlarına uygun olarak konut, sanayi, tarım ulaşım gibi yerleşme ve arazi kullanılması kararlarını belirleyen plan olaraktanımlanan Çevre Düzeni Planı, konut, sanayi, tarım, turizm, ulaşım gibi sektörlerile kentsel ve kırsal yapı ve gelişmeyle doğal ve kültürel değerler arasında koruma kullanma dengesini sağlayan arazi kullanma kararlarını belirleyen yönetsel, mekansal ve işlevsel bütünlük gösteren sınırlar içinde varsa bölge planı kararlarına uygun olarak yapılan, idareler arası koordinasyon esaslarını belirleyen 1/25.000, 1/50.000, 1/100.000, 1/200.000 ölçeklerde olan plan notları ve raporuyla bir bütün olan planı ifade eder. Çevre Düzeni Planları, Kalkınma Planları ve Bölge Planları esas alınarak yapılır, altölçekli 1/5000 Nazım İmar Planı, 1/1000 Uygulama İmar Planlarına esas teşkil eder. Plan hiyerarşisinde Çevre Düzeni Planından sonra gelen 1/5000 ve 1/1000 ölçekli Nazım İmar Planı ve Uygulama İmar Planlarının İmar Kanunu ve ilgili mevzuat çerçevesinde Çevre Düzeni Planına uygun olması yasal bir zorunluluktur.',
    image: 'https://images.unsplash.com/photo-1719304627715-bf5720e17d0f?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '#',
  },
  {
    id: 2,
    title: 'Nazim Imar Plani',
    description: 'Bölge veya çevre düzeni planlarına uygun olarak halihazır haritalar üzerine, yine varsa kadastral durumu işlenmiş olarak çizilen ve arazi parçalarının; genel kullanış biçimlerini, başlıca bölge tiplerini, bölgelerin gelecekteki nüfus yoğunluklarını, gerektiğinde yapı yoğunluğunu, çeşitli yerleşme alanlarının gelişme yön ve büyüklükleri ile ilkelerini, ulaşım sistemlerini ve problemlerinin çözümü gibi hususları göstermek ve uygulama imar planlarının hazırlanmasına esas olmak üzere düzenlenen, detaylı bir raporla açıklanan ve raporuyla beraber bütün olan 1/25000 veya 1/5000 olcekli plan olarak tanımlanır Planlama alanı ve yakın çevresi ile alanın bölge veya kent bütünü içindeki konumunu belirlemek üzere eşik analizi, yerinde yapılan incelemeler gibi fiziksel çalışmalarla birlikte, bilimsel tekniklere ve yöntemlere dayalı, yeterli nitelikte ve kapsamda ekonomik, sosyal, kültürel, politik, tarihi, sektörel ve teknolojik araştırmalar yapılır, ilgili kurum ve kuruluşların görüş ve önerileri alınır. Plan ve plan kararları, yapılan inceleme ve araştırma sonuçları değerlendirilerek oluşturulur. Plan raporunda, yapılan tüm inceleme ve araştırmalar, alınan görüş ve öneriler ve yapılan değerlendirmelerle birlikte, planın gerçekleştirilmesini sağlayacak uygulama araçları, kurumsal yapı ve denetim konularına dair ilkeler de yer alır.',
    image: 'https://plus.unsplash.com/premium_photo-1679953782394-050faa36cc5d?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '#',
  },
  {
    id: 3,
    title: 'Uygulama Imar Plani',
    description: 'Tasdikli halihazır haritalar üzerine kadastral durumu işlenmiş olarak nazım imar planı esaslarına göre çizilen ve çeşitli bölgelerin yapı adalarını, bunların yoğunluk ve düzenini, yolları ve uygulama için gerekli imar uygulama programlarına esas olacak uygulama etaplarını ve diğer bilgileri ayrıntıları ile gösteren 1/1000 olcekli plan olarak tanımlanır.',
    image: 'https://plus.unsplash.com/premium_photo-1675324517011-24d2c741c22f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '#',
  },
  {
    id: 4,
    title: 'Koruma Amacli Imar Plani',
    description: 'Koruma amaçlı imar plânı; 2863 Sayılı Kültür ve Tabiat Varlıklarını Koruma Kanun uyarınca belirlenen sit alanlarında, alanın etkileşim-geçiş sahasını da göz önünde bulundurarak, kültür ve tabiat varlıklarının sürdürülebilirlik ilkesi doğrultusunda korunması amacıyla arkeolojik, tarihi, doğal, mimarî, demografik, kültürel, sosyo-ekonomik, mülkiyet ve yapılaşma verilerini içeren alan araştırmasına dayalı olarak; hali hazır haritalar üzerine, koruma alanı içinde yaşayan hane halkları ve faaliyet gösteren iş yerlerinin sosyal ve ekonomik yapılarını iyileştiren, istihdam ve katma değer yaratan stratejileri, koruma esasları ve kullanma şartları ile yapılaşma sınırlamalarını, sağlıklaştırma, yenileme alan ve projelerini, uygulama etap ve programlarını, açık alan sistemini, yaya dolaşımı ve taşıt ulaşımını, alt yapı tesislerinin tasarım esasları, yoğunluklar ve parsel tasarımlarını, yerel sahiplilik, uygulamanın finansmanı ilkeleri uyarınca katılımcı alan yönetimi modellerini de içerecek şekilde hazırlanan, hedefler, araçlar, stratejiler ile plânlama kararları, tutumları, plân notları ve açıklama raporu ile bir bütün olan nazım ve uygulama imar plânlarının gerektirdiği ölçekteki plânlardır.',
    image: 'https://plus.unsplash.com/premium_photo-1684450053094-33957b0a5795?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '#',
  },
  {
    id: 5,
    title: 'Revizyon ve Mevzii İmar Planı',
    description: 'Revizyon Planı: Mevcut Nazım ve Uygulama İmar Planları’nın yenilenmesi ve uygulamasının problem olduğu durumlarda, planın tamamı veya büyük bir kısmının plan yapım tekniklerine uyularak yenilenmesi sonucu elde edilen plandır.\nMevzii Planı:Mevcut planların yerleşmiş nüfus için yetersiz kalması veya yeni yerleşim alanlarının kullanıma açılması gereğinin ve sınırlarının ilgili idarece belirlenmesi halinde, ilgili yönetmeliğin plan yapım kurallarına uyulmak üzere yapımı mümkün olan, yürürlükteki her tür ve ölçekteki plan sınırları dışında, planla bütünleşmeyen konumdaki, sosyal ve teknik altyapı ihtiyaçlarını kendi bünyesinde sağlayan, raporuyla bir bütün olan imar planıdır. Üst ölçekte alınan kararlara uymak zorundadır.',
    image: 'https://plus.unsplash.com/premium_photo-1677672434452-2f16955332e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVuZXdhYmxlJTIwZW5lcmd5JTIwY29uc3RydWN0aW9ufGVufDB8fDB8fHww',
    link: '',
  },
  {
    id: 6,
    title: 'Akıllı Kentler',
    description: 'Dijital ikiz uygulamalarının sunduğu gerçek zamanlı analiz ve simülasyon yetenekleri, fiziksel altyapının dijital kopyalarını oluşturarak daha bilinçli ve stratejik kararlar alınmasını sağlıyor. Şehirlerin büyüme ve gelişim planları dijital ikizler sayesinde çeşitli senaryolar altında test edilerek olası sorunlar ve iyileştirme alanları önceden belirlenebiliyor. Bu sayede şehirlerin daha sürdürülebilir ve etkili bir şekilde yönetilmesine olanak tanınıyor. Ayrıca dijital ikizler ile yapılan analizler altyapı yatırımlarının maliyetlerini ve çevresel etkilerini öngörmeye yardımcı oluyor. Böylece akıllı ve bütüncül   şehirler planlanabiliyor.',
    image: 'https://plus.unsplash.com/premium_photo-1681429767128-e451570160d7?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '#',
  },
];

const Projects = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4 pt-3">Our Projects</h2>
        <div className="row">
          {projectsData.map(project => (
            <div className="col-md-6 col-lg-4 mb-4 d-flex align-items-stretch" key={project.id}>
              <div className="card project-card w-100" style={{ minHeight: '400px' }}>
                <img 
                  src={project.image} 
                  className="card-img-top" 
                  alt={project.title} 
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a href={project.link} className="btn btn-primary mt-auto">View Details</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
