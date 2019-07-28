import React from 'react';
import { Link } from 'gatsby';
import logo from '../../images/logo.png';
import 'bootstrap/dist/css/bootstrap.css';
import './header.scss';

const Header = () => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-light bottom-sticky">
      <img src={logo} alt="logo" className="navbar-brand mb-0" />
      <div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainMenu" aria-expanded="false">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="mainMenu">
          <ul className="navbar-nav mr-auto ml-auto mt-2 mt-lg-0">
            <li className="nav-item active mb-0"><Link to="/" activeStyle={{ color: '#fff' }}>Главная</Link></li>
            <li className="nav-item mb-0"><Link to="/search/" activeStyle={{ color: '#fff' }}>Поиск</Link></li>
          </ul>
          <select className="form-control">
            <option value="">Английский</option>
            <option value="">Белорусский</option>
            <option value="">Русский</option>
          </select>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
