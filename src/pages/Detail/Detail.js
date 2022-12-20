import React, { useEffect } from "react";
import styled from "styled-components";
import CommentForm from "./CommentForm";
import { useDispatch, useSelector } from "react-redux";
import { __getItems } from "../../redux/slice/detailSlice";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  // console.log("id", id);
  const dispatch = useDispatch();

  const { isLoading, detail } = useSelector((state) => state.itemlist);
  console.log("state", detail.title);

  useEffect(() => {
    dispatch(__getItems(id));
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩중....</div>;
  }

  return (
    <>
      <DetailWrap>
        <Topline>게시글 상세보기 페이지입니다</Topline>
        <ItemWrap>
          <div>
            <Titleset>{detail.title}</Titleset>
            <Body>{detail.content}</Body>
            <Price>{detail.price}</Price>
          </div>
        </ItemWrap>
        <CommentForm />
      </DetailWrap>
    </>
  );
};

export default Detail;

const DetailWrap = styled.div`
  width: 1000;
  min-height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Topline = styled.p`
  color: #616161;
  font-size: 25px;
  font-weight: 600;
`;

const ItemWrap = styled.div`
  border: 1px solid gray;
  display: flex;
  height: 450px;
  width: 1000px;
  border-radius: 20px;
  background-color: white;
`;

const Titleset = styled.div`
  color: black;
  font-size: 40px;
  font-weight: 300;
  padding-bottom: 30px;
  right: 300px;
`;

const Body = styled.div`
  color: #616161;
  position: relative;
  left: 150px;
  font-size: 20px;
  font-weight: 100;
  padding-bottom: 50px;
`;

const Price = styled.div`
  color: #616161;
  position: relative;
  left: 150px;
  font-size: 20px;
  font-weight: 100;
  padding-bottom: 50px;
`;

const TitleWrap = styled.div`
  color: #616161;
  position: relative;
  left: 150px;
  font-size: 20px;
  font-weight: 100;
  padding-bottom: 50px;
`;
