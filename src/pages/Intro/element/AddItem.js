import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Button from "../../../components/ui/Button";
import useInputItem from "../../../hooks/useInputItem";
import { postItem } from "../../../redux/slice/itemSlice";

const AddItem = ({ closeModal }) => {
  const { input, onChangeHandler, reset } = useInputItem();
  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const itmeElement = {
      ...input,
    };
    dispatch(postItem(itmeElement));
    closeModal();
    reset();
  };
  const onCloseModal = (e) => {
    e.preventDefault();
    closeModal();
    reset();
  };
  return (
    <StContainer onSubmit={onSubmitHandler}>
      <label>제목</label>
      <input name="title" value={input.title} onChange={onChangeHandler} />
      <label>가격</label>
      <input name="price" value={input.price} onChange={onChangeHandler} />
      <label>내용</label>
      <input name="content" value={input.content} onChange={onChangeHandler} />
      <label>카테고리</label>
      <select onChange={onChangeHandler} name="category" value={input.category}>
        <option value="0">선택</option>
        <option value="1">분류1</option>
        <option value="2">분류2</option>
        <option value="3">분류3</option>
      </select>
      <StButtonWrapper>
        <Button onClick={onCloseModal}>취소</Button>
        <Button>추가하기</Button>
      </StButtonWrapper>
    </StContainer>
  );
};

export default AddItem;

const StContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

const StButtonWrapper = styled.div`
  display: flex;
`;
