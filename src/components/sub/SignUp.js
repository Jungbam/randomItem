import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { __postSignup } from "../../redux/slice/userSlice";

const SignUp = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [nickmane, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCh, setPasswordCh] = useState("");
  const [image, setImage] = useState();
  const formData = new FormData();

  const change = (e) => {
    setImage(formData.append("image", e.target.files[0]));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    formData.append("email", email);
    formData.append("nickname", nickmane);
    formData.append("password", password);
    formData.append("passwordCheck", passwordCh);

    dispatch(__postSignup(formData));
  };

  return (
    <>
      <StDiv>회원가입</StDiv>
      <StFormWrapper>
        <form onSubmit={submitHandler}>
          <StWrapper>
            <StLabel>이메일</StLabel>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
          </StWrapper>
          <StWrapper>
            <StLabel>닉네임</StLabel>
            <input
              value={nickmane}
              onChange={(e) => setNickname(e.target.value)}
            />
          </StWrapper>
          <StWrapper>
            <StLabel>비밀번호</StLabel>
            <input
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </StWrapper>
          <StWrapper>
            <StLabel>비밀번호 확인</StLabel>
            <input
              value={passwordCh}
              type="password"
              onChange={(e) => setPasswordCh(e.target.value)}
            />
          </StWrapper>
          <StWrapper>
            <StLabel>이미지</StLabel>
            <input type="file" onChange={change} />
          </StWrapper>
          <StButton type="submit">가입하기</StButton>
        </form>
      </StFormWrapper>
    </>
  );
};

export default SignUp;

const StDiv = styled.div`
  padding-left: 2vw;
  position: relative;
  transform: translateY(-3vh);
  font-size: 20px;
`;
const StWrapper = styled.div`
  display: flex;
  margin: 0 0 20px 0;
`;
const StLabel = styled.label`
  width: 120px;
`;
const StInput = styled.input`
  border: 2px solid #000;
  display: block;
`;
const StFormWrapper = styled.div`
  padding-left: 20px;
`;
const StButton = styled.button`
  width: 150px;
  margin: 0 0 0 120px;
`;
