import React, { Fragment } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useTranslation } from 'react-i18next';

const { Carousel } = require('react-responsive-carousel');

const MainSlider = () => {
  const { t } = useTranslation();
  const data = t('blockquotes', { returnObjects: true });
  return (
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
          <img className="main_slider_img" src="https://images.wallpaperscraft.ru/image/fotoapparat_obektiv_optika_141755_1920x1200.jpg" alt="1" />
          <blockquote className="legend slide1">
            <p>{data.first.quote}</p>
            <cite>{data.first.author}</cite>
          </blockquote>
        </div>
        <div>
          <img className="main_slider_img" src="https://images.wallpaperscraft.ru/image/fotoapparat_obektiv_sumka_139250_1920x1200.jpg" alt="2" />
          <blockquote className="legend slide2">
            <p>{data.second.quote}</p>
            <cite>{data.second.author}</cite>
          </blockquote>
        </div>
        <div>
          <img className="main_slider_img" src="https://www.vladtime.ru/uploads/posts/2018-02/1518885831_fuji-x100t-digital-camera_1920x1200_wallpaper.jpg" alt="3" />
          <blockquote className="legend slide3">
            <p>{data.third.quote}</p>
            <cite>{data.third.author}</cite>
          </blockquote>
        </div>
      </Carousel>
    </Fragment>
  );
};

export default MainSlider;
