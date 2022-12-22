import React, { useCallback, useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NewCard from "../../components/ui/NewCard";
import axios from "axios";
import styled from "styled-components";
import useInputItem from "../../hooks/useInputItem";
import { updateItem } from "../../redux/slice/itemSlice";
import { __getItems } from "../../redux/slice/detailSlice";

const UpdateItemPage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.detailSlice.detail.data);
  console.log(data);
  const { itemId } = useParams();
  const navigate = useNavigate();
  const [image, setImage] = useState();
  const { input, setInput, onChangeHandler } = useInputItem();

  useEffect(() => {
    dispatch(__getItems(itemId));
  }, []);

  useEffect(() => {
    setInput({
      title: data?.title,
      price: data?.price,
      content: data?.content,
      category: data?.category,
    });
    setImage(data?.image);
  }, [data]);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    const { title, price, content, category } = input;

    formData.append("title", title);
    formData.append("price", price);
    formData.append("content", content);
    formData.append("category", category);
    formData.append("image", image);

    dispatch(updateItem({ id: data?.itemId, input: formData }));
    navigate("/item");
  };

  const onChangeImages = useCallback((e) => {
    setImage(e.target.files[0]);
  }, []);

  return (
    <UpdateWrapper>
      <div className="form">
        <div>
          <Img src={data?.image} />
          <label>이미지 수정</label>
          <input type="file" name="image" onChange={onChangeImages} />
          <label>상품수정</label>

          <Section>
            <div>
              <label>상품명</label>
              <input
                className="itemName"
                type="text"
                placeholder="상품명을 수정해주세요."
                value={input.title}
                name="title"
                onChange={onChangeHandler}
              />
            </div>
            <div>
              <label>카테고리</label>
              <select
                className="itemCategory"
                onChange={onChangeHandler}
                name="category"
                value={input.category}
              >
                <option value="0">봄</option>
                <option value="1">여름</option>
                <option value="2">가을</option>
                <option value="3">겨울</option>
              </select>
            </div>
            <div>
              <textarea className="ItemContent" type="text" />
            </div>
            <div>
              <label>가격</label>
              <input
                className="itemPrice"
                type="number"
                value={input.price}
                name="price"
                onChange={onChangeHandler}
              />
              원
            </div>
          </Section>

          <Button onClick={onSubmitHandler}>수정완료</Button>
        </div>
        <div>{data ? <NewCard el={data ? data : null} /> : null}</div>
      </div>
    </UpdateWrapper>
  );
};

export default UpdateItemPage;

const Img = styled.img`
  display: block;
`;

const UploadButton = styled.div`
  display: block;
  margin: 3px auto;

  cursor: pointer;

  font-weight: bold;
  font-size: 13px;
  color: #350cff;

  margin-top: 3px;

  :hover {
    color: #7f67f6;
  }

  :active {
    color: #350cff;
  }
`;

const UpdateWrapper = styled.div`
  height: 70vw;

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

const Section = styled.div`
  .itemName {
    margin: auto;
    width: 100%;
    height: 23px;
    outline: none;

    padding: 0 5px;
  }

  .itemCategory {
    margin: auto;
    width: 100%;
    height: 23px;

    padding: 0 5px;
  }

  .ItemContent {
    width: 100%;
    height: 50px;
    outline: none;

    padding: 0 5px;
  }

  .itemPrice {
    margin-right: 2px;
    text-align: right;
    padding-right: 5px;

    width: 94%;
    height: 23px;
    outline: none;

    padding: 0 5px;
  }
`;

const Button = styled.div`
  cursor: pointer;

  font-weight: bold;
  font-size: 13px;
  color: #350cff;

  margin-top: 3px;

  :hover {
    color: #7f67f6;
  }

  :active {
    color: #350cff;
  }
`;
