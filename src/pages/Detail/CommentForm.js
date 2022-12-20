import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import detailSlice, {
  __addComment,
  __deleteComment,
} from "../../redux/slice/detailSlice";
import nextId from "react-id-generator";

const CommentForm = () => {
  const id = nextId();
  const dispatch = useDispatch();
  // const [commentUpdate, setCommetUpdate] = useState({
  //   isOpen: false,
  //   detail: undefined,
  //   comment: undefined,
  // });
  const data = useSelector((state) => state);
  console.log("data", data);
  // const { detail, isLoading, error } = useSelector((state) => state);
  // console.log("detail", detail);
  // console.log("isLoading", isLoading);
  //   //input
  const [comments, setComments] = useState({
    content: "",
  });

  const onChangeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setComments({ [name]: value });
  };
  console.log("comment", comments);
  const onsubmit = () => {
    const payload = {
      comments: {
        User: { nickname: "" },
        content: "123",
      },
      itemid: 321,
    };
    console.log("payload", payload);
    dispatch(__addComment(payload));
  };

  return (
    <StCommentContainer>
      <div>
        <Commentinput
          type="text"
          name="content"
          value={comments.content}
          onChange={onChangeHandler}
        />
        <AddButton onClick={onsubmit}>댓글작성</AddButton>
      </div>
      <StCommentlistWraper>
        {/* {detail.data.comments?.map((comments, idx) => (
          <StCommentBox key={idx}>
            <StContent>{comments.content}</StContent>
            <StButton
              className="rotate-in-center"
              borderColor="red"
              // onClick={() => onDeleteComment(comment.id)}
            >
              삭제하기
            </StButton>
          </StCommentBox>
        ))} */}
      </StCommentlistWraper>
    </StCommentContainer>
  );
};

export default CommentForm;

const StCommentContainer = styled.div`
  width: 1000px;
`;

const StCommentBox = styled.div`
  border-color: black;
  height: 100px;
  border-bottom: 1px solid black;
  border-radius: 3px;
  margin-top: 10px;
  width: 680px;
  margin: auto;
  justify-content: center;
  padding: 30px 10px 10px 10px;
`;

const StButton = styled.button`
  border: 1px solid ${({ borderColor }) => borderColor};
  margin-left: 30px;
  height: 40px;
  width: 120px;
  float: right;
  justify-content: end;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
`;

const AddButton = styled.button`
  border: 1px solid black;
  height: 40px;
  width: 120px;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
`;

const Commentinput = styled.input`
  height: 40px;
  width: 500px;
  border: 2px solid black;
  margin: 20px;
  border-radius: 12px;
  padding: 0 12px;
`;
const StContent = styled.div`
  padding-top: 10px;
  float: left;
  padding-left: 40px;
`;

const StCommentlistWraper = styled.div``;
