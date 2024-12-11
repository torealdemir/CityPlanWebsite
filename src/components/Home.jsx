import React from 'react';
import Features from './Features';
import { Link } from 'react-router-dom';
import './Home.css';
import { useTranslation } from 'react-i18next';


const Home = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  
  return (
    <section className="home-section position-relative text-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <img 
              className="img-fluid rounded mb-4" 
              src="https://i.pinimg.com/736x/f1/e0/d3/f1e0d3240681d9d2fedec6540665bf33.jpg" 
              alt="City Planning" 
            />
            <h2 className="display-4">{t('home.home')}</h2>
            <p className='lead mb-4'>{t('home.homecontent')}</p>
            {/* <a href="#features" className="btn btn-primary btn-lg">Learn More</a> */}
          </div>
        </div>
      
        <div className=" text-center">
          <h3 className="font-weight-bold">{t('home.whyus')}</h3>
          <p className="mb-4">{t('home.whyuscontent')}</p>
          
          <ul className="list-unstyled why-choose-list">
            <li className="eco-item">🌱 {t('home.ecofriendly')}</li>
            <li className="transport-item">🚴‍♀️ {t('home.promote')}</li>
            <li className="community-item">🌍 {t('home.community')}</li>
            <li className="green-item">🏞️ {t('home.greenspace')}</li>
          </ul>
          
          <div className="m-4">
            <a href="#services" className="btn btn-secondary me-3 btn-lg">{t('home.ourservices')}</a>
            <Link className="btn btn-outline-light btn-lg mt-3" to="/contact">{t('footer.contactus')}</Link>
          </div>
        </div>
      </div>
      <Features />
    </section>
  );
};

export default Home;
