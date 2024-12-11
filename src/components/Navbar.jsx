import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';
import { useTranslation } from 'react-i18next'; 
const Navbar = () => {
    const { t, i18n } = useTranslation();
  
    const changeLanguage = (lang) => {
      i18n.changeLanguage(lang);
    };
  
    return (
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            PlanPro
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">{t('navbar.home')}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{t('navbar.about')}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projects">{t('navbar.projects')}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pricing">{t('navbar.pricing')}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">{t('navbar.contact')}</Link>
              </li>
            </ul>
            <div className="ms-3">
              <button onClick={() => changeLanguage('tr')} className="btn btn-link">TR</button>
              <button onClick={() => changeLanguage('en')} className="btn btn-link">EN</button>
            </div>
          </div>
        </div>
      </nav>
    );
  };
  

export default Navbar;
