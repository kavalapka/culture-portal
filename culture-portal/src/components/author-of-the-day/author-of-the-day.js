import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useTranslation } from 'react-i18next';
import { Link } from 'gatsby';
import photo from '../../assets/photo/klinov.jpeg';

const AuthorOfTheDay = () => {
  const id = 1;
  const { t } = useTranslation();
  const data = t(`authors.${id}`, { returnObjects: true });
  return (
    <section id="author-of-the-day">
      <h2 id="author-of-the-day__title">{t('author-of-the-day')}</h2>
      <Card id="author__block">
        <Card.Img variant="top" id="author__photo" src={photo} />
        <Card.Body id="author__description">
          <Card.Title id="author__title">{data.name}</Card.Title>
          <Card.Text>{data['birth-date']}</Card.Text>
          <Card.Text>{data.science}</Card.Text>
          <Button id="author__button" style={{ margin: 'auto' }} variant="primary">
            <Link to="/page-2/" id="author__link">{t('more')}</Link>
          </Button>
        </Card.Body>
      </Card>
    </section>
  );
};

export default AuthorOfTheDay;
