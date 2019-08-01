import React from 'react';
import { useTranslation } from 'react-i18next';
import Card from 'react-bootstrap/Card';

import Photo from '../image';

import { uniqueId } from 'lodash';
import gitIcon from '../footer/git.svg';


const Exhibition = ({ exhibitions }) => {
  const { t } = useTranslation();
  console.log('exhibitions: ', exhibitions[0].name);
  const exh = exhibitions[0];
  return (
    <div>
      <h1>Exhibitions</h1>
      <Card border="info" style={{ width: '18rem' }}>
        <Card.Header>
          <Photo imgsrc={exh.photo} />
        </Card.Header>
        <Card.Body>
          <Card.Title>{exh.date}</Card.Title>
          <Card.Text>{exh.name}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
  // return (
  //   <section className="our-team">
  //     <h3 className="our-team__title">
  //       <span>{t('our')}</span>
  //       {t('team')}
  //     </h3>
  //     <div className="our-team__list">
  //       {exhibitions.length > 0 && items.map(item => (
  //         <Card className="our-team__item" key={uniqueId()}>
  //           <Card.Img src={gitIcon} alt="avatar" />
  //           <Card.Title style={{ fontSize: '.8em' }}>{item.name}</Card.Title>
  //           <Card.Subtitle style={{ fontSize: '.7em' }}>{item.nickName}</Card.Subtitle>
  //           <Card.Link target="_blank" rel="noopener noreferrer" href={item.git}>
  //             <Card.Img id="our-team__gitIcon" src={gitIcon} alt="Github" />
  //           </Card.Link>
  //         </Card>
  //       ))}
  //     </div>
  //   </section>
  // );
};

export default Exhibition;
