import React, { Fragment } from 'react';
import i18n from 'i18next';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './gallery.css';
import { uniqueId } from 'lodash';
import Photo from '../image';


const { Carousel } = require('react-responsive-carousel');

const Gallery = (props) => {
  const { data } = props;
  let photoGallery;
  switch (i18n.language) {
    case 'ru':
      photoGallery = 'Фотогалерея';
      break;
    case 'by':
      photoGallery = 'Фотагалерэя';
      break;
    case 'en':
      photoGallery = 'Photo Gallery';
      break;
    default:
      photoGallery = 'Фотогалерея';
      break;
  }
  return (
    <Fragment>
      <h3 className="photo_gallery">{photoGallery}</h3>
      <Carousel
        // width="700px"
        dynamicHeight
        transitionTime={1000}
        emulateTouch
        infiniteLoop
        useKeyboardArrows
        showThumbs={false}
        showStatus={false}
      >
        {data.length && data.map(item => (
          <div key={uniqueId()}>
            <Photo className="slide" imgsrc={item} alt={item} />
          </div>
        ))
        }
        {/* <img src="https://www.znyata.com/images/stories/line/anempodystov/michal-10.jpg" alt="22" /> */}
      </Carousel>
    </Fragment>
  );
};

export default Gallery;
