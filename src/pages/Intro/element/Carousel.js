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
        <img src="https://file.cafe24cos.com/banner-admin-live/upload/manaire1/1769c37c-60fd-46e8-93a9-77ead08c998a.jpeg" />
      </div>
      <div>
        <img src="https://file.cafe24cos.com/banner-admin-live/upload/manaire1/25fcbef6-eeae-4792-c780-c50683404d97.jpeg" />
      </div>
      <div>
        <img src="https://file.cafe24cos.com/banner-admin-live/upload/manaire1/1f3373b8-1f81-4127-b7a8-7bde14107302.jpeg" />
      </div>
      <div>
        <img src="https://file.cafe24cos.com/banner-admin-live/upload/manaire1/0ff42cbb-42be-4ba7-efa6-b134e9d846ae.jpeg" />
      </div>
      <div>
        <img src="https://file.cafe24cos.com/banner-admin-live/upload/manaire1/7532ef59-5223-4c24-84fb-ae1331fc6566.jpeg" />
      </div>
      <div>
        <img src="https://file.cafe24cos.com/banner-admin-live/upload/manaire1/911a791b-f8ba-4a10-dda9-5487828a7c8b.jpeg" />
      </div>
      <div>
        <img src="https://file.cafe24cos.com/banner-admin-live/upload/manaire1/e260f4b0-2d1a-4c79-a599-504ff8e4fab1.jpeg" />
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
