import React from 'react';
import { useTranslation } from 'react-i18next';
import { Navbar, Nav, Image } from 'react-bootstrap';
import Link from '../Link';
import Translate from '../translate';
import logo from '../../images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  const { t } = useTranslation();
  return (
    <header>
      <Navbar expand="md">
        <Navbar.Brand><Link to="/"><Image src={logo} /></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav>
            <div className="wrapper">
              <Nav.Item><Link to="/" activeStyle={{ color: '#D4D0C3' }} className="menuLink">{t('menu.main')}</Link></Nav.Item>
              <Nav.Item><Link to="/search" activeStyle={{ color: '#D4D0C3' }} className="menuLink">{t('menu.search')}</Link></Nav.Item>
            </div>
            <Nav.Item><Translate /></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
