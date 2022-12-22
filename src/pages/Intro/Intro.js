//! <<<<<<< feature/intro
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
//! =======
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import NewCard from '../../components/ui/NewCard';
import NewLabel from '../../components/ui/NewLabel';
import { getMain } from '../../redux/slice/itemSlice';
import Carousel from './element/Carousel';
import Loading from '../LoadingPage/Loading';
import ErrorPage from '../ErrorPage/ErrorPage';

const Intro = () => {
  const dispatch = useDispatch();
  const { error, isloading, famous } = useSelector((state) => state.itemSlice);

  // intro 페이지 카드 CSS 에만 쓸 boolean 변수
  const introBoolean = true;

{/*>>>>>>> feature/KoYunHyeock/CSS*/}
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
 {/*! <<<<<<< feature/intro */}
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
{/*=======*/}
            <StArticle>
              {famous?.map((el, i) => {
                return (
                  <>
                    <NewCard el={el} key={`item${i}`} introBoolean={introBoolean}></NewCard>
                  </>
                );
              })}
{/*! >>>>>>> feature/KoYunHyeock/CSS*/}
            </StArticle>
            <StArticleCol>
              <h1>Rantem Category</h1>
              <StArticle>
                <NewLabel>봄</NewLabel>
                <NewLabel>여름</NewLabel>
                <NewLabel>가을</NewLabel>
                <NewLabel>겨울</NewLabel>
              </StArticle>
            </StArticleCol>
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
  height: 100%;
  margin-bottom: 15px;
`;

const StArticleCol = styled.div`
  h1 {
    font-family: 'Roboto', 'Nanum Gothic', '맑은 고딕', 'Malgun Gothic', sans-serif;
    font-size: 20px;
    font-weight: 600;
    color: #333;
    letter-spacing: 2px;
  }
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4px;
`;

const StArticle = styled.div`
  margin-bottom: 210px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4px;

  label {
    display: none;
  }
`;
