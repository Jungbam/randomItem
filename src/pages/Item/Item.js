

import React from "react";
import styled from "styled-components";
const Item = () => {
  return (
    <StWrapper>
      <StSearch>
        <form>
          <StSearchInput placeholder="검색 창" />
        </form>
      </StSearch>

      <StNav>
        <StCategory>카테고리</StCategory>
        <StButtonWrapper>
          <StButton>ALL</StButton>
          <StButton>분류1</StButton>
          <StButton>분류2</StButton>
          <StButton>분류3</StButton>
          <StButton>분류4</StButton>
        </StButtonWrapper>
      </StNav>
      <StItemsWrapper>
        <StItems></StItems>
        <StItems></StItems>
        <StItems></StItems>
        <StItems></StItems>
        <StItems></StItems>

      </StItemsWrapper>

    </StWrapper >

  )
};

export default Item;

const StWrapper = styled.div`
width:1000px;
min-height:100vh;
border:5px solid #000;
margin:auto;
`
const StSearch = styled.div`
border:5px solid #000;
width:inherit;
height:100px;
`
const StSearchInput = styled.input`
height:50px; 
float:right;
margin:25px 50px 0;
`
const StNav = styled.div`
display:flex;
width:inherit;
height:100px;
border:5px solid #000;
`
const StCategory = styled.div`
margin:0 50px 0 50px;
line-height:100px;
`

const StButtonWrapper = styled.div`

`
const StButton = styled.button`
width:100px;
height:30px;
margin-right:40px;
/* line-height:100px; */

flex-flow:row nowrap;
justify-content:flex-start;
align-items:center;

`
const StItemsWrapper = styled.div`
border:5px solid #000;
width:inherit;
display:flex;
height:500px;
`
const StItems = styled.div`
  width:250px;
height:350px;
border:5px solid #000;
  `


