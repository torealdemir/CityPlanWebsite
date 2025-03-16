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
    <nav className="navbar navbar-expand-lg bg-white shadow-sm ">
      <div className="container-fluid">
        {/* Logo and Company Name */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} className='company-logo img-fluid' alt="PlanPro Logo" style={{ height: '100px', marginRight: '10px' }} />
          <span className="company-name">Plan<span style={{ color: '#oklch(0.488 0.243 264.376)' }}>Pro</span></span>
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
          {/* Navigation Links */}
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
              <Link className="nav-link" to="/founder">{t('navbar.founder')}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">{t('navbar.contact')}</Link>
            </li>
          </ul>
          {/* Language Dropdown */}
          <div className="ms-3 dropdown">
            <button
              className="btn btn-outline-secondary dropdown-toggle"
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
