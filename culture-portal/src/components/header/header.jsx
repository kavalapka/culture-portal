/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'gatsby';
import Translate from '../translate';
import logo from '../../images/logo.png';
import 'bootstrap/dist/css/bootstrap.css';

const Header = () => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link to="/"><img src={logo} alt="logo" className="navbar-brand mb-0" /></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto mt-4">
          <li className="nav-item active">
            <Link to="/" activeStyle={{ color: '#fff' }}>
              Главная
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/search" activeStyle={{ color: '#fff' }}>Поиск</Link>
          </li>
          <li className="nav-item"><Translate /></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;
