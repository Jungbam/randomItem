import React from "react";
import styled from "styled-components";
import Card from "../../components/ui/Card";
import Label from "../../components/ui/Label";
import Carousel from "./element/Carousel";

const Intro = () => {
  return (
    <StIntro>
      <Carousel />
      <section>
        <StArticleCol>
          <h1>카테고리</h1>
          <StArticle>
            <Label>All</Label>
            <Label>분류 1</Label>
            <Label>분류 2</Label>
            <Label>분류 3</Label>
          </StArticle>
        </StArticleCol>
        <StArticle>
          <Card />
          <Card />
          <Card />
          <Card />
        </StArticle>
      </section>
    </StIntro>
  );
};

export default Intro;

const StIntro = styled.div`
  min-height: 90vh;
  height: 100%;
  margin-bottom: 15px;
`;
const StArticle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4px;
`;
const StArticleCol = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4px;
`;
