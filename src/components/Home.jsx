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
        {/* Hero Section */}
        <div className="row align-items-center">
          <div className="col-lg-6 text-center text-lg-start">
            <h2 className="display-4 fw-bold">{t('home.home')}</h2>
            <p className="lead mb-4">{t('home.homecontent')}</p>
            <Link to="/services" className="btn btn-secondary me-3">{t('home.ourservices')}</Link>
            <Link to="/contact" className="btn btn-outline-light">{t('footer.contactus')}</Link>
          </div>
          <div className="col-lg-6">
            <img 
              className="img-fluid rounded shadow mb-5" 
              src="https://i.pinimg.com/736x/f1/e0/d3/f1e0d3240681d9d2fedec6540665bf33.jpg" 
              alt="City Planning" 
            />
          </div>
        </div>
      </div>

      {/* Why Us Section */}
      <div className="why-us-section bg-white text-dark py-5">
        <div className="container text-center">
          <h3 className="fw-bold">{t('home.whyus')}</h3>
          <p className="mb-4">{t('home.whyuscontent')}</p>
          <div className="row">
            <div className="col-md-3">
              <div className="card shadow-sm p-3">
                <div className="card-body">
                  <h5>🌱 {t('home.ecofriendly')}</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card shadow-sm p-3">
                <div className="card-body">
                  <h5>🚴‍♀️ {t('home.promote')}</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card shadow-sm p-3">
                <div className="card-body">
                  <h5>🌍 {t('home.community')}</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card shadow-sm p-3">
                <div className="card-body">
                  <h5>🏞️ {t('home.greenspace')}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <Features />
    </section>
  );
};

export default Home;
