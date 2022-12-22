import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import useInputItem from "../../hooks/useInputItem";
import { deleteItem } from "../../redux/slice/itemSlice";
import styled from "styled-components";

const NewCard = ({ el }) => {
  const user = useSelector((state) => state.userSlice.user);
  const dispatch = useDispatch();
  const { input, setInput, onChangeHandler } = useInputItem();
  const [eventSale, setEventSale] = useState(true);

  const styles = { eventSale };

  useEffect(() => {
    let setTime = setInterval(() => {
      setEventSale((prev) => !prev);
    }, 200);
    return () => {
      return clearInterval(setTime);
    };
  }, []);
  return (
    <CardWrapper>
      {el ? (
        <>
          <Image>
            <label>이미지</label>
            <img src={el.image} alt={el.title} />
          </Image>
          <Title>
            <NavLink
              to={`/detail/${el.itemId}`}
              style={{ textDecoration: "none" }}
            >
              <label>상품명</label>
              {el.title}
            </NavLink>
          </Title>
          <Category>
            <label>카테고리</label>
            {el.category}
          </Category>
          <>
            <ItemPagePrice>
              <label>가격</label>
              {el.price}원
            </ItemPagePrice>
          </>
          {user?.admin ? (
            <AdminWrapper>
              <NavLink
                to={`/updateItem/${el.itemId}`}
                style={{ textDecoration: "none" }}
              >
                <UpdateBtn>수정하기</UpdateBtn>
              </NavLink>
              <DeleteBtn onClick={() => dispatch(deleteItem(el.itemId))}>
                삭제하기
              </DeleteBtn>
            </AdminWrapper>
          ) : null}
        </>
      ) : null}
    </CardWrapper>
  );
};

export default NewCard;

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

const Img = styled.div`
  img {
    width: 45px;
    height: 14px;
  }

  .eventSale {
    width: 45px;
    height: 14px;
  }
`;
