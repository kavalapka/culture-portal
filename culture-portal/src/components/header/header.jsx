import React from 'react';
import { Link } from 'gatsby';
import { useTranslation } from 'react-i18next';
import Translate from '../translate/translate';
import logo from '../../images/logo.png';
import 'bootstrap/dist/css/bootstrap.css';

const Header = () => {
  const { t } = useTranslation();
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
            <Translate />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
