import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <StyledSlider {...settings}>
      <div>
        <StDiv>
          <StTextBox></StTextBox>
        </StDiv>
      </div>
      <div>
        <StDiv>
          <StTextBox></StTextBox>
        </StDiv>
      </div>
      <div>
        <StDiv>
          <StTextBox></StTextBox>
        </StDiv>
      </div>
      <div>
        <StDiv>
          <StTextBox></StTextBox>
        </StDiv>
      </div>
      <div>
        <StDiv>
          <StTextBox></StTextBox>
        </StDiv>
      </div>
      <div>
        <StDiv>
          <StTextBox></StTextBox>
        </StDiv>
      </div>
    </StyledSlider>
  );
};

export default Carousel;

const StDiv = styled.div`
  position: relative;
  width: 100vw;
  height: 380px;
  background-color: black;
`;
const StTextBox = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 40vw;
  height: 100px;
  background-color: white;
`;

const StyledSlider = styled(Slider)`
  width: 100vw;
  height: 400px;

  .slick-list {
    overflow: hidden;
    text-align: center;
  }
  .slick-dots {
    bottom: 3px;
    z-index: 20;
  }
  .slick-arrow {
    display: flex;
    z-index: 10;
    width: 1vw;
    height: 1vw;
  }

  .slick-prev {
    left: 2vw;
    z-index: 90;
    cursor: pointer;
    &::before {
      color: white;
      content: "<";
    }
  }

  .slick-next {
    right: 2vw;
    cursor: pointer;
    &::before {
      color: white;
      content: ">";
    }
  }
`;
