import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import NewCard from "../../components/ui/NewCard";
import NewLabel from "../../components/ui/NewLabel";
import Modal from "../../components/ui/Modal";
import { getItem, initSearch, searchLabel } from "../../redux/slice/itemSlice";
import ErrorPage from "../ErrorPage/ErrorPage";
import AddItem from "../Intro/element/AddItem";

const NewItem = () => {
  const { error, last, items, search } = useSelector(
    (state) => state.itemSlice
  );
  const user = useSelector((state) => state.userSlice.user);
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const [scrolled, setScrolled] = useState(false);
  const [lastItemId, setLastItemId] = useState(0);

  const scrollHandler = useCallback(() => {
    console.log("in");
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight * 0.95
    ) {
      console.log("up");
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
            <h1>Rantem Category</h1>
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
          <FooterStArticle>
            {search.length === 0
              ? items?.map((el, i) => <NewCard key={`card${i}`} el={el} />)
              : search?.map((el, i) => <NewCard key={`card${i}`} el={el} />)}
          </FooterStArticle>
        </StItem>
      ) : (
        <></>
      )}
    </>
  );
};

export default NewItem;

const StItem = styled.div`
  margin-top: 100px;
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
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 4px;
`;

const AddItemBtn = styled.div`
  float: right;
`;

const StArticle = styled.div`
  display: flex; // inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4px;
`;

const FooterStArticle = styled.div`
  display: flex; // inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4px;
  margin-bottom: 100px;
`;
