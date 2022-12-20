import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { Cookies } from "react-cookie";


const Header = () => {
  const [bool, setBool] = useState(false)
  const dispatch = useDispatch();


  const [signInModalOpen, setSignInModalOpen] = useState(false)
  //    <  모달창 state에 flase-> 모달창 닫힘  >
  const closeSignInModal = () => { setSignInModalOpen(false) }
  //    < 회원가입 버튼 click ,모달창 state-> true 모달창 열림 >
  const showSignInModal = () => { setSignInModalOpen(true) }
  //    <  로그인 모달  >
  const [signUpModalOpen, setSignUpModalOpen] = useState(false)
  const closeSignUpModal = () => { setSignUpModalOpen(false) }
  const showSignUpModal = () => { setSignUpModalOpen(true) }


  // const resultTrue = useSelector((state) => console.log("state:", state.userSlice.isLogedIn))
  const userImage = useSelector((state) => state.userSlice.user.imageSrc)
  const userEmail = useSelector((state) => state.userSlice.user.email)
  const userNickname = useSelector((state) => state.userSlice.user.nickname)

  // const beingTrue = useSelector((state) => state.userSlice.bool)
  // console.log('image:', userImage)
  // useEffect(() => { dispatch(boolIsTrue(true)) }, [useSelector])
  //  쿠키
  const cookie = new Cookies()
  cookie.get('token')

  const removeCookie = () => {
    cookie.remove('token')
    setBool(false)
  }

  return (
    <StHeader>
      <StHeaderBox>
        <StNav>
          <NavLink to="/item" style={{ textDecoration: "none" }}>
            ITEM
          </NavLink>
        </StNav>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <StTitle>RanTem</StTitle>
        </NavLink>
        <StInputBox>
          <StInput></StInput>
          <Button>Enter</Button>
        </StInputBox>
        {bool ?
          <StProfile>
            <StImg src={userImage} />
            <StUserWrapper>
              <div>{userEmail}</div>
              <div>{userNickname}</div>
            </StUserWrapper>
            <button onClick={removeCookie}>로그아웃</button>
          </StProfile>
          :
          (<div>
            <button onClick={showSignUpModal}>회원가입</button>
            {<Modal modal={signUpModalOpen} closeModal={closeSignUpModal} >
              <SignUp closeModal={closeSignUpModal} /></Modal>}
            <button onClick={showSignInModal}>로그인</button>
            {<Modal modal={signInModalOpen} closeModal={closeSignInModal} >
              <SignIn closeModal={closeSignInModal} showImage={setBool} /></Modal>
              // <SignIn closeModal={closeSignInModal} /></Modal>}
            }
          </div>)
        }
      </StHeaderBox>
    </StHeader>
  );
};

export default Header;

const StHeader = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  background-color: rgba(229, 232, 232, 0.9);
  height: 100px;
  z-index: 100;
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
  font-family: "EF_jejudoldam";
  animation: ${animateBox} 1s cubic-bezier(0.215, 0.61, 0.355, 1) both;
`;

const StHeaderBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1000px;
  height: 100%;
  margin: 0 auto;
`;
const StNav = styled.nav``;

const StInputBox = styled.div``;
const StInput = styled.input``;


const StProfile = styled.div`
display:flex;
border:2px solid #000;
background-color:inherit;
opacity:0.9;
`
const StImg = styled.img`
width:50px;
height:50px;
border-radius:50%;
`
const StUserWrapper = styled.div`
text-align:left;
margin:0 14px 0 14px;
`
