import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Card from "../../components/ui/Card";
import Label from "../../components/ui/Label";
import { getMain } from "../../redux/slice/itemSlice";
import Carousel from "./element/Carousel";
import Loading from "../LoadingPage/Loading";
import ErrorPage from "../ErrorPage/ErrorPage";

const Intro = () => {
  const dispatch = useDispatch();
  const { error, isloading, famous } = useSelector((state) => state.itemSlice);
  console.log(error);
  useEffect(() => {
    dispatch(getMain());
  }, [dispatch]);

  return (
    <>
      {isloading ? <Loading /> : <></>}
      {!isloading && error ? <ErrorPage /> : <></>}
      {!isloading && !error ? (
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
              {famous?.map((el, i) => {
                return <Card el={el} key={`item${i}`}></Card>;
              })}
            </StArticle>
          </section>
        </StIntro>
      ) : (
        <></>
      )}
    </>
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
