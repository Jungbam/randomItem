import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Card from "../../components/ui/Card";
import Label from "../../components/ui/Label";
import { getMain, searchLabel } from "../../redux/slice/itemSlice";
import Carousel from "./element/Carousel";
import Loading from "../LoadingPage/Loading";
import ErrorPage from "../ErrorPage/ErrorPage";

const Intro = () => {
  const dispatch = useDispatch();
  const { error, isloading, famous, search } = useSelector(
    (state) => state.itemSlice
  );
  useEffect(() => {
    dispatch(getMain());
  }, [dispatch]);

  console.log(search);
  const onClickLabelHandler = (e) => {
    dispatch(searchLabel(e.target.value));
  };
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
                <Label onClick={onClickLabelHandler} value={"겨울"}>
                  All
                </Label>
                <Label onClick={onClickLabelHandler} value={"겨울"}>
                  분류 1
                </Label>
                <Label onClick={onClickLabelHandler} value={"겨울"}>
                  분류 2
                </Label>
                <Label onClick={onClickLabelHandler} value={"겨울"}>
                  분류 3
                </Label>
              </StArticle>
            </StArticleCol>
            <StArticle>
              {search.length === 0
                ? famous?.map((el, i) => {
                    return <Card el={el} key={`item${i}`}></Card>;
                  })
                : search?.slice(0, 4).map((el, i) => {
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
