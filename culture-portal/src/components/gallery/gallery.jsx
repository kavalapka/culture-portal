import React, { Fragment } from 'react';
import i18n from 'i18next';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './gallery.css';

const { Carousel } = require('react-responsive-carousel');

const Gallery = () => {
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
        width="100%"
        transitionTime={1000}
        emulateTouch
        infiniteLoop
        useKeyboardArrows
        showThumbs={false}
        showStatus={false}
      >
        <div>
          <img src="http://bdam.by/upload/iblock/610/6108616d09363f45586ee62ada16d4ec.jpg" alt="1" />
        </div>
        {/* <div>
          <img src="http://bdam.by/upload/iblock/00b/00b842074f982d0499be2cd9ed20d12a.jpg" alt="2" />
        </div>
        <div>
          <img src="http://bdam.by/upload/iblock/143/1436780d55553b4d0b4a7d4c36e351a8.jpg" alt="3" />
        </div> */}
        <div>
          <img src="http://bdam.by/upload/iblock/3e6/3e625a9f0e938280091a01651e066b24.jpg" alt="4" />
        </div>
        <div>
          <img src="http://bdam.by/upload/iblock/a21/a21a9a313c9a88c3e830fb90ab7a0b20.jpg" alt="5" />
        </div>
        <div>
          <img src="http://bdam.by/upload/iblock/9f8/9f80864a68b319c40b2911b782069af7.jpg" alt="6" />
        </div>
        <div>
          <img src="http://artkurator.com/content/thumb/000_21a_1000.jpg" alt="7" />
        </div>
      </Carousel>
    </Fragment>
  );
};

export default Gallery;
