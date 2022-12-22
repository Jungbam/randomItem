import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { __updateComment } from "../../redux/slice/detailSlice";
import styled from "styled-components";

const UpdateInput = ({ update, commentId, itemId }) => {
  const [updateComment, setUpdateComment] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      {update ? (
        <StDiv>
          <StInput
            type="text"
            value={updateComment}
            onChange={(e) => {
              setUpdateComment(e.target.value);
            }}
            placeholder="댓글을 수정해 주세요"
          ></StInput>

          <AddButton
            onClick={(e) => {
              e.preventDefault();
              const payload = {
                commentId: commentId,
                itemId: itemId,
                content: updateComment,
              };
              dispatch(__updateComment(payload));
            }}
          >
            완료
          </AddButton>
        </StDiv>
      ) : (
        <></>
      )}
    </div>
  );
};

export default UpdateInput;
const StInput = styled.input`
  height: 40px;
  width: 550px;
  border: 2px solid rgb(0, 0, 0, 0.2);
  margin: 20px;
  border-radius: 5px;
  padding: 12px;
`;
const AddButton = styled.button`
  border: 2px solid rgb(0, 0, 0, 0.2);
  height: 40px;
  width: 120px;
  background-color: #000;
  border-radius: 5px;
  cursor: pointer;
  opacity: 0.85;
  color: #fff;
`;

const StDiv = styled.div`
  float: right;
  padding-top: 40px;
`;
