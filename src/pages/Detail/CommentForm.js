import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { __addComment, __deleteComment } from "../../redux/slice/detailSlice";
import UpdateInput from "./UpdateInput";

const CommentForm = ({ commentlist }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userSlice);

  const [update, setUpdate] = useState(false);
  const [updateInputDiv, setUpdateInputDiv] = useState(<></>);
  const [comment, setComment] = useState("");
  const onChangeHandler = (e) => {
    e.preventDefault();
    setComment(e.target.value);
  };
  const onsubmit = (e) => {
    e.preventDefault();
    const payload = {
      itemId: commentlist?.itemId,
      content: comment,
    };
    dispatch(__addComment(payload));
  };

  const handleDelete = (commentId) => {
    dispatch(__deleteComment(commentId));
  };

  return (
    <StCommentContainer>
      <StDiv>
        <Commentinput
          type="text"
          name="content"
          value={comment}
          placeholder="댓글을 등록하세요."
          onChange={onChangeHandler}
        />
        <AddButton onClick={onsubmit}>댓글작성</AddButton>
      </StDiv>
      <StCommentlistWraper>
        {commentlist?.Comments.map((comment, idx) => {
          return (
            <StCommentBox key={idx}>
              <StContent>{comment.content}</StContent>
              {user.isLogedIn && (
                <>
                  <StButton
                    className="rotate-in-center"
                    borderColor="red"
                    onClick={() =>
                      handleDelete({
                        commentId: comment.commentId,
                        itemId: commentlist?.itemId,
                      })
                    }
                  >
                    삭제하기
                  </StButton>
                  <StUpdateButton
                    onClick={() => {
                      setUpdate(true);
                      setUpdateInputDiv(
                        <UpdateInput
                          update={update}
                          commentId={comment.commentId}
                          itemId={commentlist?.itemId}
                        />
                      );
                    }}
                  >
                    수정
                  </StUpdateButton>
                </>
              )}
            </StCommentBox>
          );
        })}
        {updateInputDiv}
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
  float: right;
  height: 100px;
  border-bottom: 1px solid black;
  border-radius: 3px;
  margin-top: 10px;
  width: 680px;
  margin: auto;
  justify-content: center;
  padding: 30px 0px 10px 10px;
`;

const StButton = styled.button`
  border: 1px solid ${({ borderColor }) => borderColor};
  margin-left: 20px;
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
  background-color: #000;
  border-radius: 5px;
  cursor: pointer;
  opacity: 0.85;
  color: #fff;
`;

const Commentinput = styled.input`
  height: 40px;
  width: 550px;
  border: 2px solid black;
  margin: 20px;
  border-radius: 5px;
  padding: 0 12px;
  border: 2px solid rgb(0, 0, 0, 0.2);
`;
const StContent = styled.div`
  padding-top: 10px;
  float: left;
  padding-left: 40px;
`;

const StCommentlistWraper = styled.div``;
const StDiv = styled.div`
  float: right;
`;
const StUpdateButton = styled.button`
  border: 1px solid black;
  height: 40px;
  width: 120px;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
  float: right;
`;
