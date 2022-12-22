import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import NewCard from "../../components/ui/NewCard";
import NewLabel from "../../components/ui/NewLabel";
import { getMain, searchLabel } from "../../redux/slice/itemSlice";
import Carousel from "./element/Carousel";
import Loading from "../LoadingPage/Loading";
import ErrorPage from "../ErrorPage/ErrorPage";

const Intro = () => {
  const dispatch = useDispatch();
  const { error, isloading, famous, search } = useSelector(
    (state) => state.itemSlice
  );
  // intro 페이지 카드 CSS 에만 쓸 boolean 변수
  const introBoolean = true;

  useEffect(() => {
    dispatch(getMain());
    dispatch(searchLabel("겨울"));
  }, [dispatch]);

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
          <StArticle>
            <>
              {famous?.slice(0, 4).map((el, i) => {
                return (
                  <NewCard
                    el={el}
                    key={`famous${i}`}
                    introBoolean={introBoolean}
                  ></NewCard>
                );
              })}
            </>
          </StArticle>
          <StArticleCol>
            <h1>Rantem Category</h1>
            <StArticle>
              <NewLabel onClick={onClickLabelHandler} value={"봄"}>
                봄
              </NewLabel>
              <NewLabel onClick={onClickLabelHandler} value={"여름"}>
                여름
              </NewLabel>
              <NewLabel onClick={onClickLabelHandler} value={"가을"}>
                가을
              </NewLabel>
              <NewLabel onClick={onClickLabelHandler} value={"겨울"}>
                겨울
              </NewLabel>
            </StArticle>
            <StArticle>
              {search?.slice(0, 4).map((el, i) => {
                return (
                  <NewCard
                    el={el}
                    key={`search${i}`}
                    introBoolean={introBoolean}
                  ></NewCard>
                );
              })}
            </StArticle>
          </StArticleCol>
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
    font-family: "Roboto", "Nanum Gothic", "맑은 고딕", "Malgun Gothic",
      sans-serif;
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
