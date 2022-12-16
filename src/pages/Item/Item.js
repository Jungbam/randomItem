import React from "react";
import styled from "styled-components";
import Styled from "styled-components";
const Item = () => {
  return (
    <wrapper>
      <search>
        <form>
          <input placeholder="검색 창" />
        </form>
      </search>
      <nav>
        <div>카테고리</div>
        <div>
          <button>ALL</button>
          <button>분류1</button>
          <button>분류2</button>
          <button>분류3</button>
          <button>분류4</button>

        </div>
      </nav>
    </wrapper>
  )
};

export default Item;

const wrapper = styled.div`

`
const search = styled.div`
border:5px solid #000;
width:250px;
height:100px;
`
const nav = styled.div`

`
const itemsWrapper = styled.div`
border:5px solid #000;
width:850px;
height:500px;
`
