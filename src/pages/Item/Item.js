import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Card from "../../components/ui/Card";
import Label from "../../components/ui/Label";
import Modal from "../../components/ui/Modal";
import NewCard from "../../components/ui/NewCard";
import NewLabel from "../../components/ui/NewLabel";
import { getItem, initSearch, searchLabel } from "../../redux/slice/itemSlice";
import ErrorPage from "../ErrorPage/ErrorPage";
import AddItem from "../Intro/element/AddItem";

const Item = () => {
  const { error, last, items, search } = useSelector(
    (state) => state.itemSlice
  );
  console.log(items);
  const user = useSelector((state) => state.userSlice.user);
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

  const onClickLabelHandler = (e) => {
    dispatch(searchLabel(e.target.value));
  };

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
              <NewLabel
                onClick={() => {
                  dispatch(initSearch());
                }}
              >
                All
              </NewLabel>
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
            {user?.admin ? (
              <AddItemBtn>
                <NewLabel onClick={closeModal}>상품 추가하기</NewLabel>
              </AddItemBtn>
            ) : null}
            <Modal modal={modal} closeModal={closeModal}>
              <AddItem closeModal={closeModal} />
            </Modal>
          </StArticleCol>
          <StArticle>
            {search.length === 0
              ? items?.map((el, i) => <NewCard key={`card${i}`} el={el} />)
              : search?.map((el, i) => <NewCard key={`card${i}`} el={el} />)}
          </StArticle>
        </StItem>
      ) : (
        <></>
      )}
    </>
  );
};

export default Item;

const AddItemBtn = styled.div`
  float: right;
`;
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
