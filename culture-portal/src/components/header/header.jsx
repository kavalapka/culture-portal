/* eslint-disable no-undef */
import React from 'react';
import { Link } from 'gatsby';
import { useTranslation } from 'react-i18next';
import './i18n';
import logo from '../../images/logo.png';
import 'bootstrap/dist/css/bootstrap.css';

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (locale) => {
    i18n.changeLanguage(locale);
  };

  const handleChange = (event) => {
    changeLanguage(`${event.target.value}`);
    sessionStorage.setItem('language', event.target.value);
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bottom-sticky">
        <img src={logo} alt="logo" className="navbar-brand mb-0" />
        <div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainMenu" aria-expanded="false">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="mainMenu">
            <ul className="navbar-nav mr-auto ml-auto mt-2 mt-lg-0">
              <li className="nav-item active mb-0"><Link to="/" activeStyle={{ color: '#fff' }}>{t('menu.main')}</Link></li>
              <li className="nav-item mb-0"><Link to="/search/" activeStyle={{ color: '#fff' }}>{t('menu.search')}</Link></li>
            </ul>
            <select value={sessionStorage.length === 0 ? 'ru' : sessionStorage.getItem('language')} className="form-control" onChange={handleChange}>
              <option value="ru">{t('russian')}</option>
              <option value="be">{t('belorussian')}</option>
              <option value="en">{t('english')}</option>
            </select>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
