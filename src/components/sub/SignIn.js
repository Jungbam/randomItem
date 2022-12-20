import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { __postSignin, } from "../../redux/slice/userSlice";
import { useNavigate } from "react-router-dom";
import { logedIn } from "../../redux/slice/userSlice";
const SignIn = ({ closeModal, showImage }) => {
  const [userEmail, setUserEmail] = useState('')
  const [userPw, setUserPw] = useState('')
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //   - req.body
  //   {
  //     email: String,
  //       password: String,
  // }
  const test = () => {
    dispatch(logedIn(true))
    console.log('야뭐해?')

  }

  const submitHandler = (e) => {
    e.preventDefault();
    setUserEmail(userEmail);
    setUserPw(userPw);
    dispatch(__postSignin({ email: userEmail, password: userPw }))
    // dispatch(logedIn(true))
    navigate("/")
    closeModal()
    showImage(true)
    console.log('뭐하냐구?')

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
      <StButton type="submit" onClick={test}>로그인</StButton>

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
