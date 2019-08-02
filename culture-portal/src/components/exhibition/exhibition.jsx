import React from 'react';
import { useTranslation } from 'react-i18next';
import Card from 'react-bootstrap/Card';

import { uniqueId } from 'lodash';
import Photo from '../image';


const Exhibition = ({ exhibitions }) => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t('Exhibitions')}</h1>
      <div className="exhib__group">
        {
        exhibitions.map(exh => (
          <Card className="exhib__card" key={uniqueId()}>
            <Card.Header>
              <Photo imgsrc={exh.photo} />
            </Card.Header>
            <Card.Body className="exhib__desc">
              <Card.Title>{exh.name}</Card.Title>
              <Card.Text>{exh.date}</Card.Text>
            </Card.Body>
          </Card>
        ))
      }
      </div>
    </div>
  );
};

export default Exhibition;
