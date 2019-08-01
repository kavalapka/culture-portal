import React from 'react';
import Card from 'react-bootstrap/Card';
import klinov from '../../assets/works/klinov.jpeg';
import animpadistov from '../../assets/works/animpadistov.jpg';
import borozna from '../../assets/works/borozna.jpg';
import bulgak from '../../assets/works/bulgak.jpg';
import dashkevich from '../../assets/works/dashkevich.jpg';

const AutorDescription = (props) => {
  const { name, birthDate, death, science, authorImage } = props.data;
  let photo = '';
  switch (authorImage) {
    case 'animpadistov.jpg':
      photo = animpadistov;
      break;
    case 'borozna.jpg':
      photo = borozna;
      break;
    case 'bulgak.jpg':
      photo = bulgak;
      break;
    case 'dashkevich.jpg':
      photo = dashkevich;
      break;
    default:
      photo = klinov;
      break;
  }
  return (
    <section className="author-description_wrapper">
      <Card id="author-description_block">
        <Card.Img id="author-description_photo" variant="top" src={photo} alt="author photo" />
        <Card.Body>
          <Card.Title id="author-description_title">{name}</Card.Title>
          <Card.Text style={{ marginBottom: '0' }}>{`( ${birthDate} - ${death} )`}</Card.Text>
          <Card.Text>{science}</Card.Text>
        </Card.Body>
      </Card>
    </section>
  );
};

export default AutorDescription;