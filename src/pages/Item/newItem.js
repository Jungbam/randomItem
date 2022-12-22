import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
// import Card from '../../components/ui/Card';
// import Label from '../../components/ui/Label';
import NewCard from '../../components/ui/NewCard';
import NewLabel from '../../components/ui/NewLabel';
import Modal from '../../components/ui/Modal';
import { getItem } from '../../redux/slice/itemSlice';
import ErrorPage from '../ErrorPage/ErrorPage';
import AddItem from '../Intro/element/AddItem';

const NewItem = () => {
  const { auth, error, last, items } = useSelector((state) => state.itemSlice);

  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const [itemList, setItemList] = useState([]);
  const [lastItemId, setLastItemId] = useState(0);

  const scrollHandler = useCallback(() => {
    if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight * 0.95) {
      setLastItemId(itemList[itemList.length - 1]?.itemId);
    }
  }, [itemList]);

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [scrollHandler]);

  useEffect(() => {
    const getData = async () => {
      const res = await dispatch(getItem(lastItemId));
      const result = await res.payload.data;
      setItemList((prev) => [...prev, ...result]);
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
            <h1>Rantem Category</h1>
            <StArticle>
              <NewLabel>All</NewLabel>
              <NewLabel>봄</NewLabel>
              <NewLabel>여름</NewLabel>
              <NewLabel>가을</NewLabel>
              <NewLabel>겨울</NewLabel>
            </StArticle>
            {false ? (
              <AddItemBtn>
                <NewLabel onClick={closeModal}>상품 추가하기</NewLabel>
              </AddItemBtn>
            ) : null}
            <Modal modal={modal} closeModal={closeModal}>
              <AddItem closeModal={closeModal} />
            </Modal>
          </StArticleCol>
          <FooterStArticle>
            {itemList?.map((el, i) => (
              <NewCard key={`card${i}`} el={el} />
            ))}
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
    font-family: 'Roboto', 'Nanum Gothic', '맑은 고딕', 'Malgun Gothic', sans-serif;
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
