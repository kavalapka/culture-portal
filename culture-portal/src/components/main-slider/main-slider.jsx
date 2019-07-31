import React, { Fragment } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const { Carousel } = require('react-responsive-carousel');

const MainSlider = () => (
  <Fragment>
    <Carousel
      autoPlay
      interval={5000}
      transitionTime={2000}
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      showArrows={false}
      swipeable={false}
    >
      <div>
        <img src="https://images.wallpaperscraft.ru/image/fotoapparat_obektiv_optika_141755_1920x1200.jpg" alt="2" />
      </div>
      <div>
        <img src="https://images.wallpaperscraft.ru/image/fotoapparat_obektiv_sumka_139250_1920x1200.jpg" alt="1" />
      </div>
      <div>
        <img src="https://www.vladtime.ru/uploads/posts/2018-02/1518885831_fuji-x100t-digital-camera_1920x1200_wallpaper.jpg" alt="3" />
      </div>
    </Carousel>
  </Fragment>
);

export default MainSlider;
