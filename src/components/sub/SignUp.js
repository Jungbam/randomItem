import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { __postSignup } from "../../redux/slice/userSlice";

const SignUp = (closeModal) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [nickmane, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCh, setPasswordCh] = useState("");
  const [image, setImage] = useState();
  const formData = new FormData();

  //    <  이미지 업로드 formData에 담기  >
  const change = (e) => {
    setImage(formData.append("image", e.target.files[0]));
  };

  //    <  form submit  >
  const submitHandler = (e) => {
    e.preventDefault();
    formData.append("email", email);
    formData.append("nickname", nickmane);
    formData.append("password", password);
    formData.append("passwordCheck", passwordCh);

    dispatch(__postSignup(formData));
    closeModal.closeModal();
  };

  return (
    <>
      <StH1>회원가입</StH1>
      <form>
        <StInputWrapper>
          <StInput
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="이메일"
          />
          <StInput
            value={nickmane}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="닉네임"
          />
          <StInput
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호"
          />
          <StInput
            value={passwordCh}
            type="password"
            onChange={(e) => setPasswordCh(e.target.value)}
            placeholder="비밀번호 확인"
          />
        </StInputWrapper>
      </form>
      <StProfile>
        <p>프로필 사진</p>
        <StFileInput type="file" onChange={change}></StFileInput>
      </StProfile>
      <StButton onClick={submitHandler}>가입하기</StButton>
    </>
  );
};

export default SignUp;

const StH1 = styled.h1`
  padding-left: 2vw;
  position: relative;
  transform: translateY(-3vh);
  font-size: 20px;
`;
const StInputWrapper = styled.div`
  border: 2px solid rgb(0, 0, 0, 0.2);
  border-radius: 5px;
  width: 360px;
  height: 200px;
  margin: 0 0 0 20px;
  box-sizing: content-box;
  input {
    &:nth-child(4) {
      border-bottom: none;
    }
  }
`;

const StInput = styled.input`
  border: none;
  border-bottom: 2px solid rgb(0, 0, 0, 0.2);
  width: 360px;
  height: 50px;
  padding-left: 20px;
`;

const StProfile = styled.div`
  margin: 20px;
`;
const StFileInput = styled.input`
  margin-top: 20px;
`;
const StButton = styled.button`
  width: 360px;
  height: 40px;
  margin: 0 0 0 20px;
  color: #fff;
  background-color: #000;
  opacity: 0.85;
  border-radius: 5px;
`;
