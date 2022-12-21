import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Card from "../../components/ui/Card";
import Label from "../../components/ui/Label";
import Modal from "../../components/ui/Modal";
import { getItem } from "../../redux/slice/itemSlice";
import ErrorPage from "../ErrorPage/ErrorPage";
import AddItem from "../Intro/element/AddItem";

const Item = () => {
  const { auth, error, last, items } = useSelector((state) => state.itemSlice);
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const [scrolled, setScrolled] = useState(false);
  const [lastItemId, setLastItemId] = useState(0);

  const scrollHandler = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight * 0.95
    ) {
      setLastItemId(scrolled[scrolled.length - 1]?.itemId);
    }
  }, [scrolled]);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [scrollHandler]);

  useEffect(() => {
    const getData = async () => {
      const res = await dispatch(getItem(lastItemId));
      if (res.meta.requestStatus === "fulfilled") setScrolled((prev) => !prev);
    };
    if (!last) getData();
  }, [lastItemId]);

  const closeModal = () => {
    setModal((prev) => !prev);
  };
  return (
    <>
      {error ? <ErrorPage /> : <></>}
      {!error ? (
        <StItem>
          <StArticleCol>
            <h1>카테고리</h1>
            <StArticle>
              <Label>All</Label>
              <Label>분류 1</Label>
              <Label>분류 2</Label>
              <Label>분류 3</Label>
            </StArticle>
            {auth ? <Label onClick={closeModal}>상품 추가하기</Label> : <></>}
            <Modal modal={modal} closeModal={closeModal}>
              <AddItem closeModal={closeModal} />
            </Modal>
          </StArticleCol>
          <StArticle>
            {items?.map((el, i) => (
              <Card key={`card${i}`} el={el} />
            ))}
          </StArticle>
        </StItem>
      ) : (
        <></>
      )}
    </>
  );
};

export default Item;

const StItem = styled.div`
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

const StSearch = styled.div`
  border: 5px solid #000;
  width: inherit;
  height: 100px;
`;
const StSearchInput = styled.input`
  height: 50px;
  float: right;
  margin: 25px 50px 0;
`;

const StNav = styled.div`
  display: flex;
  width: inherit;
  height: 100px;
  border: 5px solid #000;
`;
const StCategory = styled.div`
  margin: 0 50px 0 50px;
  line-height: 100px;
`;

const StButtonWrapper = styled.div``;
const StButton = styled.button`
  width: 100px;
  height: 30px;
  margin-right: 40px;
  /* line-height:100px; */

  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;
