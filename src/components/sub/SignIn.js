import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { useDispatch } from "react-redux";
import { __postSignin } from "../../redux/slice/userSlice";

const SignIn = ({ closeModal }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPw, setUserPw] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(__postSignin({ email: userEmail, password: userPw }));
    closeModal();
  };

  return (
    <>
      <StWellcom>Wellcom</StWellcom>
      <StTitle>RanTem</StTitle>
      <StForm>
        <StH1>로그인</StH1>
        <StWrapper>
          <StInput
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            type="email"
            placeholder="이메일"
          ></StInput>
          <StInput
            value={userPw}
            onChange={(e) => setUserPw(e.target.value)}
            type="password"
            placeholder="비밀번호"
          ></StInput>
        </StWrapper>
        <StButton onClick={submitHandler}>로그인</StButton>
      </StForm>
    </>
  );
};
export default SignIn;
const StWellcom = styled.h1`
  font-size: 54px;
  text-align: center;
  transform: translateY(-96px);
`;

const StForm = styled.form`
  transform: translateY(32%);
`;
const StH1 = styled.h1`
  padding-left: 2vw;
  position: relative;
  transform: translateY(-3vh);
  font-size: 20px;
`;
const StInput = styled.input`
  border: none;
  width: 360px;
  height: 50px;
  padding-left: 20px;
`;

const StWrapper = styled.div`
  border: 2px solid rgb(0, 0, 0, 0.2);
  border-radius: 5px;
  width: 360px;
  height: 100px;
  margin: 0 0 0 20px;

  box-sizing: content-box;
  input {
    &:nth-child(1) {
      border-bottom: 2px solid rgb(0, 0, 0, 0.2);
    }
  }
`;
const StButton = styled.button`
  width: 360px;
  height: 40px;
  margin: 20px 0 0 20px;
  color: #fff;
  background-color: #000;
  opacity: 0.85;
  border-radius: 5px;
`;

const animateBox = keyframes`
  0% {
    letter-spacing: 1em;
    transform: translateZ(400px);
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    transform: translateZ(0);
    opacity: 1;
  }
`;
const StTitle = styled.div`
  margin: 0 auto;
  font-size: 24px;
  margin-top: -40px;
  font-family: "EF_jejudoldam";
  animation: ${animateBox} 1s cubic-bezier(0.215, 0.61, 0.355, 1) both;
`;
