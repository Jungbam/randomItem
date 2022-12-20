import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import useInputItem from "../../hooks/useInputItem";
import { deleteItem, updateItem } from "../../redux/slice/itemSlice";
import Label from "./Label";

const Card = ({ el }) => {
  const authUser = useSelector((state) => state.itemSlice.auth);
  const dispatch = useDispatch();
  const { input, setInput, onChangeHandler } = useInputItem();
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    setInput({
      title: el.title,
      price: el.price,
      content: el.content,
      category: el.category,
    });
  }, []);

  return (
    <StCard>
      <StHeart>
        <StIcon>♡</StIcon>
      </StHeart>
      <StImg src={el.image} alt={el.title} />
      <StLittleCard>
        {update ? (
          <>
            <label>제목</label>
            <input
              name="title"
              value={input.title}
              onChange={onChangeHandler}
            />
          </>
        ) : (
          <StH1>{el.title}</StH1>
        )}
        {update ? (
          <>
            <label>가격</label>
            <input
              name="price"
              value={input.price}
              onChange={onChangeHandler}
            />
          </>
        ) : (
          <StPrice>{el.price}</StPrice>
        )}
        {update ? (
          <>
            <label>카테고리</label>
            <select
              onChange={onChangeHandler}
              name="category"
              value={input.category}
            >
              <option value="0">선택</option>
              <option value="1">분류1</option>
              <option value="2">분류2</option>
              <option value="3">분류3</option>
            </select>
          </>
        ) : (
          <Label>분류{el.category}</Label>
        )}
        {update ? (
          <>
            <label>내용</label>
            <input
              name="content"
              value={input.content}
              onChange={onChangeHandler}
            />
          </>
        ) : (
          <></>
        )}
      </StLittleCard>
      {authUser ? (
        <StButtonBox>
          <StButton onClick={() => dispatch(deleteItem(el.itemId))}>
            삭제하기
          </StButton>

          {update ? (
            <StButton
              onClick={() => {
                dispatch(updateItem({ id: el.itemId, input }));
                setUpdate(false);
              }}
            >
              완료
            </StButton>
          ) : (
            <StButton onClick={() => setUpdate(true)}>수정하기</StButton>
          )}
        </StButtonBox>
      ) : (
        <></>
      )}
    </StCard>
  );
};

export default Card;

const StCard = styled.div`
  position: relative;
  padding: 30px;
  width: 300px;
  height: 360px;
  transform: translateY(2%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 20px;
  box-shadow: 0px 0 31px 0px rgb(0 0 0 / 10%);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: inset 0px 3px 5px rgba(255, 255, 255, 0.5),
    0px 0px 10px rgba(0, 0, 0, 0.15);
  background: linear-gradient(
    140deg,
    rgba(42, 40, 36, 0) 5%,
    rgba(33, 33, 33, 0.5) 6%,
    rgba(44, 44, 44, 0) 9%,
    rgba(66, 66, 66, 0.5) 10%,
    rgba(120, 120, 120, 0) 17%,
    rgba(180, 180, 180, 0.5) 19%,
    rgba(255, 255, 255, 0) 21%
  );
  background-size: 150%;
  background-position: right;
  transition: 1s;
  &:hover {
    background-position: left;
    color: grey;
    box-shadow: inset 0px 3px 5px rgba(255, 255, 255, 1),
      0px 0px 10px rgba(0, 0, 0, 0.25);
    transform: scale(1.2);
    z-index: 20;
  }
`;
const StHeart = styled.div`
  position: absolute;
  top: 20px;
  right: 30px;
`;
const StIcon = styled.i`
  color: #ccc;
  font-size: 3rem;
`;
const StImg = styled.img`
  width: 200px;
  width: 190px;
  border-radius: 12px;
`;
const StH1 = styled.h1`
  margin: 20px 0 0 0;
  font-size: 3rem;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  text-align: center;
  color: #4a0e60;
`;
const StPrice = styled.p`
  font-size: 2rem;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  text-align: center;
  color: #be35ab;
`;
const StLittleCard = styled.div`
  width: 70%;
`;
const StButtonBox = styled.div`
  display: flex;
  gap: 2px;
`;
const StButton = styled.button`
  border: none;
  padding: 7px 20px;
  width: 50%;
  border-radius: 10px;
  font-size: 1.2rem;
  background-image: linear-gradient(43deg, #be35ab 0%, #4a0e60 100%);
  color: white;
  cursor: pointer;
  font-weight: 600;
  box-shadow: 0px 8px 15px rgb(0 0 0 / 10%);
  &:hover {
    transform: scale(1.02);
  }
`;
