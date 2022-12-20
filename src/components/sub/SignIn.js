import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { __postSignin, } from "../../redux/slice/userSlice";
const SignIn = () => {
  const [userEmail, setUserEmail] = useState('')
  const [userPw, setUserPw] = useState('')
  //   - req.body
  //   {
  //     email: String,
  //       password: String,
  // }
  const dispatch = useDispatch();
  const onClickHandeler = () => {
    dispatch(__postSignin({ email: userEmail, password: userPw }))
    // const cookie = new Cookies();
    // const a = cookie.get('token')


  }

  const submitHandler = (e) => {
    e.preventDefault();
    setUserEmail(userEmail);
    setUserPw(userPw);


  }

  return (
    <><form onSubmit={submitHandler}>
      <StDiv>로그인</StDiv>
      <StWrapper>
        <StLabel>이메일</StLabel>
        <input value={userEmail} onChange={(e) => setUserEmail(e.target.value)} type='email'></input>
      </StWrapper>
      <StWrapper>
        <StLabel>비밀번호</StLabel>
        <input value={userPw} onChange={(e) => setUserPw(e.target.value)} type='password'></input>
      </StWrapper>
      <StButton onClick={onClickHandeler}>로그인</StButton>
    </form>
    </>
  )
}
export default SignIn

const StDiv = styled.div`
padding-left:4vw;
position:relative;
transform:translateY(-3vh);
font-size:20px;

`
const StInput = styled.input`
border: 2px solid #000;
width:200px;
height:30px;

`
const StLabel = styled.label`
width:80px;
`
const StWrapper = styled.div`
display:flex;
margin: 0 0 20px 20px;
`
const StButton = styled.button`
width:100px;
height:40px;
margin:20px 0 0 100px;
`
