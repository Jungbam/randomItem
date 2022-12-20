

import React, { useState } from "react";
import styled from "styled-components";
const Item = () => {
  return (
    <StWrapper>

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
padding-top:30px
`
const StButton = styled.button`
width:100px;
height:30px;
margin-right:40px;

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


