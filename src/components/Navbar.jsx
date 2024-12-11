import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';
import { useTranslation } from 'react-i18next'; 

const Navbar = () => {
  const { t, i18n } = useTranslation();

  // Get current language and corresponding flag
  const currentLanguage = i18n.language;
  const currentFlag = currentLanguage === 'tr' 
    ? "https://flagcdn.com/w40/tr.png" 
    : "https://flagcdn.com/w40/gb.png";

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="PlanPro Logo" style={{ height: '40px' }} />
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
          <div className="ms-3 dropdown">
            <button
              className="btn btn-light dropdown-toggle"
              type="button"
              id="languageDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img 
                src={currentFlag} 
                alt="Current Language Flag"
                style={{ width: '20px', marginRight: '5px' }}
              />
              {currentLanguage === 'tr' ? 'Türkçe' : 'English'}
            </button>
            <ul className="dropdown-menu" aria-labelledby="languageDropdown">
              <li>
                <button 
                  className="dropdown-item d-flex align-items-center" 
                  onClick={() => changeLanguage('tr')}
                >
                  <img 
                    src="https://flagcdn.com/w40/tr.png" 
                    alt="Turkish Flag" 
                    style={{ width: '20px', marginRight: '10px' }}
                  />
                  Türkçe
                </button>
              </li>
              <li>
                <button 
                  className="dropdown-item d-flex align-items-center" 
                  onClick={() => changeLanguage('en')}
                >
                  <img 
                    src="https://flagcdn.com/w40/gb.png" 
                    alt="UK Flag" 
                    style={{ width: '20px', marginRight: '10px' }}
                  />
                  English
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
