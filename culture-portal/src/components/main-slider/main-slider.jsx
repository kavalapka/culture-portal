import React, { Fragment } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const { Carousel } = require('react-responsive-carousel');

const MainSlider = () => (
  <Fragment>
    <Carousel
      // autoPlay
      // interval={5000}
      transitionTime={2000}
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      showArrows={false}
      swipeable={false}
    >
      <div>
        <img className="main_slider_img" src="https://images.wallpaperscraft.ru/image/fotoapparat_obektiv_optika_141755_1920x1200.jpg" alt="1" />
        <blockquote className="legend slide1">
          <p>«Фотография подбирает факт из жизни, и он будет жить вечно»</p>
          <cite>Рагху Рай</cite>
        </blockquote>
      </div>
      <div>
        <img className="main_slider_img" src="https://images.wallpaperscraft.ru/image/fotoapparat_obektiv_sumka_139250_1920x1200.jpg" alt="2" />
        <blockquote className="legend slide2">
          <p>«Когда Вы фотографируете лицо... вы фотографируете за ним душу»</p>
          <cite>Жан-Люк Годар</cite>
        </blockquote>
      </div>
      <div>
        <img className="main_slider_img" src="https://www.vladtime.ru/uploads/posts/2018-02/1518885831_fuji-x100t-digital-camera_1920x1200_wallpaper.jpg" alt="3" />
        <blockquote className="legend slide3">
          <p>«Фотография – это единственный язык, который может быть понятен в любой точке мира»</p>
          <cite>Бруно Барбе</cite>
        </blockquote>
      </div>
    </Carousel>
  </Fragment>
);

export default MainSlider;
