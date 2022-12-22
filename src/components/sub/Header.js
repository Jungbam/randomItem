//! <<<<<<< feature/intro
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
// import Button from '../ui/Button';
import Modal from '../ui/Modal';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { logOut } from '../../redux/slice/userSlice';
import { initSearch, searchItem } from '../../redux/slice/itemSlice';

const Header = () => {
  const [signInModalOpen, setSignInModalOpen] = useState(false);
  const [signUpModalOpen, setSignUpModalOpen] = useState(false);

  const { isLogedIn } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();
  const { imageSrc, email, nickname } = useSelector((state) => state.userSlice.user);

  const closeSignInModal = () => {
    setSignInModalOpen(false);
  };

  const showSignInModal = () => {
    setSignInModalOpen(true);
  };

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
      setSearchValue('');
      navigate('/item');
    }
  };

  const enterHandler = (e) => {
    dispatch(searchItem(searchValue));
    setSearchValue('');
    navigate('/item');
  };

  return (
    <StHeader>
      <SearchWrapper className="search_wrapper">
        <input
          placeholder="Search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyUp={enterKeyHandler}></input>
        <span className="search-logo">
          <label>검색</label>
          <img src="./image/search.jpg" onClick={enterHandler} />
        </span>
      </SearchWrapper>
      <StNav>
        <div className="router">
          <Router>
            <NavLink to="/">
              <div onClick={() => dispatch(initSearch())}>RanTem</div>
            </NavLink>
            <NavLink to="/item">
              <div onClick={() => dispatch(initSearch())}>ITEM</div>
            </NavLink>
          </Router>
        </div>

        <BtnWrapper>
          {false ? (
            <StProfile>
              <StImg src={imageSrc} />
              <StUserWrapper>
                <div>{email}</div>
                <div>{nickname}</div>
              </StUserWrapper>
              <button onClick={removeCookie}>로그아웃</button>
            </StProfile>
          ) : (
            <div className="btn">
              <div onClick={showSignInModal}>LOGIN</div>
              {/*! >>>>>>> feature/KoYunHyeock/CSS*/}
              <Modal modal={signInModalOpen} closeModal={closeSignInModal}>
                <SignIn />
              </Modal>

              <div onClick={showSignUpModal}>SIGNUP</div>
              <Modal modal={signUpModalOpen} closeModal={closeSignUpModal}>
                <SignUp />
              </Modal>
            </div>
          )}
        </BtnWrapper>
      </StNav>
    </StHeader>
  );
};

export default Header;

const SearchWrapper = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  height: 35px;

  background-color: #000000c2;
  text-align: end;

  input {
    width: 275px;
    height: 30px;
    line-height: 30px;

    margin-top: 2px;
    padding: 0 5px 0 5px;

    border: 0;

    font-size: 12px;
    color: #fff;
    caret-color: #fff;

    background: #0000004d;
    outline: none;
  }

  .search-logo {
    cursor: pointer;
    margin-right: 1%;
    width: 30px;
    height: 30px;

    img {
      width: 30px;
      height: 30px;
      margin-top: 2px;
    }

    label {
      display: none;
    }
  }
`;

const StHeader = styled.div`
  margin: 0 auto;
  width: 100%;
  /* width: 1300px; */
`;

const StNav = styled.nav`
  width: 99%;
  height: 55px;

  display: flex;
  justify-content: space-between;

  .router {
    div {
      display: inline-block;
      font: 12px 'Roboto', 'Nanum Gothic', '맑은 고딕', 'Malgun Gothic', sans-serif;
      font-size: 15px;
      font-weight: 700;
      line-height: 50px;
      color: #353535 !important;
      margin-left: 17px;
    }
  }

  .btn {
    div {
      cursor: pointer;
      display: inline-block;

      font-family: 'Roboto', 'Nanum Gothic', '맑은 고딕', 'Malgun Gothic', sans-serif;
      font-size: 12px;

      line-height: 50px;
      margin-left: 20px;

      color: #000 !important;

      :hover {
        color: #888888 !important;
      }

      :active {
        color: #000 !important;
      }
    }
  }
`;

const Router = styled.div`
  text-align: left;
  div {
    margin: 0 15px;
  }
`;

const BtnWrapper = styled.div`
  margin-right: 20px;
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
  font-family: 'EF_jejudoldam';
  animation: ${animateBox} 1s cubic-bezier(0.215, 0.61, 0.355, 1) both;
`;

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
