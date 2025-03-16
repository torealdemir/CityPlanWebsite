import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import { useTranslation } from 'react-i18next'; 

const Footer = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };


  return (
    <footer className="bg-dark text-white py-4">
      <div className="container text-center text-md-start">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase fw-bold">PlanPro</h5>
            <p>
              {t('footer.description')}
            </p>
          </div>

          <div className="col-md-2 mb-3">
            <h6 className="text-uppercase">{t('footer.links')}</h6>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white">{t('navbar.home')}</Link></li>
              <li><Link to="/about" className="text-white">{t('navbar.about')}</Link></li>
              <li><Link to="/projects" className="text-white">{t('navbar.projects')}</Link></li>
              <li><Link to="/contact" className="text-white">{t('navbar.contact')}</Link></li>
            </ul>
          </div>

          <div className="col-md-3 mb-3">
            <h6 className="text-uppercase">{t('footer.contactus')}</h6>
            <p>Email: info@planproplanlama.com</p>
            <p>Phone: +90 543 940 05 94</p>
          </div>

          <div className="col-md-3 mb-3 text-center">
            <h6 className="text-uppercase">{t('footer.followus')}</h6>
            <a href="https://twitter.com" className="text-white me-3" aria-label="Twitter">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="https://facebook.com" className="text-white me-3" aria-label="Facebook">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://linkedin.com" className="text-white" aria-label="LinkedIn">
              <i className="bi bi-linkedin"></i>
            </a>
            <div>
              <img
              src={logo}
              alt='company logo'
              className='img-fluid ml-4'
               />
            </div>
          </div>
        </div>

        <div className="text-center mt-3">
          <p className="mb-0">© {new Date().getFullYear()}{t('footer.privacy')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
