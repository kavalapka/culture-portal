import React from 'react';
import { Link } from 'gatsby';
import { useTranslation } from 'react-i18next';
import { Navbar, Nav, Image } from 'react-bootstrap';
import Translate from '../translate';
import logo from '../../images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  const { t } = useTranslation();
  return (
    <header>
      <Navbar expand="lg">
        <Link to="/"><Navbar.Brand><Image src={logo} /></Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav>
            <div className="wrapper">
              <Nav.Item><Link to="/" activeStyle={{ color: '#A07092' }}>{t('menu.main')}</Link></Nav.Item>
              <Nav.Item><Link to="/search" activeStyle={{ color: '#A07092' }}>{t('menu.search')}</Link></Nav.Item>
            </div>
            <Nav.Item><Translate /></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
