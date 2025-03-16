import React from 'react';
import './About.css'; // Import custom styles

const About = () => {
    return (
        <section className="about-section py-5 bg-light text-dark">
            <div className="container">
                <img className='img-fluid' src='https://images.unsplash.com/photo-1650627196344-9b8be77537c3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                <h2 className="text-center mb-4 display-4">Hakkımızda</h2>
                <p className="text-center mb-5 lead">
                PlanPro olarak, şehir ve bölge planlama ile coğrafi bilgi sistemleri alanında uzmanlaşmış ekibimizle, kaliteli, yenilikçi ve sürdürülebilir çözümler üretmek için çalışıyoruz. Sürdürülebilir, yaşanabilir ve akılcı bir yaklaşımla yalnızca bugünün değil, geleceğin kentlerini de planlıyoruz.
                </p>
                <h3 className="mb-3 h2">Vizyonumuz</h3>
                <p className='mb-4'>Coğrafi bilgi sistemleri, ileri teknoloji ve katılımcı planlama modellerini benimseyerek, sürdürülebilir, yaşanabilir ve akıllı şehirler yaratmaktır. Yerel kalkınmayı destekleyen, çevre bilincine öncelik veren ve topluma değer katan bir yaklaşımla sektörde fark yaratmayı hedefliyoruz. PlanPro, tüm paydaşları için güvenilir, yenilikçi ve sorumlu bir çözüm ortağı olarak, geleceğin şehirlerini bugünden planlamaktadır.</p>

                <h3 className="mb-3 h2">Misyonumuz</h3>
                <p className="mb-4">
                    PlanPro olarak, şehir ve bölge planlama ile coğrafi bilgi sistemleri alanında uzmanlaşmış bir ekip ile kaliteli, yenilikçi ve sürdürülebilir çözümler üretmek için çalışıyoruz. Çevresel dengeyi koruyan, toplumsal faydayı en üst düzeye çıkaran, ekonomik gelişimi destekleyen projeler geliştirerek şehirlerin ve bölgelerin potansiyelini ortaya çıkarıyoruz. Modern teknolojileri etkin bir şekilde kullanarak kamu kurumları, özel sektör ve yerel topluluklar için işlevsel ve estetik yaşam alanları tasarlıyoruz.
                    Projelerimizde bilimsel veriye dayalı bir yaklaşımı benimseyerek, hem yerel hem de ulusal düzeyde ihtiyaçlara yönelik özgün çözümler sunuyoruz. İnsan odaklı bir anlayışla, katılımcı planlama süreçlerini teşvik ediyor, kentin ve kentlinin ihtiyaçlarına tam anlamıyla cevap veren projeler ortaya koyuyoruz. Şehirlerin akıllı dönüşüm süreçlerini destekleyen, coğrafi bilgi sistemlerini etkin kullanan, tüm paydaşlarımızla güçlü bir iletişim ve işbirliği içinde çalışmayı temel ilkemiz olarak görüyoruz.
                    PlanPro, yalnızca bugünün değil, geleceğin ihtiyaçlarına da yanıt verecek şekilde sürdürülebilir kentleşme modelleri geliştirmeyi, yaşam kalitesini artırmayı ve bölgelerin ekonomik, sosyal ve kültürel anlamda kalkınmasına katkıda bulunmayı misyon edinmiştir.
                </p>
                

                <h3 className="mb-3 h2">Our Approach</h3>
                <p className="mb-4">
                    At <strong>ProPlan</strong>, we take a comprehensive approach to city planning. We believe that every project starts with understanding the unique character of the community. By engaging with local stakeholders and residents, we gather insights that inform our planning process. Our methodology includes:
                </p>

                <ul className="list-unstyled mb-5">
                    <li>📣 <strong>Community Engagement</strong>: Prioritizing the voices of the community through workshops and surveys.</li>
                    <li>♻️ <strong>Sustainability</strong>: Minimizing environmental impact with green infrastructure and energy-efficient solutions.</li>
                    <li>🚀 <strong>Innovation</strong>: Using the latest technology to enhance connectivity and livability.</li>
                    <li>🌐 <strong>Equity and Inclusion</strong>: Promoting equity and ensuring marginalized voices are heard.</li>
                </ul>

                

               

                <h3 className="mb-3 h2">Join Us</h3>
                <p className="lead">
                    We invite you to join us in our mission to build sustainable cities for future generations. Together, we can create urban spaces that thrive.
                </p>
            </div>
        </section>
    );
};

export default About;