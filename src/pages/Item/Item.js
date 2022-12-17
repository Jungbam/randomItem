import React from "react";
import styled from "styled-components";
import Card from "../../components/ui/Card";
import Label from "../../components/ui/Label";
const a = [
  1, 2, 3, 4, 5, 6, 7, 7, 8, 8, 8, 87, 7, 7, 6, 6, 6, 5, 5, 65, 6, 56, 5, 65, 6,
  56, 5, 6, 56,
];
const Item = () => {
  return (
    <StItem>
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
        {a.map((el, i) => (
          <Card key={`card${i}`} />
        ))}
      </StArticle>
    </StItem>
  );
};

export default Item;

const StItem = styled.div`
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

const StSearch = styled.div`
  border: 5px solid #000;
  width: inherit;
  height: 100px;
`;
const StSearchInput = styled.input`
  height: 50px;
  float: right;
  margin: 25px 50px 0;
`;
const StNav = styled.div`
  display: flex;
  width: inherit;
  height: 100px;
  border: 5px solid #000;
`;
const StCategory = styled.div`
  margin: 0 50px 0 50px;
  line-height: 100px;
`;

const StButtonWrapper = styled.div``;
const StButton = styled.button`
  width: 100px;
  height: 30px;
  margin-right: 40px;
  /* line-height:100px; */

  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;
const StItemsWrapper = styled.div`
  border: 5px solid #000;
  width: inherit;
  display: flex;
  height: 500px;
`;
const StItems = styled.div`
  width: 250px;
  height: 350px;
  border: 5px solid #000;
`;
