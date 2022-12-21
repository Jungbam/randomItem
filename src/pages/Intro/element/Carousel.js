import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    speed: 700,
    slidesToScroll: 1,
    arrows: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    autoplay: true,
  };
  return (
    <StyledSlider {...settings}>
      <div>
        <img src="./image/img-02.jpg" />
      </div>
      <div>
        <img src="./image/img-03.jpg" />
      </div>
      <div>
        <img src="./image/img-04.jpg" />
      </div>
      <div>
        <img src="./image/img-05.jpg" />
      </div>
      <div>
        <img src="./image/img-06.jpg" />
      </div>
      <div>
        <img src="./image/img-07.jpg" />
      </div>
      <div>
        <img src="./image/img-08.jpg" />
      </div>
    </StyledSlider>
  );
};

export default Carousel;

const StyledSlider = styled(Slider)`
  /* background-color: gray; */
  width: 100%;
  margin-bottom: 70px;

  img {
    margin: auto;
    height: 42vw;
  }

  .slick-prev {
    left: 2vw;
    z-index: 90;
    cursor: pointer;
    &::before {
      color: white;
      content: url('https://www.cslfit.com/plain/img/prev_white.png');
    }
  }

  .slick-next {
    right: 2vw; // 100vw;
    cursor: pointer;
    &::before {
      color: white;
      content: url('https://www.cslfit.com/plain/img/next_white.png');
    }
  }
`;
