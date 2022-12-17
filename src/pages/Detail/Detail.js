import React from "react";

import styled from "styled-components";
import CommentForm from "../../components/CommentForm";

const Detail = () => {
  return (
    <>
      <DetailWrap>
        <Topline>게시글 상세보기 페이지입니다</Topline>
        <ItemWrap>
          <TitleWrap>
            <image>여기는 사진이 들어갈 것이야</image>
          </TitleWrap>
          <Title>여기는 제목이 들어가겠지</Title>
          <Body>여기는 설명하는 게 들어올거야</Body>
        </ItemWrap>

        <ButtonWrap>
          <CommentForm />
        </ButtonWrap>
        <div>여기는 댓글이 들어갈 것이여</div>
      </DetailWrap>
    </>
  );
};

export default Detail;

const DetailWrap = styled.div`
  padding: 5%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Topline = styled.p`
  color: #616161;
  font-size: 25px;
  font-weight: 600;
`;

const TitleWrap = styled.div`
  border: 1px solid gray;
  position: relative;
  border-radius: 20px;
  background-color: white;
`;

const ItemWrap = styled.div`
  border: 1px solid gray;
  padding: 100px;
  height: 200px;
  width: 700px;
  border-radius: 20px;
  background-color: white;
`;

const Title = styled.div`
  color: black;
  font-size: 20px;
  font-weight: 300;
  padding-bottom: 30px;
`;

const Body = styled.div`
  color: #616161;
  position: relative;
  left: 150px;
  font-size: 20px;
  font-weight: 100;
  padding-bottom: 50px;
`;

const ButtonWrap = styled.div`
  padding-top: 20px;
  text-align: center;
`;
