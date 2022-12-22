import React, { useEffect } from "react";
import styled from "styled-components";
import CommentForm from "./CommentForm";
import { useDispatch, useSelector } from "react-redux";
import { __getItems } from "../../redux/slice/detailSlice";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { isLoading, detail } = useSelector((state) => state.detailSlice);

  const item = detail?.data;

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
          <img src={item?.image} alt={item?.title} />
          <StDivCol>
            <Titleset>{item?.title}</Titleset>
            <StDivColDetail>
              <Body>{item?.content}</Body>
              <StPrice>
                <StPriceSpan>{item?.price}</StPriceSpan>
                <StP>원</StP>
              </StPrice>
            </StDivColDetail>
          </StDivCol>
        </ItemWrap>
        <CommentForm commentlist={item} />
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
  gap: 100px;
`;

const Titleset = styled.div`
  color: black;
  font-size: 40px;
  font-weight: 300;
  padding-bottom: 30px;
`;

const StDivCol = styled.div`
  display: flex;
  flex-direction: column;
`;

const Body = styled.div`
  color: #616161;
  position: relative;
  font-size: 20px;
  font-weight: 100;
  padding-bottom: 50px;
`;

const StDivColDetail = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5px;
  border-radius: 12px;
  height: 60%;
  background-color: #eee;
`;

const StP = styled.span`
  line-height: 70px;
  font-size: 20px;
`;
const StPriceSpan = styled.span`
  font-size: 50px;
`;
const StPrice = styled.div`
  color: #616161;
  font-size: 40px;
  position: relative;
  left: 150px;
  font-size: 20px;
  font-weight: 100;
  padding-bottom: 50px;
`;
