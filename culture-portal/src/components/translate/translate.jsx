import React from 'react';
import Form from 'react-bootstrap/Form';
import { useTranslation } from 'react-i18next';
import { navigate } from 'gatsby';

const Translate = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (locale) => {
    i18n.changeLanguage(locale);
    // eslint-disable-next-line no-undef
    const page = window.location.pathname.split('/').slice(2).join('/');
    navigate(`/${locale}/${page}`);
  };

  const handleChange = (event) => {
    changeLanguage(`${event.target.value}`);
  };

  return (
    <Form className="select-language">
      <Form.Group>
        <Form.Control as="select" onChange={handleChange} value={i18n.language}>
          <option value="ru">{t('russian')}</option>
          <option value="by">{t('belorussian')}</option>
          <option value="en">{t('english')}</option>
        </Form.Control>
      </Form.Group>
    </Form>
  );
};

export default Translate;
