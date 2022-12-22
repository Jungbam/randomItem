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
        <div>
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
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default UpdateInput;
const StInput = styled.input`
  height: 40px;
  width: 500px;
  border: 2px solid black;
  margin: 20px;
  border-radius: 12px;
  padding: 0 12px;
`;
const AddButton = styled.button`
  border: 1px solid black;
  height: 40px;
  width: 120px;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
`;
