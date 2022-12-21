import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import useInputItem from '../../hooks/useInputItem';
import { deleteItem, updateItem } from '../../redux/slice/itemSlice';
import styled from 'styled-components';

const NewCard = ({ el, introBoolean }) => {
  const authUser = useSelector((state) => state.itemSlice.auth);
  const dispatch = useDispatch();
  const { input, setInput, onChangeHandler } = useInputItem();
  const [update, setUpdate] = useState(false);
  console.log('introBoolean: ', introBoolean);

  useEffect(() => {
    setInput({
      title: el.title,
      price: el.price,
      content: el.content,
      category: el.category,
    });
  }, []);

  console.log('authUser: ', authUser);

  return (
    <CardWrapper>
      {el ? (
        <>
          <Image>
            <label>이미지</label>
            <img src={el.image} alt={el.title} />
          </Image>
          <Title>
            <label>상품명</label>
            {input.title}
          </Title>
          <Category>
            <label>카테고리</label>
            {input.category}
          </Category>

          {introBoolean ? (
            <>
              <Price>
                <label>가격</label>
                {input.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} 원
              </Price>
              <SalePrice>
                <label>할인가격</label>
                할인 판매가 {(input.price - input.price * 0.1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} 원
              </SalePrice>
              <div>
                <label>new</label>
                <img src="./image/new.gif"></img>
              </div>
            </>
          ) : (
            <>
              <ItemPagePrice>
                <label>가격</label>
                {input.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} 원
              </ItemPagePrice>
            </>
          )}
          {authUser ? (
            <AdminWrapper>
              <Link to={`/updateItem/${el.itemId}`}>
                <UpdateBtn>수정하기</UpdateBtn>
              </Link>
              <DeleteBtn onClick={() => dispatch(deleteItem(el.itemId))}>삭제하기</DeleteBtn>
            </AdminWrapper>
          ) : null}
        </>
      ) : null}
    </CardWrapper>
  );
};

export default NewCard;

// authUser button
const AdminWrapper = styled.div`
  div {
    margin: 10px 5px;
  }
`;
const UpdateBtn = styled.div`
  cursor: pointer;
  display: inline-flex;
  font-size: 12px;
  color: #350cff;
  font-weight: bold;

  text-decoration: none;

  :hover {
    color: #7f67f6;
  }

  :active {
    color: #350cff;
  }
`;

const DeleteBtn = styled.div`
  cursor: pointer;
  display: inline-flex;
  font-size: 12px;
  color: #ff0505;
  font-weight: bold;

  :hover {
    color: #ff5151;
  }

  :active {
    color: #ff0505;
  }
`;

// Card
const Image = styled.div`
  cursor: pointer;
`;

const CardWrapper = styled.div`
  margin: 0 3px 90px 3px;

  label {
    display: none;
  }
`;

const Title = styled.div`
  cursor: pointer;
  font-size: 11px;
  color: #333333;
  font-weight: bold;

  margin-top: 7px;
  margin-bottom: 7px;

  :hover {
    color: #888888;
  }

  :active {
    color: #333333;
  }
`;
const Category = styled.div`
  font-size: 11px;
  color: #888888;
  font-weight: bold;

  margin-bottom: 7px;
`;
const Price = styled.div`
  font-size: 11px;
  color: #333333;
  font-weight: bold;

  text-decoration: line-through;
`;

const ItemPagePrice = styled.div`
  font-size: 11px;
  color: #333333;
  font-weight: bold;
`;

const SalePrice = styled.div`
  font-size: 12px;
  color: #ff0505;
  font-weight: bold;

  margin-bottom: 7px;
`;
