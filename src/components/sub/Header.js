import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { logOut } from "../../redux/slice/userSlice";
import { initSearch, searchItem } from "../../redux/slice/itemSlice";

const Header = () => {
  const { isLogedIn } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const { imageSrc, email, nickname } = useSelector(
    (state) => state.userSlice.user
  );

  const [signInModalOpen, setSignInModalOpen] = useState(false);

  const closeSignInModal = () => {
    setSignInModalOpen(false);
  };

  const showSignInModal = () => {
    setSignInModalOpen(true);
  };

  const [signUpModalOpen, setSignUpModalOpen] = useState(false);
  const closeSignUpModal = () => {
    setSignUpModalOpen(false);
  };

  const showSignUpModal = () => {
    setSignUpModalOpen(true);
  };

  const removeCookie = () => {
    dispatch(logOut());
  };

  const enterKeyHandler = (e) => {
    if (window.event.keyCode === 13) {
      dispatch(searchItem(searchValue));
      setSearchValue("");
      navigate("/item");
    }
  };

  const enterHandler = (e) => {
    dispatch(searchItem(searchValue));
    setSearchValue("");
    navigate("/item");
  };

  return (
    <StHeader>
      <StHeaderBox>
        <StNav>
          <NavLink to="/item" style={{ textDecoration: "none" }}>
            <p onClick={() => dispatch(initSearch())}>ITEM</p>
          </NavLink>
        </StNav>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <StTitle onClick={() => dispatch(initSearch())}>RanTem</StTitle>
        </NavLink>
        <StInputBox>
          <StInput
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyUp={enterKeyHandler}
          ></StInput>
          <Button onClick={enterHandler}>Enter</Button>
        </StInputBox>
        {isLogedIn ? (
          <StProfile>
            <StImg src={imageSrc} />
            <StUserWrapper>
              <div>{email}</div>
              <div>{nickname}</div>
            </StUserWrapper>
            <button onClick={removeCookie}>로그아웃</button>
          </StProfile>
        ) : (
          <div>
            <button onClick={showSignUpModal}>회원가입</button>
            {
              <Modal modal={signUpModalOpen} closeModal={closeSignUpModal}>
                <SignUp closeModal={closeSignUpModal} />
              </Modal>
            }
            <button onClick={showSignInModal}>로그인</button>
            {
              <Modal modal={signInModalOpen} closeModal={closeSignInModal}>
                <SignIn closeModal={closeSignInModal} />
              </Modal>
              // <SignIn closeModal={closeSignInModal} /></Modal>}
            }
          </div>
        )}
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
  display: flex;
  border: 2px solid #000;
  background-color: inherit;
  opacity: 0.9;
`;
const StImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const StUserWrapper = styled.div`
  text-align: left;
  margin: 0 14px 0 14px;
`;
