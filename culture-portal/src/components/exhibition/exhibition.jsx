import React from 'react';
import { useTranslation } from 'react-i18next';
import Card from 'react-bootstrap/Card';

import { uniqueId } from 'lodash';
import Photo from '../image';

import gitIcon from '../footer/git.svg';


const Exhibition = ({ exhibitions }) => {
  const { t } = useTranslation();
  console.log('exhibitions: ', exhibitions[0].name);

  return (
    <div>
      <h1>Exhibitions</h1>
      <div className="exhib__group">
        {
        exhibitions.map(exh => (
          <Card className="exhib__card" key={uniqueId()}>
            <Card.Header>
              <Photo imgsrc={exh.photo} />
            </Card.Header>
            <Card.ImgOverlay className="exhib__overlay">
              <Card.Title>{exh.name}</Card.Title>
              <Card.Text>{exh.date}</Card.Text>
            </Card.ImgOverlay>
          </Card>
        ))
      }
      </div>
    </div>
  );
  // return (
  //   <section className="our-team">
  //     <h3>
  //       Exhibitions
  //     </h3>
  //     <div className="our-team__list">
  //       {exhibitions.length > 0 && exhibitions.map(item => (
  //         <Card className="our-team__item" key={uniqueId()}>
  //           <Card.Header>
  //             <Photo imgsrc={item.photo} />
  //           </Card.Header>
  //           <Card.Title style={{ fontSize: '.8em' }}>{item.name}</Card.Title>
  //           <Card.Subtitle style={{ fontSize: '.7em' }}>{item.date}</Card.Subtitle>
  //         </Card>
  //       ))}
  //     </div>
  //   </section>
  // );
};

export default Exhibition;
