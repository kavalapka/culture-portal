/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import propTypes from 'prop-types';


const Author = ({ author, t }) => (
  <Card style={{ width: '18rem' }}>
    <img src={`../${author.photo}`} alt="photo" />
    <Card.Body>
      <Card.Title>{author.name}</Card.Title>
      <Card.Text>{author['birth-date']}</Card.Text>
      <Card.Text>{author['birth-place']}</Card.Text>
      <Card.Text>{author.science}</Card.Text>
      <Button variant="primary">{t('more')}</Button>
    </Card.Body>
  </Card>
);

Author.propTypes = {
  author: propTypes.objectOf(propTypes.object),
  t: propTypes.func.isRequired,
};

Author.defaultProps = {
  author: {},
};

export default Author;
