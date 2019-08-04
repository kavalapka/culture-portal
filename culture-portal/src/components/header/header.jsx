import React from 'react';
import { useTranslation, withTranslation } from 'react-i18next';
import { Navbar, Nav, Image } from 'react-bootstrap';
import { navigate } from 'gatsby';
import Link from '../Link';
import Translate from '../translate';
import logo from '../../images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../translate/i18n';


class Header extends React.Component {
  componentDidMount() {
    const { i18n } = this.props;
    i18n.on('languageChanged', () => {
      console.log('LANGUAGE CHANGED');
      this.setState({});
    });

    const lang = window.location.pathname.split('/')[1];
    i18n.changeLanguage(lang);
    console.log(`DETECTED: ${lang}`, i18n.language);
    const page = window.location.pathname.split('/').slice(2).join('/');
    navigate(`/${lang}/${page}`);
  }

  render() {
    const { t, i18n } = this.props;
    console.log(`Render: ${i18n.language}`);
    return (
      <header>
        <Navbar expand="md">
          <Navbar.Brand><Link to="/"><Image src={logo} /></Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse id="navbar">
            <Nav>
              <div className="wrapper">
                <Nav.Item><Link to="/" activeStyle={{ color: '#40589A' }} className="menuLink">{t('menu.main')}</Link></Nav.Item>
                <Nav.Item><Link to="/search" activeStyle={{ color: '#40589A' }} className="menuLink">{t('menu.search')}</Link></Nav.Item>
              </div>
              <Nav.Item><Translate /></Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}

export default withTranslation()(Header);
