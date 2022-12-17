import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Card from "../../components/ui/Card";
import Label from "../../components/ui/Label";
import { getItem } from "../../redux/slice/itemSlice";
import Carousel from "./element/Carousel";
import Modal from "../../components/ui/Modal";
import AddItem from "./element/AddItem";
import Loading from "../LoadingPage/Loading";
import ErrorPage from "../ErrorPage/ErrorPage";

const Intro = () => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const status = useSelector((state) => state);
  const { error, isloading } = useSelector((state) => state.itemSlice);
  console.log(error, isloading);

  const items = status.itemSlice.items;
  const authUser = status.itemSlice.auth;

  useEffect(() => {
    dispatch(getItem());
  }, [dispatch]);

  const closeModal = () => {
    setModal((prev) => !prev);
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
                <Label>All</Label>
                <Label>분류 1</Label>
                <Label>분류 2</Label>
                <Label>분류 3</Label>
              </StArticle>
              {authUser ? (
                <Label onClick={closeModal}>상품 추가하기</Label>
              ) : (
                <></>
              )}
              <Modal modal={modal} closeModal={closeModal}>
                <AddItem closeModal={closeModal} />
              </Modal>
            </StArticleCol>
            <StArticle>
              {items?.map((el, i) => {
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
