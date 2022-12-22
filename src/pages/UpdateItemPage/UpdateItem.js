import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// ui
import NewCard from '../../components/ui/NewCard';
// axios
import axios from 'axios';
// styled-components
import styled from 'styled-components';
// custom hooks
import useInputItem from '../../hooks/useInputItem';

const UpdateItem = () => {
  const { itemId } = useParams();
  const [itemInfo, setItemInfo] = useState(null);
  console.log('itemInfo: ', itemInfo);
  const { input, setInput, onChangeHandler } = useInputItem();

  // 상품 상세 정보 가져오기
  useEffect(() => {
    axios
      .get(`http://koyunhyeok.shop/api/items/detail/${itemId}`)
      .then((res) => {
        const data = res.data.data;
        setItemInfo(data);
      })
      .catch((err) => {
        console.log('err: ', err);
      });
  }, []);

  useEffect(() => {
    setInput({
      title: itemInfo?.title,
      price: itemInfo?.price,
      content: itemInfo?.content,
      category: itemInfo?.category,
    });
  }, []);

  return (
    <UpdateWrapper>
      <div className="form">
        <div>
          <label>상품수정</label>
          <div>
            <label>상품명</label>
            <input type="text" />
          </div>
          <div>
            <label>카테고리</label>
            <select onChange={onChangeHandler} name="category" value={input.category}>
              <option value="0">선택</option>
              <option value="1">분류1</option>
              <option value="2">분류2</option>
              <option value="3">분류3</option>
            </select>
          </div>
          <div>
            <label>가격</label>
            <input type="number" />
          </div>
        </div>
        <div>{itemInfo ? <NewCard el={itemInfo ? itemInfo : null} /> : null}</div>
      </div>
    </UpdateWrapper>
  );
};

export default UpdateItem;

const UpdateWrapper = styled.div`
  .form {
    padding-top: 90px;
    display: flex;
    justify-content: center;
    margin: auto;
  }

  label {
    display: none;
  }
`;
