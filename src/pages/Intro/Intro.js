import React from "react";
import styled from "styled-components";
import Carousel from "./element/Carousel";

const Intro = () => {
  return (
    <StIntro>
      <Carousel />
      <section>
        <article>
          <h1>카테고리</h1>
          <div>
            <input type="button" value="All"></input>
            <input type="button" value="분류1"></input>
            <input type="button" value="분류2"></input>
            <input type="button" value="분류3"></input>
          </div>
        </article>
        <article></article>
      </section>
    </StIntro>
  );
};

export default Intro;

const StIntro = styled.div`
  min-height: 100vh;
`;
