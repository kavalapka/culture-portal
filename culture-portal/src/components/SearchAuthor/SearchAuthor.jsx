/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import propTypes from 'prop-types';
import Link from '../Link';
import Photo from '../image';

const Author = ({ author, t }) => (
  <Card className="authorCard">
    <Photo className="photoCard blog-post mb-0" imgsrc={author.authorImage} />
    <Card.Body className="p-0">
      <Card.Title className="titleCard">{author.name}</Card.Title>
      <Card.Text>
        {author.birthDate}
        {' '}
(
        {author.birthPlace}
)
      </Card.Text>
      <Card.Text>{author.science}</Card.Text>
      <Button variant="primary" className="buttonCard"><Link to={author.path}>{t('more')}</Link></Button>
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
