import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Header = () => {
  const [signInModalOpen, setSignInModalOpen] = useState(false)
  const closeSignInModal = () => { setSignInModalOpen(false) }
  const showSignInModal = () => { setSignInModalOpen(true) }

  const [signUpModalOpen, setSignUpModalOpen] = useState(false)
  const closeSignUpModal = () => { setSignUpModalOpen(false) }
  const showSignUpModal = () => { setSignUpModalOpen(true) }
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
        <div>사진</div>
        <div>
          <button onClick={showSignUpModal}>회원가입</button>
          {<Modal modal={signUpModalOpen} closeModal={closeSignUpModal} ><SignUp /></Modal>}
          <button onClick={showSignInModal}>로그인</button>
          {<Modal modal={signInModalOpen} closeModal={closeSignInModal} ><SignIn /></Modal>}
        </div>
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
