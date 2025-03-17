import React from 'react';
import './About.css'; // Import custom styles
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    }

    return (
        <section className="about-section py-5 bg-light text-dark">
            <div className="container">
                <img className='img-fluid' src='https://images.unsplash.com/photo-1650627196344-9b8be77537c3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                <h2 className="text-center mb-4 display-4">{t('about.aboutTitle')}</h2>
                <p className="text-center mb-5 lead">
                {t('about.aboutHeader')}
                </p>
                <h3 className="mb-3 h2">{t('about.aboutVisionTitle')}</h3>
                <p className='mb-4'>{t('about.aboutVisionContent')}</p>

                <h3 className="mb-3 h2">{t('about.aboutMissionTitle')}</h3>
                <p className="mb-4">
                    {t('about.aboutMissionContent')}
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