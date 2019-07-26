import React from 'react';
import Form from 'react-bootstrap/Form';
import { useTranslation } from 'react-i18next';

const Translate = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (locale) => {
    i18n.changeLanguage(locale);
  };

  const handleChange = (event) => {
    changeLanguage(`${event.target.value}`);
  };

  return (
    <Form className="select-language">
      <Form.Group>
        <Form.Control as="select" onChange={handleChange}>
          <option value="ru">{t('russian')}</option>
          <option value="be">{t('belorussian')}</option>
          <option value="en">{t('english')}</option>
        </Form.Control>
      </Form.Group>
    </Form>
  );
};

export default Translate;
